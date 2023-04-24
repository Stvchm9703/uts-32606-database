import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketOrderByRelationAggregateInput } from "../inputs/AlbumAvailableMarketOrderByRelationAggregateInput";
import { AlbumProduceByArtistOrderByRelationAggregateInput } from "../inputs/AlbumProduceByArtistOrderByRelationAggregateInput";
import { TrackOrderByRelationAggregateInput } from "../inputs/TrackOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AlbumOrderByWithRelationInput", {
  isAbstract: true
})
export class AlbumOrderByWithRelationInput {
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
  albumType?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  totalTracks?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  releaseDate?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  releaseDatePrecision?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  albumGroup?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  copyrights?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imageUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketOrderByRelationAggregateInput, {
    nullable: true
  })
  availableMarkets?: AlbumAvailableMarketOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistOrderByRelationAggregateInput, {
    nullable: true
  })
  Artists?: AlbumProduceByArtistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackOrderByRelationAggregateInput, {
    nullable: true
  })
  Tracks?: TrackOrderByRelationAggregateInput | undefined;
}
