import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistUpdateWithoutArtistInput } from "../inputs/AlbumProduceByArtistUpdateWithoutArtistInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateWithoutArtistInput, {
    nullable: false
  })
  data!: AlbumProduceByArtistUpdateWithoutArtistInput;
}
