
Object.defineProperty(exports, "__esModule", { value: true });

const {
  Decimal,
  objectEnumValues,
  makeStrictEnum
} = require('./runtime/index-browser')


const Prisma = {}

exports.Prisma = Prisma

/**
 * Prisma Client JS version: 4.12.0
 * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a"
}

Prisma.PrismaClientKnownRequestError = () => {
  throw new Error(`PrismaClientKnownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)};
Prisma.PrismaClientUnknownRequestError = () => {
  throw new Error(`PrismaClientUnknownRequestError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientRustPanicError = () => {
  throw new Error(`PrismaClientRustPanicError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientInitializationError = () => {
  throw new Error(`PrismaClientInitializationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.PrismaClientValidationError = () => {
  throw new Error(`PrismaClientValidationError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.NotFoundError = () => {
  throw new Error(`NotFoundError is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = () => {
  throw new Error(`sqltag is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.empty = () => {
  throw new Error(`empty is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.join = () => {
  throw new Error(`join is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.raw = () => {
  throw new Error(`raw is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
)}
Prisma.validator = () => (val) => val


/**
 * Shorthand utilities for JSON filtering
 */
Prisma.DbNull = objectEnumValues.instances.DbNull
Prisma.JsonNull = objectEnumValues.instances.JsonNull
Prisma.AnyNull = objectEnumValues.instances.AnyNull

Prisma.NullTypes = {
  DbNull: objectEnumValues.classes.DbNull,
  JsonNull: objectEnumValues.classes.JsonNull,
  AnyNull: objectEnumValues.classes.AnyNull
}

/**
 * Enums
 */
// Based on
// https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275
function makeEnum(x) { return x; }

exports.Prisma.AlbumAvailableMarketScalarFieldEnum = makeEnum({
  albumId: 'albumId',
  tagId: 'tagId'
});

exports.Prisma.AlbumMetaScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  uid: 'uid',
  releaseDate: 'releaseDate',
  releaseDatePrecision: 'releaseDatePrecision',
  copyrights: 'copyrights'
});

exports.Prisma.AlbumProduceByArtistScalarFieldEnum = makeEnum({
  albumId: 'albumId',
  artistId: 'artistId'
});

exports.Prisma.AlbumScalarFieldEnum = makeEnum({
  id: 'id',
  albumType: 'albumType',
  totalTracks: 'totalTracks',
  name: 'name',
  imageUrl: 'imageUrl'
});

exports.Prisma.ArtistDataMetaScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  uid: 'uid'
});

exports.Prisma.ArtistInGenresScalarFieldEnum = makeEnum({
  artistId: 'artistId',
  tagId: 'tagId'
});

exports.Prisma.ArtistScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  popularity: 'popularity',
  imageUrl: 'imageUrl'
});

exports.Prisma.PlaylistMetaScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  uid: 'uid'
});

exports.Prisma.PlaylistScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  description: 'description',
  public: 'public',
  primaryColor: 'primaryColor',
  imagesId: 'imagesId'
});

exports.Prisma.QueryMode = makeEnum({
  default: 'default',
  insensitive: 'insensitive'
});

exports.Prisma.SortOrder = makeEnum({
  asc: 'asc',
  desc: 'desc'
});

exports.Prisma.TagScalarFieldEnum = makeEnum({
  id: 'id',
  code: 'code',
  type: 'type',
  name: 'name'
});

exports.Prisma.TrackMetaScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  uid: 'uid',
  durationMs: 'durationMs'
});

exports.Prisma.TrackProduceByArtistScalarFieldEnum = makeEnum({
  trackId: 'trackId',
  artistId: 'artistId'
});

exports.Prisma.TrackScalarFieldEnum = makeEnum({
  id: 'id',
  name: 'name',
  discNumber: 'discNumber',
  popularity: 'popularity',
  previewUrl: 'previewUrl',
  trackNumber: 'trackNumber',
  albumId: 'albumId'
});

exports.Prisma.TracksAvailableMarketScalarFieldEnum = makeEnum({
  tagId: 'tagId',
  trackId: 'trackId'
});

exports.Prisma.TracksOnPlaylistScalarFieldEnum = makeEnum({
  playlistId: 'playlistId',
  trackId: 'trackId'
});

exports.Prisma.TransactionIsolationLevel = makeStrictEnum({
  ReadUncommitted: 'ReadUncommitted',
  ReadCommitted: 'ReadCommitted',
  RepeatableRead: 'RepeatableRead',
  Serializable: 'Serializable'
});


exports.Prisma.ModelName = makeEnum({
  Tag: 'Tag',
  Artist: 'Artist',
  ArtistDataMeta: 'ArtistDataMeta',
  Track: 'Track',
  TrackMeta: 'TrackMeta',
  Album: 'Album',
  AlbumMeta: 'AlbumMeta',
  Playlist: 'Playlist',
  PlaylistMeta: 'PlaylistMeta',
  TracksOnPlaylist: 'TracksOnPlaylist',
  TracksAvailableMarket: 'TracksAvailableMarket',
  TrackProduceByArtist: 'TrackProduceByArtist',
  AlbumProduceByArtist: 'AlbumProduceByArtist',
  AlbumAvailableMarket: 'AlbumAvailableMarket',
  ArtistInGenres: 'ArtistInGenres'
});

/**
 * Create the Client
 */
class PrismaClient {
  constructor() {
    throw new Error(
      `PrismaClient is unable to be run in the browser.
In case this error is unexpected for you, please report it in https://github.com/prisma/prisma/issues`,
    )
  }
}
exports.PrismaClient = PrismaClient

Object.assign(exports, Prisma)
