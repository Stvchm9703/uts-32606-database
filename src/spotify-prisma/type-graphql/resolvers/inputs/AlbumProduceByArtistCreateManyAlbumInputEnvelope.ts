import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateManyAlbumInput } from "../inputs/AlbumProduceByArtistCreateManyAlbumInput";

@TypeGraphQL.InputType("AlbumProduceByArtistCreateManyAlbumInputEnvelope", {
  isAbstract: true
})
export class AlbumProduceByArtistCreateManyAlbumInputEnvelope {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateManyAlbumInput], {
    nullable: false
  })
  data!: AlbumProduceByArtistCreateManyAlbumInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
