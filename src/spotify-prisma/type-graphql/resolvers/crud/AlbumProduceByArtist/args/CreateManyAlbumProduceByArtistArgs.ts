import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumProduceByArtistCreateManyInput } from "../../../inputs/AlbumProduceByArtistCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyAlbumProduceByArtistArgs {
  @TypeGraphQL.Field(_type => [AlbumProduceByArtistCreateManyInput], {
    nullable: false
  })
  data!: AlbumProduceByArtistCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
