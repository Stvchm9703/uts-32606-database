import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumProduceByArtistOrderByWithRelationInput } from "../../../inputs/AlbumProduceByArtistOrderByWithRelationInput";
import { AlbumProduceByArtistWhereInput } from "../../../inputs/AlbumProduceByArtistWhereInput";
import { AlbumProduceByArtistWhereUniqueInput } from "../../../inputs/AlbumProduceByArtistWhereUniqueInput";
import { AlbumProduceByArtistScalarFieldEnum } from "../../../../enums/AlbumProduceByArtistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstAlbumProduceByArtistArgs {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereInput, {
    nullable: true
  })
  where?: AlbumProduceByArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: AlbumProduceByArtistOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereUniqueInput, {
    nullable: true
  })
  cursor?: AlbumProduceByArtistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"albumId" | "artistId"> | undefined;
}
