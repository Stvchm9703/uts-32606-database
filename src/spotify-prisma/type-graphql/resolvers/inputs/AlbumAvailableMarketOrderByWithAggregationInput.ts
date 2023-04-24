import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketAvgOrderByAggregateInput } from "../inputs/AlbumAvailableMarketAvgOrderByAggregateInput";
import { AlbumAvailableMarketCountOrderByAggregateInput } from "../inputs/AlbumAvailableMarketCountOrderByAggregateInput";
import { AlbumAvailableMarketMaxOrderByAggregateInput } from "../inputs/AlbumAvailableMarketMaxOrderByAggregateInput";
import { AlbumAvailableMarketMinOrderByAggregateInput } from "../inputs/AlbumAvailableMarketMinOrderByAggregateInput";
import { AlbumAvailableMarketSumOrderByAggregateInput } from "../inputs/AlbumAvailableMarketSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AlbumAvailableMarketOrderByWithAggregationInput", {
  isAbstract: true
})
export class AlbumAvailableMarketOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  albumId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AlbumAvailableMarketCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AlbumAvailableMarketAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AlbumAvailableMarketMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AlbumAvailableMarketMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AlbumAvailableMarketSumOrderByAggregateInput | undefined;
}
