import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { AlbumProduceByArtistScalarWhereInput } from "../inputs/AlbumProduceByArtistScalarWhereInput";
import { AlbumProduceByArtistUpdateManyMutationInput } from "../inputs/AlbumProduceByArtistUpdateManyMutationInput";

@TypeGraphQL.InputType("AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput", {
  isAbstract: true
})
export class AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistScalarWhereInput, {
    nullable: false
  })
  where!: AlbumProduceByArtistScalarWhereInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateManyMutationInput, {
    nullable: false
  })
  data!: AlbumProduceByArtistUpdateManyMutationInput;
}
