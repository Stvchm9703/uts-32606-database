import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumProduceByArtistCreateInput } from "../../../inputs/AlbumProduceByArtistCreateInput";
import { AlbumProduceByArtistUpdateInput } from "../../../inputs/AlbumProduceByArtistUpdateInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../../../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneAlbumProduceByArtistArgs {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumProduceByArtistWhereUniqueInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateInput, {
    nullable: false
  })
  create!: AlbumProduceByArtistCreateInput;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistUpdateInput, {
    nullable: false
  })
  update!: AlbumProduceByArtistUpdateInput;
}
