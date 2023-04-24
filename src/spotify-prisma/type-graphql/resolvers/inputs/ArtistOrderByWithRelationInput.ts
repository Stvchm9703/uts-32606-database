import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistOrderByRelationAggregateInput } from "../inputs/AlbumProduceByArtistOrderByRelationAggregateInput";
import { ArtistInGenresOrderByRelationAggregateInput } from "../inputs/ArtistInGenresOrderByRelationAggregateInput";
import { ArtistOnFollowingOrderByRelationAggregateInput } from "../inputs/ArtistOnFollowingOrderByRelationAggregateInput";
import { TrackProduceByArtistOrderByRelationAggregateInput } from "../inputs/TrackProduceByArtistOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArtistOrderByWithRelationInput", {
  isAbstract: true
})
export class ArtistOrderByWithRelationInput {
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
  popularity?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imageUrl?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresOrderByRelationAggregateInput, {
    nullable: true
  })
  Genres?: ArtistInGenresOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistOrderByRelationAggregateInput, {
    nullable: true
  })
  TrackProduceByArtist?: TrackProduceByArtistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistOrderByRelationAggregateInput, {
    nullable: true
  })
  AlbumProduceByArtist?: AlbumProduceByArtistOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingOrderByRelationAggregateInput, {
    nullable: true
  })
  Followers?: ArtistOnFollowingOrderByRelationAggregateInput | undefined;
}
