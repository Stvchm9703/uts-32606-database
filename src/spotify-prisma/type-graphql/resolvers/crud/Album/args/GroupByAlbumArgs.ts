import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumOrderByWithAggregationInput } from "../../../inputs/AlbumOrderByWithAggregationInput";
import { AlbumScalarWhereWithAggregatesInput } from "../../../inputs/AlbumScalarWhereWithAggregatesInput";
import { AlbumWhereInput } from "../../../inputs/AlbumWhereInput";
import { AlbumScalarFieldEnum } from "../../../../enums/AlbumScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAlbumArgs {
  @TypeGraphQL.Field(_type => AlbumWhereInput, {
    nullable: true
  })
  where?: AlbumWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AlbumOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AlbumOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "createdAt" | "updatedAt" | "uid" | "albumType" | "totalTracks" | "name" | "releaseDate" | "releaseDatePrecision" | "albumGroup" | "copyrights" | "imageUrl">;

  @TypeGraphQL.Field(_type => AlbumScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AlbumScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
