import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { GroupByTrackProduceByArtistArgs } from "./args/GroupByTrackProduceByArtistArgs";
import { TrackProduceByArtist } from "../../../models/TrackProduceByArtist";
import { TrackProduceByArtistGroupBy } from "../../outputs/TrackProduceByArtistGroupBy";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrackProduceByArtist)
export class GroupByTrackProduceByArtistResolver {
  @TypeGraphQL.Query(_returns => [TrackProduceByArtistGroupBy], {
    nullable: false
  })
  async groupByTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: GroupByTrackProduceByArtistArgs): Promise<TrackProduceByArtistGroupBy[]> {
    const { _count, _avg, _sum, _min, _max } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.groupBy({
      ...args,
      ...Object.fromEntries(
        Object.entries({ _count, _avg, _sum, _min, _max }).filter(([_, v]) => v != null)
      ),
    });
  }
}
