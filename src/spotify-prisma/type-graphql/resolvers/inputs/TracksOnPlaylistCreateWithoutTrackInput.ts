import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateNestedOneWithoutTracksInput } from "../inputs/PlaylistCreateNestedOneWithoutTracksInput";

@TypeGraphQL.InputType("TracksOnPlaylistCreateWithoutTrackInput", {
  isAbstract: true
})
export class TracksOnPlaylistCreateWithoutTrackInput {
  @TypeGraphQL.Field(_type => PlaylistCreateNestedOneWithoutTracksInput, {
    nullable: false
  })
  Playlist!: PlaylistCreateNestedOneWithoutTracksInput;
}
