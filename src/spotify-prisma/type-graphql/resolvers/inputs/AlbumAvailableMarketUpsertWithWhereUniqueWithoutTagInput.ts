import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateWithoutTagInput } from "../inputs/AlbumAvailableMarketCreateWithoutTagInput";
import { AlbumAvailableMarketUpdateWithoutTagInput } from "../inputs/AlbumAvailableMarketUpdateWithoutTagInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketUpdateWithoutTagInput, {
    nullable: false
  })
  update!: AlbumAvailableMarketUpdateWithoutTagInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateWithoutTagInput, {
    nullable: false
  })
  create!: AlbumAvailableMarketCreateWithoutTagInput;
}
