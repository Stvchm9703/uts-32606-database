import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput } from "../inputs/ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpdateWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpdateWithoutAlbumInput {
  @TypeGraphQL.Field(_type => ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput, {
    nullable: true
  })
  Artist?: ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput | undefined;
}
