import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstAlbumAvailableMarketOrThrowArgs } from "./args/FindFirstAlbumAvailableMarketOrThrowArgs";
import { AlbumAvailableMarket } from "../../../models/AlbumAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumAvailableMarket)
export class FindFirstAlbumAvailableMarketOrThrowResolver {
  @TypeGraphQL.Query(_returns => AlbumAvailableMarket, {
    nullable: true
  })
  async findFirstAlbumAvailableMarketOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstAlbumAvailableMarketOrThrowArgs): Promise<AlbumAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
