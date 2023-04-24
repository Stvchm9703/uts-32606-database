import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AlbumAvailableMarket } from "../../../models/AlbumAvailableMarket";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { Tag } from "../../../models/Tag";
import { TracksAvailableMarket } from "../../../models/TracksAvailableMarket";
import { TagAlbumAvailableMarketArgs } from "./args/TagAlbumAvailableMarketArgs";
import { TagArtistInGenresArgs } from "./args/TagArtistInGenresArgs";
import { TagTracksAvailableMarketArgs } from "./args/TagTracksAvailableMarketArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Tag)
export class TagRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [AlbumAvailableMarket], {
    nullable: false
  })
  async AlbumAvailableMarket(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TagAlbumAvailableMarketArgs): Promise<AlbumAvailableMarket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tag.findUniqueOrThrow({
      where: {
        id: tag.id,
      },
    }).AlbumAvailableMarket({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TracksAvailableMarket], {
    nullable: false
  })
  async TracksAvailableMarket(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TagTracksAvailableMarketArgs): Promise<TracksAvailableMarket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tag.findUniqueOrThrow({
      where: {
        id: tag.id,
      },
    }).TracksAvailableMarket({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ArtistInGenres], {
    nullable: false
  })
  async ArtistInGenres(@TypeGraphQL.Root() tag: Tag, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TagArtistInGenresArgs): Promise<ArtistInGenres[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tag.findUniqueOrThrow({
      where: {
        id: tag.id,
      },
    }).ArtistInGenres({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
