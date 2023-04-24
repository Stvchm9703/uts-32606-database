import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput } from "../inputs/AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput";
import { TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput } from "../inputs/TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput";

@TypeGraphQL.InputType("AlbumAvailableMarketUpdateInput", {
  isAbstract: true
})
export class AlbumAvailableMarketUpdateInput {
  @TypeGraphQL.Field(_type => AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput, {
    nullable: true
  })
  Album?: AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput, {
    nullable: true
  })
  Tag?: TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput | undefined;
}
