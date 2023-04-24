import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowPlaylistsInput } from "../inputs/UserCreateOrConnectWithoutFollowPlaylistsInput";
import { UserCreateWithoutFollowPlaylistsInput } from "../inputs/UserCreateWithoutFollowPlaylistsInput";
import { UserUpdateWithoutFollowPlaylistsInput } from "../inputs/UserUpdateWithoutFollowPlaylistsInput";
import { UserUpsertWithoutFollowPlaylistsInput } from "../inputs/UserUpsertWithoutFollowPlaylistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput", {
  isAbstract: true
})
export class UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFollowPlaylistsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFollowPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowPlaylistsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFollowPlaylistsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFollowPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFollowPlaylistsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFollowPlaylistsInput | undefined;
}
