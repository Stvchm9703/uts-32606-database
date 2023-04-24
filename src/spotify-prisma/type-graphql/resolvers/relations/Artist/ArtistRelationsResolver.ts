import * as TypeGraphQL from "type-graphql";
import type { GraphQLResolveInfo } from "graphql";
import { AlbumProduceByArtist } from "../../../models/AlbumProduceByArtist";
import { Artist } from "../../../models/Artist";
import { ArtistInGenres } from "../../../models/ArtistInGenres";
import { ArtistOnFollowing } from "../../../models/ArtistOnFollowing";
import { TrackProduceByArtist } from "../../../models/TrackProduceByArtist";
import { ArtistAlbumProduceByArtistArgs } from "./args/ArtistAlbumProduceByArtistArgs";
import { ArtistFollowersArgs } from "./args/ArtistFollowersArgs";
import { ArtistGenresArgs } from "./args/ArtistGenresArgs";
import { ArtistTrackProduceByArtistArgs } from "./args/ArtistTrackProduceByArtistArgs";
import { transformInfoIntoPrismaArgs, getPrismaFromContext, transformCountFieldIntoSelectRelationsCount } from "../../../helpers";

@TypeGraphQL.Resolver(_of => Artist)
export class ArtistRelationsResolver {
  @TypeGraphQL.FieldResolver(_type => [ArtistInGenres], {
    nullable: false
  })
  async Genres(@TypeGraphQL.Root() artist: Artist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ArtistGenresArgs): Promise<ArtistInGenres[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artist.findUniqueOrThrow({
      where: {
        id: artist.id,
      },
    }).Genres({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [TrackProduceByArtist], {
    nullable: false
  })
  async TrackProduceByArtist(@TypeGraphQL.Root() artist: Artist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ArtistTrackProduceByArtistArgs): Promise<TrackProduceByArtist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artist.findUniqueOrThrow({
      where: {
        id: artist.id,
      },
    }).TrackProduceByArtist({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [AlbumProduceByArtist], {
    nullable: false
  })
  async AlbumProduceByArtist(@TypeGraphQL.Root() artist: Artist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ArtistAlbumProduceByArtistArgs): Promise<AlbumProduceByArtist[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artist.findUniqueOrThrow({
      where: {
        id: artist.id,
      },
    }).AlbumProduceByArtist({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }

  @TypeGraphQL.FieldResolver(_type => [ArtistOnFollowing], {
    nullable: false
  })
  async Followers(@TypeGraphQL.Root() artist: Artist, @TypeGraphQL.Ctx() ctx: any, @TypeGraphQL.Info() info: GraphQLResolveInfo, @TypeGraphQL.Args() args: ArtistFollowersArgs): Promise<ArtistOnFollowing[]> {
    const { _count } = transformInfoIntoPrismaArgs(info);
    return getPrismaFromContext(ctx).artist.findUniqueOrThrow({
      where: {
        id: artist.id,
      },
    }).Followers({
      ...args,
      ...(_count && transformCountFieldIntoSelectRelationsCount(_count)),
    });
  }
}
