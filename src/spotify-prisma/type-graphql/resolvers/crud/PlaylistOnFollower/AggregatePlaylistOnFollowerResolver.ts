import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePlaylistOnFollowerArgs } from "./args/AggregatePlaylistOnFollowerArgs";
import { PlaylistOnFollower } from "../../../models/PlaylistOnFollower";
import { AggregatePlaylistOnFollower } from "../../outputs/AggregatePlaylistOnFollower";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => PlaylistOnFollower)
export class AggregatePlaylistOnFollowerResolver {
  @TypeGraphQL.Query(_returns => AggregatePlaylistOnFollower, {
    nullable: false
  })
  async aggregatePlaylistOnFollower(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlaylistOnFollowerArgs): Promise<AggregatePlaylistOnFollower> {
    return getPrismaFromContext(ctx).playlistOnFollower.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
