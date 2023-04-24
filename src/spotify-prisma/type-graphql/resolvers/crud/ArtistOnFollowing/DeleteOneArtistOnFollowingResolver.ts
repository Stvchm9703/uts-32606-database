import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneArtistOnFollowingArgs } from "./args/DeleteOneArtistOnFollowingArgs";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistOnFollowing)
export class DeleteOneArtistOnFollowingResolver {
  @TypeGraphQL.Mutation(_returns => ArtistOnFollowing, {
    nullable: true
  })
  async deleteOneArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneArtistOnFollowingArgs): Promise<ArtistOnFollowing | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
