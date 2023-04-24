import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumOrderByWithRelationInput } from "../inputs/AlbumOrderByWithRelationInput";
import { TrackProduceByArtistOrderByRelationAggregateInput } from "../inputs/TrackProduceByArtistOrderByRelationAggregateInput";
import { TracksAvailableMarketOrderByRelationAggregateInput } from "../inputs/TracksAvailableMarketOrderByRelationAggregateInput";
import { TracksOnPlaylistOrderByRelationAggregateInput } from "../inputs/TracksOnPlaylistOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TrackOrderByWithRelationInput", {
  isAbstract: true
})
export class TrackOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  createdAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  updatedAt?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  uid?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  discNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  durationMs?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  explicit?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  popularity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  previewUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trackNumber?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  isLocal?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  albumId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketOrderByRelationAggregateInput, {
    nullable: true
  })
  availableMarkets?: TracksAvailableMarketOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistOrderByRelationAggregateInput, {
    nullable: true
  })
  Artists?: TrackProduceByArtistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistOrderByRelationAggregateInput, {
    nullable: true
  })
  InPlaylist?: TracksOnPlaylistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumOrderByWithRelationInput, {
    nullable: true
  })
  Album?: AlbumOrderByWithRelationInput | undefined;
}
