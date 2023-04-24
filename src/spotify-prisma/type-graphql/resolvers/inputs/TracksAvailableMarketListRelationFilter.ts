import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketWhereInput } from "../inputs/TracksAvailableMarketWhereInput";

@TypeGraphQL.InputType("TracksAvailableMarketListRelationFilter", {
  isAbstract: true
})
export class TracksAvailableMarketListRelationFilter {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereInput, {
    nullable: true
  })
  every?: TracksAvailableMarketWhereInput | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereInput, {
    nullable: true
  })
  some?: TracksAvailableMarketWhereInput | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereInput, {
    nullable: true
  })
  none?: TracksAvailableMarketWhereInput | undefined;
}
