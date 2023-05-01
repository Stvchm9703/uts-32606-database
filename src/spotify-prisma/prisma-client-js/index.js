
Object.defineProperty(exports, "__esModule", { value: true });

const {
  PrismaClientKnownRequestError,
  PrismaClientUnknownRequestError,
  PrismaClientRustPanicError,
  PrismaClientInitializationError,
  PrismaClientValidationError,
  NotFoundError,
  decompressFromBase64,
  getPrismaClient,
  sqltag,
  empty,
  join,
  raw,
  Decimal,
  Debug,
  objectEnumValues,
  makeStrictEnum,
  Extensions,
  findSync
} = require('./runtime/library')


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

Prisma.PrismaClientKnownRequestError = PrismaClientKnownRequestError;
Prisma.PrismaClientUnknownRequestError = PrismaClientUnknownRequestError
Prisma.PrismaClientRustPanicError = PrismaClientRustPanicError
Prisma.PrismaClientInitializationError = PrismaClientInitializationError
Prisma.PrismaClientValidationError = PrismaClientValidationError
Prisma.NotFoundError = NotFoundError
Prisma.Decimal = Decimal

/**
 * Re-export of sql-template-tag
 */
Prisma.sql = sqltag
Prisma.empty = empty
Prisma.join = join
Prisma.raw = raw
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


  const path = require('path')

const fs = require('fs')

// some frameworks or bundlers replace or totally remove __dirname
const hasDirname = typeof __dirname !== 'undefined' && __dirname !== '/'

// will work in most cases, ie. if the client has not been bundled
const regularDirname = hasDirname && fs.existsSync(path.join(__dirname, 'schema.prisma')) && __dirname

// if the client has been bundled, we need to look for the folders
const foundDirname = !regularDirname && findSync(process.cwd(), [
    "src/spotify-prisma/prisma-client-js",
    "spotify-prisma/prisma-client-js",
], ['d'], ['d'], 1)[0]

const dirname = regularDirname || foundDirname || __dirname

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

const dmmfString = "{\"datamodel\":{\"enums\":[],\"models\":[{\"name\":\"Tag\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"code\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"type\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AlbumAvailableMarket\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AlbumAvailableMarket\",\"relationName\":\"AlbumAvailableMarketToTag\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TracksAvailableMarket\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TracksAvailableMarket\",\"relationName\":\"TagToTracksAvailableMarket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"ArtistInGenres\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtistInGenres\",\"relationName\":\"ArtistInGenresToTag\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Artist\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"popularity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Genres\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"ArtistInGenres\",\"relationName\":\"ArtistToArtistInGenres\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"TrackProduceByArtist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrackProduceByArtist\",\"relationName\":\"ArtistToTrackProduceByArtist\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"AlbumProduceByArtist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AlbumProduceByArtist\",\"relationName\":\"AlbumProduceByArtistToArtist\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ArtistDataMeta\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Track\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"discNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"popularity\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"previewUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trackNumber\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"availableMarkets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TracksAvailableMarket\",\"relationName\":\"TrackToTracksAvailableMarket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artists\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TrackProduceByArtist\",\"relationName\":\"TrackToTrackProduceByArtist\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"InPlaylist\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TracksOnPlaylist\",\"relationName\":\"TrackToTracksOnPlaylist\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Album\",\"kind\":\"object\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"AlbumToTrack\",\"relationFromFields\":[\"albumId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"albumId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TrackMeta\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":true,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"durationMs\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Album\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"albumType\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"totalTracks\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imageUrl\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"availableMarkets\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AlbumAvailableMarket\",\"relationName\":\"AlbumToAlbumAvailableMarket\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artists\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"AlbumProduceByArtist\",\"relationName\":\"AlbumToAlbumProduceByArtist\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tracks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Track\",\"relationName\":\"AlbumToTrack\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"AlbumMeta\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releaseDate\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"releaseDatePrecision\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"copyrights\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"Playlist\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"name\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"description\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"public\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Boolean\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"primaryColor\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"imagesId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tracks\",\"kind\":\"object\",\"isList\":true,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"TracksOnPlaylist\",\"relationName\":\"PlaylistToTracksOnPlaylist\",\"relationFromFields\":[],\"relationToFields\":[],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"PlaylistMeta\",\"dbName\":null,\"fields\":[{\"name\":\"id\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":true,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"Int\",\"default\":{\"name\":\"autoincrement\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"createdAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":true,\"type\":\"DateTime\",\"default\":{\"name\":\"now\",\"args\":[]},\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"updatedAt\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"DateTime\",\"isGenerated\":false,\"isUpdatedAt\":true},{\"name\":\"uid\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":false,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"String\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":null,\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TracksOnPlaylist\",\"dbName\":null,\"fields\":[{\"name\":\"playlistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Playlist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Playlist\",\"relationName\":\"PlaylistToTracksOnPlaylist\",\"relationFromFields\":[\"playlistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trackId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Track\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Track\",\"relationName\":\"TrackToTracksOnPlaylist\",\"relationFromFields\":[\"trackId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"playlistId\",\"trackId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TracksAvailableMarket\",\"dbName\":null,\"fields\":[{\"name\":\"tagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tag\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tag\",\"relationName\":\"TagToTracksAvailableMarket\",\"relationFromFields\":[\"tagId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"trackId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Track\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Track\",\"relationName\":\"TrackToTracksAvailableMarket\",\"relationFromFields\":[\"trackId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"trackId\",\"tagId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"TrackProduceByArtist\",\"dbName\":null,\"fields\":[{\"name\":\"trackId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Track\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Track\",\"relationName\":\"TrackToTrackProduceByArtist\",\"relationFromFields\":[\"trackId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artists\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artist\",\"relationName\":\"ArtistToTrackProduceByArtist\",\"relationFromFields\":[\"artistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"trackId\",\"artistId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"AlbumProduceByArtist\",\"dbName\":null,\"fields\":[{\"name\":\"albumId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Album\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"AlbumToAlbumProduceByArtist\",\"relationFromFields\":[\"albumId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Artist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artist\",\"relationName\":\"AlbumProduceByArtistToArtist\",\"relationFromFields\":[\"artistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"albumId\",\"artistId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"AlbumAvailableMarket\",\"dbName\":null,\"fields\":[{\"name\":\"albumId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Album\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Album\",\"relationName\":\"AlbumToAlbumAvailableMarket\",\"relationFromFields\":[\"albumId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tag\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tag\",\"relationName\":\"AlbumAvailableMarketToTag\",\"relationFromFields\":[\"tagId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"albumId\",\"tagId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false},{\"name\":\"ArtistInGenres\",\"dbName\":null,\"fields\":[{\"name\":\"Artist\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Artist\",\"relationName\":\"ArtistToArtistInGenres\",\"relationFromFields\":[\"artistId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"artistId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"Tag\",\"kind\":\"object\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":false,\"hasDefaultValue\":false,\"type\":\"Tag\",\"relationName\":\"ArtistInGenresToTag\",\"relationFromFields\":[\"tagId\"],\"relationToFields\":[\"id\"],\"isGenerated\":false,\"isUpdatedAt\":false},{\"name\":\"tagId\",\"kind\":\"scalar\",\"isList\":false,\"isRequired\":true,\"isUnique\":false,\"isId\":false,\"isReadOnly\":true,\"hasDefaultValue\":false,\"type\":\"Int\",\"isGenerated\":false,\"isUpdatedAt\":false}],\"primaryKey\":{\"name\":null,\"fields\":[\"artistId\",\"tagId\"]},\"uniqueFields\":[],\"uniqueIndexes\":[],\"isGenerated\":false}],\"types\":[]},\"mappings\":{\"modelOperations\":[{\"model\":\"Tag\",\"plural\":\"tags\",\"findUnique\":\"findUniqueTag\",\"findUniqueOrThrow\":\"findUniqueTagOrThrow\",\"findFirst\":\"findFirstTag\",\"findFirstOrThrow\":\"findFirstTagOrThrow\",\"findMany\":\"findManyTag\",\"create\":\"createOneTag\",\"createMany\":\"createManyTag\",\"delete\":\"deleteOneTag\",\"update\":\"updateOneTag\",\"deleteMany\":\"deleteManyTag\",\"updateMany\":\"updateManyTag\",\"upsert\":\"upsertOneTag\",\"aggregate\":\"aggregateTag\",\"groupBy\":\"groupByTag\"},{\"model\":\"Artist\",\"plural\":\"artists\",\"findUnique\":\"findUniqueArtist\",\"findUniqueOrThrow\":\"findUniqueArtistOrThrow\",\"findFirst\":\"findFirstArtist\",\"findFirstOrThrow\":\"findFirstArtistOrThrow\",\"findMany\":\"findManyArtist\",\"create\":\"createOneArtist\",\"createMany\":\"createManyArtist\",\"delete\":\"deleteOneArtist\",\"update\":\"updateOneArtist\",\"deleteMany\":\"deleteManyArtist\",\"updateMany\":\"updateManyArtist\",\"upsert\":\"upsertOneArtist\",\"aggregate\":\"aggregateArtist\",\"groupBy\":\"groupByArtist\"},{\"model\":\"ArtistDataMeta\",\"plural\":\"artistDataMetas\",\"findUnique\":\"findUniqueArtistDataMeta\",\"findUniqueOrThrow\":\"findUniqueArtistDataMetaOrThrow\",\"findFirst\":\"findFirstArtistDataMeta\",\"findFirstOrThrow\":\"findFirstArtistDataMetaOrThrow\",\"findMany\":\"findManyArtistDataMeta\",\"create\":\"createOneArtistDataMeta\",\"createMany\":\"createManyArtistDataMeta\",\"delete\":\"deleteOneArtistDataMeta\",\"update\":\"updateOneArtistDataMeta\",\"deleteMany\":\"deleteManyArtistDataMeta\",\"updateMany\":\"updateManyArtistDataMeta\",\"upsert\":\"upsertOneArtistDataMeta\",\"aggregate\":\"aggregateArtistDataMeta\",\"groupBy\":\"groupByArtistDataMeta\"},{\"model\":\"Track\",\"plural\":\"tracks\",\"findUnique\":\"findUniqueTrack\",\"findUniqueOrThrow\":\"findUniqueTrackOrThrow\",\"findFirst\":\"findFirstTrack\",\"findFirstOrThrow\":\"findFirstTrackOrThrow\",\"findMany\":\"findManyTrack\",\"create\":\"createOneTrack\",\"createMany\":\"createManyTrack\",\"delete\":\"deleteOneTrack\",\"update\":\"updateOneTrack\",\"deleteMany\":\"deleteManyTrack\",\"updateMany\":\"updateManyTrack\",\"upsert\":\"upsertOneTrack\",\"aggregate\":\"aggregateTrack\",\"groupBy\":\"groupByTrack\"},{\"model\":\"TrackMeta\",\"plural\":\"trackMetas\",\"findUnique\":\"findUniqueTrackMeta\",\"findUniqueOrThrow\":\"findUniqueTrackMetaOrThrow\",\"findFirst\":\"findFirstTrackMeta\",\"findFirstOrThrow\":\"findFirstTrackMetaOrThrow\",\"findMany\":\"findManyTrackMeta\",\"create\":\"createOneTrackMeta\",\"createMany\":\"createManyTrackMeta\",\"delete\":\"deleteOneTrackMeta\",\"update\":\"updateOneTrackMeta\",\"deleteMany\":\"deleteManyTrackMeta\",\"updateMany\":\"updateManyTrackMeta\",\"upsert\":\"upsertOneTrackMeta\",\"aggregate\":\"aggregateTrackMeta\",\"groupBy\":\"groupByTrackMeta\"},{\"model\":\"Album\",\"plural\":\"albums\",\"findUnique\":\"findUniqueAlbum\",\"findUniqueOrThrow\":\"findUniqueAlbumOrThrow\",\"findFirst\":\"findFirstAlbum\",\"findFirstOrThrow\":\"findFirstAlbumOrThrow\",\"findMany\":\"findManyAlbum\",\"create\":\"createOneAlbum\",\"createMany\":\"createManyAlbum\",\"delete\":\"deleteOneAlbum\",\"update\":\"updateOneAlbum\",\"deleteMany\":\"deleteManyAlbum\",\"updateMany\":\"updateManyAlbum\",\"upsert\":\"upsertOneAlbum\",\"aggregate\":\"aggregateAlbum\",\"groupBy\":\"groupByAlbum\"},{\"model\":\"AlbumMeta\",\"plural\":\"albumMetas\",\"findUnique\":\"findUniqueAlbumMeta\",\"findUniqueOrThrow\":\"findUniqueAlbumMetaOrThrow\",\"findFirst\":\"findFirstAlbumMeta\",\"findFirstOrThrow\":\"findFirstAlbumMetaOrThrow\",\"findMany\":\"findManyAlbumMeta\",\"create\":\"createOneAlbumMeta\",\"createMany\":\"createManyAlbumMeta\",\"delete\":\"deleteOneAlbumMeta\",\"update\":\"updateOneAlbumMeta\",\"deleteMany\":\"deleteManyAlbumMeta\",\"updateMany\":\"updateManyAlbumMeta\",\"upsert\":\"upsertOneAlbumMeta\",\"aggregate\":\"aggregateAlbumMeta\",\"groupBy\":\"groupByAlbumMeta\"},{\"model\":\"Playlist\",\"plural\":\"playlists\",\"findUnique\":\"findUniquePlaylist\",\"findUniqueOrThrow\":\"findUniquePlaylistOrThrow\",\"findFirst\":\"findFirstPlaylist\",\"findFirstOrThrow\":\"findFirstPlaylistOrThrow\",\"findMany\":\"findManyPlaylist\",\"create\":\"createOnePlaylist\",\"createMany\":\"createManyPlaylist\",\"delete\":\"deleteOnePlaylist\",\"update\":\"updateOnePlaylist\",\"deleteMany\":\"deleteManyPlaylist\",\"updateMany\":\"updateManyPlaylist\",\"upsert\":\"upsertOnePlaylist\",\"aggregate\":\"aggregatePlaylist\",\"groupBy\":\"groupByPlaylist\"},{\"model\":\"PlaylistMeta\",\"plural\":\"playlistMetas\",\"findUnique\":\"findUniquePlaylistMeta\",\"findUniqueOrThrow\":\"findUniquePlaylistMetaOrThrow\",\"findFirst\":\"findFirstPlaylistMeta\",\"findFirstOrThrow\":\"findFirstPlaylistMetaOrThrow\",\"findMany\":\"findManyPlaylistMeta\",\"create\":\"createOnePlaylistMeta\",\"createMany\":\"createManyPlaylistMeta\",\"delete\":\"deleteOnePlaylistMeta\",\"update\":\"updateOnePlaylistMeta\",\"deleteMany\":\"deleteManyPlaylistMeta\",\"updateMany\":\"updateManyPlaylistMeta\",\"upsert\":\"upsertOnePlaylistMeta\",\"aggregate\":\"aggregatePlaylistMeta\",\"groupBy\":\"groupByPlaylistMeta\"},{\"model\":\"TracksOnPlaylist\",\"plural\":\"tracksOnPlaylists\",\"findUnique\":\"findUniqueTracksOnPlaylist\",\"findUniqueOrThrow\":\"findUniqueTracksOnPlaylistOrThrow\",\"findFirst\":\"findFirstTracksOnPlaylist\",\"findFirstOrThrow\":\"findFirstTracksOnPlaylistOrThrow\",\"findMany\":\"findManyTracksOnPlaylist\",\"create\":\"createOneTracksOnPlaylist\",\"createMany\":\"createManyTracksOnPlaylist\",\"delete\":\"deleteOneTracksOnPlaylist\",\"update\":\"updateOneTracksOnPlaylist\",\"deleteMany\":\"deleteManyTracksOnPlaylist\",\"updateMany\":\"updateManyTracksOnPlaylist\",\"upsert\":\"upsertOneTracksOnPlaylist\",\"aggregate\":\"aggregateTracksOnPlaylist\",\"groupBy\":\"groupByTracksOnPlaylist\"},{\"model\":\"TracksAvailableMarket\",\"plural\":\"tracksAvailableMarkets\",\"findUnique\":\"findUniqueTracksAvailableMarket\",\"findUniqueOrThrow\":\"findUniqueTracksAvailableMarketOrThrow\",\"findFirst\":\"findFirstTracksAvailableMarket\",\"findFirstOrThrow\":\"findFirstTracksAvailableMarketOrThrow\",\"findMany\":\"findManyTracksAvailableMarket\",\"create\":\"createOneTracksAvailableMarket\",\"createMany\":\"createManyTracksAvailableMarket\",\"delete\":\"deleteOneTracksAvailableMarket\",\"update\":\"updateOneTracksAvailableMarket\",\"deleteMany\":\"deleteManyTracksAvailableMarket\",\"updateMany\":\"updateManyTracksAvailableMarket\",\"upsert\":\"upsertOneTracksAvailableMarket\",\"aggregate\":\"aggregateTracksAvailableMarket\",\"groupBy\":\"groupByTracksAvailableMarket\"},{\"model\":\"TrackProduceByArtist\",\"plural\":\"trackProduceByArtists\",\"findUnique\":\"findUniqueTrackProduceByArtist\",\"findUniqueOrThrow\":\"findUniqueTrackProduceByArtistOrThrow\",\"findFirst\":\"findFirstTrackProduceByArtist\",\"findFirstOrThrow\":\"findFirstTrackProduceByArtistOrThrow\",\"findMany\":\"findManyTrackProduceByArtist\",\"create\":\"createOneTrackProduceByArtist\",\"createMany\":\"createManyTrackProduceByArtist\",\"delete\":\"deleteOneTrackProduceByArtist\",\"update\":\"updateOneTrackProduceByArtist\",\"deleteMany\":\"deleteManyTrackProduceByArtist\",\"updateMany\":\"updateManyTrackProduceByArtist\",\"upsert\":\"upsertOneTrackProduceByArtist\",\"aggregate\":\"aggregateTrackProduceByArtist\",\"groupBy\":\"groupByTrackProduceByArtist\"},{\"model\":\"AlbumProduceByArtist\",\"plural\":\"albumProduceByArtists\",\"findUnique\":\"findUniqueAlbumProduceByArtist\",\"findUniqueOrThrow\":\"findUniqueAlbumProduceByArtistOrThrow\",\"findFirst\":\"findFirstAlbumProduceByArtist\",\"findFirstOrThrow\":\"findFirstAlbumProduceByArtistOrThrow\",\"findMany\":\"findManyAlbumProduceByArtist\",\"create\":\"createOneAlbumProduceByArtist\",\"createMany\":\"createManyAlbumProduceByArtist\",\"delete\":\"deleteOneAlbumProduceByArtist\",\"update\":\"updateOneAlbumProduceByArtist\",\"deleteMany\":\"deleteManyAlbumProduceByArtist\",\"updateMany\":\"updateManyAlbumProduceByArtist\",\"upsert\":\"upsertOneAlbumProduceByArtist\",\"aggregate\":\"aggregateAlbumProduceByArtist\",\"groupBy\":\"groupByAlbumProduceByArtist\"},{\"model\":\"AlbumAvailableMarket\",\"plural\":\"albumAvailableMarkets\",\"findUnique\":\"findUniqueAlbumAvailableMarket\",\"findUniqueOrThrow\":\"findUniqueAlbumAvailableMarketOrThrow\",\"findFirst\":\"findFirstAlbumAvailableMarket\",\"findFirstOrThrow\":\"findFirstAlbumAvailableMarketOrThrow\",\"findMany\":\"findManyAlbumAvailableMarket\",\"create\":\"createOneAlbumAvailableMarket\",\"createMany\":\"createManyAlbumAvailableMarket\",\"delete\":\"deleteOneAlbumAvailableMarket\",\"update\":\"updateOneAlbumAvailableMarket\",\"deleteMany\":\"deleteManyAlbumAvailableMarket\",\"updateMany\":\"updateManyAlbumAvailableMarket\",\"upsert\":\"upsertOneAlbumAvailableMarket\",\"aggregate\":\"aggregateAlbumAvailableMarket\",\"groupBy\":\"groupByAlbumAvailableMarket\"},{\"model\":\"ArtistInGenres\",\"plural\":\"artistInGenres\",\"findUnique\":\"findUniqueArtistInGenres\",\"findUniqueOrThrow\":\"findUniqueArtistInGenresOrThrow\",\"findFirst\":\"findFirstArtistInGenres\",\"findFirstOrThrow\":\"findFirstArtistInGenresOrThrow\",\"findMany\":\"findManyArtistInGenres\",\"create\":\"createOneArtistInGenres\",\"createMany\":\"createManyArtistInGenres\",\"delete\":\"deleteOneArtistInGenres\",\"update\":\"updateOneArtistInGenres\",\"deleteMany\":\"deleteManyArtistInGenres\",\"updateMany\":\"updateManyArtistInGenres\",\"upsert\":\"upsertOneArtistInGenres\",\"aggregate\":\"aggregateArtistInGenres\",\"groupBy\":\"groupByArtistInGenres\"}],\"otherOperations\":{\"read\":[],\"write\":[\"executeRaw\",\"queryRaw\"]}}}"
const dmmf = JSON.parse(dmmfString)
exports.Prisma.dmmf = JSON.parse(dmmfString)

/**
 * Create the Client
 */
const config = {
  "generator": {
    "name": "client",
    "provider": {
      "fromEnvVar": null,
      "value": "prisma-client-js"
    },
    "output": {
      "value": "/Users/stephencheng/git_src/UTS_project/uts-32606-database/src/spotify-prisma/prisma-client-js",
      "fromEnvVar": null
    },
    "config": {
      "engineType": "library"
    },
    "binaryTargets": [
      {
        "fromEnvVar": null,
        "value": "darwin"
      }
    ],
    "previewFeatures": [
      "postgresqlExtensions",
      "deno",
      "views"
    ],
    "isCustomOutput": true
  },
  "relativeEnvPaths": {
    "rootEnvPath": "../../../.env",
    "schemaEnvPath": "../../../.env"
  },
  "relativePath": "../../../prisma",
  "clientVersion": "4.12.0",
  "engineVersion": "1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a",
  "datasourceNames": [
    "db"
  ],
  "activeProvider": "postgresql",
  "dataProxy": false
}
config.dirname = dirname
config.document = dmmf




const { warnEnvConflicts } = require('./runtime/library')

warnEnvConflicts({
    rootEnvPath: config.relativeEnvPaths.rootEnvPath && path.resolve(dirname, config.relativeEnvPaths.rootEnvPath),
    schemaEnvPath: config.relativeEnvPaths.schemaEnvPath && path.resolve(dirname, config.relativeEnvPaths.schemaEnvPath)
})


const PrismaClient = getPrismaClient(config)
exports.PrismaClient = PrismaClient
Object.assign(exports, Prisma)

path.join(__dirname, "libquery_engine-darwin.dylib.node");
path.join(process.cwd(), "src/spotify-prisma/prisma-client-js/libquery_engine-darwin.dylib.node")
path.join(__dirname, "schema.prisma");
path.join(process.cwd(), "src/spotify-prisma/prisma-client-js/schema.prisma")
