import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketUpdateWithoutTagInput } from "../inputs/AlbumAvailableMarketUpdateWithoutTagInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput", {
  isAbstract: true
})
export class AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketUpdateWithoutTagInput, {
    nullable: false
  })
  data!: AlbumAvailableMarketUpdateWithoutTagInput;
}
