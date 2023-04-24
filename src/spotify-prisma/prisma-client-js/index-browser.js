
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
 * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
 */
Prisma.prismaVersion = {
  client: "4.12.0",
  engine: "659ef412370fa3b41cd7bf6e94587c1dfb7f67e7"
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

exports.Prisma.AlbumProduceByArtistScalarFieldEnum = makeEnum({
  albumId: 'albumId',
  artistId: 'artistId'
});

exports.Prisma.AlbumScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  uid: 'uid',
  albumType: 'albumType',
  totalTracks: 'totalTracks',
  name: 'name',
  releaseDate: 'releaseDate',
  releaseDatePrecision: 'releaseDatePrecision',
  albumGroup: 'albumGroup',
  copyrights: 'copyrights',
  imageUrl: 'imageUrl'
});

exports.Prisma.ArtistInGenresScalarFieldEnum = makeEnum({
  artistId: 'artistId',
  tagId: 'tagId'
});

exports.Prisma.ArtistOnFollowingScalarFieldEnum = makeEnum({
  artistId: 'artistId',
  userId: 'userId'
});

exports.Prisma.ArtistScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  uid: 'uid',
  name: 'name',
  popularity: 'popularity',
  imageUrl: 'imageUrl'
});

exports.Prisma.CategoryScalarFieldEnum = makeEnum({
  id: 'id',
  hashId: 'hashId',
  name: 'name',
  icon: 'icon'
});

exports.Prisma.PlaylistOnFollowerScalarFieldEnum = makeEnum({
  playlistId: 'playlistId',
  userId: 'userId'
});

exports.Prisma.PlaylistScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  uid: 'uid',
  collaborative: 'collaborative',
  description: 'description',
  name: 'name',
  public: 'public',
  snapshotId: 'snapshotId',
  primaryColor: 'primaryColor',
  tracksIds: 'tracksIds',
  ownerId: 'ownerId',
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

exports.Prisma.TrackProduceByArtistScalarFieldEnum = makeEnum({
  trackId: 'trackId',
  artistId: 'artistId'
});

exports.Prisma.TrackScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  uid: 'uid',
  name: 'name',
  discNumber: 'discNumber',
  durationMs: 'durationMs',
  explicit: 'explicit',
  popularity: 'popularity',
  previewUrl: 'previewUrl',
  trackNumber: 'trackNumber',
  isLocal: 'isLocal',
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

exports.Prisma.UserScalarFieldEnum = makeEnum({
  id: 'id',
  createdAt: 'createdAt',
  updatedAt: 'updatedAt',
  uid: 'uid',
  name: 'name',
  email: 'email',
  authType: 'authType',
  type: 'type',
  country: 'country',
  explicitContentFilterEnabled: 'explicitContentFilterEnabled',
  explicitContentFilterLocked: 'explicitContentFilterLocked',
  imagesId: 'imagesId',
  product: 'product'
});


exports.Prisma.ModelName = makeEnum({
  Tag: 'Tag',
  Category: 'Category',
  User: 'User',
  Artist: 'Artist',
  Track: 'Track',
  Album: 'Album',
  Playlist: 'Playlist',
  TracksOnPlaylist: 'TracksOnPlaylist',
  TracksAvailableMarket: 'TracksAvailableMarket',
  TrackProduceByArtist: 'TrackProduceByArtist',
  PlaylistOnFollower: 'PlaylistOnFollower',
  AlbumProduceByArtist: 'AlbumProduceByArtist',
  AlbumAvailableMarket: 'AlbumAvailableMarket',
  ArtistInGenres: 'ArtistInGenres',
  ArtistOnFollowing: 'ArtistOnFollowing'
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
