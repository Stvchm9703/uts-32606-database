import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateNestedOneWithoutFollowersInput } from "../inputs/PlaylistCreateNestedOneWithoutFollowersInput";
import { UserCreateNestedOneWithoutFollowPlaylistsInput } from "../inputs/UserCreateNestedOneWithoutFollowPlaylistsInput";

@TypeGraphQL.InputType("PlaylistOnFollowerCreateInput", {
  isAbstract: true
})
export class PlaylistOnFollowerCreateInput {
  @TypeGraphQL.Field(_type => PlaylistCreateNestedOneWithoutFollowersInput, {
    nullable: false
  })
  Playlist!: PlaylistCreateNestedOneWithoutFollowersInput;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowPlaylistsInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutFollowPlaylistsInput;
}
