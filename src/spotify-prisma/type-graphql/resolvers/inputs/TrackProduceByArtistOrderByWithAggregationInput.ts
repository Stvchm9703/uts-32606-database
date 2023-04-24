import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistAvgOrderByAggregateInput } from "../inputs/TrackProduceByArtistAvgOrderByAggregateInput";
import { TrackProduceByArtistCountOrderByAggregateInput } from "../inputs/TrackProduceByArtistCountOrderByAggregateInput";
import { TrackProduceByArtistMaxOrderByAggregateInput } from "../inputs/TrackProduceByArtistMaxOrderByAggregateInput";
import { TrackProduceByArtistMinOrderByAggregateInput } from "../inputs/TrackProduceByArtistMinOrderByAggregateInput";
import { TrackProduceByArtistSumOrderByAggregateInput } from "../inputs/TrackProduceByArtistSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TrackProduceByArtistOrderByWithAggregationInput", {
  isAbstract: true
})
export class TrackProduceByArtistOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trackId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  artistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TrackProduceByArtistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TrackProduceByArtistAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TrackProduceByArtistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TrackProduceByArtistMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TrackProduceByArtistSumOrderByAggregateInput | undefined;
}
