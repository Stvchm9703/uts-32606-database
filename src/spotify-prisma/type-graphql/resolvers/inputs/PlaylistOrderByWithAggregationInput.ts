import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistAvgOrderByAggregateInput } from "../inputs/PlaylistAvgOrderByAggregateInput";
import { PlaylistCountOrderByAggregateInput } from "../inputs/PlaylistCountOrderByAggregateInput";
import { PlaylistMaxOrderByAggregateInput } from "../inputs/PlaylistMaxOrderByAggregateInput";
import { PlaylistMinOrderByAggregateInput } from "../inputs/PlaylistMinOrderByAggregateInput";
import { PlaylistSumOrderByAggregateInput } from "../inputs/PlaylistSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlaylistOrderByWithAggregationInput", {
  isAbstract: true
})
export class PlaylistOrderByWithAggregationInput {
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
  collaborative?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  description?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  public?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  snapshotId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  primaryColor?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tracksIds?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  ownerId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  imagesId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlaylistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlaylistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PlaylistAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlaylistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlaylistMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PlaylistSumOrderByAggregateInput | undefined;
}
