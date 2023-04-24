import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { AlbumProduceByArtist } from "../models/AlbumProduceByArtist";
import { ArtistInGenres } from "../models/ArtistInGenres";
import { ArtistOnFollowing } from "../models/ArtistOnFollowing";
import { TrackProduceByArtist } from "../models/TrackProduceByArtist";
import { ArtistCount } from "../resolvers/outputs/ArtistCount";

@TypeGraphQL.ObjectType("Artist", {
  isAbstract: true
})
export class Artist {
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
    nullable: true
  })
  popularity?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imageUrl?: string | null;

  Genres?: ArtistInGenres[];

  TrackProduceByArtist?: TrackProduceByArtist[];

  AlbumProduceByArtist?: AlbumProduceByArtist[];

  Followers?: ArtistOnFollowing[];

  @TypeGraphQL.Field(_type => ArtistCount, {
    nullable: true
  })
  _count?: ArtistCount | null;
}
