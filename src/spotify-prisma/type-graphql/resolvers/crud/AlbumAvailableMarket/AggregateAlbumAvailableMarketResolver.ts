import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAlbumAvailableMarketArgs } from "./args/AggregateAlbumAvailableMarketArgs";
import { AlbumAvailableMarket } from "../../../models/AlbumAvailableMarket";
import { AggregateAlbumAvailableMarket } from "../../outputs/AggregateAlbumAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumAvailableMarket)
export class AggregateAlbumAvailableMarketResolver {
  @TypeGraphQL.Query(_returns => AggregateAlbumAvailableMarket, {
    nullable: false
  })
  async aggregateAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAlbumAvailableMarketArgs): Promise<AggregateAlbumAvailableMarket> {
    return getPrismaFromContext(ctx).albumAvailableMarket.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
