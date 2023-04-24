import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("AlbumAvailableMarketScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class AlbumAvailableMarketScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: AlbumAvailableMarketScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: AlbumAvailableMarketScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: AlbumAvailableMarketScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  albumId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  tagId?: IntWithAggregatesFilter | undefined;
}
