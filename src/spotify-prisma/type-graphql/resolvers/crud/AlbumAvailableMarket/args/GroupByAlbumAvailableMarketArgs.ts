import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { AlbumAvailableMarketOrderByWithAggregationInput } from "../../../inputs/AlbumAvailableMarketOrderByWithAggregationInput";
import { AlbumAvailableMarketScalarWhereWithAggregatesInput } from "../../../inputs/AlbumAvailableMarketScalarWhereWithAggregatesInput";
import { AlbumAvailableMarketWhereInput } from "../../../inputs/AlbumAvailableMarketWhereInput";
import { AlbumAvailableMarketScalarFieldEnum } from "../../../../enums/AlbumAvailableMarketScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByAlbumAvailableMarketArgs {
  @TypeGraphQL.Field(_type => AlbumAvailableMarketWhereInput, {
    nullable: true
  })
  where?: AlbumAvailableMarketWhereInput | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: AlbumAvailableMarketOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [AlbumAvailableMarketScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"albumId" | "tagId">;

  @TypeGraphQL.Field(_type => AlbumAvailableMarketScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: AlbumAvailableMarketScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
