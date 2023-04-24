import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumUpdateOneRequiredWithoutArtistsNestedInput } from "../inputs/AlbumUpdateOneRequiredWithoutArtistsNestedInput";
import { ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput } from "../inputs/ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpdateInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpdateInput {
  @TypeGraphQL.Field(_type => AlbumUpdateOneRequiredWithoutArtistsNestedInput, {
    nullable: true
  })
  Album?: AlbumUpdateOneRequiredWithoutArtistsNestedInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput, {
    nullable: true
  })
  Artist?: ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput | undefined;
}
