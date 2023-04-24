import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketCreateWithoutAlbumInput } from "../inputs/AlbumAvailableMarketCreateWithoutAlbumInput";
import { AlbumAvailableMarketWhereUniqueInput } from "../inputs/AlbumAvailableMarketWhereUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateOrConnectWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateOrConnectWithoutAlbumInput {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumAvailableMarketWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketCreateWithoutAlbumInput, {
    nullable: false
  })
  create!: AlbumAvailableMarketCreateWithoutAlbumInput;
}
