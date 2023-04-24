import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateManyOwnerInputEnvelope } from "../inputs/PlaylistCreateManyOwnerInputEnvelope";
import { PlaylistCreateOrConnectWithoutOwnerInput } from "../inputs/PlaylistCreateOrConnectWithoutOwnerInput";
import { PlaylistCreateWithoutOwnerInput } from "../inputs/PlaylistCreateWithoutOwnerInput";
import { PlaylistScalarWhereInput } from "../inputs/PlaylistScalarWhereInput";
import { PlaylistUpdateManyWithWhereWithoutOwnerInput } from "../inputs/PlaylistUpdateManyWithWhereWithoutOwnerInput";
import { PlaylistUpdateWithWhereUniqueWithoutOwnerInput } from "../inputs/PlaylistUpdateWithWhereUniqueWithoutOwnerInput";
import { PlaylistUpsertWithWhereUniqueWithoutOwnerInput } from "../inputs/PlaylistUpsertWithWhereUniqueWithoutOwnerInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistUpdateManyWithoutOwnerNestedInput", {
  isAbstract: true
})
export class PlaylistUpdateManyWithoutOwnerNestedInput {
  @TypeGraphQL.Field(_type => [PlaylistCreateWithoutOwnerInput], {
    nullable: true
  })
  create?: PlaylistCreateWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistCreateOrConnectWithoutOwnerInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpsertWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  upsert?: PlaylistUpsertWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateManyOwnerInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistCreateManyOwnerInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  set?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  delete?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpdateWithWhereUniqueWithoutOwnerInput], {
    nullable: true
  })
  update?: PlaylistUpdateWithWhereUniqueWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistUpdateManyWithWhereWithoutOwnerInput], {
    nullable: true
  })
  updateMany?: PlaylistUpdateManyWithWhereWithoutOwnerInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlaylistScalarWhereInput[] | undefined;
}
