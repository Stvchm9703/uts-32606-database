import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackProduceByArtistCreateInput } from "../../../inputs/TrackProduceByArtistCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTrackProduceByArtistArgs {
  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateInput, {
    nullable: false
  })
  data!: TrackProduceByArtistCreateInput;
}
