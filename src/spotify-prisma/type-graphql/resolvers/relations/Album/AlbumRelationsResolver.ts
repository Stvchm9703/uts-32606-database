import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { Album } from "../../../models/Album";
import { AlbumAvailableMarket } from "../../../models/AlbumAvailableMarket";
import { AlbumProduceByArtist } from "../../../models/AlbumProduceByArtist";
import { Track } from "../../../models/Track";
import { AlbumArtistsArgs } from "./args/AlbumArtistsArgs";
import { AlbumAvailableMarketsArgs } from "./args/AlbumAvailableMarketsArgs";
import { AlbumTracksArgs } from "./args/AlbumTracksArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Album)
export class AlbumRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [AlbumAvailableMarket], {
    nullable: false
  })
  async availableMarkets(@TypeGraphQL.Root() album: Album, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AlbumAvailableMarketsArgs): Promise<AlbumAvailableMarket[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).album.findUniqueOrThrow({
      where: {
        id: album.id,
      },
    }).availableMarkets({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [AlbumProduceByArtist], {
    nullable: false
  })
  async Artists(@TypeGraphQL.Root() album: Album, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AlbumArtistsArgs): Promise<AlbumProduceByArtist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).album.findUniqueOrThrow({
      where: {
        id: album.id,
      },
    }).Artists({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [Track], {
    nullable: false
  })
  async Tracks(@TypeGraphQL.Root() album: Album, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: AlbumTracksArgs): Promise<Track[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).album.findUniqueOrThrow({
      where: {
        id: album.id,
      },
    }).Tracks({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
