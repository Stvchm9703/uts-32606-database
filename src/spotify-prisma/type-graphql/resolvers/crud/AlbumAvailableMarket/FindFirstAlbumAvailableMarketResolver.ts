import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAlbumAvailableMarketArgs } from "./args/FindFirstAlbumAvailableMarketArgs";
import { AlbumAvailableMarket } from "../../../models/AlbumAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumAvailableMarket)
export class FindFirstAlbumAvailableMarketResolver {
  @TypeGraphQL.Query(_returns => AlbumAvailableMarket, {
    nullable: true
  })
  async findFirstAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
