import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindFirstArtistInGenresArgs } from "./args/FindFirstArtistInGenresArgs";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInGenres)
export class FindFirstArtistInGenresResolver {
  @TypeGraphQL.Query(_returns => ArtistInGenres, {
    nullable: true
  })
  async findFirstArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindFirstArtistInGenresArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findFirst({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
