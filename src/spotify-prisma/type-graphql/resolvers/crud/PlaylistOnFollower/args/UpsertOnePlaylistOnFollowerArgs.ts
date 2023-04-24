import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOnFollowerCreateInput } from "../../../inputs/PlaylistOnFollowerCreateInput";
import { PlaylistOnFollowerUpdateInput } from "../../../inputs/PlaylistOnFollowerUpdateInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../../../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOnePlaylistOnFollowerArgs {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerWhereUniqueInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerCreateInput, {
    nullable: false
  })
  create!: PlaylistOnFollowerCreateInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerUpdateInput, {
    nullable: false
  })
  update!: PlaylistOnFollowerUpdateInput;
}
