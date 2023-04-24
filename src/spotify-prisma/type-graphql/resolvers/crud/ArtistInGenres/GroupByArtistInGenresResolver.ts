import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByArtistInGenresArgs } from "./args/GroupByArtistInGenresArgs";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { ArtistInGenresGroupBy } from "../../outputs/ArtistInGenresGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInGenres)
export class GroupByArtistInGenresResolver {
  @TypeGraphQL.Query(_returns => [ArtistInGenresGroupBy], {
    nullable: false
  })
  async groupByArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByArtistInGenresArgs): Promise<ArtistInGenresGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
