import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketUpdateWithoutAlbumInput } from "../inputs/AlbumAvailableMarketUpdateWithoutAlbumInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketUpdateWithoutAlbumInput, {
    nullable: false
  })
  data!: AlbumAvailableMarketUpdateWithoutAlbumInput;
}
