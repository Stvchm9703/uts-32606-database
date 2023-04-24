import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { ArtistCreateOrConnectWithoutAlbumProduceByArtistInput } from "../inputs/ArtistCreateOrConnectWithoutAlbumProduceByArtistInput";
import { ArtistCreateWithoutAlbumProduceByArtistInput } from "../inputs/ArtistCreateWithoutAlbumProduceByArtistInput";
import { ArtistUpdateWithoutAlbumProduceByArtistInput } from "../inputs/ArtistUpdateWithoutAlbumProduceByArtistInput";
import { ArtistUpsertWithoutAlbumProduceByArtistInput } from "../inputs/ArtistUpsertWithoutAlbumProduceByArtistInput";
import { ArtistWhereUniqueInput } from "../inputs/ArtistWhereUniqueInput";

@TypeGraphQL.InputType("ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput", {
  isAbstract: true
})
export class ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput {
  @TypeGraphQL.Field(_type => ArtistCreateWithoutAlbumProduceByArtistInput, {
    nullable: true
  })
  create?: ArtistCreateWithoutAlbumProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistCreateOrConnectWithoutAlbumProduceByArtistInput, {
    nullable: true
  })
  connectOrCreate?: ArtistCreateOrConnectWithoutAlbumProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpsertWithoutAlbumProduceByArtistInput, {
    nullable: true
  })
  upsert?: ArtistUpsertWithoutAlbumProduceByArtistInput | undefined;

  @TypeGraphQL.Field(_type => ArtistWhereUniqueInput, {
    nullable: true
  })
  connect?: ArtistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => ArtistUpdateWithoutAlbumProduceByArtistInput, {
    nullable: true
  })
  update?: ArtistUpdateWithoutAlbumProduceByArtistInput | undefined;
}
