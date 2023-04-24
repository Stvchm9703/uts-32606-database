import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerCreateWithoutPlaylistInput";
import { PlaylistOnFollowerUpdateWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerUpdateWithoutPlaylistInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerUpdateWithoutPlaylistInput, {
    nullable: false
  })
  update!: PlaylistOnFollowerUpdateWithoutPlaylistInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateWithoutPlaylistInput, {
    nullable: false
  })
  create!: PlaylistOnFollowerCreateWithoutPlaylistInput;
}
