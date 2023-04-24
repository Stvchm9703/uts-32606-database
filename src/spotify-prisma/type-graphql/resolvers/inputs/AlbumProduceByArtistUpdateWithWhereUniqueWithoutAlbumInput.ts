import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistUpdateWithoutAlbumInput } from "../inputs/AlbumProduceByArtistUpdateWithoutAlbumInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateWithoutAlbumInput, {
    nullable: false
  })
  data!: AlbumProduceByArtistUpdateWithoutAlbumInput;
}
