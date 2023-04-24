import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOnFollowerWhereUniqueInput } from "../../../inputs/PlaylistOnFollowerWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePlaylistOnFollowerOrThrowArgs {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistOnFollowerWhereUniqueInput;
}
