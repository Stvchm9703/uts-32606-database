import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Artist } from "../../../models/Artist";
import { Track } from "../../../models/Track";
import { TrackProduceByArtist } from "../../../models/TrackProduceByArtist";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => TrackProduceByArtist)
export class TrackProduceByArtistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => Track, {
    nullable: false
  })
  async Track(@TypeGraphQL.Root() trackProduceByArtist: TrackProduceByArtist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Track> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.findUniqueOrThrow({
      where: {
        trackId_artistId: {
          trackId: trackProduceByArtist.trackId,
          artistId: trackProduceByArtist.artistId,
        },
      },
    }).Track({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Artist, {
    nullable: false
  })
  async Artists(@TypeGraphQL.Root() trackProduceByArtist: TrackProduceByArtist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Artist> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).trackProduceByArtist.findUniqueOrThrow({
      where: {
        trackId_artistId: {
          trackId: trackProduceByArtist.trackId,
          artistId: trackProduceByArtist.artistId,
        },
      },
    }).Artists({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
