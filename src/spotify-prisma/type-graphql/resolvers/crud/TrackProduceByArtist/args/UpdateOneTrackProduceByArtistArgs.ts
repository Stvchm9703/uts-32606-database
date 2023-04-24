import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackProduceByArtistUpdateInput } from "../../../inputs/TrackProduceByArtistUpdateInput";
import { TrackProduceByArtistWhereUniqueInput } from "../../../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTrackProduceByArtistArgs {
  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateInput, {
    nullable: false
  })
  data!: TrackProduceByArtistUpdateInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: TrackProduceByArtistWhereUniqueInput;
}
