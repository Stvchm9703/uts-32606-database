import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateOneRequiredWithoutFollowersNestedInput } from "../inputs/PlaylistUpdateOneRequiredWithoutFollowersNestedInput";
import { UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpdateInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpdateInput {
  @TypeGraphQL.Field(_type => PlaylistUpdateOneRequiredWithoutFollowersNestedInput, {
    nullable: true
  })
  Playlist?: PlaylistUpdateOneRequiredWithoutFollowersNestedInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput | undefined;
}
