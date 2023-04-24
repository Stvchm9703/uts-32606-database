import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutFollowersInput } from "../inputs/PlaylistCreateWithoutFollowersInput";
import { PlaylistWhereUniqueInput } from "../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.InputType("PlaylistCreateOrConnectWithoutFollowersInput", {
  isAbstract: true
})
export class PlaylistCreateOrConnectWithoutFollowersInput {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutFollowersInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutFollowersInput;
}
