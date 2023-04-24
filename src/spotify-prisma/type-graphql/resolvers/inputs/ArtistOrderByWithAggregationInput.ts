import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistAvgOrderByAggregateInput } from "../inputs/ArtistAvgOrderByAggregateInput";
import { ArtistCountOrderByAggregateInput } from "../inputs/ArtistCountOrderByAggregateInput";
import { ArtistMaxOrderByAggregateInput } from "../inputs/ArtistMaxOrderByAggregateInput";
import { ArtistMinOrderByAggregateInput } from "../inputs/ArtistMinOrderByAggregateInput";
import { ArtistSumOrderByAggregateInput } from "../inputs/ArtistSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArtistOrderByWithAggregationInput", {
  isAbstract: true
})
export class ArtistOrderByWithAggregationInput {
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

  @TypeGraphQL.Field(_type => ArtistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ArtistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ArtistAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ArtistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ArtistMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ArtistSumOrderByAggregateInput | undefined;
}
