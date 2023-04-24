import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOnFollowerCreateManyInput } from "../../../inputs/PlaylistOnFollowerCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyPlaylistOnFollowerArgs {
  @TypeGraphQL.Field(_type => [PlaylistOnFollowerCreateManyInput], {
    nullable: false
  })
  data!: PlaylistOnFollowerCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
