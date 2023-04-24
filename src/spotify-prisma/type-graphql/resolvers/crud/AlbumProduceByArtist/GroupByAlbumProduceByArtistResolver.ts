import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByAlbumProduceByArtistArgs } from "./args/GroupByAlbumProduceByArtistArgs";
import { AlbumProduceByArtist } from "../../../models/AlbumProduceByArtist";
import { AlbumProduceByArtistGroupBy } from "../../outputs/AlbumProduceByArtistGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumProduceByArtist)
export class GroupByAlbumProduceByArtistResolver {
  @TypeGraphQL.Query(_returns => [AlbumProduceByArtistGroupBy], {
    nullable: false
  })
  async groupByAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByAlbumProduceByArtistArgs): Promise<AlbumProduceByArtistGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).albumProduceByArtist.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
