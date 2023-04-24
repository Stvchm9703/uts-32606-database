import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackProduceByArtistOrderByWithAggregationInput } from "../../../inputs/TrackProduceByArtistOrderByWithAggregationInput";
import { TrackProduceByArtistScalarWhereWithAggregatesInput } from "../../../inputs/TrackProduceByArtistScalarWhereWithAggregatesInput";
import { TrackProduceByArtistWhereInput } from "../../../inputs/TrackProduceByArtistWhereInput";
import { TrackProduceByArtistScalarFieldEnum } from "../../../../enums/TrackProduceByArtistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTrackProduceByArtistArgs {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereInput, {
    nullable: true
  })
  where?: TrackProduceByArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TrackProduceByArtistOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"trackId" | "artistId">;

  @TypeGraphQL.Field(_type => TrackProduceByArtistScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TrackProduceByArtistScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
