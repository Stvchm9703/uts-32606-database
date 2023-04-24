import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { Artist } from "../models/Artist";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("ArtistOnFollowing", {
  isAbstract: true
})
export class ArtistOnFollowing {
  Artist?: Artist;

  User?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  artistId!: number;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;
}
