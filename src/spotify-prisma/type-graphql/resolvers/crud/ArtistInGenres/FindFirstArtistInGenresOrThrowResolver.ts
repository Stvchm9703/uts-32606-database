import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstArtistInGenresOrThrowArgs } from "./args/FindFirstArtistInGenresOrThrowArgs";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInGenres)
export class FindFirstArtistInGenresOrThrowResolver {
  @TypeGraphQL.Query(_returns => ArtistInGenres, {
    nullable: true
  })
  async findFirstArtistInGenresOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstArtistInGenresOrThrowArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findFirstOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
