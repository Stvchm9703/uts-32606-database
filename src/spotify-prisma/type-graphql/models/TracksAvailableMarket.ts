import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../prisma-client-js";
import { DecimalJSScalar } from "../scalars";
import { Tag } from "../models/Tag";
import { Track } from "../models/Track";

@TypeGraphQL.ObjectType("TracksAvailableMarket", {
  isAbstract: true
})
export class TracksAvailableMarket {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  tagId!: number;

  Tag?: Tag;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  trackId!: number;

  Track?: Track;
}
