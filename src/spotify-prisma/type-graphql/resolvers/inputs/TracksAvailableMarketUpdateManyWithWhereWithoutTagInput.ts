import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketScalarWhereInput } from "../inputs/TracksAvailableMarketScalarWhereInput";
import { TracksAvailableMarketUpdateManyMutationInput } from "../inputs/TracksAvailableMarketUpdateManyMutationInput";

@TypeGraphQL.InputType("TracksAvailableMarketUpdateManyWithWhereWithoutTagInput", {
  isAbstract: true
})
export class TracksAvailableMarketUpdateManyWithWhereWithoutTagInput {
  @TypeGraphQL.Field(_type => TracksAvailableMarketScalarWhereInput, {
    nullable: false
  })
  where!: TracksAvailableMarketScalarWhereInput;

  @TypeGraphQL.Field(_type => TracksAvailableMarketUpdateManyMutationInput, {
    nullable: false
  })
  data!: TracksAvailableMarketUpdateManyMutationInput;
}
