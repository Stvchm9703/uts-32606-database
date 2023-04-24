import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutAlbumProduceByArtistInput } from "../inputs/ArtistCreateWithoutAlbumProduceByArtistInput";
import { ArtistUpdateWithoutAlbumProduceByArtistInput } from "../inputs/ArtistUpdateWithoutAlbumProduceByArtistInput";

@TypeGraphQL.InputType("ArtistUpsertWithoutAlbumProduceByArtistInput", {
  isAbstract: true
})
export class ArtistUpsertWithoutAlbumProduceByArtistInput {
  @TypeGraphQL.Field(_type => ArtistUpdateWithoutAlbumProduceByArtistInput, {
    nullable: false
  })
  update!: ArtistUpdateWithoutAlbumProduceByArtistInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutAlbumProduceByArtistInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutAlbumProduceByArtistInput;
}
