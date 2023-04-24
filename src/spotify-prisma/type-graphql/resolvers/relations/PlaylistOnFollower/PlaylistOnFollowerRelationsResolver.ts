import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Playlist } from "../../../models/Playlist";
import { PlaylistOnFollower } from "../../../models/PlaylistOnFollower";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlaylistOnFollower)
export class PlaylistOnFollowerRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Playlist, {
    nullable: false
  })
  async Playlist(@TypeGraphQL.Root() playlistOnFollower: PlaylistOnFollower, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Playlist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findUniqueOrThrow({
      where: {
        playlistId_userId: {
          playlistId: playlistOnFollower.playlistId,
          userId: playlistOnFollower.userId,
        },
      },
    }).Playlist({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() playlistOnFollower: PlaylistOnFollower, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findUniqueOrThrow({
      where: {
        playlistId_userId: {
          playlistId: playlistOnFollower.playlistId,
          userId: playlistOnFollower.userId,
        },
      },
    }).User({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
