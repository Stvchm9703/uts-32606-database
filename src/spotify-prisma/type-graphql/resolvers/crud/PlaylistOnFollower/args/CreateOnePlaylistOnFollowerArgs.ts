import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOnFollowerCreateInput } from "../../../inputs/PlaylistOnFollowerCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOnePlaylistOnFollowerArgs {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateInput, {
    nullable: false
  })
  data!: PlaylistOnFollowerCreateInput;
}
