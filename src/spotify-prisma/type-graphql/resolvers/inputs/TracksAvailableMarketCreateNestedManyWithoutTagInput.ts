import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketCreateManyTagInputEnvelope } from "../inputs/TracksAvailableMarketCreateManyTagInputEnvelope";
import { TracksAvailableMarketCreateOrConnectWithoutTagInput } from "../inputs/TracksAvailableMarketCreateOrConnectWithoutTagInput";
import { TracksAvailableMarketCreateWithoutTagInput } from "../inputs/TracksAvailableMarketCreateWithoutTagInput";
import { TracksAvailableMarketWhereUniqueInput } from "../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketCreateNestedManyWithoutTagInput", {
  isAbstract: true
})
export class TracksAvailableMarketCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateWithoutTagInput], {
    nullable: true
  })
  create?: TracksAvailableMarketCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: TracksAvailableMarketCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: TracksAvailableMarketCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  connect?: TracksAvailableMarketWhereUniqueInput[] | undefined;
}
