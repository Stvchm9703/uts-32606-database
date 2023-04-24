import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumRelationFilter } from "../inputs/AlbumRelationFilter";
import { ArtistRelationFilter } from "../inputs/ArtistRelationFilter";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("AlbumProduceByArtistWhereInput", {
  isAbstract: true
})
export class AlbumProduceByArtistWhereInput {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistWhereInput], {
    nullable: true
  })
  AND?: AlbumProduceByArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistWhereInput], {
    nullable: true
  })
  OR?: AlbumProduceByArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistWhereInput], {
    nullable: true
  })
  NOT?: AlbumProduceByArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  albumId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  artistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => AlbumRelationFilter, {
    nullable: true
  })
  Album?: AlbumRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistRelationFilter, {
    nullable: true
  })
  Artist?: ArtistRelationFilter | undefined;
}
