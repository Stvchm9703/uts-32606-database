import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOnFollowerOrderByWithAggregationInput } from "../../../inputs/PlaylistOnFollowerOrderByWithAggregationInput";
import { PlaylistOnFollowerScalarWhereWithAggregatesInput } from "../../../inputs/PlaylistOnFollowerScalarWhereWithAggregatesInput";
import { PlaylistOnFollowerWhereInput } from "../../../inputs/PlaylistOnFollowerWhereInput";
import { PlaylistOnFollowerScalarFieldEnum } from "../../../../enums/PlaylistOnFollowerScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByPlaylistOnFollowerArgs {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereInput, {
    nullable: true
  })
  where?: PlaylistOnFollowerWhereInput | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: PlaylistOnFollowerOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [PlaylistOnFollowerScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"playlistId" | "userId">;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: PlaylistOnFollowerScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
