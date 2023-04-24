import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowingArtistsInput } from "../inputs/UserCreateOrConnectWithoutFollowingArtistsInput";
import { UserCreateWithoutFollowingArtistsInput } from "../inputs/UserCreateWithoutFollowingArtistsInput";
import { UserUpdateWithoutFollowingArtistsInput } from "../inputs/UserUpdateWithoutFollowingArtistsInput";
import { UserUpsertWithoutFollowingArtistsInput } from "../inputs/UserUpsertWithoutFollowingArtistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutFollowingArtistsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutFollowingArtistsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFollowingArtistsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFollowingArtistsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowingArtistsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowingArtistsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFollowingArtistsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFollowingArtistsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowingArtistsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFollowingArtistsInput | undefined;
}
