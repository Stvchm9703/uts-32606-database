import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackProduceByArtistUpdateManyMutationInput } from "../../../inputs/TrackProduceByArtistUpdateManyMutationInput";
import { TrackProduceByArtistWhereInput } from "../../../inputs/TrackProduceByArtistWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTrackProduceByArtistArgs {
  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrackProduceByArtistUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereInput, {
    nullable: true
  })
  where?: TrackProduceByArtistWhereInput | undefined;
}
