import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { Album } from "../models/Album";
import { Tag } from "../models/Tag";

@TypeGraphQL.ObjectType("AlbumAvailableMarket", {
  isAbstract: true
})
export class AlbumAvailableMarket {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  albumId!: number;

  Album?: Album;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tagId!: number;

  Tag?: Tag;
}
