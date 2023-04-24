import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOnFollowerUpdateInput } from "../../../inputs/PlaylistOnFollowerUpdateInput";
import { PlaylistOnFollowerWhereUniqueInput } from "../../../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOnePlaylistOnFollowerArgs {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerUpdateInput, {
    nullable: false
  })
  data!: PlaylistOnFollowerUpdateInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerWhereUniqueInput;
}
