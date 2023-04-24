import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTracksOnPlaylistOrThrowArgs } from "./args/FindUniqueTracksOnPlaylistOrThrowArgs";
import { TracksOnPlaylist } from "../../../models/TracksOnPlaylist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksOnPlaylist)
export class FindUniqueTracksOnPlaylistOrThrowResolver {
  @TypeGraphQL.Query(_returns => TracksOnPlaylist, {
    nullable: true
  })
  async getTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTracksOnPlaylistOrThrowArgs): Promise<TracksOnPlaylist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
