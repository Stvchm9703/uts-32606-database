import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Album } from "../../../models/Album";
import { AlbumProduceByArtist } from "../../../models/AlbumProduceByArtist";
import { Artist } from "../../../models/Artist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumProduceByArtist)
export class AlbumProduceByArtistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Album, {
    nullable: false
  })
  async Album(@TypeGraphQL.Root() albumProduceByArtist: AlbumProduceByArtist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Album> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.findUniqueOrThrow({
      where: {
        albumId_artistId: {
          albumId: albumProduceByArtist.albumId,
          artistId: albumProduceByArtist.artistId,
        },
      },
    }).Album({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Artist, {
    nullable: false
  })
  async Artist(@TypeGraphQL.Root() albumProduceByArtist: AlbumProduceByArtist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Artist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.findUniqueOrThrow({
      where: {
        albumId_artistId: {
          albumId: albumProduceByArtist.albumId,
          artistId: albumProduceByArtist.artistId,
        },
      },
    }).Artist({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
