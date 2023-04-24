import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutAlbumAvailableMarketInput } from "../inputs/TagCreateNestedOneWithoutAlbumAvailableMarketInput";

@TypeGraphQL.InputType("AlbumAvailableMarketCreateWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumAvailableMarketCreateWithoutAlbumInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutAlbumAvailableMarketInput, {
    nullable: false
  })
  Tag!: TagCreateNestedOneWithoutAlbumAvailableMarketInput;
}
