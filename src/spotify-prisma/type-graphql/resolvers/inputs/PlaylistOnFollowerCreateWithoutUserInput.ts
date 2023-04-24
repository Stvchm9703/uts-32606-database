import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateNestedOneWithoutFollowersInput } from "../inputs/PlaylistCreateNestedOneWithoutFollowersInput";

@TypeGraphQL.InputType("PlaylistOnFollowerCreateWithoutUserInput", {
  isAbstract: true
})
export class PlaylistOnFollowerCreateWithoutUserInput {
  @TypeGraphQL.Field(_type => PlaylistCreateNestedOneWithoutFollowersInput, {
    nullable: false
  })
  Playlist!: PlaylistCreateNestedOneWithoutFollowersInput;
}
