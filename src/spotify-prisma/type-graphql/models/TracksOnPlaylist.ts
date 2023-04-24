import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { Playlist } from "../models/Playlist";
import { Track } from "../models/Track";

@TypeGraphQL.ObjectType("TracksOnPlaylist", {
  isAbstract: true
})
export class TracksOnPlaylist {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  playlistId!: number;

  Playlist?: Playlist;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  trackId!: number;

  Track?: Track;
}
