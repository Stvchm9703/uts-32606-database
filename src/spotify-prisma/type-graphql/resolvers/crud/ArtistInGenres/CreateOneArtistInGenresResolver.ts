import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { CreateOneArtistInGenresArgs } from "./args/CreateOneArtistInGenresArgs";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInGenres)
export class CreateOneArtistInGenresResolver {
  @TypeGraphQL.Mutation(_returns => ArtistInGenres, {
    nullable: false
  })
  async createOneArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: CreateOneArtistInGenresArgs): Promise<ArtistInGenres> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.create({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
