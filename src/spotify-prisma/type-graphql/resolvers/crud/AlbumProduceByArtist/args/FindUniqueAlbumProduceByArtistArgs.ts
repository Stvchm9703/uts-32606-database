import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumProduceByArtistWhereUniqueInput } from "../../../inputs/AlbumProduceByArtistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueAlbumProduceByArtistArgs {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereUniqueInput, {
    nullable: false
  })
  where!: AlbumProduceByArtistWhereUniqueInput;
}
