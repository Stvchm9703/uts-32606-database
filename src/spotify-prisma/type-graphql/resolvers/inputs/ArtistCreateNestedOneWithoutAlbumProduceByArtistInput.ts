import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateOrConnectWithoutAlbumProduceByArtistInput } from "../inputs/ArtistCreateOrConnectWithoutAlbumProduceByArtistInput";
import { ArtistCreateWithoutAlbumProduceByArtistInput } from "../inputs/ArtistCreateWithoutAlbumProduceByArtistInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistCreateNestedOneWithoutAlbumProduceByArtistInput", {
  isAbstract: true
})
export class ArtistCreateNestedOneWithoutAlbumProduceByArtistInput {
  @TypeGraphQL.Field(_type => ArtistCreateWithoutAlbumProduceByArtistInput, {
    nullable: true
  })
  create?: ArtistCreateWithoutAlbumProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistCreateOrConnectWithoutAlbumProduceByArtistInput, {
    nullable: true
  })
  connectOrCreate?: ArtistCreateOrConnectWithoutAlbumProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: true
  })
  connect?: ArtistWhereUniqueInput | undefined;
}
