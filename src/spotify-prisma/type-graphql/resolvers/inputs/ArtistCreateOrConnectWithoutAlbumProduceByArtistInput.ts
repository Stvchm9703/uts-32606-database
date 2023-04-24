import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateWithoutAlbumProduceByArtistInput } from "../inputs/ArtistCreateWithoutAlbumProduceByArtistInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistCreateOrConnectWithoutAlbumProduceByArtistInput", {
  isAbstract: true
})
export class ArtistCreateOrConnectWithoutAlbumProduceByArtistInput {
  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: false
  })
  where!: ArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => ArtistCreateWithoutAlbumProduceByArtistInput, {
    nullable: false
  })
  create!: ArtistCreateWithoutAlbumProduceByArtistInput;
}
