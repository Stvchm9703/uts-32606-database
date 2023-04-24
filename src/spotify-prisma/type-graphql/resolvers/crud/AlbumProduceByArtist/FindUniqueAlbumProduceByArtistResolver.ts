import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueAlbumProduceByArtistArgs } from "./args/FindUniqueAlbumProduceByArtistArgs";
import { AlbumProduceByArtist } from "../../../models/AlbumProduceByArtist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumProduceByArtist)
export class FindUniqueAlbumProduceByArtistResolver {
  @TypeGraphQL.Query(_returns => AlbumProduceByArtist, {
    nullable: true
  })
  async albumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueAlbumProduceByArtistArgs): Promise<AlbumProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.findUnique({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
