import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateArtistInGenresArgs } from "./args/AggregateArtistInGenresArgs";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { AggregateArtistInGenres } from "../../outputs/AggregateArtistInGenres";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInGenres)
export class AggregateArtistInGenresResolver {
  @TypeGraphQL.Query(_returns => AggregateArtistInGenres, {
    nullable: false
  })
  async aggregateArtistInGenres(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateArtistInGenresArgs): Promise<AggregateArtistInGenres> {
    return getPrismaFromContext(ctx).artistInGenres.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
