import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput } from "../inputs/TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput";
import { TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput } from "../inputs/TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput";

@TypeGraphQL.InputType("TracksAvailableMarketUpdateInput", {
  isAbstract: true
})
export class TracksAvailableMarketUpdateInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput, {
    nullable: true
  })
  Tag?: TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput | undefined;

  @TypeGraphQL.Field(_type => TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput, {
    nullable: true
  })
  Track?: TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput | undefined;
}
