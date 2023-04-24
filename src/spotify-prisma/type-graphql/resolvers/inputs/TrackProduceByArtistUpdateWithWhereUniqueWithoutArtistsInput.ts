import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistUpdateWithoutArtistsInput } from "../inputs/TrackProduceByArtistUpdateWithoutArtistsInput";
import { TrackProduceByArtistWhereUniqueInput } from "../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput", {
  isAbstract: true
})
export class TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput {
  @TypeGraphQL.Field(_type => TrackProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: TrackProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateWithoutArtistsInput, {
    nullable: false
  })
  data!: TrackProduceByArtistUpdateWithoutArtistsInput;
}
