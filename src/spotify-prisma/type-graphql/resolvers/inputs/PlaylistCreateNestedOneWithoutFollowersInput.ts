import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateOrConnectWithoutFollowersInput } from "../inputs/PlaylistCreateOrConnectWithoutFollowersInput";
import { PlaylistCreateWithoutFollowersInput } from "../inputs/PlaylistCreateWithoutFollowersInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateNestedOneWithoutFollowersInput", {
  isAbstract: true
})
export class PlaylistCreateNestedOneWithoutFollowersInput {
  @TypeGraphQL.Field(_type => PlaylistCreateWithoutFollowersInput, {
    nullable: true
  })
  create?: PlaylistCreateWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistCreateOrConnectWithoutFollowersInput, {
    nullable: true
  })
  connectOrCreate?: PlaylistCreateOrConnectWithoutFollowersInput | undefined;

  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: true
  })
  connect?: PlaylistWhereUniqueInput | undefined;
}
