import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateManyUserInputEnvelope } from "../inputs/PlaylistOnFollowerCreateManyUserInputEnvelope";
import { PlaylistOnFollowerCreateOrConnectWithoutUserInput } from "../inputs/PlaylistOnFollowerCreateOrConnectWithoutUserInput";
import { PlaylistOnFollowerCreateWithoutUserInput } from "../inputs/PlaylistOnFollowerCreateWithoutUserInput";
import { PlaylistOnFollowerScalarWhereInput } from "../inputs/PlaylistOnFollowerScalarWhereInput";
import { PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput } from "../inputs/PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput";
import { PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput } from "../inputs/PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput";
import { PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput } from "../inputs/PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpdateManyWithoutUserNestedInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpdateManyWithoutUserNestedInput {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateWithoutUserInput], {
    nullable: true
  })
  create?: PlaylistOnFollowerCreateWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateOrConnectWithoutUserInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistOnFollowerCreateOrConnectWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  upsert?: PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateManyUserInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistOnFollowerCreateManyUserInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerWhereUniqueInput], {
    nullable: true
  })
  set?: PlaylistOnFollowerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerWhereUniqueInput], {
    nullable: true
  })
  disconnect?: PlaylistOnFollowerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerWhereUniqueInput], {
    nullable: true
  })
  delete?: PlaylistOnFollowerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistOnFollowerWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput], {
    nullable: true
  })
  update?: PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput], {
    nullable: true
  })
  updateMany?: PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlaylistOnFollowerScalarWhereInput[] | undefined;
}
