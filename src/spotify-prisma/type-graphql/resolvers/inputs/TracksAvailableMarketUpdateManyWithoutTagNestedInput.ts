import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketCreateManyTagInputEnvelope } from "../inputs/TracksAvailableMarketCreateManyTagInputEnvelope";
import { TracksAvailableMarketCreateOrConnectWithoutTagInput } from "../inputs/TracksAvailableMarketCreateOrConnectWithoutTagInput";
import { TracksAvailableMarketCreateWithoutTagInput } from "../inputs/TracksAvailableMarketCreateWithoutTagInput";
import { TracksAvailableMarketScalarWhereInput } from "../inputs/TracksAvailableMarketScalarWhereInput";
import { TracksAvailableMarketUpdateManyWithWhereWithoutTagInput } from "../inputs/TracksAvailableMarketUpdateManyWithWhereWithoutTagInput";
import { TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput } from "../inputs/TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput";
import { TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput } from "../inputs/TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput";
import { TracksAvailableMarketWhereUniqueInput } from "../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketUpdateManyWithoutTagNestedInput", {
  isAbstract: true
})
export class TracksAvailableMarketUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateWithoutTagInput], {
    nullable: true
  })
  create?: TracksAvailableMarketCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: TracksAvailableMarketCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: TracksAvailableMarketCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  set?: TracksAvailableMarketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TracksAvailableMarketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  delete?: TracksAvailableMarketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  connect?: TracksAvailableMarketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: TracksAvailableMarketUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TracksAvailableMarketScalarWhereInput[] | undefined;
}
