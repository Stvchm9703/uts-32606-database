import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksOnPlaylistCreateInput } from "../../../inputs/TracksOnPlaylistCreateInput";
import { TracksOnPlaylistUpdateInput } from "../../../inputs/TracksOnPlaylistUpdateInput";
import { TracksOnPlaylistWhereUniqueInput } from "../../../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneTracksOnPlaylistArgs {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: TracksOnPlaylistWhereUniqueInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateInput, {
    nullable: false
  })
  create!: TracksOnPlaylistCreateInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistUpdateInput, {
    nullable: false
  })
  update!: TracksOnPlaylistUpdateInput;
}
