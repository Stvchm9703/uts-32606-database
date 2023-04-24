import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutTracksAvailableMarketInput } from "../inputs/TagCreateOrConnectWithoutTracksAvailableMarketInput";
import { TagCreateWithoutTracksAvailableMarketInput } from "../inputs/TagCreateWithoutTracksAvailableMarketInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagCreateNestedOneWithoutTracksAvailableMarketInput", {
  isAbstract: true
})
export class TagCreateNestedOneWithoutTracksAvailableMarketInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutTracksAvailableMarketInput, {
    nullable: true
  })
  create?: TagCreateWithoutTracksAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTracksAvailableMarketInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutTracksAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;
}
