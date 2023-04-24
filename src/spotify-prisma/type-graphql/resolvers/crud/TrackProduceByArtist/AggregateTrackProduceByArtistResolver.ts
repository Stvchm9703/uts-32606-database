import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AggregateTrackProduceByArtistArgs } from "./args/AggregateTrackProduceByArtistArgs";
import { TrackProduceByArtist } from "../../../models/TrackProduceByArtist";
import { AggregateTrackProduceByArtist } from "../../outputs/AggregateTrackProduceByArtist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrackProduceByArtist)
export class AggregateTrackProduceByArtistResolver {
  @TypeGraphQL.Query(_returns => AggregateTrackProduceByArtist, {
    nullable: false
  })
  async aggregateTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AggregateTrackProduceByArtistArgs): Promise<AggregateTrackProduceByArtist> {
    return getPrismaFromContext(ctx).trackProduceByArtist.aggregate({
      ...args,
      ...transformInfoIntoPrismaArgs(info),
    });
  }
}
