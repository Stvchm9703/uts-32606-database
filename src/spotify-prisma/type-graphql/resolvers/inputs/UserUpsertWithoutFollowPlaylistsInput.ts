import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowPlaylistsInput } from "../inputs/UserCreateWithoutFollowPlaylistsInput";
import { UserUpdateWithoutFollowPlaylistsInput } from "../inputs/UserUpdateWithoutFollowPlaylistsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFollowPlaylistsInput", {
  isAbstract: true
})
export class UserUpsertWithoutFollowPlaylistsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowPlaylistsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFollowPlaylistsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowPlaylistsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFollowPlaylistsInput;
}
