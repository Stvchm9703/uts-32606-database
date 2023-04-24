import { ClassType } from "type-graphql";
import * as tslib from "tslib";
import * as crudResolvers from "./resolvers/crud/resolvers-crud.index";
import * as argsTypes from "./resolvers/crud/args.index";
import * as actionResolvers from "./resolvers/crud/resolvers-actions.index";
import * as relationResolvers from "./resolvers/relations/resolvers.index";
import * as models from "./models";
import * as outputTypes from "./resolvers/outputs";
import * as inputTypes from "./resolvers/inputs";

export type MethodDecoratorOverrideFn = (decorators: MethodDecorator[]) => MethodDecorator[];

const crudResolversMap = {
  Tag: crudResolvers.TagCrudResolver,
  Category: crudResolvers.CategoryCrudResolver,
  User: crudResolvers.UserCrudResolver,
  Artist: crudResolvers.ArtistCrudResolver,
  Track: crudResolvers.TrackCrudResolver,
  Album: crudResolvers.AlbumCrudResolver,
  Playlist: crudResolvers.PlaylistCrudResolver,
  TracksOnPlaylist: crudResolvers.TracksOnPlaylistCrudResolver,
  TracksAvailableMarket: crudResolvers.TracksAvailableMarketCrudResolver,
  TrackProduceByArtist: crudResolvers.TrackProduceByArtistCrudResolver,
  PlaylistOnFollower: crudResolvers.PlaylistOnFollowerCrudResolver,
  AlbumProduceByArtist: crudResolvers.AlbumProduceByArtistCrudResolver,
  AlbumAvailableMarket: crudResolvers.AlbumAvailableMarketCrudResolver,
  ArtistInGenres: crudResolvers.ArtistInGenresCrudResolver,
  ArtistOnFollowing: crudResolvers.ArtistOnFollowingCrudResolver
};
const actionResolversMap = {
  Tag: {
    aggregateTag: actionResolvers.AggregateTagResolver,
    createManyTag: actionResolvers.CreateManyTagResolver,
    createOneTag: actionResolvers.CreateOneTagResolver,
    deleteManyTag: actionResolvers.DeleteManyTagResolver,
    deleteOneTag: actionResolvers.DeleteOneTagResolver,
    findFirstTag: actionResolvers.FindFirstTagResolver,
    findFirstTagOrThrow: actionResolvers.FindFirstTagOrThrowResolver,
    tags: actionResolvers.FindManyTagResolver,
    tag: actionResolvers.FindUniqueTagResolver,
    getTag: actionResolvers.FindUniqueTagOrThrowResolver,
    groupByTag: actionResolvers.GroupByTagResolver,
    updateManyTag: actionResolvers.UpdateManyTagResolver,
    updateOneTag: actionResolvers.UpdateOneTagResolver,
    upsertOneTag: actionResolvers.UpsertOneTagResolver
  },
  Category: {
    aggregateCategory: actionResolvers.AggregateCategoryResolver,
    createManyCategory: actionResolvers.CreateManyCategoryResolver,
    createOneCategory: actionResolvers.CreateOneCategoryResolver,
    deleteManyCategory: actionResolvers.DeleteManyCategoryResolver,
    deleteOneCategory: actionResolvers.DeleteOneCategoryResolver,
    findFirstCategory: actionResolvers.FindFirstCategoryResolver,
    findFirstCategoryOrThrow: actionResolvers.FindFirstCategoryOrThrowResolver,
    categories: actionResolvers.FindManyCategoryResolver,
    category: actionResolvers.FindUniqueCategoryResolver,
    getCategory: actionResolvers.FindUniqueCategoryOrThrowResolver,
    groupByCategory: actionResolvers.GroupByCategoryResolver,
    updateManyCategory: actionResolvers.UpdateManyCategoryResolver,
    updateOneCategory: actionResolvers.UpdateOneCategoryResolver,
    upsertOneCategory: actionResolvers.UpsertOneCategoryResolver
  },
  User: {
    aggregateUser: actionResolvers.AggregateUserResolver,
    createManyUser: actionResolvers.CreateManyUserResolver,
    createOneUser: actionResolvers.CreateOneUserResolver,
    deleteManyUser: actionResolvers.DeleteManyUserResolver,
    deleteOneUser: actionResolvers.DeleteOneUserResolver,
    findFirstUser: actionResolvers.FindFirstUserResolver,
    findFirstUserOrThrow: actionResolvers.FindFirstUserOrThrowResolver,
    users: actionResolvers.FindManyUserResolver,
    user: actionResolvers.FindUniqueUserResolver,
    getUser: actionResolvers.FindUniqueUserOrThrowResolver,
    groupByUser: actionResolvers.GroupByUserResolver,
    updateManyUser: actionResolvers.UpdateManyUserResolver,
    updateOneUser: actionResolvers.UpdateOneUserResolver,
    upsertOneUser: actionResolvers.UpsertOneUserResolver
  },
  Artist: {
    aggregateArtist: actionResolvers.AggregateArtistResolver,
    createManyArtist: actionResolvers.CreateManyArtistResolver,
    createOneArtist: actionResolvers.CreateOneArtistResolver,
    deleteManyArtist: actionResolvers.DeleteManyArtistResolver,
    deleteOneArtist: actionResolvers.DeleteOneArtistResolver,
    findFirstArtist: actionResolvers.FindFirstArtistResolver,
    findFirstArtistOrThrow: actionResolvers.FindFirstArtistOrThrowResolver,
    artists: actionResolvers.FindManyArtistResolver,
    artist: actionResolvers.FindUniqueArtistResolver,
    getArtist: actionResolvers.FindUniqueArtistOrThrowResolver,
    groupByArtist: actionResolvers.GroupByArtistResolver,
    updateManyArtist: actionResolvers.UpdateManyArtistResolver,
    updateOneArtist: actionResolvers.UpdateOneArtistResolver,
    upsertOneArtist: actionResolvers.UpsertOneArtistResolver
  },
  Track: {
    aggregateTrack: actionResolvers.AggregateTrackResolver,
    createManyTrack: actionResolvers.CreateManyTrackResolver,
    createOneTrack: actionResolvers.CreateOneTrackResolver,
    deleteManyTrack: actionResolvers.DeleteManyTrackResolver,
    deleteOneTrack: actionResolvers.DeleteOneTrackResolver,
    findFirstTrack: actionResolvers.FindFirstTrackResolver,
    findFirstTrackOrThrow: actionResolvers.FindFirstTrackOrThrowResolver,
    tracks: actionResolvers.FindManyTrackResolver,
    track: actionResolvers.FindUniqueTrackResolver,
    getTrack: actionResolvers.FindUniqueTrackOrThrowResolver,
    groupByTrack: actionResolvers.GroupByTrackResolver,
    updateManyTrack: actionResolvers.UpdateManyTrackResolver,
    updateOneTrack: actionResolvers.UpdateOneTrackResolver,
    upsertOneTrack: actionResolvers.UpsertOneTrackResolver
  },
  Album: {
    aggregateAlbum: actionResolvers.AggregateAlbumResolver,
    createManyAlbum: actionResolvers.CreateManyAlbumResolver,
    createOneAlbum: actionResolvers.CreateOneAlbumResolver,
    deleteManyAlbum: actionResolvers.DeleteManyAlbumResolver,
    deleteOneAlbum: actionResolvers.DeleteOneAlbumResolver,
    findFirstAlbum: actionResolvers.FindFirstAlbumResolver,
    findFirstAlbumOrThrow: actionResolvers.FindFirstAlbumOrThrowResolver,
    albums: actionResolvers.FindManyAlbumResolver,
    album: actionResolvers.FindUniqueAlbumResolver,
    getAlbum: actionResolvers.FindUniqueAlbumOrThrowResolver,
    groupByAlbum: actionResolvers.GroupByAlbumResolver,
    updateManyAlbum: actionResolvers.UpdateManyAlbumResolver,
    updateOneAlbum: actionResolvers.UpdateOneAlbumResolver,
    upsertOneAlbum: actionResolvers.UpsertOneAlbumResolver
  },
  Playlist: {
    aggregatePlaylist: actionResolvers.AggregatePlaylistResolver,
    createManyPlaylist: actionResolvers.CreateManyPlaylistResolver,
    createOnePlaylist: actionResolvers.CreateOnePlaylistResolver,
    deleteManyPlaylist: actionResolvers.DeleteManyPlaylistResolver,
    deleteOnePlaylist: actionResolvers.DeleteOnePlaylistResolver,
    findFirstPlaylist: actionResolvers.FindFirstPlaylistResolver,
    findFirstPlaylistOrThrow: actionResolvers.FindFirstPlaylistOrThrowResolver,
    playlists: actionResolvers.FindManyPlaylistResolver,
    playlist: actionResolvers.FindUniquePlaylistResolver,
    getPlaylist: actionResolvers.FindUniquePlaylistOrThrowResolver,
    groupByPlaylist: actionResolvers.GroupByPlaylistResolver,
    updateManyPlaylist: actionResolvers.UpdateManyPlaylistResolver,
    updateOnePlaylist: actionResolvers.UpdateOnePlaylistResolver,
    upsertOnePlaylist: actionResolvers.UpsertOnePlaylistResolver
  },
  TracksOnPlaylist: {
    aggregateTracksOnPlaylist: actionResolvers.AggregateTracksOnPlaylistResolver,
    createManyTracksOnPlaylist: actionResolvers.CreateManyTracksOnPlaylistResolver,
    createOneTracksOnPlaylist: actionResolvers.CreateOneTracksOnPlaylistResolver,
    deleteManyTracksOnPlaylist: actionResolvers.DeleteManyTracksOnPlaylistResolver,
    deleteOneTracksOnPlaylist: actionResolvers.DeleteOneTracksOnPlaylistResolver,
    findFirstTracksOnPlaylist: actionResolvers.FindFirstTracksOnPlaylistResolver,
    findFirstTracksOnPlaylistOrThrow: actionResolvers.FindFirstTracksOnPlaylistOrThrowResolver,
    tracksOnPlaylists: actionResolvers.FindManyTracksOnPlaylistResolver,
    tracksOnPlaylist: actionResolvers.FindUniqueTracksOnPlaylistResolver,
    getTracksOnPlaylist: actionResolvers.FindUniqueTracksOnPlaylistOrThrowResolver,
    groupByTracksOnPlaylist: actionResolvers.GroupByTracksOnPlaylistResolver,
    updateManyTracksOnPlaylist: actionResolvers.UpdateManyTracksOnPlaylistResolver,
    updateOneTracksOnPlaylist: actionResolvers.UpdateOneTracksOnPlaylistResolver,
    upsertOneTracksOnPlaylist: actionResolvers.UpsertOneTracksOnPlaylistResolver
  },
  TracksAvailableMarket: {
    aggregateTracksAvailableMarket: actionResolvers.AggregateTracksAvailableMarketResolver,
    createManyTracksAvailableMarket: actionResolvers.CreateManyTracksAvailableMarketResolver,
    createOneTracksAvailableMarket: actionResolvers.CreateOneTracksAvailableMarketResolver,
    deleteManyTracksAvailableMarket: actionResolvers.DeleteManyTracksAvailableMarketResolver,
    deleteOneTracksAvailableMarket: actionResolvers.DeleteOneTracksAvailableMarketResolver,
    findFirstTracksAvailableMarket: actionResolvers.FindFirstTracksAvailableMarketResolver,
    findFirstTracksAvailableMarketOrThrow: actionResolvers.FindFirstTracksAvailableMarketOrThrowResolver,
    tracksAvailableMarkets: actionResolvers.FindManyTracksAvailableMarketResolver,
    tracksAvailableMarket: actionResolvers.FindUniqueTracksAvailableMarketResolver,
    getTracksAvailableMarket: actionResolvers.FindUniqueTracksAvailableMarketOrThrowResolver,
    groupByTracksAvailableMarket: actionResolvers.GroupByTracksAvailableMarketResolver,
    updateManyTracksAvailableMarket: actionResolvers.UpdateManyTracksAvailableMarketResolver,
    updateOneTracksAvailableMarket: actionResolvers.UpdateOneTracksAvailableMarketResolver,
    upsertOneTracksAvailableMarket: actionResolvers.UpsertOneTracksAvailableMarketResolver
  },
  TrackProduceByArtist: {
    aggregateTrackProduceByArtist: actionResolvers.AggregateTrackProduceByArtistResolver,
    createManyTrackProduceByArtist: actionResolvers.CreateManyTrackProduceByArtistResolver,
    createOneTrackProduceByArtist: actionResolvers.CreateOneTrackProduceByArtistResolver,
    deleteManyTrackProduceByArtist: actionResolvers.DeleteManyTrackProduceByArtistResolver,
    deleteOneTrackProduceByArtist: actionResolvers.DeleteOneTrackProduceByArtistResolver,
    findFirstTrackProduceByArtist: actionResolvers.FindFirstTrackProduceByArtistResolver,
    findFirstTrackProduceByArtistOrThrow: actionResolvers.FindFirstTrackProduceByArtistOrThrowResolver,
    trackProduceByArtists: actionResolvers.FindManyTrackProduceByArtistResolver,
    trackProduceByArtist: actionResolvers.FindUniqueTrackProduceByArtistResolver,
    getTrackProduceByArtist: actionResolvers.FindUniqueTrackProduceByArtistOrThrowResolver,
    groupByTrackProduceByArtist: actionResolvers.GroupByTrackProduceByArtistResolver,
    updateManyTrackProduceByArtist: actionResolvers.UpdateManyTrackProduceByArtistResolver,
    updateOneTrackProduceByArtist: actionResolvers.UpdateOneTrackProduceByArtistResolver,
    upsertOneTrackProduceByArtist: actionResolvers.UpsertOneTrackProduceByArtistResolver
  },
  PlaylistOnFollower: {
    aggregatePlaylistOnFollower: actionResolvers.AggregatePlaylistOnFollowerResolver,
    createManyPlaylistOnFollower: actionResolvers.CreateManyPlaylistOnFollowerResolver,
    createOnePlaylistOnFollower: actionResolvers.CreateOnePlaylistOnFollowerResolver,
    deleteManyPlaylistOnFollower: actionResolvers.DeleteManyPlaylistOnFollowerResolver,
    deleteOnePlaylistOnFollower: actionResolvers.DeleteOnePlaylistOnFollowerResolver,
    findFirstPlaylistOnFollower: actionResolvers.FindFirstPlaylistOnFollowerResolver,
    findFirstPlaylistOnFollowerOrThrow: actionResolvers.FindFirstPlaylistOnFollowerOrThrowResolver,
    playlistOnFollowers: actionResolvers.FindManyPlaylistOnFollowerResolver,
    playlistOnFollower: actionResolvers.FindUniquePlaylistOnFollowerResolver,
    getPlaylistOnFollower: actionResolvers.FindUniquePlaylistOnFollowerOrThrowResolver,
    groupByPlaylistOnFollower: actionResolvers.GroupByPlaylistOnFollowerResolver,
    updateManyPlaylistOnFollower: actionResolvers.UpdateManyPlaylistOnFollowerResolver,
    updateOnePlaylistOnFollower: actionResolvers.UpdateOnePlaylistOnFollowerResolver,
    upsertOnePlaylistOnFollower: actionResolvers.UpsertOnePlaylistOnFollowerResolver
  },
  AlbumProduceByArtist: {
    aggregateAlbumProduceByArtist: actionResolvers.AggregateAlbumProduceByArtistResolver,
    createManyAlbumProduceByArtist: actionResolvers.CreateManyAlbumProduceByArtistResolver,
    createOneAlbumProduceByArtist: actionResolvers.CreateOneAlbumProduceByArtistResolver,
    deleteManyAlbumProduceByArtist: actionResolvers.DeleteManyAlbumProduceByArtistResolver,
    deleteOneAlbumProduceByArtist: actionResolvers.DeleteOneAlbumProduceByArtistResolver,
    findFirstAlbumProduceByArtist: actionResolvers.FindFirstAlbumProduceByArtistResolver,
    findFirstAlbumProduceByArtistOrThrow: actionResolvers.FindFirstAlbumProduceByArtistOrThrowResolver,
    albumProduceByArtists: actionResolvers.FindManyAlbumProduceByArtistResolver,
    albumProduceByArtist: actionResolvers.FindUniqueAlbumProduceByArtistResolver,
    getAlbumProduceByArtist: actionResolvers.FindUniqueAlbumProduceByArtistOrThrowResolver,
    groupByAlbumProduceByArtist: actionResolvers.GroupByAlbumProduceByArtistResolver,
    updateManyAlbumProduceByArtist: actionResolvers.UpdateManyAlbumProduceByArtistResolver,
    updateOneAlbumProduceByArtist: actionResolvers.UpdateOneAlbumProduceByArtistResolver,
    upsertOneAlbumProduceByArtist: actionResolvers.UpsertOneAlbumProduceByArtistResolver
  },
  AlbumAvailableMarket: {
    aggregateAlbumAvailableMarket: actionResolvers.AggregateAlbumAvailableMarketResolver,
    createManyAlbumAvailableMarket: actionResolvers.CreateManyAlbumAvailableMarketResolver,
    createOneAlbumAvailableMarket: actionResolvers.CreateOneAlbumAvailableMarketResolver,
    deleteManyAlbumAvailableMarket: actionResolvers.DeleteManyAlbumAvailableMarketResolver,
    deleteOneAlbumAvailableMarket: actionResolvers.DeleteOneAlbumAvailableMarketResolver,
    findFirstAlbumAvailableMarket: actionResolvers.FindFirstAlbumAvailableMarketResolver,
    findFirstAlbumAvailableMarketOrThrow: actionResolvers.FindFirstAlbumAvailableMarketOrThrowResolver,
    albumAvailableMarkets: actionResolvers.FindManyAlbumAvailableMarketResolver,
    albumAvailableMarket: actionResolvers.FindUniqueAlbumAvailableMarketResolver,
    getAlbumAvailableMarket: actionResolvers.FindUniqueAlbumAvailableMarketOrThrowResolver,
    groupByAlbumAvailableMarket: actionResolvers.GroupByAlbumAvailableMarketResolver,
    updateManyAlbumAvailableMarket: actionResolvers.UpdateManyAlbumAvailableMarketResolver,
    updateOneAlbumAvailableMarket: actionResolvers.UpdateOneAlbumAvailableMarketResolver,
    upsertOneAlbumAvailableMarket: actionResolvers.UpsertOneAlbumAvailableMarketResolver
  },
  ArtistInGenres: {
    aggregateArtistInGenres: actionResolvers.AggregateArtistInGenresResolver,
    createManyArtistInGenres: actionResolvers.CreateManyArtistInGenresResolver,
    createOneArtistInGenres: actionResolvers.CreateOneArtistInGenresResolver,
    deleteManyArtistInGenres: actionResolvers.DeleteManyArtistInGenresResolver,
    deleteOneArtistInGenres: actionResolvers.DeleteOneArtistInGenresResolver,
    findFirstArtistInGenres: actionResolvers.FindFirstArtistInGenresResolver,
    findFirstArtistInGenresOrThrow: actionResolvers.FindFirstArtistInGenresOrThrowResolver,
    findManyArtistInGenres: actionResolvers.FindManyArtistInGenresResolver,
    findUniqueArtistInGenres: actionResolvers.FindUniqueArtistInGenresResolver,
    findUniqueArtistInGenresOrThrow: actionResolvers.FindUniqueArtistInGenresOrThrowResolver,
    groupByArtistInGenres: actionResolvers.GroupByArtistInGenresResolver,
    updateManyArtistInGenres: actionResolvers.UpdateManyArtistInGenresResolver,
    updateOneArtistInGenres: actionResolvers.UpdateOneArtistInGenresResolver,
    upsertOneArtistInGenres: actionResolvers.UpsertOneArtistInGenresResolver
  },
  ArtistOnFollowing: {
    aggregateArtistOnFollowing: actionResolvers.AggregateArtistOnFollowingResolver,
    createManyArtistOnFollowing: actionResolvers.CreateManyArtistOnFollowingResolver,
    createOneArtistOnFollowing: actionResolvers.CreateOneArtistOnFollowingResolver,
    deleteManyArtistOnFollowing: actionResolvers.DeleteManyArtistOnFollowingResolver,
    deleteOneArtistOnFollowing: actionResolvers.DeleteOneArtistOnFollowingResolver,
    findFirstArtistOnFollowing: actionResolvers.FindFirstArtistOnFollowingResolver,
    findFirstArtistOnFollowingOrThrow: actionResolvers.FindFirstArtistOnFollowingOrThrowResolver,
    artistOnFollowings: actionResolvers.FindManyArtistOnFollowingResolver,
    artistOnFollowing: actionResolvers.FindUniqueArtistOnFollowingResolver,
    getArtistOnFollowing: actionResolvers.FindUniqueArtistOnFollowingOrThrowResolver,
    groupByArtistOnFollowing: actionResolvers.GroupByArtistOnFollowingResolver,
    updateManyArtistOnFollowing: actionResolvers.UpdateManyArtistOnFollowingResolver,
    updateOneArtistOnFollowing: actionResolvers.UpdateOneArtistOnFollowingResolver,
    upsertOneArtistOnFollowing: actionResolvers.UpsertOneArtistOnFollowingResolver
  }
};
const crudResolversInfo = {
  Tag: ["aggregateTag", "createManyTag", "createOneTag", "deleteManyTag", "deleteOneTag", "findFirstTag", "findFirstTagOrThrow", "tags", "tag", "getTag", "groupByTag", "updateManyTag", "updateOneTag", "upsertOneTag"],
  Category: ["aggregateCategory", "createManyCategory", "createOneCategory", "deleteManyCategory", "deleteOneCategory", "findFirstCategory", "findFirstCategoryOrThrow", "categories", "category", "getCategory", "groupByCategory", "updateManyCategory", "updateOneCategory", "upsertOneCategory"],
  User: ["aggregateUser", "createManyUser", "createOneUser", "deleteManyUser", "deleteOneUser", "findFirstUser", "findFirstUserOrThrow", "users", "user", "getUser", "groupByUser", "updateManyUser", "updateOneUser", "upsertOneUser"],
  Artist: ["aggregateArtist", "createManyArtist", "createOneArtist", "deleteManyArtist", "deleteOneArtist", "findFirstArtist", "findFirstArtistOrThrow", "artists", "artist", "getArtist", "groupByArtist", "updateManyArtist", "updateOneArtist", "upsertOneArtist"],
  Track: ["aggregateTrack", "createManyTrack", "createOneTrack", "deleteManyTrack", "deleteOneTrack", "findFirstTrack", "findFirstTrackOrThrow", "tracks", "track", "getTrack", "groupByTrack", "updateManyTrack", "updateOneTrack", "upsertOneTrack"],
  Album: ["aggregateAlbum", "createManyAlbum", "createOneAlbum", "deleteManyAlbum", "deleteOneAlbum", "findFirstAlbum", "findFirstAlbumOrThrow", "albums", "album", "getAlbum", "groupByAlbum", "updateManyAlbum", "updateOneAlbum", "upsertOneAlbum"],
  Playlist: ["aggregatePlaylist", "createManyPlaylist", "createOnePlaylist", "deleteManyPlaylist", "deleteOnePlaylist", "findFirstPlaylist", "findFirstPlaylistOrThrow", "playlists", "playlist", "getPlaylist", "groupByPlaylist", "updateManyPlaylist", "updateOnePlaylist", "upsertOnePlaylist"],
  TracksOnPlaylist: ["aggregateTracksOnPlaylist", "createManyTracksOnPlaylist", "createOneTracksOnPlaylist", "deleteManyTracksOnPlaylist", "deleteOneTracksOnPlaylist", "findFirstTracksOnPlaylist", "findFirstTracksOnPlaylistOrThrow", "tracksOnPlaylists", "tracksOnPlaylist", "getTracksOnPlaylist", "groupByTracksOnPlaylist", "updateManyTracksOnPlaylist", "updateOneTracksOnPlaylist", "upsertOneTracksOnPlaylist"],
  TracksAvailableMarket: ["aggregateTracksAvailableMarket", "createManyTracksAvailableMarket", "createOneTracksAvailableMarket", "deleteManyTracksAvailableMarket", "deleteOneTracksAvailableMarket", "findFirstTracksAvailableMarket", "findFirstTracksAvailableMarketOrThrow", "tracksAvailableMarkets", "tracksAvailableMarket", "getTracksAvailableMarket", "groupByTracksAvailableMarket", "updateManyTracksAvailableMarket", "updateOneTracksAvailableMarket", "upsertOneTracksAvailableMarket"],
  TrackProduceByArtist: ["aggregateTrackProduceByArtist", "createManyTrackProduceByArtist", "createOneTrackProduceByArtist", "deleteManyTrackProduceByArtist", "deleteOneTrackProduceByArtist", "findFirstTrackProduceByArtist", "findFirstTrackProduceByArtistOrThrow", "trackProduceByArtists", "trackProduceByArtist", "getTrackProduceByArtist", "groupByTrackProduceByArtist", "updateManyTrackProduceByArtist", "updateOneTrackProduceByArtist", "upsertOneTrackProduceByArtist"],
  PlaylistOnFollower: ["aggregatePlaylistOnFollower", "createManyPlaylistOnFollower", "createOnePlaylistOnFollower", "deleteManyPlaylistOnFollower", "deleteOnePlaylistOnFollower", "findFirstPlaylistOnFollower", "findFirstPlaylistOnFollowerOrThrow", "playlistOnFollowers", "playlistOnFollower", "getPlaylistOnFollower", "groupByPlaylistOnFollower", "updateManyPlaylistOnFollower", "updateOnePlaylistOnFollower", "upsertOnePlaylistOnFollower"],
  AlbumProduceByArtist: ["aggregateAlbumProduceByArtist", "createManyAlbumProduceByArtist", "createOneAlbumProduceByArtist", "deleteManyAlbumProduceByArtist", "deleteOneAlbumProduceByArtist", "findFirstAlbumProduceByArtist", "findFirstAlbumProduceByArtistOrThrow", "albumProduceByArtists", "albumProduceByArtist", "getAlbumProduceByArtist", "groupByAlbumProduceByArtist", "updateManyAlbumProduceByArtist", "updateOneAlbumProduceByArtist", "upsertOneAlbumProduceByArtist"],
  AlbumAvailableMarket: ["aggregateAlbumAvailableMarket", "createManyAlbumAvailableMarket", "createOneAlbumAvailableMarket", "deleteManyAlbumAvailableMarket", "deleteOneAlbumAvailableMarket", "findFirstAlbumAvailableMarket", "findFirstAlbumAvailableMarketOrThrow", "albumAvailableMarkets", "albumAvailableMarket", "getAlbumAvailableMarket", "groupByAlbumAvailableMarket", "updateManyAlbumAvailableMarket", "updateOneAlbumAvailableMarket", "upsertOneAlbumAvailableMarket"],
  ArtistInGenres: ["aggregateArtistInGenres", "createManyArtistInGenres", "createOneArtistInGenres", "deleteManyArtistInGenres", "deleteOneArtistInGenres", "findFirstArtistInGenres", "findFirstArtistInGenresOrThrow", "findManyArtistInGenres", "findUniqueArtistInGenres", "findUniqueArtistInGenresOrThrow", "groupByArtistInGenres", "updateManyArtistInGenres", "updateOneArtistInGenres", "upsertOneArtistInGenres"],
  ArtistOnFollowing: ["aggregateArtistOnFollowing", "createManyArtistOnFollowing", "createOneArtistOnFollowing", "deleteManyArtistOnFollowing", "deleteOneArtistOnFollowing", "findFirstArtistOnFollowing", "findFirstArtistOnFollowingOrThrow", "artistOnFollowings", "artistOnFollowing", "getArtistOnFollowing", "groupByArtistOnFollowing", "updateManyArtistOnFollowing", "updateOneArtistOnFollowing", "upsertOneArtistOnFollowing"]
};
const argsInfo = {
  AggregateTagArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTagArgs: ["data", "skipDuplicates"],
  CreateOneTagArgs: ["data"],
  DeleteManyTagArgs: ["where"],
  DeleteOneTagArgs: ["where"],
  FindFirstTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTagOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTagArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTagArgs: ["where"],
  FindUniqueTagOrThrowArgs: ["where"],
  GroupByTagArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTagArgs: ["data", "where"],
  UpdateOneTagArgs: ["data", "where"],
  UpsertOneTagArgs: ["where", "create", "update"],
  AggregateCategoryArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyCategoryArgs: ["data", "skipDuplicates"],
  CreateOneCategoryArgs: ["data"],
  DeleteManyCategoryArgs: ["where"],
  DeleteOneCategoryArgs: ["where"],
  FindFirstCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstCategoryOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyCategoryArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueCategoryArgs: ["where"],
  FindUniqueCategoryOrThrowArgs: ["where"],
  GroupByCategoryArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyCategoryArgs: ["data", "where"],
  UpdateOneCategoryArgs: ["data", "where"],
  UpsertOneCategoryArgs: ["where", "create", "update"],
  AggregateUserArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyUserArgs: ["data", "skipDuplicates"],
  CreateOneUserArgs: ["data"],
  DeleteManyUserArgs: ["where"],
  DeleteOneUserArgs: ["where"],
  FindFirstUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstUserOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyUserArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueUserArgs: ["where"],
  FindUniqueUserOrThrowArgs: ["where"],
  GroupByUserArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyUserArgs: ["data", "where"],
  UpdateOneUserArgs: ["data", "where"],
  UpsertOneUserArgs: ["where", "create", "update"],
  AggregateArtistArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyArtistArgs: ["data", "skipDuplicates"],
  CreateOneArtistArgs: ["data"],
  DeleteManyArtistArgs: ["where"],
  DeleteOneArtistArgs: ["where"],
  FindFirstArtistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstArtistOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyArtistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueArtistArgs: ["where"],
  FindUniqueArtistOrThrowArgs: ["where"],
  GroupByArtistArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyArtistArgs: ["data", "where"],
  UpdateOneArtistArgs: ["data", "where"],
  UpsertOneArtistArgs: ["where", "create", "update"],
  AggregateTrackArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTrackArgs: ["data", "skipDuplicates"],
  CreateOneTrackArgs: ["data"],
  DeleteManyTrackArgs: ["where"],
  DeleteOneTrackArgs: ["where"],
  FindFirstTrackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTrackOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTrackArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTrackArgs: ["where"],
  FindUniqueTrackOrThrowArgs: ["where"],
  GroupByTrackArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTrackArgs: ["data", "where"],
  UpdateOneTrackArgs: ["data", "where"],
  UpsertOneTrackArgs: ["where", "create", "update"],
  AggregateAlbumArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAlbumArgs: ["data", "skipDuplicates"],
  CreateOneAlbumArgs: ["data"],
  DeleteManyAlbumArgs: ["where"],
  DeleteOneAlbumArgs: ["where"],
  FindFirstAlbumArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAlbumOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAlbumArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAlbumArgs: ["where"],
  FindUniqueAlbumOrThrowArgs: ["where"],
  GroupByAlbumArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAlbumArgs: ["data", "where"],
  UpdateOneAlbumArgs: ["data", "where"],
  UpsertOneAlbumArgs: ["where", "create", "update"],
  AggregatePlaylistArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPlaylistArgs: ["data", "skipDuplicates"],
  CreateOnePlaylistArgs: ["data"],
  DeleteManyPlaylistArgs: ["where"],
  DeleteOnePlaylistArgs: ["where"],
  FindFirstPlaylistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPlaylistOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlaylistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePlaylistArgs: ["where"],
  FindUniquePlaylistOrThrowArgs: ["where"],
  GroupByPlaylistArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPlaylistArgs: ["data", "where"],
  UpdateOnePlaylistArgs: ["data", "where"],
  UpsertOnePlaylistArgs: ["where", "create", "update"],
  AggregateTracksOnPlaylistArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTracksOnPlaylistArgs: ["data", "skipDuplicates"],
  CreateOneTracksOnPlaylistArgs: ["data"],
  DeleteManyTracksOnPlaylistArgs: ["where"],
  DeleteOneTracksOnPlaylistArgs: ["where"],
  FindFirstTracksOnPlaylistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTracksOnPlaylistOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTracksOnPlaylistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTracksOnPlaylistArgs: ["where"],
  FindUniqueTracksOnPlaylistOrThrowArgs: ["where"],
  GroupByTracksOnPlaylistArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTracksOnPlaylistArgs: ["data", "where"],
  UpdateOneTracksOnPlaylistArgs: ["data", "where"],
  UpsertOneTracksOnPlaylistArgs: ["where", "create", "update"],
  AggregateTracksAvailableMarketArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTracksAvailableMarketArgs: ["data", "skipDuplicates"],
  CreateOneTracksAvailableMarketArgs: ["data"],
  DeleteManyTracksAvailableMarketArgs: ["where"],
  DeleteOneTracksAvailableMarketArgs: ["where"],
  FindFirstTracksAvailableMarketArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTracksAvailableMarketOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTracksAvailableMarketArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTracksAvailableMarketArgs: ["where"],
  FindUniqueTracksAvailableMarketOrThrowArgs: ["where"],
  GroupByTracksAvailableMarketArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTracksAvailableMarketArgs: ["data", "where"],
  UpdateOneTracksAvailableMarketArgs: ["data", "where"],
  UpsertOneTracksAvailableMarketArgs: ["where", "create", "update"],
  AggregateTrackProduceByArtistArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyTrackProduceByArtistArgs: ["data", "skipDuplicates"],
  CreateOneTrackProduceByArtistArgs: ["data"],
  DeleteManyTrackProduceByArtistArgs: ["where"],
  DeleteOneTrackProduceByArtistArgs: ["where"],
  FindFirstTrackProduceByArtistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstTrackProduceByArtistOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyTrackProduceByArtistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueTrackProduceByArtistArgs: ["where"],
  FindUniqueTrackProduceByArtistOrThrowArgs: ["where"],
  GroupByTrackProduceByArtistArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyTrackProduceByArtistArgs: ["data", "where"],
  UpdateOneTrackProduceByArtistArgs: ["data", "where"],
  UpsertOneTrackProduceByArtistArgs: ["where", "create", "update"],
  AggregatePlaylistOnFollowerArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyPlaylistOnFollowerArgs: ["data", "skipDuplicates"],
  CreateOnePlaylistOnFollowerArgs: ["data"],
  DeleteManyPlaylistOnFollowerArgs: ["where"],
  DeleteOnePlaylistOnFollowerArgs: ["where"],
  FindFirstPlaylistOnFollowerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstPlaylistOnFollowerOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyPlaylistOnFollowerArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniquePlaylistOnFollowerArgs: ["where"],
  FindUniquePlaylistOnFollowerOrThrowArgs: ["where"],
  GroupByPlaylistOnFollowerArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyPlaylistOnFollowerArgs: ["data", "where"],
  UpdateOnePlaylistOnFollowerArgs: ["data", "where"],
  UpsertOnePlaylistOnFollowerArgs: ["where", "create", "update"],
  AggregateAlbumProduceByArtistArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAlbumProduceByArtistArgs: ["data", "skipDuplicates"],
  CreateOneAlbumProduceByArtistArgs: ["data"],
  DeleteManyAlbumProduceByArtistArgs: ["where"],
  DeleteOneAlbumProduceByArtistArgs: ["where"],
  FindFirstAlbumProduceByArtistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAlbumProduceByArtistOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAlbumProduceByArtistArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAlbumProduceByArtistArgs: ["where"],
  FindUniqueAlbumProduceByArtistOrThrowArgs: ["where"],
  GroupByAlbumProduceByArtistArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAlbumProduceByArtistArgs: ["data", "where"],
  UpdateOneAlbumProduceByArtistArgs: ["data", "where"],
  UpsertOneAlbumProduceByArtistArgs: ["where", "create", "update"],
  AggregateAlbumAvailableMarketArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyAlbumAvailableMarketArgs: ["data", "skipDuplicates"],
  CreateOneAlbumAvailableMarketArgs: ["data"],
  DeleteManyAlbumAvailableMarketArgs: ["where"],
  DeleteOneAlbumAvailableMarketArgs: ["where"],
  FindFirstAlbumAvailableMarketArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstAlbumAvailableMarketOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyAlbumAvailableMarketArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueAlbumAvailableMarketArgs: ["where"],
  FindUniqueAlbumAvailableMarketOrThrowArgs: ["where"],
  GroupByAlbumAvailableMarketArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyAlbumAvailableMarketArgs: ["data", "where"],
  UpdateOneAlbumAvailableMarketArgs: ["data", "where"],
  UpsertOneAlbumAvailableMarketArgs: ["where", "create", "update"],
  AggregateArtistInGenresArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyArtistInGenresArgs: ["data", "skipDuplicates"],
  CreateOneArtistInGenresArgs: ["data"],
  DeleteManyArtistInGenresArgs: ["where"],
  DeleteOneArtistInGenresArgs: ["where"],
  FindFirstArtistInGenresArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstArtistInGenresOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyArtistInGenresArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueArtistInGenresArgs: ["where"],
  FindUniqueArtistInGenresOrThrowArgs: ["where"],
  GroupByArtistInGenresArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyArtistInGenresArgs: ["data", "where"],
  UpdateOneArtistInGenresArgs: ["data", "where"],
  UpsertOneArtistInGenresArgs: ["where", "create", "update"],
  AggregateArtistOnFollowingArgs: ["where", "orderBy", "cursor", "take", "skip"],
  CreateManyArtistOnFollowingArgs: ["data", "skipDuplicates"],
  CreateOneArtistOnFollowingArgs: ["data"],
  DeleteManyArtistOnFollowingArgs: ["where"],
  DeleteOneArtistOnFollowingArgs: ["where"],
  FindFirstArtistOnFollowingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindFirstArtistOnFollowingOrThrowArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindManyArtistOnFollowingArgs: ["where", "orderBy", "cursor", "take", "skip", "distinct"],
  FindUniqueArtistOnFollowingArgs: ["where"],
  FindUniqueArtistOnFollowingOrThrowArgs: ["where"],
  GroupByArtistOnFollowingArgs: ["where", "orderBy", "by", "having", "take", "skip"],
  UpdateManyArtistOnFollowingArgs: ["data", "where"],
  UpdateOneArtistOnFollowingArgs: ["data", "where"],
  UpsertOneArtistOnFollowingArgs: ["where", "create", "update"]
};

type ResolverModelNames = keyof typeof crudResolversMap;

type ModelResolverActionNames<
  TModel extends ResolverModelNames
> = keyof typeof crudResolversMap[TModel]["prototype"];

export type ResolverActionsConfig<
  TModel extends ResolverModelNames
> = Partial<Record<ModelResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type ResolversEnhanceMap = {
  [TModel in ResolverModelNames]?: ResolverActionsConfig<TModel>;
};

export function applyResolversEnhanceMap(
  resolversEnhanceMap: ResolversEnhanceMap,
) {
  for (const resolversEnhanceMapKey of Object.keys(resolversEnhanceMap)) {
    const modelName = resolversEnhanceMapKey as keyof typeof resolversEnhanceMap;
    const crudTarget = crudResolversMap[modelName].prototype;
    const resolverActionsConfig = resolversEnhanceMap[modelName]!;
    const actionResolversConfig = actionResolversMap[modelName];
    const allActionsDecorators = resolverActionsConfig._all ?? [];
    const resolverActionNames = crudResolversInfo[modelName as keyof typeof crudResolversInfo];
    for (const resolverActionName of resolverActionNames) {
      const maybeDecoratorsOrFn = resolverActionsConfig[
        resolverActionName as keyof typeof resolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      const actionTarget = (actionResolversConfig[
        resolverActionName as keyof typeof actionResolversConfig
      ] as Function).prototype;
      tslib.__decorate(decorators, crudTarget, resolverActionName, null);
      tslib.__decorate(decorators, actionTarget, resolverActionName, null);
    }
  }
}

type ArgsTypesNames = keyof typeof argsTypes;

type ArgFieldNames<TArgsType extends ArgsTypesNames> = Exclude<
  keyof typeof argsTypes[TArgsType]["prototype"],
  number | symbol
>;

type ArgFieldsConfig<
  TArgsType extends ArgsTypesNames
> = FieldsConfig<ArgFieldNames<TArgsType>>;

export type ArgConfig<TArgsType extends ArgsTypesNames> = {
  class?: ClassDecorator[];
  fields?: ArgFieldsConfig<TArgsType>;
};

export type ArgsTypesEnhanceMap = {
  [TArgsType in ArgsTypesNames]?: ArgConfig<TArgsType>;
};

export function applyArgsTypesEnhanceMap(
  argsTypesEnhanceMap: ArgsTypesEnhanceMap,
) {
  for (const argsTypesEnhanceMapKey of Object.keys(argsTypesEnhanceMap)) {
    const argsTypeName = argsTypesEnhanceMapKey as keyof typeof argsTypesEnhanceMap;
    const typeConfig = argsTypesEnhanceMap[argsTypeName]!;
    const typeClass = argsTypes[argsTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      argsInfo[argsTypeName as keyof typeof argsInfo],
    );
  }
}

const relationResolversMap = {
  Tag: relationResolvers.TagRelationsResolver,
  User: relationResolvers.UserRelationsResolver,
  Artist: relationResolvers.ArtistRelationsResolver,
  Track: relationResolvers.TrackRelationsResolver,
  Album: relationResolvers.AlbumRelationsResolver,
  Playlist: relationResolvers.PlaylistRelationsResolver,
  TracksOnPlaylist: relationResolvers.TracksOnPlaylistRelationsResolver,
  TracksAvailableMarket: relationResolvers.TracksAvailableMarketRelationsResolver,
  TrackProduceByArtist: relationResolvers.TrackProduceByArtistRelationsResolver,
  PlaylistOnFollower: relationResolvers.PlaylistOnFollowerRelationsResolver,
  AlbumProduceByArtist: relationResolvers.AlbumProduceByArtistRelationsResolver,
  AlbumAvailableMarket: relationResolvers.AlbumAvailableMarketRelationsResolver,
  ArtistInGenres: relationResolvers.ArtistInGenresRelationsResolver,
  ArtistOnFollowing: relationResolvers.ArtistOnFollowingRelationsResolver
};
const relationResolversInfo = {
  Tag: ["AlbumAvailableMarket", "TracksAvailableMarket", "ArtistInGenres"],
  User: ["Playlist", "FollowPlaylists", "FollowingArtists"],
  Artist: ["Genres", "TrackProduceByArtist", "AlbumProduceByArtist", "Followers"],
  Track: ["availableMarkets", "Artists", "InPlaylist", "Album"],
  Album: ["availableMarkets", "Artists", "Tracks"],
  Playlist: ["tracks", "owner", "followers"],
  TracksOnPlaylist: ["Playlist", "Track"],
  TracksAvailableMarket: ["Tag", "Track"],
  TrackProduceByArtist: ["Track", "Artists"],
  PlaylistOnFollower: ["Playlist", "User"],
  AlbumProduceByArtist: ["Album", "Artist"],
  AlbumAvailableMarket: ["Album", "Tag"],
  ArtistInGenres: ["Artist", "Tag"],
  ArtistOnFollowing: ["Artist", "User"]
};

type RelationResolverModelNames = keyof typeof relationResolversMap;

type RelationResolverActionNames<
  TModel extends RelationResolverModelNames
> = keyof typeof relationResolversMap[TModel]["prototype"];

export type RelationResolverActionsConfig<TModel extends RelationResolverModelNames>
  = Partial<Record<RelationResolverActionNames<TModel>, MethodDecorator[] | MethodDecoratorOverrideFn>>
  & { _all?: MethodDecorator[] };

export type RelationResolversEnhanceMap = {
  [TModel in RelationResolverModelNames]?: RelationResolverActionsConfig<TModel>;
};

export function applyRelationResolversEnhanceMap(
  relationResolversEnhanceMap: RelationResolversEnhanceMap,
) {
  for (const relationResolversEnhanceMapKey of Object.keys(relationResolversEnhanceMap)) {
    const modelName = relationResolversEnhanceMapKey as keyof typeof relationResolversEnhanceMap;
    const relationResolverTarget = relationResolversMap[modelName].prototype;
    const relationResolverActionsConfig = relationResolversEnhanceMap[modelName]!;
    const allActionsDecorators = relationResolverActionsConfig._all ?? [];
    const relationResolverActionNames = relationResolversInfo[modelName as keyof typeof relationResolversInfo];
    for (const relationResolverActionName of relationResolverActionNames) {
      const maybeDecoratorsOrFn = relationResolverActionsConfig[
        relationResolverActionName as keyof typeof relationResolverActionsConfig
      ] as MethodDecorator[] | MethodDecoratorOverrideFn | undefined;
      let decorators: MethodDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allActionsDecorators);
      } else {
        decorators = [...allActionsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, relationResolverTarget, relationResolverActionName, null);
    }
  }
}

type TypeConfig = {
  class?: ClassDecorator[];
  fields?: FieldsConfig;
};

export type PropertyDecoratorOverrideFn = (decorators: PropertyDecorator[]) => PropertyDecorator[];

type FieldsConfig<TTypeKeys extends string = string> = Partial<
  Record<TTypeKeys, PropertyDecorator[] | PropertyDecoratorOverrideFn>
> & { _all?: PropertyDecorator[] };

function applyTypeClassEnhanceConfig<
  TEnhanceConfig extends TypeConfig,
  TType extends object
>(
  enhanceConfig: TEnhanceConfig,
  typeClass: ClassType<TType>,
  typePrototype: TType,
  typeFieldNames: string[]
) {
  if (enhanceConfig.class) {
    tslib.__decorate(enhanceConfig.class, typeClass);
  }
  if (enhanceConfig.fields) {
    const allFieldsDecorators = enhanceConfig.fields._all ?? [];
    for (const typeFieldName of typeFieldNames) {
      const maybeDecoratorsOrFn = enhanceConfig.fields[
        typeFieldName
      ] as PropertyDecorator[] | PropertyDecoratorOverrideFn | undefined;
      let decorators: PropertyDecorator[];
      if (typeof maybeDecoratorsOrFn === "function") {
        decorators = maybeDecoratorsOrFn(allFieldsDecorators);
      } else {
        decorators = [...allFieldsDecorators, ...maybeDecoratorsOrFn ?? []];
      }
      tslib.__decorate(decorators, typePrototype, typeFieldName, void 0);
    }
  }
}

const modelsInfo = {
  Tag: ["id", "code", "type", "name"],
  Category: ["id", "hashId", "name", "icon"],
  User: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product"],
  Artist: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl"],
  Track: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId"],
  Album: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl"],
  Playlist: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId"],
  TracksOnPlaylist: ["playlistId", "trackId"],
  TracksAvailableMarket: ["tagId", "trackId"],
  TrackProduceByArtist: ["trackId", "artistId"],
  PlaylistOnFollower: ["playlistId", "userId"],
  AlbumProduceByArtist: ["albumId", "artistId"],
  AlbumAvailableMarket: ["albumId", "tagId"],
  ArtistInGenres: ["artistId", "tagId"],
  ArtistOnFollowing: ["artistId", "userId"]
};

type ModelNames = keyof typeof models;

type ModelFieldNames<TModel extends ModelNames> = Exclude<
  keyof typeof models[TModel]["prototype"],
  number | symbol
>;

type ModelFieldsConfig<TModel extends ModelNames> = FieldsConfig<
  ModelFieldNames<TModel>
>;

export type ModelConfig<TModel extends ModelNames> = {
  class?: ClassDecorator[];
  fields?: ModelFieldsConfig<TModel>;
};

export type ModelsEnhanceMap = {
  [TModel in ModelNames]?: ModelConfig<TModel>;
};

export function applyModelsEnhanceMap(modelsEnhanceMap: ModelsEnhanceMap) {
  for (const modelsEnhanceMapKey of Object.keys(modelsEnhanceMap)) {
    const modelName = modelsEnhanceMapKey as keyof typeof modelsEnhanceMap;
    const modelConfig = modelsEnhanceMap[modelName]!;
    const modelClass = models[modelName];
    const modelTarget = modelClass.prototype;
    applyTypeClassEnhanceConfig(
      modelConfig,
      modelClass,
      modelTarget,
      modelsInfo[modelName as keyof typeof modelsInfo],
    );
  }
}

const outputsInfo = {
  AggregateTag: ["_count", "_avg", "_sum", "_min", "_max"],
  TagGroupBy: ["id", "code", "type", "name", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateCategory: ["_count", "_avg", "_sum", "_min", "_max"],
  CategoryGroupBy: ["id", "hashId", "name", "icon", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateUser: ["_count", "_avg", "_sum", "_min", "_max"],
  UserGroupBy: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateArtist: ["_count", "_avg", "_sum", "_min", "_max"],
  ArtistGroupBy: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTrack: ["_count", "_avg", "_sum", "_min", "_max"],
  TrackGroupBy: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAlbum: ["_count", "_avg", "_sum", "_min", "_max"],
  AlbumGroupBy: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlaylist: ["_count", "_avg", "_sum", "_min", "_max"],
  PlaylistGroupBy: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTracksOnPlaylist: ["_count", "_avg", "_sum", "_min", "_max"],
  TracksOnPlaylistGroupBy: ["playlistId", "trackId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTracksAvailableMarket: ["_count", "_avg", "_sum", "_min", "_max"],
  TracksAvailableMarketGroupBy: ["tagId", "trackId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateTrackProduceByArtist: ["_count", "_avg", "_sum", "_min", "_max"],
  TrackProduceByArtistGroupBy: ["trackId", "artistId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregatePlaylistOnFollower: ["_count", "_avg", "_sum", "_min", "_max"],
  PlaylistOnFollowerGroupBy: ["playlistId", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAlbumProduceByArtist: ["_count", "_avg", "_sum", "_min", "_max"],
  AlbumProduceByArtistGroupBy: ["albumId", "artistId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateAlbumAvailableMarket: ["_count", "_avg", "_sum", "_min", "_max"],
  AlbumAvailableMarketGroupBy: ["albumId", "tagId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateArtistInGenres: ["_count", "_avg", "_sum", "_min", "_max"],
  ArtistInGenresGroupBy: ["artistId", "tagId", "_count", "_avg", "_sum", "_min", "_max"],
  AggregateArtistOnFollowing: ["_count", "_avg", "_sum", "_min", "_max"],
  ArtistOnFollowingGroupBy: ["artistId", "userId", "_count", "_avg", "_sum", "_min", "_max"],
  AffectedRowsOutput: ["count"],
  TagCount: ["AlbumAvailableMarket", "TracksAvailableMarket", "ArtistInGenres"],
  TagCountAggregate: ["id", "code", "type", "name", "_all"],
  TagAvgAggregate: ["id"],
  TagSumAggregate: ["id"],
  TagMinAggregate: ["id", "code", "type", "name"],
  TagMaxAggregate: ["id", "code", "type", "name"],
  CategoryCountAggregate: ["id", "hashId", "name", "icon", "_all"],
  CategoryAvgAggregate: ["id"],
  CategorySumAggregate: ["id"],
  CategoryMinAggregate: ["id", "hashId", "name", "icon"],
  CategoryMaxAggregate: ["id", "hashId", "name", "icon"],
  UserCount: ["Playlist", "FollowPlaylists", "FollowingArtists"],
  UserCountAggregate: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "_all"],
  UserAvgAggregate: ["id"],
  UserSumAggregate: ["id"],
  UserMinAggregate: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product"],
  UserMaxAggregate: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product"],
  ArtistCount: ["Genres", "TrackProduceByArtist", "AlbumProduceByArtist", "Followers"],
  ArtistCountAggregate: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "_all"],
  ArtistAvgAggregate: ["id", "popularity"],
  ArtistSumAggregate: ["id", "popularity"],
  ArtistMinAggregate: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl"],
  ArtistMaxAggregate: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl"],
  TrackCount: ["availableMarkets", "Artists", "InPlaylist"],
  TrackCountAggregate: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId", "_all"],
  TrackAvgAggregate: ["id", "discNumber", "durationMs", "popularity", "trackNumber", "albumId"],
  TrackSumAggregate: ["id", "discNumber", "durationMs", "popularity", "trackNumber", "albumId"],
  TrackMinAggregate: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId"],
  TrackMaxAggregate: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId"],
  AlbumCount: ["availableMarkets", "Artists", "Tracks"],
  AlbumCountAggregate: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "_all"],
  AlbumAvgAggregate: ["id", "totalTracks"],
  AlbumSumAggregate: ["id", "totalTracks"],
  AlbumMinAggregate: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl"],
  AlbumMaxAggregate: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl"],
  PlaylistCount: ["tracks", "followers"],
  PlaylistCountAggregate: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId", "_all"],
  PlaylistAvgAggregate: ["id", "tracksIds", "ownerId"],
  PlaylistSumAggregate: ["id", "tracksIds", "ownerId"],
  PlaylistMinAggregate: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId"],
  PlaylistMaxAggregate: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId"],
  TracksOnPlaylistCountAggregate: ["playlistId", "trackId", "_all"],
  TracksOnPlaylistAvgAggregate: ["playlistId", "trackId"],
  TracksOnPlaylistSumAggregate: ["playlistId", "trackId"],
  TracksOnPlaylistMinAggregate: ["playlistId", "trackId"],
  TracksOnPlaylistMaxAggregate: ["playlistId", "trackId"],
  TracksAvailableMarketCountAggregate: ["tagId", "trackId", "_all"],
  TracksAvailableMarketAvgAggregate: ["tagId", "trackId"],
  TracksAvailableMarketSumAggregate: ["tagId", "trackId"],
  TracksAvailableMarketMinAggregate: ["tagId", "trackId"],
  TracksAvailableMarketMaxAggregate: ["tagId", "trackId"],
  TrackProduceByArtistCountAggregate: ["trackId", "artistId", "_all"],
  TrackProduceByArtistAvgAggregate: ["trackId", "artistId"],
  TrackProduceByArtistSumAggregate: ["trackId", "artistId"],
  TrackProduceByArtistMinAggregate: ["trackId", "artistId"],
  TrackProduceByArtistMaxAggregate: ["trackId", "artistId"],
  PlaylistOnFollowerCountAggregate: ["playlistId", "userId", "_all"],
  PlaylistOnFollowerAvgAggregate: ["playlistId", "userId"],
  PlaylistOnFollowerSumAggregate: ["playlistId", "userId"],
  PlaylistOnFollowerMinAggregate: ["playlistId", "userId"],
  PlaylistOnFollowerMaxAggregate: ["playlistId", "userId"],
  AlbumProduceByArtistCountAggregate: ["albumId", "artistId", "_all"],
  AlbumProduceByArtistAvgAggregate: ["albumId", "artistId"],
  AlbumProduceByArtistSumAggregate: ["albumId", "artistId"],
  AlbumProduceByArtistMinAggregate: ["albumId", "artistId"],
  AlbumProduceByArtistMaxAggregate: ["albumId", "artistId"],
  AlbumAvailableMarketCountAggregate: ["albumId", "tagId", "_all"],
  AlbumAvailableMarketAvgAggregate: ["albumId", "tagId"],
  AlbumAvailableMarketSumAggregate: ["albumId", "tagId"],
  AlbumAvailableMarketMinAggregate: ["albumId", "tagId"],
  AlbumAvailableMarketMaxAggregate: ["albumId", "tagId"],
  ArtistInGenresCountAggregate: ["artistId", "tagId", "_all"],
  ArtistInGenresAvgAggregate: ["artistId", "tagId"],
  ArtistInGenresSumAggregate: ["artistId", "tagId"],
  ArtistInGenresMinAggregate: ["artistId", "tagId"],
  ArtistInGenresMaxAggregate: ["artistId", "tagId"],
  ArtistOnFollowingCountAggregate: ["artistId", "userId", "_all"],
  ArtistOnFollowingAvgAggregate: ["artistId", "userId"],
  ArtistOnFollowingSumAggregate: ["artistId", "userId"],
  ArtistOnFollowingMinAggregate: ["artistId", "userId"],
  ArtistOnFollowingMaxAggregate: ["artistId", "userId"]
};

type OutputTypesNames = keyof typeof outputTypes;

type OutputTypeFieldNames<TOutput extends OutputTypesNames> = Exclude<
  keyof typeof outputTypes[TOutput]["prototype"],
  number | symbol
>;

type OutputTypeFieldsConfig<
  TOutput extends OutputTypesNames
> = FieldsConfig<OutputTypeFieldNames<TOutput>>;

export type OutputTypeConfig<TOutput extends OutputTypesNames> = {
  class?: ClassDecorator[];
  fields?: OutputTypeFieldsConfig<TOutput>;
};

export type OutputTypesEnhanceMap = {
  [TOutput in OutputTypesNames]?: OutputTypeConfig<TOutput>;
};

export function applyOutputTypesEnhanceMap(
  outputTypesEnhanceMap: OutputTypesEnhanceMap,
) {
  for (const outputTypeEnhanceMapKey of Object.keys(outputTypesEnhanceMap)) {
    const outputTypeName = outputTypeEnhanceMapKey as keyof typeof outputTypesEnhanceMap;
    const typeConfig = outputTypesEnhanceMap[outputTypeName]!;
    const typeClass = outputTypes[outputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      outputsInfo[outputTypeName as keyof typeof outputsInfo],
    );
  }
}

const inputsInfo = {
  TagWhereInput: ["AND", "OR", "NOT", "id", "code", "type", "name", "AlbumAvailableMarket", "TracksAvailableMarket", "ArtistInGenres"],
  TagOrderByWithRelationInput: ["id", "code", "type", "name", "AlbumAvailableMarket", "TracksAvailableMarket", "ArtistInGenres"],
  TagWhereUniqueInput: ["id", "code"],
  TagOrderByWithAggregationInput: ["id", "code", "type", "name", "_count", "_avg", "_max", "_min", "_sum"],
  TagScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "code", "type", "name"],
  CategoryWhereInput: ["AND", "OR", "NOT", "id", "hashId", "name", "icon"],
  CategoryOrderByWithRelationInput: ["id", "hashId", "name", "icon"],
  CategoryWhereUniqueInput: ["id", "hashId"],
  CategoryOrderByWithAggregationInput: ["id", "hashId", "name", "icon", "_count", "_avg", "_max", "_min", "_sum"],
  CategoryScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "hashId", "name", "icon"],
  UserWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "Playlist", "FollowPlaylists", "FollowingArtists"],
  UserOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "Playlist", "FollowPlaylists", "FollowingArtists"],
  UserWhereUniqueInput: ["id"],
  UserOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "_count", "_avg", "_max", "_min", "_sum"],
  UserScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product"],
  ArtistWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "TrackProduceByArtist", "AlbumProduceByArtist", "Followers"],
  ArtistOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "TrackProduceByArtist", "AlbumProduceByArtist", "Followers"],
  ArtistWhereUniqueInput: ["id", "uid"],
  ArtistOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "_count", "_avg", "_max", "_min", "_sum"],
  ArtistScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl"],
  TrackWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId", "availableMarkets", "Artists", "InPlaylist", "Album"],
  TrackOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId", "availableMarkets", "Artists", "InPlaylist", "Album"],
  TrackWhereUniqueInput: ["id", "uid"],
  TrackOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId", "_count", "_avg", "_max", "_min", "_sum"],
  TrackScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId"],
  AlbumWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "availableMarkets", "Artists", "Tracks"],
  AlbumOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "availableMarkets", "Artists", "Tracks"],
  AlbumWhereUniqueInput: ["id", "uid"],
  AlbumOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "_count", "_avg", "_max", "_min", "_sum"],
  AlbumScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl"],
  PlaylistWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId", "tracks", "owner", "followers"],
  PlaylistOrderByWithRelationInput: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId", "tracks", "owner", "followers"],
  PlaylistWhereUniqueInput: ["id"],
  PlaylistOrderByWithAggregationInput: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId", "_count", "_avg", "_max", "_min", "_sum"],
  PlaylistScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId"],
  TracksOnPlaylistWhereInput: ["AND", "OR", "NOT", "playlistId", "trackId", "Playlist", "Track"],
  TracksOnPlaylistOrderByWithRelationInput: ["playlistId", "trackId", "Playlist", "Track"],
  TracksOnPlaylistWhereUniqueInput: ["playlistId_trackId"],
  TracksOnPlaylistOrderByWithAggregationInput: ["playlistId", "trackId", "_count", "_avg", "_max", "_min", "_sum"],
  TracksOnPlaylistScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "playlistId", "trackId"],
  TracksAvailableMarketWhereInput: ["AND", "OR", "NOT", "tagId", "trackId", "Tag", "Track"],
  TracksAvailableMarketOrderByWithRelationInput: ["tagId", "trackId", "Tag", "Track"],
  TracksAvailableMarketWhereUniqueInput: ["trackId_tagId"],
  TracksAvailableMarketOrderByWithAggregationInput: ["tagId", "trackId", "_count", "_avg", "_max", "_min", "_sum"],
  TracksAvailableMarketScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "tagId", "trackId"],
  TrackProduceByArtistWhereInput: ["AND", "OR", "NOT", "trackId", "artistId", "Track", "Artists"],
  TrackProduceByArtistOrderByWithRelationInput: ["trackId", "artistId", "Track", "Artists"],
  TrackProduceByArtistWhereUniqueInput: ["trackId_artistId"],
  TrackProduceByArtistOrderByWithAggregationInput: ["trackId", "artistId", "_count", "_avg", "_max", "_min", "_sum"],
  TrackProduceByArtistScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "trackId", "artistId"],
  PlaylistOnFollowerWhereInput: ["AND", "OR", "NOT", "playlistId", "userId", "Playlist", "User"],
  PlaylistOnFollowerOrderByWithRelationInput: ["playlistId", "userId", "Playlist", "User"],
  PlaylistOnFollowerWhereUniqueInput: ["playlistId_userId"],
  PlaylistOnFollowerOrderByWithAggregationInput: ["playlistId", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  PlaylistOnFollowerScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "playlistId", "userId"],
  AlbumProduceByArtistWhereInput: ["AND", "OR", "NOT", "albumId", "artistId", "Album", "Artist"],
  AlbumProduceByArtistOrderByWithRelationInput: ["albumId", "artistId", "Album", "Artist"],
  AlbumProduceByArtistWhereUniqueInput: ["albumId_artistId"],
  AlbumProduceByArtistOrderByWithAggregationInput: ["albumId", "artistId", "_count", "_avg", "_max", "_min", "_sum"],
  AlbumProduceByArtistScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "albumId", "artistId"],
  AlbumAvailableMarketWhereInput: ["AND", "OR", "NOT", "albumId", "tagId", "Album", "Tag"],
  AlbumAvailableMarketOrderByWithRelationInput: ["albumId", "tagId", "Album", "Tag"],
  AlbumAvailableMarketWhereUniqueInput: ["albumId_tagId"],
  AlbumAvailableMarketOrderByWithAggregationInput: ["albumId", "tagId", "_count", "_avg", "_max", "_min", "_sum"],
  AlbumAvailableMarketScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "albumId", "tagId"],
  ArtistInGenresWhereInput: ["AND", "OR", "NOT", "artistId", "tagId", "Artist", "Tag"],
  ArtistInGenresOrderByWithRelationInput: ["artistId", "tagId", "Artist", "Tag"],
  ArtistInGenresWhereUniqueInput: ["artistId_tagId"],
  ArtistInGenresOrderByWithAggregationInput: ["artistId", "tagId", "_count", "_avg", "_max", "_min", "_sum"],
  ArtistInGenresScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "artistId", "tagId"],
  ArtistOnFollowingWhereInput: ["AND", "OR", "NOT", "artistId", "userId", "Artist", "User"],
  ArtistOnFollowingOrderByWithRelationInput: ["artistId", "userId", "Artist", "User"],
  ArtistOnFollowingWhereUniqueInput: ["userId_artistId"],
  ArtistOnFollowingOrderByWithAggregationInput: ["artistId", "userId", "_count", "_avg", "_max", "_min", "_sum"],
  ArtistOnFollowingScalarWhereWithAggregatesInput: ["AND", "OR", "NOT", "artistId", "userId"],
  TagCreateInput: ["code", "type", "name", "AlbumAvailableMarket", "TracksAvailableMarket", "ArtistInGenres"],
  TagUpdateInput: ["code", "type", "name", "AlbumAvailableMarket", "TracksAvailableMarket", "ArtistInGenres"],
  TagCreateManyInput: ["id", "code", "type", "name"],
  TagUpdateManyMutationInput: ["code", "type", "name"],
  CategoryCreateInput: ["hashId", "name", "icon"],
  CategoryUpdateInput: ["hashId", "name", "icon"],
  CategoryCreateManyInput: ["id", "hashId", "name", "icon"],
  CategoryUpdateManyMutationInput: ["hashId", "name", "icon"],
  UserCreateInput: ["createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "Playlist", "FollowPlaylists", "FollowingArtists"],
  UserUpdateInput: ["createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "Playlist", "FollowPlaylists", "FollowingArtists"],
  UserCreateManyInput: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product"],
  UserUpdateManyMutationInput: ["createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product"],
  ArtistCreateInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "TrackProduceByArtist", "AlbumProduceByArtist", "Followers"],
  ArtistUpdateInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "TrackProduceByArtist", "AlbumProduceByArtist", "Followers"],
  ArtistCreateManyInput: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl"],
  ArtistUpdateManyMutationInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl"],
  TrackCreateInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "availableMarkets", "Artists", "InPlaylist", "Album"],
  TrackUpdateInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "availableMarkets", "Artists", "InPlaylist", "Album"],
  TrackCreateManyInput: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId"],
  TrackUpdateManyMutationInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal"],
  AlbumCreateInput: ["createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "availableMarkets", "Artists", "Tracks"],
  AlbumUpdateInput: ["createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "availableMarkets", "Artists", "Tracks"],
  AlbumCreateManyInput: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl"],
  AlbumUpdateManyMutationInput: ["createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl"],
  PlaylistCreateInput: ["createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId", "tracks", "owner", "followers"],
  PlaylistUpdateInput: ["createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId", "tracks", "owner", "followers"],
  PlaylistCreateManyInput: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId"],
  PlaylistUpdateManyMutationInput: ["createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId"],
  TracksOnPlaylistCreateInput: ["Playlist", "Track"],
  TracksOnPlaylistUpdateInput: ["Playlist", "Track"],
  TracksOnPlaylistCreateManyInput: ["playlistId", "trackId"],
  TracksOnPlaylistUpdateManyMutationInput: [],
  TracksAvailableMarketCreateInput: ["Tag", "Track"],
  TracksAvailableMarketUpdateInput: ["Tag", "Track"],
  TracksAvailableMarketCreateManyInput: ["tagId", "trackId"],
  TracksAvailableMarketUpdateManyMutationInput: [],
  TrackProduceByArtistCreateInput: ["Track", "Artists"],
  TrackProduceByArtistUpdateInput: ["Track", "Artists"],
  TrackProduceByArtistCreateManyInput: ["trackId", "artistId"],
  TrackProduceByArtistUpdateManyMutationInput: [],
  PlaylistOnFollowerCreateInput: ["Playlist", "User"],
  PlaylistOnFollowerUpdateInput: ["Playlist", "User"],
  PlaylistOnFollowerCreateManyInput: ["playlistId", "userId"],
  PlaylistOnFollowerUpdateManyMutationInput: [],
  AlbumProduceByArtistCreateInput: ["Album", "Artist"],
  AlbumProduceByArtistUpdateInput: ["Album", "Artist"],
  AlbumProduceByArtistCreateManyInput: ["albumId", "artistId"],
  AlbumProduceByArtistUpdateManyMutationInput: [],
  AlbumAvailableMarketCreateInput: ["Album", "Tag"],
  AlbumAvailableMarketUpdateInput: ["Album", "Tag"],
  AlbumAvailableMarketCreateManyInput: ["albumId", "tagId"],
  AlbumAvailableMarketUpdateManyMutationInput: [],
  ArtistInGenresCreateInput: ["Artist", "Tag"],
  ArtistInGenresUpdateInput: ["Artist", "Tag"],
  ArtistInGenresCreateManyInput: ["artistId", "tagId"],
  ArtistInGenresUpdateManyMutationInput: [],
  ArtistOnFollowingCreateInput: ["Artist", "User"],
  ArtistOnFollowingUpdateInput: ["Artist", "User"],
  ArtistOnFollowingCreateManyInput: ["artistId", "userId"],
  ArtistOnFollowingUpdateManyMutationInput: [],
  IntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  AlbumAvailableMarketListRelationFilter: ["every", "some", "none"],
  TracksAvailableMarketListRelationFilter: ["every", "some", "none"],
  ArtistInGenresListRelationFilter: ["every", "some", "none"],
  AlbumAvailableMarketOrderByRelationAggregateInput: ["_count"],
  TracksAvailableMarketOrderByRelationAggregateInput: ["_count"],
  ArtistInGenresOrderByRelationAggregateInput: ["_count"],
  TagCountOrderByAggregateInput: ["id", "code", "type", "name"],
  TagAvgOrderByAggregateInput: ["id"],
  TagMaxOrderByAggregateInput: ["id", "code", "type", "name"],
  TagMinOrderByAggregateInput: ["id", "code", "type", "name"],
  TagSumOrderByAggregateInput: ["id"],
  IntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  StringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  CategoryCountOrderByAggregateInput: ["id", "hashId", "name", "icon"],
  CategoryAvgOrderByAggregateInput: ["id"],
  CategoryMaxOrderByAggregateInput: ["id", "hashId", "name", "icon"],
  CategoryMinOrderByAggregateInput: ["id", "hashId", "name", "icon"],
  CategorySumOrderByAggregateInput: ["id"],
  DateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  StringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not"],
  BoolFilter: ["equals", "not"],
  PlaylistListRelationFilter: ["every", "some", "none"],
  PlaylistOnFollowerListRelationFilter: ["every", "some", "none"],
  ArtistOnFollowingListRelationFilter: ["every", "some", "none"],
  PlaylistOrderByRelationAggregateInput: ["_count"],
  PlaylistOnFollowerOrderByRelationAggregateInput: ["_count"],
  ArtistOnFollowingOrderByRelationAggregateInput: ["_count"],
  UserCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product"],
  UserAvgOrderByAggregateInput: ["id"],
  UserMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product"],
  UserMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product"],
  UserSumOrderByAggregateInput: ["id"],
  DateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  StringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "mode", "not", "_count", "_min", "_max"],
  BoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  IntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  TrackProduceByArtistListRelationFilter: ["every", "some", "none"],
  AlbumProduceByArtistListRelationFilter: ["every", "some", "none"],
  TrackProduceByArtistOrderByRelationAggregateInput: ["_count"],
  AlbumProduceByArtistOrderByRelationAggregateInput: ["_count"],
  ArtistCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl"],
  ArtistAvgOrderByAggregateInput: ["id", "popularity"],
  ArtistMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl"],
  ArtistMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl"],
  ArtistSumOrderByAggregateInput: ["id", "popularity"],
  IntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  TracksOnPlaylistListRelationFilter: ["every", "some", "none"],
  AlbumRelationFilter: ["is", "isNot"],
  TracksOnPlaylistOrderByRelationAggregateInput: ["_count"],
  TrackCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId"],
  TrackAvgOrderByAggregateInput: ["id", "discNumber", "durationMs", "popularity", "trackNumber", "albumId"],
  TrackMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId"],
  TrackMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId"],
  TrackSumOrderByAggregateInput: ["id", "discNumber", "durationMs", "popularity", "trackNumber", "albumId"],
  TrackListRelationFilter: ["every", "some", "none"],
  TrackOrderByRelationAggregateInput: ["_count"],
  AlbumCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl"],
  AlbumAvgOrderByAggregateInput: ["id", "totalTracks"],
  AlbumMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl"],
  AlbumMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl"],
  AlbumSumOrderByAggregateInput: ["id", "totalTracks"],
  UserRelationFilter: ["is", "isNot"],
  PlaylistCountOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId"],
  PlaylistAvgOrderByAggregateInput: ["id", "tracksIds", "ownerId"],
  PlaylistMaxOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId"],
  PlaylistMinOrderByAggregateInput: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId"],
  PlaylistSumOrderByAggregateInput: ["id", "tracksIds", "ownerId"],
  PlaylistRelationFilter: ["is", "isNot"],
  TrackRelationFilter: ["is", "isNot"],
  TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInput: ["playlistId", "trackId"],
  TracksOnPlaylistCountOrderByAggregateInput: ["playlistId", "trackId"],
  TracksOnPlaylistAvgOrderByAggregateInput: ["playlistId", "trackId"],
  TracksOnPlaylistMaxOrderByAggregateInput: ["playlistId", "trackId"],
  TracksOnPlaylistMinOrderByAggregateInput: ["playlistId", "trackId"],
  TracksOnPlaylistSumOrderByAggregateInput: ["playlistId", "trackId"],
  TagRelationFilter: ["is", "isNot"],
  TracksAvailableMarketTrackIdTagIdCompoundUniqueInput: ["trackId", "tagId"],
  TracksAvailableMarketCountOrderByAggregateInput: ["tagId", "trackId"],
  TracksAvailableMarketAvgOrderByAggregateInput: ["tagId", "trackId"],
  TracksAvailableMarketMaxOrderByAggregateInput: ["tagId", "trackId"],
  TracksAvailableMarketMinOrderByAggregateInput: ["tagId", "trackId"],
  TracksAvailableMarketSumOrderByAggregateInput: ["tagId", "trackId"],
  ArtistRelationFilter: ["is", "isNot"],
  TrackProduceByArtistTrackIdArtistIdCompoundUniqueInput: ["trackId", "artistId"],
  TrackProduceByArtistCountOrderByAggregateInput: ["trackId", "artistId"],
  TrackProduceByArtistAvgOrderByAggregateInput: ["trackId", "artistId"],
  TrackProduceByArtistMaxOrderByAggregateInput: ["trackId", "artistId"],
  TrackProduceByArtistMinOrderByAggregateInput: ["trackId", "artistId"],
  TrackProduceByArtistSumOrderByAggregateInput: ["trackId", "artistId"],
  PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInput: ["playlistId", "userId"],
  PlaylistOnFollowerCountOrderByAggregateInput: ["playlistId", "userId"],
  PlaylistOnFollowerAvgOrderByAggregateInput: ["playlistId", "userId"],
  PlaylistOnFollowerMaxOrderByAggregateInput: ["playlistId", "userId"],
  PlaylistOnFollowerMinOrderByAggregateInput: ["playlistId", "userId"],
  PlaylistOnFollowerSumOrderByAggregateInput: ["playlistId", "userId"],
  AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInput: ["albumId", "artistId"],
  AlbumProduceByArtistCountOrderByAggregateInput: ["albumId", "artistId"],
  AlbumProduceByArtistAvgOrderByAggregateInput: ["albumId", "artistId"],
  AlbumProduceByArtistMaxOrderByAggregateInput: ["albumId", "artistId"],
  AlbumProduceByArtistMinOrderByAggregateInput: ["albumId", "artistId"],
  AlbumProduceByArtistSumOrderByAggregateInput: ["albumId", "artistId"],
  AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInput: ["albumId", "tagId"],
  AlbumAvailableMarketCountOrderByAggregateInput: ["albumId", "tagId"],
  AlbumAvailableMarketAvgOrderByAggregateInput: ["albumId", "tagId"],
  AlbumAvailableMarketMaxOrderByAggregateInput: ["albumId", "tagId"],
  AlbumAvailableMarketMinOrderByAggregateInput: ["albumId", "tagId"],
  AlbumAvailableMarketSumOrderByAggregateInput: ["albumId", "tagId"],
  ArtistInGenresArtistIdTagIdCompoundUniqueInput: ["artistId", "tagId"],
  ArtistInGenresCountOrderByAggregateInput: ["artistId", "tagId"],
  ArtistInGenresAvgOrderByAggregateInput: ["artistId", "tagId"],
  ArtistInGenresMaxOrderByAggregateInput: ["artistId", "tagId"],
  ArtistInGenresMinOrderByAggregateInput: ["artistId", "tagId"],
  ArtistInGenresSumOrderByAggregateInput: ["artistId", "tagId"],
  ArtistOnFollowingUserIdArtistIdCompoundUniqueInput: ["userId", "artistId"],
  ArtistOnFollowingCountOrderByAggregateInput: ["artistId", "userId"],
  ArtistOnFollowingAvgOrderByAggregateInput: ["artistId", "userId"],
  ArtistOnFollowingMaxOrderByAggregateInput: ["artistId", "userId"],
  ArtistOnFollowingMinOrderByAggregateInput: ["artistId", "userId"],
  ArtistOnFollowingSumOrderByAggregateInput: ["artistId", "userId"],
  AlbumAvailableMarketCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  TracksAvailableMarketCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  ArtistInGenresCreateNestedManyWithoutTagInput: ["create", "connectOrCreate", "createMany", "connect"],
  StringFieldUpdateOperationsInput: ["set"],
  AlbumAvailableMarketUpdateManyWithoutTagNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TracksAvailableMarketUpdateManyWithoutTagNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ArtistInGenresUpdateManyWithoutTagNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  IntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  PlaylistCreateNestedManyWithoutOwnerInput: ["create", "connectOrCreate", "createMany", "connect"],
  PlaylistOnFollowerCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  ArtistOnFollowingCreateNestedManyWithoutUserInput: ["create", "connectOrCreate", "createMany", "connect"],
  DateTimeFieldUpdateOperationsInput: ["set"],
  NullableStringFieldUpdateOperationsInput: ["set"],
  BoolFieldUpdateOperationsInput: ["set"],
  PlaylistUpdateManyWithoutOwnerNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PlaylistOnFollowerUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ArtistOnFollowingUpdateManyWithoutUserNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ArtistInGenresCreateNestedManyWithoutArtistInput: ["create", "connectOrCreate", "createMany", "connect"],
  TrackProduceByArtistCreateNestedManyWithoutArtistsInput: ["create", "connectOrCreate", "createMany", "connect"],
  AlbumProduceByArtistCreateNestedManyWithoutArtistInput: ["create", "connectOrCreate", "createMany", "connect"],
  ArtistOnFollowingCreateNestedManyWithoutArtistInput: ["create", "connectOrCreate", "createMany", "connect"],
  NullableIntFieldUpdateOperationsInput: ["set", "increment", "decrement", "multiply", "divide"],
  ArtistInGenresUpdateManyWithoutArtistNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TrackProduceByArtistUpdateManyWithoutArtistsNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AlbumProduceByArtistUpdateManyWithoutArtistNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  ArtistOnFollowingUpdateManyWithoutArtistNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TracksAvailableMarketCreateNestedManyWithoutTrackInput: ["create", "connectOrCreate", "createMany", "connect"],
  TrackProduceByArtistCreateNestedManyWithoutTrackInput: ["create", "connectOrCreate", "createMany", "connect"],
  TracksOnPlaylistCreateNestedManyWithoutTrackInput: ["create", "connectOrCreate", "createMany", "connect"],
  AlbumCreateNestedOneWithoutTracksInput: ["create", "connectOrCreate", "connect"],
  TracksAvailableMarketUpdateManyWithoutTrackNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TrackProduceByArtistUpdateManyWithoutTrackNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TracksOnPlaylistUpdateManyWithoutTrackNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AlbumUpdateOneWithoutTracksNestedInput: ["create", "connectOrCreate", "upsert", "disconnect", "delete", "connect", "update"],
  AlbumAvailableMarketCreateNestedManyWithoutAlbumInput: ["create", "connectOrCreate", "createMany", "connect"],
  AlbumProduceByArtistCreateNestedManyWithoutAlbumInput: ["create", "connectOrCreate", "createMany", "connect"],
  TrackCreateNestedManyWithoutAlbumInput: ["create", "connectOrCreate", "createMany", "connect"],
  AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TrackUpdateManyWithoutAlbumNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  TracksOnPlaylistCreateNestedManyWithoutPlaylistInput: ["create", "connectOrCreate", "createMany", "connect"],
  UserCreateNestedOneWithoutPlaylistInput: ["create", "connectOrCreate", "connect"],
  PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput: ["create", "connectOrCreate", "createMany", "connect"],
  TracksOnPlaylistUpdateManyWithoutPlaylistNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  UserUpdateOneRequiredWithoutPlaylistNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PlaylistOnFollowerUpdateManyWithoutPlaylistNestedInput: ["create", "connectOrCreate", "upsert", "createMany", "set", "disconnect", "delete", "connect", "update", "updateMany", "deleteMany"],
  PlaylistCreateNestedOneWithoutTracksInput: ["create", "connectOrCreate", "connect"],
  TrackCreateNestedOneWithoutInPlaylistInput: ["create", "connectOrCreate", "connect"],
  PlaylistUpdateOneRequiredWithoutTracksNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TrackUpdateOneRequiredWithoutInPlaylistNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TagCreateNestedOneWithoutTracksAvailableMarketInput: ["create", "connectOrCreate", "connect"],
  TrackCreateNestedOneWithoutAvailableMarketsInput: ["create", "connectOrCreate", "connect"],
  TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TrackCreateNestedOneWithoutArtistsInput: ["create", "connectOrCreate", "connect"],
  ArtistCreateNestedOneWithoutTrackProduceByArtistInput: ["create", "connectOrCreate", "connect"],
  TrackUpdateOneRequiredWithoutArtistsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  PlaylistCreateNestedOneWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutFollowPlaylistsInput: ["create", "connectOrCreate", "connect"],
  PlaylistUpdateOneRequiredWithoutFollowersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AlbumCreateNestedOneWithoutArtistsInput: ["create", "connectOrCreate", "connect"],
  ArtistCreateNestedOneWithoutAlbumProduceByArtistInput: ["create", "connectOrCreate", "connect"],
  AlbumUpdateOneRequiredWithoutArtistsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  AlbumCreateNestedOneWithoutAvailableMarketsInput: ["create", "connectOrCreate", "connect"],
  TagCreateNestedOneWithoutAlbumAvailableMarketInput: ["create", "connectOrCreate", "connect"],
  AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ArtistCreateNestedOneWithoutGenresInput: ["create", "connectOrCreate", "connect"],
  TagCreateNestedOneWithoutArtistInGenresInput: ["create", "connectOrCreate", "connect"],
  ArtistUpdateOneRequiredWithoutGenresNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  TagUpdateOneRequiredWithoutArtistInGenresNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  ArtistCreateNestedOneWithoutFollowersInput: ["create", "connectOrCreate", "connect"],
  UserCreateNestedOneWithoutFollowingArtistsInput: ["create", "connectOrCreate", "connect"],
  ArtistUpdateOneRequiredWithoutFollowersNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  UserUpdateOneRequiredWithoutFollowingArtistsNestedInput: ["create", "connectOrCreate", "upsert", "connect", "update"],
  NestedIntFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedIntWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedDateTimeFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedStringNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not"],
  NestedBoolFilter: ["equals", "not"],
  NestedDateTimeWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_min", "_max"],
  NestedStringNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "contains", "startsWith", "endsWith", "not", "_count", "_min", "_max"],
  NestedIntNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  NestedBoolWithAggregatesFilter: ["equals", "not", "_count", "_min", "_max"],
  NestedIntNullableWithAggregatesFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not", "_count", "_avg", "_sum", "_min", "_max"],
  NestedFloatNullableFilter: ["equals", "in", "notIn", "lt", "lte", "gt", "gte", "not"],
  AlbumAvailableMarketCreateWithoutTagInput: ["Album"],
  AlbumAvailableMarketCreateOrConnectWithoutTagInput: ["where", "create"],
  AlbumAvailableMarketCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  TracksAvailableMarketCreateWithoutTagInput: ["Track"],
  TracksAvailableMarketCreateOrConnectWithoutTagInput: ["where", "create"],
  TracksAvailableMarketCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  ArtistInGenresCreateWithoutTagInput: ["Artist"],
  ArtistInGenresCreateOrConnectWithoutTagInput: ["where", "create"],
  ArtistInGenresCreateManyTagInputEnvelope: ["data", "skipDuplicates"],
  AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  AlbumAvailableMarketScalarWhereInput: ["AND", "OR", "NOT", "albumId", "tagId"],
  TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  TracksAvailableMarketUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  TracksAvailableMarketScalarWhereInput: ["AND", "OR", "NOT", "tagId", "trackId"],
  ArtistInGenresUpsertWithWhereUniqueWithoutTagInput: ["where", "update", "create"],
  ArtistInGenresUpdateWithWhereUniqueWithoutTagInput: ["where", "data"],
  ArtistInGenresUpdateManyWithWhereWithoutTagInput: ["where", "data"],
  ArtistInGenresScalarWhereInput: ["AND", "OR", "NOT", "artistId", "tagId"],
  PlaylistCreateWithoutOwnerInput: ["createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId", "tracks", "followers"],
  PlaylistCreateOrConnectWithoutOwnerInput: ["where", "create"],
  PlaylistCreateManyOwnerInputEnvelope: ["data", "skipDuplicates"],
  PlaylistOnFollowerCreateWithoutUserInput: ["Playlist"],
  PlaylistOnFollowerCreateOrConnectWithoutUserInput: ["where", "create"],
  PlaylistOnFollowerCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  ArtistOnFollowingCreateWithoutUserInput: ["Artist"],
  ArtistOnFollowingCreateOrConnectWithoutUserInput: ["where", "create"],
  ArtistOnFollowingCreateManyUserInputEnvelope: ["data", "skipDuplicates"],
  PlaylistUpsertWithWhereUniqueWithoutOwnerInput: ["where", "update", "create"],
  PlaylistUpdateWithWhereUniqueWithoutOwnerInput: ["where", "data"],
  PlaylistUpdateManyWithWhereWithoutOwnerInput: ["where", "data"],
  PlaylistScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "ownerId", "imagesId"],
  PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  PlaylistOnFollowerScalarWhereInput: ["AND", "OR", "NOT", "playlistId", "userId"],
  ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput: ["where", "update", "create"],
  ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput: ["where", "data"],
  ArtistOnFollowingUpdateManyWithWhereWithoutUserInput: ["where", "data"],
  ArtistOnFollowingScalarWhereInput: ["AND", "OR", "NOT", "artistId", "userId"],
  ArtistInGenresCreateWithoutArtistInput: ["Tag"],
  ArtistInGenresCreateOrConnectWithoutArtistInput: ["where", "create"],
  ArtistInGenresCreateManyArtistInputEnvelope: ["data", "skipDuplicates"],
  TrackProduceByArtistCreateWithoutArtistsInput: ["Track"],
  TrackProduceByArtistCreateOrConnectWithoutArtistsInput: ["where", "create"],
  TrackProduceByArtistCreateManyArtistsInputEnvelope: ["data", "skipDuplicates"],
  AlbumProduceByArtistCreateWithoutArtistInput: ["Album"],
  AlbumProduceByArtistCreateOrConnectWithoutArtistInput: ["where", "create"],
  AlbumProduceByArtistCreateManyArtistInputEnvelope: ["data", "skipDuplicates"],
  ArtistOnFollowingCreateWithoutArtistInput: ["User"],
  ArtistOnFollowingCreateOrConnectWithoutArtistInput: ["where", "create"],
  ArtistOnFollowingCreateManyArtistInputEnvelope: ["data", "skipDuplicates"],
  ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput: ["where", "update", "create"],
  ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput: ["where", "data"],
  ArtistInGenresUpdateManyWithWhereWithoutArtistInput: ["where", "data"],
  TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput: ["where", "update", "create"],
  TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput: ["where", "data"],
  TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput: ["where", "data"],
  TrackProduceByArtistScalarWhereInput: ["AND", "OR", "NOT", "trackId", "artistId"],
  AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput: ["where", "update", "create"],
  AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput: ["where", "data"],
  AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput: ["where", "data"],
  AlbumProduceByArtistScalarWhereInput: ["AND", "OR", "NOT", "albumId", "artistId"],
  ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput: ["where", "update", "create"],
  ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput: ["where", "data"],
  ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput: ["where", "data"],
  TracksAvailableMarketCreateWithoutTrackInput: ["Tag"],
  TracksAvailableMarketCreateOrConnectWithoutTrackInput: ["where", "create"],
  TracksAvailableMarketCreateManyTrackInputEnvelope: ["data", "skipDuplicates"],
  TrackProduceByArtistCreateWithoutTrackInput: ["Artists"],
  TrackProduceByArtistCreateOrConnectWithoutTrackInput: ["where", "create"],
  TrackProduceByArtistCreateManyTrackInputEnvelope: ["data", "skipDuplicates"],
  TracksOnPlaylistCreateWithoutTrackInput: ["Playlist"],
  TracksOnPlaylistCreateOrConnectWithoutTrackInput: ["where", "create"],
  TracksOnPlaylistCreateManyTrackInputEnvelope: ["data", "skipDuplicates"],
  AlbumCreateWithoutTracksInput: ["createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "availableMarkets", "Artists"],
  AlbumCreateOrConnectWithoutTracksInput: ["where", "create"],
  TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput: ["where", "update", "create"],
  TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput: ["where", "data"],
  TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput: ["where", "data"],
  TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput: ["where", "update", "create"],
  TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput: ["where", "data"],
  TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput: ["where", "data"],
  TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput: ["where", "update", "create"],
  TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput: ["where", "data"],
  TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput: ["where", "data"],
  TracksOnPlaylistScalarWhereInput: ["AND", "OR", "NOT", "playlistId", "trackId"],
  AlbumUpsertWithoutTracksInput: ["update", "create"],
  AlbumUpdateWithoutTracksInput: ["createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "availableMarkets", "Artists"],
  AlbumAvailableMarketCreateWithoutAlbumInput: ["Tag"],
  AlbumAvailableMarketCreateOrConnectWithoutAlbumInput: ["where", "create"],
  AlbumAvailableMarketCreateManyAlbumInputEnvelope: ["data", "skipDuplicates"],
  AlbumProduceByArtistCreateWithoutAlbumInput: ["Artist"],
  AlbumProduceByArtistCreateOrConnectWithoutAlbumInput: ["where", "create"],
  AlbumProduceByArtistCreateManyAlbumInputEnvelope: ["data", "skipDuplicates"],
  TrackCreateWithoutAlbumInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "availableMarkets", "Artists", "InPlaylist"],
  TrackCreateOrConnectWithoutAlbumInput: ["where", "create"],
  TrackCreateManyAlbumInputEnvelope: ["data", "skipDuplicates"],
  AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput: ["where", "update", "create"],
  AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput: ["where", "data"],
  AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput: ["where", "data"],
  AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput: ["where", "update", "create"],
  AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput: ["where", "data"],
  AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput: ["where", "data"],
  TrackUpsertWithWhereUniqueWithoutAlbumInput: ["where", "update", "create"],
  TrackUpdateWithWhereUniqueWithoutAlbumInput: ["where", "data"],
  TrackUpdateManyWithWhereWithoutAlbumInput: ["where", "data"],
  TrackScalarWhereInput: ["AND", "OR", "NOT", "id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "albumId"],
  TracksOnPlaylistCreateWithoutPlaylistInput: ["Track"],
  TracksOnPlaylistCreateOrConnectWithoutPlaylistInput: ["where", "create"],
  TracksOnPlaylistCreateManyPlaylistInputEnvelope: ["data", "skipDuplicates"],
  UserCreateWithoutPlaylistInput: ["createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "FollowPlaylists", "FollowingArtists"],
  UserCreateOrConnectWithoutPlaylistInput: ["where", "create"],
  PlaylistOnFollowerCreateWithoutPlaylistInput: ["User"],
  PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput: ["where", "create"],
  PlaylistOnFollowerCreateManyPlaylistInputEnvelope: ["data", "skipDuplicates"],
  TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput: ["where", "update", "create"],
  TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput: ["where", "data"],
  TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput: ["where", "data"],
  UserUpsertWithoutPlaylistInput: ["update", "create"],
  UserUpdateWithoutPlaylistInput: ["createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "FollowPlaylists", "FollowingArtists"],
  PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput: ["where", "update", "create"],
  PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput: ["where", "data"],
  PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput: ["where", "data"],
  PlaylistCreateWithoutTracksInput: ["createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId", "owner", "followers"],
  PlaylistCreateOrConnectWithoutTracksInput: ["where", "create"],
  TrackCreateWithoutInPlaylistInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "availableMarkets", "Artists", "Album"],
  TrackCreateOrConnectWithoutInPlaylistInput: ["where", "create"],
  PlaylistUpsertWithoutTracksInput: ["update", "create"],
  PlaylistUpdateWithoutTracksInput: ["createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId", "owner", "followers"],
  TrackUpsertWithoutInPlaylistInput: ["update", "create"],
  TrackUpdateWithoutInPlaylistInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "availableMarkets", "Artists", "Album"],
  TagCreateWithoutTracksAvailableMarketInput: ["code", "type", "name", "AlbumAvailableMarket", "ArtistInGenres"],
  TagCreateOrConnectWithoutTracksAvailableMarketInput: ["where", "create"],
  TrackCreateWithoutAvailableMarketsInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "Artists", "InPlaylist", "Album"],
  TrackCreateOrConnectWithoutAvailableMarketsInput: ["where", "create"],
  TagUpsertWithoutTracksAvailableMarketInput: ["update", "create"],
  TagUpdateWithoutTracksAvailableMarketInput: ["code", "type", "name", "AlbumAvailableMarket", "ArtistInGenres"],
  TrackUpsertWithoutAvailableMarketsInput: ["update", "create"],
  TrackUpdateWithoutAvailableMarketsInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "Artists", "InPlaylist", "Album"],
  TrackCreateWithoutArtistsInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "availableMarkets", "InPlaylist", "Album"],
  TrackCreateOrConnectWithoutArtistsInput: ["where", "create"],
  ArtistCreateWithoutTrackProduceByArtistInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "AlbumProduceByArtist", "Followers"],
  ArtistCreateOrConnectWithoutTrackProduceByArtistInput: ["where", "create"],
  TrackUpsertWithoutArtistsInput: ["update", "create"],
  TrackUpdateWithoutArtistsInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "availableMarkets", "InPlaylist", "Album"],
  ArtistUpsertWithoutTrackProduceByArtistInput: ["update", "create"],
  ArtistUpdateWithoutTrackProduceByArtistInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "AlbumProduceByArtist", "Followers"],
  PlaylistCreateWithoutFollowersInput: ["createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId", "tracks", "owner"],
  PlaylistCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserCreateWithoutFollowPlaylistsInput: ["createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "Playlist", "FollowingArtists"],
  UserCreateOrConnectWithoutFollowPlaylistsInput: ["where", "create"],
  PlaylistUpsertWithoutFollowersInput: ["update", "create"],
  PlaylistUpdateWithoutFollowersInput: ["createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId", "tracks", "owner"],
  UserUpsertWithoutFollowPlaylistsInput: ["update", "create"],
  UserUpdateWithoutFollowPlaylistsInput: ["createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "Playlist", "FollowingArtists"],
  AlbumCreateWithoutArtistsInput: ["createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "availableMarkets", "Tracks"],
  AlbumCreateOrConnectWithoutArtistsInput: ["where", "create"],
  ArtistCreateWithoutAlbumProduceByArtistInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "TrackProduceByArtist", "Followers"],
  ArtistCreateOrConnectWithoutAlbumProduceByArtistInput: ["where", "create"],
  AlbumUpsertWithoutArtistsInput: ["update", "create"],
  AlbumUpdateWithoutArtistsInput: ["createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "availableMarkets", "Tracks"],
  ArtistUpsertWithoutAlbumProduceByArtistInput: ["update", "create"],
  ArtistUpdateWithoutAlbumProduceByArtistInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "TrackProduceByArtist", "Followers"],
  AlbumCreateWithoutAvailableMarketsInput: ["createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "Artists", "Tracks"],
  AlbumCreateOrConnectWithoutAvailableMarketsInput: ["where", "create"],
  TagCreateWithoutAlbumAvailableMarketInput: ["code", "type", "name", "TracksAvailableMarket", "ArtistInGenres"],
  TagCreateOrConnectWithoutAlbumAvailableMarketInput: ["where", "create"],
  AlbumUpsertWithoutAvailableMarketsInput: ["update", "create"],
  AlbumUpdateWithoutAvailableMarketsInput: ["createdAt", "updatedAt", "uid", "albumType", "totalTracks", "name", "releaseDate", "releaseDatePrecision", "albumGroup", "copyrights", "imageUrl", "Artists", "Tracks"],
  TagUpsertWithoutAlbumAvailableMarketInput: ["update", "create"],
  TagUpdateWithoutAlbumAvailableMarketInput: ["code", "type", "name", "TracksAvailableMarket", "ArtistInGenres"],
  ArtistCreateWithoutGenresInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "TrackProduceByArtist", "AlbumProduceByArtist", "Followers"],
  ArtistCreateOrConnectWithoutGenresInput: ["where", "create"],
  TagCreateWithoutArtistInGenresInput: ["code", "type", "name", "AlbumAvailableMarket", "TracksAvailableMarket"],
  TagCreateOrConnectWithoutArtistInGenresInput: ["where", "create"],
  ArtistUpsertWithoutGenresInput: ["update", "create"],
  ArtistUpdateWithoutGenresInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "TrackProduceByArtist", "AlbumProduceByArtist", "Followers"],
  TagUpsertWithoutArtistInGenresInput: ["update", "create"],
  TagUpdateWithoutArtistInGenresInput: ["code", "type", "name", "AlbumAvailableMarket", "TracksAvailableMarket"],
  ArtistCreateWithoutFollowersInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "TrackProduceByArtist", "AlbumProduceByArtist"],
  ArtistCreateOrConnectWithoutFollowersInput: ["where", "create"],
  UserCreateWithoutFollowingArtistsInput: ["createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "Playlist", "FollowPlaylists"],
  UserCreateOrConnectWithoutFollowingArtistsInput: ["where", "create"],
  ArtistUpsertWithoutFollowersInput: ["update", "create"],
  ArtistUpdateWithoutFollowersInput: ["createdAt", "updatedAt", "uid", "name", "popularity", "imageUrl", "Genres", "TrackProduceByArtist", "AlbumProduceByArtist"],
  UserUpsertWithoutFollowingArtistsInput: ["update", "create"],
  UserUpdateWithoutFollowingArtistsInput: ["createdAt", "updatedAt", "uid", "name", "email", "authType", "type", "country", "explicitContentFilterEnabled", "explicitContentFilterLocked", "imagesId", "product", "Playlist", "FollowPlaylists"],
  AlbumAvailableMarketCreateManyTagInput: ["albumId"],
  TracksAvailableMarketCreateManyTagInput: ["trackId"],
  ArtistInGenresCreateManyTagInput: ["artistId"],
  AlbumAvailableMarketUpdateWithoutTagInput: ["Album"],
  TracksAvailableMarketUpdateWithoutTagInput: ["Track"],
  ArtistInGenresUpdateWithoutTagInput: ["Artist"],
  PlaylistCreateManyOwnerInput: ["id", "createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId"],
  PlaylistOnFollowerCreateManyUserInput: ["playlistId"],
  ArtistOnFollowingCreateManyUserInput: ["artistId"],
  PlaylistUpdateWithoutOwnerInput: ["createdAt", "updatedAt", "uid", "collaborative", "description", "name", "public", "snapshotId", "primaryColor", "tracksIds", "imagesId", "tracks", "followers"],
  PlaylistOnFollowerUpdateWithoutUserInput: ["Playlist"],
  ArtistOnFollowingUpdateWithoutUserInput: ["Artist"],
  ArtistInGenresCreateManyArtistInput: ["tagId"],
  TrackProduceByArtistCreateManyArtistsInput: ["trackId"],
  AlbumProduceByArtistCreateManyArtistInput: ["albumId"],
  ArtistOnFollowingCreateManyArtistInput: ["userId"],
  ArtistInGenresUpdateWithoutArtistInput: ["Tag"],
  TrackProduceByArtistUpdateWithoutArtistsInput: ["Track"],
  AlbumProduceByArtistUpdateWithoutArtistInput: ["Album"],
  ArtistOnFollowingUpdateWithoutArtistInput: ["User"],
  TracksAvailableMarketCreateManyTrackInput: ["tagId"],
  TrackProduceByArtistCreateManyTrackInput: ["artistId"],
  TracksOnPlaylistCreateManyTrackInput: ["playlistId"],
  TracksAvailableMarketUpdateWithoutTrackInput: ["Tag"],
  TrackProduceByArtistUpdateWithoutTrackInput: ["Artists"],
  TracksOnPlaylistUpdateWithoutTrackInput: ["Playlist"],
  AlbumAvailableMarketCreateManyAlbumInput: ["tagId"],
  AlbumProduceByArtistCreateManyAlbumInput: ["artistId"],
  TrackCreateManyAlbumInput: ["id", "createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal"],
  AlbumAvailableMarketUpdateWithoutAlbumInput: ["Tag"],
  AlbumProduceByArtistUpdateWithoutAlbumInput: ["Artist"],
  TrackUpdateWithoutAlbumInput: ["createdAt", "updatedAt", "uid", "name", "discNumber", "durationMs", "explicit", "popularity", "previewUrl", "trackNumber", "isLocal", "availableMarkets", "Artists", "InPlaylist"],
  TracksOnPlaylistCreateManyPlaylistInput: ["trackId"],
  PlaylistOnFollowerCreateManyPlaylistInput: ["userId"],
  TracksOnPlaylistUpdateWithoutPlaylistInput: ["Track"],
  PlaylistOnFollowerUpdateWithoutPlaylistInput: ["User"]
};

type InputTypesNames = keyof typeof inputTypes;

type InputTypeFieldNames<TInput extends InputTypesNames> = Exclude<
  keyof typeof inputTypes[TInput]["prototype"],
  number | symbol
>;

type InputTypeFieldsConfig<
  TInput extends InputTypesNames
> = FieldsConfig<InputTypeFieldNames<TInput>>;

export type InputTypeConfig<TInput extends InputTypesNames> = {
  class?: ClassDecorator[];
  fields?: InputTypeFieldsConfig<TInput>;
};

export type InputTypesEnhanceMap = {
  [TInput in InputTypesNames]?: InputTypeConfig<TInput>;
};

export function applyInputTypesEnhanceMap(
  inputTypesEnhanceMap: InputTypesEnhanceMap,
) {
  for (const inputTypeEnhanceMapKey of Object.keys(inputTypesEnhanceMap)) {
    const inputTypeName = inputTypeEnhanceMapKey as keyof typeof inputTypesEnhanceMap;
    const typeConfig = inputTypesEnhanceMap[inputTypeName]!;
    const typeClass = inputTypes[inputTypeName];
    const typeTarget = typeClass.prototype;
    applyTypeClassEnhanceConfig(
      typeConfig,
      typeClass,
      typeTarget,
      inputsInfo[inputTypeName as keyof typeof inputsInfo],
    );
  }
}

