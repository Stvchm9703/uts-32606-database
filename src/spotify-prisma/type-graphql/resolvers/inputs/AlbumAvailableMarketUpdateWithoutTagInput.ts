import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput } from "../inputs/AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput";

@TypeGraphQL.InputType("AlbumAvailableMarketUpdateWithoutTagInput", {
  isAbstract: true
})
export class AlbumAvailableMarketUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput, {
    nullable: true
  })
  Album?: AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput | undefined;
}
