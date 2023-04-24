import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateNestedOneWithoutAlbumProduceByArtistInput } from "../inputs/ArtistCreateNestedOneWithoutAlbumProduceByArtistInput";

@TypeGraphQL.InputType("AlbumProduceByArtistCreateWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumProduceByArtistCreateWithoutAlbumInput {
  @TypeGraphQL.Field(_type => ArtistCreateNestedOneWithoutAlbumProduceByArtistInput, {
    nullable: false
  })
  Artist!: ArtistCreateNestedOneWithoutAlbumProduceByArtistInput;
}
