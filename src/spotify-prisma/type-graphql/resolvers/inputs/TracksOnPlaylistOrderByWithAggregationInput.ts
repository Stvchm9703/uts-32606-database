import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistAvgOrderByAggregateInput } from "../inputs/TracksOnPlaylistAvgOrderByAggregateInput";
import { TracksOnPlaylistCountOrderByAggregateInput } from "../inputs/TracksOnPlaylistCountOrderByAggregateInput";
import { TracksOnPlaylistMaxOrderByAggregateInput } from "../inputs/TracksOnPlaylistMaxOrderByAggregateInput";
import { TracksOnPlaylistMinOrderByAggregateInput } from "../inputs/TracksOnPlaylistMinOrderByAggregateInput";
import { TracksOnPlaylistSumOrderByAggregateInput } from "../inputs/TracksOnPlaylistSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TracksOnPlaylistOrderByWithAggregationInput", {
  isAbstract: true
})
export class TracksOnPlaylistOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  playlistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trackId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: TracksOnPlaylistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: TracksOnPlaylistAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: TracksOnPlaylistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: TracksOnPlaylistMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: TracksOnPlaylistSumOrderByAggregateInput | undefined;
}
