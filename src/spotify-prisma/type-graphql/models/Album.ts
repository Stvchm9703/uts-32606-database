import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { AlbumAvailableMarket } from "../models/AlbumAvailableMarket";
import { AlbumProduceByArtist } from "../models/AlbumProduceByArtist";
import { Track } from "../models/Track";
import { AlbumCount } from "../resolvers/outputs/AlbumCount";

@TypeGraphQL.ObjectType("Album", {
  isAbstract: true
})
export class Album {
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
  albumType!: string;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  totalTracks!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  releaseDate!: Date;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  releaseDatePrecision!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  albumGroup!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  copyrights?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imageUrl?: string | null;

  availableMarkets?: AlbumAvailableMarket[];

  Artists?: AlbumProduceByArtist[];

  Tracks?: Track[];

  @TypeGraphQL.Field(_type => AlbumCount, {
    nullable: true
  })
  _count?: AlbumCount | null;
}
