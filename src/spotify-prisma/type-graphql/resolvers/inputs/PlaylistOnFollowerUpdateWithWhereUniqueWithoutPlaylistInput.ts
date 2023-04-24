import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerUpdateWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerUpdateWithoutPlaylistInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerUpdateWithoutPlaylistInput, {
    nullable: false
  })
  data!: PlaylistOnFollowerUpdateWithoutPlaylistInput;
}
