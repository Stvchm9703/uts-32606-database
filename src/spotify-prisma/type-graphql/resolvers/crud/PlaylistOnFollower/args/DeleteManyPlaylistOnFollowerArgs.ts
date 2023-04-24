import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOnFollowerWhereInput } from "../../../inputs/PlaylistOnFollowerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyPlaylistOnFollowerArgs {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereInput, {
    nullable: true
  })
  where?: PlaylistOnFollowerWhereInput | undefined;
}
