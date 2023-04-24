import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutTracksAvailableMarketInput } from "../inputs/TagCreateWithoutTracksAvailableMarketInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateOrConnectWithoutTracksAvailableMarketInput", {
  isAbstract: true
})
export class TagCreateOrConnectWithoutTracksAvailableMarketInput {
  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: false
  })
  where!: TagWhereUniqueInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutTracksAvailableMarketInput, {
    nullable: false
  })
  create!: TagCreateWithoutTracksAvailableMarketInput;
}
