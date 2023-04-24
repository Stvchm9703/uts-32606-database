import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksAvailableMarketCreateManyTrackInputEnvelope } from "../inputs/TracksAvailableMarketCreateManyTrackInputEnvelope";
import { TracksAvailableMarketCreateOrConnectWithoutTrackInput } from "../inputs/TracksAvailableMarketCreateOrConnectWithoutTrackInput";
import { TracksAvailableMarketCreateWithoutTrackInput } from "../inputs/TracksAvailableMarketCreateWithoutTrackInput";
import { TracksAvailableMarketScalarWhereInput } from "../inputs/TracksAvailableMarketScalarWhereInput";
import { TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput } from "../inputs/TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput";
import { TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput } from "../inputs/TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput";
import { TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput } from "../inputs/TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput";
import { TracksAvailableMarketWhereUniqueInput } from "../inputs/TracksAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("TracksAvailableMarketUpdateManyWithoutTrackNestedInput", {
  isAbstract: true
})
export class TracksAvailableMarketUpdateManyWithoutTrackNestedInput {
  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateWithoutTrackInput], {
    nullable: true
  })
  create?: TracksAvailableMarketCreateWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketCreateOrConnectWithoutTrackInput], {
    nullable: true
  })
  connectOrCreate?: TracksAvailableMarketCreateOrConnectWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput], {
    nullable: true
  })
  upsert?: TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksAvailableMarketCreateManyTrackInputEnvelope, {
    nullable: true
  })
  createMany?: TracksAvailableMarketCreateManyTrackInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput], {
    nullable: true
  })
  update?: TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput], {
    nullable: true
  })
  updateMany?: TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksAvailableMarketScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TracksAvailableMarketScalarWhereInput[] | undefined;
}
