import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistTrackIdArtistIdCompoundUniqueInput } from "../inputs/TrackProduceByArtistTrackIdArtistIdCompoundUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistWhereUniqueInput", {
  isAbstract: true
})
export class TrackProduceByArtistWhereUniqueInput {
  @TypeGraphQL.Field(_type => TrackProduceByArtistTrackIdArtistIdCompoundUniqueInput, {
    nullable: true
  })
  trackId_artistId?: TrackProduceByArtistTrackIdArtistIdCompoundUniqueInput | undefined;
}
