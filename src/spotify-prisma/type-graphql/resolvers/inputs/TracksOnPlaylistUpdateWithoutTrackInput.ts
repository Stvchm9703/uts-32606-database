import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateOneRequiredWithoutTracksNestedInput } from "../inputs/PlaylistUpdateOneRequiredWithoutTracksNestedInput";

@TypeGraphQL.InputType("TracksOnPlaylistUpdateWithoutTrackInput", {
  isAbstract: true
})
export class TracksOnPlaylistUpdateWithoutTrackInput {
  @TypeGraphQL.Field(_type => PlaylistUpdateOneRequiredWithoutTracksNestedInput, {
    nullable: true
  })
  Playlist?: PlaylistUpdateOneRequiredWithoutTracksNestedInput | undefined;
}
