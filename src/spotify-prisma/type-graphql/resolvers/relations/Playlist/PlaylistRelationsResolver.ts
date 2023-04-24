import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Playlist } from "../../../models/Playlist";
import { PlaylistOnFollower } from "../../../models/PlaylistOnFollower";
import { TracksOnPlaylist } from "../../../models/TracksOnPlaylist";
import { User } from "../../../models/User";
import { PlaylistFollowersArgs } from "./args/PlaylistFollowersArgs";
import { PlaylistTracksArgs } from "./args/PlaylistTracksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Playlist)
export class PlaylistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TracksOnPlaylist], {
    nullable: false
  })
  async tracks(@TypeGraphQL.Root() playlist: Playlist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PlaylistTracksArgs): Promise<TracksOnPlaylist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlist.findUniqueOrThrow({
      where: {
        id: playlist.id,
      },
    }).tracks({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async owner(@TypeGraphQL.Root() playlist: Playlist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlist.findUniqueOrThrow({
      where: {
        id: playlist.id,
      },
    }).owner({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [PlaylistOnFollower], {
    nullable: false
  })
  async followers(@TypeGraphQL.Root() playlist: Playlist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: PlaylistFollowersArgs): Promise<PlaylistOnFollower[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlist.findUniqueOrThrow({
      where: {
        id: playlist.id,
      },
    }).followers({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
