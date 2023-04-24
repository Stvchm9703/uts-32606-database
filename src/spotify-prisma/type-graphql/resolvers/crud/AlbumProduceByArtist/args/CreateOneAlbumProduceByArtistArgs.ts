import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumProduceByArtistCreateInput } from "../../../inputs/AlbumProduceByArtistCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneAlbumProduceByArtistArgs {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistCreateInput, {
    nullable: false
  })
  data!: AlbumProduceByArtistCreateInput;
}
