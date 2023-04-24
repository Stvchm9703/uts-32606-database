import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { PlaylistOnFollower } from "../models/PlaylistOnFollower";
import { TracksOnPlaylist } from "../models/TracksOnPlaylist";
import { User } from "../models/User";
import { PlaylistCount } from "../resolvers/outputs/PlaylistCount";

@TypeGraphQL.ObjectType("Playlist", {
  isAbstract: true
})
export class Playlist {
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

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  collaborative!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  description!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: false
  })
  public!: boolean;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  snapshotId?: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  primaryColor?: string | null;

  tracks?: TracksOnPlaylist[];

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tracksIds!: number;

  owner?: User;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  ownerId!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  imagesId?: string | null;

  followers?: PlaylistOnFollower[];

  @TypeGraphQL.Field(_type => PlaylistCount, {
    nullable: true
  })
  _count?: PlaylistCount | null;
}
