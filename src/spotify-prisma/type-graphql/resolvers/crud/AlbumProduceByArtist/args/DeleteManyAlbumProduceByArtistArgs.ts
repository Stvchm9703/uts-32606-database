import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumProduceByArtistWhereInput } from "../../../inputs/AlbumProduceByArtistWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyAlbumProduceByArtistArgs {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereInput, {
    nullable: true
  })
  where?: AlbumProduceByArtistWhereInput | undefined;
}
