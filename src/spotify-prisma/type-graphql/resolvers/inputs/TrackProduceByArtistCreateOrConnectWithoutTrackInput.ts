import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateWithoutTrackInput } from "../inputs/TrackProduceByArtistCreateWithoutTrackInput";
import { TrackProduceByArtistWhereUniqueInput } from "../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistCreateOrConnectWithoutTrackInput", {
  isAbstract: true
})
export class TrackProduceByArtistCreateOrConnectWithoutTrackInput {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: TrackProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateWithoutTrackInput, {
    nullable: false
  })
  create!: TrackProduceByArtistCreateWithoutTrackInput;
}
