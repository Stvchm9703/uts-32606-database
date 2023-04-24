import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateManyAlbumInputEnvelope } from "../inputs/AlbumProduceByArtistCreateManyAlbumInputEnvelope";
import { AlbumProduceByArtistCreateOrConnectWithoutAlbumInput } from "../inputs/AlbumProduceByArtistCreateOrConnectWithoutAlbumInput";
import { AlbumProduceByArtistCreateWithoutAlbumInput } from "../inputs/AlbumProduceByArtistCreateWithoutAlbumInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistCreateNestedManyWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumProduceByArtistCreateNestedManyWithoutAlbumInput {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateWithoutAlbumInput], {
    nullable: true
  })
  create?: AlbumProduceByArtistCreateWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateOrConnectWithoutAlbumInput], {
    nullable: true
  })
  connectOrCreate?: AlbumProduceByArtistCreateOrConnectWithoutAlbumInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateManyAlbumInputEnvelope, {
    nullable: true
  })
  createMany?: AlbumProduceByArtistCreateManyAlbumInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistWhereUniqueInput], {
    nullable: true
  })
  connect?: AlbumProduceByArtistWhereUniqueInput[] | undefined;
}
