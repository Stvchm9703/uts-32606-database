import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateWithoutAlbumInput } from "../inputs/AlbumProduceByArtistCreateWithoutAlbumInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistCreateOrConnectWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumProduceByArtistCreateOrConnectWithoutAlbumInput {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateWithoutAlbumInput, {
    nullable: false
  })
  create!: AlbumProduceByArtistCreateWithoutAlbumInput;
}
