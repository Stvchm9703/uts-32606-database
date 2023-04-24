import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateManyTagInputEnvelope } from "../inputs/AlbumAvailableMarketCreateManyTagInputEnvelope";
import { AlbumAvailableMarketCreateOrConnectWithoutTagInput } from "../inputs/AlbumAvailableMarketCreateOrConnectWithoutTagInput";
import { AlbumAvailableMarketCreateWithoutTagInput } from "../inputs/AlbumAvailableMarketCreateWithoutTagInput";
import { AlbumAvailableMarketScalarWhereInput } from "../inputs/AlbumAvailableMarketScalarWhereInput";
import { AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput } from "../inputs/AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput";
import { AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput } from "../inputs/AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput";
import { AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput } from "../inputs/AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketUpdateManyWithoutTagNestedInput", {
  isAbstract: true
})
export class AlbumAvailableMarketUpdateManyWithoutTagNestedInput {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateWithoutTagInput], {
    nullable: true
  })
  create?: AlbumAvailableMarketCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: AlbumAvailableMarketCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  upsert?: AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: AlbumAvailableMarketCreateManyTagInputEnvelope | undefined;

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

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput], {
    nullable: true
  })
  update?: AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput], {
    nullable: true
  })
  updateMany?: AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketScalarWhereInput], {
    nullable: true
  })
  deleteMany?: AlbumAvailableMarketScalarWhereInput[] | undefined;
}
