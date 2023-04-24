import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTracksAvailableMarketOrThrowArgs } from "./args/FindUniqueTracksAvailableMarketOrThrowArgs";
import { TracksAvailableMarket } from "../../../models/TracksAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksAvailableMarket)
export class FindUniqueTracksAvailableMarketOrThrowResolver {
  @TypeGraphQL.Query(_returns => TracksAvailableMarket, {
    nullable: true
  })
  async getTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTracksAvailableMarketOrThrowArgs): Promise<TracksAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
