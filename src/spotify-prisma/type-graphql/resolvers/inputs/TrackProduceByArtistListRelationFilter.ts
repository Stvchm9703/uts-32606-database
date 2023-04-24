import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistWhereInput } from "../inputs/TrackProduceByArtistWhereInput";

@TypeGraphQL.InputType("TrackProduceByArtistListRelationFilter", {
  isAbstract: true
})
export class TrackProduceByArtistListRelationFilter {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereInput, {
    nullable: true
  })
  every?: TrackProduceByArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereInput, {
    nullable: true
  })
  some?: TrackProduceByArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereInput, {
    nullable: true
  })
  none?: TrackProduceByArtistWhereInput | undefined;
}
