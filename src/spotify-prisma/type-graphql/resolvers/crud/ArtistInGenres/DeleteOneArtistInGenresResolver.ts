import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { DeleteOneArtistInGenresArgs } from "./args/DeleteOneArtistInGenresArgs";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInGenres)
export class DeleteOneArtistInGenresResolver {
  @TypeGraphQL.Mutation(_returns => ArtistInGenres, {
    nullable: true
  })
  async deleteOneArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: DeleteOneArtistInGenresArgs): Promise<ArtistInGenres | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.delete({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
