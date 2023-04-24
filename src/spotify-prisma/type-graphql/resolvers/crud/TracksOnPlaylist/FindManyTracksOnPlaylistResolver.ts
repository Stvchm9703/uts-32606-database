import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyTracksOnPlaylistArgs } from "./args/FindManyTracksOnPlaylistArgs";
import { TracksOnPlaylist } from "../../../models/TracksOnPlaylist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksOnPlaylist)
export class FindManyTracksOnPlaylistResolver {
  @TypeGraphQL.Query(_returns => [TracksOnPlaylist], {
    nullable: false
  })
  async tracksOnPlaylists(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyTracksOnPlaylistArgs): Promise<TracksOnPlaylist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
