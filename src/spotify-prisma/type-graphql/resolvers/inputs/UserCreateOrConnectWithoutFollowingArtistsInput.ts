import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowingArtistsInput } from "../inputs/UserCreateWithoutFollowingArtistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFollowingArtistsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFollowingArtistsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowingArtistsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFollowingArtistsInput;
}
