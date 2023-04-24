import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerCreateWithoutPlaylistInput } from "../inputs/PlaylistOnFollowerCreateWithoutPlaylistInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput", {
  isAbstract: true
})
export class PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateWithoutPlaylistInput, {
    nullable: false
  })
  create!: PlaylistOnFollowerCreateWithoutPlaylistInput;
}
