import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateManyArtistInputEnvelope } from "../inputs/AlbumProduceByArtistCreateManyArtistInputEnvelope";
import { AlbumProduceByArtistCreateOrConnectWithoutArtistInput } from "../inputs/AlbumProduceByArtistCreateOrConnectWithoutArtistInput";
import { AlbumProduceByArtistCreateWithoutArtistInput } from "../inputs/AlbumProduceByArtistCreateWithoutArtistInput";
import { AlbumProduceByArtistScalarWhereInput } from "../inputs/AlbumProduceByArtistScalarWhereInput";
import { AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput } from "../inputs/AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput";
import { AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput } from "../inputs/AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput";
import { AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput } from "../inputs/AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpdateManyWithoutArtistNestedInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpdateManyWithoutArtistNestedInput {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateWithoutArtistInput], {
    nullable: true
  })
  create?: AlbumProduceByArtistCreateWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateOrConnectWithoutArtistInput], {
    nullable: true
  })
  connectOrCreate?: AlbumProduceByArtistCreateOrConnectWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  upsert?: AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateManyArtistInputEnvelope, {
    nullable: true
  })
  createMany?: AlbumProduceByArtistCreateManyArtistInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  set?: AlbumProduceByArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AlbumProduceByArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  delete?: AlbumProduceByArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  connect?: AlbumProduceByArtistWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput], {
    nullable: true
  })
  update?: AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput], {
    nullable: true
  })
  updateMany?: AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AlbumProduceByArtistScalarWhereInput[] | undefined;
}
