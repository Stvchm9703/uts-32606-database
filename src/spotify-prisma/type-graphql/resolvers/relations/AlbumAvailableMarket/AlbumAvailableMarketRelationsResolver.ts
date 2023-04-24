import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Album } from "../../../models/Album";
import { AlbumAvailableMarket } from "../../../models/AlbumAvailableMarket";
import { Tag } from "../../../models/Tag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumAvailableMarket)
export class AlbumAvailableMarketRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Album, {
    nullable: false
  })
  async Album(@TypeGraphQL.Root() albumAvailableMarket: AlbumAvailableMarket, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Album> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.findUniqueOrThrow({
      where: {
        albumId_tagId: {
          albumId: albumAvailableMarket.albumId,
          tagId: albumAvailableMarket.tagId,
        },
      },
    }).Album({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false
  })
  async Tag(@TypeGraphQL.Root() albumAvailableMarket: AlbumAvailableMarket, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Tag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumAvailableMarket.findUniqueOrThrow({
      where: {
        albumId_tagId: {
          albumId: albumAvailableMarket.albumId,
          tagId: albumAvailableMarket.tagId,
        },
      },
    }).Tag({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
