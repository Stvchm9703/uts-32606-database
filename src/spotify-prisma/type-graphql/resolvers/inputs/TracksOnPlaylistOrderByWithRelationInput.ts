import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOrderByWithRelationInput } from "../inputs/PlaylistOrderByWithRelationInput";
import { TrackOrderByWithRelationInput } from "../inputs/TrackOrderByWithRelationInput";
import { SortOrder } from "../../enums/SortOrder";

@TypeGraphQL.InputType("TracksOnPlaylistOrderByWithRelationInput", {
  isAbstract: true
})
export class TracksOnPlaylistOrderByWithRelationInput {
  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  playlistId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => SortOrder, {
    nullable: true
  })
  trackId?: "asc" | "desc" | undefined;

  @TypeGraphQL.Field(_type => PlaylistOrderByWithRelationInput, {
    nullable: true
  })
  Playlist?: PlaylistOrderByWithRelationInput | undefined;

  @TypeGraphQL.Field(_type => TrackOrderByWithRelationInput, {
    nullable: true
  })
  Track?: TrackOrderByWithRelationInput | undefined;
}
