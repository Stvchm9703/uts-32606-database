import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { Artist } from "../models/Artist";
import { Track } from "../models/Track";

@TypeGraphQL.ObjectType("TrackProduceByArtist", {
  isAbstract: true
})
export class TrackProduceByArtist {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  trackId!: number;

  Track?: Track;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  artistId!: number;

  Artists?: Artist;
}
