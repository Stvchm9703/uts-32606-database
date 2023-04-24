import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { Album } from "../models/Album";
import { Artist } from "../models/Artist";

@TypeGraphQL.ObjectType("AlbumProduceByArtist", {
  isAbstract: true
})
export class AlbumProduceByArtist {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  albumId!: number;

  Album?: Album;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  artistId!: number;

  Artist?: Artist;
}
