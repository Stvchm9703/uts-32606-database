import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowingArtistsInput } from "../inputs/UserCreateOrConnectWithoutFollowingArtistsInput";
import { UserCreateWithoutFollowingArtistsInput } from "../inputs/UserCreateWithoutFollowingArtistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFollowingArtistsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFollowingArtistsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFollowingArtistsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFollowingArtistsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowingArtistsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowingArtistsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
