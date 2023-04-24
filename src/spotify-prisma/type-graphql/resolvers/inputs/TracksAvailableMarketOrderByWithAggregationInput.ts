import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketAvgOrderByAggregateInput } from "../inputs/TracksAvailableMarketAvgOrderByAggregateInput";
import { TracksAvailableMarketCountOrderByAggregateInput } from "../inputs/TracksAvailableMarketCountOrderByAggregateInput";
import { TracksAvailableMarketMaxOrderByAggregateInput } from "../inputs/TracksAvailableMarketMaxOrderByAggregateInput";
import { TracksAvailableMarketMinOrderByAggregateInput } from "../inputs/TracksAvailableMarketMinOrderByAggregateInput";
import { TracksAvailableMarketSumOrderByAggregateInput } from "../inputs/TracksAvailableMarketSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TracksAvailableMarketOrderByWithAggregationInput", {
  isAbstract: true
})
export class TracksAvailableMarketOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trackId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TracksAvailableMarketCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TracksAvailableMarketAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TracksAvailableMarketMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TracksAvailableMarketMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TracksAvailableMarketSumOrderByAggregateInput | undefined;
}
