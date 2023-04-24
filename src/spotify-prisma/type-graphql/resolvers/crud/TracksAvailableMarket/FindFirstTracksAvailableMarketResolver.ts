import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTracksAvailableMarketArgs } from "./args/FindFirstTracksAvailableMarketArgs";
import { TracksAvailableMarket } from "../../../models/TracksAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksAvailableMarket)
export class FindFirstTracksAvailableMarketResolver {
  @TypeGraphQL.Query(_returns => TracksAvailableMarket, {
    nullable: true
  })
  async findFirstTracksAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTracksAvailableMarketArgs): Promise<TracksAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksAvailableMarket.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
