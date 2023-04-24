import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackProduceByArtistWhereUniqueInput } from "../../../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTrackProduceByArtistArgs {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: TrackProduceByArtistWhereUniqueInput;
}
