import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackCreateNestedOneWithoutAvailableMarketsInput } from "../inputs/TrackCreateNestedOneWithoutAvailableMarketsInput";

@TypeGraphQL.InputType("TracksAvailableMarketCreateWithoutTagInput", {
  isAbstract: true
})
export class TracksAvailableMarketCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => TrackCreateNestedOneWithoutAvailableMarketsInput, {
    nullable: false
  })
  Track!: TrackCreateNestedOneWithoutAvailableMarketsInput;
}
