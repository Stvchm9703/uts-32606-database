import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumRelationFilter } from "../inputs/AlbumRelationFilter";
import { BoolFilter } from "../inputs/BoolFilter";
import { DateTimeFilter } from "../inputs/DateTimeFilter";
import { IntFilter } from "../inputs/IntFilter";
import { IntNullableFilter } from "../inputs/IntNullableFilter";
import { StringFilter } from "../inputs/StringFilter";
import { StringNullableFilter } from "../inputs/StringNullableFilter";
import { TrackProduceByArtistListRelationFilter } from "../inputs/TrackProduceByArtistListRelationFilter";
import { TracksAvailableMarketListRelationFilter } from "../inputs/TracksAvailableMarketListRelationFilter";
import { TracksOnPlaylistListRelationFilter } from "../inputs/TracksOnPlaylistListRelationFilter";

@TypeGraphQL.InputType("TrackWhereInput", {
  isAbstract: true
})
export class TrackWhereInput {
  @TypeGraphQL.Field(_type => [TrackWhereInput], {
    nullable: true
  })
  AND?: TrackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackWhereInput], {
    nullable: true
  })
  OR?: TrackWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackWhereInput], {
    nullable: true
  })
  NOT?: TrackWhereInput[] | undefined;

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

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  discNumber?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  durationMs?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  explicit?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  popularity?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => StringNullableFilter, {
    nullable: true
  })
  previewUrl?: StringNullableFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  trackNumber?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => BoolFilter, {
    nullable: true
  })
  isLocal?: BoolFilter | undefined;

  @TypeGraphQL.Field(_type => IntNullableFilter, {
    nullable: true
  })
  albumId?: IntNullableFilter | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketListRelationFilter, {
    nullable: true
  })
  availableMarkets?: TracksAvailableMarketListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistListRelationFilter, {
    nullable: true
  })
  Artists?: TrackProduceByArtistListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistListRelationFilter, {
    nullable: true
  })
  InPlaylist?: TracksOnPlaylistListRelationFilter | undefined;

  @TypeGraphQL.Field(_type => AlbumRelationFilter, {
    nullable: true
  })
  Album?: AlbumRelationFilter | undefined;
}
