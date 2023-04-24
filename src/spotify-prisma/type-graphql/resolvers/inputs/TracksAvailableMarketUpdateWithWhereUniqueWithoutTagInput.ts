import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketUpdateWithoutTagInput } from "../inputs/TracksAvailableMarketUpdateWithoutTagInput";
import { TracksAvailableMarketWhereUniqueInput } from "../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => TracksAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: TracksAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateWithoutTagInput, {
    nullable: false
  })
  data!: TracksAvailableMarketUpdateWithoutTagInput;
}
