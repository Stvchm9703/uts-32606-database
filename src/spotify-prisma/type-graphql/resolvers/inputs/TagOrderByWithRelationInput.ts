import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketOrderByRelationAggregateInput } from "../inputs/AlbumAvailableMarketOrderByRelationAggregateInput";
import { ArtistInGenresOrderByRelationAggregateInput } from "../inputs/ArtistInGenresOrderByRelationAggregateInput";
import { TracksAvailableMarketOrderByRelationAggregateInput } from "../inputs/TracksAvailableMarketOrderByRelationAggregateInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TagOrderByWithRelationInput", {
  isAbstract: true
})
export class TagOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  id?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  code?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  type?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  name?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketOrderByRelationAggregateInput, {
    nullable: true
  })
  AlbumAvailableMarket?: AlbumAvailableMarketOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketOrderByRelationAggregateInput, {
    nullable: true
  })
  TracksAvailableMarket?: TracksAvailableMarketOrderByRelationAggregateInput | undefined;

  @TypeGraphQL.Field(_type => ArtistInGenresOrderByRelationAggregateInput, {
    nullable: true
  })
  ArtistInGenres?: ArtistInGenresOrderByRelationAggregateInput | undefined;
}
