import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Album } from "../../../models/Album";
import { Track } from "../../../models/Track";
import { TrackProduceByArtist } from "../../../models/TrackProduceByArtist";
import { TracksAvailableMarket } from "../../../models/TracksAvailableMarket";
import { TracksOnPlaylist } from "../../../models/TracksOnPlaylist";
import { TrackArtistsArgs } from "./args/TrackArtistsArgs";
import { TrackAvailableMarketsArgs } from "./args/TrackAvailableMarketsArgs";
import { TrackInPlaylistArgs } from "./args/TrackInPlaylistArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Track)
export class TrackRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [TracksAvailableMarket], {
    nullable: false
  })
  async availableMarkets(@TypeGraphQL.Root() track: Track, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TrackAvailableMarketsArgs): Promise<TracksAvailableMarket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).track.findUniqueOrThrow({
      where: {
        id: track.id,
      },
    }).availableMarkets({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TrackProduceByArtist], {
    nullable: false
  })
  async Artists(@TypeGraphQL.Root() track: Track, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TrackArtistsArgs): Promise<TrackProduceByArtist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).track.findUniqueOrThrow({
      where: {
        id: track.id,
      },
    }).Artists({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TracksOnPlaylist], {
    nullable: false
  })
  async InPlaylist(@TypeGraphQL.Root() track: Track, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: TrackInPlaylistArgs): Promise<TracksOnPlaylist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).track.findUniqueOrThrow({
      where: {
        id: track.id,
      },
    }).InPlaylist({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => Album, {
    nullable: true
  })
  async Album(@TypeGraphQL.Root() track: Track, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo): Promise<Album | null> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).track.findUniqueOrThrow({
      where: {
        id: track.id,
      },
    }).Album({
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
