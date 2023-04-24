import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { Playlist } from "../models/Playlist";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("PlaylistOnFollower", {
  isAbstract: true
})
export class PlaylistOnFollower {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  playlistId!: number;

  Playlist?: Playlist;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  userId!: number;

  User?: User;
}
