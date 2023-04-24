import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumCreateNestedOneWithoutArtistsInput } from "../inputs/AlbumCreateNestedOneWithoutArtistsInput";
import { ArtistCreateNestedOneWithoutAlbumProduceByArtistInput } from "../inputs/ArtistCreateNestedOneWithoutAlbumProduceByArtistInput";

@TypeGraphQL.InputType("AlbumProduceByArtistCreateInput", {
  isAbstract: true
})
export class AlbumProduceByArtistCreateInput {
  @TypeGraphQL.Field(_type => AlbumCreateNestedOneWithoutArtistsInput, {
    nullable: false
  })
  Album!: AlbumCreateNestedOneWithoutArtistsInput;

  @TypeGraphQL.Field(_type => ArtistCreateNestedOneWithoutAlbumProduceByArtistInput, {
    nullable: false
  })
  Artist!: ArtistCreateNestedOneWithoutAlbumProduceByArtistInput;
}
