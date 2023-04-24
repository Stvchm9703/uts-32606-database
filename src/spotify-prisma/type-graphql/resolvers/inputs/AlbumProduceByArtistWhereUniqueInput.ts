import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInput } from "../inputs/AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistWhereUniqueInput", {
  isAbstract: true
})
export class AlbumProduceByArtistWhereUniqueInput {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInput, {
    nullable: true
  })
  albumId_artistId?: AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInput | undefined;
}
