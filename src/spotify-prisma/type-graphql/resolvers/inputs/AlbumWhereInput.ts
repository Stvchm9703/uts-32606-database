import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketListRelationFilter } from "../inputs/AlbumAvailableMarketListRelationFilter";
import { AlbumProduceByArtistListRelationFilter } from "../inputs/AlbumProduceByArtistListRelationFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TrackListRelationFilter } from "../inputs/TrackListRelationFilter";

@TypeGraphQL.InputType("AlbumWhereInput", {
  isAbstract: true
})
export class AlbumWhereInput {
  @TypeGraphQL.Field(_type => [AlbumWhereInput], {
    nullable: true
  })
  AND?: AlbumWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumWhereInput], {
    nullable: true
  })
  OR?: AlbumWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumWhereInput], {
    nullable: true
  })
  NOT?: AlbumWhereInput[] | undefined;

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
  albumType?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  totalTracks?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  name?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => DateTimeFilter, {
    nullable: true
  })
  releaseDate?: DateTimeFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  releaseDatePrecision?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringFilter, {
    nullable: true
  })
  albumGroup?: StringFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  copyrights?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  imageUrl?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketListRelationFilter, {
    nullable: true
  })
  availableMarkets?: AlbumAvailableMarketListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistListRelationFilter, {
    nullable: true
  })
  Artists?: AlbumProduceByArtistListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TrackListRelationFilter, {
    nullable: true
  })
  Tracks?: TrackListRelationFilter | undefined;
}
