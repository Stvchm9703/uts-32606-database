import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyPlaylistOnFollowerArgs } from "./args/FindManyPlaylistOnFollowerArgs";
import { PlaylistOnFollower } from "../../../models/PlaylistOnFollower";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlaylistOnFollower)
export class FindManyPlaylistOnFollowerResolver {
  @TypeGraphQL.Query(_returns => [PlaylistOnFollower], {
    nullable: false
  })
  async playlistOnFollowers(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyPlaylistOnFollowerArgs): Promise<PlaylistOnFollower[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
