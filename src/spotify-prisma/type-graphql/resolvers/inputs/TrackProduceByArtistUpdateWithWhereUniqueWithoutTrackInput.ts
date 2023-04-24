import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistUpdateWithoutTrackInput } from "../inputs/TrackProduceByArtistUpdateWithoutTrackInput";
import { TrackProduceByArtistWhereUniqueInput } from "../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput", {
  isAbstract: true
})
export class TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: TrackProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateWithoutTrackInput, {
    nullable: false
  })
  data!: TrackProduceByArtistUpdateWithoutTrackInput;
}
