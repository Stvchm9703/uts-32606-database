import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateManyPlaylistInputEnvelope } from "../inputs/PlaylistOnFollowerCreateManyPlaylistInputEnvelope";
import { PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput";
import { PlaylistOnFollowerCreateWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerCreateWithoutPlaylistInput";
import { PlaylistOnFollowerScalarWhereInput } from "../inputs/PlaylistOnFollowerScalarWhereInput";
import { PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput";
import { PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput";
import { PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpdateManyWithoutPlaylistNestedInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpdateManyWithoutPlaylistNestedInput {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateWithoutPlaylistInput], {
    nullable: true
  })
  create?: PlaylistOnFollowerCreateWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput], {
    nullable: true
  })
  upsert?: PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateManyPlaylistInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistOnFollowerCreateManyPlaylistInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput], {
    nullable: true
  })
  update?: PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput], {
    nullable: true
  })
  updateMany?: PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarWhereInput], {
    nullable: true
  })
  deleteMany?: PlaylistOnFollowerScalarWhereInput[] | undefined;
}
