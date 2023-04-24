import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumProduceByArtistOrderByWithAggregationInput } from "../../../inputs/AlbumProduceByArtistOrderByWithAggregationInput";
import { AlbumProduceByArtistScalarWhereWithAggregatesInput } from "../../../inputs/AlbumProduceByArtistScalarWhereWithAggregatesInput";
import { AlbumProduceByArtistWhereInput } from "../../../inputs/AlbumProduceByArtistWhereInput";
import { AlbumProduceByArtistScalarFieldEnum } from "../../../../enums/AlbumProduceByArtistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAlbumProduceByArtistArgs {
  @TypeGraphQL.Field(_type => AlbumProduceByArtistWhereInput, {
    nullable: true
  })
  where?: AlbumProduceByArtistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AlbumProduceByArtistOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumProduceByArtistScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"albumId" | "artistId">;

  @TypeGraphQL.Field(_type => AlbumProduceByArtistScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AlbumProduceByArtistScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
