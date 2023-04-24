import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutPlaylistInput } from "../inputs/UserCreateWithoutPlaylistInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutPlaylistInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutPlaylistInput, {
    nullable: false
  })
  create!: UserCreateWithoutPlaylistInput;
}
