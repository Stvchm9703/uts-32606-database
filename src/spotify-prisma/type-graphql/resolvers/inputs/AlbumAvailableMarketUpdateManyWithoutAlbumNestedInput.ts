import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateManyAlbumInputEnvelope } from "../inputs/AlbumAvailableMarketCreateManyAlbumInputEnvelope";
import { AlbumAvailableMarketCreateOrConnectWithoutAlbumInput } from "../inputs/AlbumAvailableMarketCreateOrConnectWithoutAlbumInput";
import { AlbumAvailableMarketCreateWithoutAlbumInput } from "../inputs/AlbumAvailableMarketCreateWithoutAlbumInput";
import { AlbumAvailableMarketScalarWhereInput } from "../inputs/AlbumAvailableMarketScalarWhereInput";
import { AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput } from "../inputs/AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput";
import { AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput } from "../inputs/AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput";
import { AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput } from "../inputs/AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput", {
  isAbstract: true
})
export class AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateWithoutAlbumInput], {
    nullable: true
  })
  create?: AlbumAvailableMarketCreateWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateOrConnectWithoutAlbumInput], {
    nullable: true
  })
  connectOrCreate?: AlbumAvailableMarketCreateOrConnectWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput], {
    nullable: true
  })
  upsert?: AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateManyAlbumInputEnvelope, {
    nullable: true
  })
  createMany?: AlbumAvailableMarketCreateManyAlbumInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  set?: AlbumAvailableMarketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  disconnect?: AlbumAvailableMarketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  delete?: AlbumAvailableMarketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  connect?: AlbumAvailableMarketWhereUniqueInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput], {
    nullable: true
  })
  update?: AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput], {
    nullable: true
  })
  updateMany?: AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AlbumAvailableMarketScalarWhereInput[] | undefined;
}
