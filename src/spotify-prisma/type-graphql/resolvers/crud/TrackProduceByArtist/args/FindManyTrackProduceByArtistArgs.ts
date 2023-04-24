import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TrackProduceByArtistOrderByWithRelationInput } from "../../../inputs/TrackProduceByArtistOrderByWithRelationInput";
import { TrackProduceByArtistWhereInput } from "../../../inputs/TrackProduceByArtistWhereInput";
import { TrackProduceByArtistWhereUniqueInput } from "../../../inputs/TrackProduceByArtistWhereUniqueInput";
import { TrackProduceByArtistScalarFieldEnum } from "../../../../enums/TrackProduceByArtistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindManyTrackProduceByArtistArgs {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereInput, {
    nullable: true
  })
  where?: TrackProduceByArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TrackProduceByArtistOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereUniqueInput, {
    nullable: true
  })
  cursor?: TrackProduceByArtistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"trackId" | "artistId"> | undefined;
}
