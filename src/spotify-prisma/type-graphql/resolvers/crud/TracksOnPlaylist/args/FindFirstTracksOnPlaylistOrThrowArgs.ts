import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TracksOnPlaylistOrderByWithRelationInput } from "../../../inputs/TracksOnPlaylistOrderByWithRelationInput";
import { TracksOnPlaylistWhereInput } from "../../../inputs/TracksOnPlaylistWhereInput";
import { TracksOnPlaylistWhereUniqueInput } from "../../../inputs/TracksOnPlaylistWhereUniqueInput";
import { TracksOnPlaylistScalarFieldEnum } from "../../../../enums/TracksOnPlaylistScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstTracksOnPlaylistOrThrowArgs {
  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereInput, {
    nullable: true
  })
  where?: TracksOnPlaylistWhereInput | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistOrderByWithRelationInput], {
    nullable: true
  })
  orderBy?: TracksOnPlaylistOrderByWithRelationInput[] | undefined;

  @TypeGraphQL.Field(_type => TracksOnPlaylistWhereUniqueInput, {
    nullable: true
  })
  cursor?: TracksOnPlaylistWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [TracksOnPlaylistScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"playlistId" | "trackId"> | undefined;
}
