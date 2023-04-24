import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksOnPlaylistWhereInput } from "../../../inputs/TracksOnPlaylistWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTracksOnPlaylistArgs {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereInput, {
    nullable: true
  })
  where?: TracksOnPlaylistWhereInput | undefined;
}
