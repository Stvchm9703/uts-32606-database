import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksOnPlaylistUpdateManyMutationInput } from "../../../inputs/TracksOnPlaylistUpdateManyMutationInput";
import { TracksOnPlaylistWhereInput } from "../../../inputs/TracksOnPlaylistWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyTracksOnPlaylistArgs {
  @TypeGraphQL.Field(_type => TracksOnPlaylistUpdateManyMutationInput, {
    nullable: false
  })
  data!: TracksOnPlaylistUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereInput, {
    nullable: true
  })
  where?: TracksOnPlaylistWhereInput | undefined;
}
