import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateWithoutAlbumInput } from "../inputs/AlbumProduceByArtistCreateWithoutAlbumInput";
import { AlbumProduceByArtistUpdateWithoutAlbumInput } from "../inputs/AlbumProduceByArtistUpdateWithoutAlbumInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateWithoutAlbumInput, {
    nullable: false
  })
  update!: AlbumProduceByArtistUpdateWithoutAlbumInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateWithoutAlbumInput, {
    nullable: false
  })
  create!: AlbumProduceByArtistCreateWithoutAlbumInput;
}
