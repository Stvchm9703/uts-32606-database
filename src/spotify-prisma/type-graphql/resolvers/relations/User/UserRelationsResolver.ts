import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { Playlist } from "../../../models/Playlist";
import { PlaylistOnFollower } from "../../../models/PlaylistOnFollower";
import { User } from "../../../models/User";
import { UserFollowPlaylistsArgs } from "./args/UserFollowPlaylistsArgs";
import { UserFollowingArtistsArgs } from "./args/UserFollowingArtistsArgs";
import { UserPlaylistArgs } from "./args/UserPlaylistArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => User)
export class UserRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [Playlist], {
    nullable: false
  })
  async Playlist(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserPlaylistArgs): Promise<Playlist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).Playlist({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PlaylistOnFollower], {
    nullable: false
  })
  async FollowPlaylists(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserFollowPlaylistsArgs): Promise<PlaylistOnFollower[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).FollowPlaylists({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ArtistOnFollowing], {
    nullable: false
  })
  async FollowingArtists(@TypeGraphQL.Root() user: User, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UserFollowingArtistsArgs): Promise<ArtistOnFollowing[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).user.findUniqueOrThrow({
      where: {
        id: user.id,
      },
    }).FollowingArtists({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
