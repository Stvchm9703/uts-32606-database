import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";

@TypeGraphQL.InputType("TracksAvailableMarketScalarWhereInput", {
  isAbstract: true
})
export class TracksAvailableMarketScalarWhereInput {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarWhereInput], {
    nullable: true
  })
  AND?: TracksAvailableMarketScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarWhereInput], {
    nullable: true
  })
  OR?: TracksAvailableMarketScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarWhereInput], {
    nullable: true
  })
  NOT?: TracksAvailableMarketScalarWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  tagId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  trackId?: IntFilter | undefined;
}
