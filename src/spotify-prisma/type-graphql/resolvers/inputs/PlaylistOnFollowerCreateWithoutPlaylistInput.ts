import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFollowPlaylistsInput } from "../inputs/UserCreateNestedOneWithoutFollowPlaylistsInput";

@TypeGraphQL.InputType("PlaylistOnFollowerCreateWithoutPlaylistInput", {
  isAbstract: true
})
export class PlaylistOnFollowerCreateWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFollowPlaylistsInput, {
    nullable: false
  })
  User!: UserCreateNestedOneWithoutFollowPlaylistsInput;
}
