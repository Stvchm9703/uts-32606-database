import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumProduceByArtistUpdateManyMutationInput } from "../../../inputs/AlbumProduceByArtistUpdateManyMutationInput";
import { AlbumProduceByArtistWhereInput } from "../../../inputs/AlbumProduceByArtistWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyAlbumProduceByArtistArgs {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateManyMutationInput, {
    nullable: false
  })
  data!: AlbumProduceByArtistUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereInput, {
    nullable: true
  })
  where?: AlbumProduceByArtistWhereInput | undefined;
}
