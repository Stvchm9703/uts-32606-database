import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueArtistInGenresOrThrowArgs } from "./args/FindUniqueArtistInGenresOrThrowArgs";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInGenres)
export class FindUniqueArtistInGenresOrThrowResolver {
  @TypeGraphQL.Query(_returns => ArtistInGenres, {
    nullable: true
  })
  async findUniqueArtistInGenresOrThrow(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueArtistInGenresOrThrowArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
