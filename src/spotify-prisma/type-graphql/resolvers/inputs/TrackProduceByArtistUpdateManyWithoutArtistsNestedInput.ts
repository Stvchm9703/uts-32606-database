import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TrackProduceByArtistCreateManyArtistsInputEnvelope } from "../inputs/TrackProduceByArtistCreateManyArtistsInputEnvelope";
import { TrackProduceByArtistCreateOrConnectWithoutArtistsInput } from "../inputs/TrackProduceByArtistCreateOrConnectWithoutArtistsInput";
import { TrackProduceByArtistCreateWithoutArtistsInput } from "../inputs/TrackProduceByArtistCreateWithoutArtistsInput";
import { TrackProduceByArtistScalarWhereInput } from "../inputs/TrackProduceByArtistScalarWhereInput";
import { TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput } from "../inputs/TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput";
import { TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput } from "../inputs/TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput";
import { TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput } from "../inputs/TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput";
import { TrackProduceByArtistWhereUniqueInput } from "../inputs/TrackProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("TrackProduceByArtistUpdateManyWithoutArtistsNestedInput", {
  isAbstract: true
})
export class TrackProduceByArtistUpdateManyWithoutArtistsNestedInput {
  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateWithoutArtistsInput], {
    nullable: true
  })
  create?: TrackProduceByArtistCreateWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistCreateOrConnectWithoutArtistsInput], {
    nullable: true
  })
  connectOrCreate?: TrackProduceByArtistCreateOrConnectWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput], {
    nullable: true
  })
  upsert?: TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => TrackProduceByArtistCreateManyArtistsInputEnvelope, {
    nullable: true
  })
  createMany?: TrackProduceByArtistCreateManyArtistsInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput], {
    nullable: true
  })
  update?: TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput], {
    nullable: true
  })
  updateMany?: TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput[] | undefined;

  @TypeGraphQL.Field(_type => [TrackProduceByArtistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: TrackProduceByArtistScalarWhereInput[] | undefined;
}
