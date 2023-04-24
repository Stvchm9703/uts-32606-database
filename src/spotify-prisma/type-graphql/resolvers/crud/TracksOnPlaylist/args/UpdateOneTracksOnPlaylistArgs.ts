import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksOnPlaylistUpdateInput } from "../../../inputs/TracksOnPlaylistUpdateInput";
import { TracksOnPlaylistWhereUniqueInput } from "../../../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneTracksOnPlaylistArgs {
  @TypeGraphQL.Field(_type => TracksOnPlaylistUpdateInput, {
    nullable: false
  })
  data!: TracksOnPlaylistUpdateInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: TracksOnPlaylistWhereUniqueInput;
}
