import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFollowPlaylistsInput } from "../inputs/UserCreateWithoutFollowPlaylistsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFollowPlaylistsInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFollowPlaylistsInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFollowPlaylistsInput, {
    nullable: false
  })
  create!: UserCreateWithoutFollowPlaylistsInput;
}
