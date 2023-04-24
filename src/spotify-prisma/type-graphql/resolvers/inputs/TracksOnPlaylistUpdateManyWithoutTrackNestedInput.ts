import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistCreateManyTrackInputEnvelope } from "../inputs/TracksOnPlaylistCreateManyTrackInputEnvelope";
import { TracksOnPlaylistCreateOrConnectWithoutTrackInput } from "../inputs/TracksOnPlaylistCreateOrConnectWithoutTrackInput";
import { TracksOnPlaylistCreateWithoutTrackInput } from "../inputs/TracksOnPlaylistCreateWithoutTrackInput";
import { TracksOnPlaylistScalarWhereInput } from "../inputs/TracksOnPlaylistScalarWhereInput";
import { TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput } from "../inputs/TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput";
import { TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput } from "../inputs/TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput";
import { TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput } from "../inputs/TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput";
import { TracksOnPlaylistWhereUniqueInput } from "../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpdateManyWithoutTrackNestedInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpdateManyWithoutTrackNestedInput {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateWithoutTrackInput], {
    nullable: true
  })
  create?: TracksOnPlaylistCreateWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateOrConnectWithoutTrackInput], {
    nullable: true
  })
  connectOrCreate?: TracksOnPlaylistCreateOrConnectWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput], {
    nullable: true
  })
  upsert?: TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateManyTrackInputEnvelope, {
    nullable: true
  })
  createMany?: TracksOnPlaylistCreateManyTrackInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput], {
    nullable: true
  })
  update?: TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput], {
    nullable: true
  })
  updateMany?: TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TracksOnPlaylistScalarWhereInput[] | undefined;
}
