import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPlaylistOnFollowerOrThrowArgs } from "./args/FindFirstPlaylistOnFollowerOrThrowArgs";
import { PlaylistOnFollower } from "../../../models/PlaylistOnFollower";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlaylistOnFollower)
export class FindFirstPlaylistOnFollowerOrThrowResolver {
  @TypeGraphQL.Query(_returns => PlaylistOnFollower, {
    nullable: true
  })
  async findFirstPlaylistOnFollowerOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPlaylistOnFollowerOrThrowArgs): Promise<PlaylistOnFollower | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
