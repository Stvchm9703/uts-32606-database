import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { PlaylistOnFollowerUpdateManyMutationInput } from "../../../inputs/PlaylistOnFollowerUpdateManyMutationInput";
import { PlaylistOnFollowerWhereInput } from "../../../inputs/PlaylistOnFollowerWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyPlaylistOnFollowerArgs {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerUpdateManyMutationInput, {
    nullable: false
  })
  data!: PlaylistOnFollowerUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => PlaylistOnFollowerWhereInput, {
    nullable: true
  })
  where?: PlaylistOnFollowerWhereInput | undefined;
}
