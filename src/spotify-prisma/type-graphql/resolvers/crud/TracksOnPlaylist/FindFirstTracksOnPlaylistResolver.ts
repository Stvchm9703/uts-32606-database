import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstTracksOnPlaylistArgs } from "./args/FindFirstTracksOnPlaylistArgs";
import { TracksOnPlaylist } from "../../../models/TracksOnPlaylist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksOnPlaylist)
export class FindFirstTracksOnPlaylistResolver {
  @TypeGraphQL.Query(_returns => TracksOnPlaylist, {
    nullable: true
  })
  async findFirstTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstTracksOnPlaylistArgs): Promise<TracksOnPlaylist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
