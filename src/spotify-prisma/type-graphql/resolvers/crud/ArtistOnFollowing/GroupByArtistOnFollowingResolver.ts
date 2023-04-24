import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByArtistOnFollowingArgs } from "./args/GroupByArtistOnFollowingArgs";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { ArtistOnFollowingGroupBy } from "../../outputs/ArtistOnFollowingGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistOnFollowing)
export class GroupByArtistOnFollowingResolver {
  @TypeGraphQL.Query(_returns => [ArtistOnFollowingGroupBy], {
    nullable: false
  })
  async groupByArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByArtistOnFollowingArgs): Promise<ArtistOnFollowingGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
