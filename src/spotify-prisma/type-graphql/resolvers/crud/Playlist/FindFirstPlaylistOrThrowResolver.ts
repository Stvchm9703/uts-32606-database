import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstPlaylistOrThrowArgs } from "./args/FindFirstPlaylistOrThrowArgs";
import { Playlist } from "../../../models/Playlist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Playlist)
export class FindFirstPlaylistOrThrowResolver {
  @TypeGraphQL.Query(_returns => Playlist, {
    nullable: true
  })
  async findFirstPlaylistOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstPlaylistOrThrowArgs): Promise<Playlist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).playlist.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
