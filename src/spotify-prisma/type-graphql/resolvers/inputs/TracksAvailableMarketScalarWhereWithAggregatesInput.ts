import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntWithAggregatesFilter } from "../inputs/IntWithAggregatesFilter";

@TypeGraphQL.InputType("TracksAvailableMarketScalarWhereWithAggregatesInput", {
  isAbstract: true
})
export class TracksAvailableMarketScalarWhereWithAggregatesInput {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarWhereWithAggregatesInput], {
    nullable: true
  })
  AND?: TracksAvailableMarketScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarWhereWithAggregatesInput], {
    nullable: true
  })
  OR?: TracksAvailableMarketScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarWhereWithAggregatesInput], {
    nullable: true
  })
  NOT?: TracksAvailableMarketScalarWhereWithAggregatesInput[] | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  tagId?: IntWithAggregatesFilter | undefined;

  @TypeGraphQL.Field(_type => IntWithAggregatesFilter, {
    nullable: true
  })
  trackId?: IntWithAggregatesFilter | undefined;
}
