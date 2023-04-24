import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackAvgOrderByAggregateInput } from "../inputs/TrackAvgOrderByAggregateInput";
import { TrackCountOrderByAggregateInput } from "../inputs/TrackCountOrderByAggregateInput";
import { TrackMaxOrderByAggregateInput } from "../inputs/TrackMaxOrderByAggregateInput";
import { TrackMinOrderByAggregateInput } from "../inputs/TrackMinOrderByAggregateInput";
import { TrackSumOrderByAggregateInput } from "../inputs/TrackSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TrackOrderByWithAggregationInput", {
  isAbstract: true
})
export class TrackOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => TrackCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TrackCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TrackAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TrackMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TrackMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TrackSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TrackSumOrderByAggregateInput | undefined;
}
