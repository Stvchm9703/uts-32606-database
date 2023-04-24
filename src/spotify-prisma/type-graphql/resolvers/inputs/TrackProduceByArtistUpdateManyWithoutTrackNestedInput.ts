import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateManyTrackInputEnvelope } from "../inputs/TrackProduceByArtistCreateManyTrackInputEnvelope";
import { TrackProduceByArtistCreateOrConnectWithoutTrackInput } from "../inputs/TrackProduceByArtistCreateOrConnectWithoutTrackInput";
import { TrackProduceByArtistCreateWithoutTrackInput } from "../inputs/TrackProduceByArtistCreateWithoutTrackInput";
import { TrackProduceByArtistScalarWhereInput } from "../inputs/TrackProduceByArtistScalarWhereInput";
import { TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput } from "../inputs/TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput";
import { TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput } from "../inputs/TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput";
import { TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput } from "../inputs/TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput";
import { TrackProduceByArtistWhereUniqueInput } from "../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistUpdateManyWithoutTrackNestedInput", {
  isAbstract: true
})
export class TrackProduceByArtistUpdateManyWithoutTrackNestedInput {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateWithoutTrackInput], {
    nullable: true
  })
  create?: TrackProduceByArtistCreateWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateOrConnectWithoutTrackInput], {
    nullable: true
  })
  connectOrCreate?: TrackProduceByArtistCreateOrConnectWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput], {
    nullable: true
  })
  upsert?: TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateManyTrackInputEnvelope, {
    nullable: true
  })
  createMany?: TrackProduceByArtistCreateManyTrackInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  set?: TrackProduceByArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: TrackProduceByArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  delete?: TrackProduceByArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  connect?: TrackProduceByArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput], {
    nullable: true
  })
  update?: TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput], {
    nullable: true
  })
  updateMany?: TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrackProduceByArtistScalarWhereInput[] | undefined;
}
