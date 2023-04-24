import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateManyTagInputEnvelope } from "../inputs/AlbumAvailableMarketCreateManyTagInputEnvelope";
import { AlbumAvailableMarketCreateOrConnectWithoutTagInput } from "../inputs/AlbumAvailableMarketCreateOrConnectWithoutTagInput";
import { AlbumAvailableMarketCreateWithoutTagInput } from "../inputs/AlbumAvailableMarketCreateWithoutTagInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateNestedManyWithoutTagInput", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateNestedManyWithoutTagInput {
  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateWithoutTagInput], {
    nullable: true
  })
  create?: AlbumAvailableMarketCreateWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketCreateOrConnectWithoutTagInput], {
    nullable: true
  })
  connectOrCreate?: AlbumAvailableMarketCreateOrConnectWithoutTagInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateManyTagInputEnvelope, {
    nullable: true
  })
  createMany?: AlbumAvailableMarketCreateManyTagInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketWhereUniqueInput], {
    nullable: true
  })
  connect?: AlbumAvailableMarketWhereUniqueInput[] | undefined;
}
