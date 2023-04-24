import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput } from "../inputs/TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput";

@TypeGraphQL.InputType("TracksAvailableMarketUpdateWithoutTagInput", {
  isAbstract: true
})
export class TracksAvailableMarketUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput, {
    nullable: true
  })
  Track?: TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput | undefined;
}
