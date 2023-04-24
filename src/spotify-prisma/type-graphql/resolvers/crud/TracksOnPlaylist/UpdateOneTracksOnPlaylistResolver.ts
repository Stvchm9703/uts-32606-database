import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTracksOnPlaylistArgs } from "./args/UpdateOneTracksOnPlaylistArgs";
import { TracksOnPlaylist } from "../../../models/TracksOnPlaylist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksOnPlaylist)
export class UpdateOneTracksOnPlaylistResolver {
  @TypeGraphQL.Mutation(_returns => TracksOnPlaylist, {
    nullable: true
  })
  async updateOneTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTracksOnPlaylistArgs): Promise<TracksOnPlaylist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).tracksOnPlaylist.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
