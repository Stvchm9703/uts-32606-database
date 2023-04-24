import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketWhereInput } from "../inputs/AlbumAvailableMarketWhereInput";

@TypeGraphQL.InputType("AlbumAvailableMarketListRelationFilter", {
  isAbstract: true
})
export class AlbumAvailableMarketListRelationFilter {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereInput, {
    nullable: true
  })
  every?: AlbumAvailableMarketWhereInput | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereInput, {
    nullable: true
  })
  some?: AlbumAvailableMarketWhereInput | undefined;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereInput, {
    nullable: true
  })
  none?: AlbumAvailableMarketWhereInput | undefined;
}
