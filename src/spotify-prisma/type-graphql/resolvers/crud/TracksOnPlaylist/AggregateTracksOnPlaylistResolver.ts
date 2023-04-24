import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTracksOnPlaylistArgs } from "./args/AggregateTracksOnPlaylistArgs";
import { TracksOnPlaylist } from "../../../models/TracksOnPlaylist";
import { AggregateTracksOnPlaylist } from "../../outputs/AggregateTracksOnPlaylist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TracksOnPlaylist)
export class AggregateTracksOnPlaylistResolver {
  @TypeGraphQL.Query(_returns => AggregateTracksOnPlaylist, {
    nullable: false
  })
  async aggregateTracksOnPlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTracksOnPlaylistArgs): Promise<AggregateTracksOnPlaylist> {
    return getPrismaFromContext(ctx).tracksOnPlaylist.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
