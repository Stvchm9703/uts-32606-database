import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateWithoutArtistsInput } from "../inputs/TrackProduceByArtistCreateWithoutArtistsInput";
import { TrackProduceByArtistUpdateWithoutArtistsInput } from "../inputs/TrackProduceByArtistUpdateWithoutArtistsInput";
import { TrackProduceByArtistWhereUniqueInput } from "../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput", {
  isAbstract: true
})
export class TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: TrackProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateWithoutArtistsInput, {
    nullable: false
  })
  update!: TrackProduceByArtistUpdateWithoutArtistsInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateWithoutArtistsInput, {
    nullable: false
  })
  create!: TrackProduceByArtistCreateWithoutArtistsInput;
}
