import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateOneRequiredWithoutTracksNestedInput } from "../inputs/PlaylistUpdateOneRequiredWithoutTracksNestedInput";
import { TrackUpdateOneRequiredWithoutInPlaylistNestedInput } from "../inputs/TrackUpdateOneRequiredWithoutInPlaylistNestedInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpdateInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpdateInput {
  @TypeGraphQL.Field(_type => PlaylistUpdateOneRequiredWithoutTracksNestedInput, {
    nullable: true
  })
  Playlist?: PlaylistUpdateOneRequiredWithoutTracksNestedInput | undefined;

  @TypeGraphQL.Field(_type => TrackUpdateOneRequiredWithoutInPlaylistNestedInput, {
    nullable: true
  })
  Track?: TrackUpdateOneRequiredWithoutInPlaylistNestedInput | undefined;
}
