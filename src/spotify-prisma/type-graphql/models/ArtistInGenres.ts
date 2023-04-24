import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { Artist } from "../models/Artist";
import { Tag } from "../models/Tag";

@TypeGraphQL.ObjectType("ArtistInGenres", {
  isAbstract: true
})
export class ArtistInGenres {
  Artist?: Artist;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  artistId!: number;

  Tag?: Tag;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tagId!: number;
}
