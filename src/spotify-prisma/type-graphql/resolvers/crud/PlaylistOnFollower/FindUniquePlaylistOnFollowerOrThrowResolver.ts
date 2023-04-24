import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniquePlaylistOnFollowerOrThrowArgs } from "./args/FindUniquePlaylistOnFollowerOrThrowArgs";
import { PlaylistOnFollower } from "../../../models/PlaylistOnFollower";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlaylistOnFollower)
export class FindUniquePlaylistOnFollowerOrThrowResolver {
  @TypeGraphQL.Query(_returns => PlaylistOnFollower, {
    nullable: true
  })
  async getPlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniquePlaylistOnFollowerOrThrowArgs): Promise<PlaylistOnFollower | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
