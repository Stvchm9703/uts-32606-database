import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistCreateNestedOneWithoutTracksInput } from "../inputs/PlaylistCreateNestedOneWithoutTracksInput";
import { TrackCreateNestedOneWithoutInPlaylistInput } from "../inputs/TrackCreateNestedOneWithoutInPlaylistInput";

@TypeGraphQL.InputType("TracksOnPlaylistCreateInput", {
  isAbstract: true
})
export class TracksOnPlaylistCreateInput {
  @TypeGraphQL.Field(_type => PlaylistCreateNestedOneWithoutTracksInput, {
    nullable: false
  })
  Playlist!: PlaylistCreateNestedOneWithoutTracksInput;

  @TypeGraphQL.Field(_type => TrackCreateNestedOneWithoutInPlaylistInput, {
    nullable: false
  })
  Track!: TrackCreateNestedOneWithoutInPlaylistInput;
}
