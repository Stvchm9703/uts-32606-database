import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutTracksAvailableMarketInput } from "../inputs/TagCreateWithoutTracksAvailableMarketInput";
import { TagUpdateWithoutTracksAvailableMarketInput } from "../inputs/TagUpdateWithoutTracksAvailableMarketInput";

@TypeGraphQL.InputType("TagUpsertWithoutTracksAvailableMarketInput", {
  isAbstract: true
})
export class TagUpsertWithoutTracksAvailableMarketInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutTracksAvailableMarketInput, {
    nullable: false
  })
  update!: TagUpdateWithoutTracksAvailableMarketInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutTracksAvailableMarketInput, {
    nullable: false
  })
  create!: TagCreateWithoutTracksAvailableMarketInput;
}
