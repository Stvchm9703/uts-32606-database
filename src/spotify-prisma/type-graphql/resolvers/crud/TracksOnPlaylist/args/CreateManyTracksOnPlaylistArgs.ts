import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksOnPlaylistCreateManyInput } from "../../../inputs/TracksOnPlaylistCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyTracksOnPlaylistArgs {
  @TypeGraphQL.Field(_type => [TracksOnPlaylistCreateManyInput], {
    nullable: false
  })
  data!: TracksOnPlaylistCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
