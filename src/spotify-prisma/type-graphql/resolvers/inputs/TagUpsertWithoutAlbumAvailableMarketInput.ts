import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateWithoutAlbumAvailableMarketInput } from "../inputs/TagCreateWithoutAlbumAvailableMarketInput";
import { TagUpdateWithoutAlbumAvailableMarketInput } from "../inputs/TagUpdateWithoutAlbumAvailableMarketInput";

@TypeGraphQL.InputType("TagUpsertWithoutAlbumAvailableMarketInput", {
  isAbstract: true
})
export class TagUpsertWithoutAlbumAvailableMarketInput {
  @TypeGraphQL.Field(_type => TagUpdateWithoutAlbumAvailableMarketInput, {
    nullable: false
  })
  update!: TagUpdateWithoutAlbumAvailableMarketInput;

  @TypeGraphQL.Field(_type => TagCreateWithoutAlbumAvailableMarketInput, {
    nullable: false
  })
  create!: TagCreateWithoutAlbumAvailableMarketInput;
}
