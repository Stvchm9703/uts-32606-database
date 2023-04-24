import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistCreateWithoutArtistInput } from "../inputs/AlbumProduceByArtistCreateWithoutArtistInput";
import { AlbumProduceByArtistUpdateWithoutArtistInput } from "../inputs/AlbumProduceByArtistUpdateWithoutArtistInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateWithoutArtistInput, {
    nullable: false
  })
  update!: AlbumProduceByArtistUpdateWithoutArtistInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateWithoutArtistInput, {
    nullable: false
  })
  create!: AlbumProduceByArtistCreateWithoutArtistInput;
}
