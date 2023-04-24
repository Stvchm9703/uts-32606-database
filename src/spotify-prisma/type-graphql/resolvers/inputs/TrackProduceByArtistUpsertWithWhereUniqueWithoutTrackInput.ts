import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateWithoutTrackInput } from "../inputs/TrackProduceByArtistCreateWithoutTrackInput";
import { TrackProduceByArtistUpdateWithoutTrackInput } from "../inputs/TrackProduceByArtistUpdateWithoutTrackInput";
import { TrackProduceByArtistWhereUniqueInput } from "../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput", {
  isAbstract: true
})
export class TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: TrackProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateWithoutTrackInput, {
    nullable: false
  })
  update!: TrackProduceByArtistUpdateWithoutTrackInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateWithoutTrackInput, {
    nullable: false
  })
  create!: TrackProduceByArtistCreateWithoutTrackInput;
}
