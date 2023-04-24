import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutFollowersInput } from "../inputs/PlaylistCreateWithoutFollowersInput";
import { PlaylistUpdateWithoutFollowersInput } from "../inputs/PlaylistUpdateWithoutFollowersInput";

@TypeGraphQL.InputType("PlaylistUpsertWithoutFollowersInput", {
  isAbstract: true
})
export class PlaylistUpsertWithoutFollowersInput {
  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutFollowersInput, {
    nullable: false
  })
  update!: PlaylistUpdateWithoutFollowersInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutFollowersInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutFollowersInput;
}
