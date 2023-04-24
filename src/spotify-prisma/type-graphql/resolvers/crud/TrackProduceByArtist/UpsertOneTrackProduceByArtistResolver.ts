import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpsertOneTrackProduceByArtistArgs } from "./args/UpsertOneTrackProduceByArtistArgs";
import { TrackProduceByArtist } from "../../../models/TrackProduceByArtist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrackProduceByArtist)
export class UpsertOneTrackProduceByArtistResolver {
  @TypeGraphQL.Mutation(_returns => TrackProduceByArtist, {
    nullable: false
  })
  async upsertOneTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpsertOneTrackProduceByArtistArgs): Promise<TrackProduceByArtist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.upsert({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
