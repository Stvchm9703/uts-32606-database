import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumProduceByArtistUpdateInput } from "../../../inputs/AlbumProduceByArtistUpdateInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../../../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneAlbumProduceByArtistArgs {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateInput, {
    nullable: false
  })
  data!: AlbumProduceByArtistUpdateInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumProduceByArtistWhereUniqueInput;
}
