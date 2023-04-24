import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInput } from "../inputs/PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInput";

@TypeGraphQL.InputType("PlaylistOnFollowerWhereUniqueInput", {
  isAbstract: true
})
export class PlaylistOnFollowerWhereUniqueInput {
  @TypeGraphQL.Field(_type => PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInput, {
    nullable: true
  })
  playlistId_userId?: PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInput | undefined;
}
