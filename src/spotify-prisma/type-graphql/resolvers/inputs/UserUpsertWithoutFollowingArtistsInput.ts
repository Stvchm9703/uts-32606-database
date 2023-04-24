import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowingArtistsInput } from "../inputs/UserCreateWithoutFollowingArtistsInput";
import { UserUpdateWithoutFollowingArtistsInput } from "../inputs/UserUpdateWithoutFollowingArtistsInput";

@TypeGraphQL.InputType("UserUpsertWithoutFollowingArtistsInput", {
  isAbstract: true
})
export class UserUpsertWithoutFollowingArtistsInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowingArtistsInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFollowingArtistsInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowingArtistsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFollowingArtistsInput;
}
