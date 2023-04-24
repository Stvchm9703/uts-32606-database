import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackProduceByArtistWhereInput } from "../../../inputs/TrackProduceByArtistWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTrackProduceByArtistArgs {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereInput, {
    nullable: true
  })
  where?: TrackProduceByArtistWhereInput | undefined;
}
