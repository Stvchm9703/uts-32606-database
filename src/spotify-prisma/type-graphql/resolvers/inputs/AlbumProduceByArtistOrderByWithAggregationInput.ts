import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistAvgOrderByAggregateInput } from "../inputs/AlbumProduceByArtistAvgOrderByAggregateInput";
import { AlbumProduceByArtistCountOrderByAggregateInput } from "../inputs/AlbumProduceByArtistCountOrderByAggregateInput";
import { AlbumProduceByArtistMaxOrderByAggregateInput } from "../inputs/AlbumProduceByArtistMaxOrderByAggregateInput";
import { AlbumProduceByArtistMinOrderByAggregateInput } from "../inputs/AlbumProduceByArtistMinOrderByAggregateInput";
import { AlbumProduceByArtistSumOrderByAggregateInput } from "../inputs/AlbumProduceByArtistSumOrderByAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("AlbumProduceByArtistOrderByWithAggregationInput", {
  isAbstract: true
})
export class AlbumProduceByArtistOrderByWithAggregationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  albumId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  artistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCountOrderByAggregateInput, {
    nullable: true
  })
  _count?: AlbumProduceByArtistCountOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistAvgOrderByAggregateInput, {
    nullable: true
  })
  _avg?: AlbumProduceByArtistAvgOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistMaxOrderByAggregateInput, {
    nullable: true
  })
  _max?: AlbumProduceByArtistMaxOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistMinOrderByAggregateInput, {
    nullable: true
  })
  _min?: AlbumProduceByArtistMinOrderByAggregateInput | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistSumOrderByAggregateInput, {
    nullable: true
  })
  _sum?: AlbumProduceByArtistSumOrderByAggregateInput | undefined;
}
