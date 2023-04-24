import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTracksAvailableMarketArgs } from "./args/FindUniqueTracksAvailableMarketArgs";
import { TracksAvailableMarket } from "../../../models/TracksAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksAvailableMarket)
export class FindUniqueTracksAvailableMarketResolver {
  @TypeGraphQL.Query(_returns => TracksAvailableMarket, {
    nullable: true
  })
  async tracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTracksAvailableMarketArgs): Promise<TracksAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
