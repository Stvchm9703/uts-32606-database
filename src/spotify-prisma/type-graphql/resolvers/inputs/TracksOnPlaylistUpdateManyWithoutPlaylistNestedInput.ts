import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistCreateManyPlaylistInputEnvelope } from "../inputs/TracksOnPlaylistCreateManyPlaylistInputEnvelope";
import { TracksOnPlaylistCreateOrConnectWithoutPlaylistInput } from "../inputs/TracksOnPlaylistCreateOrConnectWithoutPlaylistInput";
import { TracksOnPlaylistCreateWithoutPlaylistInput } from "../inputs/TracksOnPlaylistCreateWithoutPlaylistInput";
import { TracksOnPlaylistScalarWhereInput } from "../inputs/TracksOnPlaylistScalarWhereInput";
import { TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput } from "../inputs/TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput";
import { TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput } from "../inputs/TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput";
import { TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput } from "../inputs/TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput";
import { TracksOnPlaylistWhereUniqueInput } from "../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpdateManyWithoutPlaylistNestedInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpdateManyWithoutPlaylistNestedInput {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateWithoutPlaylistInput], {
    nullable: true
  })
  create?: TracksOnPlaylistCreateWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateOrConnectWithoutPlaylistInput], {
    nullable: true
  })
  connectOrCreate?: TracksOnPlaylistCreateOrConnectWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput], {
    nullable: true
  })
  upsert?: TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateManyPlaylistInputEnvelope, {
    nullable: true
  })
  createMany?: TracksOnPlaylistCreateManyPlaylistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistWhereUniqueInput], {
    nullable: true
  })
  set?: TracksOnPlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TracksOnPlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistWhereUniqueInput], {
    nullable: true
  })
  delete?: TracksOnPlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: TracksOnPlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput], {
    nullable: true
  })
  update?: TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput], {
    nullable: true
  })
  updateMany?: TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TracksOnPlaylistScalarWhereInput[] | undefined;
}
