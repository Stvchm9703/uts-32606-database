import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutPlaylistInput } from "../inputs/UserCreateOrConnectWithoutPlaylistInput";
import { UserCreateWithoutPlaylistInput } from "../inputs/UserCreateWithoutPlaylistInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutPlaylistInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutPlaylistInput, {
    nullable: true
  })
  create?: UserCreateWithoutPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutPlaylistInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
