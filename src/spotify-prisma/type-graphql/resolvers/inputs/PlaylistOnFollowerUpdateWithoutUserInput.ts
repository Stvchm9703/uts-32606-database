import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistUpdateOneRequiredWithoutFollowersNestedInput } from "../inputs/PlaylistUpdateOneRequiredWithoutFollowersNestedInput";

@TypeGraphQL.InputType("PlaylistOnFollowerUpdateWithoutUserInput", {
  isAbstract: true
})
export class PlaylistOnFollowerUpdateWithoutUserInput {
  @TypeGraphQL.Field(_type => PlaylistUpdateOneRequiredWithoutFollowersNestedInput, {
    nullable: true
  })
  Playlist?: PlaylistUpdateOneRequiredWithoutFollowersNestedInput | undefined;
}
