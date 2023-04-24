import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateAlbumProduceByArtistArgs } from "./args/AggregateAlbumProduceByArtistArgs";
import { AlbumProduceByArtist } from "../../../models/AlbumProduceByArtist";
import { AggregateAlbumProduceByArtist } from "../../outputs/AggregateAlbumProduceByArtist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => AlbumProduceByArtist)
export class AggregateAlbumProduceByArtistResolver {
  @TypeGraphQL.Query(_returns => AggregateAlbumProduceByArtist, {
    nullable: false
  })
  async aggregateAlbumProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateAlbumProduceByArtistArgs): Promise<AggregateAlbumProduceByArtist> {
    return getPrismaFromContext(ctx).albumProduceByArtist.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
