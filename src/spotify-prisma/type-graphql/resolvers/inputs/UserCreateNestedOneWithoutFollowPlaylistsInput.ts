import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFollowPlaylistsInput } from "../inputs/UserCreateOrConnectWithoutFollowPlaylistsInput";
import { UserCreateWithoutFollowPlaylistsInput } from "../inputs/UserCreateWithoutFollowPlaylistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFollowPlaylistsInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFollowPlaylistsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFollowPlaylistsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFollowPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFollowPlaylistsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFollowPlaylistsInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
