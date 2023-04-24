import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateNestedOneWithoutAvailableMarketsInput } from "../inputs/AlbumCreateNestedOneWithoutAvailableMarketsInput";
import { TagCreateNestedOneWithoutAlbumAvailableMarketInput } from "../inputs/TagCreateNestedOneWithoutAlbumAvailableMarketInput";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateInput", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateInput {
  @TypeGraphQL.Field(_type => AlbumCreateNestedOneWithoutAvailableMarketsInput, {
    nullable: false
  })
  Album!: AlbumCreateNestedOneWithoutAvailableMarketsInput;

  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutAlbumAvailableMarketInput, {
    nullable: false
  })
  Tag!: TagCreateNestedOneWithoutAlbumAvailableMarketInput;
}
