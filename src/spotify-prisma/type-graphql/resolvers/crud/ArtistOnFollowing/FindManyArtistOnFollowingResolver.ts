import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindManyArtistOnFollowingArgs } from "./args/FindManyArtistOnFollowingArgs";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistOnFollowing)
export class FindManyArtistOnFollowingResolver {
  @TypeGraphQL.Query(_returns => [ArtistOnFollowing], {
    nullable: false
  })
  async artistOnFollowings(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindManyArtistOnFollowingArgs): Promise<ArtistOnFollowing[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findMany({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
