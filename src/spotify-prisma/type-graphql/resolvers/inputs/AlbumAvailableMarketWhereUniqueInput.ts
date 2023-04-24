import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInput } from "../inputs/AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInput";

@TypeGraphQL.InputType("AlbumAvailableMarketWhereUniqueInput", {
  isAbstract: true
})
export class AlbumAvailableMarketWhereUniqueInput {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInput, {
    nullable: true
  })
  albumId_tagId?: AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInput | undefined;
}
