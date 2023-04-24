import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketCreateWithoutTagInput } from "../inputs/TracksAvailableMarketCreateWithoutTagInput";
import { TracksAvailableMarketWhereUniqueInput } from "../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketCreateOrConnectWithoutTagInput", {
  isAbstract: true
})
export class TracksAvailableMarketCreateOrConnectWithoutTagInput {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: TracksAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateWithoutTagInput, {
    nullable: false
  })
  create!: TracksAvailableMarketCreateWithoutTagInput;
}
