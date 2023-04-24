import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPlaylistInput } from "../inputs/UserCreateWithoutPlaylistInput";
import { UserUpdateWithoutPlaylistInput } from "../inputs/UserUpdateWithoutPlaylistInput";

@TypeGraphQL.InputType("UserUpsertWithoutPlaylistInput", {
  isAbstract: true
})
export class UserUpsertWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutPlaylistInput, {
    nullable: false
  })
  update!: UserUpdateWithoutPlaylistInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPlaylistInput, {
    nullable: false
  })
  create!: UserCreateWithoutPlaylistInput;
}
