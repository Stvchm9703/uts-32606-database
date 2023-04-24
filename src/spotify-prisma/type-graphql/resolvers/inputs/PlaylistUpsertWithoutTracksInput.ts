import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateWithoutTracksInput } from "../inputs/PlaylistCreateWithoutTracksInput";
import { PlaylistUpdateWithoutTracksInput } from "../inputs/PlaylistUpdateWithoutTracksInput";

@TypeGraphQL.InputType("PlaylistUpsertWithoutTracksInput", {
  isAbstract: true
})
export class PlaylistUpsertWithoutTracksInput {
  @TypeGraphQL.Field(_type => PlaylistUpdateWithoutTracksInput, {
    nullable: false
  })
  update!: PlaylistUpdateWithoutTracksInput;

  @TypeGraphQL.Field(_type => PlaylistCreateWithoutTracksInput, {
    nullable: false
  })
  create!: PlaylistCreateWithoutTracksInput;
}
