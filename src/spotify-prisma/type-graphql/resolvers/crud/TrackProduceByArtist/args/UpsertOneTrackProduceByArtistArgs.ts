import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackProduceByArtistCreateInput } from "../../../inputs/TrackProduceByArtistCreateInput";
import { TrackProduceByArtistUpdateInput } from "../../../inputs/TrackProduceByArtistUpdateInput";
import { TrackProduceByArtistWhereUniqueInput } from "../../../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTrackProduceByArtistArgs {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: TrackProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateInput, {
    nullable: false
  })
  create!: TrackProduceByArtistCreateInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateInput, {
    nullable: false
  })
  update!: TrackProduceByArtistUpdateInput;
}
