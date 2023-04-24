import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { Album } from "../models/Album";
import { TrackProduceByArtist } from "../models/TrackProduceByArtist";
import { TracksAvailableMarket } from "../models/TracksAvailableMarket";
import { TracksOnPlaylist } from "../models/TracksOnPlaylist";
import { TrackCount } from "../resolvers/outputs/TrackCount";

@TypeGraphQL.ObjectType("Track", {
  isAbstract: true
})
export class Track {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  createdAt!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  updatedAt!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  uid!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  discNumber!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  durationMs!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  explicit!: boolean;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  popularity?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  previewUrl?: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  trackNumber!: number;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  isLocal!: boolean;

  availableMarkets?: TracksAvailableMarket[];

  Artists?: TrackProduceByArtist[];

  InPlaylist?: TracksOnPlaylist[];

  Album?: Album | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  albumId?: number | null;

  @TypeGraphQL.Field(_type => TrackCount, {
    nullable: true
  })
  _count?: TrackCount | null;
}
