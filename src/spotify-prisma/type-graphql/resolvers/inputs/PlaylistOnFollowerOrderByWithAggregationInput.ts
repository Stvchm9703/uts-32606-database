import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerAvgOrderByAggregateInput } from "../inputs/PlaylistOnFollowerAvgOrderByAggregateInput";
import { PlaylistOnFollowerCountOrderByAggregateInput } from "../inputs/PlaylistOnFollowerCountOrderByAggregateInput";
import { PlaylistOnFollowerMaxOrderByAggregateInput } from "../inputs/PlaylistOnFollowerMaxOrderByAggregateInput";
import { PlaylistOnFollowerMinOrderByAggregateInput } from "../inputs/PlaylistOnFollowerMinOrderByAggregateInput";
import { PlaylistOnFollowerSumOrderByAggregateInput } from "../inputs/PlaylistOnFollowerSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("PlaylistOnFollowerOrderByWithAggregationInput", {
  isAbstract: true
})
export class PlaylistOnFollowerOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  playlistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: PlaylistOnFollowerCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: PlaylistOnFollowerAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: PlaylistOnFollowerMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: PlaylistOnFollowerMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: PlaylistOnFollowerSumOrderByAggregateInput | undefined;
}
