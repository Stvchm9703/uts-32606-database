import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistInGenresAvgOrderByAggregateInput } from "../inputs/ArtistInGenresAvgOrderByAggregateInput";
import { ArtistInGenresCountOrderByAggregateInput } from "../inputs/ArtistInGenresCountOrderByAggregateInput";
import { ArtistInGenresMaxOrderByAggregateInput } from "../inputs/ArtistInGenresMaxOrderByAggregateInput";
import { ArtistInGenresMinOrderByAggregateInput } from "../inputs/ArtistInGenresMinOrderByAggregateInput";
import { ArtistInGenresSumOrderByAggregateInput } from "../inputs/ArtistInGenresSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("ArtistInGenresOrderByWithAggregationInput", {
  isAbstract: true
})
export class ArtistInGenresOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  artistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  tagId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: ArtistInGenresCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: ArtistInGenresAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: ArtistInGenresMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: ArtistInGenresMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: ArtistInGenresSumOrderByAggregateInput | undefined;
}
