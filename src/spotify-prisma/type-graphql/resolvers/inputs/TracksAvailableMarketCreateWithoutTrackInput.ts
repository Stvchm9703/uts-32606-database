import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutTracksAvailableMarketInput } from "../inputs/TagCreateNestedOneWithoutTracksAvailableMarketInput";

@TypeGraphQL.InputType("TracksAvailableMarketCreateWithoutTrackInput", {
  isAbstract: true
})
export class TracksAvailableMarketCreateWithoutTrackInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutTracksAvailableMarketInput, {
    nullable: false
  })
  Tag!: TagCreateNestedOneWithoutTracksAvailableMarketInput;
}
