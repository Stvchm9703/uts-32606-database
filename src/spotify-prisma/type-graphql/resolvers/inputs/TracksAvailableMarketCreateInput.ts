import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutTracksAvailableMarketInput } from "../inputs/TagCreateNestedOneWithoutTracksAvailableMarketInput";
import { TrackCreateNestedOneWithoutAvailableMarketsInput } from "../inputs/TrackCreateNestedOneWithoutAvailableMarketsInput";

@TypeGraphQL.InputType("TracksAvailableMarketCreateInput", {
  isAbstract: true
})
export class TracksAvailableMarketCreateInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTracksAvailableMarketInput, {
    nullable: false
  })
  Tag!: TagCreateNestedOneWithoutTracksAvailableMarketInput;

  @TypeGraphQL.Field(_type => TrackCreateNestedOneWithoutAvailableMarketsInput, {
    nullable: false
  })
  Track!: TrackCreateNestedOneWithoutAvailableMarketsInput;
}
