import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregatePlaylistArgs } from "./args/AggregatePlaylistArgs";
import { Playlist } from "../../../models/Playlist";
import { AggregatePlaylist } from "../../outputs/AggregatePlaylist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Playlist)
export class AggregatePlaylistResolver {
  @TypeGraphQL.Query(_returns => AggregatePlaylist, {
    nullable: false
  })
  async aggregatePlaylist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregatePlaylistArgs): Promise<AggregatePlaylist> {
    return getPrismaFromContext(ctx).playlist.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
