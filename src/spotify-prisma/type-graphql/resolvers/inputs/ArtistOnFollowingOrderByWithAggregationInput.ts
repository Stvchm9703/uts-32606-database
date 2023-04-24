import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistOnFollowingAvgOrderByAggregateInput } from "../inputs/ArtistOnFollowingAvgOrderByAggregateInput";
import { ArtistOnFollowingCountOrderByAggregateInput } from "../inputs/ArtistOnFollowingCountOrderByAggregateInput";
import { ArtistOnFollowingMaxOrderByAggregateInput } from "../inputs/ArtistOnFollowingMaxOrderByAggregateInput";
import { ArtistOnFollowingMinOrderByAggregateInput } from "../inputs/ArtistOnFollowingMinOrderByAggregateInput";
import { ArtistOnFollowingSumOrderByAggregateInput } from "../inputs/ArtistOnFollowingSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArtistOnFollowingOrderByWithAggregationInput", {
  isAbstract: true
})
export class ArtistOnFollowingOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  artistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  userId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ArtistOnFollowingCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ArtistOnFollowingAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ArtistOnFollowingMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ArtistOnFollowingMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistOnFollowingSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ArtistOnFollowingSumOrderByAggregateInput | undefined;
}
