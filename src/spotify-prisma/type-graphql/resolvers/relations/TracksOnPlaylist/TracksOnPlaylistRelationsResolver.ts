import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Playlist } from "../../../models/Playlist";
import { Track } from "../../../models/Track";
import { TracksOnPlaylist } from "../../../models/TracksOnPlaylist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksOnPlaylist)
export class TracksOnPlaylistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Playlist, {
    nullable: false
  })
  async Playlist(@TypeGraphQL.Root() tracksOnPlaylist: TracksOnPlaylist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Playlist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findUniqueOrThrow({
      where: {
        playlistId_trackId: {
          playlistId: tracksOnPlaylist.playlistId,
          trackId: tracksOnPlaylist.trackId,
        },
      },
    }).Playlist({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Track, {
    nullable: false
  })
  async Track(@TypeGraphQL.Root() tracksOnPlaylist: TracksOnPlaylist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Track> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findUniqueOrThrow({
      where: {
        playlistId_trackId: {
          playlistId: tracksOnPlaylist.playlistId,
          trackId: tracksOnPlaylist.trackId,
        },
      },
    }).Track({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
