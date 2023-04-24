import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistWhereUniqueInput } from "../../../inputs/PlaylistWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniquePlaylistOrThrowArgs {
  @TypeGraphQL.Field(_type => PlaylistWhereUniqueInput, {
    nullable: false
  })
  where!: PlaylistWhereUniqueInput;
}
