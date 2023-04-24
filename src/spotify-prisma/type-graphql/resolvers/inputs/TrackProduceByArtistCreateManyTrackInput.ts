import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.InputType("TrackProduceByArtistCreateManyTrackInput", {
  isAbstract: true
})
export class TrackProduceByArtistCreateManyTrackInput {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: false
  })
  artistId!: number;
}