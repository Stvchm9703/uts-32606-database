import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { FindUniqueTrackProduceByArtistOrThrowArgs } from "./args/FindUniqueTrackProduceByArtistOrThrowArgs";
import { TrackProduceByArtist } from "../../../models/TrackProduceByArtist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrackProduceByArtist)
export class FindUniqueTrackProduceByArtistOrThrowResolver {
  @TypeGraphQL.Query(_returns => TrackProduceByArtist, {
    nullable: true
  })
  async getTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: FindUniqueTrackProduceByArtistOrThrowArgs): Promise<TrackProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.findUniqueOrThrow({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
