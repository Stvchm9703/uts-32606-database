import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTracksAvailableMarketArgs } from "./args/UpsertOneTracksAvailableMarketArgs";
import { TracksAvailableMarket } from "../../../models/TracksAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksAvailableMarket)
export class UpsertOneTracksAvailableMarketResolver {
  @TypeGraphQL.Mutation(_returns => TracksAvailableMarket, {
    nullable: false
  })
  async upsertOneTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTracksAvailableMarketArgs): Promise<TracksAvailableMarket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
