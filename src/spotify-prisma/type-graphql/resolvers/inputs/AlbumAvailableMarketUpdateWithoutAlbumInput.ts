import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput } from "../inputs/TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput";

@TypeGraphQL.InputType("AlbumAvailableMarketUpdateWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumAvailableMarketUpdateWithoutAlbumInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput, {
    nullable: true
  })
  Tag?: TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput | undefined;
}
