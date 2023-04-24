import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { UpdateOneTrackProduceByArtistArgs } from "./args/UpdateOneTrackProduceByArtistArgs";
import { TrackProduceByArtist } from "../../../models/TrackProduceByArtist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrackProduceByArtist)
export class UpdateOneTrackProduceByArtistResolver {
  @TypeGraphQL.Mutation(_returns => TrackProduceByArtist, {
    nullable: true
  })
  async updateOneTrackProduceByArtist(@TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: UpdateOneTrackProduceByArtistArgs): Promise<TrackProduceByArtist | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.update({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
