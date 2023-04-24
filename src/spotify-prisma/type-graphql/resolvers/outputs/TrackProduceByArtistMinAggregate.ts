import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("TrackProduceByArtistMinAggregate", {
  isAbstract: true
})
export class TrackProduceByArtistMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  trackId!: number | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  artistId!: number | null;
}