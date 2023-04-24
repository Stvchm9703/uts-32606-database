import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { ArtistOnFollowing } from "../models/ArtistOnFollowing";
import { Playlist } from "../models/Playlist";
import { PlaylistOnFollower } from "../models/PlaylistOnFollower";
import { UserCount } from "../resolvers/outputs/UserCount";

@TypeGraphQL.ObjectType("User", {
  isAbstract: true
})
export class User {
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
    nullable: true
  })
  uid?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  email?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  authType!: string;

  Playlist?: Playlist[];

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  country!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  explicitContentFilterEnabled!: boolean;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  explicitContentFilterLocked!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imagesId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  product!: string;

  FollowPlaylists?: PlaylistOnFollower[];

  FollowingArtists?: ArtistOnFollowing[];

  @TypeGraphQL.Field(_type => UserCount, {
    nullable: true
  })
  _count?: UserCount | null;
}
