import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateManyTrackInputEnvelope } from "../inputs/TrackProduceByArtistCreateManyTrackInputEnvelope";
import { TrackProduceByArtistCreateOrConnectWithoutTrackInput } from "../inputs/TrackProduceByArtistCreateOrConnectWithoutTrackInput";
import { TrackProduceByArtistCreateWithoutTrackInput } from "../inputs/TrackProduceByArtistCreateWithoutTrackInput";
import { TrackProduceByArtistWhereUniqueInput } from "../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistCreateNestedManyWithoutTrackInput", {
  isAbstract: true
})
export class TrackProduceByArtistCreateNestedManyWithoutTrackInput {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateWithoutTrackInput], {
    nullable: true
  })
  create?: TrackProduceByArtistCreateWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateOrConnectWithoutTrackInput], {
    nullable: true
  })
  connectOrCreate?: TrackProduceByArtistCreateOrConnectWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateManyTrackInputEnvelope, {
    nullable: true
  })
  createMany?: TrackProduceByArtistCreateManyTrackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  connect?: TrackProduceByArtistWhereUniqueInput[] | undefined;
}
