import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneArtistOnFollowingArgs } from "./args/UpsertOneArtistOnFollowingArgs";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistOnFollowing)
export class UpsertOneArtistOnFollowingResolver {
  @TypeGraphQL.Mutation(_returns => ArtistOnFollowing, {
    nullable: false
  })
  async upsertOneArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneArtistOnFollowingArgs): Promise<ArtistOnFollowing> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
