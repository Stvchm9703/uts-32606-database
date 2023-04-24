import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Artist } from "../../../models/Artist";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { User } from "../../../models/User";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistOnFollowing)
export class ArtistOnFollowingRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Artist, {
    nullable: false
  })
  async Artist(@TypeGraphQL.Root() artistOnFollowing: ArtistOnFollowing, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Artist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findUniqueOrThrow({
      where: {
        userId_artistId: {
          userId: artistOnFollowing.userId,
          artistId: artistOnFollowing.artistId,
        },
      },
    }).Artist({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => User, {
    nullable: false
  })
  async User(@TypeGraphQL.Root() artistOnFollowing: ArtistOnFollowing, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<User> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistOnFollowing.findUniqueOrThrow({
      where: {
        userId_artistId: {
          userId: artistOnFollowing.userId,
          artistId: artistOnFollowing.artistId,
        },
      },
    }).User({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
