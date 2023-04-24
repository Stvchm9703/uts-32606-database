import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { AlbumAvailableMarket } from "../models/AlbumAvailableMarket";
import { ArtistInGenres } from "../models/ArtistInGenres";
import { TracksAvailableMarket } from "../models/TracksAvailableMarket";
import { TagCount } from "../resolvers/outputs/TagCount";

@TypeGraphQL.ObjectType("Tag", {
  isAbstract: true
})
export class Tag {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  id!: number;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  code!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  type!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  name!: string;

  AlbumAvailableMarket?: AlbumAvailableMarket[];

  TracksAvailableMarket?: TracksAvailableMarket[];

  ArtistInGenres?: ArtistInGenres[];

  @TypeGraphQL.Field(_type => TagCount, {
    nullable: true
  })
  _count?: TagCount | null;
}
