import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistScalarWhereInput } from "../inputs/TrackProduceByArtistScalarWhereInput";
import { TrackProduceByArtistUpdateManyMutationInput } from "../inputs/TrackProduceByArtistUpdateManyMutationInput";

@TypeGraphQL.InputType("TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput", {
  isAbstract: true
})
export class TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput {
  @TypeGraphQL.Field(_type => TrackProduceByArtistScalarWhereInput, {
    nullable: false
  })
  where!: TrackProduceByArtistScalarWhereInput;

  @TypeGraphQL.Field(_type => TrackProduceByArtistUpdateManyMutationInput, {
    nullable: false
  })
  data!: TrackProduceByArtistUpdateManyMutationInput;
}
