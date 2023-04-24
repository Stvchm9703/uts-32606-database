import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksOnPlaylistCreateInput } from "../../../inputs/TracksOnPlaylistCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneTracksOnPlaylistArgs {
  @TypeGraphQL.Field(_type => TracksOnPlaylistCreateInput, {
    nullable: false
  })
  data!: TracksOnPlaylistCreateInput;
}
