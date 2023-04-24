import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksOnPlaylistWhereUniqueInput } from "../../../inputs/TracksOnPlaylistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueTracksOnPlaylistArgs {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: TracksOnPlaylistWhereUniqueInput;
}
