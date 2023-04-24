import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput } from "../inputs/UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpdateWithoutPlaylistInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpdateWithoutPlaylistInput {
  @TypeGraphQL.Field(_type => UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput, {
    nullable: true
  })
  User?: UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput | undefined;
}
