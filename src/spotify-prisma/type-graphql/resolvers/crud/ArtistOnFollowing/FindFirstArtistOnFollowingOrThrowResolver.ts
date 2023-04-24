import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstArtistOnFollowingOrThrowArgs } from "./args/FindFirstArtistOnFollowingOrThrowArgs";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistOnFollowing)
export class FindFirstArtistOnFollowingOrThrowResolver {
  @TypeGraphQL.Query(_returns => ArtistOnFollowing, {
    nullable: true
  })
  async findFirstArtistOnFollowingOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstArtistOnFollowingOrThrowArgs): Promise<ArtistOnFollowing | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
