import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { IntFilter } from "../inputs/IntFilter";
import { PlaylistRelationFilter } from "../inputs/PlaylistRelationFilter";
import { TrackRelationFilter } from "../inputs/TrackRelationFilter";

@TypeGraphQL.InputType("TracksOnPlaylistWhereInput", {
  isAbstract: true
})
export class TracksOnPlaylistWhereInput {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistWhereInput], {
    nullable: true
  })
  AND?: TracksOnPlaylistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistWhereInput], {
    nullable: true
  })
  OR?: TracksOnPlaylistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistWhereInput], {
    nullable: true
  })
  NOT?: TracksOnPlaylistWhereInput[] | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  playlistId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => IntFilter, {
    nullable: true
  })
  trackId?: IntFilter | undefined;

  @TypeGraphQL.Field(_type => PlaylistRelationFilter, {
    nullable: true
  })
  Playlist?: PlaylistRelationFilter | undefined;

  @TypeGraphQL.Field(_type => TrackRelationFilter, {
    nullable: true
  })
  Track?: TrackRelationFilter | undefined;
}
