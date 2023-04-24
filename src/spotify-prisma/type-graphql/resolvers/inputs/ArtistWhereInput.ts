import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistListRelationFilter } from "../inputs/AlbumProduceByArtistListRelationFilter";
import { ArtistInGenresListRelationFilter } from "../inputs/ArtistInGenresListRelationFilter";
import { ArtistOnFollowingListRelationFilter } from "../inputs/ArtistOnFollowingListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TrackProduceByArtistListRelationFilter } from "../inputs/TrackProduceByArtistListRelationFilter";

@TypeGraphQL.InputType("ArtistWhereInput", {
  isAbstract: true
})
export class ArtistWhereInput {
  @TypeGraphQL.Field(_type => [ArtistWhereInput], {
    nullable: true
  })
  AND?: ArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistWhereInput], {
    nullable: true
  })
  OR?: ArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [ArtistWhereInput], {
    nullable: true
  })
  NOT?: ArtistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  id?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  createdAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  updatedAt?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  uid?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  popularity?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  imageUrl?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresListRelationFilter, {
    nullable: true
  })
  Genres?: ArtistInGenresListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistListRelationFilter, {
    nullable: true
  })
  TrackProduceByArtist?: TrackProduceByArtistListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistListRelationFilter, {
    nullable: true
  })
  AlbumProduceByArtist?: AlbumProduceByArtistListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingListRelationFilter, {
    nullable: true
  })
  Followers?: ArtistOnFollowingListRelationFilter | undefined;
}
