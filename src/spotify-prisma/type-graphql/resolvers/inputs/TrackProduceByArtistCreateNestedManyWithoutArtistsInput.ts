import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateManyArtistsInputEnvelope } from "../inputs/TrackProduceByArtistCreateManyArtistsInputEnvelope";
import { TrackProduceByArtistCreateOrConnectWithoutArtistsInput } from "../inputs/TrackProduceByArtistCreateOrConnectWithoutArtistsInput";
import { TrackProduceByArtistCreateWithoutArtistsInput } from "../inputs/TrackProduceByArtistCreateWithoutArtistsInput";
import { TrackProduceByArtistWhereUniqueInput } from "../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistCreateNestedManyWithoutArtistsInput", {
  isAbstract: true
})
export class TrackProduceByArtistCreateNestedManyWithoutArtistsInput {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateWithoutArtistsInput], {
    nullable: true
  })
  create?: TrackProduceByArtistCreateWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateOrConnectWithoutArtistsInput], {
    nullable: true
  })
  connectOrCreate?: TrackProduceByArtistCreateOrConnectWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateManyArtistsInputEnvelope, {
    nullable: true
  })
  createMany?: TrackProduceByArtistCreateManyArtistsInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  connect?: TrackProduceByArtistWhereUniqueInput[] | undefined;
}
