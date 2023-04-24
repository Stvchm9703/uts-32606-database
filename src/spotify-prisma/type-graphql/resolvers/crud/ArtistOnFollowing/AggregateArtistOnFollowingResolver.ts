import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateArtistOnFollowingArgs } from "./args/AggregateArtistOnFollowingArgs";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { AggregateArtistOnFollowing } from "../../outputs/AggregateArtistOnFollowing";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistOnFollowing)
export class AggregateArtistOnFollowingResolver {
  @TypeGraphQL.Query(_returns => AggregateArtistOnFollowing, {
    nullable: false
  })
  async aggregateArtistOnFollowing(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArtistOnFollowingArgs): Promise<AggregateArtistOnFollowing> {
    return getPrismaFromContext(ctx).artistOnFollowing.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
