import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneAlbumAvailableMarketArgs } from "./args/UpdateOneAlbumAvailableMarketArgs";
import { AlbumAvailableMarket } from "../../../models/AlbumAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumAvailableMarket)
export class UpdateOneAlbumAvailableMarketResolver {
  @TypeGraphQL.Mutation(_returns => AlbumAvailableMarket, {
    nullable: true
  })
  async updateOneAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
