import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstArtistOnFollowingArgs } from "./args/FindFirstArtistOnFollowingArgs";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistOnFollowing)
export class FindFirstArtistOnFollowingResolver {
  @TypeGraphQL.Query(_returns => ArtistOnFollowing, {
    nullable: true
  })
  async findFirstArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstArtistOnFollowingArgs): Promise<ArtistOnFollowing | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
