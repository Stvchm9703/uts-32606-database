import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateNestedOneWithoutAvailableMarketsInput } from "../inputs/AlbumCreateNestedOneWithoutAvailableMarketsInput";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateWithoutTagInput", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => AlbumCreateNestedOneWithoutAvailableMarketsInput, {
    nullable: false
  })
  Album!: AlbumCreateNestedOneWithoutAvailableMarketsInput;
}
