import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateManyAlbumInputEnvelope } from "../inputs/AlbumAvailableMarketCreateManyAlbumInputEnvelope";
import { AlbumAvailableMarketCreateOrConnectWithoutAlbumInput } from "../inputs/AlbumAvailableMarketCreateOrConnectWithoutAlbumInput";
import { AlbumAvailableMarketCreateWithoutAlbumInput } from "../inputs/AlbumAvailableMarketCreateWithoutAlbumInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateNestedManyWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateNestedManyWithoutAlbumInput {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateWithoutAlbumInput], {
    nullable: true
  })
  create?: AlbumAvailableMarketCreateWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateOrConnectWithoutAlbumInput], {
    nullable: true
  })
  connectOrCreate?: AlbumAvailableMarketCreateOrConnectWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateManyAlbumInputEnvelope, {
    nullable: true
  })
  createMany?: AlbumAvailableMarketCreateManyAlbumInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  connect?: AlbumAvailableMarketWhereUniqueInput[] | undefined;
}
