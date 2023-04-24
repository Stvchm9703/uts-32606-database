import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOnePlaylistOnFollowerArgs } from "./args/CreateOnePlaylistOnFollowerArgs";
import { PlaylistOnFollower } from "../../../models/PlaylistOnFollower";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlaylistOnFollower)
export class CreateOnePlaylistOnFollowerResolver {
  @TypeGraphQL.Mutation(_returns => PlaylistOnFollower, {
    nullable: false
  })
  async createOnePlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOnePlaylistOnFollowerArgs): Promise<PlaylistOnFollower> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlistOnFollower.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
