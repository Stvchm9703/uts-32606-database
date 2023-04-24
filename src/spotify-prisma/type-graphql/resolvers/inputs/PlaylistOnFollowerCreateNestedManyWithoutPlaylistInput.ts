import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateManyPlaylistInputEnvelope } from "../inputs/PlaylistOnFollowerCreateManyPlaylistInputEnvelope";
import { PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput";
import { PlaylistOnFollowerCreateWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerCreateWithoutPlaylistInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput", {
  isAbstract: true
})
export class PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateWithoutPlaylistInput], {
    nullable: true
  })
  create?: PlaylistOnFollowerCreateWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput], {
    nullable: true
  })
  connectOrCreate?: PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput[] | undefined;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateManyPlaylistInputEnvelope, {
    nullable: true
  })
  createMany?: PlaylistOnFollowerCreateManyPlaylistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerWhereUniqueInput], {
    nullable: true
  })
  connect?: PlaylistOnFollowerWhereUniqueInput[] | undefined;
}
