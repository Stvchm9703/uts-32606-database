import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateOrConnectWithoutTracksAvailableMarketInput } from "../inputs/TagCreateOrConnectWithoutTracksAvailableMarketInput";
import { TagCreateWithoutTracksAvailableMarketInput } from "../inputs/TagCreateWithoutTracksAvailableMarketInput";
import { TagUpdateWithoutTracksAvailableMarketInput } from "../inputs/TagUpdateWithoutTracksAvailableMarketInput";
import { TagUpsertWithoutTracksAvailableMarketInput } from "../inputs/TagUpsertWithoutTracksAvailableMarketInput";
import { TagWhereUniqueInput } from "../inputs/TagWhereUniqueInput";

@TypeGraphQL.InputType("TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput", {
  isAbstract: true
})
export class TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput {
  @TypeGraphQL.Field(_type => TagCreateWithoutTracksAvailableMarketInput, {
    nullable: true
  })
  create?: TagCreateWithoutTracksAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagCreateOrConnectWithoutTracksAvailableMarketInput, {
    nullable: true
  })
  connectOrCreate?: TagCreateOrConnectWithoutTracksAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagUpsertWithoutTracksAvailableMarketInput, {
    nullable: true
  })
  upsert?: TagUpsertWithoutTracksAvailableMarketInput | undefined;

  @TypeGraphQL.Field(_type => TagWhereUniqueInput, {
    nullable: true
  })
  connect?: TagWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateWithoutTracksAvailableMarketInput, {
    nullable: true
  })
  update?: TagUpdateWithoutTracksAvailableMarketInput | undefined;
}
