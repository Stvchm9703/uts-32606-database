import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTracksAvailableMarketArgs } from "./args/AggregateTracksAvailableMarketArgs";
import { TracksAvailableMarket } from "../../../models/TracksAvailableMarket";
import { AggregateTracksAvailableMarket } from "../../outputs/AggregateTracksAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksAvailableMarket)
export class AggregateTracksAvailableMarketResolver {
  @TypeGraphQL.Query(_returns => AggregateTracksAvailableMarket, {
    nullable: false
  })
  async aggregateTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTracksAvailableMarketArgs): Promise<AggregateTracksAvailableMarket> {
    return getPrismaFromContext(ctx).tracksAvailableMarket.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
