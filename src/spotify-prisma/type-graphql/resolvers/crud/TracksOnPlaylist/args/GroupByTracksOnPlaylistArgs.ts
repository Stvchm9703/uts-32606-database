import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksOnPlaylistOrderByWithAggregationInput } from "../../../inputs/TracksOnPlaylistOrderByWithAggregationInput";
import { TracksOnPlaylistScalarWhereWithAggregatesInput } from "../../../inputs/TracksOnPlaylistScalarWhereWithAggregatesInput";
import { TracksOnPlaylistWhereInput } from "../../../inputs/TracksOnPlaylistWhereInput";
import { TracksOnPlaylistScalarFieldEnum } from "../../../../enums/TracksOnPlaylistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupByTracksOnPlaylistArgs {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereInput, {
    nullable: true
  })
  where?: TracksOnPlaylistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: TracksOnPlaylistOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"playlistId" | "trackId">;

  @TypeGraphQL.Field(_type => TracksOnPlaylistScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: TracksOnPlaylistScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
