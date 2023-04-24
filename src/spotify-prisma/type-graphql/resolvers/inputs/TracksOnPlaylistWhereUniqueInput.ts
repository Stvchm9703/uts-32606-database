import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "../../../prisma-client-js";
import { DecimalJSScalar } from "../../scalars";
import { TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInput } from "../inputs/TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInput";

@TypeGraphQL.InputType("TracksOnPlaylistWhereUniqueInput", {
  isAbstract: true
})
export class TracksOnPlaylistWhereUniqueInput {
  @TypeGraphQL.Field(_type => TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInput, {
    nullable: true
  })
  playlistId_trackId?: TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInput | undefined;
}
