import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvgOrderByAggregateInput } from "../inputs/AlbumAvgOrderByAggregateInput";
import { AlbumCountOrderByAggregateInput } from "../inputs/AlbumCountOrderByAggregateInput";
import { AlbumMaxOrderByAggregateInput } from "../inputs/AlbumMaxOrderByAggregateInput";
import { AlbumMinOrderByAggregateInput } from "../inputs/AlbumMinOrderByAggregateInput";
import { AlbumSumOrderByAggregateInput } from "../inputs/AlbumSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AlbumOrderByWithAggregationInput", {
  isAbstract: true
})
export class AlbumOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => AlbumCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AlbumCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AlbumAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AlbumMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AlbumMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AlbumSumOrderByAggregateInput | undefined;
}
