import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneAlbumAvailableMarketArgs } from "./args/CreateOneAlbumAvailableMarketArgs";
import { AlbumAvailableMarket } from "../../../models/AlbumAvailableMarket";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumAvailableMarket)
export class CreateOneAlbumAvailableMarketResolver {
  @TypeGraphQL.Mutation(_returns => AlbumAvailableMarket, {
    nullable: false
  })
  async createOneAlbumAvailableMarket(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
