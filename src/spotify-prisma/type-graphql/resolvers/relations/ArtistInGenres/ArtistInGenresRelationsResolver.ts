import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Artist } from "../../../models/Artist";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { Tag } from "../../../models/Tag";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => ArtistInGenres)
export class ArtistInGenresRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Artist, {
    nullable: false
  })
  async Artist(@TypeGraphQL.Root() artistInGenres: ArtistInGenres, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Artist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findUniqueOrThrow({
      where: {
        artistId_tagId: {
          artistId: artistInGenres.artistId,
          tagId: artistInGenres.tagId,
        },
      },
    }).Artist({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Tag, {
    nullable: false
  })
  async Tag(@TypeGraphQL.Root() artistInGenres: ArtistInGenres, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Tag> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artistInGenres.findUniqueOrThrow({
      where: {
        artistId_tagId: {
          artistId: artistInGenres.artistId,
          tagId: artistInGenres.tagId,
        },
      },
    }).Tag({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
