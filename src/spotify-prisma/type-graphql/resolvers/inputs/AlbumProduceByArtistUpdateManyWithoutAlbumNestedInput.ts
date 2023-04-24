import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateManyAlbumInputEnvelope } from "../inputs/AlbumProduceByArtistCreateManyAlbumInputEnvelope";
import { AlbumProduceByArtistCreateOrConnectWithoutAlbumInput } from "../inputs/AlbumProduceByArtistCreateOrConnectWithoutAlbumInput";
import { AlbumProduceByArtistCreateWithoutAlbumInput } from "../inputs/AlbumProduceByArtistCreateWithoutAlbumInput";
import { AlbumProduceByArtistScalarWhereInput } from "../inputs/AlbumProduceByArtistScalarWhereInput";
import { AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput } from "../inputs/AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput";
import { AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput } from "../inputs/AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput";
import { AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput } from "../inputs/AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateWithoutAlbumInput], {
    nullable: true
  })
  create?: AlbumProduceByArtistCreateWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateOrConnectWithoutAlbumInput], {
    nullable: true
  })
  connectOrCreate?: AlbumProduceByArtistCreateOrConnectWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput], {
    nullable: true
  })
  upsert?: AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateManyAlbumInputEnvelope, {
    nullable: true
  })
  createMany?: AlbumProduceByArtistCreateManyAlbumInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput], {
    nullable: true
  })
  update?: AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput], {
    nullable: true
  })
  updateMany?: AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AlbumProduceByArtistScalarWhereInput[] | undefined;
}
