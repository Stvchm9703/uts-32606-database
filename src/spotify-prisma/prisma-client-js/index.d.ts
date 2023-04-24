
/**
 * Client
**/

import * as runtime from './runtime/library';
type UnwrapPromise<P extends any> = P extends Promise<infer R> ? R : P
type UnwrapTuple<Tuple extends readonly unknown[]> = {
  [K in keyof Tuple]: K extends `${number}` ? Tuple[K] extends Prisma.PrismaPromise<infer X> ? X : UnwrapPromise<Tuple[K]> : UnwrapPromise<Tuple[K]>
};

export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>


/**
 * Model Tag
 * 
 */
export type Tag = {
  id: number
  code: string
  type: string
  name: string
}

/**
 * Model Category
 * 
 */
export type Category = {
  id: number
  hashId: string
  name: string
  icon: string
}

/**
 * Model User
 * 
 */
export type User = {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string | null
  name: string
  email: string | null
  authType: string
  type: string
  country: string
  explicitContentFilterEnabled: boolean
  explicitContentFilterLocked: boolean
  imagesId: string | null
  product: string
}

/**
 * Model Artist
 * 
 */
export type Artist = {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string
  name: string
  popularity: number | null
  imageUrl: string | null
}

/**
 * Model Track
 * 
 */
export type Track = {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string
  name: string
  discNumber: number
  durationMs: number
  explicit: boolean
  popularity: number | null
  previewUrl: string | null
  trackNumber: number
  isLocal: boolean
  albumId: number | null
}

/**
 * Model Album
 * 
 */
export type Album = {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string
  albumType: string
  totalTracks: number
  name: string
  releaseDate: Date
  releaseDatePrecision: string
  albumGroup: string
  copyrights: string | null
  imageUrl: string | null
}

/**
 * Model Playlist
 * 
 */
export type Playlist = {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string | null
  collaborative: boolean
  description: string
  name: string
  public: boolean
  snapshotId: string | null
  primaryColor: string | null
  tracksIds: number
  ownerId: number
  imagesId: string | null
}

/**
 * Model TracksOnPlaylist
 * 
 */
export type TracksOnPlaylist = {
  playlistId: number
  trackId: number
}

/**
 * Model TracksAvailableMarket
 * 
 */
export type TracksAvailableMarket = {
  tagId: number
  trackId: number
}

/**
 * Model TrackProduceByArtist
 * 
 */
export type TrackProduceByArtist = {
  trackId: number
  artistId: number
}

/**
 * Model PlaylistOnFollower
 * 
 */
export type PlaylistOnFollower = {
  playlistId: number
  userId: number
}

/**
 * Model AlbumProduceByArtist
 * 
 */
export type AlbumProduceByArtist = {
  albumId: number
  artistId: number
}

/**
 * Model AlbumAvailableMarket
 * 
 */
export type AlbumAvailableMarket = {
  albumId: number
  tagId: number
}

/**
 * Model ArtistInGenres
 * 
 */
export type ArtistInGenres = {
  artistId: number
  tagId: number
}

/**
 * Model ArtistOnFollowing
 * 
 */
export type ArtistOnFollowing = {
  artistId: number
  userId: number
}


/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Tags
 * const tags = await prisma.tag.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  GlobalReject extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined = 'rejectOnNotFound' extends keyof T
    ? T['rejectOnNotFound']
    : false
      > {
    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Tags
   * const tags = await prisma.tag.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends (U | 'beforeExit')>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : V extends 'beforeExit' ? () => Promise<void> : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): Promise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): Promise<void>;

  /**
   * Add a middleware
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<this, "$connect" | "$disconnect" | "$on" | "$transaction" | "$use">) => Promise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): Promise<R>

      /**
   * `prisma.tag`: Exposes CRUD operations for the **Tag** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tags
    * const tags = await prisma.tag.findMany()
    * ```
    */
  get tag(): Prisma.TagDelegate<GlobalReject>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<GlobalReject>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<GlobalReject>;

  /**
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<GlobalReject>;

  /**
   * `prisma.track`: Exposes CRUD operations for the **Track** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Tracks
    * const tracks = await prisma.track.findMany()
    * ```
    */
  get track(): Prisma.TrackDelegate<GlobalReject>;

  /**
   * `prisma.album`: Exposes CRUD operations for the **Album** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Albums
    * const albums = await prisma.album.findMany()
    * ```
    */
  get album(): Prisma.AlbumDelegate<GlobalReject>;

  /**
   * `prisma.playlist`: Exposes CRUD operations for the **Playlist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Playlists
    * const playlists = await prisma.playlist.findMany()
    * ```
    */
  get playlist(): Prisma.PlaylistDelegate<GlobalReject>;

  /**
   * `prisma.tracksOnPlaylist`: Exposes CRUD operations for the **TracksOnPlaylist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TracksOnPlaylists
    * const tracksOnPlaylists = await prisma.tracksOnPlaylist.findMany()
    * ```
    */
  get tracksOnPlaylist(): Prisma.TracksOnPlaylistDelegate<GlobalReject>;

  /**
   * `prisma.tracksAvailableMarket`: Exposes CRUD operations for the **TracksAvailableMarket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TracksAvailableMarkets
    * const tracksAvailableMarkets = await prisma.tracksAvailableMarket.findMany()
    * ```
    */
  get tracksAvailableMarket(): Prisma.TracksAvailableMarketDelegate<GlobalReject>;

  /**
   * `prisma.trackProduceByArtist`: Exposes CRUD operations for the **TrackProduceByArtist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackProduceByArtists
    * const trackProduceByArtists = await prisma.trackProduceByArtist.findMany()
    * ```
    */
  get trackProduceByArtist(): Prisma.TrackProduceByArtistDelegate<GlobalReject>;

  /**
   * `prisma.playlistOnFollower`: Exposes CRUD operations for the **PlaylistOnFollower** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistOnFollowers
    * const playlistOnFollowers = await prisma.playlistOnFollower.findMany()
    * ```
    */
  get playlistOnFollower(): Prisma.PlaylistOnFollowerDelegate<GlobalReject>;

  /**
   * `prisma.albumProduceByArtist`: Exposes CRUD operations for the **AlbumProduceByArtist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumProduceByArtists
    * const albumProduceByArtists = await prisma.albumProduceByArtist.findMany()
    * ```
    */
  get albumProduceByArtist(): Prisma.AlbumProduceByArtistDelegate<GlobalReject>;

  /**
   * `prisma.albumAvailableMarket`: Exposes CRUD operations for the **AlbumAvailableMarket** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumAvailableMarkets
    * const albumAvailableMarkets = await prisma.albumAvailableMarket.findMany()
    * ```
    */
  get albumAvailableMarket(): Prisma.AlbumAvailableMarketDelegate<GlobalReject>;

  /**
   * `prisma.artistInGenres`: Exposes CRUD operations for the **ArtistInGenres** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistInGenres
    * const artistInGenres = await prisma.artistInGenres.findMany()
    * ```
    */
  get artistInGenres(): Prisma.ArtistInGenresDelegate<GlobalReject>;

  /**
   * `prisma.artistOnFollowing`: Exposes CRUD operations for the **ArtistOnFollowing** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistOnFollowings
    * const artistOnFollowings = await prisma.artistOnFollowing.findMany()
    * ```
    */
  get artistOnFollowing(): Prisma.ArtistOnFollowingDelegate<GlobalReject>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = runtime.Types.Public.PrismaPromise<T>

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError
  export import NotFoundError = runtime.NotFoundError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql

  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket


  /**
   * Prisma Client JS version: 4.12.0
   * Query Engine version: 659ef412370fa3b41cd7bf6e94587c1dfb7f67e7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }
  type HasSelect = {
    select: any
  }
  type HasInclude = {
    include: any
  }
  type CheckSelect<T, S, U> = T extends SelectAndInclude
    ? 'Please either choose `select` or `include`'
    : T extends HasSelect
    ? U
    : T extends HasInclude
    ? U
    : S

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => Promise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;

  export function validator<V>(): <S>(select: runtime.Types.Utils.LegacyExact<S, V>) => S;

  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but with an array
   */
  type PickArray<T, K extends Array<keyof T>> = Prisma__Pick<T, TupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
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
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  export type DefaultPrismaClient = PrismaClient
  export type RejectOnNotFound = boolean | ((error: Error) => Error)
  export type RejectPerModel = { [P in ModelName]?: RejectOnNotFound }
  export type RejectPerOperation =  { [P in "findUnique" | "findFirst"]?: RejectPerModel | RejectOnNotFound } 
  type IsReject<T> = T extends true ? True : T extends (err: Error) => Error ? True : False
  export type HasReject<
    GlobalRejectSettings extends Prisma.PrismaClientOptions['rejectOnNotFound'],
    LocalRejectSettings,
    Action extends PrismaAction,
    Model extends ModelName
  > = LocalRejectSettings extends RejectOnNotFound
    ? IsReject<LocalRejectSettings>
    : GlobalRejectSettings extends RejectPerOperation
    ? Action extends keyof GlobalRejectSettings
      ? GlobalRejectSettings[Action] extends RejectOnNotFound
        ? IsReject<GlobalRejectSettings[Action]>
        : GlobalRejectSettings[Action] extends RejectPerModel
        ? Model extends keyof GlobalRejectSettings[Action]
          ? IsReject<GlobalRejectSettings[Action][Model]>
          : False
        : False
      : False
    : IsReject<GlobalRejectSettings>
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Configure findUnique/findFirst to throw an error if the query returns null. 
     * @deprecated since 4.0.0. Use `findUniqueOrThrow`/`findFirstOrThrow` methods instead.
     * @example
     * ```
     * // Reject on both findUnique/findFirst
     * rejectOnNotFound: true
     * // Reject only on findFirst with a custom error
     * rejectOnNotFound: { findFirst: (err) => new Error("Custom Error")}
     * // Reject on user.findUnique with a custom error
     * rejectOnNotFound: { findUnique: {User: (err) => new Error("User not found")}}
     * ```
     */
    rejectOnNotFound?: RejectOnNotFound | RejectPerOperation
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat

    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findMany'
    | 'findFirst'
    | 'create'
    | 'createMany'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => Promise<T>,
  ) => Promise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, '$connect' | '$disconnect' | '$on' | '$transaction' | '$use'>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type TagCountOutputType
   */


  export type TagCountOutputType = {
    AlbumAvailableMarket: number
    TracksAvailableMarket: number
    ArtistInGenres: number
  }

  export type TagCountOutputTypeSelect = {
    AlbumAvailableMarket?: boolean
    TracksAvailableMarket?: boolean
    ArtistInGenres?: boolean
  }

  export type TagCountOutputTypeGetPayload<S extends boolean | null | undefined | TagCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TagCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TagCountOutputTypeArgs)
    ? TagCountOutputType 
    : S extends { select: any } & (TagCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TagCountOutputType ? TagCountOutputType[P] : never
  } 
      : TagCountOutputType




  // Custom InputTypes

  /**
   * TagCountOutputType without action
   */
  export type TagCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TagCountOutputType
     */
    select?: TagCountOutputTypeSelect | null
  }



  /**
   * Count Type UserCountOutputType
   */


  export type UserCountOutputType = {
    Playlist: number
    FollowPlaylists: number
    FollowingArtists: number
  }

  export type UserCountOutputTypeSelect = {
    Playlist?: boolean
    FollowPlaylists?: boolean
    FollowingArtists?: boolean
  }

  export type UserCountOutputTypeGetPayload<S extends boolean | null | undefined | UserCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? UserCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (UserCountOutputTypeArgs)
    ? UserCountOutputType 
    : S extends { select: any } & (UserCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof UserCountOutputType ? UserCountOutputType[P] : never
  } 
      : UserCountOutputType




  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect | null
  }



  /**
   * Count Type ArtistCountOutputType
   */


  export type ArtistCountOutputType = {
    Genres: number
    TrackProduceByArtist: number
    AlbumProduceByArtist: number
    Followers: number
  }

  export type ArtistCountOutputTypeSelect = {
    Genres?: boolean
    TrackProduceByArtist?: boolean
    AlbumProduceByArtist?: boolean
    Followers?: boolean
  }

  export type ArtistCountOutputTypeGetPayload<S extends boolean | null | undefined | ArtistCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ArtistCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (ArtistCountOutputTypeArgs)
    ? ArtistCountOutputType 
    : S extends { select: any } & (ArtistCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ArtistCountOutputType ? ArtistCountOutputType[P] : never
  } 
      : ArtistCountOutputType




  // Custom InputTypes

  /**
   * ArtistCountOutputType without action
   */
  export type ArtistCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the ArtistCountOutputType
     */
    select?: ArtistCountOutputTypeSelect | null
  }



  /**
   * Count Type TrackCountOutputType
   */


  export type TrackCountOutputType = {
    availableMarkets: number
    Artists: number
    InPlaylist: number
  }

  export type TrackCountOutputTypeSelect = {
    availableMarkets?: boolean
    Artists?: boolean
    InPlaylist?: boolean
  }

  export type TrackCountOutputTypeGetPayload<S extends boolean | null | undefined | TrackCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TrackCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (TrackCountOutputTypeArgs)
    ? TrackCountOutputType 
    : S extends { select: any } & (TrackCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TrackCountOutputType ? TrackCountOutputType[P] : never
  } 
      : TrackCountOutputType




  // Custom InputTypes

  /**
   * TrackCountOutputType without action
   */
  export type TrackCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the TrackCountOutputType
     */
    select?: TrackCountOutputTypeSelect | null
  }



  /**
   * Count Type AlbumCountOutputType
   */


  export type AlbumCountOutputType = {
    availableMarkets: number
    Artists: number
    Tracks: number
  }

  export type AlbumCountOutputTypeSelect = {
    availableMarkets?: boolean
    Artists?: boolean
    Tracks?: boolean
  }

  export type AlbumCountOutputTypeGetPayload<S extends boolean | null | undefined | AlbumCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AlbumCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (AlbumCountOutputTypeArgs)
    ? AlbumCountOutputType 
    : S extends { select: any } & (AlbumCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AlbumCountOutputType ? AlbumCountOutputType[P] : never
  } 
      : AlbumCountOutputType




  // Custom InputTypes

  /**
   * AlbumCountOutputType without action
   */
  export type AlbumCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the AlbumCountOutputType
     */
    select?: AlbumCountOutputTypeSelect | null
  }



  /**
   * Count Type PlaylistCountOutputType
   */


  export type PlaylistCountOutputType = {
    tracks: number
    followers: number
  }

  export type PlaylistCountOutputTypeSelect = {
    tracks?: boolean
    followers?: boolean
  }

  export type PlaylistCountOutputTypeGetPayload<S extends boolean | null | undefined | PlaylistCountOutputTypeArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PlaylistCountOutputType :
    S extends undefined ? never :
    S extends { include: any } & (PlaylistCountOutputTypeArgs)
    ? PlaylistCountOutputType 
    : S extends { select: any } & (PlaylistCountOutputTypeArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PlaylistCountOutputType ? PlaylistCountOutputType[P] : never
  } 
      : PlaylistCountOutputType




  // Custom InputTypes

  /**
   * PlaylistCountOutputType without action
   */
  export type PlaylistCountOutputTypeArgs = {
    /**
     * Select specific fields to fetch from the PlaylistCountOutputType
     */
    select?: PlaylistCountOutputTypeSelect | null
  }



  /**
   * Models
   */

  /**
   * Model Tag
   */


  export type AggregateTag = {
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  export type TagAvgAggregateOutputType = {
    id: number | null
  }

  export type TagSumAggregateOutputType = {
    id: number | null
  }

  export type TagMinAggregateOutputType = {
    id: number | null
    code: string | null
    type: string | null
    name: string | null
  }

  export type TagMaxAggregateOutputType = {
    id: number | null
    code: string | null
    type: string | null
    name: string | null
  }

  export type TagCountAggregateOutputType = {
    id: number
    code: number
    type: number
    name: number
    _all: number
  }


  export type TagAvgAggregateInputType = {
    id?: true
  }

  export type TagSumAggregateInputType = {
    id?: true
  }

  export type TagMinAggregateInputType = {
    id?: true
    code?: true
    type?: true
    name?: true
  }

  export type TagMaxAggregateInputType = {
    id?: true
    code?: true
    type?: true
    name?: true
  }

  export type TagCountAggregateInputType = {
    id?: true
    code?: true
    type?: true
    name?: true
    _all?: true
  }

  export type TagAggregateArgs = {
    /**
     * Filter which Tag to aggregate.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tags
    **/
    _count?: true | TagCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TagAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TagSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TagMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TagMaxAggregateInputType
  }

  export type GetTagAggregateType<T extends TagAggregateArgs> = {
        [P in keyof T & keyof AggregateTag]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTag[P]>
      : GetScalarType<T[P], AggregateTag[P]>
  }




  export type TagGroupByArgs = {
    where?: TagWhereInput
    orderBy?: Enumerable<TagOrderByWithAggregationInput>
    by: TagScalarFieldEnum[]
    having?: TagScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TagCountAggregateInputType | true
    _avg?: TagAvgAggregateInputType
    _sum?: TagSumAggregateInputType
    _min?: TagMinAggregateInputType
    _max?: TagMaxAggregateInputType
  }


  export type TagGroupByOutputType = {
    id: number
    code: string
    type: string
    name: string
    _count: TagCountAggregateOutputType | null
    _avg: TagAvgAggregateOutputType | null
    _sum: TagSumAggregateOutputType | null
    _min: TagMinAggregateOutputType | null
    _max: TagMaxAggregateOutputType | null
  }

  type GetTagGroupByPayload<T extends TagGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TagGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TagGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TagGroupByOutputType[P]>
            : GetScalarType<T[P], TagGroupByOutputType[P]>
        }
      >
    >


  export type TagSelect = {
    id?: boolean
    code?: boolean
    type?: boolean
    name?: boolean
    AlbumAvailableMarket?: boolean | Tag$AlbumAvailableMarketArgs
    TracksAvailableMarket?: boolean | Tag$TracksAvailableMarketArgs
    ArtistInGenres?: boolean | Tag$ArtistInGenresArgs
    _count?: boolean | TagCountOutputTypeArgs
  }


  export type TagInclude = {
    AlbumAvailableMarket?: boolean | Tag$AlbumAvailableMarketArgs
    TracksAvailableMarket?: boolean | Tag$TracksAvailableMarketArgs
    ArtistInGenres?: boolean | Tag$ArtistInGenresArgs
    _count?: boolean | TagCountOutputTypeArgs
  }

  export type TagGetPayload<S extends boolean | null | undefined | TagArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Tag :
    S extends undefined ? never :
    S extends { include: any } & (TagArgs | TagFindManyArgs)
    ? Tag  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'AlbumAvailableMarket' ? Array < AlbumAvailableMarketGetPayload<S['include'][P]>>  :
        P extends 'TracksAvailableMarket' ? Array < TracksAvailableMarketGetPayload<S['include'][P]>>  :
        P extends 'ArtistInGenres' ? Array < ArtistInGenresGetPayload<S['include'][P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TagArgs | TagFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'AlbumAvailableMarket' ? Array < AlbumAvailableMarketGetPayload<S['select'][P]>>  :
        P extends 'TracksAvailableMarket' ? Array < TracksAvailableMarketGetPayload<S['select'][P]>>  :
        P extends 'ArtistInGenres' ? Array < ArtistInGenresGetPayload<S['select'][P]>>  :
        P extends '_count' ? TagCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Tag ? Tag[P] : never
  } 
      : Tag


  type TagCountArgs = 
    Omit<TagFindManyArgs, 'select' | 'include'> & {
      select?: TagCountAggregateInputType | true
    }

  export interface TagDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Tag that matches the filter.
     * @param {TagFindUniqueArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TagFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TagFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Tag'> extends True ? Prisma__TagClient<TagGetPayload<T>> : Prisma__TagClient<TagGetPayload<T> | null, null>

    /**
     * Find one Tag that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TagFindUniqueOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TagFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TagFindUniqueOrThrowArgs>
    ): Prisma__TagClient<TagGetPayload<T>>

    /**
     * Find the first Tag that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TagFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TagFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Tag'> extends True ? Prisma__TagClient<TagGetPayload<T>> : Prisma__TagClient<TagGetPayload<T> | null, null>

    /**
     * Find the first Tag that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindFirstOrThrowArgs} args - Arguments to find a Tag
     * @example
     * // Get one Tag
     * const tag = await prisma.tag.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TagFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TagFindFirstOrThrowArgs>
    ): Prisma__TagClient<TagGetPayload<T>>

    /**
     * Find zero or more Tags that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tags
     * const tags = await prisma.tag.findMany()
     * 
     * // Get first 10 Tags
     * const tags = await prisma.tag.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const tagWithIdOnly = await prisma.tag.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TagFindManyArgs>(
      args?: SelectSubset<T, TagFindManyArgs>
    ): Prisma.PrismaPromise<Array<TagGetPayload<T>>>

    /**
     * Create a Tag.
     * @param {TagCreateArgs} args - Arguments to create a Tag.
     * @example
     * // Create one Tag
     * const Tag = await prisma.tag.create({
     *   data: {
     *     // ... data to create a Tag
     *   }
     * })
     * 
    **/
    create<T extends TagCreateArgs>(
      args: SelectSubset<T, TagCreateArgs>
    ): Prisma__TagClient<TagGetPayload<T>>

    /**
     * Create many Tags.
     *     @param {TagCreateManyArgs} args - Arguments to create many Tags.
     *     @example
     *     // Create many Tags
     *     const tag = await prisma.tag.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TagCreateManyArgs>(
      args?: SelectSubset<T, TagCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Tag.
     * @param {TagDeleteArgs} args - Arguments to delete one Tag.
     * @example
     * // Delete one Tag
     * const Tag = await prisma.tag.delete({
     *   where: {
     *     // ... filter to delete one Tag
     *   }
     * })
     * 
    **/
    delete<T extends TagDeleteArgs>(
      args: SelectSubset<T, TagDeleteArgs>
    ): Prisma__TagClient<TagGetPayload<T>>

    /**
     * Update one Tag.
     * @param {TagUpdateArgs} args - Arguments to update one Tag.
     * @example
     * // Update one Tag
     * const tag = await prisma.tag.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TagUpdateArgs>(
      args: SelectSubset<T, TagUpdateArgs>
    ): Prisma__TagClient<TagGetPayload<T>>

    /**
     * Delete zero or more Tags.
     * @param {TagDeleteManyArgs} args - Arguments to filter Tags to delete.
     * @example
     * // Delete a few Tags
     * const { count } = await prisma.tag.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TagDeleteManyArgs>(
      args?: SelectSubset<T, TagDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tags
     * const tag = await prisma.tag.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TagUpdateManyArgs>(
      args: SelectSubset<T, TagUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Tag.
     * @param {TagUpsertArgs} args - Arguments to update or create a Tag.
     * @example
     * // Update or create a Tag
     * const tag = await prisma.tag.upsert({
     *   create: {
     *     // ... data to create a Tag
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Tag we want to update
     *   }
     * })
    **/
    upsert<T extends TagUpsertArgs>(
      args: SelectSubset<T, TagUpsertArgs>
    ): Prisma__TagClient<TagGetPayload<T>>

    /**
     * Count the number of Tags.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagCountArgs} args - Arguments to filter Tags to count.
     * @example
     * // Count the number of Tags
     * const count = await prisma.tag.count({
     *   where: {
     *     // ... the filter for the Tags we want to count
     *   }
     * })
    **/
    count<T extends TagCountArgs>(
      args?: Subset<T, TagCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TagCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TagAggregateArgs>(args: Subset<T, TagAggregateArgs>): Prisma.PrismaPromise<GetTagAggregateType<T>>

    /**
     * Group by Tag.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TagGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TagGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TagGroupByArgs['orderBy'] }
        : { orderBy?: TagGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TagGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTagGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Tag.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TagClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    AlbumAvailableMarket<T extends Tag$AlbumAvailableMarketArgs= {}>(args?: Subset<T, Tag$AlbumAvailableMarketArgs>): Prisma.PrismaPromise<Array<AlbumAvailableMarketGetPayload<T>>| Null>;

    TracksAvailableMarket<T extends Tag$TracksAvailableMarketArgs= {}>(args?: Subset<T, Tag$TracksAvailableMarketArgs>): Prisma.PrismaPromise<Array<TracksAvailableMarketGetPayload<T>>| Null>;

    ArtistInGenres<T extends Tag$ArtistInGenresArgs= {}>(args?: Subset<T, Tag$ArtistInGenresArgs>): Prisma.PrismaPromise<Array<ArtistInGenresGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Tag base type for findUnique actions
   */
  export type TagFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }

  /**
   * Tag findUnique
   */
  export interface TagFindUniqueArgs extends TagFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tag findUniqueOrThrow
   */
  export type TagFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
    /**
     * Filter, which Tag to fetch.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag base type for findFirst actions
   */
  export type TagFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: Enumerable<TagScalarFieldEnum>
  }

  /**
   * Tag findFirst
   */
  export interface TagFindFirstArgs extends TagFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Tag findFirstOrThrow
   */
  export type TagFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
    /**
     * Filter, which Tag to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tags.
     */
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag findMany
   */
  export type TagFindManyArgs = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
    /**
     * Filter, which Tags to fetch.
     */
    where?: TagWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tags to fetch.
     */
    orderBy?: Enumerable<TagOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tags.
     */
    cursor?: TagWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tags from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tags.
     */
    skip?: number
    distinct?: Enumerable<TagScalarFieldEnum>
  }


  /**
   * Tag create
   */
  export type TagCreateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
    /**
     * The data needed to create a Tag.
     */
    data: XOR<TagCreateInput, TagUncheckedCreateInput>
  }


  /**
   * Tag createMany
   */
  export type TagCreateManyArgs = {
    /**
     * The data used to create many Tags.
     */
    data: Enumerable<TagCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Tag update
   */
  export type TagUpdateArgs = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
    /**
     * The data needed to update a Tag.
     */
    data: XOR<TagUpdateInput, TagUncheckedUpdateInput>
    /**
     * Choose, which Tag to update.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag updateMany
   */
  export type TagUpdateManyArgs = {
    /**
     * The data used to update Tags.
     */
    data: XOR<TagUpdateManyMutationInput, TagUncheckedUpdateManyInput>
    /**
     * Filter which Tags to update
     */
    where?: TagWhereInput
  }


  /**
   * Tag upsert
   */
  export type TagUpsertArgs = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
    /**
     * The filter to search for the Tag to update in case it exists.
     */
    where: TagWhereUniqueInput
    /**
     * In case the Tag found by the `where` argument doesn't exist, create a new Tag with this data.
     */
    create: XOR<TagCreateInput, TagUncheckedCreateInput>
    /**
     * In case the Tag was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TagUpdateInput, TagUncheckedUpdateInput>
  }


  /**
   * Tag delete
   */
  export type TagDeleteArgs = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
    /**
     * Filter which Tag to delete.
     */
    where: TagWhereUniqueInput
  }


  /**
   * Tag deleteMany
   */
  export type TagDeleteManyArgs = {
    /**
     * Filter which Tags to delete
     */
    where?: TagWhereInput
  }


  /**
   * Tag.AlbumAvailableMarket
   */
  export type Tag$AlbumAvailableMarketArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    where?: AlbumAvailableMarketWhereInput
    orderBy?: Enumerable<AlbumAvailableMarketOrderByWithRelationInput>
    cursor?: AlbumAvailableMarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AlbumAvailableMarketScalarFieldEnum>
  }


  /**
   * Tag.TracksAvailableMarket
   */
  export type Tag$TracksAvailableMarketArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    where?: TracksAvailableMarketWhereInput
    orderBy?: Enumerable<TracksAvailableMarketOrderByWithRelationInput>
    cursor?: TracksAvailableMarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TracksAvailableMarketScalarFieldEnum>
  }


  /**
   * Tag.ArtistInGenres
   */
  export type Tag$ArtistInGenresArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    where?: ArtistInGenresWhereInput
    orderBy?: Enumerable<ArtistInGenresOrderByWithRelationInput>
    cursor?: ArtistInGenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ArtistInGenresScalarFieldEnum>
  }


  /**
   * Tag without action
   */
  export type TagArgs = {
    /**
     * Select specific fields to fetch from the Tag
     */
    select?: TagSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TagInclude | null
  }



  /**
   * Model Category
   */


  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryAvgAggregateOutputType = {
    id: number | null
  }

  export type CategorySumAggregateOutputType = {
    id: number | null
  }

  export type CategoryMinAggregateOutputType = {
    id: number | null
    hashId: string | null
    name: string | null
    icon: string | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: number | null
    hashId: string | null
    name: string | null
    icon: string | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    hashId: number
    name: number
    icon: number
    _all: number
  }


  export type CategoryAvgAggregateInputType = {
    id?: true
  }

  export type CategorySumAggregateInputType = {
    id?: true
  }

  export type CategoryMinAggregateInputType = {
    id?: true
    hashId?: true
    name?: true
    icon?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    hashId?: true
    name?: true
    icon?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    hashId?: true
    name?: true
    icon?: true
    _all?: true
  }

  export type CategoryAggregateArgs = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CategoryAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CategorySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs = {
    where?: CategoryWhereInput
    orderBy?: Enumerable<CategoryOrderByWithAggregationInput>
    by: CategoryScalarFieldEnum[]
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _avg?: CategoryAvgAggregateInputType
    _sum?: CategorySumAggregateInputType
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }


  export type CategoryGroupByOutputType = {
    id: number
    hashId: string
    name: string
    icon: string
    _count: CategoryCountAggregateOutputType | null
    _avg: CategoryAvgAggregateOutputType | null
    _sum: CategorySumAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect = {
    id?: boolean
    hashId?: boolean
    name?: boolean
    icon?: boolean
  }


  export type CategoryGetPayload<S extends boolean | null | undefined | CategoryArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Category :
    S extends undefined ? never :
    S extends { include: any } & (CategoryArgs | CategoryFindManyArgs)
    ? Category 
    : S extends { select: any } & (CategoryArgs | CategoryFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof Category ? Category[P] : never
  } 
      : Category


  type CategoryCountArgs = 
    Omit<CategoryFindManyArgs, 'select' | 'include'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CategoryFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, CategoryFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find one Category that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindUniqueOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CategoryFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, CategoryFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Category'> extends True ? Prisma__CategoryClient<CategoryGetPayload<T>> : Prisma__CategoryClient<CategoryGetPayload<T> | null, null>

    /**
     * Find the first Category that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(
      args?: SelectSubset<T, CategoryFindFirstOrThrowArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CategoryFindManyArgs>(
      args?: SelectSubset<T, CategoryFindManyArgs>
    ): Prisma.PrismaPromise<Array<CategoryGetPayload<T>>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
    **/
    create<T extends CategoryCreateArgs>(
      args: SelectSubset<T, CategoryCreateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Create many Categories.
     *     @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     *     @example
     *     // Create many Categories
     *     const category = await prisma.category.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CategoryCreateManyArgs>(
      args?: SelectSubset<T, CategoryCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
    **/
    delete<T extends CategoryDeleteArgs>(
      args: SelectSubset<T, CategoryDeleteArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CategoryUpdateArgs>(
      args: SelectSubset<T, CategoryUpdateArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CategoryDeleteManyArgs>(
      args?: SelectSubset<T, CategoryDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CategoryUpdateManyArgs>(
      args: SelectSubset<T, CategoryUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
    **/
    upsert<T extends CategoryUpsertArgs>(
      args: SelectSubset<T, CategoryUpsertArgs>
    ): Prisma__CategoryClient<CategoryGetPayload<T>>

    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__CategoryClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);


    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Category base type for findUnique actions
   */
  export type CategoryFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUnique
   */
  export interface CategoryFindUniqueArgs extends CategoryFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category base type for findFirst actions
   */
  export type CategoryFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }

  /**
   * Category findFirst
   */
  export interface CategoryFindFirstArgs extends CategoryFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category findMany
   */
  export type CategoryFindManyArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: Enumerable<CategoryOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: Enumerable<CategoryScalarFieldEnum>
  }


  /**
   * Category create
   */
  export type CategoryCreateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }


  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs = {
    /**
     * The data used to create many Categories.
     */
    data: Enumerable<CategoryCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Category update
   */
  export type CategoryUpdateArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
  }


  /**
   * Category upsert
   */
  export type CategoryUpsertArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }


  /**
   * Category delete
   */
  export type CategoryDeleteArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }


  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
  }


  /**
   * Category without action
   */
  export type CategoryArgs = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect | null
  }



  /**
   * Model User
   */


  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    id: number | null
  }

  export type UserSumAggregateOutputType = {
    id: number | null
  }

  export type UserMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    name: string | null
    email: string | null
    authType: string | null
    type: string | null
    country: string | null
    explicitContentFilterEnabled: boolean | null
    explicitContentFilterLocked: boolean | null
    imagesId: string | null
    product: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    name: string | null
    email: string | null
    authType: string | null
    type: string | null
    country: string | null
    explicitContentFilterEnabled: boolean | null
    explicitContentFilterLocked: boolean | null
    imagesId: string | null
    product: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    name: number
    email: number
    authType: number
    type: number
    country: number
    explicitContentFilterEnabled: number
    explicitContentFilterLocked: number
    imagesId: number
    product: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    id?: true
  }

  export type UserSumAggregateInputType = {
    id?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    name?: true
    email?: true
    authType?: true
    type?: true
    country?: true
    explicitContentFilterEnabled?: true
    explicitContentFilterLocked?: true
    imagesId?: true
    product?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    name?: true
    email?: true
    authType?: true
    type?: true
    country?: true
    explicitContentFilterEnabled?: true
    explicitContentFilterLocked?: true
    imagesId?: true
    product?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    name?: true
    email?: true
    authType?: true
    type?: true
    country?: true
    explicitContentFilterEnabled?: true
    explicitContentFilterLocked?: true
    imagesId?: true
    product?: true
    _all?: true
  }

  export type UserAggregateArgs = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs = {
    where?: UserWhereInput
    orderBy?: Enumerable<UserOrderByWithAggregationInput>
    by: UserScalarFieldEnum[]
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }


  export type UserGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    uid: string | null
    name: string
    email: string | null
    authType: string
    type: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId: string | null
    product: string
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    name?: boolean
    email?: boolean
    authType?: boolean
    type?: boolean
    country?: boolean
    explicitContentFilterEnabled?: boolean
    explicitContentFilterLocked?: boolean
    imagesId?: boolean
    product?: boolean
    Playlist?: boolean | User$PlaylistArgs
    FollowPlaylists?: boolean | User$FollowPlaylistsArgs
    FollowingArtists?: boolean | User$FollowingArtistsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }


  export type UserInclude = {
    Playlist?: boolean | User$PlaylistArgs
    FollowPlaylists?: boolean | User$FollowPlaylistsArgs
    FollowingArtists?: boolean | User$FollowingArtistsArgs
    _count?: boolean | UserCountOutputTypeArgs
  }

  export type UserGetPayload<S extends boolean | null | undefined | UserArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? User :
    S extends undefined ? never :
    S extends { include: any } & (UserArgs | UserFindManyArgs)
    ? User  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Playlist' ? Array < PlaylistGetPayload<S['include'][P]>>  :
        P extends 'FollowPlaylists' ? Array < PlaylistOnFollowerGetPayload<S['include'][P]>>  :
        P extends 'FollowingArtists' ? Array < ArtistOnFollowingGetPayload<S['include'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (UserArgs | UserFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Playlist' ? Array < PlaylistGetPayload<S['select'][P]>>  :
        P extends 'FollowPlaylists' ? Array < PlaylistOnFollowerGetPayload<S['select'][P]>>  :
        P extends 'FollowingArtists' ? Array < ArtistOnFollowingGetPayload<S['select'][P]>>  :
        P extends '_count' ? UserCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof User ? User[P] : never
  } 
      : User


  type UserCountArgs = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, UserFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, UserFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'User'> extends True ? Prisma__UserClient<UserGetPayload<T>> : Prisma__UserClient<UserGetPayload<T> | null, null>

    /**
     * Find the first User that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs>(
      args?: SelectSubset<T, UserFindManyArgs>
    ): Prisma.PrismaPromise<Array<UserGetPayload<T>>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs>(
      args: SelectSubset<T, UserCreateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs>(
      args?: SelectSubset<T, UserCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs>(
      args: SelectSubset<T, UserDeleteArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs>(
      args: SelectSubset<T, UserUpdateArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs>(
      args?: SelectSubset<T, UserDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs>(
      args: SelectSubset<T, UserUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs>(
      args: SelectSubset<T, UserUpsertArgs>
    ): Prisma__UserClient<UserGetPayload<T>>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__UserClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Playlist<T extends User$PlaylistArgs= {}>(args?: Subset<T, User$PlaylistArgs>): Prisma.PrismaPromise<Array<PlaylistGetPayload<T>>| Null>;

    FollowPlaylists<T extends User$FollowPlaylistsArgs= {}>(args?: Subset<T, User$FollowPlaylistsArgs>): Prisma.PrismaPromise<Array<PlaylistOnFollowerGetPayload<T>>| Null>;

    FollowingArtists<T extends User$FollowingArtistsArgs= {}>(args?: Subset<T, User$FollowingArtistsArgs>): Prisma.PrismaPromise<Array<ArtistOnFollowingGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * User base type for findUnique actions
   */
  export type UserFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUnique
   */
  export interface UserFindUniqueArgs extends UserFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User base type for findFirst actions
   */
  export type UserFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }

  /**
   * User findFirst
   */
  export interface UserFindFirstArgs extends UserFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: Enumerable<UserOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: Enumerable<UserScalarFieldEnum>
  }


  /**
   * User create
   */
  export type UserCreateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs = {
    /**
     * The data used to create many Users.
     */
    data: Enumerable<UserCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.Playlist
   */
  export type User$PlaylistArgs = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    where?: PlaylistWhereInput
    orderBy?: Enumerable<PlaylistOrderByWithRelationInput>
    cursor?: PlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PlaylistScalarFieldEnum>
  }


  /**
   * User.FollowPlaylists
   */
  export type User$FollowPlaylistsArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    where?: PlaylistOnFollowerWhereInput
    orderBy?: Enumerable<PlaylistOnFollowerOrderByWithRelationInput>
    cursor?: PlaylistOnFollowerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PlaylistOnFollowerScalarFieldEnum>
  }


  /**
   * User.FollowingArtists
   */
  export type User$FollowingArtistsArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    where?: ArtistOnFollowingWhereInput
    orderBy?: Enumerable<ArtistOnFollowingOrderByWithRelationInput>
    cursor?: ArtistOnFollowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ArtistOnFollowingScalarFieldEnum>
  }


  /**
   * User without action
   */
  export type UserArgs = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude | null
  }



  /**
   * Model Artist
   */


  export type AggregateArtist = {
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  export type ArtistAvgAggregateOutputType = {
    id: number | null
    popularity: number | null
  }

  export type ArtistSumAggregateOutputType = {
    id: number | null
    popularity: number | null
  }

  export type ArtistMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    name: string | null
    popularity: number | null
    imageUrl: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    name: string | null
    popularity: number | null
    imageUrl: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    name: number
    popularity: number
    imageUrl: number
    _all: number
  }


  export type ArtistAvgAggregateInputType = {
    id?: true
    popularity?: true
  }

  export type ArtistSumAggregateInputType = {
    id?: true
    popularity?: true
  }

  export type ArtistMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    name?: true
    popularity?: true
    imageUrl?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    name?: true
    popularity?: true
    imageUrl?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    name?: true
    popularity?: true
    imageUrl?: true
    _all?: true
  }

  export type ArtistAggregateArgs = {
    /**
     * Filter which Artist to aggregate.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: Enumerable<ArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Artists
    **/
    _count?: true | ArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistMaxAggregateInputType
  }

  export type GetArtistAggregateType<T extends ArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtist[P]>
      : GetScalarType<T[P], AggregateArtist[P]>
  }




  export type ArtistGroupByArgs = {
    where?: ArtistWhereInput
    orderBy?: Enumerable<ArtistOrderByWithAggregationInput>
    by: ArtistScalarFieldEnum[]
    having?: ArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistCountAggregateInputType | true
    _avg?: ArtistAvgAggregateInputType
    _sum?: ArtistSumAggregateInputType
    _min?: ArtistMinAggregateInputType
    _max?: ArtistMaxAggregateInputType
  }


  export type ArtistGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    uid: string
    name: string
    popularity: number | null
    imageUrl: string | null
    _count: ArtistCountAggregateOutputType | null
    _avg: ArtistAvgAggregateOutputType | null
    _sum: ArtistSumAggregateOutputType | null
    _min: ArtistMinAggregateOutputType | null
    _max: ArtistMaxAggregateOutputType | null
  }

  type GetArtistGroupByPayload<T extends ArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistGroupByOutputType[P]>
        }
      >
    >


  export type ArtistSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    name?: boolean
    popularity?: boolean
    imageUrl?: boolean
    Genres?: boolean | Artist$GenresArgs
    TrackProduceByArtist?: boolean | Artist$TrackProduceByArtistArgs
    AlbumProduceByArtist?: boolean | Artist$AlbumProduceByArtistArgs
    Followers?: boolean | Artist$FollowersArgs
    _count?: boolean | ArtistCountOutputTypeArgs
  }


  export type ArtistInclude = {
    Genres?: boolean | Artist$GenresArgs
    TrackProduceByArtist?: boolean | Artist$TrackProduceByArtistArgs
    AlbumProduceByArtist?: boolean | Artist$AlbumProduceByArtistArgs
    Followers?: boolean | Artist$FollowersArgs
    _count?: boolean | ArtistCountOutputTypeArgs
  }

  export type ArtistGetPayload<S extends boolean | null | undefined | ArtistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Artist :
    S extends undefined ? never :
    S extends { include: any } & (ArtistArgs | ArtistFindManyArgs)
    ? Artist  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Genres' ? Array < ArtistInGenresGetPayload<S['include'][P]>>  :
        P extends 'TrackProduceByArtist' ? Array < TrackProduceByArtistGetPayload<S['include'][P]>>  :
        P extends 'AlbumProduceByArtist' ? Array < AlbumProduceByArtistGetPayload<S['include'][P]>>  :
        P extends 'Followers' ? Array < ArtistOnFollowingGetPayload<S['include'][P]>>  :
        P extends '_count' ? ArtistCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ArtistArgs | ArtistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Genres' ? Array < ArtistInGenresGetPayload<S['select'][P]>>  :
        P extends 'TrackProduceByArtist' ? Array < TrackProduceByArtistGetPayload<S['select'][P]>>  :
        P extends 'AlbumProduceByArtist' ? Array < AlbumProduceByArtistGetPayload<S['select'][P]>>  :
        P extends 'Followers' ? Array < ArtistOnFollowingGetPayload<S['select'][P]>>  :
        P extends '_count' ? ArtistCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Artist ? Artist[P] : never
  } 
      : Artist


  type ArtistCountArgs = 
    Omit<ArtistFindManyArgs, 'select' | 'include'> & {
      select?: ArtistCountAggregateInputType | true
    }

  export interface ArtistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Artist that matches the filter.
     * @param {ArtistFindUniqueArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ArtistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Artist'> extends True ? Prisma__ArtistClient<ArtistGetPayload<T>> : Prisma__ArtistClient<ArtistGetPayload<T> | null, null>

    /**
     * Find one Artist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistFindUniqueOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ArtistFindUniqueOrThrowArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Find the first Artist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ArtistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Artist'> extends True ? Prisma__ArtistClient<ArtistGetPayload<T>> : Prisma__ArtistClient<ArtistGetPayload<T> | null, null>

    /**
     * Find the first Artist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindFirstOrThrowArgs} args - Arguments to find a Artist
     * @example
     * // Get one Artist
     * const artist = await prisma.artist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArtistFindFirstOrThrowArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Find zero or more Artists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Artists
     * const artists = await prisma.artist.findMany()
     * 
     * // Get first 10 Artists
     * const artists = await prisma.artist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistWithIdOnly = await prisma.artist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistFindManyArgs>(
      args?: SelectSubset<T, ArtistFindManyArgs>
    ): Prisma.PrismaPromise<Array<ArtistGetPayload<T>>>

    /**
     * Create a Artist.
     * @param {ArtistCreateArgs} args - Arguments to create a Artist.
     * @example
     * // Create one Artist
     * const Artist = await prisma.artist.create({
     *   data: {
     *     // ... data to create a Artist
     *   }
     * })
     * 
    **/
    create<T extends ArtistCreateArgs>(
      args: SelectSubset<T, ArtistCreateArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Create many Artists.
     *     @param {ArtistCreateManyArgs} args - Arguments to create many Artists.
     *     @example
     *     // Create many Artists
     *     const artist = await prisma.artist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistCreateManyArgs>(
      args?: SelectSubset<T, ArtistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Artist.
     * @param {ArtistDeleteArgs} args - Arguments to delete one Artist.
     * @example
     * // Delete one Artist
     * const Artist = await prisma.artist.delete({
     *   where: {
     *     // ... filter to delete one Artist
     *   }
     * })
     * 
    **/
    delete<T extends ArtistDeleteArgs>(
      args: SelectSubset<T, ArtistDeleteArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Update one Artist.
     * @param {ArtistUpdateArgs} args - Arguments to update one Artist.
     * @example
     * // Update one Artist
     * const artist = await prisma.artist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistUpdateArgs>(
      args: SelectSubset<T, ArtistUpdateArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Delete zero or more Artists.
     * @param {ArtistDeleteManyArgs} args - Arguments to filter Artists to delete.
     * @example
     * // Delete a few Artists
     * const { count } = await prisma.artist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistDeleteManyArgs>(
      args?: SelectSubset<T, ArtistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Artists
     * const artist = await prisma.artist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistUpdateManyArgs>(
      args: SelectSubset<T, ArtistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Artist.
     * @param {ArtistUpsertArgs} args - Arguments to update or create a Artist.
     * @example
     * // Update or create a Artist
     * const artist = await prisma.artist.upsert({
     *   create: {
     *     // ... data to create a Artist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Artist we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistUpsertArgs>(
      args: SelectSubset<T, ArtistUpsertArgs>
    ): Prisma__ArtistClient<ArtistGetPayload<T>>

    /**
     * Count the number of Artists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistCountArgs} args - Arguments to filter Artists to count.
     * @example
     * // Count the number of Artists
     * const count = await prisma.artist.count({
     *   where: {
     *     // ... the filter for the Artists we want to count
     *   }
     * })
    **/
    count<T extends ArtistCountArgs>(
      args?: Subset<T, ArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistAggregateArgs>(args: Subset<T, ArtistAggregateArgs>): Prisma.PrismaPromise<GetArtistAggregateType<T>>

    /**
     * Group by Artist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistGroupByArgs['orderBy'] }
        : { orderBy?: ArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Artist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ArtistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Genres<T extends Artist$GenresArgs= {}>(args?: Subset<T, Artist$GenresArgs>): Prisma.PrismaPromise<Array<ArtistInGenresGetPayload<T>>| Null>;

    TrackProduceByArtist<T extends Artist$TrackProduceByArtistArgs= {}>(args?: Subset<T, Artist$TrackProduceByArtistArgs>): Prisma.PrismaPromise<Array<TrackProduceByArtistGetPayload<T>>| Null>;

    AlbumProduceByArtist<T extends Artist$AlbumProduceByArtistArgs= {}>(args?: Subset<T, Artist$AlbumProduceByArtistArgs>): Prisma.PrismaPromise<Array<AlbumProduceByArtistGetPayload<T>>| Null>;

    Followers<T extends Artist$FollowersArgs= {}>(args?: Subset<T, Artist$FollowersArgs>): Prisma.PrismaPromise<Array<ArtistOnFollowingGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Artist base type for findUnique actions
   */
  export type ArtistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }

  /**
   * Artist findUnique
   */
  export interface ArtistFindUniqueArgs extends ArtistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Artist findUniqueOrThrow
   */
  export type ArtistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artist to fetch.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist base type for findFirst actions
   */
  export type ArtistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: Enumerable<ArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: Enumerable<ArtistScalarFieldEnum>
  }

  /**
   * Artist findFirst
   */
  export interface ArtistFindFirstArgs extends ArtistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Artist findFirstOrThrow
   */
  export type ArtistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artist to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: Enumerable<ArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Artists.
     */
    distinct?: Enumerable<ArtistScalarFieldEnum>
  }


  /**
   * Artist findMany
   */
  export type ArtistFindManyArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter, which Artists to fetch.
     */
    where?: ArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Artists to fetch.
     */
    orderBy?: Enumerable<ArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Artists.
     */
    cursor?: ArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Artists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Artists.
     */
    skip?: number
    distinct?: Enumerable<ArtistScalarFieldEnum>
  }


  /**
   * Artist create
   */
  export type ArtistCreateArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * The data needed to create a Artist.
     */
    data: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
  }


  /**
   * Artist createMany
   */
  export type ArtistCreateManyArgs = {
    /**
     * The data used to create many Artists.
     */
    data: Enumerable<ArtistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Artist update
   */
  export type ArtistUpdateArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * The data needed to update a Artist.
     */
    data: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
    /**
     * Choose, which Artist to update.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist updateMany
   */
  export type ArtistUpdateManyArgs = {
    /**
     * The data used to update Artists.
     */
    data: XOR<ArtistUpdateManyMutationInput, ArtistUncheckedUpdateManyInput>
    /**
     * Filter which Artists to update
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist upsert
   */
  export type ArtistUpsertArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * The filter to search for the Artist to update in case it exists.
     */
    where: ArtistWhereUniqueInput
    /**
     * In case the Artist found by the `where` argument doesn't exist, create a new Artist with this data.
     */
    create: XOR<ArtistCreateInput, ArtistUncheckedCreateInput>
    /**
     * In case the Artist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistUpdateInput, ArtistUncheckedUpdateInput>
  }


  /**
   * Artist delete
   */
  export type ArtistDeleteArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
    /**
     * Filter which Artist to delete.
     */
    where: ArtistWhereUniqueInput
  }


  /**
   * Artist deleteMany
   */
  export type ArtistDeleteManyArgs = {
    /**
     * Filter which Artists to delete
     */
    where?: ArtistWhereInput
  }


  /**
   * Artist.Genres
   */
  export type Artist$GenresArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    where?: ArtistInGenresWhereInput
    orderBy?: Enumerable<ArtistInGenresOrderByWithRelationInput>
    cursor?: ArtistInGenresWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ArtistInGenresScalarFieldEnum>
  }


  /**
   * Artist.TrackProduceByArtist
   */
  export type Artist$TrackProduceByArtistArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    where?: TrackProduceByArtistWhereInput
    orderBy?: Enumerable<TrackProduceByArtistOrderByWithRelationInput>
    cursor?: TrackProduceByArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrackProduceByArtistScalarFieldEnum>
  }


  /**
   * Artist.AlbumProduceByArtist
   */
  export type Artist$AlbumProduceByArtistArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    where?: AlbumProduceByArtistWhereInput
    orderBy?: Enumerable<AlbumProduceByArtistOrderByWithRelationInput>
    cursor?: AlbumProduceByArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AlbumProduceByArtistScalarFieldEnum>
  }


  /**
   * Artist.Followers
   */
  export type Artist$FollowersArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    where?: ArtistOnFollowingWhereInput
    orderBy?: Enumerable<ArtistOnFollowingOrderByWithRelationInput>
    cursor?: ArtistOnFollowingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<ArtistOnFollowingScalarFieldEnum>
  }


  /**
   * Artist without action
   */
  export type ArtistArgs = {
    /**
     * Select specific fields to fetch from the Artist
     */
    select?: ArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInclude | null
  }



  /**
   * Model Track
   */


  export type AggregateTrack = {
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  export type TrackAvgAggregateOutputType = {
    id: number | null
    discNumber: number | null
    durationMs: number | null
    popularity: number | null
    trackNumber: number | null
    albumId: number | null
  }

  export type TrackSumAggregateOutputType = {
    id: number | null
    discNumber: number | null
    durationMs: number | null
    popularity: number | null
    trackNumber: number | null
    albumId: number | null
  }

  export type TrackMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    name: string | null
    discNumber: number | null
    durationMs: number | null
    explicit: boolean | null
    popularity: number | null
    previewUrl: string | null
    trackNumber: number | null
    isLocal: boolean | null
    albumId: number | null
  }

  export type TrackMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    name: string | null
    discNumber: number | null
    durationMs: number | null
    explicit: boolean | null
    popularity: number | null
    previewUrl: string | null
    trackNumber: number | null
    isLocal: boolean | null
    albumId: number | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    name: number
    discNumber: number
    durationMs: number
    explicit: number
    popularity: number
    previewUrl: number
    trackNumber: number
    isLocal: number
    albumId: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    id?: true
    discNumber?: true
    durationMs?: true
    popularity?: true
    trackNumber?: true
    albumId?: true
  }

  export type TrackSumAggregateInputType = {
    id?: true
    discNumber?: true
    durationMs?: true
    popularity?: true
    trackNumber?: true
    albumId?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    name?: true
    discNumber?: true
    durationMs?: true
    explicit?: true
    popularity?: true
    previewUrl?: true
    trackNumber?: true
    isLocal?: true
    albumId?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    name?: true
    discNumber?: true
    durationMs?: true
    explicit?: true
    popularity?: true
    previewUrl?: true
    trackNumber?: true
    isLocal?: true
    albumId?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    name?: true
    discNumber?: true
    durationMs?: true
    explicit?: true
    popularity?: true
    previewUrl?: true
    trackNumber?: true
    isLocal?: true
    albumId?: true
    _all?: true
  }

  export type TrackAggregateArgs = {
    /**
     * Filter which Track to aggregate.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Tracks
    **/
    _count?: true | TrackCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMaxAggregateInputType
  }

  export type GetTrackAggregateType<T extends TrackAggregateArgs> = {
        [P in keyof T & keyof AggregateTrack]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrack[P]>
      : GetScalarType<T[P], AggregateTrack[P]>
  }




  export type TrackGroupByArgs = {
    where?: TrackWhereInput
    orderBy?: Enumerable<TrackOrderByWithAggregationInput>
    by: TrackScalarFieldEnum[]
    having?: TrackScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackCountAggregateInputType | true
    _avg?: TrackAvgAggregateInputType
    _sum?: TrackSumAggregateInputType
    _min?: TrackMinAggregateInputType
    _max?: TrackMaxAggregateInputType
  }


  export type TrackGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity: number | null
    previewUrl: string | null
    trackNumber: number
    isLocal: boolean
    albumId: number | null
    _count: TrackCountAggregateOutputType | null
    _avg: TrackAvgAggregateOutputType | null
    _sum: TrackSumAggregateOutputType | null
    _min: TrackMinAggregateOutputType | null
    _max: TrackMaxAggregateOutputType | null
  }

  type GetTrackGroupByPayload<T extends TrackGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TrackGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackGroupByOutputType[P]>
            : GetScalarType<T[P], TrackGroupByOutputType[P]>
        }
      >
    >


  export type TrackSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    name?: boolean
    discNumber?: boolean
    durationMs?: boolean
    explicit?: boolean
    popularity?: boolean
    previewUrl?: boolean
    trackNumber?: boolean
    isLocal?: boolean
    albumId?: boolean
    availableMarkets?: boolean | Track$availableMarketsArgs
    Artists?: boolean | Track$ArtistsArgs
    InPlaylist?: boolean | Track$InPlaylistArgs
    Album?: boolean | AlbumArgs
    _count?: boolean | TrackCountOutputTypeArgs
  }


  export type TrackInclude = {
    availableMarkets?: boolean | Track$availableMarketsArgs
    Artists?: boolean | Track$ArtistsArgs
    InPlaylist?: boolean | Track$InPlaylistArgs
    Album?: boolean | AlbumArgs
    _count?: boolean | TrackCountOutputTypeArgs
  }

  export type TrackGetPayload<S extends boolean | null | undefined | TrackArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Track :
    S extends undefined ? never :
    S extends { include: any } & (TrackArgs | TrackFindManyArgs)
    ? Track  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'availableMarkets' ? Array < TracksAvailableMarketGetPayload<S['include'][P]>>  :
        P extends 'Artists' ? Array < TrackProduceByArtistGetPayload<S['include'][P]>>  :
        P extends 'InPlaylist' ? Array < TracksOnPlaylistGetPayload<S['include'][P]>>  :
        P extends 'Album' ? AlbumGetPayload<S['include'][P]> | null :
        P extends '_count' ? TrackCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TrackArgs | TrackFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'availableMarkets' ? Array < TracksAvailableMarketGetPayload<S['select'][P]>>  :
        P extends 'Artists' ? Array < TrackProduceByArtistGetPayload<S['select'][P]>>  :
        P extends 'InPlaylist' ? Array < TracksOnPlaylistGetPayload<S['select'][P]>>  :
        P extends 'Album' ? AlbumGetPayload<S['select'][P]> | null :
        P extends '_count' ? TrackCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Track ? Track[P] : never
  } 
      : Track


  type TrackCountArgs = 
    Omit<TrackFindManyArgs, 'select' | 'include'> & {
      select?: TrackCountAggregateInputType | true
    }

  export interface TrackDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Track that matches the filter.
     * @param {TrackFindUniqueArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TrackFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Track'> extends True ? Prisma__TrackClient<TrackGetPayload<T>> : Prisma__TrackClient<TrackGetPayload<T> | null, null>

    /**
     * Find one Track that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackFindUniqueOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TrackFindUniqueOrThrowArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Find the first Track that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TrackFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Track'> extends True ? Prisma__TrackClient<TrackGetPayload<T>> : Prisma__TrackClient<TrackGetPayload<T> | null, null>

    /**
     * Find the first Track that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindFirstOrThrowArgs} args - Arguments to find a Track
     * @example
     * // Get one Track
     * const track = await prisma.track.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TrackFindFirstOrThrowArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Find zero or more Tracks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Tracks
     * const tracks = await prisma.track.findMany()
     * 
     * // Get first 10 Tracks
     * const tracks = await prisma.track.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackWithIdOnly = await prisma.track.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackFindManyArgs>(
      args?: SelectSubset<T, TrackFindManyArgs>
    ): Prisma.PrismaPromise<Array<TrackGetPayload<T>>>

    /**
     * Create a Track.
     * @param {TrackCreateArgs} args - Arguments to create a Track.
     * @example
     * // Create one Track
     * const Track = await prisma.track.create({
     *   data: {
     *     // ... data to create a Track
     *   }
     * })
     * 
    **/
    create<T extends TrackCreateArgs>(
      args: SelectSubset<T, TrackCreateArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Create many Tracks.
     *     @param {TrackCreateManyArgs} args - Arguments to create many Tracks.
     *     @example
     *     // Create many Tracks
     *     const track = await prisma.track.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackCreateManyArgs>(
      args?: SelectSubset<T, TrackCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Track.
     * @param {TrackDeleteArgs} args - Arguments to delete one Track.
     * @example
     * // Delete one Track
     * const Track = await prisma.track.delete({
     *   where: {
     *     // ... filter to delete one Track
     *   }
     * })
     * 
    **/
    delete<T extends TrackDeleteArgs>(
      args: SelectSubset<T, TrackDeleteArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Update one Track.
     * @param {TrackUpdateArgs} args - Arguments to update one Track.
     * @example
     * // Update one Track
     * const track = await prisma.track.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackUpdateArgs>(
      args: SelectSubset<T, TrackUpdateArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Delete zero or more Tracks.
     * @param {TrackDeleteManyArgs} args - Arguments to filter Tracks to delete.
     * @example
     * // Delete a few Tracks
     * const { count } = await prisma.track.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackDeleteManyArgs>(
      args?: SelectSubset<T, TrackDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Tracks
     * const track = await prisma.track.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackUpdateManyArgs>(
      args: SelectSubset<T, TrackUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Track.
     * @param {TrackUpsertArgs} args - Arguments to update or create a Track.
     * @example
     * // Update or create a Track
     * const track = await prisma.track.upsert({
     *   create: {
     *     // ... data to create a Track
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Track we want to update
     *   }
     * })
    **/
    upsert<T extends TrackUpsertArgs>(
      args: SelectSubset<T, TrackUpsertArgs>
    ): Prisma__TrackClient<TrackGetPayload<T>>

    /**
     * Count the number of Tracks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackCountArgs} args - Arguments to filter Tracks to count.
     * @example
     * // Count the number of Tracks
     * const count = await prisma.track.count({
     *   where: {
     *     // ... the filter for the Tracks we want to count
     *   }
     * })
    **/
    count<T extends TrackCountArgs>(
      args?: Subset<T, TrackCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackAggregateArgs>(args: Subset<T, TrackAggregateArgs>): Prisma.PrismaPromise<GetTrackAggregateType<T>>

    /**
     * Group by Track.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackGroupByArgs['orderBy'] }
        : { orderBy?: TrackGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Track.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TrackClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    availableMarkets<T extends Track$availableMarketsArgs= {}>(args?: Subset<T, Track$availableMarketsArgs>): Prisma.PrismaPromise<Array<TracksAvailableMarketGetPayload<T>>| Null>;

    Artists<T extends Track$ArtistsArgs= {}>(args?: Subset<T, Track$ArtistsArgs>): Prisma.PrismaPromise<Array<TrackProduceByArtistGetPayload<T>>| Null>;

    InPlaylist<T extends Track$InPlaylistArgs= {}>(args?: Subset<T, Track$InPlaylistArgs>): Prisma.PrismaPromise<Array<TracksOnPlaylistGetPayload<T>>| Null>;

    Album<T extends AlbumArgs= {}>(args?: Subset<T, AlbumArgs>): Prisma__AlbumClient<AlbumGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Track base type for findUnique actions
   */
  export type TrackFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }

  /**
   * Track findUnique
   */
  export interface TrackFindUniqueArgs extends TrackFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Track findUniqueOrThrow
   */
  export type TrackFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Track to fetch.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track base type for findFirst actions
   */
  export type TrackFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: Enumerable<TrackScalarFieldEnum>
  }

  /**
   * Track findFirst
   */
  export interface TrackFindFirstArgs extends TrackFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Track findFirstOrThrow
   */
  export type TrackFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Track to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Tracks.
     */
    distinct?: Enumerable<TrackScalarFieldEnum>
  }


  /**
   * Track findMany
   */
  export type TrackFindManyArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter, which Tracks to fetch.
     */
    where?: TrackWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Tracks to fetch.
     */
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Tracks.
     */
    cursor?: TrackWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Tracks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Tracks.
     */
    skip?: number
    distinct?: Enumerable<TrackScalarFieldEnum>
  }


  /**
   * Track create
   */
  export type TrackCreateArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * The data needed to create a Track.
     */
    data: XOR<TrackCreateInput, TrackUncheckedCreateInput>
  }


  /**
   * Track createMany
   */
  export type TrackCreateManyArgs = {
    /**
     * The data used to create many Tracks.
     */
    data: Enumerable<TrackCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Track update
   */
  export type TrackUpdateArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * The data needed to update a Track.
     */
    data: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
    /**
     * Choose, which Track to update.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track updateMany
   */
  export type TrackUpdateManyArgs = {
    /**
     * The data used to update Tracks.
     */
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyInput>
    /**
     * Filter which Tracks to update
     */
    where?: TrackWhereInput
  }


  /**
   * Track upsert
   */
  export type TrackUpsertArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * The filter to search for the Track to update in case it exists.
     */
    where: TrackWhereUniqueInput
    /**
     * In case the Track found by the `where` argument doesn't exist, create a new Track with this data.
     */
    create: XOR<TrackCreateInput, TrackUncheckedCreateInput>
    /**
     * In case the Track was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackUpdateInput, TrackUncheckedUpdateInput>
  }


  /**
   * Track delete
   */
  export type TrackDeleteArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    /**
     * Filter which Track to delete.
     */
    where: TrackWhereUniqueInput
  }


  /**
   * Track deleteMany
   */
  export type TrackDeleteManyArgs = {
    /**
     * Filter which Tracks to delete
     */
    where?: TrackWhereInput
  }


  /**
   * Track.availableMarkets
   */
  export type Track$availableMarketsArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    where?: TracksAvailableMarketWhereInput
    orderBy?: Enumerable<TracksAvailableMarketOrderByWithRelationInput>
    cursor?: TracksAvailableMarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TracksAvailableMarketScalarFieldEnum>
  }


  /**
   * Track.Artists
   */
  export type Track$ArtistsArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    where?: TrackProduceByArtistWhereInput
    orderBy?: Enumerable<TrackProduceByArtistOrderByWithRelationInput>
    cursor?: TrackProduceByArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrackProduceByArtistScalarFieldEnum>
  }


  /**
   * Track.InPlaylist
   */
  export type Track$InPlaylistArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    where?: TracksOnPlaylistWhereInput
    orderBy?: Enumerable<TracksOnPlaylistOrderByWithRelationInput>
    cursor?: TracksOnPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TracksOnPlaylistScalarFieldEnum>
  }


  /**
   * Track without action
   */
  export type TrackArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
  }



  /**
   * Model Album
   */


  export type AggregateAlbum = {
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  export type AlbumAvgAggregateOutputType = {
    id: number | null
    totalTracks: number | null
  }

  export type AlbumSumAggregateOutputType = {
    id: number | null
    totalTracks: number | null
  }

  export type AlbumMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    albumType: string | null
    totalTracks: number | null
    name: string | null
    releaseDate: Date | null
    releaseDatePrecision: string | null
    albumGroup: string | null
    copyrights: string | null
    imageUrl: string | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    albumType: string | null
    totalTracks: number | null
    name: string | null
    releaseDate: Date | null
    releaseDatePrecision: string | null
    albumGroup: string | null
    copyrights: string | null
    imageUrl: string | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    albumType: number
    totalTracks: number
    name: number
    releaseDate: number
    releaseDatePrecision: number
    albumGroup: number
    copyrights: number
    imageUrl: number
    _all: number
  }


  export type AlbumAvgAggregateInputType = {
    id?: true
    totalTracks?: true
  }

  export type AlbumSumAggregateInputType = {
    id?: true
    totalTracks?: true
  }

  export type AlbumMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    albumType?: true
    totalTracks?: true
    name?: true
    releaseDate?: true
    releaseDatePrecision?: true
    albumGroup?: true
    copyrights?: true
    imageUrl?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    albumType?: true
    totalTracks?: true
    name?: true
    releaseDate?: true
    releaseDatePrecision?: true
    albumGroup?: true
    copyrights?: true
    imageUrl?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    albumType?: true
    totalTracks?: true
    name?: true
    releaseDate?: true
    releaseDatePrecision?: true
    albumGroup?: true
    copyrights?: true
    imageUrl?: true
    _all?: true
  }

  export type AlbumAggregateArgs = {
    /**
     * Filter which Album to aggregate.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Albums
    **/
    _count?: true | AlbumCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMaxAggregateInputType
  }

  export type GetAlbumAggregateType<T extends AlbumAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbum]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbum[P]>
      : GetScalarType<T[P], AggregateAlbum[P]>
  }




  export type AlbumGroupByArgs = {
    where?: AlbumWhereInput
    orderBy?: Enumerable<AlbumOrderByWithAggregationInput>
    by: AlbumScalarFieldEnum[]
    having?: AlbumScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumCountAggregateInputType | true
    _avg?: AlbumAvgAggregateInputType
    _sum?: AlbumSumAggregateInputType
    _min?: AlbumMinAggregateInputType
    _max?: AlbumMaxAggregateInputType
  }


  export type AlbumGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date
    releaseDatePrecision: string
    albumGroup: string
    copyrights: string | null
    imageUrl: string | null
    _count: AlbumCountAggregateOutputType | null
    _avg: AlbumAvgAggregateOutputType | null
    _sum: AlbumSumAggregateOutputType | null
    _min: AlbumMinAggregateOutputType | null
    _max: AlbumMaxAggregateOutputType | null
  }

  type GetAlbumGroupByPayload<T extends AlbumGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AlbumGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumGroupByOutputType[P]>
        }
      >
    >


  export type AlbumSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    albumType?: boolean
    totalTracks?: boolean
    name?: boolean
    releaseDate?: boolean
    releaseDatePrecision?: boolean
    albumGroup?: boolean
    copyrights?: boolean
    imageUrl?: boolean
    availableMarkets?: boolean | Album$availableMarketsArgs
    Artists?: boolean | Album$ArtistsArgs
    Tracks?: boolean | Album$TracksArgs
    _count?: boolean | AlbumCountOutputTypeArgs
  }


  export type AlbumInclude = {
    availableMarkets?: boolean | Album$availableMarketsArgs
    Artists?: boolean | Album$ArtistsArgs
    Tracks?: boolean | Album$TracksArgs
    _count?: boolean | AlbumCountOutputTypeArgs
  }

  export type AlbumGetPayload<S extends boolean | null | undefined | AlbumArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Album :
    S extends undefined ? never :
    S extends { include: any } & (AlbumArgs | AlbumFindManyArgs)
    ? Album  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'availableMarkets' ? Array < AlbumAvailableMarketGetPayload<S['include'][P]>>  :
        P extends 'Artists' ? Array < AlbumProduceByArtistGetPayload<S['include'][P]>>  :
        P extends 'Tracks' ? Array < TrackGetPayload<S['include'][P]>>  :
        P extends '_count' ? AlbumCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AlbumArgs | AlbumFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'availableMarkets' ? Array < AlbumAvailableMarketGetPayload<S['select'][P]>>  :
        P extends 'Artists' ? Array < AlbumProduceByArtistGetPayload<S['select'][P]>>  :
        P extends 'Tracks' ? Array < TrackGetPayload<S['select'][P]>>  :
        P extends '_count' ? AlbumCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Album ? Album[P] : never
  } 
      : Album


  type AlbumCountArgs = 
    Omit<AlbumFindManyArgs, 'select' | 'include'> & {
      select?: AlbumCountAggregateInputType | true
    }

  export interface AlbumDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Album that matches the filter.
     * @param {AlbumFindUniqueArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AlbumFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Album'> extends True ? Prisma__AlbumClient<AlbumGetPayload<T>> : Prisma__AlbumClient<AlbumGetPayload<T> | null, null>

    /**
     * Find one Album that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumFindUniqueOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AlbumFindUniqueOrThrowArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Find the first Album that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AlbumFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Album'> extends True ? Prisma__AlbumClient<AlbumGetPayload<T>> : Prisma__AlbumClient<AlbumGetPayload<T> | null, null>

    /**
     * Find the first Album that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindFirstOrThrowArgs} args - Arguments to find a Album
     * @example
     * // Get one Album
     * const album = await prisma.album.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AlbumFindFirstOrThrowArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Find zero or more Albums that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Albums
     * const albums = await prisma.album.findMany()
     * 
     * // Get first 10 Albums
     * const albums = await prisma.album.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumWithIdOnly = await prisma.album.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumFindManyArgs>(
      args?: SelectSubset<T, AlbumFindManyArgs>
    ): Prisma.PrismaPromise<Array<AlbumGetPayload<T>>>

    /**
     * Create a Album.
     * @param {AlbumCreateArgs} args - Arguments to create a Album.
     * @example
     * // Create one Album
     * const Album = await prisma.album.create({
     *   data: {
     *     // ... data to create a Album
     *   }
     * })
     * 
    **/
    create<T extends AlbumCreateArgs>(
      args: SelectSubset<T, AlbumCreateArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Create many Albums.
     *     @param {AlbumCreateManyArgs} args - Arguments to create many Albums.
     *     @example
     *     // Create many Albums
     *     const album = await prisma.album.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumCreateManyArgs>(
      args?: SelectSubset<T, AlbumCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Album.
     * @param {AlbumDeleteArgs} args - Arguments to delete one Album.
     * @example
     * // Delete one Album
     * const Album = await prisma.album.delete({
     *   where: {
     *     // ... filter to delete one Album
     *   }
     * })
     * 
    **/
    delete<T extends AlbumDeleteArgs>(
      args: SelectSubset<T, AlbumDeleteArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Update one Album.
     * @param {AlbumUpdateArgs} args - Arguments to update one Album.
     * @example
     * // Update one Album
     * const album = await prisma.album.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumUpdateArgs>(
      args: SelectSubset<T, AlbumUpdateArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Delete zero or more Albums.
     * @param {AlbumDeleteManyArgs} args - Arguments to filter Albums to delete.
     * @example
     * // Delete a few Albums
     * const { count } = await prisma.album.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumDeleteManyArgs>(
      args?: SelectSubset<T, AlbumDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Albums
     * const album = await prisma.album.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumUpdateManyArgs>(
      args: SelectSubset<T, AlbumUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Album.
     * @param {AlbumUpsertArgs} args - Arguments to update or create a Album.
     * @example
     * // Update or create a Album
     * const album = await prisma.album.upsert({
     *   create: {
     *     // ... data to create a Album
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Album we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumUpsertArgs>(
      args: SelectSubset<T, AlbumUpsertArgs>
    ): Prisma__AlbumClient<AlbumGetPayload<T>>

    /**
     * Count the number of Albums.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumCountArgs} args - Arguments to filter Albums to count.
     * @example
     * // Count the number of Albums
     * const count = await prisma.album.count({
     *   where: {
     *     // ... the filter for the Albums we want to count
     *   }
     * })
    **/
    count<T extends AlbumCountArgs>(
      args?: Subset<T, AlbumCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAggregateArgs>(args: Subset<T, AlbumAggregateArgs>): Prisma.PrismaPromise<GetAlbumAggregateType<T>>

    /**
     * Group by Album.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumGroupByArgs['orderBy'] }
        : { orderBy?: AlbumGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Album.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AlbumClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    availableMarkets<T extends Album$availableMarketsArgs= {}>(args?: Subset<T, Album$availableMarketsArgs>): Prisma.PrismaPromise<Array<AlbumAvailableMarketGetPayload<T>>| Null>;

    Artists<T extends Album$ArtistsArgs= {}>(args?: Subset<T, Album$ArtistsArgs>): Prisma.PrismaPromise<Array<AlbumProduceByArtistGetPayload<T>>| Null>;

    Tracks<T extends Album$TracksArgs= {}>(args?: Subset<T, Album$TracksArgs>): Prisma.PrismaPromise<Array<TrackGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Album base type for findUnique actions
   */
  export type AlbumFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }

  /**
   * Album findUnique
   */
  export interface AlbumFindUniqueArgs extends AlbumFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Album findUniqueOrThrow
   */
  export type AlbumFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
    /**
     * Filter, which Album to fetch.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album base type for findFirst actions
   */
  export type AlbumFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: Enumerable<AlbumScalarFieldEnum>
  }

  /**
   * Album findFirst
   */
  export interface AlbumFindFirstArgs extends AlbumFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Album findFirstOrThrow
   */
  export type AlbumFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
    /**
     * Filter, which Album to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Albums.
     */
    distinct?: Enumerable<AlbumScalarFieldEnum>
  }


  /**
   * Album findMany
   */
  export type AlbumFindManyArgs = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
    /**
     * Filter, which Albums to fetch.
     */
    where?: AlbumWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Albums to fetch.
     */
    orderBy?: Enumerable<AlbumOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Albums.
     */
    cursor?: AlbumWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Albums from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Albums.
     */
    skip?: number
    distinct?: Enumerable<AlbumScalarFieldEnum>
  }


  /**
   * Album create
   */
  export type AlbumCreateArgs = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
    /**
     * The data needed to create a Album.
     */
    data: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
  }


  /**
   * Album createMany
   */
  export type AlbumCreateManyArgs = {
    /**
     * The data used to create many Albums.
     */
    data: Enumerable<AlbumCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Album update
   */
  export type AlbumUpdateArgs = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
    /**
     * The data needed to update a Album.
     */
    data: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
    /**
     * Choose, which Album to update.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album updateMany
   */
  export type AlbumUpdateManyArgs = {
    /**
     * The data used to update Albums.
     */
    data: XOR<AlbumUpdateManyMutationInput, AlbumUncheckedUpdateManyInput>
    /**
     * Filter which Albums to update
     */
    where?: AlbumWhereInput
  }


  /**
   * Album upsert
   */
  export type AlbumUpsertArgs = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
    /**
     * The filter to search for the Album to update in case it exists.
     */
    where: AlbumWhereUniqueInput
    /**
     * In case the Album found by the `where` argument doesn't exist, create a new Album with this data.
     */
    create: XOR<AlbumCreateInput, AlbumUncheckedCreateInput>
    /**
     * In case the Album was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumUpdateInput, AlbumUncheckedUpdateInput>
  }


  /**
   * Album delete
   */
  export type AlbumDeleteArgs = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
    /**
     * Filter which Album to delete.
     */
    where: AlbumWhereUniqueInput
  }


  /**
   * Album deleteMany
   */
  export type AlbumDeleteManyArgs = {
    /**
     * Filter which Albums to delete
     */
    where?: AlbumWhereInput
  }


  /**
   * Album.availableMarkets
   */
  export type Album$availableMarketsArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    where?: AlbumAvailableMarketWhereInput
    orderBy?: Enumerable<AlbumAvailableMarketOrderByWithRelationInput>
    cursor?: AlbumAvailableMarketWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AlbumAvailableMarketScalarFieldEnum>
  }


  /**
   * Album.Artists
   */
  export type Album$ArtistsArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    where?: AlbumProduceByArtistWhereInput
    orderBy?: Enumerable<AlbumProduceByArtistOrderByWithRelationInput>
    cursor?: AlbumProduceByArtistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<AlbumProduceByArtistScalarFieldEnum>
  }


  /**
   * Album.Tracks
   */
  export type Album$TracksArgs = {
    /**
     * Select specific fields to fetch from the Track
     */
    select?: TrackSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackInclude | null
    where?: TrackWhereInput
    orderBy?: Enumerable<TrackOrderByWithRelationInput>
    cursor?: TrackWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TrackScalarFieldEnum>
  }


  /**
   * Album without action
   */
  export type AlbumArgs = {
    /**
     * Select specific fields to fetch from the Album
     */
    select?: AlbumSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumInclude | null
  }



  /**
   * Model Playlist
   */


  export type AggregatePlaylist = {
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  export type PlaylistAvgAggregateOutputType = {
    id: number | null
    tracksIds: number | null
    ownerId: number | null
  }

  export type PlaylistSumAggregateOutputType = {
    id: number | null
    tracksIds: number | null
    ownerId: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    collaborative: boolean | null
    description: string | null
    name: string | null
    public: boolean | null
    snapshotId: string | null
    primaryColor: string | null
    tracksIds: number | null
    ownerId: number | null
    imagesId: string | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    collaborative: boolean | null
    description: string | null
    name: string | null
    public: boolean | null
    snapshotId: string | null
    primaryColor: string | null
    tracksIds: number | null
    ownerId: number | null
    imagesId: string | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    collaborative: number
    description: number
    name: number
    public: number
    snapshotId: number
    primaryColor: number
    tracksIds: number
    ownerId: number
    imagesId: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    id?: true
    tracksIds?: true
    ownerId?: true
  }

  export type PlaylistSumAggregateInputType = {
    id?: true
    tracksIds?: true
    ownerId?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    collaborative?: true
    description?: true
    name?: true
    public?: true
    snapshotId?: true
    primaryColor?: true
    tracksIds?: true
    ownerId?: true
    imagesId?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    collaborative?: true
    description?: true
    name?: true
    public?: true
    snapshotId?: true
    primaryColor?: true
    tracksIds?: true
    ownerId?: true
    imagesId?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    collaborative?: true
    description?: true
    name?: true
    public?: true
    snapshotId?: true
    primaryColor?: true
    tracksIds?: true
    ownerId?: true
    imagesId?: true
    _all?: true
  }

  export type PlaylistAggregateArgs = {
    /**
     * Filter which Playlist to aggregate.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: Enumerable<PlaylistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Playlists
    **/
    _count?: true | PlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMaxAggregateInputType
  }

  export type GetPlaylistAggregateType<T extends PlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylist[P]>
      : GetScalarType<T[P], AggregatePlaylist[P]>
  }




  export type PlaylistGroupByArgs = {
    where?: PlaylistWhereInput
    orderBy?: Enumerable<PlaylistOrderByWithAggregationInput>
    by: PlaylistScalarFieldEnum[]
    having?: PlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistCountAggregateInputType | true
    _avg?: PlaylistAvgAggregateInputType
    _sum?: PlaylistSumAggregateInputType
    _min?: PlaylistMinAggregateInputType
    _max?: PlaylistMaxAggregateInputType
  }


  export type PlaylistGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    uid: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId: string | null
    primaryColor: string | null
    tracksIds: number
    ownerId: number
    imagesId: string | null
    _count: PlaylistCountAggregateOutputType | null
    _avg: PlaylistAvgAggregateOutputType | null
    _sum: PlaylistSumAggregateOutputType | null
    _min: PlaylistMinAggregateOutputType | null
    _max: PlaylistMaxAggregateOutputType | null
  }

  type GetPlaylistGroupByPayload<T extends PlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    collaborative?: boolean
    description?: boolean
    name?: boolean
    public?: boolean
    snapshotId?: boolean
    primaryColor?: boolean
    tracksIds?: boolean
    ownerId?: boolean
    imagesId?: boolean
    tracks?: boolean | Playlist$tracksArgs
    owner?: boolean | UserArgs
    followers?: boolean | Playlist$followersArgs
    _count?: boolean | PlaylistCountOutputTypeArgs
  }


  export type PlaylistInclude = {
    tracks?: boolean | Playlist$tracksArgs
    owner?: boolean | UserArgs
    followers?: boolean | Playlist$followersArgs
    _count?: boolean | PlaylistCountOutputTypeArgs
  }

  export type PlaylistGetPayload<S extends boolean | null | undefined | PlaylistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? Playlist :
    S extends undefined ? never :
    S extends { include: any } & (PlaylistArgs | PlaylistFindManyArgs)
    ? Playlist  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'tracks' ? Array < TracksOnPlaylistGetPayload<S['include'][P]>>  :
        P extends 'owner' ? UserGetPayload<S['include'][P]> :
        P extends 'followers' ? Array < PlaylistOnFollowerGetPayload<S['include'][P]>>  :
        P extends '_count' ? PlaylistCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PlaylistArgs | PlaylistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tracks' ? Array < TracksOnPlaylistGetPayload<S['select'][P]>>  :
        P extends 'owner' ? UserGetPayload<S['select'][P]> :
        P extends 'followers' ? Array < PlaylistOnFollowerGetPayload<S['select'][P]>>  :
        P extends '_count' ? PlaylistCountOutputTypeGetPayload<S['select'][P]> :  P extends keyof Playlist ? Playlist[P] : never
  } 
      : Playlist


  type PlaylistCountArgs = 
    Omit<PlaylistFindManyArgs, 'select' | 'include'> & {
      select?: PlaylistCountAggregateInputType | true
    }

  export interface PlaylistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one Playlist that matches the filter.
     * @param {PlaylistFindUniqueArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlaylistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'Playlist'> extends True ? Prisma__PlaylistClient<PlaylistGetPayload<T>> : Prisma__PlaylistClient<PlaylistGetPayload<T> | null, null>

    /**
     * Find one Playlist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistFindUniqueOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PlaylistFindUniqueOrThrowArgs>
    ): Prisma__PlaylistClient<PlaylistGetPayload<T>>

    /**
     * Find the first Playlist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlaylistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'Playlist'> extends True ? Prisma__PlaylistClient<PlaylistGetPayload<T>> : Prisma__PlaylistClient<PlaylistGetPayload<T> | null, null>

    /**
     * Find the first Playlist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindFirstOrThrowArgs} args - Arguments to find a Playlist
     * @example
     * // Get one Playlist
     * const playlist = await prisma.playlist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlaylistFindFirstOrThrowArgs>
    ): Prisma__PlaylistClient<PlaylistGetPayload<T>>

    /**
     * Find zero or more Playlists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Playlists
     * const playlists = await prisma.playlist.findMany()
     * 
     * // Get first 10 Playlists
     * const playlists = await prisma.playlist.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistWithIdOnly = await prisma.playlist.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaylistFindManyArgs>(
      args?: SelectSubset<T, PlaylistFindManyArgs>
    ): Prisma.PrismaPromise<Array<PlaylistGetPayload<T>>>

    /**
     * Create a Playlist.
     * @param {PlaylistCreateArgs} args - Arguments to create a Playlist.
     * @example
     * // Create one Playlist
     * const Playlist = await prisma.playlist.create({
     *   data: {
     *     // ... data to create a Playlist
     *   }
     * })
     * 
    **/
    create<T extends PlaylistCreateArgs>(
      args: SelectSubset<T, PlaylistCreateArgs>
    ): Prisma__PlaylistClient<PlaylistGetPayload<T>>

    /**
     * Create many Playlists.
     *     @param {PlaylistCreateManyArgs} args - Arguments to create many Playlists.
     *     @example
     *     // Create many Playlists
     *     const playlist = await prisma.playlist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistCreateManyArgs>(
      args?: SelectSubset<T, PlaylistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Playlist.
     * @param {PlaylistDeleteArgs} args - Arguments to delete one Playlist.
     * @example
     * // Delete one Playlist
     * const Playlist = await prisma.playlist.delete({
     *   where: {
     *     // ... filter to delete one Playlist
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistDeleteArgs>(
      args: SelectSubset<T, PlaylistDeleteArgs>
    ): Prisma__PlaylistClient<PlaylistGetPayload<T>>

    /**
     * Update one Playlist.
     * @param {PlaylistUpdateArgs} args - Arguments to update one Playlist.
     * @example
     * // Update one Playlist
     * const playlist = await prisma.playlist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistUpdateArgs>(
      args: SelectSubset<T, PlaylistUpdateArgs>
    ): Prisma__PlaylistClient<PlaylistGetPayload<T>>

    /**
     * Delete zero or more Playlists.
     * @param {PlaylistDeleteManyArgs} args - Arguments to filter Playlists to delete.
     * @example
     * // Delete a few Playlists
     * const { count } = await prisma.playlist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistDeleteManyArgs>(
      args?: SelectSubset<T, PlaylistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Playlists
     * const playlist = await prisma.playlist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistUpdateManyArgs>(
      args: SelectSubset<T, PlaylistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Playlist.
     * @param {PlaylistUpsertArgs} args - Arguments to update or create a Playlist.
     * @example
     * // Update or create a Playlist
     * const playlist = await prisma.playlist.upsert({
     *   create: {
     *     // ... data to create a Playlist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Playlist we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistUpsertArgs>(
      args: SelectSubset<T, PlaylistUpsertArgs>
    ): Prisma__PlaylistClient<PlaylistGetPayload<T>>

    /**
     * Count the number of Playlists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistCountArgs} args - Arguments to filter Playlists to count.
     * @example
     * // Count the number of Playlists
     * const count = await prisma.playlist.count({
     *   where: {
     *     // ... the filter for the Playlists we want to count
     *   }
     * })
    **/
    count<T extends PlaylistCountArgs>(
      args?: Subset<T, PlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistAggregateArgs>(args: Subset<T, PlaylistAggregateArgs>): Prisma.PrismaPromise<GetPlaylistAggregateType<T>>

    /**
     * Group by Playlist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for Playlist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlaylistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    tracks<T extends Playlist$tracksArgs= {}>(args?: Subset<T, Playlist$tracksArgs>): Prisma.PrismaPromise<Array<TracksOnPlaylistGetPayload<T>>| Null>;

    owner<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    followers<T extends Playlist$followersArgs= {}>(args?: Subset<T, Playlist$followersArgs>): Prisma.PrismaPromise<Array<PlaylistOnFollowerGetPayload<T>>| Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * Playlist base type for findUnique actions
   */
  export type PlaylistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }

  /**
   * Playlist findUnique
   */
  export interface PlaylistFindUniqueArgs extends PlaylistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Playlist findUniqueOrThrow
   */
  export type PlaylistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    /**
     * Filter, which Playlist to fetch.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist base type for findFirst actions
   */
  export type PlaylistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: Enumerable<PlaylistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: Enumerable<PlaylistScalarFieldEnum>
  }

  /**
   * Playlist findFirst
   */
  export interface PlaylistFindFirstArgs extends PlaylistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * Playlist findFirstOrThrow
   */
  export type PlaylistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    /**
     * Filter, which Playlist to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: Enumerable<PlaylistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Playlists.
     */
    distinct?: Enumerable<PlaylistScalarFieldEnum>
  }


  /**
   * Playlist findMany
   */
  export type PlaylistFindManyArgs = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    /**
     * Filter, which Playlists to fetch.
     */
    where?: PlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Playlists to fetch.
     */
    orderBy?: Enumerable<PlaylistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Playlists.
     */
    cursor?: PlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Playlists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Playlists.
     */
    skip?: number
    distinct?: Enumerable<PlaylistScalarFieldEnum>
  }


  /**
   * Playlist create
   */
  export type PlaylistCreateArgs = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    /**
     * The data needed to create a Playlist.
     */
    data: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
  }


  /**
   * Playlist createMany
   */
  export type PlaylistCreateManyArgs = {
    /**
     * The data used to create many Playlists.
     */
    data: Enumerable<PlaylistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * Playlist update
   */
  export type PlaylistUpdateArgs = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    /**
     * The data needed to update a Playlist.
     */
    data: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
    /**
     * Choose, which Playlist to update.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist updateMany
   */
  export type PlaylistUpdateManyArgs = {
    /**
     * The data used to update Playlists.
     */
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyInput>
    /**
     * Filter which Playlists to update
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist upsert
   */
  export type PlaylistUpsertArgs = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    /**
     * The filter to search for the Playlist to update in case it exists.
     */
    where: PlaylistWhereUniqueInput
    /**
     * In case the Playlist found by the `where` argument doesn't exist, create a new Playlist with this data.
     */
    create: XOR<PlaylistCreateInput, PlaylistUncheckedCreateInput>
    /**
     * In case the Playlist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistUpdateInput, PlaylistUncheckedUpdateInput>
  }


  /**
   * Playlist delete
   */
  export type PlaylistDeleteArgs = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
    /**
     * Filter which Playlist to delete.
     */
    where: PlaylistWhereUniqueInput
  }


  /**
   * Playlist deleteMany
   */
  export type PlaylistDeleteManyArgs = {
    /**
     * Filter which Playlists to delete
     */
    where?: PlaylistWhereInput
  }


  /**
   * Playlist.tracks
   */
  export type Playlist$tracksArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    where?: TracksOnPlaylistWhereInput
    orderBy?: Enumerable<TracksOnPlaylistOrderByWithRelationInput>
    cursor?: TracksOnPlaylistWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<TracksOnPlaylistScalarFieldEnum>
  }


  /**
   * Playlist.followers
   */
  export type Playlist$followersArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    where?: PlaylistOnFollowerWhereInput
    orderBy?: Enumerable<PlaylistOnFollowerOrderByWithRelationInput>
    cursor?: PlaylistOnFollowerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: Enumerable<PlaylistOnFollowerScalarFieldEnum>
  }


  /**
   * Playlist without action
   */
  export type PlaylistArgs = {
    /**
     * Select specific fields to fetch from the Playlist
     */
    select?: PlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistInclude | null
  }



  /**
   * Model TracksOnPlaylist
   */


  export type AggregateTracksOnPlaylist = {
    _count: TracksOnPlaylistCountAggregateOutputType | null
    _avg: TracksOnPlaylistAvgAggregateOutputType | null
    _sum: TracksOnPlaylistSumAggregateOutputType | null
    _min: TracksOnPlaylistMinAggregateOutputType | null
    _max: TracksOnPlaylistMaxAggregateOutputType | null
  }

  export type TracksOnPlaylistAvgAggregateOutputType = {
    playlistId: number | null
    trackId: number | null
  }

  export type TracksOnPlaylistSumAggregateOutputType = {
    playlistId: number | null
    trackId: number | null
  }

  export type TracksOnPlaylistMinAggregateOutputType = {
    playlistId: number | null
    trackId: number | null
  }

  export type TracksOnPlaylistMaxAggregateOutputType = {
    playlistId: number | null
    trackId: number | null
  }

  export type TracksOnPlaylistCountAggregateOutputType = {
    playlistId: number
    trackId: number
    _all: number
  }


  export type TracksOnPlaylistAvgAggregateInputType = {
    playlistId?: true
    trackId?: true
  }

  export type TracksOnPlaylistSumAggregateInputType = {
    playlistId?: true
    trackId?: true
  }

  export type TracksOnPlaylistMinAggregateInputType = {
    playlistId?: true
    trackId?: true
  }

  export type TracksOnPlaylistMaxAggregateInputType = {
    playlistId?: true
    trackId?: true
  }

  export type TracksOnPlaylistCountAggregateInputType = {
    playlistId?: true
    trackId?: true
    _all?: true
  }

  export type TracksOnPlaylistAggregateArgs = {
    /**
     * Filter which TracksOnPlaylist to aggregate.
     */
    where?: TracksOnPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksOnPlaylists to fetch.
     */
    orderBy?: Enumerable<TracksOnPlaylistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TracksOnPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksOnPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksOnPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TracksOnPlaylists
    **/
    _count?: true | TracksOnPlaylistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TracksOnPlaylistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TracksOnPlaylistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TracksOnPlaylistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TracksOnPlaylistMaxAggregateInputType
  }

  export type GetTracksOnPlaylistAggregateType<T extends TracksOnPlaylistAggregateArgs> = {
        [P in keyof T & keyof AggregateTracksOnPlaylist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracksOnPlaylist[P]>
      : GetScalarType<T[P], AggregateTracksOnPlaylist[P]>
  }




  export type TracksOnPlaylistGroupByArgs = {
    where?: TracksOnPlaylistWhereInput
    orderBy?: Enumerable<TracksOnPlaylistOrderByWithAggregationInput>
    by: TracksOnPlaylistScalarFieldEnum[]
    having?: TracksOnPlaylistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TracksOnPlaylistCountAggregateInputType | true
    _avg?: TracksOnPlaylistAvgAggregateInputType
    _sum?: TracksOnPlaylistSumAggregateInputType
    _min?: TracksOnPlaylistMinAggregateInputType
    _max?: TracksOnPlaylistMaxAggregateInputType
  }


  export type TracksOnPlaylistGroupByOutputType = {
    playlistId: number
    trackId: number
    _count: TracksOnPlaylistCountAggregateOutputType | null
    _avg: TracksOnPlaylistAvgAggregateOutputType | null
    _sum: TracksOnPlaylistSumAggregateOutputType | null
    _min: TracksOnPlaylistMinAggregateOutputType | null
    _max: TracksOnPlaylistMaxAggregateOutputType | null
  }

  type GetTracksOnPlaylistGroupByPayload<T extends TracksOnPlaylistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TracksOnPlaylistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TracksOnPlaylistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TracksOnPlaylistGroupByOutputType[P]>
            : GetScalarType<T[P], TracksOnPlaylistGroupByOutputType[P]>
        }
      >
    >


  export type TracksOnPlaylistSelect = {
    playlistId?: boolean
    trackId?: boolean
    Playlist?: boolean | PlaylistArgs
    Track?: boolean | TrackArgs
  }


  export type TracksOnPlaylistInclude = {
    Playlist?: boolean | PlaylistArgs
    Track?: boolean | TrackArgs
  }

  export type TracksOnPlaylistGetPayload<S extends boolean | null | undefined | TracksOnPlaylistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TracksOnPlaylist :
    S extends undefined ? never :
    S extends { include: any } & (TracksOnPlaylistArgs | TracksOnPlaylistFindManyArgs)
    ? TracksOnPlaylist  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Playlist' ? PlaylistGetPayload<S['include'][P]> :
        P extends 'Track' ? TrackGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TracksOnPlaylistArgs | TracksOnPlaylistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Playlist' ? PlaylistGetPayload<S['select'][P]> :
        P extends 'Track' ? TrackGetPayload<S['select'][P]> :  P extends keyof TracksOnPlaylist ? TracksOnPlaylist[P] : never
  } 
      : TracksOnPlaylist


  type TracksOnPlaylistCountArgs = 
    Omit<TracksOnPlaylistFindManyArgs, 'select' | 'include'> & {
      select?: TracksOnPlaylistCountAggregateInputType | true
    }

  export interface TracksOnPlaylistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TracksOnPlaylist that matches the filter.
     * @param {TracksOnPlaylistFindUniqueArgs} args - Arguments to find a TracksOnPlaylist
     * @example
     * // Get one TracksOnPlaylist
     * const tracksOnPlaylist = await prisma.tracksOnPlaylist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TracksOnPlaylistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TracksOnPlaylistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TracksOnPlaylist'> extends True ? Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T>> : Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T> | null, null>

    /**
     * Find one TracksOnPlaylist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TracksOnPlaylistFindUniqueOrThrowArgs} args - Arguments to find a TracksOnPlaylist
     * @example
     * // Get one TracksOnPlaylist
     * const tracksOnPlaylist = await prisma.tracksOnPlaylist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TracksOnPlaylistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TracksOnPlaylistFindUniqueOrThrowArgs>
    ): Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T>>

    /**
     * Find the first TracksOnPlaylist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnPlaylistFindFirstArgs} args - Arguments to find a TracksOnPlaylist
     * @example
     * // Get one TracksOnPlaylist
     * const tracksOnPlaylist = await prisma.tracksOnPlaylist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TracksOnPlaylistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TracksOnPlaylistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TracksOnPlaylist'> extends True ? Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T>> : Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T> | null, null>

    /**
     * Find the first TracksOnPlaylist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnPlaylistFindFirstOrThrowArgs} args - Arguments to find a TracksOnPlaylist
     * @example
     * // Get one TracksOnPlaylist
     * const tracksOnPlaylist = await prisma.tracksOnPlaylist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TracksOnPlaylistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TracksOnPlaylistFindFirstOrThrowArgs>
    ): Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T>>

    /**
     * Find zero or more TracksOnPlaylists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnPlaylistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TracksOnPlaylists
     * const tracksOnPlaylists = await prisma.tracksOnPlaylist.findMany()
     * 
     * // Get first 10 TracksOnPlaylists
     * const tracksOnPlaylists = await prisma.tracksOnPlaylist.findMany({ take: 10 })
     * 
     * // Only select the `playlistId`
     * const tracksOnPlaylistWithPlaylistIdOnly = await prisma.tracksOnPlaylist.findMany({ select: { playlistId: true } })
     * 
    **/
    findMany<T extends TracksOnPlaylistFindManyArgs>(
      args?: SelectSubset<T, TracksOnPlaylistFindManyArgs>
    ): Prisma.PrismaPromise<Array<TracksOnPlaylistGetPayload<T>>>

    /**
     * Create a TracksOnPlaylist.
     * @param {TracksOnPlaylistCreateArgs} args - Arguments to create a TracksOnPlaylist.
     * @example
     * // Create one TracksOnPlaylist
     * const TracksOnPlaylist = await prisma.tracksOnPlaylist.create({
     *   data: {
     *     // ... data to create a TracksOnPlaylist
     *   }
     * })
     * 
    **/
    create<T extends TracksOnPlaylistCreateArgs>(
      args: SelectSubset<T, TracksOnPlaylistCreateArgs>
    ): Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T>>

    /**
     * Create many TracksOnPlaylists.
     *     @param {TracksOnPlaylistCreateManyArgs} args - Arguments to create many TracksOnPlaylists.
     *     @example
     *     // Create many TracksOnPlaylists
     *     const tracksOnPlaylist = await prisma.tracksOnPlaylist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TracksOnPlaylistCreateManyArgs>(
      args?: SelectSubset<T, TracksOnPlaylistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TracksOnPlaylist.
     * @param {TracksOnPlaylistDeleteArgs} args - Arguments to delete one TracksOnPlaylist.
     * @example
     * // Delete one TracksOnPlaylist
     * const TracksOnPlaylist = await prisma.tracksOnPlaylist.delete({
     *   where: {
     *     // ... filter to delete one TracksOnPlaylist
     *   }
     * })
     * 
    **/
    delete<T extends TracksOnPlaylistDeleteArgs>(
      args: SelectSubset<T, TracksOnPlaylistDeleteArgs>
    ): Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T>>

    /**
     * Update one TracksOnPlaylist.
     * @param {TracksOnPlaylistUpdateArgs} args - Arguments to update one TracksOnPlaylist.
     * @example
     * // Update one TracksOnPlaylist
     * const tracksOnPlaylist = await prisma.tracksOnPlaylist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TracksOnPlaylistUpdateArgs>(
      args: SelectSubset<T, TracksOnPlaylistUpdateArgs>
    ): Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T>>

    /**
     * Delete zero or more TracksOnPlaylists.
     * @param {TracksOnPlaylistDeleteManyArgs} args - Arguments to filter TracksOnPlaylists to delete.
     * @example
     * // Delete a few TracksOnPlaylists
     * const { count } = await prisma.tracksOnPlaylist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TracksOnPlaylistDeleteManyArgs>(
      args?: SelectSubset<T, TracksOnPlaylistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TracksOnPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnPlaylistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TracksOnPlaylists
     * const tracksOnPlaylist = await prisma.tracksOnPlaylist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TracksOnPlaylistUpdateManyArgs>(
      args: SelectSubset<T, TracksOnPlaylistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TracksOnPlaylist.
     * @param {TracksOnPlaylistUpsertArgs} args - Arguments to update or create a TracksOnPlaylist.
     * @example
     * // Update or create a TracksOnPlaylist
     * const tracksOnPlaylist = await prisma.tracksOnPlaylist.upsert({
     *   create: {
     *     // ... data to create a TracksOnPlaylist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TracksOnPlaylist we want to update
     *   }
     * })
    **/
    upsert<T extends TracksOnPlaylistUpsertArgs>(
      args: SelectSubset<T, TracksOnPlaylistUpsertArgs>
    ): Prisma__TracksOnPlaylistClient<TracksOnPlaylistGetPayload<T>>

    /**
     * Count the number of TracksOnPlaylists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnPlaylistCountArgs} args - Arguments to filter TracksOnPlaylists to count.
     * @example
     * // Count the number of TracksOnPlaylists
     * const count = await prisma.tracksOnPlaylist.count({
     *   where: {
     *     // ... the filter for the TracksOnPlaylists we want to count
     *   }
     * })
    **/
    count<T extends TracksOnPlaylistCountArgs>(
      args?: Subset<T, TracksOnPlaylistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TracksOnPlaylistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TracksOnPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnPlaylistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TracksOnPlaylistAggregateArgs>(args: Subset<T, TracksOnPlaylistAggregateArgs>): Prisma.PrismaPromise<GetTracksOnPlaylistAggregateType<T>>

    /**
     * Group by TracksOnPlaylist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksOnPlaylistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TracksOnPlaylistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TracksOnPlaylistGroupByArgs['orderBy'] }
        : { orderBy?: TracksOnPlaylistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TracksOnPlaylistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracksOnPlaylistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TracksOnPlaylist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TracksOnPlaylistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Playlist<T extends PlaylistArgs= {}>(args?: Subset<T, PlaylistArgs>): Prisma__PlaylistClient<PlaylistGetPayload<T> | Null>;

    Track<T extends TrackArgs= {}>(args?: Subset<T, TrackArgs>): Prisma__TrackClient<TrackGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TracksOnPlaylist base type for findUnique actions
   */
  export type TracksOnPlaylistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    /**
     * Filter, which TracksOnPlaylist to fetch.
     */
    where: TracksOnPlaylistWhereUniqueInput
  }

  /**
   * TracksOnPlaylist findUnique
   */
  export interface TracksOnPlaylistFindUniqueArgs extends TracksOnPlaylistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TracksOnPlaylist findUniqueOrThrow
   */
  export type TracksOnPlaylistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    /**
     * Filter, which TracksOnPlaylist to fetch.
     */
    where: TracksOnPlaylistWhereUniqueInput
  }


  /**
   * TracksOnPlaylist base type for findFirst actions
   */
  export type TracksOnPlaylistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    /**
     * Filter, which TracksOnPlaylist to fetch.
     */
    where?: TracksOnPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksOnPlaylists to fetch.
     */
    orderBy?: Enumerable<TracksOnPlaylistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TracksOnPlaylists.
     */
    cursor?: TracksOnPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksOnPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksOnPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TracksOnPlaylists.
     */
    distinct?: Enumerable<TracksOnPlaylistScalarFieldEnum>
  }

  /**
   * TracksOnPlaylist findFirst
   */
  export interface TracksOnPlaylistFindFirstArgs extends TracksOnPlaylistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TracksOnPlaylist findFirstOrThrow
   */
  export type TracksOnPlaylistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    /**
     * Filter, which TracksOnPlaylist to fetch.
     */
    where?: TracksOnPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksOnPlaylists to fetch.
     */
    orderBy?: Enumerable<TracksOnPlaylistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TracksOnPlaylists.
     */
    cursor?: TracksOnPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksOnPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksOnPlaylists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TracksOnPlaylists.
     */
    distinct?: Enumerable<TracksOnPlaylistScalarFieldEnum>
  }


  /**
   * TracksOnPlaylist findMany
   */
  export type TracksOnPlaylistFindManyArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    /**
     * Filter, which TracksOnPlaylists to fetch.
     */
    where?: TracksOnPlaylistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksOnPlaylists to fetch.
     */
    orderBy?: Enumerable<TracksOnPlaylistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TracksOnPlaylists.
     */
    cursor?: TracksOnPlaylistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksOnPlaylists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksOnPlaylists.
     */
    skip?: number
    distinct?: Enumerable<TracksOnPlaylistScalarFieldEnum>
  }


  /**
   * TracksOnPlaylist create
   */
  export type TracksOnPlaylistCreateArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    /**
     * The data needed to create a TracksOnPlaylist.
     */
    data: XOR<TracksOnPlaylistCreateInput, TracksOnPlaylistUncheckedCreateInput>
  }


  /**
   * TracksOnPlaylist createMany
   */
  export type TracksOnPlaylistCreateManyArgs = {
    /**
     * The data used to create many TracksOnPlaylists.
     */
    data: Enumerable<TracksOnPlaylistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TracksOnPlaylist update
   */
  export type TracksOnPlaylistUpdateArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    /**
     * The data needed to update a TracksOnPlaylist.
     */
    data: XOR<TracksOnPlaylistUpdateInput, TracksOnPlaylistUncheckedUpdateInput>
    /**
     * Choose, which TracksOnPlaylist to update.
     */
    where: TracksOnPlaylistWhereUniqueInput
  }


  /**
   * TracksOnPlaylist updateMany
   */
  export type TracksOnPlaylistUpdateManyArgs = {
    /**
     * The data used to update TracksOnPlaylists.
     */
    data: XOR<TracksOnPlaylistUpdateManyMutationInput, TracksOnPlaylistUncheckedUpdateManyInput>
    /**
     * Filter which TracksOnPlaylists to update
     */
    where?: TracksOnPlaylistWhereInput
  }


  /**
   * TracksOnPlaylist upsert
   */
  export type TracksOnPlaylistUpsertArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    /**
     * The filter to search for the TracksOnPlaylist to update in case it exists.
     */
    where: TracksOnPlaylistWhereUniqueInput
    /**
     * In case the TracksOnPlaylist found by the `where` argument doesn't exist, create a new TracksOnPlaylist with this data.
     */
    create: XOR<TracksOnPlaylistCreateInput, TracksOnPlaylistUncheckedCreateInput>
    /**
     * In case the TracksOnPlaylist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TracksOnPlaylistUpdateInput, TracksOnPlaylistUncheckedUpdateInput>
  }


  /**
   * TracksOnPlaylist delete
   */
  export type TracksOnPlaylistDeleteArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
    /**
     * Filter which TracksOnPlaylist to delete.
     */
    where: TracksOnPlaylistWhereUniqueInput
  }


  /**
   * TracksOnPlaylist deleteMany
   */
  export type TracksOnPlaylistDeleteManyArgs = {
    /**
     * Filter which TracksOnPlaylists to delete
     */
    where?: TracksOnPlaylistWhereInput
  }


  /**
   * TracksOnPlaylist without action
   */
  export type TracksOnPlaylistArgs = {
    /**
     * Select specific fields to fetch from the TracksOnPlaylist
     */
    select?: TracksOnPlaylistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksOnPlaylistInclude | null
  }



  /**
   * Model TracksAvailableMarket
   */


  export type AggregateTracksAvailableMarket = {
    _count: TracksAvailableMarketCountAggregateOutputType | null
    _avg: TracksAvailableMarketAvgAggregateOutputType | null
    _sum: TracksAvailableMarketSumAggregateOutputType | null
    _min: TracksAvailableMarketMinAggregateOutputType | null
    _max: TracksAvailableMarketMaxAggregateOutputType | null
  }

  export type TracksAvailableMarketAvgAggregateOutputType = {
    tagId: number | null
    trackId: number | null
  }

  export type TracksAvailableMarketSumAggregateOutputType = {
    tagId: number | null
    trackId: number | null
  }

  export type TracksAvailableMarketMinAggregateOutputType = {
    tagId: number | null
    trackId: number | null
  }

  export type TracksAvailableMarketMaxAggregateOutputType = {
    tagId: number | null
    trackId: number | null
  }

  export type TracksAvailableMarketCountAggregateOutputType = {
    tagId: number
    trackId: number
    _all: number
  }


  export type TracksAvailableMarketAvgAggregateInputType = {
    tagId?: true
    trackId?: true
  }

  export type TracksAvailableMarketSumAggregateInputType = {
    tagId?: true
    trackId?: true
  }

  export type TracksAvailableMarketMinAggregateInputType = {
    tagId?: true
    trackId?: true
  }

  export type TracksAvailableMarketMaxAggregateInputType = {
    tagId?: true
    trackId?: true
  }

  export type TracksAvailableMarketCountAggregateInputType = {
    tagId?: true
    trackId?: true
    _all?: true
  }

  export type TracksAvailableMarketAggregateArgs = {
    /**
     * Filter which TracksAvailableMarket to aggregate.
     */
    where?: TracksAvailableMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksAvailableMarkets to fetch.
     */
    orderBy?: Enumerable<TracksAvailableMarketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TracksAvailableMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksAvailableMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksAvailableMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TracksAvailableMarkets
    **/
    _count?: true | TracksAvailableMarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TracksAvailableMarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TracksAvailableMarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TracksAvailableMarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TracksAvailableMarketMaxAggregateInputType
  }

  export type GetTracksAvailableMarketAggregateType<T extends TracksAvailableMarketAggregateArgs> = {
        [P in keyof T & keyof AggregateTracksAvailableMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTracksAvailableMarket[P]>
      : GetScalarType<T[P], AggregateTracksAvailableMarket[P]>
  }




  export type TracksAvailableMarketGroupByArgs = {
    where?: TracksAvailableMarketWhereInput
    orderBy?: Enumerable<TracksAvailableMarketOrderByWithAggregationInput>
    by: TracksAvailableMarketScalarFieldEnum[]
    having?: TracksAvailableMarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TracksAvailableMarketCountAggregateInputType | true
    _avg?: TracksAvailableMarketAvgAggregateInputType
    _sum?: TracksAvailableMarketSumAggregateInputType
    _min?: TracksAvailableMarketMinAggregateInputType
    _max?: TracksAvailableMarketMaxAggregateInputType
  }


  export type TracksAvailableMarketGroupByOutputType = {
    tagId: number
    trackId: number
    _count: TracksAvailableMarketCountAggregateOutputType | null
    _avg: TracksAvailableMarketAvgAggregateOutputType | null
    _sum: TracksAvailableMarketSumAggregateOutputType | null
    _min: TracksAvailableMarketMinAggregateOutputType | null
    _max: TracksAvailableMarketMaxAggregateOutputType | null
  }

  type GetTracksAvailableMarketGroupByPayload<T extends TracksAvailableMarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TracksAvailableMarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TracksAvailableMarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TracksAvailableMarketGroupByOutputType[P]>
            : GetScalarType<T[P], TracksAvailableMarketGroupByOutputType[P]>
        }
      >
    >


  export type TracksAvailableMarketSelect = {
    tagId?: boolean
    trackId?: boolean
    Tag?: boolean | TagArgs
    Track?: boolean | TrackArgs
  }


  export type TracksAvailableMarketInclude = {
    Tag?: boolean | TagArgs
    Track?: boolean | TrackArgs
  }

  export type TracksAvailableMarketGetPayload<S extends boolean | null | undefined | TracksAvailableMarketArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TracksAvailableMarket :
    S extends undefined ? never :
    S extends { include: any } & (TracksAvailableMarketArgs | TracksAvailableMarketFindManyArgs)
    ? TracksAvailableMarket  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Tag' ? TagGetPayload<S['include'][P]> :
        P extends 'Track' ? TrackGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TracksAvailableMarketArgs | TracksAvailableMarketFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Tag' ? TagGetPayload<S['select'][P]> :
        P extends 'Track' ? TrackGetPayload<S['select'][P]> :  P extends keyof TracksAvailableMarket ? TracksAvailableMarket[P] : never
  } 
      : TracksAvailableMarket


  type TracksAvailableMarketCountArgs = 
    Omit<TracksAvailableMarketFindManyArgs, 'select' | 'include'> & {
      select?: TracksAvailableMarketCountAggregateInputType | true
    }

  export interface TracksAvailableMarketDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TracksAvailableMarket that matches the filter.
     * @param {TracksAvailableMarketFindUniqueArgs} args - Arguments to find a TracksAvailableMarket
     * @example
     * // Get one TracksAvailableMarket
     * const tracksAvailableMarket = await prisma.tracksAvailableMarket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TracksAvailableMarketFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TracksAvailableMarketFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TracksAvailableMarket'> extends True ? Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T>> : Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T> | null, null>

    /**
     * Find one TracksAvailableMarket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TracksAvailableMarketFindUniqueOrThrowArgs} args - Arguments to find a TracksAvailableMarket
     * @example
     * // Get one TracksAvailableMarket
     * const tracksAvailableMarket = await prisma.tracksAvailableMarket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TracksAvailableMarketFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TracksAvailableMarketFindUniqueOrThrowArgs>
    ): Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T>>

    /**
     * Find the first TracksAvailableMarket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAvailableMarketFindFirstArgs} args - Arguments to find a TracksAvailableMarket
     * @example
     * // Get one TracksAvailableMarket
     * const tracksAvailableMarket = await prisma.tracksAvailableMarket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TracksAvailableMarketFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TracksAvailableMarketFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TracksAvailableMarket'> extends True ? Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T>> : Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T> | null, null>

    /**
     * Find the first TracksAvailableMarket that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAvailableMarketFindFirstOrThrowArgs} args - Arguments to find a TracksAvailableMarket
     * @example
     * // Get one TracksAvailableMarket
     * const tracksAvailableMarket = await prisma.tracksAvailableMarket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TracksAvailableMarketFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TracksAvailableMarketFindFirstOrThrowArgs>
    ): Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T>>

    /**
     * Find zero or more TracksAvailableMarkets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAvailableMarketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TracksAvailableMarkets
     * const tracksAvailableMarkets = await prisma.tracksAvailableMarket.findMany()
     * 
     * // Get first 10 TracksAvailableMarkets
     * const tracksAvailableMarkets = await prisma.tracksAvailableMarket.findMany({ take: 10 })
     * 
     * // Only select the `tagId`
     * const tracksAvailableMarketWithTagIdOnly = await prisma.tracksAvailableMarket.findMany({ select: { tagId: true } })
     * 
    **/
    findMany<T extends TracksAvailableMarketFindManyArgs>(
      args?: SelectSubset<T, TracksAvailableMarketFindManyArgs>
    ): Prisma.PrismaPromise<Array<TracksAvailableMarketGetPayload<T>>>

    /**
     * Create a TracksAvailableMarket.
     * @param {TracksAvailableMarketCreateArgs} args - Arguments to create a TracksAvailableMarket.
     * @example
     * // Create one TracksAvailableMarket
     * const TracksAvailableMarket = await prisma.tracksAvailableMarket.create({
     *   data: {
     *     // ... data to create a TracksAvailableMarket
     *   }
     * })
     * 
    **/
    create<T extends TracksAvailableMarketCreateArgs>(
      args: SelectSubset<T, TracksAvailableMarketCreateArgs>
    ): Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T>>

    /**
     * Create many TracksAvailableMarkets.
     *     @param {TracksAvailableMarketCreateManyArgs} args - Arguments to create many TracksAvailableMarkets.
     *     @example
     *     // Create many TracksAvailableMarkets
     *     const tracksAvailableMarket = await prisma.tracksAvailableMarket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TracksAvailableMarketCreateManyArgs>(
      args?: SelectSubset<T, TracksAvailableMarketCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TracksAvailableMarket.
     * @param {TracksAvailableMarketDeleteArgs} args - Arguments to delete one TracksAvailableMarket.
     * @example
     * // Delete one TracksAvailableMarket
     * const TracksAvailableMarket = await prisma.tracksAvailableMarket.delete({
     *   where: {
     *     // ... filter to delete one TracksAvailableMarket
     *   }
     * })
     * 
    **/
    delete<T extends TracksAvailableMarketDeleteArgs>(
      args: SelectSubset<T, TracksAvailableMarketDeleteArgs>
    ): Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T>>

    /**
     * Update one TracksAvailableMarket.
     * @param {TracksAvailableMarketUpdateArgs} args - Arguments to update one TracksAvailableMarket.
     * @example
     * // Update one TracksAvailableMarket
     * const tracksAvailableMarket = await prisma.tracksAvailableMarket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TracksAvailableMarketUpdateArgs>(
      args: SelectSubset<T, TracksAvailableMarketUpdateArgs>
    ): Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T>>

    /**
     * Delete zero or more TracksAvailableMarkets.
     * @param {TracksAvailableMarketDeleteManyArgs} args - Arguments to filter TracksAvailableMarkets to delete.
     * @example
     * // Delete a few TracksAvailableMarkets
     * const { count } = await prisma.tracksAvailableMarket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TracksAvailableMarketDeleteManyArgs>(
      args?: SelectSubset<T, TracksAvailableMarketDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TracksAvailableMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAvailableMarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TracksAvailableMarkets
     * const tracksAvailableMarket = await prisma.tracksAvailableMarket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TracksAvailableMarketUpdateManyArgs>(
      args: SelectSubset<T, TracksAvailableMarketUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TracksAvailableMarket.
     * @param {TracksAvailableMarketUpsertArgs} args - Arguments to update or create a TracksAvailableMarket.
     * @example
     * // Update or create a TracksAvailableMarket
     * const tracksAvailableMarket = await prisma.tracksAvailableMarket.upsert({
     *   create: {
     *     // ... data to create a TracksAvailableMarket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TracksAvailableMarket we want to update
     *   }
     * })
    **/
    upsert<T extends TracksAvailableMarketUpsertArgs>(
      args: SelectSubset<T, TracksAvailableMarketUpsertArgs>
    ): Prisma__TracksAvailableMarketClient<TracksAvailableMarketGetPayload<T>>

    /**
     * Count the number of TracksAvailableMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAvailableMarketCountArgs} args - Arguments to filter TracksAvailableMarkets to count.
     * @example
     * // Count the number of TracksAvailableMarkets
     * const count = await prisma.tracksAvailableMarket.count({
     *   where: {
     *     // ... the filter for the TracksAvailableMarkets we want to count
     *   }
     * })
    **/
    count<T extends TracksAvailableMarketCountArgs>(
      args?: Subset<T, TracksAvailableMarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TracksAvailableMarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TracksAvailableMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAvailableMarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TracksAvailableMarketAggregateArgs>(args: Subset<T, TracksAvailableMarketAggregateArgs>): Prisma.PrismaPromise<GetTracksAvailableMarketAggregateType<T>>

    /**
     * Group by TracksAvailableMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TracksAvailableMarketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TracksAvailableMarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TracksAvailableMarketGroupByArgs['orderBy'] }
        : { orderBy?: TracksAvailableMarketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TracksAvailableMarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTracksAvailableMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TracksAvailableMarket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TracksAvailableMarketClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Tag<T extends TagArgs= {}>(args?: Subset<T, TagArgs>): Prisma__TagClient<TagGetPayload<T> | Null>;

    Track<T extends TrackArgs= {}>(args?: Subset<T, TrackArgs>): Prisma__TrackClient<TrackGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TracksAvailableMarket base type for findUnique actions
   */
  export type TracksAvailableMarketFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    /**
     * Filter, which TracksAvailableMarket to fetch.
     */
    where: TracksAvailableMarketWhereUniqueInput
  }

  /**
   * TracksAvailableMarket findUnique
   */
  export interface TracksAvailableMarketFindUniqueArgs extends TracksAvailableMarketFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TracksAvailableMarket findUniqueOrThrow
   */
  export type TracksAvailableMarketFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    /**
     * Filter, which TracksAvailableMarket to fetch.
     */
    where: TracksAvailableMarketWhereUniqueInput
  }


  /**
   * TracksAvailableMarket base type for findFirst actions
   */
  export type TracksAvailableMarketFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    /**
     * Filter, which TracksAvailableMarket to fetch.
     */
    where?: TracksAvailableMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksAvailableMarkets to fetch.
     */
    orderBy?: Enumerable<TracksAvailableMarketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TracksAvailableMarkets.
     */
    cursor?: TracksAvailableMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksAvailableMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksAvailableMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TracksAvailableMarkets.
     */
    distinct?: Enumerable<TracksAvailableMarketScalarFieldEnum>
  }

  /**
   * TracksAvailableMarket findFirst
   */
  export interface TracksAvailableMarketFindFirstArgs extends TracksAvailableMarketFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TracksAvailableMarket findFirstOrThrow
   */
  export type TracksAvailableMarketFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    /**
     * Filter, which TracksAvailableMarket to fetch.
     */
    where?: TracksAvailableMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksAvailableMarkets to fetch.
     */
    orderBy?: Enumerable<TracksAvailableMarketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TracksAvailableMarkets.
     */
    cursor?: TracksAvailableMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksAvailableMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksAvailableMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TracksAvailableMarkets.
     */
    distinct?: Enumerable<TracksAvailableMarketScalarFieldEnum>
  }


  /**
   * TracksAvailableMarket findMany
   */
  export type TracksAvailableMarketFindManyArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    /**
     * Filter, which TracksAvailableMarkets to fetch.
     */
    where?: TracksAvailableMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TracksAvailableMarkets to fetch.
     */
    orderBy?: Enumerable<TracksAvailableMarketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TracksAvailableMarkets.
     */
    cursor?: TracksAvailableMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TracksAvailableMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TracksAvailableMarkets.
     */
    skip?: number
    distinct?: Enumerable<TracksAvailableMarketScalarFieldEnum>
  }


  /**
   * TracksAvailableMarket create
   */
  export type TracksAvailableMarketCreateArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    /**
     * The data needed to create a TracksAvailableMarket.
     */
    data: XOR<TracksAvailableMarketCreateInput, TracksAvailableMarketUncheckedCreateInput>
  }


  /**
   * TracksAvailableMarket createMany
   */
  export type TracksAvailableMarketCreateManyArgs = {
    /**
     * The data used to create many TracksAvailableMarkets.
     */
    data: Enumerable<TracksAvailableMarketCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TracksAvailableMarket update
   */
  export type TracksAvailableMarketUpdateArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    /**
     * The data needed to update a TracksAvailableMarket.
     */
    data: XOR<TracksAvailableMarketUpdateInput, TracksAvailableMarketUncheckedUpdateInput>
    /**
     * Choose, which TracksAvailableMarket to update.
     */
    where: TracksAvailableMarketWhereUniqueInput
  }


  /**
   * TracksAvailableMarket updateMany
   */
  export type TracksAvailableMarketUpdateManyArgs = {
    /**
     * The data used to update TracksAvailableMarkets.
     */
    data: XOR<TracksAvailableMarketUpdateManyMutationInput, TracksAvailableMarketUncheckedUpdateManyInput>
    /**
     * Filter which TracksAvailableMarkets to update
     */
    where?: TracksAvailableMarketWhereInput
  }


  /**
   * TracksAvailableMarket upsert
   */
  export type TracksAvailableMarketUpsertArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    /**
     * The filter to search for the TracksAvailableMarket to update in case it exists.
     */
    where: TracksAvailableMarketWhereUniqueInput
    /**
     * In case the TracksAvailableMarket found by the `where` argument doesn't exist, create a new TracksAvailableMarket with this data.
     */
    create: XOR<TracksAvailableMarketCreateInput, TracksAvailableMarketUncheckedCreateInput>
    /**
     * In case the TracksAvailableMarket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TracksAvailableMarketUpdateInput, TracksAvailableMarketUncheckedUpdateInput>
  }


  /**
   * TracksAvailableMarket delete
   */
  export type TracksAvailableMarketDeleteArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
    /**
     * Filter which TracksAvailableMarket to delete.
     */
    where: TracksAvailableMarketWhereUniqueInput
  }


  /**
   * TracksAvailableMarket deleteMany
   */
  export type TracksAvailableMarketDeleteManyArgs = {
    /**
     * Filter which TracksAvailableMarkets to delete
     */
    where?: TracksAvailableMarketWhereInput
  }


  /**
   * TracksAvailableMarket without action
   */
  export type TracksAvailableMarketArgs = {
    /**
     * Select specific fields to fetch from the TracksAvailableMarket
     */
    select?: TracksAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TracksAvailableMarketInclude | null
  }



  /**
   * Model TrackProduceByArtist
   */


  export type AggregateTrackProduceByArtist = {
    _count: TrackProduceByArtistCountAggregateOutputType | null
    _avg: TrackProduceByArtistAvgAggregateOutputType | null
    _sum: TrackProduceByArtistSumAggregateOutputType | null
    _min: TrackProduceByArtistMinAggregateOutputType | null
    _max: TrackProduceByArtistMaxAggregateOutputType | null
  }

  export type TrackProduceByArtistAvgAggregateOutputType = {
    trackId: number | null
    artistId: number | null
  }

  export type TrackProduceByArtistSumAggregateOutputType = {
    trackId: number | null
    artistId: number | null
  }

  export type TrackProduceByArtistMinAggregateOutputType = {
    trackId: number | null
    artistId: number | null
  }

  export type TrackProduceByArtistMaxAggregateOutputType = {
    trackId: number | null
    artistId: number | null
  }

  export type TrackProduceByArtistCountAggregateOutputType = {
    trackId: number
    artistId: number
    _all: number
  }


  export type TrackProduceByArtistAvgAggregateInputType = {
    trackId?: true
    artistId?: true
  }

  export type TrackProduceByArtistSumAggregateInputType = {
    trackId?: true
    artistId?: true
  }

  export type TrackProduceByArtistMinAggregateInputType = {
    trackId?: true
    artistId?: true
  }

  export type TrackProduceByArtistMaxAggregateInputType = {
    trackId?: true
    artistId?: true
  }

  export type TrackProduceByArtistCountAggregateInputType = {
    trackId?: true
    artistId?: true
    _all?: true
  }

  export type TrackProduceByArtistAggregateArgs = {
    /**
     * Filter which TrackProduceByArtist to aggregate.
     */
    where?: TrackProduceByArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackProduceByArtists to fetch.
     */
    orderBy?: Enumerable<TrackProduceByArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackProduceByArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackProduceByArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackProduceByArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackProduceByArtists
    **/
    _count?: true | TrackProduceByArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackProduceByArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackProduceByArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackProduceByArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackProduceByArtistMaxAggregateInputType
  }

  export type GetTrackProduceByArtistAggregateType<T extends TrackProduceByArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackProduceByArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackProduceByArtist[P]>
      : GetScalarType<T[P], AggregateTrackProduceByArtist[P]>
  }




  export type TrackProduceByArtistGroupByArgs = {
    where?: TrackProduceByArtistWhereInput
    orderBy?: Enumerable<TrackProduceByArtistOrderByWithAggregationInput>
    by: TrackProduceByArtistScalarFieldEnum[]
    having?: TrackProduceByArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackProduceByArtistCountAggregateInputType | true
    _avg?: TrackProduceByArtistAvgAggregateInputType
    _sum?: TrackProduceByArtistSumAggregateInputType
    _min?: TrackProduceByArtistMinAggregateInputType
    _max?: TrackProduceByArtistMaxAggregateInputType
  }


  export type TrackProduceByArtistGroupByOutputType = {
    trackId: number
    artistId: number
    _count: TrackProduceByArtistCountAggregateOutputType | null
    _avg: TrackProduceByArtistAvgAggregateOutputType | null
    _sum: TrackProduceByArtistSumAggregateOutputType | null
    _min: TrackProduceByArtistMinAggregateOutputType | null
    _max: TrackProduceByArtistMaxAggregateOutputType | null
  }

  type GetTrackProduceByArtistGroupByPayload<T extends TrackProduceByArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TrackProduceByArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackProduceByArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackProduceByArtistGroupByOutputType[P]>
            : GetScalarType<T[P], TrackProduceByArtistGroupByOutputType[P]>
        }
      >
    >


  export type TrackProduceByArtistSelect = {
    trackId?: boolean
    artistId?: boolean
    Track?: boolean | TrackArgs
    Artists?: boolean | ArtistArgs
  }


  export type TrackProduceByArtistInclude = {
    Track?: boolean | TrackArgs
    Artists?: boolean | ArtistArgs
  }

  export type TrackProduceByArtistGetPayload<S extends boolean | null | undefined | TrackProduceByArtistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TrackProduceByArtist :
    S extends undefined ? never :
    S extends { include: any } & (TrackProduceByArtistArgs | TrackProduceByArtistFindManyArgs)
    ? TrackProduceByArtist  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Track' ? TrackGetPayload<S['include'][P]> :
        P extends 'Artists' ? ArtistGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (TrackProduceByArtistArgs | TrackProduceByArtistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Track' ? TrackGetPayload<S['select'][P]> :
        P extends 'Artists' ? ArtistGetPayload<S['select'][P]> :  P extends keyof TrackProduceByArtist ? TrackProduceByArtist[P] : never
  } 
      : TrackProduceByArtist


  type TrackProduceByArtistCountArgs = 
    Omit<TrackProduceByArtistFindManyArgs, 'select' | 'include'> & {
      select?: TrackProduceByArtistCountAggregateInputType | true
    }

  export interface TrackProduceByArtistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TrackProduceByArtist that matches the filter.
     * @param {TrackProduceByArtistFindUniqueArgs} args - Arguments to find a TrackProduceByArtist
     * @example
     * // Get one TrackProduceByArtist
     * const trackProduceByArtist = await prisma.trackProduceByArtist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackProduceByArtistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TrackProduceByArtistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TrackProduceByArtist'> extends True ? Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T>> : Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T> | null, null>

    /**
     * Find one TrackProduceByArtist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackProduceByArtistFindUniqueOrThrowArgs} args - Arguments to find a TrackProduceByArtist
     * @example
     * // Get one TrackProduceByArtist
     * const trackProduceByArtist = await prisma.trackProduceByArtist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackProduceByArtistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TrackProduceByArtistFindUniqueOrThrowArgs>
    ): Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T>>

    /**
     * Find the first TrackProduceByArtist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackProduceByArtistFindFirstArgs} args - Arguments to find a TrackProduceByArtist
     * @example
     * // Get one TrackProduceByArtist
     * const trackProduceByArtist = await prisma.trackProduceByArtist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackProduceByArtistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TrackProduceByArtistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TrackProduceByArtist'> extends True ? Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T>> : Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T> | null, null>

    /**
     * Find the first TrackProduceByArtist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackProduceByArtistFindFirstOrThrowArgs} args - Arguments to find a TrackProduceByArtist
     * @example
     * // Get one TrackProduceByArtist
     * const trackProduceByArtist = await prisma.trackProduceByArtist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackProduceByArtistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TrackProduceByArtistFindFirstOrThrowArgs>
    ): Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T>>

    /**
     * Find zero or more TrackProduceByArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackProduceByArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackProduceByArtists
     * const trackProduceByArtists = await prisma.trackProduceByArtist.findMany()
     * 
     * // Get first 10 TrackProduceByArtists
     * const trackProduceByArtists = await prisma.trackProduceByArtist.findMany({ take: 10 })
     * 
     * // Only select the `trackId`
     * const trackProduceByArtistWithTrackIdOnly = await prisma.trackProduceByArtist.findMany({ select: { trackId: true } })
     * 
    **/
    findMany<T extends TrackProduceByArtistFindManyArgs>(
      args?: SelectSubset<T, TrackProduceByArtistFindManyArgs>
    ): Prisma.PrismaPromise<Array<TrackProduceByArtistGetPayload<T>>>

    /**
     * Create a TrackProduceByArtist.
     * @param {TrackProduceByArtistCreateArgs} args - Arguments to create a TrackProduceByArtist.
     * @example
     * // Create one TrackProduceByArtist
     * const TrackProduceByArtist = await prisma.trackProduceByArtist.create({
     *   data: {
     *     // ... data to create a TrackProduceByArtist
     *   }
     * })
     * 
    **/
    create<T extends TrackProduceByArtistCreateArgs>(
      args: SelectSubset<T, TrackProduceByArtistCreateArgs>
    ): Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T>>

    /**
     * Create many TrackProduceByArtists.
     *     @param {TrackProduceByArtistCreateManyArgs} args - Arguments to create many TrackProduceByArtists.
     *     @example
     *     // Create many TrackProduceByArtists
     *     const trackProduceByArtist = await prisma.trackProduceByArtist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackProduceByArtistCreateManyArgs>(
      args?: SelectSubset<T, TrackProduceByArtistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrackProduceByArtist.
     * @param {TrackProduceByArtistDeleteArgs} args - Arguments to delete one TrackProduceByArtist.
     * @example
     * // Delete one TrackProduceByArtist
     * const TrackProduceByArtist = await prisma.trackProduceByArtist.delete({
     *   where: {
     *     // ... filter to delete one TrackProduceByArtist
     *   }
     * })
     * 
    **/
    delete<T extends TrackProduceByArtistDeleteArgs>(
      args: SelectSubset<T, TrackProduceByArtistDeleteArgs>
    ): Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T>>

    /**
     * Update one TrackProduceByArtist.
     * @param {TrackProduceByArtistUpdateArgs} args - Arguments to update one TrackProduceByArtist.
     * @example
     * // Update one TrackProduceByArtist
     * const trackProduceByArtist = await prisma.trackProduceByArtist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackProduceByArtistUpdateArgs>(
      args: SelectSubset<T, TrackProduceByArtistUpdateArgs>
    ): Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T>>

    /**
     * Delete zero or more TrackProduceByArtists.
     * @param {TrackProduceByArtistDeleteManyArgs} args - Arguments to filter TrackProduceByArtists to delete.
     * @example
     * // Delete a few TrackProduceByArtists
     * const { count } = await prisma.trackProduceByArtist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackProduceByArtistDeleteManyArgs>(
      args?: SelectSubset<T, TrackProduceByArtistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackProduceByArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackProduceByArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackProduceByArtists
     * const trackProduceByArtist = await prisma.trackProduceByArtist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackProduceByArtistUpdateManyArgs>(
      args: SelectSubset<T, TrackProduceByArtistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackProduceByArtist.
     * @param {TrackProduceByArtistUpsertArgs} args - Arguments to update or create a TrackProduceByArtist.
     * @example
     * // Update or create a TrackProduceByArtist
     * const trackProduceByArtist = await prisma.trackProduceByArtist.upsert({
     *   create: {
     *     // ... data to create a TrackProduceByArtist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackProduceByArtist we want to update
     *   }
     * })
    **/
    upsert<T extends TrackProduceByArtistUpsertArgs>(
      args: SelectSubset<T, TrackProduceByArtistUpsertArgs>
    ): Prisma__TrackProduceByArtistClient<TrackProduceByArtistGetPayload<T>>

    /**
     * Count the number of TrackProduceByArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackProduceByArtistCountArgs} args - Arguments to filter TrackProduceByArtists to count.
     * @example
     * // Count the number of TrackProduceByArtists
     * const count = await prisma.trackProduceByArtist.count({
     *   where: {
     *     // ... the filter for the TrackProduceByArtists we want to count
     *   }
     * })
    **/
    count<T extends TrackProduceByArtistCountArgs>(
      args?: Subset<T, TrackProduceByArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackProduceByArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackProduceByArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackProduceByArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends TrackProduceByArtistAggregateArgs>(args: Subset<T, TrackProduceByArtistAggregateArgs>): Prisma.PrismaPromise<GetTrackProduceByArtistAggregateType<T>>

    /**
     * Group by TrackProduceByArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackProduceByArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends TrackProduceByArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackProduceByArtistGroupByArgs['orderBy'] }
        : { orderBy?: TrackProduceByArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, TrackProduceByArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackProduceByArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackProduceByArtist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TrackProduceByArtistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Track<T extends TrackArgs= {}>(args?: Subset<T, TrackArgs>): Prisma__TrackClient<TrackGetPayload<T> | Null>;

    Artists<T extends ArtistArgs= {}>(args?: Subset<T, ArtistArgs>): Prisma__ArtistClient<ArtistGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * TrackProduceByArtist base type for findUnique actions
   */
  export type TrackProduceByArtistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    /**
     * Filter, which TrackProduceByArtist to fetch.
     */
    where: TrackProduceByArtistWhereUniqueInput
  }

  /**
   * TrackProduceByArtist findUnique
   */
  export interface TrackProduceByArtistFindUniqueArgs extends TrackProduceByArtistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TrackProduceByArtist findUniqueOrThrow
   */
  export type TrackProduceByArtistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    /**
     * Filter, which TrackProduceByArtist to fetch.
     */
    where: TrackProduceByArtistWhereUniqueInput
  }


  /**
   * TrackProduceByArtist base type for findFirst actions
   */
  export type TrackProduceByArtistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    /**
     * Filter, which TrackProduceByArtist to fetch.
     */
    where?: TrackProduceByArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackProduceByArtists to fetch.
     */
    orderBy?: Enumerable<TrackProduceByArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackProduceByArtists.
     */
    cursor?: TrackProduceByArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackProduceByArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackProduceByArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackProduceByArtists.
     */
    distinct?: Enumerable<TrackProduceByArtistScalarFieldEnum>
  }

  /**
   * TrackProduceByArtist findFirst
   */
  export interface TrackProduceByArtistFindFirstArgs extends TrackProduceByArtistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TrackProduceByArtist findFirstOrThrow
   */
  export type TrackProduceByArtistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    /**
     * Filter, which TrackProduceByArtist to fetch.
     */
    where?: TrackProduceByArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackProduceByArtists to fetch.
     */
    orderBy?: Enumerable<TrackProduceByArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackProduceByArtists.
     */
    cursor?: TrackProduceByArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackProduceByArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackProduceByArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackProduceByArtists.
     */
    distinct?: Enumerable<TrackProduceByArtistScalarFieldEnum>
  }


  /**
   * TrackProduceByArtist findMany
   */
  export type TrackProduceByArtistFindManyArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    /**
     * Filter, which TrackProduceByArtists to fetch.
     */
    where?: TrackProduceByArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackProduceByArtists to fetch.
     */
    orderBy?: Enumerable<TrackProduceByArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackProduceByArtists.
     */
    cursor?: TrackProduceByArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackProduceByArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackProduceByArtists.
     */
    skip?: number
    distinct?: Enumerable<TrackProduceByArtistScalarFieldEnum>
  }


  /**
   * TrackProduceByArtist create
   */
  export type TrackProduceByArtistCreateArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    /**
     * The data needed to create a TrackProduceByArtist.
     */
    data: XOR<TrackProduceByArtistCreateInput, TrackProduceByArtistUncheckedCreateInput>
  }


  /**
   * TrackProduceByArtist createMany
   */
  export type TrackProduceByArtistCreateManyArgs = {
    /**
     * The data used to create many TrackProduceByArtists.
     */
    data: Enumerable<TrackProduceByArtistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TrackProduceByArtist update
   */
  export type TrackProduceByArtistUpdateArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    /**
     * The data needed to update a TrackProduceByArtist.
     */
    data: XOR<TrackProduceByArtistUpdateInput, TrackProduceByArtistUncheckedUpdateInput>
    /**
     * Choose, which TrackProduceByArtist to update.
     */
    where: TrackProduceByArtistWhereUniqueInput
  }


  /**
   * TrackProduceByArtist updateMany
   */
  export type TrackProduceByArtistUpdateManyArgs = {
    /**
     * The data used to update TrackProduceByArtists.
     */
    data: XOR<TrackProduceByArtistUpdateManyMutationInput, TrackProduceByArtistUncheckedUpdateManyInput>
    /**
     * Filter which TrackProduceByArtists to update
     */
    where?: TrackProduceByArtistWhereInput
  }


  /**
   * TrackProduceByArtist upsert
   */
  export type TrackProduceByArtistUpsertArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    /**
     * The filter to search for the TrackProduceByArtist to update in case it exists.
     */
    where: TrackProduceByArtistWhereUniqueInput
    /**
     * In case the TrackProduceByArtist found by the `where` argument doesn't exist, create a new TrackProduceByArtist with this data.
     */
    create: XOR<TrackProduceByArtistCreateInput, TrackProduceByArtistUncheckedCreateInput>
    /**
     * In case the TrackProduceByArtist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackProduceByArtistUpdateInput, TrackProduceByArtistUncheckedUpdateInput>
  }


  /**
   * TrackProduceByArtist delete
   */
  export type TrackProduceByArtistDeleteArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
    /**
     * Filter which TrackProduceByArtist to delete.
     */
    where: TrackProduceByArtistWhereUniqueInput
  }


  /**
   * TrackProduceByArtist deleteMany
   */
  export type TrackProduceByArtistDeleteManyArgs = {
    /**
     * Filter which TrackProduceByArtists to delete
     */
    where?: TrackProduceByArtistWhereInput
  }


  /**
   * TrackProduceByArtist without action
   */
  export type TrackProduceByArtistArgs = {
    /**
     * Select specific fields to fetch from the TrackProduceByArtist
     */
    select?: TrackProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: TrackProduceByArtistInclude | null
  }



  /**
   * Model PlaylistOnFollower
   */


  export type AggregatePlaylistOnFollower = {
    _count: PlaylistOnFollowerCountAggregateOutputType | null
    _avg: PlaylistOnFollowerAvgAggregateOutputType | null
    _sum: PlaylistOnFollowerSumAggregateOutputType | null
    _min: PlaylistOnFollowerMinAggregateOutputType | null
    _max: PlaylistOnFollowerMaxAggregateOutputType | null
  }

  export type PlaylistOnFollowerAvgAggregateOutputType = {
    playlistId: number | null
    userId: number | null
  }

  export type PlaylistOnFollowerSumAggregateOutputType = {
    playlistId: number | null
    userId: number | null
  }

  export type PlaylistOnFollowerMinAggregateOutputType = {
    playlistId: number | null
    userId: number | null
  }

  export type PlaylistOnFollowerMaxAggregateOutputType = {
    playlistId: number | null
    userId: number | null
  }

  export type PlaylistOnFollowerCountAggregateOutputType = {
    playlistId: number
    userId: number
    _all: number
  }


  export type PlaylistOnFollowerAvgAggregateInputType = {
    playlistId?: true
    userId?: true
  }

  export type PlaylistOnFollowerSumAggregateInputType = {
    playlistId?: true
    userId?: true
  }

  export type PlaylistOnFollowerMinAggregateInputType = {
    playlistId?: true
    userId?: true
  }

  export type PlaylistOnFollowerMaxAggregateInputType = {
    playlistId?: true
    userId?: true
  }

  export type PlaylistOnFollowerCountAggregateInputType = {
    playlistId?: true
    userId?: true
    _all?: true
  }

  export type PlaylistOnFollowerAggregateArgs = {
    /**
     * Filter which PlaylistOnFollower to aggregate.
     */
    where?: PlaylistOnFollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistOnFollowers to fetch.
     */
    orderBy?: Enumerable<PlaylistOnFollowerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistOnFollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistOnFollowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistOnFollowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistOnFollowers
    **/
    _count?: true | PlaylistOnFollowerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistOnFollowerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistOnFollowerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistOnFollowerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistOnFollowerMaxAggregateInputType
  }

  export type GetPlaylistOnFollowerAggregateType<T extends PlaylistOnFollowerAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistOnFollower]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistOnFollower[P]>
      : GetScalarType<T[P], AggregatePlaylistOnFollower[P]>
  }




  export type PlaylistOnFollowerGroupByArgs = {
    where?: PlaylistOnFollowerWhereInput
    orderBy?: Enumerable<PlaylistOnFollowerOrderByWithAggregationInput>
    by: PlaylistOnFollowerScalarFieldEnum[]
    having?: PlaylistOnFollowerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistOnFollowerCountAggregateInputType | true
    _avg?: PlaylistOnFollowerAvgAggregateInputType
    _sum?: PlaylistOnFollowerSumAggregateInputType
    _min?: PlaylistOnFollowerMinAggregateInputType
    _max?: PlaylistOnFollowerMaxAggregateInputType
  }


  export type PlaylistOnFollowerGroupByOutputType = {
    playlistId: number
    userId: number
    _count: PlaylistOnFollowerCountAggregateOutputType | null
    _avg: PlaylistOnFollowerAvgAggregateOutputType | null
    _sum: PlaylistOnFollowerSumAggregateOutputType | null
    _min: PlaylistOnFollowerMinAggregateOutputType | null
    _max: PlaylistOnFollowerMaxAggregateOutputType | null
  }

  type GetPlaylistOnFollowerGroupByPayload<T extends PlaylistOnFollowerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PlaylistOnFollowerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistOnFollowerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistOnFollowerGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistOnFollowerGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistOnFollowerSelect = {
    playlistId?: boolean
    userId?: boolean
    Playlist?: boolean | PlaylistArgs
    User?: boolean | UserArgs
  }


  export type PlaylistOnFollowerInclude = {
    Playlist?: boolean | PlaylistArgs
    User?: boolean | UserArgs
  }

  export type PlaylistOnFollowerGetPayload<S extends boolean | null | undefined | PlaylistOnFollowerArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PlaylistOnFollower :
    S extends undefined ? never :
    S extends { include: any } & (PlaylistOnFollowerArgs | PlaylistOnFollowerFindManyArgs)
    ? PlaylistOnFollower  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Playlist' ? PlaylistGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PlaylistOnFollowerArgs | PlaylistOnFollowerFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Playlist' ? PlaylistGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof PlaylistOnFollower ? PlaylistOnFollower[P] : never
  } 
      : PlaylistOnFollower


  type PlaylistOnFollowerCountArgs = 
    Omit<PlaylistOnFollowerFindManyArgs, 'select' | 'include'> & {
      select?: PlaylistOnFollowerCountAggregateInputType | true
    }

  export interface PlaylistOnFollowerDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PlaylistOnFollower that matches the filter.
     * @param {PlaylistOnFollowerFindUniqueArgs} args - Arguments to find a PlaylistOnFollower
     * @example
     * // Get one PlaylistOnFollower
     * const playlistOnFollower = await prisma.playlistOnFollower.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistOnFollowerFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlaylistOnFollowerFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PlaylistOnFollower'> extends True ? Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T>> : Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T> | null, null>

    /**
     * Find one PlaylistOnFollower that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistOnFollowerFindUniqueOrThrowArgs} args - Arguments to find a PlaylistOnFollower
     * @example
     * // Get one PlaylistOnFollower
     * const playlistOnFollower = await prisma.playlistOnFollower.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistOnFollowerFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PlaylistOnFollowerFindUniqueOrThrowArgs>
    ): Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T>>

    /**
     * Find the first PlaylistOnFollower that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistOnFollowerFindFirstArgs} args - Arguments to find a PlaylistOnFollower
     * @example
     * // Get one PlaylistOnFollower
     * const playlistOnFollower = await prisma.playlistOnFollower.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistOnFollowerFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlaylistOnFollowerFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PlaylistOnFollower'> extends True ? Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T>> : Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T> | null, null>

    /**
     * Find the first PlaylistOnFollower that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistOnFollowerFindFirstOrThrowArgs} args - Arguments to find a PlaylistOnFollower
     * @example
     * // Get one PlaylistOnFollower
     * const playlistOnFollower = await prisma.playlistOnFollower.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistOnFollowerFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlaylistOnFollowerFindFirstOrThrowArgs>
    ): Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T>>

    /**
     * Find zero or more PlaylistOnFollowers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistOnFollowerFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistOnFollowers
     * const playlistOnFollowers = await prisma.playlistOnFollower.findMany()
     * 
     * // Get first 10 PlaylistOnFollowers
     * const playlistOnFollowers = await prisma.playlistOnFollower.findMany({ take: 10 })
     * 
     * // Only select the `playlistId`
     * const playlistOnFollowerWithPlaylistIdOnly = await prisma.playlistOnFollower.findMany({ select: { playlistId: true } })
     * 
    **/
    findMany<T extends PlaylistOnFollowerFindManyArgs>(
      args?: SelectSubset<T, PlaylistOnFollowerFindManyArgs>
    ): Prisma.PrismaPromise<Array<PlaylistOnFollowerGetPayload<T>>>

    /**
     * Create a PlaylistOnFollower.
     * @param {PlaylistOnFollowerCreateArgs} args - Arguments to create a PlaylistOnFollower.
     * @example
     * // Create one PlaylistOnFollower
     * const PlaylistOnFollower = await prisma.playlistOnFollower.create({
     *   data: {
     *     // ... data to create a PlaylistOnFollower
     *   }
     * })
     * 
    **/
    create<T extends PlaylistOnFollowerCreateArgs>(
      args: SelectSubset<T, PlaylistOnFollowerCreateArgs>
    ): Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T>>

    /**
     * Create many PlaylistOnFollowers.
     *     @param {PlaylistOnFollowerCreateManyArgs} args - Arguments to create many PlaylistOnFollowers.
     *     @example
     *     // Create many PlaylistOnFollowers
     *     const playlistOnFollower = await prisma.playlistOnFollower.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistOnFollowerCreateManyArgs>(
      args?: SelectSubset<T, PlaylistOnFollowerCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlaylistOnFollower.
     * @param {PlaylistOnFollowerDeleteArgs} args - Arguments to delete one PlaylistOnFollower.
     * @example
     * // Delete one PlaylistOnFollower
     * const PlaylistOnFollower = await prisma.playlistOnFollower.delete({
     *   where: {
     *     // ... filter to delete one PlaylistOnFollower
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistOnFollowerDeleteArgs>(
      args: SelectSubset<T, PlaylistOnFollowerDeleteArgs>
    ): Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T>>

    /**
     * Update one PlaylistOnFollower.
     * @param {PlaylistOnFollowerUpdateArgs} args - Arguments to update one PlaylistOnFollower.
     * @example
     * // Update one PlaylistOnFollower
     * const playlistOnFollower = await prisma.playlistOnFollower.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistOnFollowerUpdateArgs>(
      args: SelectSubset<T, PlaylistOnFollowerUpdateArgs>
    ): Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T>>

    /**
     * Delete zero or more PlaylistOnFollowers.
     * @param {PlaylistOnFollowerDeleteManyArgs} args - Arguments to filter PlaylistOnFollowers to delete.
     * @example
     * // Delete a few PlaylistOnFollowers
     * const { count } = await prisma.playlistOnFollower.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistOnFollowerDeleteManyArgs>(
      args?: SelectSubset<T, PlaylistOnFollowerDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistOnFollowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistOnFollowerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistOnFollowers
     * const playlistOnFollower = await prisma.playlistOnFollower.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistOnFollowerUpdateManyArgs>(
      args: SelectSubset<T, PlaylistOnFollowerUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlaylistOnFollower.
     * @param {PlaylistOnFollowerUpsertArgs} args - Arguments to update or create a PlaylistOnFollower.
     * @example
     * // Update or create a PlaylistOnFollower
     * const playlistOnFollower = await prisma.playlistOnFollower.upsert({
     *   create: {
     *     // ... data to create a PlaylistOnFollower
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistOnFollower we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistOnFollowerUpsertArgs>(
      args: SelectSubset<T, PlaylistOnFollowerUpsertArgs>
    ): Prisma__PlaylistOnFollowerClient<PlaylistOnFollowerGetPayload<T>>

    /**
     * Count the number of PlaylistOnFollowers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistOnFollowerCountArgs} args - Arguments to filter PlaylistOnFollowers to count.
     * @example
     * // Count the number of PlaylistOnFollowers
     * const count = await prisma.playlistOnFollower.count({
     *   where: {
     *     // ... the filter for the PlaylistOnFollowers we want to count
     *   }
     * })
    **/
    count<T extends PlaylistOnFollowerCountArgs>(
      args?: Subset<T, PlaylistOnFollowerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistOnFollowerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistOnFollower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistOnFollowerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends PlaylistOnFollowerAggregateArgs>(args: Subset<T, PlaylistOnFollowerAggregateArgs>): Prisma.PrismaPromise<GetPlaylistOnFollowerAggregateType<T>>

    /**
     * Group by PlaylistOnFollower.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistOnFollowerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends PlaylistOnFollowerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistOnFollowerGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistOnFollowerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, PlaylistOnFollowerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistOnFollowerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistOnFollower.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlaylistOnFollowerClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Playlist<T extends PlaylistArgs= {}>(args?: Subset<T, PlaylistArgs>): Prisma__PlaylistClient<PlaylistGetPayload<T> | Null>;

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * PlaylistOnFollower base type for findUnique actions
   */
  export type PlaylistOnFollowerFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    /**
     * Filter, which PlaylistOnFollower to fetch.
     */
    where: PlaylistOnFollowerWhereUniqueInput
  }

  /**
   * PlaylistOnFollower findUnique
   */
  export interface PlaylistOnFollowerFindUniqueArgs extends PlaylistOnFollowerFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PlaylistOnFollower findUniqueOrThrow
   */
  export type PlaylistOnFollowerFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    /**
     * Filter, which PlaylistOnFollower to fetch.
     */
    where: PlaylistOnFollowerWhereUniqueInput
  }


  /**
   * PlaylistOnFollower base type for findFirst actions
   */
  export type PlaylistOnFollowerFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    /**
     * Filter, which PlaylistOnFollower to fetch.
     */
    where?: PlaylistOnFollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistOnFollowers to fetch.
     */
    orderBy?: Enumerable<PlaylistOnFollowerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistOnFollowers.
     */
    cursor?: PlaylistOnFollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistOnFollowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistOnFollowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistOnFollowers.
     */
    distinct?: Enumerable<PlaylistOnFollowerScalarFieldEnum>
  }

  /**
   * PlaylistOnFollower findFirst
   */
  export interface PlaylistOnFollowerFindFirstArgs extends PlaylistOnFollowerFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PlaylistOnFollower findFirstOrThrow
   */
  export type PlaylistOnFollowerFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    /**
     * Filter, which PlaylistOnFollower to fetch.
     */
    where?: PlaylistOnFollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistOnFollowers to fetch.
     */
    orderBy?: Enumerable<PlaylistOnFollowerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistOnFollowers.
     */
    cursor?: PlaylistOnFollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistOnFollowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistOnFollowers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistOnFollowers.
     */
    distinct?: Enumerable<PlaylistOnFollowerScalarFieldEnum>
  }


  /**
   * PlaylistOnFollower findMany
   */
  export type PlaylistOnFollowerFindManyArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    /**
     * Filter, which PlaylistOnFollowers to fetch.
     */
    where?: PlaylistOnFollowerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistOnFollowers to fetch.
     */
    orderBy?: Enumerable<PlaylistOnFollowerOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistOnFollowers.
     */
    cursor?: PlaylistOnFollowerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistOnFollowers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistOnFollowers.
     */
    skip?: number
    distinct?: Enumerable<PlaylistOnFollowerScalarFieldEnum>
  }


  /**
   * PlaylistOnFollower create
   */
  export type PlaylistOnFollowerCreateArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    /**
     * The data needed to create a PlaylistOnFollower.
     */
    data: XOR<PlaylistOnFollowerCreateInput, PlaylistOnFollowerUncheckedCreateInput>
  }


  /**
   * PlaylistOnFollower createMany
   */
  export type PlaylistOnFollowerCreateManyArgs = {
    /**
     * The data used to create many PlaylistOnFollowers.
     */
    data: Enumerable<PlaylistOnFollowerCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PlaylistOnFollower update
   */
  export type PlaylistOnFollowerUpdateArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    /**
     * The data needed to update a PlaylistOnFollower.
     */
    data: XOR<PlaylistOnFollowerUpdateInput, PlaylistOnFollowerUncheckedUpdateInput>
    /**
     * Choose, which PlaylistOnFollower to update.
     */
    where: PlaylistOnFollowerWhereUniqueInput
  }


  /**
   * PlaylistOnFollower updateMany
   */
  export type PlaylistOnFollowerUpdateManyArgs = {
    /**
     * The data used to update PlaylistOnFollowers.
     */
    data: XOR<PlaylistOnFollowerUpdateManyMutationInput, PlaylistOnFollowerUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistOnFollowers to update
     */
    where?: PlaylistOnFollowerWhereInput
  }


  /**
   * PlaylistOnFollower upsert
   */
  export type PlaylistOnFollowerUpsertArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    /**
     * The filter to search for the PlaylistOnFollower to update in case it exists.
     */
    where: PlaylistOnFollowerWhereUniqueInput
    /**
     * In case the PlaylistOnFollower found by the `where` argument doesn't exist, create a new PlaylistOnFollower with this data.
     */
    create: XOR<PlaylistOnFollowerCreateInput, PlaylistOnFollowerUncheckedCreateInput>
    /**
     * In case the PlaylistOnFollower was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistOnFollowerUpdateInput, PlaylistOnFollowerUncheckedUpdateInput>
  }


  /**
   * PlaylistOnFollower delete
   */
  export type PlaylistOnFollowerDeleteArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
    /**
     * Filter which PlaylistOnFollower to delete.
     */
    where: PlaylistOnFollowerWhereUniqueInput
  }


  /**
   * PlaylistOnFollower deleteMany
   */
  export type PlaylistOnFollowerDeleteManyArgs = {
    /**
     * Filter which PlaylistOnFollowers to delete
     */
    where?: PlaylistOnFollowerWhereInput
  }


  /**
   * PlaylistOnFollower without action
   */
  export type PlaylistOnFollowerArgs = {
    /**
     * Select specific fields to fetch from the PlaylistOnFollower
     */
    select?: PlaylistOnFollowerSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: PlaylistOnFollowerInclude | null
  }



  /**
   * Model AlbumProduceByArtist
   */


  export type AggregateAlbumProduceByArtist = {
    _count: AlbumProduceByArtistCountAggregateOutputType | null
    _avg: AlbumProduceByArtistAvgAggregateOutputType | null
    _sum: AlbumProduceByArtistSumAggregateOutputType | null
    _min: AlbumProduceByArtistMinAggregateOutputType | null
    _max: AlbumProduceByArtistMaxAggregateOutputType | null
  }

  export type AlbumProduceByArtistAvgAggregateOutputType = {
    albumId: number | null
    artistId: number | null
  }

  export type AlbumProduceByArtistSumAggregateOutputType = {
    albumId: number | null
    artistId: number | null
  }

  export type AlbumProduceByArtistMinAggregateOutputType = {
    albumId: number | null
    artistId: number | null
  }

  export type AlbumProduceByArtistMaxAggregateOutputType = {
    albumId: number | null
    artistId: number | null
  }

  export type AlbumProduceByArtistCountAggregateOutputType = {
    albumId: number
    artistId: number
    _all: number
  }


  export type AlbumProduceByArtistAvgAggregateInputType = {
    albumId?: true
    artistId?: true
  }

  export type AlbumProduceByArtistSumAggregateInputType = {
    albumId?: true
    artistId?: true
  }

  export type AlbumProduceByArtistMinAggregateInputType = {
    albumId?: true
    artistId?: true
  }

  export type AlbumProduceByArtistMaxAggregateInputType = {
    albumId?: true
    artistId?: true
  }

  export type AlbumProduceByArtistCountAggregateInputType = {
    albumId?: true
    artistId?: true
    _all?: true
  }

  export type AlbumProduceByArtistAggregateArgs = {
    /**
     * Filter which AlbumProduceByArtist to aggregate.
     */
    where?: AlbumProduceByArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumProduceByArtists to fetch.
     */
    orderBy?: Enumerable<AlbumProduceByArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumProduceByArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumProduceByArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumProduceByArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumProduceByArtists
    **/
    _count?: true | AlbumProduceByArtistCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumProduceByArtistAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumProduceByArtistSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumProduceByArtistMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumProduceByArtistMaxAggregateInputType
  }

  export type GetAlbumProduceByArtistAggregateType<T extends AlbumProduceByArtistAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumProduceByArtist]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumProduceByArtist[P]>
      : GetScalarType<T[P], AggregateAlbumProduceByArtist[P]>
  }




  export type AlbumProduceByArtistGroupByArgs = {
    where?: AlbumProduceByArtistWhereInput
    orderBy?: Enumerable<AlbumProduceByArtistOrderByWithAggregationInput>
    by: AlbumProduceByArtistScalarFieldEnum[]
    having?: AlbumProduceByArtistScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumProduceByArtistCountAggregateInputType | true
    _avg?: AlbumProduceByArtistAvgAggregateInputType
    _sum?: AlbumProduceByArtistSumAggregateInputType
    _min?: AlbumProduceByArtistMinAggregateInputType
    _max?: AlbumProduceByArtistMaxAggregateInputType
  }


  export type AlbumProduceByArtistGroupByOutputType = {
    albumId: number
    artistId: number
    _count: AlbumProduceByArtistCountAggregateOutputType | null
    _avg: AlbumProduceByArtistAvgAggregateOutputType | null
    _sum: AlbumProduceByArtistSumAggregateOutputType | null
    _min: AlbumProduceByArtistMinAggregateOutputType | null
    _max: AlbumProduceByArtistMaxAggregateOutputType | null
  }

  type GetAlbumProduceByArtistGroupByPayload<T extends AlbumProduceByArtistGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AlbumProduceByArtistGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumProduceByArtistGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumProduceByArtistGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumProduceByArtistGroupByOutputType[P]>
        }
      >
    >


  export type AlbumProduceByArtistSelect = {
    albumId?: boolean
    artistId?: boolean
    Album?: boolean | AlbumArgs
    Artist?: boolean | ArtistArgs
  }


  export type AlbumProduceByArtistInclude = {
    Album?: boolean | AlbumArgs
    Artist?: boolean | ArtistArgs
  }

  export type AlbumProduceByArtistGetPayload<S extends boolean | null | undefined | AlbumProduceByArtistArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AlbumProduceByArtist :
    S extends undefined ? never :
    S extends { include: any } & (AlbumProduceByArtistArgs | AlbumProduceByArtistFindManyArgs)
    ? AlbumProduceByArtist  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Album' ? AlbumGetPayload<S['include'][P]> :
        P extends 'Artist' ? ArtistGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AlbumProduceByArtistArgs | AlbumProduceByArtistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Album' ? AlbumGetPayload<S['select'][P]> :
        P extends 'Artist' ? ArtistGetPayload<S['select'][P]> :  P extends keyof AlbumProduceByArtist ? AlbumProduceByArtist[P] : never
  } 
      : AlbumProduceByArtist


  type AlbumProduceByArtistCountArgs = 
    Omit<AlbumProduceByArtistFindManyArgs, 'select' | 'include'> & {
      select?: AlbumProduceByArtistCountAggregateInputType | true
    }

  export interface AlbumProduceByArtistDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AlbumProduceByArtist that matches the filter.
     * @param {AlbumProduceByArtistFindUniqueArgs} args - Arguments to find a AlbumProduceByArtist
     * @example
     * // Get one AlbumProduceByArtist
     * const albumProduceByArtist = await prisma.albumProduceByArtist.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumProduceByArtistFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AlbumProduceByArtistFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AlbumProduceByArtist'> extends True ? Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T>> : Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T> | null, null>

    /**
     * Find one AlbumProduceByArtist that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumProduceByArtistFindUniqueOrThrowArgs} args - Arguments to find a AlbumProduceByArtist
     * @example
     * // Get one AlbumProduceByArtist
     * const albumProduceByArtist = await prisma.albumProduceByArtist.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumProduceByArtistFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AlbumProduceByArtistFindUniqueOrThrowArgs>
    ): Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T>>

    /**
     * Find the first AlbumProduceByArtist that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumProduceByArtistFindFirstArgs} args - Arguments to find a AlbumProduceByArtist
     * @example
     * // Get one AlbumProduceByArtist
     * const albumProduceByArtist = await prisma.albumProduceByArtist.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumProduceByArtistFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AlbumProduceByArtistFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AlbumProduceByArtist'> extends True ? Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T>> : Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T> | null, null>

    /**
     * Find the first AlbumProduceByArtist that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumProduceByArtistFindFirstOrThrowArgs} args - Arguments to find a AlbumProduceByArtist
     * @example
     * // Get one AlbumProduceByArtist
     * const albumProduceByArtist = await prisma.albumProduceByArtist.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumProduceByArtistFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AlbumProduceByArtistFindFirstOrThrowArgs>
    ): Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T>>

    /**
     * Find zero or more AlbumProduceByArtists that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumProduceByArtistFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumProduceByArtists
     * const albumProduceByArtists = await prisma.albumProduceByArtist.findMany()
     * 
     * // Get first 10 AlbumProduceByArtists
     * const albumProduceByArtists = await prisma.albumProduceByArtist.findMany({ take: 10 })
     * 
     * // Only select the `albumId`
     * const albumProduceByArtistWithAlbumIdOnly = await prisma.albumProduceByArtist.findMany({ select: { albumId: true } })
     * 
    **/
    findMany<T extends AlbumProduceByArtistFindManyArgs>(
      args?: SelectSubset<T, AlbumProduceByArtistFindManyArgs>
    ): Prisma.PrismaPromise<Array<AlbumProduceByArtistGetPayload<T>>>

    /**
     * Create a AlbumProduceByArtist.
     * @param {AlbumProduceByArtistCreateArgs} args - Arguments to create a AlbumProduceByArtist.
     * @example
     * // Create one AlbumProduceByArtist
     * const AlbumProduceByArtist = await prisma.albumProduceByArtist.create({
     *   data: {
     *     // ... data to create a AlbumProduceByArtist
     *   }
     * })
     * 
    **/
    create<T extends AlbumProduceByArtistCreateArgs>(
      args: SelectSubset<T, AlbumProduceByArtistCreateArgs>
    ): Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T>>

    /**
     * Create many AlbumProduceByArtists.
     *     @param {AlbumProduceByArtistCreateManyArgs} args - Arguments to create many AlbumProduceByArtists.
     *     @example
     *     // Create many AlbumProduceByArtists
     *     const albumProduceByArtist = await prisma.albumProduceByArtist.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumProduceByArtistCreateManyArgs>(
      args?: SelectSubset<T, AlbumProduceByArtistCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlbumProduceByArtist.
     * @param {AlbumProduceByArtistDeleteArgs} args - Arguments to delete one AlbumProduceByArtist.
     * @example
     * // Delete one AlbumProduceByArtist
     * const AlbumProduceByArtist = await prisma.albumProduceByArtist.delete({
     *   where: {
     *     // ... filter to delete one AlbumProduceByArtist
     *   }
     * })
     * 
    **/
    delete<T extends AlbumProduceByArtistDeleteArgs>(
      args: SelectSubset<T, AlbumProduceByArtistDeleteArgs>
    ): Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T>>

    /**
     * Update one AlbumProduceByArtist.
     * @param {AlbumProduceByArtistUpdateArgs} args - Arguments to update one AlbumProduceByArtist.
     * @example
     * // Update one AlbumProduceByArtist
     * const albumProduceByArtist = await prisma.albumProduceByArtist.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumProduceByArtistUpdateArgs>(
      args: SelectSubset<T, AlbumProduceByArtistUpdateArgs>
    ): Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T>>

    /**
     * Delete zero or more AlbumProduceByArtists.
     * @param {AlbumProduceByArtistDeleteManyArgs} args - Arguments to filter AlbumProduceByArtists to delete.
     * @example
     * // Delete a few AlbumProduceByArtists
     * const { count } = await prisma.albumProduceByArtist.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumProduceByArtistDeleteManyArgs>(
      args?: SelectSubset<T, AlbumProduceByArtistDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumProduceByArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumProduceByArtistUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumProduceByArtists
     * const albumProduceByArtist = await prisma.albumProduceByArtist.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumProduceByArtistUpdateManyArgs>(
      args: SelectSubset<T, AlbumProduceByArtistUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlbumProduceByArtist.
     * @param {AlbumProduceByArtistUpsertArgs} args - Arguments to update or create a AlbumProduceByArtist.
     * @example
     * // Update or create a AlbumProduceByArtist
     * const albumProduceByArtist = await prisma.albumProduceByArtist.upsert({
     *   create: {
     *     // ... data to create a AlbumProduceByArtist
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumProduceByArtist we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumProduceByArtistUpsertArgs>(
      args: SelectSubset<T, AlbumProduceByArtistUpsertArgs>
    ): Prisma__AlbumProduceByArtistClient<AlbumProduceByArtistGetPayload<T>>

    /**
     * Count the number of AlbumProduceByArtists.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumProduceByArtistCountArgs} args - Arguments to filter AlbumProduceByArtists to count.
     * @example
     * // Count the number of AlbumProduceByArtists
     * const count = await prisma.albumProduceByArtist.count({
     *   where: {
     *     // ... the filter for the AlbumProduceByArtists we want to count
     *   }
     * })
    **/
    count<T extends AlbumProduceByArtistCountArgs>(
      args?: Subset<T, AlbumProduceByArtistCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumProduceByArtistCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumProduceByArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumProduceByArtistAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumProduceByArtistAggregateArgs>(args: Subset<T, AlbumProduceByArtistAggregateArgs>): Prisma.PrismaPromise<GetAlbumProduceByArtistAggregateType<T>>

    /**
     * Group by AlbumProduceByArtist.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumProduceByArtistGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumProduceByArtistGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumProduceByArtistGroupByArgs['orderBy'] }
        : { orderBy?: AlbumProduceByArtistGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumProduceByArtistGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumProduceByArtistGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumProduceByArtist.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AlbumProduceByArtistClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Album<T extends AlbumArgs= {}>(args?: Subset<T, AlbumArgs>): Prisma__AlbumClient<AlbumGetPayload<T> | Null>;

    Artist<T extends ArtistArgs= {}>(args?: Subset<T, ArtistArgs>): Prisma__ArtistClient<ArtistGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AlbumProduceByArtist base type for findUnique actions
   */
  export type AlbumProduceByArtistFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    /**
     * Filter, which AlbumProduceByArtist to fetch.
     */
    where: AlbumProduceByArtistWhereUniqueInput
  }

  /**
   * AlbumProduceByArtist findUnique
   */
  export interface AlbumProduceByArtistFindUniqueArgs extends AlbumProduceByArtistFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AlbumProduceByArtist findUniqueOrThrow
   */
  export type AlbumProduceByArtistFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    /**
     * Filter, which AlbumProduceByArtist to fetch.
     */
    where: AlbumProduceByArtistWhereUniqueInput
  }


  /**
   * AlbumProduceByArtist base type for findFirst actions
   */
  export type AlbumProduceByArtistFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    /**
     * Filter, which AlbumProduceByArtist to fetch.
     */
    where?: AlbumProduceByArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumProduceByArtists to fetch.
     */
    orderBy?: Enumerable<AlbumProduceByArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumProduceByArtists.
     */
    cursor?: AlbumProduceByArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumProduceByArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumProduceByArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumProduceByArtists.
     */
    distinct?: Enumerable<AlbumProduceByArtistScalarFieldEnum>
  }

  /**
   * AlbumProduceByArtist findFirst
   */
  export interface AlbumProduceByArtistFindFirstArgs extends AlbumProduceByArtistFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AlbumProduceByArtist findFirstOrThrow
   */
  export type AlbumProduceByArtistFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    /**
     * Filter, which AlbumProduceByArtist to fetch.
     */
    where?: AlbumProduceByArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumProduceByArtists to fetch.
     */
    orderBy?: Enumerable<AlbumProduceByArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumProduceByArtists.
     */
    cursor?: AlbumProduceByArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumProduceByArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumProduceByArtists.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumProduceByArtists.
     */
    distinct?: Enumerable<AlbumProduceByArtistScalarFieldEnum>
  }


  /**
   * AlbumProduceByArtist findMany
   */
  export type AlbumProduceByArtistFindManyArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    /**
     * Filter, which AlbumProduceByArtists to fetch.
     */
    where?: AlbumProduceByArtistWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumProduceByArtists to fetch.
     */
    orderBy?: Enumerable<AlbumProduceByArtistOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumProduceByArtists.
     */
    cursor?: AlbumProduceByArtistWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumProduceByArtists from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumProduceByArtists.
     */
    skip?: number
    distinct?: Enumerable<AlbumProduceByArtistScalarFieldEnum>
  }


  /**
   * AlbumProduceByArtist create
   */
  export type AlbumProduceByArtistCreateArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    /**
     * The data needed to create a AlbumProduceByArtist.
     */
    data: XOR<AlbumProduceByArtistCreateInput, AlbumProduceByArtistUncheckedCreateInput>
  }


  /**
   * AlbumProduceByArtist createMany
   */
  export type AlbumProduceByArtistCreateManyArgs = {
    /**
     * The data used to create many AlbumProduceByArtists.
     */
    data: Enumerable<AlbumProduceByArtistCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AlbumProduceByArtist update
   */
  export type AlbumProduceByArtistUpdateArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    /**
     * The data needed to update a AlbumProduceByArtist.
     */
    data: XOR<AlbumProduceByArtistUpdateInput, AlbumProduceByArtistUncheckedUpdateInput>
    /**
     * Choose, which AlbumProduceByArtist to update.
     */
    where: AlbumProduceByArtistWhereUniqueInput
  }


  /**
   * AlbumProduceByArtist updateMany
   */
  export type AlbumProduceByArtistUpdateManyArgs = {
    /**
     * The data used to update AlbumProduceByArtists.
     */
    data: XOR<AlbumProduceByArtistUpdateManyMutationInput, AlbumProduceByArtistUncheckedUpdateManyInput>
    /**
     * Filter which AlbumProduceByArtists to update
     */
    where?: AlbumProduceByArtistWhereInput
  }


  /**
   * AlbumProduceByArtist upsert
   */
  export type AlbumProduceByArtistUpsertArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    /**
     * The filter to search for the AlbumProduceByArtist to update in case it exists.
     */
    where: AlbumProduceByArtistWhereUniqueInput
    /**
     * In case the AlbumProduceByArtist found by the `where` argument doesn't exist, create a new AlbumProduceByArtist with this data.
     */
    create: XOR<AlbumProduceByArtistCreateInput, AlbumProduceByArtistUncheckedCreateInput>
    /**
     * In case the AlbumProduceByArtist was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumProduceByArtistUpdateInput, AlbumProduceByArtistUncheckedUpdateInput>
  }


  /**
   * AlbumProduceByArtist delete
   */
  export type AlbumProduceByArtistDeleteArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
    /**
     * Filter which AlbumProduceByArtist to delete.
     */
    where: AlbumProduceByArtistWhereUniqueInput
  }


  /**
   * AlbumProduceByArtist deleteMany
   */
  export type AlbumProduceByArtistDeleteManyArgs = {
    /**
     * Filter which AlbumProduceByArtists to delete
     */
    where?: AlbumProduceByArtistWhereInput
  }


  /**
   * AlbumProduceByArtist without action
   */
  export type AlbumProduceByArtistArgs = {
    /**
     * Select specific fields to fetch from the AlbumProduceByArtist
     */
    select?: AlbumProduceByArtistSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumProduceByArtistInclude | null
  }



  /**
   * Model AlbumAvailableMarket
   */


  export type AggregateAlbumAvailableMarket = {
    _count: AlbumAvailableMarketCountAggregateOutputType | null
    _avg: AlbumAvailableMarketAvgAggregateOutputType | null
    _sum: AlbumAvailableMarketSumAggregateOutputType | null
    _min: AlbumAvailableMarketMinAggregateOutputType | null
    _max: AlbumAvailableMarketMaxAggregateOutputType | null
  }

  export type AlbumAvailableMarketAvgAggregateOutputType = {
    albumId: number | null
    tagId: number | null
  }

  export type AlbumAvailableMarketSumAggregateOutputType = {
    albumId: number | null
    tagId: number | null
  }

  export type AlbumAvailableMarketMinAggregateOutputType = {
    albumId: number | null
    tagId: number | null
  }

  export type AlbumAvailableMarketMaxAggregateOutputType = {
    albumId: number | null
    tagId: number | null
  }

  export type AlbumAvailableMarketCountAggregateOutputType = {
    albumId: number
    tagId: number
    _all: number
  }


  export type AlbumAvailableMarketAvgAggregateInputType = {
    albumId?: true
    tagId?: true
  }

  export type AlbumAvailableMarketSumAggregateInputType = {
    albumId?: true
    tagId?: true
  }

  export type AlbumAvailableMarketMinAggregateInputType = {
    albumId?: true
    tagId?: true
  }

  export type AlbumAvailableMarketMaxAggregateInputType = {
    albumId?: true
    tagId?: true
  }

  export type AlbumAvailableMarketCountAggregateInputType = {
    albumId?: true
    tagId?: true
    _all?: true
  }

  export type AlbumAvailableMarketAggregateArgs = {
    /**
     * Filter which AlbumAvailableMarket to aggregate.
     */
    where?: AlbumAvailableMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumAvailableMarkets to fetch.
     */
    orderBy?: Enumerable<AlbumAvailableMarketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumAvailableMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumAvailableMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumAvailableMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumAvailableMarkets
    **/
    _count?: true | AlbumAvailableMarketCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumAvailableMarketAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumAvailableMarketSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumAvailableMarketMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumAvailableMarketMaxAggregateInputType
  }

  export type GetAlbumAvailableMarketAggregateType<T extends AlbumAvailableMarketAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumAvailableMarket]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumAvailableMarket[P]>
      : GetScalarType<T[P], AggregateAlbumAvailableMarket[P]>
  }




  export type AlbumAvailableMarketGroupByArgs = {
    where?: AlbumAvailableMarketWhereInput
    orderBy?: Enumerable<AlbumAvailableMarketOrderByWithAggregationInput>
    by: AlbumAvailableMarketScalarFieldEnum[]
    having?: AlbumAvailableMarketScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumAvailableMarketCountAggregateInputType | true
    _avg?: AlbumAvailableMarketAvgAggregateInputType
    _sum?: AlbumAvailableMarketSumAggregateInputType
    _min?: AlbumAvailableMarketMinAggregateInputType
    _max?: AlbumAvailableMarketMaxAggregateInputType
  }


  export type AlbumAvailableMarketGroupByOutputType = {
    albumId: number
    tagId: number
    _count: AlbumAvailableMarketCountAggregateOutputType | null
    _avg: AlbumAvailableMarketAvgAggregateOutputType | null
    _sum: AlbumAvailableMarketSumAggregateOutputType | null
    _min: AlbumAvailableMarketMinAggregateOutputType | null
    _max: AlbumAvailableMarketMaxAggregateOutputType | null
  }

  type GetAlbumAvailableMarketGroupByPayload<T extends AlbumAvailableMarketGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AlbumAvailableMarketGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumAvailableMarketGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumAvailableMarketGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumAvailableMarketGroupByOutputType[P]>
        }
      >
    >


  export type AlbumAvailableMarketSelect = {
    albumId?: boolean
    tagId?: boolean
    Album?: boolean | AlbumArgs
    Tag?: boolean | TagArgs
  }


  export type AlbumAvailableMarketInclude = {
    Album?: boolean | AlbumArgs
    Tag?: boolean | TagArgs
  }

  export type AlbumAvailableMarketGetPayload<S extends boolean | null | undefined | AlbumAvailableMarketArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AlbumAvailableMarket :
    S extends undefined ? never :
    S extends { include: any } & (AlbumAvailableMarketArgs | AlbumAvailableMarketFindManyArgs)
    ? AlbumAvailableMarket  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Album' ? AlbumGetPayload<S['include'][P]> :
        P extends 'Tag' ? TagGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (AlbumAvailableMarketArgs | AlbumAvailableMarketFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Album' ? AlbumGetPayload<S['select'][P]> :
        P extends 'Tag' ? TagGetPayload<S['select'][P]> :  P extends keyof AlbumAvailableMarket ? AlbumAvailableMarket[P] : never
  } 
      : AlbumAvailableMarket


  type AlbumAvailableMarketCountArgs = 
    Omit<AlbumAvailableMarketFindManyArgs, 'select' | 'include'> & {
      select?: AlbumAvailableMarketCountAggregateInputType | true
    }

  export interface AlbumAvailableMarketDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AlbumAvailableMarket that matches the filter.
     * @param {AlbumAvailableMarketFindUniqueArgs} args - Arguments to find a AlbumAvailableMarket
     * @example
     * // Get one AlbumAvailableMarket
     * const albumAvailableMarket = await prisma.albumAvailableMarket.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumAvailableMarketFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AlbumAvailableMarketFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AlbumAvailableMarket'> extends True ? Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T>> : Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T> | null, null>

    /**
     * Find one AlbumAvailableMarket that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumAvailableMarketFindUniqueOrThrowArgs} args - Arguments to find a AlbumAvailableMarket
     * @example
     * // Get one AlbumAvailableMarket
     * const albumAvailableMarket = await prisma.albumAvailableMarket.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumAvailableMarketFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AlbumAvailableMarketFindUniqueOrThrowArgs>
    ): Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T>>

    /**
     * Find the first AlbumAvailableMarket that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAvailableMarketFindFirstArgs} args - Arguments to find a AlbumAvailableMarket
     * @example
     * // Get one AlbumAvailableMarket
     * const albumAvailableMarket = await prisma.albumAvailableMarket.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumAvailableMarketFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AlbumAvailableMarketFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AlbumAvailableMarket'> extends True ? Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T>> : Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T> | null, null>

    /**
     * Find the first AlbumAvailableMarket that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAvailableMarketFindFirstOrThrowArgs} args - Arguments to find a AlbumAvailableMarket
     * @example
     * // Get one AlbumAvailableMarket
     * const albumAvailableMarket = await prisma.albumAvailableMarket.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumAvailableMarketFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AlbumAvailableMarketFindFirstOrThrowArgs>
    ): Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T>>

    /**
     * Find zero or more AlbumAvailableMarkets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAvailableMarketFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumAvailableMarkets
     * const albumAvailableMarkets = await prisma.albumAvailableMarket.findMany()
     * 
     * // Get first 10 AlbumAvailableMarkets
     * const albumAvailableMarkets = await prisma.albumAvailableMarket.findMany({ take: 10 })
     * 
     * // Only select the `albumId`
     * const albumAvailableMarketWithAlbumIdOnly = await prisma.albumAvailableMarket.findMany({ select: { albumId: true } })
     * 
    **/
    findMany<T extends AlbumAvailableMarketFindManyArgs>(
      args?: SelectSubset<T, AlbumAvailableMarketFindManyArgs>
    ): Prisma.PrismaPromise<Array<AlbumAvailableMarketGetPayload<T>>>

    /**
     * Create a AlbumAvailableMarket.
     * @param {AlbumAvailableMarketCreateArgs} args - Arguments to create a AlbumAvailableMarket.
     * @example
     * // Create one AlbumAvailableMarket
     * const AlbumAvailableMarket = await prisma.albumAvailableMarket.create({
     *   data: {
     *     // ... data to create a AlbumAvailableMarket
     *   }
     * })
     * 
    **/
    create<T extends AlbumAvailableMarketCreateArgs>(
      args: SelectSubset<T, AlbumAvailableMarketCreateArgs>
    ): Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T>>

    /**
     * Create many AlbumAvailableMarkets.
     *     @param {AlbumAvailableMarketCreateManyArgs} args - Arguments to create many AlbumAvailableMarkets.
     *     @example
     *     // Create many AlbumAvailableMarkets
     *     const albumAvailableMarket = await prisma.albumAvailableMarket.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumAvailableMarketCreateManyArgs>(
      args?: SelectSubset<T, AlbumAvailableMarketCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlbumAvailableMarket.
     * @param {AlbumAvailableMarketDeleteArgs} args - Arguments to delete one AlbumAvailableMarket.
     * @example
     * // Delete one AlbumAvailableMarket
     * const AlbumAvailableMarket = await prisma.albumAvailableMarket.delete({
     *   where: {
     *     // ... filter to delete one AlbumAvailableMarket
     *   }
     * })
     * 
    **/
    delete<T extends AlbumAvailableMarketDeleteArgs>(
      args: SelectSubset<T, AlbumAvailableMarketDeleteArgs>
    ): Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T>>

    /**
     * Update one AlbumAvailableMarket.
     * @param {AlbumAvailableMarketUpdateArgs} args - Arguments to update one AlbumAvailableMarket.
     * @example
     * // Update one AlbumAvailableMarket
     * const albumAvailableMarket = await prisma.albumAvailableMarket.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumAvailableMarketUpdateArgs>(
      args: SelectSubset<T, AlbumAvailableMarketUpdateArgs>
    ): Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T>>

    /**
     * Delete zero or more AlbumAvailableMarkets.
     * @param {AlbumAvailableMarketDeleteManyArgs} args - Arguments to filter AlbumAvailableMarkets to delete.
     * @example
     * // Delete a few AlbumAvailableMarkets
     * const { count } = await prisma.albumAvailableMarket.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumAvailableMarketDeleteManyArgs>(
      args?: SelectSubset<T, AlbumAvailableMarketDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumAvailableMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAvailableMarketUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumAvailableMarkets
     * const albumAvailableMarket = await prisma.albumAvailableMarket.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumAvailableMarketUpdateManyArgs>(
      args: SelectSubset<T, AlbumAvailableMarketUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlbumAvailableMarket.
     * @param {AlbumAvailableMarketUpsertArgs} args - Arguments to update or create a AlbumAvailableMarket.
     * @example
     * // Update or create a AlbumAvailableMarket
     * const albumAvailableMarket = await prisma.albumAvailableMarket.upsert({
     *   create: {
     *     // ... data to create a AlbumAvailableMarket
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumAvailableMarket we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumAvailableMarketUpsertArgs>(
      args: SelectSubset<T, AlbumAvailableMarketUpsertArgs>
    ): Prisma__AlbumAvailableMarketClient<AlbumAvailableMarketGetPayload<T>>

    /**
     * Count the number of AlbumAvailableMarkets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAvailableMarketCountArgs} args - Arguments to filter AlbumAvailableMarkets to count.
     * @example
     * // Count the number of AlbumAvailableMarkets
     * const count = await prisma.albumAvailableMarket.count({
     *   where: {
     *     // ... the filter for the AlbumAvailableMarkets we want to count
     *   }
     * })
    **/
    count<T extends AlbumAvailableMarketCountArgs>(
      args?: Subset<T, AlbumAvailableMarketCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumAvailableMarketCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumAvailableMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAvailableMarketAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AlbumAvailableMarketAggregateArgs>(args: Subset<T, AlbumAvailableMarketAggregateArgs>): Prisma.PrismaPromise<GetAlbumAvailableMarketAggregateType<T>>

    /**
     * Group by AlbumAvailableMarket.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumAvailableMarketGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AlbumAvailableMarketGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumAvailableMarketGroupByArgs['orderBy'] }
        : { orderBy?: AlbumAvailableMarketGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AlbumAvailableMarketGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumAvailableMarketGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumAvailableMarket.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AlbumAvailableMarketClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Album<T extends AlbumArgs= {}>(args?: Subset<T, AlbumArgs>): Prisma__AlbumClient<AlbumGetPayload<T> | Null>;

    Tag<T extends TagArgs= {}>(args?: Subset<T, TagArgs>): Prisma__TagClient<TagGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * AlbumAvailableMarket base type for findUnique actions
   */
  export type AlbumAvailableMarketFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    /**
     * Filter, which AlbumAvailableMarket to fetch.
     */
    where: AlbumAvailableMarketWhereUniqueInput
  }

  /**
   * AlbumAvailableMarket findUnique
   */
  export interface AlbumAvailableMarketFindUniqueArgs extends AlbumAvailableMarketFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AlbumAvailableMarket findUniqueOrThrow
   */
  export type AlbumAvailableMarketFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    /**
     * Filter, which AlbumAvailableMarket to fetch.
     */
    where: AlbumAvailableMarketWhereUniqueInput
  }


  /**
   * AlbumAvailableMarket base type for findFirst actions
   */
  export type AlbumAvailableMarketFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    /**
     * Filter, which AlbumAvailableMarket to fetch.
     */
    where?: AlbumAvailableMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumAvailableMarkets to fetch.
     */
    orderBy?: Enumerable<AlbumAvailableMarketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumAvailableMarkets.
     */
    cursor?: AlbumAvailableMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumAvailableMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumAvailableMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumAvailableMarkets.
     */
    distinct?: Enumerable<AlbumAvailableMarketScalarFieldEnum>
  }

  /**
   * AlbumAvailableMarket findFirst
   */
  export interface AlbumAvailableMarketFindFirstArgs extends AlbumAvailableMarketFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AlbumAvailableMarket findFirstOrThrow
   */
  export type AlbumAvailableMarketFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    /**
     * Filter, which AlbumAvailableMarket to fetch.
     */
    where?: AlbumAvailableMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumAvailableMarkets to fetch.
     */
    orderBy?: Enumerable<AlbumAvailableMarketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumAvailableMarkets.
     */
    cursor?: AlbumAvailableMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumAvailableMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumAvailableMarkets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumAvailableMarkets.
     */
    distinct?: Enumerable<AlbumAvailableMarketScalarFieldEnum>
  }


  /**
   * AlbumAvailableMarket findMany
   */
  export type AlbumAvailableMarketFindManyArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    /**
     * Filter, which AlbumAvailableMarkets to fetch.
     */
    where?: AlbumAvailableMarketWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumAvailableMarkets to fetch.
     */
    orderBy?: Enumerable<AlbumAvailableMarketOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumAvailableMarkets.
     */
    cursor?: AlbumAvailableMarketWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumAvailableMarkets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumAvailableMarkets.
     */
    skip?: number
    distinct?: Enumerable<AlbumAvailableMarketScalarFieldEnum>
  }


  /**
   * AlbumAvailableMarket create
   */
  export type AlbumAvailableMarketCreateArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    /**
     * The data needed to create a AlbumAvailableMarket.
     */
    data: XOR<AlbumAvailableMarketCreateInput, AlbumAvailableMarketUncheckedCreateInput>
  }


  /**
   * AlbumAvailableMarket createMany
   */
  export type AlbumAvailableMarketCreateManyArgs = {
    /**
     * The data used to create many AlbumAvailableMarkets.
     */
    data: Enumerable<AlbumAvailableMarketCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AlbumAvailableMarket update
   */
  export type AlbumAvailableMarketUpdateArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    /**
     * The data needed to update a AlbumAvailableMarket.
     */
    data: XOR<AlbumAvailableMarketUpdateInput, AlbumAvailableMarketUncheckedUpdateInput>
    /**
     * Choose, which AlbumAvailableMarket to update.
     */
    where: AlbumAvailableMarketWhereUniqueInput
  }


  /**
   * AlbumAvailableMarket updateMany
   */
  export type AlbumAvailableMarketUpdateManyArgs = {
    /**
     * The data used to update AlbumAvailableMarkets.
     */
    data: XOR<AlbumAvailableMarketUpdateManyMutationInput, AlbumAvailableMarketUncheckedUpdateManyInput>
    /**
     * Filter which AlbumAvailableMarkets to update
     */
    where?: AlbumAvailableMarketWhereInput
  }


  /**
   * AlbumAvailableMarket upsert
   */
  export type AlbumAvailableMarketUpsertArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    /**
     * The filter to search for the AlbumAvailableMarket to update in case it exists.
     */
    where: AlbumAvailableMarketWhereUniqueInput
    /**
     * In case the AlbumAvailableMarket found by the `where` argument doesn't exist, create a new AlbumAvailableMarket with this data.
     */
    create: XOR<AlbumAvailableMarketCreateInput, AlbumAvailableMarketUncheckedCreateInput>
    /**
     * In case the AlbumAvailableMarket was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumAvailableMarketUpdateInput, AlbumAvailableMarketUncheckedUpdateInput>
  }


  /**
   * AlbumAvailableMarket delete
   */
  export type AlbumAvailableMarketDeleteArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
    /**
     * Filter which AlbumAvailableMarket to delete.
     */
    where: AlbumAvailableMarketWhereUniqueInput
  }


  /**
   * AlbumAvailableMarket deleteMany
   */
  export type AlbumAvailableMarketDeleteManyArgs = {
    /**
     * Filter which AlbumAvailableMarkets to delete
     */
    where?: AlbumAvailableMarketWhereInput
  }


  /**
   * AlbumAvailableMarket without action
   */
  export type AlbumAvailableMarketArgs = {
    /**
     * Select specific fields to fetch from the AlbumAvailableMarket
     */
    select?: AlbumAvailableMarketSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AlbumAvailableMarketInclude | null
  }



  /**
   * Model ArtistInGenres
   */


  export type AggregateArtistInGenres = {
    _count: ArtistInGenresCountAggregateOutputType | null
    _avg: ArtistInGenresAvgAggregateOutputType | null
    _sum: ArtistInGenresSumAggregateOutputType | null
    _min: ArtistInGenresMinAggregateOutputType | null
    _max: ArtistInGenresMaxAggregateOutputType | null
  }

  export type ArtistInGenresAvgAggregateOutputType = {
    artistId: number | null
    tagId: number | null
  }

  export type ArtistInGenresSumAggregateOutputType = {
    artistId: number | null
    tagId: number | null
  }

  export type ArtistInGenresMinAggregateOutputType = {
    artistId: number | null
    tagId: number | null
  }

  export type ArtistInGenresMaxAggregateOutputType = {
    artistId: number | null
    tagId: number | null
  }

  export type ArtistInGenresCountAggregateOutputType = {
    artistId: number
    tagId: number
    _all: number
  }


  export type ArtistInGenresAvgAggregateInputType = {
    artistId?: true
    tagId?: true
  }

  export type ArtistInGenresSumAggregateInputType = {
    artistId?: true
    tagId?: true
  }

  export type ArtistInGenresMinAggregateInputType = {
    artistId?: true
    tagId?: true
  }

  export type ArtistInGenresMaxAggregateInputType = {
    artistId?: true
    tagId?: true
  }

  export type ArtistInGenresCountAggregateInputType = {
    artistId?: true
    tagId?: true
    _all?: true
  }

  export type ArtistInGenresAggregateArgs = {
    /**
     * Filter which ArtistInGenres to aggregate.
     */
    where?: ArtistInGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistInGenres to fetch.
     */
    orderBy?: Enumerable<ArtistInGenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistInGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistInGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistInGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistInGenres
    **/
    _count?: true | ArtistInGenresCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistInGenresAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistInGenresSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistInGenresMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistInGenresMaxAggregateInputType
  }

  export type GetArtistInGenresAggregateType<T extends ArtistInGenresAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistInGenres]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistInGenres[P]>
      : GetScalarType<T[P], AggregateArtistInGenres[P]>
  }




  export type ArtistInGenresGroupByArgs = {
    where?: ArtistInGenresWhereInput
    orderBy?: Enumerable<ArtistInGenresOrderByWithAggregationInput>
    by: ArtistInGenresScalarFieldEnum[]
    having?: ArtistInGenresScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistInGenresCountAggregateInputType | true
    _avg?: ArtistInGenresAvgAggregateInputType
    _sum?: ArtistInGenresSumAggregateInputType
    _min?: ArtistInGenresMinAggregateInputType
    _max?: ArtistInGenresMaxAggregateInputType
  }


  export type ArtistInGenresGroupByOutputType = {
    artistId: number
    tagId: number
    _count: ArtistInGenresCountAggregateOutputType | null
    _avg: ArtistInGenresAvgAggregateOutputType | null
    _sum: ArtistInGenresSumAggregateOutputType | null
    _min: ArtistInGenresMinAggregateOutputType | null
    _max: ArtistInGenresMaxAggregateOutputType | null
  }

  type GetArtistInGenresGroupByPayload<T extends ArtistInGenresGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ArtistInGenresGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistInGenresGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistInGenresGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistInGenresGroupByOutputType[P]>
        }
      >
    >


  export type ArtistInGenresSelect = {
    artistId?: boolean
    tagId?: boolean
    Artist?: boolean | ArtistArgs
    Tag?: boolean | TagArgs
  }


  export type ArtistInGenresInclude = {
    Artist?: boolean | ArtistArgs
    Tag?: boolean | TagArgs
  }

  export type ArtistInGenresGetPayload<S extends boolean | null | undefined | ArtistInGenresArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ArtistInGenres :
    S extends undefined ? never :
    S extends { include: any } & (ArtistInGenresArgs | ArtistInGenresFindManyArgs)
    ? ArtistInGenres  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Artist' ? ArtistGetPayload<S['include'][P]> :
        P extends 'Tag' ? TagGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ArtistInGenresArgs | ArtistInGenresFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Artist' ? ArtistGetPayload<S['select'][P]> :
        P extends 'Tag' ? TagGetPayload<S['select'][P]> :  P extends keyof ArtistInGenres ? ArtistInGenres[P] : never
  } 
      : ArtistInGenres


  type ArtistInGenresCountArgs = 
    Omit<ArtistInGenresFindManyArgs, 'select' | 'include'> & {
      select?: ArtistInGenresCountAggregateInputType | true
    }

  export interface ArtistInGenresDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ArtistInGenres that matches the filter.
     * @param {ArtistInGenresFindUniqueArgs} args - Arguments to find a ArtistInGenres
     * @example
     * // Get one ArtistInGenres
     * const artistInGenres = await prisma.artistInGenres.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistInGenresFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ArtistInGenresFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ArtistInGenres'> extends True ? Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T>> : Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T> | null, null>

    /**
     * Find one ArtistInGenres that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistInGenresFindUniqueOrThrowArgs} args - Arguments to find a ArtistInGenres
     * @example
     * // Get one ArtistInGenres
     * const artistInGenres = await prisma.artistInGenres.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistInGenresFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ArtistInGenresFindUniqueOrThrowArgs>
    ): Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T>>

    /**
     * Find the first ArtistInGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistInGenresFindFirstArgs} args - Arguments to find a ArtistInGenres
     * @example
     * // Get one ArtistInGenres
     * const artistInGenres = await prisma.artistInGenres.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistInGenresFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ArtistInGenresFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ArtistInGenres'> extends True ? Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T>> : Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T> | null, null>

    /**
     * Find the first ArtistInGenres that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistInGenresFindFirstOrThrowArgs} args - Arguments to find a ArtistInGenres
     * @example
     * // Get one ArtistInGenres
     * const artistInGenres = await prisma.artistInGenres.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistInGenresFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArtistInGenresFindFirstOrThrowArgs>
    ): Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T>>

    /**
     * Find zero or more ArtistInGenres that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistInGenresFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistInGenres
     * const artistInGenres = await prisma.artistInGenres.findMany()
     * 
     * // Get first 10 ArtistInGenres
     * const artistInGenres = await prisma.artistInGenres.findMany({ take: 10 })
     * 
     * // Only select the `artistId`
     * const artistInGenresWithArtistIdOnly = await prisma.artistInGenres.findMany({ select: { artistId: true } })
     * 
    **/
    findMany<T extends ArtistInGenresFindManyArgs>(
      args?: SelectSubset<T, ArtistInGenresFindManyArgs>
    ): Prisma.PrismaPromise<Array<ArtistInGenresGetPayload<T>>>

    /**
     * Create a ArtistInGenres.
     * @param {ArtistInGenresCreateArgs} args - Arguments to create a ArtistInGenres.
     * @example
     * // Create one ArtistInGenres
     * const ArtistInGenres = await prisma.artistInGenres.create({
     *   data: {
     *     // ... data to create a ArtistInGenres
     *   }
     * })
     * 
    **/
    create<T extends ArtistInGenresCreateArgs>(
      args: SelectSubset<T, ArtistInGenresCreateArgs>
    ): Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T>>

    /**
     * Create many ArtistInGenres.
     *     @param {ArtistInGenresCreateManyArgs} args - Arguments to create many ArtistInGenres.
     *     @example
     *     // Create many ArtistInGenres
     *     const artistInGenres = await prisma.artistInGenres.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistInGenresCreateManyArgs>(
      args?: SelectSubset<T, ArtistInGenresCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArtistInGenres.
     * @param {ArtistInGenresDeleteArgs} args - Arguments to delete one ArtistInGenres.
     * @example
     * // Delete one ArtistInGenres
     * const ArtistInGenres = await prisma.artistInGenres.delete({
     *   where: {
     *     // ... filter to delete one ArtistInGenres
     *   }
     * })
     * 
    **/
    delete<T extends ArtistInGenresDeleteArgs>(
      args: SelectSubset<T, ArtistInGenresDeleteArgs>
    ): Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T>>

    /**
     * Update one ArtistInGenres.
     * @param {ArtistInGenresUpdateArgs} args - Arguments to update one ArtistInGenres.
     * @example
     * // Update one ArtistInGenres
     * const artistInGenres = await prisma.artistInGenres.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistInGenresUpdateArgs>(
      args: SelectSubset<T, ArtistInGenresUpdateArgs>
    ): Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T>>

    /**
     * Delete zero or more ArtistInGenres.
     * @param {ArtistInGenresDeleteManyArgs} args - Arguments to filter ArtistInGenres to delete.
     * @example
     * // Delete a few ArtistInGenres
     * const { count } = await prisma.artistInGenres.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistInGenresDeleteManyArgs>(
      args?: SelectSubset<T, ArtistInGenresDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistInGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistInGenresUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistInGenres
     * const artistInGenres = await prisma.artistInGenres.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistInGenresUpdateManyArgs>(
      args: SelectSubset<T, ArtistInGenresUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArtistInGenres.
     * @param {ArtistInGenresUpsertArgs} args - Arguments to update or create a ArtistInGenres.
     * @example
     * // Update or create a ArtistInGenres
     * const artistInGenres = await prisma.artistInGenres.upsert({
     *   create: {
     *     // ... data to create a ArtistInGenres
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistInGenres we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistInGenresUpsertArgs>(
      args: SelectSubset<T, ArtistInGenresUpsertArgs>
    ): Prisma__ArtistInGenresClient<ArtistInGenresGetPayload<T>>

    /**
     * Count the number of ArtistInGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistInGenresCountArgs} args - Arguments to filter ArtistInGenres to count.
     * @example
     * // Count the number of ArtistInGenres
     * const count = await prisma.artistInGenres.count({
     *   where: {
     *     // ... the filter for the ArtistInGenres we want to count
     *   }
     * })
    **/
    count<T extends ArtistInGenresCountArgs>(
      args?: Subset<T, ArtistInGenresCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistInGenresCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistInGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistInGenresAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistInGenresAggregateArgs>(args: Subset<T, ArtistInGenresAggregateArgs>): Prisma.PrismaPromise<GetArtistInGenresAggregateType<T>>

    /**
     * Group by ArtistInGenres.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistInGenresGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistInGenresGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistInGenresGroupByArgs['orderBy'] }
        : { orderBy?: ArtistInGenresGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistInGenresGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistInGenresGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistInGenres.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ArtistInGenresClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Artist<T extends ArtistArgs= {}>(args?: Subset<T, ArtistArgs>): Prisma__ArtistClient<ArtistGetPayload<T> | Null>;

    Tag<T extends TagArgs= {}>(args?: Subset<T, TagArgs>): Prisma__TagClient<TagGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ArtistInGenres base type for findUnique actions
   */
  export type ArtistInGenresFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    /**
     * Filter, which ArtistInGenres to fetch.
     */
    where: ArtistInGenresWhereUniqueInput
  }

  /**
   * ArtistInGenres findUnique
   */
  export interface ArtistInGenresFindUniqueArgs extends ArtistInGenresFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ArtistInGenres findUniqueOrThrow
   */
  export type ArtistInGenresFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    /**
     * Filter, which ArtistInGenres to fetch.
     */
    where: ArtistInGenresWhereUniqueInput
  }


  /**
   * ArtistInGenres base type for findFirst actions
   */
  export type ArtistInGenresFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    /**
     * Filter, which ArtistInGenres to fetch.
     */
    where?: ArtistInGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistInGenres to fetch.
     */
    orderBy?: Enumerable<ArtistInGenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistInGenres.
     */
    cursor?: ArtistInGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistInGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistInGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistInGenres.
     */
    distinct?: Enumerable<ArtistInGenresScalarFieldEnum>
  }

  /**
   * ArtistInGenres findFirst
   */
  export interface ArtistInGenresFindFirstArgs extends ArtistInGenresFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ArtistInGenres findFirstOrThrow
   */
  export type ArtistInGenresFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    /**
     * Filter, which ArtistInGenres to fetch.
     */
    where?: ArtistInGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistInGenres to fetch.
     */
    orderBy?: Enumerable<ArtistInGenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistInGenres.
     */
    cursor?: ArtistInGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistInGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistInGenres.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistInGenres.
     */
    distinct?: Enumerable<ArtistInGenresScalarFieldEnum>
  }


  /**
   * ArtistInGenres findMany
   */
  export type ArtistInGenresFindManyArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    /**
     * Filter, which ArtistInGenres to fetch.
     */
    where?: ArtistInGenresWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistInGenres to fetch.
     */
    orderBy?: Enumerable<ArtistInGenresOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistInGenres.
     */
    cursor?: ArtistInGenresWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistInGenres from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistInGenres.
     */
    skip?: number
    distinct?: Enumerable<ArtistInGenresScalarFieldEnum>
  }


  /**
   * ArtistInGenres create
   */
  export type ArtistInGenresCreateArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    /**
     * The data needed to create a ArtistInGenres.
     */
    data: XOR<ArtistInGenresCreateInput, ArtistInGenresUncheckedCreateInput>
  }


  /**
   * ArtistInGenres createMany
   */
  export type ArtistInGenresCreateManyArgs = {
    /**
     * The data used to create many ArtistInGenres.
     */
    data: Enumerable<ArtistInGenresCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ArtistInGenres update
   */
  export type ArtistInGenresUpdateArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    /**
     * The data needed to update a ArtistInGenres.
     */
    data: XOR<ArtistInGenresUpdateInput, ArtistInGenresUncheckedUpdateInput>
    /**
     * Choose, which ArtistInGenres to update.
     */
    where: ArtistInGenresWhereUniqueInput
  }


  /**
   * ArtistInGenres updateMany
   */
  export type ArtistInGenresUpdateManyArgs = {
    /**
     * The data used to update ArtistInGenres.
     */
    data: XOR<ArtistInGenresUpdateManyMutationInput, ArtistInGenresUncheckedUpdateManyInput>
    /**
     * Filter which ArtistInGenres to update
     */
    where?: ArtistInGenresWhereInput
  }


  /**
   * ArtistInGenres upsert
   */
  export type ArtistInGenresUpsertArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    /**
     * The filter to search for the ArtistInGenres to update in case it exists.
     */
    where: ArtistInGenresWhereUniqueInput
    /**
     * In case the ArtistInGenres found by the `where` argument doesn't exist, create a new ArtistInGenres with this data.
     */
    create: XOR<ArtistInGenresCreateInput, ArtistInGenresUncheckedCreateInput>
    /**
     * In case the ArtistInGenres was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistInGenresUpdateInput, ArtistInGenresUncheckedUpdateInput>
  }


  /**
   * ArtistInGenres delete
   */
  export type ArtistInGenresDeleteArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
    /**
     * Filter which ArtistInGenres to delete.
     */
    where: ArtistInGenresWhereUniqueInput
  }


  /**
   * ArtistInGenres deleteMany
   */
  export type ArtistInGenresDeleteManyArgs = {
    /**
     * Filter which ArtistInGenres to delete
     */
    where?: ArtistInGenresWhereInput
  }


  /**
   * ArtistInGenres without action
   */
  export type ArtistInGenresArgs = {
    /**
     * Select specific fields to fetch from the ArtistInGenres
     */
    select?: ArtistInGenresSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistInGenresInclude | null
  }



  /**
   * Model ArtistOnFollowing
   */


  export type AggregateArtistOnFollowing = {
    _count: ArtistOnFollowingCountAggregateOutputType | null
    _avg: ArtistOnFollowingAvgAggregateOutputType | null
    _sum: ArtistOnFollowingSumAggregateOutputType | null
    _min: ArtistOnFollowingMinAggregateOutputType | null
    _max: ArtistOnFollowingMaxAggregateOutputType | null
  }

  export type ArtistOnFollowingAvgAggregateOutputType = {
    artistId: number | null
    userId: number | null
  }

  export type ArtistOnFollowingSumAggregateOutputType = {
    artistId: number | null
    userId: number | null
  }

  export type ArtistOnFollowingMinAggregateOutputType = {
    artistId: number | null
    userId: number | null
  }

  export type ArtistOnFollowingMaxAggregateOutputType = {
    artistId: number | null
    userId: number | null
  }

  export type ArtistOnFollowingCountAggregateOutputType = {
    artistId: number
    userId: number
    _all: number
  }


  export type ArtistOnFollowingAvgAggregateInputType = {
    artistId?: true
    userId?: true
  }

  export type ArtistOnFollowingSumAggregateInputType = {
    artistId?: true
    userId?: true
  }

  export type ArtistOnFollowingMinAggregateInputType = {
    artistId?: true
    userId?: true
  }

  export type ArtistOnFollowingMaxAggregateInputType = {
    artistId?: true
    userId?: true
  }

  export type ArtistOnFollowingCountAggregateInputType = {
    artistId?: true
    userId?: true
    _all?: true
  }

  export type ArtistOnFollowingAggregateArgs = {
    /**
     * Filter which ArtistOnFollowing to aggregate.
     */
    where?: ArtistOnFollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistOnFollowings to fetch.
     */
    orderBy?: Enumerable<ArtistOnFollowingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistOnFollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistOnFollowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistOnFollowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistOnFollowings
    **/
    _count?: true | ArtistOnFollowingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistOnFollowingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistOnFollowingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistOnFollowingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistOnFollowingMaxAggregateInputType
  }

  export type GetArtistOnFollowingAggregateType<T extends ArtistOnFollowingAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistOnFollowing]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistOnFollowing[P]>
      : GetScalarType<T[P], AggregateArtistOnFollowing[P]>
  }




  export type ArtistOnFollowingGroupByArgs = {
    where?: ArtistOnFollowingWhereInput
    orderBy?: Enumerable<ArtistOnFollowingOrderByWithAggregationInput>
    by: ArtistOnFollowingScalarFieldEnum[]
    having?: ArtistOnFollowingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistOnFollowingCountAggregateInputType | true
    _avg?: ArtistOnFollowingAvgAggregateInputType
    _sum?: ArtistOnFollowingSumAggregateInputType
    _min?: ArtistOnFollowingMinAggregateInputType
    _max?: ArtistOnFollowingMaxAggregateInputType
  }


  export type ArtistOnFollowingGroupByOutputType = {
    artistId: number
    userId: number
    _count: ArtistOnFollowingCountAggregateOutputType | null
    _avg: ArtistOnFollowingAvgAggregateOutputType | null
    _sum: ArtistOnFollowingSumAggregateOutputType | null
    _min: ArtistOnFollowingMinAggregateOutputType | null
    _max: ArtistOnFollowingMaxAggregateOutputType | null
  }

  type GetArtistOnFollowingGroupByPayload<T extends ArtistOnFollowingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ArtistOnFollowingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistOnFollowingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistOnFollowingGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistOnFollowingGroupByOutputType[P]>
        }
      >
    >


  export type ArtistOnFollowingSelect = {
    artistId?: boolean
    userId?: boolean
    Artist?: boolean | ArtistArgs
    User?: boolean | UserArgs
  }


  export type ArtistOnFollowingInclude = {
    Artist?: boolean | ArtistArgs
    User?: boolean | UserArgs
  }

  export type ArtistOnFollowingGetPayload<S extends boolean | null | undefined | ArtistOnFollowingArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ArtistOnFollowing :
    S extends undefined ? never :
    S extends { include: any } & (ArtistOnFollowingArgs | ArtistOnFollowingFindManyArgs)
    ? ArtistOnFollowing  & {
    [P in TruthyKeys<S['include']>]:
        P extends 'Artist' ? ArtistGetPayload<S['include'][P]> :
        P extends 'User' ? UserGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ArtistOnFollowingArgs | ArtistOnFollowingFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Artist' ? ArtistGetPayload<S['select'][P]> :
        P extends 'User' ? UserGetPayload<S['select'][P]> :  P extends keyof ArtistOnFollowing ? ArtistOnFollowing[P] : never
  } 
      : ArtistOnFollowing


  type ArtistOnFollowingCountArgs = 
    Omit<ArtistOnFollowingFindManyArgs, 'select' | 'include'> & {
      select?: ArtistOnFollowingCountAggregateInputType | true
    }

  export interface ArtistOnFollowingDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ArtistOnFollowing that matches the filter.
     * @param {ArtistOnFollowingFindUniqueArgs} args - Arguments to find a ArtistOnFollowing
     * @example
     * // Get one ArtistOnFollowing
     * const artistOnFollowing = await prisma.artistOnFollowing.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistOnFollowingFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ArtistOnFollowingFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ArtistOnFollowing'> extends True ? Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T>> : Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T> | null, null>

    /**
     * Find one ArtistOnFollowing that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistOnFollowingFindUniqueOrThrowArgs} args - Arguments to find a ArtistOnFollowing
     * @example
     * // Get one ArtistOnFollowing
     * const artistOnFollowing = await prisma.artistOnFollowing.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistOnFollowingFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ArtistOnFollowingFindUniqueOrThrowArgs>
    ): Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T>>

    /**
     * Find the first ArtistOnFollowing that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnFollowingFindFirstArgs} args - Arguments to find a ArtistOnFollowing
     * @example
     * // Get one ArtistOnFollowing
     * const artistOnFollowing = await prisma.artistOnFollowing.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistOnFollowingFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ArtistOnFollowingFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ArtistOnFollowing'> extends True ? Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T>> : Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T> | null, null>

    /**
     * Find the first ArtistOnFollowing that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnFollowingFindFirstOrThrowArgs} args - Arguments to find a ArtistOnFollowing
     * @example
     * // Get one ArtistOnFollowing
     * const artistOnFollowing = await prisma.artistOnFollowing.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistOnFollowingFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArtistOnFollowingFindFirstOrThrowArgs>
    ): Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T>>

    /**
     * Find zero or more ArtistOnFollowings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnFollowingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistOnFollowings
     * const artistOnFollowings = await prisma.artistOnFollowing.findMany()
     * 
     * // Get first 10 ArtistOnFollowings
     * const artistOnFollowings = await prisma.artistOnFollowing.findMany({ take: 10 })
     * 
     * // Only select the `artistId`
     * const artistOnFollowingWithArtistIdOnly = await prisma.artistOnFollowing.findMany({ select: { artistId: true } })
     * 
    **/
    findMany<T extends ArtistOnFollowingFindManyArgs>(
      args?: SelectSubset<T, ArtistOnFollowingFindManyArgs>
    ): Prisma.PrismaPromise<Array<ArtistOnFollowingGetPayload<T>>>

    /**
     * Create a ArtistOnFollowing.
     * @param {ArtistOnFollowingCreateArgs} args - Arguments to create a ArtistOnFollowing.
     * @example
     * // Create one ArtistOnFollowing
     * const ArtistOnFollowing = await prisma.artistOnFollowing.create({
     *   data: {
     *     // ... data to create a ArtistOnFollowing
     *   }
     * })
     * 
    **/
    create<T extends ArtistOnFollowingCreateArgs>(
      args: SelectSubset<T, ArtistOnFollowingCreateArgs>
    ): Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T>>

    /**
     * Create many ArtistOnFollowings.
     *     @param {ArtistOnFollowingCreateManyArgs} args - Arguments to create many ArtistOnFollowings.
     *     @example
     *     // Create many ArtistOnFollowings
     *     const artistOnFollowing = await prisma.artistOnFollowing.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistOnFollowingCreateManyArgs>(
      args?: SelectSubset<T, ArtistOnFollowingCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArtistOnFollowing.
     * @param {ArtistOnFollowingDeleteArgs} args - Arguments to delete one ArtistOnFollowing.
     * @example
     * // Delete one ArtistOnFollowing
     * const ArtistOnFollowing = await prisma.artistOnFollowing.delete({
     *   where: {
     *     // ... filter to delete one ArtistOnFollowing
     *   }
     * })
     * 
    **/
    delete<T extends ArtistOnFollowingDeleteArgs>(
      args: SelectSubset<T, ArtistOnFollowingDeleteArgs>
    ): Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T>>

    /**
     * Update one ArtistOnFollowing.
     * @param {ArtistOnFollowingUpdateArgs} args - Arguments to update one ArtistOnFollowing.
     * @example
     * // Update one ArtistOnFollowing
     * const artistOnFollowing = await prisma.artistOnFollowing.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistOnFollowingUpdateArgs>(
      args: SelectSubset<T, ArtistOnFollowingUpdateArgs>
    ): Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T>>

    /**
     * Delete zero or more ArtistOnFollowings.
     * @param {ArtistOnFollowingDeleteManyArgs} args - Arguments to filter ArtistOnFollowings to delete.
     * @example
     * // Delete a few ArtistOnFollowings
     * const { count } = await prisma.artistOnFollowing.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistOnFollowingDeleteManyArgs>(
      args?: SelectSubset<T, ArtistOnFollowingDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistOnFollowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnFollowingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistOnFollowings
     * const artistOnFollowing = await prisma.artistOnFollowing.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistOnFollowingUpdateManyArgs>(
      args: SelectSubset<T, ArtistOnFollowingUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArtistOnFollowing.
     * @param {ArtistOnFollowingUpsertArgs} args - Arguments to update or create a ArtistOnFollowing.
     * @example
     * // Update or create a ArtistOnFollowing
     * const artistOnFollowing = await prisma.artistOnFollowing.upsert({
     *   create: {
     *     // ... data to create a ArtistOnFollowing
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistOnFollowing we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistOnFollowingUpsertArgs>(
      args: SelectSubset<T, ArtistOnFollowingUpsertArgs>
    ): Prisma__ArtistOnFollowingClient<ArtistOnFollowingGetPayload<T>>

    /**
     * Count the number of ArtistOnFollowings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnFollowingCountArgs} args - Arguments to filter ArtistOnFollowings to count.
     * @example
     * // Count the number of ArtistOnFollowings
     * const count = await prisma.artistOnFollowing.count({
     *   where: {
     *     // ... the filter for the ArtistOnFollowings we want to count
     *   }
     * })
    **/
    count<T extends ArtistOnFollowingCountArgs>(
      args?: Subset<T, ArtistOnFollowingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistOnFollowingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistOnFollowing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnFollowingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ArtistOnFollowingAggregateArgs>(args: Subset<T, ArtistOnFollowingAggregateArgs>): Prisma.PrismaPromise<GetArtistOnFollowingAggregateType<T>>

    /**
     * Group by ArtistOnFollowing.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistOnFollowingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ArtistOnFollowingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistOnFollowingGroupByArgs['orderBy'] }
        : { orderBy?: ArtistOnFollowingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends TupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ArtistOnFollowingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistOnFollowingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistOnFollowing.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ArtistOnFollowingClient<T, Null = never> implements Prisma.PrismaPromise<T> {
    private readonly _dmmf;
    private readonly _queryType;
    private readonly _rootField;
    private readonly _clientMethod;
    private readonly _args;
    private readonly _dataPath;
    private readonly _errorFormat;
    private readonly _measurePerformance?;
    private _isList;
    private _callsite;
    private _requestPromise?;
    readonly [Symbol.toStringTag]: 'PrismaPromise';
    constructor(_dmmf: runtime.DMMFClass, _queryType: 'query' | 'mutation', _rootField: string, _clientMethod: string, _args: any, _dataPath: string[], _errorFormat: ErrorFormat, _measurePerformance?: boolean | undefined, _isList?: boolean);

    Artist<T extends ArtistArgs= {}>(args?: Subset<T, ArtistArgs>): Prisma__ArtistClient<ArtistGetPayload<T> | Null>;

    User<T extends UserArgs= {}>(args?: Subset<T, UserArgs>): Prisma__UserClient<UserGetPayload<T> | Null>;

    private get _document();
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): Promise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): Promise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): Promise<T>;
  }



  // Custom InputTypes

  /**
   * ArtistOnFollowing base type for findUnique actions
   */
  export type ArtistOnFollowingFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    /**
     * Filter, which ArtistOnFollowing to fetch.
     */
    where: ArtistOnFollowingWhereUniqueInput
  }

  /**
   * ArtistOnFollowing findUnique
   */
  export interface ArtistOnFollowingFindUniqueArgs extends ArtistOnFollowingFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ArtistOnFollowing findUniqueOrThrow
   */
  export type ArtistOnFollowingFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    /**
     * Filter, which ArtistOnFollowing to fetch.
     */
    where: ArtistOnFollowingWhereUniqueInput
  }


  /**
   * ArtistOnFollowing base type for findFirst actions
   */
  export type ArtistOnFollowingFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    /**
     * Filter, which ArtistOnFollowing to fetch.
     */
    where?: ArtistOnFollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistOnFollowings to fetch.
     */
    orderBy?: Enumerable<ArtistOnFollowingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistOnFollowings.
     */
    cursor?: ArtistOnFollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistOnFollowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistOnFollowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistOnFollowings.
     */
    distinct?: Enumerable<ArtistOnFollowingScalarFieldEnum>
  }

  /**
   * ArtistOnFollowing findFirst
   */
  export interface ArtistOnFollowingFindFirstArgs extends ArtistOnFollowingFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ArtistOnFollowing findFirstOrThrow
   */
  export type ArtistOnFollowingFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    /**
     * Filter, which ArtistOnFollowing to fetch.
     */
    where?: ArtistOnFollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistOnFollowings to fetch.
     */
    orderBy?: Enumerable<ArtistOnFollowingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistOnFollowings.
     */
    cursor?: ArtistOnFollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistOnFollowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistOnFollowings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistOnFollowings.
     */
    distinct?: Enumerable<ArtistOnFollowingScalarFieldEnum>
  }


  /**
   * ArtistOnFollowing findMany
   */
  export type ArtistOnFollowingFindManyArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    /**
     * Filter, which ArtistOnFollowings to fetch.
     */
    where?: ArtistOnFollowingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistOnFollowings to fetch.
     */
    orderBy?: Enumerable<ArtistOnFollowingOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistOnFollowings.
     */
    cursor?: ArtistOnFollowingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistOnFollowings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistOnFollowings.
     */
    skip?: number
    distinct?: Enumerable<ArtistOnFollowingScalarFieldEnum>
  }


  /**
   * ArtistOnFollowing create
   */
  export type ArtistOnFollowingCreateArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    /**
     * The data needed to create a ArtistOnFollowing.
     */
    data: XOR<ArtistOnFollowingCreateInput, ArtistOnFollowingUncheckedCreateInput>
  }


  /**
   * ArtistOnFollowing createMany
   */
  export type ArtistOnFollowingCreateManyArgs = {
    /**
     * The data used to create many ArtistOnFollowings.
     */
    data: Enumerable<ArtistOnFollowingCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ArtistOnFollowing update
   */
  export type ArtistOnFollowingUpdateArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    /**
     * The data needed to update a ArtistOnFollowing.
     */
    data: XOR<ArtistOnFollowingUpdateInput, ArtistOnFollowingUncheckedUpdateInput>
    /**
     * Choose, which ArtistOnFollowing to update.
     */
    where: ArtistOnFollowingWhereUniqueInput
  }


  /**
   * ArtistOnFollowing updateMany
   */
  export type ArtistOnFollowingUpdateManyArgs = {
    /**
     * The data used to update ArtistOnFollowings.
     */
    data: XOR<ArtistOnFollowingUpdateManyMutationInput, ArtistOnFollowingUncheckedUpdateManyInput>
    /**
     * Filter which ArtistOnFollowings to update
     */
    where?: ArtistOnFollowingWhereInput
  }


  /**
   * ArtistOnFollowing upsert
   */
  export type ArtistOnFollowingUpsertArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    /**
     * The filter to search for the ArtistOnFollowing to update in case it exists.
     */
    where: ArtistOnFollowingWhereUniqueInput
    /**
     * In case the ArtistOnFollowing found by the `where` argument doesn't exist, create a new ArtistOnFollowing with this data.
     */
    create: XOR<ArtistOnFollowingCreateInput, ArtistOnFollowingUncheckedCreateInput>
    /**
     * In case the ArtistOnFollowing was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistOnFollowingUpdateInput, ArtistOnFollowingUncheckedUpdateInput>
  }


  /**
   * ArtistOnFollowing delete
   */
  export type ArtistOnFollowingDeleteArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
    /**
     * Filter which ArtistOnFollowing to delete.
     */
    where: ArtistOnFollowingWhereUniqueInput
  }


  /**
   * ArtistOnFollowing deleteMany
   */
  export type ArtistOnFollowingDeleteManyArgs = {
    /**
     * Filter which ArtistOnFollowings to delete
     */
    where?: ArtistOnFollowingWhereInput
  }


  /**
   * ArtistOnFollowing without action
   */
  export type ArtistOnFollowingArgs = {
    /**
     * Select specific fields to fetch from the ArtistOnFollowing
     */
    select?: ArtistOnFollowingSelect | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: ArtistOnFollowingInclude | null
  }



  /**
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AlbumAvailableMarketScalarFieldEnum: {
    albumId: 'albumId',
    tagId: 'tagId'
  };

  export type AlbumAvailableMarketScalarFieldEnum = (typeof AlbumAvailableMarketScalarFieldEnum)[keyof typeof AlbumAvailableMarketScalarFieldEnum]


  export const AlbumProduceByArtistScalarFieldEnum: {
    albumId: 'albumId',
    artistId: 'artistId'
  };

  export type AlbumProduceByArtistScalarFieldEnum = (typeof AlbumProduceByArtistScalarFieldEnum)[keyof typeof AlbumProduceByArtistScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
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
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const ArtistInGenresScalarFieldEnum: {
    artistId: 'artistId',
    tagId: 'tagId'
  };

  export type ArtistInGenresScalarFieldEnum = (typeof ArtistInGenresScalarFieldEnum)[keyof typeof ArtistInGenresScalarFieldEnum]


  export const ArtistOnFollowingScalarFieldEnum: {
    artistId: 'artistId',
    userId: 'userId'
  };

  export type ArtistOnFollowingScalarFieldEnum = (typeof ArtistOnFollowingScalarFieldEnum)[keyof typeof ArtistOnFollowingScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    uid: 'uid',
    name: 'name',
    popularity: 'popularity',
    imageUrl: 'imageUrl'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    hashId: 'hashId',
    name: 'name',
    icon: 'icon'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const PlaylistOnFollowerScalarFieldEnum: {
    playlistId: 'playlistId',
    userId: 'userId'
  };

  export type PlaylistOnFollowerScalarFieldEnum = (typeof PlaylistOnFollowerScalarFieldEnum)[keyof typeof PlaylistOnFollowerScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
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
  };

  export type PlaylistScalarFieldEnum = (typeof PlaylistScalarFieldEnum)[keyof typeof PlaylistScalarFieldEnum]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const TagScalarFieldEnum: {
    id: 'id',
    code: 'code',
    type: 'type',
    name: 'name'
  };

  export type TagScalarFieldEnum = (typeof TagScalarFieldEnum)[keyof typeof TagScalarFieldEnum]


  export const TrackProduceByArtistScalarFieldEnum: {
    trackId: 'trackId',
    artistId: 'artistId'
  };

  export type TrackProduceByArtistScalarFieldEnum = (typeof TrackProduceByArtistScalarFieldEnum)[keyof typeof TrackProduceByArtistScalarFieldEnum]


  export const TrackScalarFieldEnum: {
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
  };

  export type TrackScalarFieldEnum = (typeof TrackScalarFieldEnum)[keyof typeof TrackScalarFieldEnum]


  export const TracksAvailableMarketScalarFieldEnum: {
    tagId: 'tagId',
    trackId: 'trackId'
  };

  export type TracksAvailableMarketScalarFieldEnum = (typeof TracksAvailableMarketScalarFieldEnum)[keyof typeof TracksAvailableMarketScalarFieldEnum]


  export const TracksOnPlaylistScalarFieldEnum: {
    playlistId: 'playlistId',
    trackId: 'trackId'
  };

  export type TracksOnPlaylistScalarFieldEnum = (typeof TracksOnPlaylistScalarFieldEnum)[keyof typeof TracksOnPlaylistScalarFieldEnum]


  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
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
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  /**
   * Deep Input Types
   */


  export type TagWhereInput = {
    AND?: Enumerable<TagWhereInput>
    OR?: Enumerable<TagWhereInput>
    NOT?: Enumerable<TagWhereInput>
    id?: IntFilter | number
    code?: StringFilter | string
    type?: StringFilter | string
    name?: StringFilter | string
    AlbumAvailableMarket?: AlbumAvailableMarketListRelationFilter
    TracksAvailableMarket?: TracksAvailableMarketListRelationFilter
    ArtistInGenres?: ArtistInGenresListRelationFilter
  }

  export type TagOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
    AlbumAvailableMarket?: AlbumAvailableMarketOrderByRelationAggregateInput
    TracksAvailableMarket?: TracksAvailableMarketOrderByRelationAggregateInput
    ArtistInGenres?: ArtistInGenresOrderByRelationAggregateInput
  }

  export type TagWhereUniqueInput = {
    id?: number
    code?: string
  }

  export type TagOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
    _count?: TagCountOrderByAggregateInput
    _avg?: TagAvgOrderByAggregateInput
    _max?: TagMaxOrderByAggregateInput
    _min?: TagMinOrderByAggregateInput
    _sum?: TagSumOrderByAggregateInput
  }

  export type TagScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TagScalarWhereWithAggregatesInput>
    OR?: Enumerable<TagScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TagScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    code?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
  }

  export type CategoryWhereInput = {
    AND?: Enumerable<CategoryWhereInput>
    OR?: Enumerable<CategoryWhereInput>
    NOT?: Enumerable<CategoryWhereInput>
    id?: IntFilter | number
    hashId?: StringFilter | string
    name?: StringFilter | string
    icon?: StringFilter | string
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    hashId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type CategoryWhereUniqueInput = {
    id?: number
    hashId?: string
  }

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    hashId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _avg?: CategoryAvgOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
    _sum?: CategorySumOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    OR?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    NOT?: Enumerable<CategoryScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    hashId?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    icon?: StringWithAggregatesFilter | string
  }

  export type UserWhereInput = {
    AND?: Enumerable<UserWhereInput>
    OR?: Enumerable<UserWhereInput>
    NOT?: Enumerable<UserWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringNullableFilter | string | null
    name?: StringFilter | string
    email?: StringNullableFilter | string | null
    authType?: StringFilter | string
    type?: StringFilter | string
    country?: StringFilter | string
    explicitContentFilterEnabled?: BoolFilter | boolean
    explicitContentFilterLocked?: BoolFilter | boolean
    imagesId?: StringNullableFilter | string | null
    product?: StringFilter | string
    Playlist?: PlaylistListRelationFilter
    FollowPlaylists?: PlaylistOnFollowerListRelationFilter
    FollowingArtists?: ArtistOnFollowingListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    authType?: SortOrder
    type?: SortOrder
    country?: SortOrder
    explicitContentFilterEnabled?: SortOrder
    explicitContentFilterLocked?: SortOrder
    imagesId?: SortOrder
    product?: SortOrder
    Playlist?: PlaylistOrderByRelationAggregateInput
    FollowPlaylists?: PlaylistOnFollowerOrderByRelationAggregateInput
    FollowingArtists?: ArtistOnFollowingOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = {
    id?: number
  }

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    authType?: SortOrder
    type?: SortOrder
    country?: SortOrder
    explicitContentFilterEnabled?: SortOrder
    explicitContentFilterLocked?: SortOrder
    imagesId?: SortOrder
    product?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: Enumerable<UserScalarWhereWithAggregatesInput>
    OR?: Enumerable<UserScalarWhereWithAggregatesInput>
    NOT?: Enumerable<UserScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    uid?: StringNullableWithAggregatesFilter | string | null
    name?: StringWithAggregatesFilter | string
    email?: StringNullableWithAggregatesFilter | string | null
    authType?: StringWithAggregatesFilter | string
    type?: StringWithAggregatesFilter | string
    country?: StringWithAggregatesFilter | string
    explicitContentFilterEnabled?: BoolWithAggregatesFilter | boolean
    explicitContentFilterLocked?: BoolWithAggregatesFilter | boolean
    imagesId?: StringNullableWithAggregatesFilter | string | null
    product?: StringWithAggregatesFilter | string
  }

  export type ArtistWhereInput = {
    AND?: Enumerable<ArtistWhereInput>
    OR?: Enumerable<ArtistWhereInput>
    NOT?: Enumerable<ArtistWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringFilter | string
    name?: StringFilter | string
    popularity?: IntNullableFilter | number | null
    imageUrl?: StringNullableFilter | string | null
    Genres?: ArtistInGenresListRelationFilter
    TrackProduceByArtist?: TrackProduceByArtistListRelationFilter
    AlbumProduceByArtist?: AlbumProduceByArtistListRelationFilter
    Followers?: ArtistOnFollowingListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    popularity?: SortOrder
    imageUrl?: SortOrder
    Genres?: ArtistInGenresOrderByRelationAggregateInput
    TrackProduceByArtist?: TrackProduceByArtistOrderByRelationAggregateInput
    AlbumProduceByArtist?: AlbumProduceByArtistOrderByRelationAggregateInput
    Followers?: ArtistOnFollowingOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = {
    id?: number
    uid?: string
  }

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    popularity?: SortOrder
    imageUrl?: SortOrder
    _count?: ArtistCountOrderByAggregateInput
    _avg?: ArtistAvgOrderByAggregateInput
    _max?: ArtistMaxOrderByAggregateInput
    _min?: ArtistMinOrderByAggregateInput
    _sum?: ArtistSumOrderByAggregateInput
  }

  export type ArtistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ArtistScalarWhereWithAggregatesInput>
    OR?: Enumerable<ArtistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ArtistScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    uid?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    popularity?: IntNullableWithAggregatesFilter | number | null
    imageUrl?: StringNullableWithAggregatesFilter | string | null
  }

  export type TrackWhereInput = {
    AND?: Enumerable<TrackWhereInput>
    OR?: Enumerable<TrackWhereInput>
    NOT?: Enumerable<TrackWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringFilter | string
    name?: StringFilter | string
    discNumber?: IntFilter | number
    durationMs?: IntFilter | number
    explicit?: BoolFilter | boolean
    popularity?: IntNullableFilter | number | null
    previewUrl?: StringNullableFilter | string | null
    trackNumber?: IntFilter | number
    isLocal?: BoolFilter | boolean
    albumId?: IntNullableFilter | number | null
    availableMarkets?: TracksAvailableMarketListRelationFilter
    Artists?: TrackProduceByArtistListRelationFilter
    InPlaylist?: TracksOnPlaylistListRelationFilter
    Album?: XOR<AlbumRelationFilter, AlbumWhereInput> | null
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    discNumber?: SortOrder
    durationMs?: SortOrder
    explicit?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
    isLocal?: SortOrder
    albumId?: SortOrder
    availableMarkets?: TracksAvailableMarketOrderByRelationAggregateInput
    Artists?: TrackProduceByArtistOrderByRelationAggregateInput
    InPlaylist?: TracksOnPlaylistOrderByRelationAggregateInput
    Album?: AlbumOrderByWithRelationInput
  }

  export type TrackWhereUniqueInput = {
    id?: number
    uid?: string
  }

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    discNumber?: SortOrder
    durationMs?: SortOrder
    explicit?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
    isLocal?: SortOrder
    albumId?: SortOrder
    _count?: TrackCountOrderByAggregateInput
    _avg?: TrackAvgOrderByAggregateInput
    _max?: TrackMaxOrderByAggregateInput
    _min?: TrackMinOrderByAggregateInput
    _sum?: TrackSumOrderByAggregateInput
  }

  export type TrackScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TrackScalarWhereWithAggregatesInput>
    OR?: Enumerable<TrackScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TrackScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    uid?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    discNumber?: IntWithAggregatesFilter | number
    durationMs?: IntWithAggregatesFilter | number
    explicit?: BoolWithAggregatesFilter | boolean
    popularity?: IntNullableWithAggregatesFilter | number | null
    previewUrl?: StringNullableWithAggregatesFilter | string | null
    trackNumber?: IntWithAggregatesFilter | number
    isLocal?: BoolWithAggregatesFilter | boolean
    albumId?: IntNullableWithAggregatesFilter | number | null
  }

  export type AlbumWhereInput = {
    AND?: Enumerable<AlbumWhereInput>
    OR?: Enumerable<AlbumWhereInput>
    NOT?: Enumerable<AlbumWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringFilter | string
    albumType?: StringFilter | string
    totalTracks?: IntFilter | number
    name?: StringFilter | string
    releaseDate?: DateTimeFilter | Date | string
    releaseDatePrecision?: StringFilter | string
    albumGroup?: StringFilter | string
    copyrights?: StringNullableFilter | string | null
    imageUrl?: StringNullableFilter | string | null
    availableMarkets?: AlbumAvailableMarketListRelationFilter
    Artists?: AlbumProduceByArtistListRelationFilter
    Tracks?: TrackListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    albumGroup?: SortOrder
    copyrights?: SortOrder
    imageUrl?: SortOrder
    availableMarkets?: AlbumAvailableMarketOrderByRelationAggregateInput
    Artists?: AlbumProduceByArtistOrderByRelationAggregateInput
    Tracks?: TrackOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = {
    id?: number
    uid?: string
  }

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    albumGroup?: SortOrder
    copyrights?: SortOrder
    imageUrl?: SortOrder
    _count?: AlbumCountOrderByAggregateInput
    _avg?: AlbumAvgOrderByAggregateInput
    _max?: AlbumMaxOrderByAggregateInput
    _min?: AlbumMinOrderByAggregateInput
    _sum?: AlbumSumOrderByAggregateInput
  }

  export type AlbumScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AlbumScalarWhereWithAggregatesInput>
    OR?: Enumerable<AlbumScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AlbumScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    uid?: StringWithAggregatesFilter | string
    albumType?: StringWithAggregatesFilter | string
    totalTracks?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    releaseDate?: DateTimeWithAggregatesFilter | Date | string
    releaseDatePrecision?: StringWithAggregatesFilter | string
    albumGroup?: StringWithAggregatesFilter | string
    copyrights?: StringNullableWithAggregatesFilter | string | null
    imageUrl?: StringNullableWithAggregatesFilter | string | null
  }

  export type PlaylistWhereInput = {
    AND?: Enumerable<PlaylistWhereInput>
    OR?: Enumerable<PlaylistWhereInput>
    NOT?: Enumerable<PlaylistWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringNullableFilter | string | null
    collaborative?: BoolFilter | boolean
    description?: StringFilter | string
    name?: StringFilter | string
    public?: BoolFilter | boolean
    snapshotId?: StringNullableFilter | string | null
    primaryColor?: StringNullableFilter | string | null
    tracksIds?: IntFilter | number
    ownerId?: IntFilter | number
    imagesId?: StringNullableFilter | string | null
    tracks?: TracksOnPlaylistListRelationFilter
    owner?: XOR<UserRelationFilter, UserWhereInput>
    followers?: PlaylistOnFollowerListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    collaborative?: SortOrder
    description?: SortOrder
    name?: SortOrder
    public?: SortOrder
    snapshotId?: SortOrder
    primaryColor?: SortOrder
    tracksIds?: SortOrder
    ownerId?: SortOrder
    imagesId?: SortOrder
    tracks?: TracksOnPlaylistOrderByRelationAggregateInput
    owner?: UserOrderByWithRelationInput
    followers?: PlaylistOnFollowerOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = {
    id?: number
  }

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    collaborative?: SortOrder
    description?: SortOrder
    name?: SortOrder
    public?: SortOrder
    snapshotId?: SortOrder
    primaryColor?: SortOrder
    tracksIds?: SortOrder
    ownerId?: SortOrder
    imagesId?: SortOrder
    _count?: PlaylistCountOrderByAggregateInput
    _avg?: PlaylistAvgOrderByAggregateInput
    _max?: PlaylistMaxOrderByAggregateInput
    _min?: PlaylistMinOrderByAggregateInput
    _sum?: PlaylistSumOrderByAggregateInput
  }

  export type PlaylistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlaylistScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlaylistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlaylistScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    uid?: StringNullableWithAggregatesFilter | string | null
    collaborative?: BoolWithAggregatesFilter | boolean
    description?: StringWithAggregatesFilter | string
    name?: StringWithAggregatesFilter | string
    public?: BoolWithAggregatesFilter | boolean
    snapshotId?: StringNullableWithAggregatesFilter | string | null
    primaryColor?: StringNullableWithAggregatesFilter | string | null
    tracksIds?: IntWithAggregatesFilter | number
    ownerId?: IntWithAggregatesFilter | number
    imagesId?: StringNullableWithAggregatesFilter | string | null
  }

  export type TracksOnPlaylistWhereInput = {
    AND?: Enumerable<TracksOnPlaylistWhereInput>
    OR?: Enumerable<TracksOnPlaylistWhereInput>
    NOT?: Enumerable<TracksOnPlaylistWhereInput>
    playlistId?: IntFilter | number
    trackId?: IntFilter | number
    Playlist?: XOR<PlaylistRelationFilter, PlaylistWhereInput>
    Track?: XOR<TrackRelationFilter, TrackWhereInput>
  }

  export type TracksOnPlaylistOrderByWithRelationInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
    Playlist?: PlaylistOrderByWithRelationInput
    Track?: TrackOrderByWithRelationInput
  }

  export type TracksOnPlaylistWhereUniqueInput = {
    playlistId_trackId?: TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInput
  }

  export type TracksOnPlaylistOrderByWithAggregationInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
    _count?: TracksOnPlaylistCountOrderByAggregateInput
    _avg?: TracksOnPlaylistAvgOrderByAggregateInput
    _max?: TracksOnPlaylistMaxOrderByAggregateInput
    _min?: TracksOnPlaylistMinOrderByAggregateInput
    _sum?: TracksOnPlaylistSumOrderByAggregateInput
  }

  export type TracksOnPlaylistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TracksOnPlaylistScalarWhereWithAggregatesInput>
    OR?: Enumerable<TracksOnPlaylistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TracksOnPlaylistScalarWhereWithAggregatesInput>
    playlistId?: IntWithAggregatesFilter | number
    trackId?: IntWithAggregatesFilter | number
  }

  export type TracksAvailableMarketWhereInput = {
    AND?: Enumerable<TracksAvailableMarketWhereInput>
    OR?: Enumerable<TracksAvailableMarketWhereInput>
    NOT?: Enumerable<TracksAvailableMarketWhereInput>
    tagId?: IntFilter | number
    trackId?: IntFilter | number
    Tag?: XOR<TagRelationFilter, TagWhereInput>
    Track?: XOR<TrackRelationFilter, TrackWhereInput>
  }

  export type TracksAvailableMarketOrderByWithRelationInput = {
    tagId?: SortOrder
    trackId?: SortOrder
    Tag?: TagOrderByWithRelationInput
    Track?: TrackOrderByWithRelationInput
  }

  export type TracksAvailableMarketWhereUniqueInput = {
    trackId_tagId?: TracksAvailableMarketTrackIdTagIdCompoundUniqueInput
  }

  export type TracksAvailableMarketOrderByWithAggregationInput = {
    tagId?: SortOrder
    trackId?: SortOrder
    _count?: TracksAvailableMarketCountOrderByAggregateInput
    _avg?: TracksAvailableMarketAvgOrderByAggregateInput
    _max?: TracksAvailableMarketMaxOrderByAggregateInput
    _min?: TracksAvailableMarketMinOrderByAggregateInput
    _sum?: TracksAvailableMarketSumOrderByAggregateInput
  }

  export type TracksAvailableMarketScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TracksAvailableMarketScalarWhereWithAggregatesInput>
    OR?: Enumerable<TracksAvailableMarketScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TracksAvailableMarketScalarWhereWithAggregatesInput>
    tagId?: IntWithAggregatesFilter | number
    trackId?: IntWithAggregatesFilter | number
  }

  export type TrackProduceByArtistWhereInput = {
    AND?: Enumerable<TrackProduceByArtistWhereInput>
    OR?: Enumerable<TrackProduceByArtistWhereInput>
    NOT?: Enumerable<TrackProduceByArtistWhereInput>
    trackId?: IntFilter | number
    artistId?: IntFilter | number
    Track?: XOR<TrackRelationFilter, TrackWhereInput>
    Artists?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }

  export type TrackProduceByArtistOrderByWithRelationInput = {
    trackId?: SortOrder
    artistId?: SortOrder
    Track?: TrackOrderByWithRelationInput
    Artists?: ArtistOrderByWithRelationInput
  }

  export type TrackProduceByArtistWhereUniqueInput = {
    trackId_artistId?: TrackProduceByArtistTrackIdArtistIdCompoundUniqueInput
  }

  export type TrackProduceByArtistOrderByWithAggregationInput = {
    trackId?: SortOrder
    artistId?: SortOrder
    _count?: TrackProduceByArtistCountOrderByAggregateInput
    _avg?: TrackProduceByArtistAvgOrderByAggregateInput
    _max?: TrackProduceByArtistMaxOrderByAggregateInput
    _min?: TrackProduceByArtistMinOrderByAggregateInput
    _sum?: TrackProduceByArtistSumOrderByAggregateInput
  }

  export type TrackProduceByArtistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TrackProduceByArtistScalarWhereWithAggregatesInput>
    OR?: Enumerable<TrackProduceByArtistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TrackProduceByArtistScalarWhereWithAggregatesInput>
    trackId?: IntWithAggregatesFilter | number
    artistId?: IntWithAggregatesFilter | number
  }

  export type PlaylistOnFollowerWhereInput = {
    AND?: Enumerable<PlaylistOnFollowerWhereInput>
    OR?: Enumerable<PlaylistOnFollowerWhereInput>
    NOT?: Enumerable<PlaylistOnFollowerWhereInput>
    playlistId?: IntFilter | number
    userId?: IntFilter | number
    Playlist?: XOR<PlaylistRelationFilter, PlaylistWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type PlaylistOnFollowerOrderByWithRelationInput = {
    playlistId?: SortOrder
    userId?: SortOrder
    Playlist?: PlaylistOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type PlaylistOnFollowerWhereUniqueInput = {
    playlistId_userId?: PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInput
  }

  export type PlaylistOnFollowerOrderByWithAggregationInput = {
    playlistId?: SortOrder
    userId?: SortOrder
    _count?: PlaylistOnFollowerCountOrderByAggregateInput
    _avg?: PlaylistOnFollowerAvgOrderByAggregateInput
    _max?: PlaylistOnFollowerMaxOrderByAggregateInput
    _min?: PlaylistOnFollowerMinOrderByAggregateInput
    _sum?: PlaylistOnFollowerSumOrderByAggregateInput
  }

  export type PlaylistOnFollowerScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlaylistOnFollowerScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlaylistOnFollowerScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlaylistOnFollowerScalarWhereWithAggregatesInput>
    playlistId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
  }

  export type AlbumProduceByArtistWhereInput = {
    AND?: Enumerable<AlbumProduceByArtistWhereInput>
    OR?: Enumerable<AlbumProduceByArtistWhereInput>
    NOT?: Enumerable<AlbumProduceByArtistWhereInput>
    albumId?: IntFilter | number
    artistId?: IntFilter | number
    Album?: XOR<AlbumRelationFilter, AlbumWhereInput>
    Artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
  }

  export type AlbumProduceByArtistOrderByWithRelationInput = {
    albumId?: SortOrder
    artistId?: SortOrder
    Album?: AlbumOrderByWithRelationInput
    Artist?: ArtistOrderByWithRelationInput
  }

  export type AlbumProduceByArtistWhereUniqueInput = {
    albumId_artistId?: AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInput
  }

  export type AlbumProduceByArtistOrderByWithAggregationInput = {
    albumId?: SortOrder
    artistId?: SortOrder
    _count?: AlbumProduceByArtistCountOrderByAggregateInput
    _avg?: AlbumProduceByArtistAvgOrderByAggregateInput
    _max?: AlbumProduceByArtistMaxOrderByAggregateInput
    _min?: AlbumProduceByArtistMinOrderByAggregateInput
    _sum?: AlbumProduceByArtistSumOrderByAggregateInput
  }

  export type AlbumProduceByArtistScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AlbumProduceByArtistScalarWhereWithAggregatesInput>
    OR?: Enumerable<AlbumProduceByArtistScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AlbumProduceByArtistScalarWhereWithAggregatesInput>
    albumId?: IntWithAggregatesFilter | number
    artistId?: IntWithAggregatesFilter | number
  }

  export type AlbumAvailableMarketWhereInput = {
    AND?: Enumerable<AlbumAvailableMarketWhereInput>
    OR?: Enumerable<AlbumAvailableMarketWhereInput>
    NOT?: Enumerable<AlbumAvailableMarketWhereInput>
    albumId?: IntFilter | number
    tagId?: IntFilter | number
    Album?: XOR<AlbumRelationFilter, AlbumWhereInput>
    Tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type AlbumAvailableMarketOrderByWithRelationInput = {
    albumId?: SortOrder
    tagId?: SortOrder
    Album?: AlbumOrderByWithRelationInput
    Tag?: TagOrderByWithRelationInput
  }

  export type AlbumAvailableMarketWhereUniqueInput = {
    albumId_tagId?: AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInput
  }

  export type AlbumAvailableMarketOrderByWithAggregationInput = {
    albumId?: SortOrder
    tagId?: SortOrder
    _count?: AlbumAvailableMarketCountOrderByAggregateInput
    _avg?: AlbumAvailableMarketAvgOrderByAggregateInput
    _max?: AlbumAvailableMarketMaxOrderByAggregateInput
    _min?: AlbumAvailableMarketMinOrderByAggregateInput
    _sum?: AlbumAvailableMarketSumOrderByAggregateInput
  }

  export type AlbumAvailableMarketScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AlbumAvailableMarketScalarWhereWithAggregatesInput>
    OR?: Enumerable<AlbumAvailableMarketScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AlbumAvailableMarketScalarWhereWithAggregatesInput>
    albumId?: IntWithAggregatesFilter | number
    tagId?: IntWithAggregatesFilter | number
  }

  export type ArtistInGenresWhereInput = {
    AND?: Enumerable<ArtistInGenresWhereInput>
    OR?: Enumerable<ArtistInGenresWhereInput>
    NOT?: Enumerable<ArtistInGenresWhereInput>
    artistId?: IntFilter | number
    tagId?: IntFilter | number
    Artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
    Tag?: XOR<TagRelationFilter, TagWhereInput>
  }

  export type ArtistInGenresOrderByWithRelationInput = {
    artistId?: SortOrder
    tagId?: SortOrder
    Artist?: ArtistOrderByWithRelationInput
    Tag?: TagOrderByWithRelationInput
  }

  export type ArtistInGenresWhereUniqueInput = {
    artistId_tagId?: ArtistInGenresArtistIdTagIdCompoundUniqueInput
  }

  export type ArtistInGenresOrderByWithAggregationInput = {
    artistId?: SortOrder
    tagId?: SortOrder
    _count?: ArtistInGenresCountOrderByAggregateInput
    _avg?: ArtistInGenresAvgOrderByAggregateInput
    _max?: ArtistInGenresMaxOrderByAggregateInput
    _min?: ArtistInGenresMinOrderByAggregateInput
    _sum?: ArtistInGenresSumOrderByAggregateInput
  }

  export type ArtistInGenresScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ArtistInGenresScalarWhereWithAggregatesInput>
    OR?: Enumerable<ArtistInGenresScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ArtistInGenresScalarWhereWithAggregatesInput>
    artistId?: IntWithAggregatesFilter | number
    tagId?: IntWithAggregatesFilter | number
  }

  export type ArtistOnFollowingWhereInput = {
    AND?: Enumerable<ArtistOnFollowingWhereInput>
    OR?: Enumerable<ArtistOnFollowingWhereInput>
    NOT?: Enumerable<ArtistOnFollowingWhereInput>
    artistId?: IntFilter | number
    userId?: IntFilter | number
    Artist?: XOR<ArtistRelationFilter, ArtistWhereInput>
    User?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type ArtistOnFollowingOrderByWithRelationInput = {
    artistId?: SortOrder
    userId?: SortOrder
    Artist?: ArtistOrderByWithRelationInput
    User?: UserOrderByWithRelationInput
  }

  export type ArtistOnFollowingWhereUniqueInput = {
    userId_artistId?: ArtistOnFollowingUserIdArtistIdCompoundUniqueInput
  }

  export type ArtistOnFollowingOrderByWithAggregationInput = {
    artistId?: SortOrder
    userId?: SortOrder
    _count?: ArtistOnFollowingCountOrderByAggregateInput
    _avg?: ArtistOnFollowingAvgOrderByAggregateInput
    _max?: ArtistOnFollowingMaxOrderByAggregateInput
    _min?: ArtistOnFollowingMinOrderByAggregateInput
    _sum?: ArtistOnFollowingSumOrderByAggregateInput
  }

  export type ArtistOnFollowingScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ArtistOnFollowingScalarWhereWithAggregatesInput>
    OR?: Enumerable<ArtistOnFollowingScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ArtistOnFollowingScalarWhereWithAggregatesInput>
    artistId?: IntWithAggregatesFilter | number
    userId?: IntWithAggregatesFilter | number
  }

  export type TagCreateInput = {
    code: string
    type: string
    name: string
    AlbumAvailableMarket?: AlbumAvailableMarketCreateNestedManyWithoutTagInput
    TracksAvailableMarket?: TracksAvailableMarketCreateNestedManyWithoutTagInput
    ArtistInGenres?: ArtistInGenresCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateInput = {
    id?: number
    code: string
    type: string
    name: string
    AlbumAvailableMarket?: AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInput
    TracksAvailableMarket?: TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInput
    ArtistInGenres?: ArtistInGenresUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagUpdateInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    AlbumAvailableMarket?: AlbumAvailableMarketUpdateManyWithoutTagNestedInput
    TracksAvailableMarket?: TracksAvailableMarketUpdateManyWithoutTagNestedInput
    ArtistInGenres?: ArtistInGenresUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    AlbumAvailableMarket?: AlbumAvailableMarketUncheckedUpdateManyWithoutTagNestedInput
    TracksAvailableMarket?: TracksAvailableMarketUncheckedUpdateManyWithoutTagNestedInput
    ArtistInGenres?: ArtistInGenresUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TagCreateManyInput = {
    id?: number
    code: string
    type: string
    name: string
  }

  export type TagUpdateManyMutationInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type TagUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateInput = {
    hashId: string
    name: string
    icon: string
  }

  export type CategoryUncheckedCreateInput = {
    id?: number
    hashId: string
    name: string
    icon: string
  }

  export type CategoryUpdateInput = {
    hashId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryCreateManyInput = {
    id?: number
    hashId: string
    name: string
    icon: string
  }

  export type CategoryUpdateManyMutationInput = {
    hashId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    hashId?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    icon?: StringFieldUpdateOperationsInput | string
  }

  export type UserCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    name: string
    email?: string | null
    authType?: string
    type?: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId?: string | null
    product: string
    Playlist?: PlaylistCreateNestedManyWithoutOwnerInput
    FollowPlaylists?: PlaylistOnFollowerCreateNestedManyWithoutUserInput
    FollowingArtists?: ArtistOnFollowingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    name: string
    email?: string | null
    authType?: string
    type?: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId?: string | null
    product: string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    FollowPlaylists?: PlaylistOnFollowerUncheckedCreateNestedManyWithoutUserInput
    FollowingArtists?: ArtistOnFollowingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    Playlist?: PlaylistUpdateManyWithoutOwnerNestedInput
    FollowPlaylists?: PlaylistOnFollowerUpdateManyWithoutUserNestedInput
    FollowingArtists?: ArtistOnFollowingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    FollowPlaylists?: PlaylistOnFollowerUncheckedUpdateManyWithoutUserNestedInput
    FollowingArtists?: ArtistOnFollowingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    name: string
    email?: string | null
    authType?: string
    type?: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId?: string | null
    product: string
  }

  export type UserUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistCreateNestedManyWithoutArtistInput
    Followers?: ArtistOnFollowingCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput
    Followers?: ArtistOnFollowingUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUpdateManyWithoutArtistNestedInput
    Followers?: ArtistOnFollowingUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInput
    Followers?: ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
  }

  export type ArtistUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    availableMarkets?: TracksAvailableMarketCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    albumId?: number | null
    availableMarkets?: TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    availableMarkets?: TracksAvailableMarketUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    availableMarkets?: TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    albumId?: number | null
  }

  export type TrackUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type AlbumCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date | string
    releaseDatePrecision: string
    albumGroup: string
    copyrights?: string | null
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketCreateNestedManyWithoutAlbumInput
    Artists?: AlbumProduceByArtistCreateNestedManyWithoutAlbumInput
    Tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date | string
    releaseDatePrecision: string
    albumGroup: string
    copyrights?: string | null
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInput
    Artists?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInput
    Tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput
    Artists?: AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInput
    Artists?: AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date | string
    releaseDatePrecision: string
    albumGroup: string
    copyrights?: string | null
    imageUrl?: string | null
  }

  export type AlbumUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    imagesId?: string | null
    tracks?: TracksOnPlaylistCreateNestedManyWithoutPlaylistInput
    owner: UserCreateNestedOneWithoutPlaylistInput
    followers?: PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    ownerId: number
    imagesId?: string | null
    tracks?: TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
    followers?: PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksOnPlaylistUpdateManyWithoutPlaylistNestedInput
    owner?: UserUpdateOneRequiredWithoutPlaylistNestedInput
    followers?: PlaylistOnFollowerUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksOnPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
    followers?: PlaylistOnFollowerUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    ownerId: number
    imagesId?: string | null
  }

  export type PlaylistUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TracksOnPlaylistCreateInput = {
    Playlist: PlaylistCreateNestedOneWithoutTracksInput
    Track: TrackCreateNestedOneWithoutInPlaylistInput
  }

  export type TracksOnPlaylistUncheckedCreateInput = {
    playlistId: number
    trackId: number
  }

  export type TracksOnPlaylistUpdateInput = {
    Playlist?: PlaylistUpdateOneRequiredWithoutTracksNestedInput
    Track?: TrackUpdateOneRequiredWithoutInPlaylistNestedInput
  }

  export type TracksOnPlaylistUncheckedUpdateInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksOnPlaylistCreateManyInput = {
    playlistId: number
    trackId: number
  }

  export type TracksOnPlaylistUpdateManyMutationInput = {

  }

  export type TracksOnPlaylistUncheckedUpdateManyInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksAvailableMarketCreateInput = {
    Tag: TagCreateNestedOneWithoutTracksAvailableMarketInput
    Track: TrackCreateNestedOneWithoutAvailableMarketsInput
  }

  export type TracksAvailableMarketUncheckedCreateInput = {
    tagId: number
    trackId: number
  }

  export type TracksAvailableMarketUpdateInput = {
    Tag?: TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput
    Track?: TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput
  }

  export type TracksAvailableMarketUncheckedUpdateInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksAvailableMarketCreateManyInput = {
    tagId: number
    trackId: number
  }

  export type TracksAvailableMarketUpdateManyMutationInput = {

  }

  export type TracksAvailableMarketUncheckedUpdateManyInput = {
    tagId?: IntFieldUpdateOperationsInput | number
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackProduceByArtistCreateInput = {
    Track: TrackCreateNestedOneWithoutArtistsInput
    Artists: ArtistCreateNestedOneWithoutTrackProduceByArtistInput
  }

  export type TrackProduceByArtistUncheckedCreateInput = {
    trackId: number
    artistId: number
  }

  export type TrackProduceByArtistUpdateInput = {
    Track?: TrackUpdateOneRequiredWithoutArtistsNestedInput
    Artists?: ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput
  }

  export type TrackProduceByArtistUncheckedUpdateInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackProduceByArtistCreateManyInput = {
    trackId: number
    artistId: number
  }

  export type TrackProduceByArtistUpdateManyMutationInput = {

  }

  export type TrackProduceByArtistUncheckedUpdateManyInput = {
    trackId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistOnFollowerCreateInput = {
    Playlist: PlaylistCreateNestedOneWithoutFollowersInput
    User: UserCreateNestedOneWithoutFollowPlaylistsInput
  }

  export type PlaylistOnFollowerUncheckedCreateInput = {
    playlistId: number
    userId: number
  }

  export type PlaylistOnFollowerUpdateInput = {
    Playlist?: PlaylistUpdateOneRequiredWithoutFollowersNestedInput
    User?: UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput
  }

  export type PlaylistOnFollowerUncheckedUpdateInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistOnFollowerCreateManyInput = {
    playlistId: number
    userId: number
  }

  export type PlaylistOnFollowerUpdateManyMutationInput = {

  }

  export type PlaylistOnFollowerUncheckedUpdateManyInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumProduceByArtistCreateInput = {
    Album: AlbumCreateNestedOneWithoutArtistsInput
    Artist: ArtistCreateNestedOneWithoutAlbumProduceByArtistInput
  }

  export type AlbumProduceByArtistUncheckedCreateInput = {
    albumId: number
    artistId: number
  }

  export type AlbumProduceByArtistUpdateInput = {
    Album?: AlbumUpdateOneRequiredWithoutArtistsNestedInput
    Artist?: ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput
  }

  export type AlbumProduceByArtistUncheckedUpdateInput = {
    albumId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumProduceByArtistCreateManyInput = {
    albumId: number
    artistId: number
  }

  export type AlbumProduceByArtistUpdateManyMutationInput = {

  }

  export type AlbumProduceByArtistUncheckedUpdateManyInput = {
    albumId?: IntFieldUpdateOperationsInput | number
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumAvailableMarketCreateInput = {
    Album: AlbumCreateNestedOneWithoutAvailableMarketsInput
    Tag: TagCreateNestedOneWithoutAlbumAvailableMarketInput
  }

  export type AlbumAvailableMarketUncheckedCreateInput = {
    albumId: number
    tagId: number
  }

  export type AlbumAvailableMarketUpdateInput = {
    Album?: AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput
    Tag?: TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput
  }

  export type AlbumAvailableMarketUncheckedUpdateInput = {
    albumId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumAvailableMarketCreateManyInput = {
    albumId: number
    tagId: number
  }

  export type AlbumAvailableMarketUpdateManyMutationInput = {

  }

  export type AlbumAvailableMarketUncheckedUpdateManyInput = {
    albumId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistInGenresCreateInput = {
    Artist: ArtistCreateNestedOneWithoutGenresInput
    Tag: TagCreateNestedOneWithoutArtistInGenresInput
  }

  export type ArtistInGenresUncheckedCreateInput = {
    artistId: number
    tagId: number
  }

  export type ArtistInGenresUpdateInput = {
    Artist?: ArtistUpdateOneRequiredWithoutGenresNestedInput
    Tag?: TagUpdateOneRequiredWithoutArtistInGenresNestedInput
  }

  export type ArtistInGenresUncheckedUpdateInput = {
    artistId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistInGenresCreateManyInput = {
    artistId: number
    tagId: number
  }

  export type ArtistInGenresUpdateManyMutationInput = {

  }

  export type ArtistInGenresUncheckedUpdateManyInput = {
    artistId?: IntFieldUpdateOperationsInput | number
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistOnFollowingCreateInput = {
    Artist: ArtistCreateNestedOneWithoutFollowersInput
    User: UserCreateNestedOneWithoutFollowingArtistsInput
  }

  export type ArtistOnFollowingUncheckedCreateInput = {
    artistId: number
    userId: number
  }

  export type ArtistOnFollowingUpdateInput = {
    Artist?: ArtistUpdateOneRequiredWithoutFollowersNestedInput
    User?: UserUpdateOneRequiredWithoutFollowingArtistsNestedInput
  }

  export type ArtistOnFollowingUncheckedUpdateInput = {
    artistId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistOnFollowingCreateManyInput = {
    artistId: number
    userId: number
  }

  export type ArtistOnFollowingUpdateManyMutationInput = {

  }

  export type ArtistOnFollowingUncheckedUpdateManyInput = {
    artistId?: IntFieldUpdateOperationsInput | number
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type IntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type StringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringFilter | string
  }

  export type AlbumAvailableMarketListRelationFilter = {
    every?: AlbumAvailableMarketWhereInput
    some?: AlbumAvailableMarketWhereInput
    none?: AlbumAvailableMarketWhereInput
  }

  export type TracksAvailableMarketListRelationFilter = {
    every?: TracksAvailableMarketWhereInput
    some?: TracksAvailableMarketWhereInput
    none?: TracksAvailableMarketWhereInput
  }

  export type ArtistInGenresListRelationFilter = {
    every?: ArtistInGenresWhereInput
    some?: ArtistInGenresWhereInput
    none?: ArtistInGenresWhereInput
  }

  export type AlbumAvailableMarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TracksAvailableMarketOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistInGenresOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TagCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type TagAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TagMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type TagMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    type?: SortOrder
    name?: SortOrder
  }

  export type TagSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type StringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    hashId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type CategoryAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    hashId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    hashId?: SortOrder
    name?: SortOrder
    icon?: SortOrder
  }

  export type CategorySumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type StringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableFilter | string | null
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type PlaylistListRelationFilter = {
    every?: PlaylistWhereInput
    some?: PlaylistWhereInput
    none?: PlaylistWhereInput
  }

  export type PlaylistOnFollowerListRelationFilter = {
    every?: PlaylistOnFollowerWhereInput
    some?: PlaylistOnFollowerWhereInput
    none?: PlaylistOnFollowerWhereInput
  }

  export type ArtistOnFollowingListRelationFilter = {
    every?: ArtistOnFollowingWhereInput
    some?: ArtistOnFollowingWhereInput
    none?: ArtistOnFollowingWhereInput
  }

  export type PlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type PlaylistOnFollowerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistOnFollowingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    authType?: SortOrder
    type?: SortOrder
    country?: SortOrder
    explicitContentFilterEnabled?: SortOrder
    explicitContentFilterLocked?: SortOrder
    imagesId?: SortOrder
    product?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    authType?: SortOrder
    type?: SortOrder
    country?: SortOrder
    explicitContentFilterEnabled?: SortOrder
    explicitContentFilterLocked?: SortOrder
    imagesId?: SortOrder
    product?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    email?: SortOrder
    authType?: SortOrder
    type?: SortOrder
    country?: SortOrder
    explicitContentFilterEnabled?: SortOrder
    explicitContentFilterLocked?: SortOrder
    imagesId?: SortOrder
    product?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type DateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type StringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type IntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type TrackProduceByArtistListRelationFilter = {
    every?: TrackProduceByArtistWhereInput
    some?: TrackProduceByArtistWhereInput
    none?: TrackProduceByArtistWhereInput
  }

  export type AlbumProduceByArtistListRelationFilter = {
    every?: AlbumProduceByArtistWhereInput
    some?: AlbumProduceByArtistWhereInput
    none?: AlbumProduceByArtistWhereInput
  }

  export type TrackProduceByArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumProduceByArtistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ArtistCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    popularity?: SortOrder
    imageUrl?: SortOrder
  }

  export type ArtistAvgOrderByAggregateInput = {
    id?: SortOrder
    popularity?: SortOrder
  }

  export type ArtistMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    popularity?: SortOrder
    imageUrl?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    popularity?: SortOrder
    imageUrl?: SortOrder
  }

  export type ArtistSumOrderByAggregateInput = {
    id?: SortOrder
    popularity?: SortOrder
  }

  export type IntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type TracksOnPlaylistListRelationFilter = {
    every?: TracksOnPlaylistWhereInput
    some?: TracksOnPlaylistWhereInput
    none?: TracksOnPlaylistWhereInput
  }

  export type AlbumRelationFilter = {
    is?: AlbumWhereInput
    isNot?: AlbumWhereInput
  }

  export type TracksOnPlaylistOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type TrackCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    discNumber?: SortOrder
    durationMs?: SortOrder
    explicit?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
    isLocal?: SortOrder
    albumId?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    id?: SortOrder
    discNumber?: SortOrder
    durationMs?: SortOrder
    popularity?: SortOrder
    trackNumber?: SortOrder
    albumId?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    discNumber?: SortOrder
    durationMs?: SortOrder
    explicit?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
    isLocal?: SortOrder
    albumId?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    name?: SortOrder
    discNumber?: SortOrder
    durationMs?: SortOrder
    explicit?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
    isLocal?: SortOrder
    albumId?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    id?: SortOrder
    discNumber?: SortOrder
    durationMs?: SortOrder
    popularity?: SortOrder
    trackNumber?: SortOrder
    albumId?: SortOrder
  }

  export type TrackListRelationFilter = {
    every?: TrackWhereInput
    some?: TrackWhereInput
    none?: TrackWhereInput
  }

  export type TrackOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AlbumCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    albumGroup?: SortOrder
    copyrights?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    totalTracks?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    albumGroup?: SortOrder
    copyrights?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    albumGroup?: SortOrder
    copyrights?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
    totalTracks?: SortOrder
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    collaborative?: SortOrder
    description?: SortOrder
    name?: SortOrder
    public?: SortOrder
    snapshotId?: SortOrder
    primaryColor?: SortOrder
    tracksIds?: SortOrder
    ownerId?: SortOrder
    imagesId?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    id?: SortOrder
    tracksIds?: SortOrder
    ownerId?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    collaborative?: SortOrder
    description?: SortOrder
    name?: SortOrder
    public?: SortOrder
    snapshotId?: SortOrder
    primaryColor?: SortOrder
    tracksIds?: SortOrder
    ownerId?: SortOrder
    imagesId?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    collaborative?: SortOrder
    description?: SortOrder
    name?: SortOrder
    public?: SortOrder
    snapshotId?: SortOrder
    primaryColor?: SortOrder
    tracksIds?: SortOrder
    ownerId?: SortOrder
    imagesId?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    id?: SortOrder
    tracksIds?: SortOrder
    ownerId?: SortOrder
  }

  export type PlaylistRelationFilter = {
    is?: PlaylistWhereInput
    isNot?: PlaylistWhereInput
  }

  export type TrackRelationFilter = {
    is?: TrackWhereInput
    isNot?: TrackWhereInput
  }

  export type TracksOnPlaylistPlaylistIdTrackIdCompoundUniqueInput = {
    playlistId: number
    trackId: number
  }

  export type TracksOnPlaylistCountOrderByAggregateInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksOnPlaylistAvgOrderByAggregateInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksOnPlaylistMaxOrderByAggregateInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksOnPlaylistMinOrderByAggregateInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksOnPlaylistSumOrderByAggregateInput = {
    playlistId?: SortOrder
    trackId?: SortOrder
  }

  export type TagRelationFilter = {
    is?: TagWhereInput
    isNot?: TagWhereInput
  }

  export type TracksAvailableMarketTrackIdTagIdCompoundUniqueInput = {
    trackId: number
    tagId: number
  }

  export type TracksAvailableMarketCountOrderByAggregateInput = {
    tagId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksAvailableMarketAvgOrderByAggregateInput = {
    tagId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksAvailableMarketMaxOrderByAggregateInput = {
    tagId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksAvailableMarketMinOrderByAggregateInput = {
    tagId?: SortOrder
    trackId?: SortOrder
  }

  export type TracksAvailableMarketSumOrderByAggregateInput = {
    tagId?: SortOrder
    trackId?: SortOrder
  }

  export type ArtistRelationFilter = {
    is?: ArtistWhereInput
    isNot?: ArtistWhereInput
  }

  export type TrackProduceByArtistTrackIdArtistIdCompoundUniqueInput = {
    trackId: number
    artistId: number
  }

  export type TrackProduceByArtistCountOrderByAggregateInput = {
    trackId?: SortOrder
    artistId?: SortOrder
  }

  export type TrackProduceByArtistAvgOrderByAggregateInput = {
    trackId?: SortOrder
    artistId?: SortOrder
  }

  export type TrackProduceByArtistMaxOrderByAggregateInput = {
    trackId?: SortOrder
    artistId?: SortOrder
  }

  export type TrackProduceByArtistMinOrderByAggregateInput = {
    trackId?: SortOrder
    artistId?: SortOrder
  }

  export type TrackProduceByArtistSumOrderByAggregateInput = {
    trackId?: SortOrder
    artistId?: SortOrder
  }

  export type PlaylistOnFollowerPlaylistIdUserIdCompoundUniqueInput = {
    playlistId: number
    userId: number
  }

  export type PlaylistOnFollowerCountOrderByAggregateInput = {
    playlistId?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistOnFollowerAvgOrderByAggregateInput = {
    playlistId?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistOnFollowerMaxOrderByAggregateInput = {
    playlistId?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistOnFollowerMinOrderByAggregateInput = {
    playlistId?: SortOrder
    userId?: SortOrder
  }

  export type PlaylistOnFollowerSumOrderByAggregateInput = {
    playlistId?: SortOrder
    userId?: SortOrder
  }

  export type AlbumProduceByArtistAlbumIdArtistIdCompoundUniqueInput = {
    albumId: number
    artistId: number
  }

  export type AlbumProduceByArtistCountOrderByAggregateInput = {
    albumId?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumProduceByArtistAvgOrderByAggregateInput = {
    albumId?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumProduceByArtistMaxOrderByAggregateInput = {
    albumId?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumProduceByArtistMinOrderByAggregateInput = {
    albumId?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumProduceByArtistSumOrderByAggregateInput = {
    albumId?: SortOrder
    artistId?: SortOrder
  }

  export type AlbumAvailableMarketAlbumIdTagIdCompoundUniqueInput = {
    albumId: number
    tagId: number
  }

  export type AlbumAvailableMarketCountOrderByAggregateInput = {
    albumId?: SortOrder
    tagId?: SortOrder
  }

  export type AlbumAvailableMarketAvgOrderByAggregateInput = {
    albumId?: SortOrder
    tagId?: SortOrder
  }

  export type AlbumAvailableMarketMaxOrderByAggregateInput = {
    albumId?: SortOrder
    tagId?: SortOrder
  }

  export type AlbumAvailableMarketMinOrderByAggregateInput = {
    albumId?: SortOrder
    tagId?: SortOrder
  }

  export type AlbumAvailableMarketSumOrderByAggregateInput = {
    albumId?: SortOrder
    tagId?: SortOrder
  }

  export type ArtistInGenresArtistIdTagIdCompoundUniqueInput = {
    artistId: number
    tagId: number
  }

  export type ArtistInGenresCountOrderByAggregateInput = {
    artistId?: SortOrder
    tagId?: SortOrder
  }

  export type ArtistInGenresAvgOrderByAggregateInput = {
    artistId?: SortOrder
    tagId?: SortOrder
  }

  export type ArtistInGenresMaxOrderByAggregateInput = {
    artistId?: SortOrder
    tagId?: SortOrder
  }

  export type ArtistInGenresMinOrderByAggregateInput = {
    artistId?: SortOrder
    tagId?: SortOrder
  }

  export type ArtistInGenresSumOrderByAggregateInput = {
    artistId?: SortOrder
    tagId?: SortOrder
  }

  export type ArtistOnFollowingUserIdArtistIdCompoundUniqueInput = {
    userId: number
    artistId: number
  }

  export type ArtistOnFollowingCountOrderByAggregateInput = {
    artistId?: SortOrder
    userId?: SortOrder
  }

  export type ArtistOnFollowingAvgOrderByAggregateInput = {
    artistId?: SortOrder
    userId?: SortOrder
  }

  export type ArtistOnFollowingMaxOrderByAggregateInput = {
    artistId?: SortOrder
    userId?: SortOrder
  }

  export type ArtistOnFollowingMinOrderByAggregateInput = {
    artistId?: SortOrder
    userId?: SortOrder
  }

  export type ArtistOnFollowingSumOrderByAggregateInput = {
    artistId?: SortOrder
    userId?: SortOrder
  }

  export type AlbumAvailableMarketCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<AlbumAvailableMarketCreateWithoutTagInput>, Enumerable<AlbumAvailableMarketUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<AlbumAvailableMarketCreateOrConnectWithoutTagInput>
    createMany?: AlbumAvailableMarketCreateManyTagInputEnvelope
    connect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
  }

  export type TracksAvailableMarketCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TracksAvailableMarketCreateWithoutTagInput>, Enumerable<TracksAvailableMarketUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TracksAvailableMarketCreateOrConnectWithoutTagInput>
    createMany?: TracksAvailableMarketCreateManyTagInputEnvelope
    connect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
  }

  export type ArtistInGenresCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<ArtistInGenresCreateWithoutTagInput>, Enumerable<ArtistInGenresUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<ArtistInGenresCreateOrConnectWithoutTagInput>
    createMany?: ArtistInGenresCreateManyTagInputEnvelope
    connect?: Enumerable<ArtistInGenresWhereUniqueInput>
  }

  export type AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<AlbumAvailableMarketCreateWithoutTagInput>, Enumerable<AlbumAvailableMarketUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<AlbumAvailableMarketCreateOrConnectWithoutTagInput>
    createMany?: AlbumAvailableMarketCreateManyTagInputEnvelope
    connect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
  }

  export type TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<TracksAvailableMarketCreateWithoutTagInput>, Enumerable<TracksAvailableMarketUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TracksAvailableMarketCreateOrConnectWithoutTagInput>
    createMany?: TracksAvailableMarketCreateManyTagInputEnvelope
    connect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
  }

  export type ArtistInGenresUncheckedCreateNestedManyWithoutTagInput = {
    create?: XOR<Enumerable<ArtistInGenresCreateWithoutTagInput>, Enumerable<ArtistInGenresUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<ArtistInGenresCreateOrConnectWithoutTagInput>
    createMany?: ArtistInGenresCreateManyTagInputEnvelope
    connect?: Enumerable<ArtistInGenresWhereUniqueInput>
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type AlbumAvailableMarketUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<AlbumAvailableMarketCreateWithoutTagInput>, Enumerable<AlbumAvailableMarketUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<AlbumAvailableMarketCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput>
    createMany?: AlbumAvailableMarketCreateManyTagInputEnvelope
    set?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    disconnect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    delete?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    connect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    update?: Enumerable<AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<AlbumAvailableMarketScalarWhereInput>
  }

  export type TracksAvailableMarketUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<TracksAvailableMarketCreateWithoutTagInput>, Enumerable<TracksAvailableMarketUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TracksAvailableMarketCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TracksAvailableMarketCreateManyTagInputEnvelope
    set?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    disconnect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    delete?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    connect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    update?: Enumerable<TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TracksAvailableMarketUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TracksAvailableMarketScalarWhereInput>
  }

  export type ArtistInGenresUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<ArtistInGenresCreateWithoutTagInput>, Enumerable<ArtistInGenresUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<ArtistInGenresCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<ArtistInGenresUpsertWithWhereUniqueWithoutTagInput>
    createMany?: ArtistInGenresCreateManyTagInputEnvelope
    set?: Enumerable<ArtistInGenresWhereUniqueInput>
    disconnect?: Enumerable<ArtistInGenresWhereUniqueInput>
    delete?: Enumerable<ArtistInGenresWhereUniqueInput>
    connect?: Enumerable<ArtistInGenresWhereUniqueInput>
    update?: Enumerable<ArtistInGenresUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<ArtistInGenresUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<ArtistInGenresScalarWhereInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type AlbumAvailableMarketUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<AlbumAvailableMarketCreateWithoutTagInput>, Enumerable<AlbumAvailableMarketUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<AlbumAvailableMarketCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput>
    createMany?: AlbumAvailableMarketCreateManyTagInputEnvelope
    set?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    disconnect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    delete?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    connect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    update?: Enumerable<AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<AlbumAvailableMarketScalarWhereInput>
  }

  export type TracksAvailableMarketUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<TracksAvailableMarketCreateWithoutTagInput>, Enumerable<TracksAvailableMarketUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<TracksAvailableMarketCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput>
    createMany?: TracksAvailableMarketCreateManyTagInputEnvelope
    set?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    disconnect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    delete?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    connect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    update?: Enumerable<TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<TracksAvailableMarketUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<TracksAvailableMarketScalarWhereInput>
  }

  export type ArtistInGenresUncheckedUpdateManyWithoutTagNestedInput = {
    create?: XOR<Enumerable<ArtistInGenresCreateWithoutTagInput>, Enumerable<ArtistInGenresUncheckedCreateWithoutTagInput>>
    connectOrCreate?: Enumerable<ArtistInGenresCreateOrConnectWithoutTagInput>
    upsert?: Enumerable<ArtistInGenresUpsertWithWhereUniqueWithoutTagInput>
    createMany?: ArtistInGenresCreateManyTagInputEnvelope
    set?: Enumerable<ArtistInGenresWhereUniqueInput>
    disconnect?: Enumerable<ArtistInGenresWhereUniqueInput>
    delete?: Enumerable<ArtistInGenresWhereUniqueInput>
    connect?: Enumerable<ArtistInGenresWhereUniqueInput>
    update?: Enumerable<ArtistInGenresUpdateWithWhereUniqueWithoutTagInput>
    updateMany?: Enumerable<ArtistInGenresUpdateManyWithWhereWithoutTagInput>
    deleteMany?: Enumerable<ArtistInGenresScalarWhereInput>
  }

  export type PlaylistCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PlaylistCreateWithoutOwnerInput>, Enumerable<PlaylistUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PlaylistCreateOrConnectWithoutOwnerInput>
    createMany?: PlaylistCreateManyOwnerInputEnvelope
    connect?: Enumerable<PlaylistWhereUniqueInput>
  }

  export type PlaylistOnFollowerCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PlaylistOnFollowerCreateWithoutUserInput>, Enumerable<PlaylistOnFollowerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PlaylistOnFollowerCreateOrConnectWithoutUserInput>
    createMany?: PlaylistOnFollowerCreateManyUserInputEnvelope
    connect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
  }

  export type ArtistOnFollowingCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ArtistOnFollowingCreateWithoutUserInput>, Enumerable<ArtistOnFollowingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ArtistOnFollowingCreateOrConnectWithoutUserInput>
    createMany?: ArtistOnFollowingCreateManyUserInputEnvelope
    connect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
  }

  export type PlaylistUncheckedCreateNestedManyWithoutOwnerInput = {
    create?: XOR<Enumerable<PlaylistCreateWithoutOwnerInput>, Enumerable<PlaylistUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PlaylistCreateOrConnectWithoutOwnerInput>
    createMany?: PlaylistCreateManyOwnerInputEnvelope
    connect?: Enumerable<PlaylistWhereUniqueInput>
  }

  export type PlaylistOnFollowerUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<PlaylistOnFollowerCreateWithoutUserInput>, Enumerable<PlaylistOnFollowerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PlaylistOnFollowerCreateOrConnectWithoutUserInput>
    createMany?: PlaylistOnFollowerCreateManyUserInputEnvelope
    connect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
  }

  export type ArtistOnFollowingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<Enumerable<ArtistOnFollowingCreateWithoutUserInput>, Enumerable<ArtistOnFollowingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ArtistOnFollowingCreateOrConnectWithoutUserInput>
    createMany?: ArtistOnFollowingCreateManyUserInputEnvelope
    connect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type PlaylistUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<PlaylistCreateWithoutOwnerInput>, Enumerable<PlaylistUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PlaylistCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<PlaylistUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: PlaylistCreateManyOwnerInputEnvelope
    set?: Enumerable<PlaylistWhereUniqueInput>
    disconnect?: Enumerable<PlaylistWhereUniqueInput>
    delete?: Enumerable<PlaylistWhereUniqueInput>
    connect?: Enumerable<PlaylistWhereUniqueInput>
    update?: Enumerable<PlaylistUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<PlaylistUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<PlaylistScalarWhereInput>
  }

  export type PlaylistOnFollowerUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PlaylistOnFollowerCreateWithoutUserInput>, Enumerable<PlaylistOnFollowerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PlaylistOnFollowerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PlaylistOnFollowerCreateManyUserInputEnvelope
    set?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    disconnect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    delete?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    connect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    update?: Enumerable<PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PlaylistOnFollowerScalarWhereInput>
  }

  export type ArtistOnFollowingUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ArtistOnFollowingCreateWithoutUserInput>, Enumerable<ArtistOnFollowingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ArtistOnFollowingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ArtistOnFollowingCreateManyUserInputEnvelope
    set?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    disconnect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    delete?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    connect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    update?: Enumerable<ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ArtistOnFollowingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ArtistOnFollowingScalarWhereInput>
  }

  export type PlaylistUncheckedUpdateManyWithoutOwnerNestedInput = {
    create?: XOR<Enumerable<PlaylistCreateWithoutOwnerInput>, Enumerable<PlaylistUncheckedCreateWithoutOwnerInput>>
    connectOrCreate?: Enumerable<PlaylistCreateOrConnectWithoutOwnerInput>
    upsert?: Enumerable<PlaylistUpsertWithWhereUniqueWithoutOwnerInput>
    createMany?: PlaylistCreateManyOwnerInputEnvelope
    set?: Enumerable<PlaylistWhereUniqueInput>
    disconnect?: Enumerable<PlaylistWhereUniqueInput>
    delete?: Enumerable<PlaylistWhereUniqueInput>
    connect?: Enumerable<PlaylistWhereUniqueInput>
    update?: Enumerable<PlaylistUpdateWithWhereUniqueWithoutOwnerInput>
    updateMany?: Enumerable<PlaylistUpdateManyWithWhereWithoutOwnerInput>
    deleteMany?: Enumerable<PlaylistScalarWhereInput>
  }

  export type PlaylistOnFollowerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<PlaylistOnFollowerCreateWithoutUserInput>, Enumerable<PlaylistOnFollowerUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<PlaylistOnFollowerCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput>
    createMany?: PlaylistOnFollowerCreateManyUserInputEnvelope
    set?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    disconnect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    delete?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    connect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    update?: Enumerable<PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<PlaylistOnFollowerScalarWhereInput>
  }

  export type ArtistOnFollowingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<Enumerable<ArtistOnFollowingCreateWithoutUserInput>, Enumerable<ArtistOnFollowingUncheckedCreateWithoutUserInput>>
    connectOrCreate?: Enumerable<ArtistOnFollowingCreateOrConnectWithoutUserInput>
    upsert?: Enumerable<ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput>
    createMany?: ArtistOnFollowingCreateManyUserInputEnvelope
    set?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    disconnect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    delete?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    connect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    update?: Enumerable<ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput>
    updateMany?: Enumerable<ArtistOnFollowingUpdateManyWithWhereWithoutUserInput>
    deleteMany?: Enumerable<ArtistOnFollowingScalarWhereInput>
  }

  export type ArtistInGenresCreateNestedManyWithoutArtistInput = {
    create?: XOR<Enumerable<ArtistInGenresCreateWithoutArtistInput>, Enumerable<ArtistInGenresUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<ArtistInGenresCreateOrConnectWithoutArtistInput>
    createMany?: ArtistInGenresCreateManyArtistInputEnvelope
    connect?: Enumerable<ArtistInGenresWhereUniqueInput>
  }

  export type TrackProduceByArtistCreateNestedManyWithoutArtistsInput = {
    create?: XOR<Enumerable<TrackProduceByArtistCreateWithoutArtistsInput>, Enumerable<TrackProduceByArtistUncheckedCreateWithoutArtistsInput>>
    connectOrCreate?: Enumerable<TrackProduceByArtistCreateOrConnectWithoutArtistsInput>
    createMany?: TrackProduceByArtistCreateManyArtistsInputEnvelope
    connect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
  }

  export type AlbumProduceByArtistCreateNestedManyWithoutArtistInput = {
    create?: XOR<Enumerable<AlbumProduceByArtistCreateWithoutArtistInput>, Enumerable<AlbumProduceByArtistUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<AlbumProduceByArtistCreateOrConnectWithoutArtistInput>
    createMany?: AlbumProduceByArtistCreateManyArtistInputEnvelope
    connect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
  }

  export type ArtistOnFollowingCreateNestedManyWithoutArtistInput = {
    create?: XOR<Enumerable<ArtistOnFollowingCreateWithoutArtistInput>, Enumerable<ArtistOnFollowingUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<ArtistOnFollowingCreateOrConnectWithoutArtistInput>
    createMany?: ArtistOnFollowingCreateManyArtistInputEnvelope
    connect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
  }

  export type ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<Enumerable<ArtistInGenresCreateWithoutArtistInput>, Enumerable<ArtistInGenresUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<ArtistInGenresCreateOrConnectWithoutArtistInput>
    createMany?: ArtistInGenresCreateManyArtistInputEnvelope
    connect?: Enumerable<ArtistInGenresWhereUniqueInput>
  }

  export type TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput = {
    create?: XOR<Enumerable<TrackProduceByArtistCreateWithoutArtistsInput>, Enumerable<TrackProduceByArtistUncheckedCreateWithoutArtistsInput>>
    connectOrCreate?: Enumerable<TrackProduceByArtistCreateOrConnectWithoutArtistsInput>
    createMany?: TrackProduceByArtistCreateManyArtistsInputEnvelope
    connect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
  }

  export type AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<Enumerable<AlbumProduceByArtistCreateWithoutArtistInput>, Enumerable<AlbumProduceByArtistUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<AlbumProduceByArtistCreateOrConnectWithoutArtistInput>
    createMany?: AlbumProduceByArtistCreateManyArtistInputEnvelope
    connect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
  }

  export type ArtistOnFollowingUncheckedCreateNestedManyWithoutArtistInput = {
    create?: XOR<Enumerable<ArtistOnFollowingCreateWithoutArtistInput>, Enumerable<ArtistOnFollowingUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<ArtistOnFollowingCreateOrConnectWithoutArtistInput>
    createMany?: ArtistOnFollowingCreateManyArtistInputEnvelope
    connect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ArtistInGenresUpdateManyWithoutArtistNestedInput = {
    create?: XOR<Enumerable<ArtistInGenresCreateWithoutArtistInput>, Enumerable<ArtistInGenresUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<ArtistInGenresCreateOrConnectWithoutArtistInput>
    upsert?: Enumerable<ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput>
    createMany?: ArtistInGenresCreateManyArtistInputEnvelope
    set?: Enumerable<ArtistInGenresWhereUniqueInput>
    disconnect?: Enumerable<ArtistInGenresWhereUniqueInput>
    delete?: Enumerable<ArtistInGenresWhereUniqueInput>
    connect?: Enumerable<ArtistInGenresWhereUniqueInput>
    update?: Enumerable<ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput>
    updateMany?: Enumerable<ArtistInGenresUpdateManyWithWhereWithoutArtistInput>
    deleteMany?: Enumerable<ArtistInGenresScalarWhereInput>
  }

  export type TrackProduceByArtistUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<Enumerable<TrackProduceByArtistCreateWithoutArtistsInput>, Enumerable<TrackProduceByArtistUncheckedCreateWithoutArtistsInput>>
    connectOrCreate?: Enumerable<TrackProduceByArtistCreateOrConnectWithoutArtistsInput>
    upsert?: Enumerable<TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput>
    createMany?: TrackProduceByArtistCreateManyArtistsInputEnvelope
    set?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    disconnect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    delete?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    connect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    update?: Enumerable<TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput>
    updateMany?: Enumerable<TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput>
    deleteMany?: Enumerable<TrackProduceByArtistScalarWhereInput>
  }

  export type AlbumProduceByArtistUpdateManyWithoutArtistNestedInput = {
    create?: XOR<Enumerable<AlbumProduceByArtistCreateWithoutArtistInput>, Enumerable<AlbumProduceByArtistUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<AlbumProduceByArtistCreateOrConnectWithoutArtistInput>
    upsert?: Enumerable<AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput>
    createMany?: AlbumProduceByArtistCreateManyArtistInputEnvelope
    set?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    disconnect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    delete?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    connect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    update?: Enumerable<AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput>
    updateMany?: Enumerable<AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput>
    deleteMany?: Enumerable<AlbumProduceByArtistScalarWhereInput>
  }

  export type ArtistOnFollowingUpdateManyWithoutArtistNestedInput = {
    create?: XOR<Enumerable<ArtistOnFollowingCreateWithoutArtistInput>, Enumerable<ArtistOnFollowingUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<ArtistOnFollowingCreateOrConnectWithoutArtistInput>
    upsert?: Enumerable<ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput>
    createMany?: ArtistOnFollowingCreateManyArtistInputEnvelope
    set?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    disconnect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    delete?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    connect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    update?: Enumerable<ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput>
    updateMany?: Enumerable<ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput>
    deleteMany?: Enumerable<ArtistOnFollowingScalarWhereInput>
  }

  export type ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<Enumerable<ArtistInGenresCreateWithoutArtistInput>, Enumerable<ArtistInGenresUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<ArtistInGenresCreateOrConnectWithoutArtistInput>
    upsert?: Enumerable<ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput>
    createMany?: ArtistInGenresCreateManyArtistInputEnvelope
    set?: Enumerable<ArtistInGenresWhereUniqueInput>
    disconnect?: Enumerable<ArtistInGenresWhereUniqueInput>
    delete?: Enumerable<ArtistInGenresWhereUniqueInput>
    connect?: Enumerable<ArtistInGenresWhereUniqueInput>
    update?: Enumerable<ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput>
    updateMany?: Enumerable<ArtistInGenresUpdateManyWithWhereWithoutArtistInput>
    deleteMany?: Enumerable<ArtistInGenresScalarWhereInput>
  }

  export type TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput = {
    create?: XOR<Enumerable<TrackProduceByArtistCreateWithoutArtistsInput>, Enumerable<TrackProduceByArtistUncheckedCreateWithoutArtistsInput>>
    connectOrCreate?: Enumerable<TrackProduceByArtistCreateOrConnectWithoutArtistsInput>
    upsert?: Enumerable<TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput>
    createMany?: TrackProduceByArtistCreateManyArtistsInputEnvelope
    set?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    disconnect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    delete?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    connect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    update?: Enumerable<TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput>
    updateMany?: Enumerable<TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput>
    deleteMany?: Enumerable<TrackProduceByArtistScalarWhereInput>
  }

  export type AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<Enumerable<AlbumProduceByArtistCreateWithoutArtistInput>, Enumerable<AlbumProduceByArtistUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<AlbumProduceByArtistCreateOrConnectWithoutArtistInput>
    upsert?: Enumerable<AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput>
    createMany?: AlbumProduceByArtistCreateManyArtistInputEnvelope
    set?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    disconnect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    delete?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    connect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    update?: Enumerable<AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput>
    updateMany?: Enumerable<AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput>
    deleteMany?: Enumerable<AlbumProduceByArtistScalarWhereInput>
  }

  export type ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInput = {
    create?: XOR<Enumerable<ArtistOnFollowingCreateWithoutArtistInput>, Enumerable<ArtistOnFollowingUncheckedCreateWithoutArtistInput>>
    connectOrCreate?: Enumerable<ArtistOnFollowingCreateOrConnectWithoutArtistInput>
    upsert?: Enumerable<ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput>
    createMany?: ArtistOnFollowingCreateManyArtistInputEnvelope
    set?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    disconnect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    delete?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    connect?: Enumerable<ArtistOnFollowingWhereUniqueInput>
    update?: Enumerable<ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput>
    updateMany?: Enumerable<ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput>
    deleteMany?: Enumerable<ArtistOnFollowingScalarWhereInput>
  }

  export type TracksAvailableMarketCreateNestedManyWithoutTrackInput = {
    create?: XOR<Enumerable<TracksAvailableMarketCreateWithoutTrackInput>, Enumerable<TracksAvailableMarketUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TracksAvailableMarketCreateOrConnectWithoutTrackInput>
    createMany?: TracksAvailableMarketCreateManyTrackInputEnvelope
    connect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
  }

  export type TrackProduceByArtistCreateNestedManyWithoutTrackInput = {
    create?: XOR<Enumerable<TrackProduceByArtistCreateWithoutTrackInput>, Enumerable<TrackProduceByArtistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TrackProduceByArtistCreateOrConnectWithoutTrackInput>
    createMany?: TrackProduceByArtistCreateManyTrackInputEnvelope
    connect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
  }

  export type TracksOnPlaylistCreateNestedManyWithoutTrackInput = {
    create?: XOR<Enumerable<TracksOnPlaylistCreateWithoutTrackInput>, Enumerable<TracksOnPlaylistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TracksOnPlaylistCreateOrConnectWithoutTrackInput>
    createMany?: TracksOnPlaylistCreateManyTrackInputEnvelope
    connect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
  }

  export type AlbumCreateNestedOneWithoutTracksInput = {
    create?: XOR<AlbumCreateWithoutTracksInput, AlbumUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutTracksInput
    connect?: AlbumWhereUniqueInput
  }

  export type TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<Enumerable<TracksAvailableMarketCreateWithoutTrackInput>, Enumerable<TracksAvailableMarketUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TracksAvailableMarketCreateOrConnectWithoutTrackInput>
    createMany?: TracksAvailableMarketCreateManyTrackInputEnvelope
    connect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
  }

  export type TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<Enumerable<TrackProduceByArtistCreateWithoutTrackInput>, Enumerable<TrackProduceByArtistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TrackProduceByArtistCreateOrConnectWithoutTrackInput>
    createMany?: TrackProduceByArtistCreateManyTrackInputEnvelope
    connect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
  }

  export type TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput = {
    create?: XOR<Enumerable<TracksOnPlaylistCreateWithoutTrackInput>, Enumerable<TracksOnPlaylistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TracksOnPlaylistCreateOrConnectWithoutTrackInput>
    createMany?: TracksOnPlaylistCreateManyTrackInputEnvelope
    connect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
  }

  export type TracksAvailableMarketUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Enumerable<TracksAvailableMarketCreateWithoutTrackInput>, Enumerable<TracksAvailableMarketUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TracksAvailableMarketCreateOrConnectWithoutTrackInput>
    upsert?: Enumerable<TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput>
    createMany?: TracksAvailableMarketCreateManyTrackInputEnvelope
    set?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    disconnect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    delete?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    connect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    update?: Enumerable<TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput>
    updateMany?: Enumerable<TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput>
    deleteMany?: Enumerable<TracksAvailableMarketScalarWhereInput>
  }

  export type TrackProduceByArtistUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Enumerable<TrackProduceByArtistCreateWithoutTrackInput>, Enumerable<TrackProduceByArtistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TrackProduceByArtistCreateOrConnectWithoutTrackInput>
    upsert?: Enumerable<TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput>
    createMany?: TrackProduceByArtistCreateManyTrackInputEnvelope
    set?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    disconnect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    delete?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    connect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    update?: Enumerable<TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput>
    updateMany?: Enumerable<TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput>
    deleteMany?: Enumerable<TrackProduceByArtistScalarWhereInput>
  }

  export type TracksOnPlaylistUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Enumerable<TracksOnPlaylistCreateWithoutTrackInput>, Enumerable<TracksOnPlaylistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TracksOnPlaylistCreateOrConnectWithoutTrackInput>
    upsert?: Enumerable<TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput>
    createMany?: TracksOnPlaylistCreateManyTrackInputEnvelope
    set?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    disconnect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    delete?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    connect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    update?: Enumerable<TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput>
    updateMany?: Enumerable<TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput>
    deleteMany?: Enumerable<TracksOnPlaylistScalarWhereInput>
  }

  export type AlbumUpdateOneWithoutTracksNestedInput = {
    create?: XOR<AlbumCreateWithoutTracksInput, AlbumUncheckedCreateWithoutTracksInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutTracksInput
    upsert?: AlbumUpsertWithoutTracksInput
    disconnect?: boolean
    delete?: boolean
    connect?: AlbumWhereUniqueInput
    update?: XOR<AlbumUpdateWithoutTracksInput, AlbumUncheckedUpdateWithoutTracksInput>
  }

  export type TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Enumerable<TracksAvailableMarketCreateWithoutTrackInput>, Enumerable<TracksAvailableMarketUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TracksAvailableMarketCreateOrConnectWithoutTrackInput>
    upsert?: Enumerable<TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput>
    createMany?: TracksAvailableMarketCreateManyTrackInputEnvelope
    set?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    disconnect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    delete?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    connect?: Enumerable<TracksAvailableMarketWhereUniqueInput>
    update?: Enumerable<TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput>
    updateMany?: Enumerable<TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput>
    deleteMany?: Enumerable<TracksAvailableMarketScalarWhereInput>
  }

  export type TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Enumerable<TrackProduceByArtistCreateWithoutTrackInput>, Enumerable<TrackProduceByArtistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TrackProduceByArtistCreateOrConnectWithoutTrackInput>
    upsert?: Enumerable<TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput>
    createMany?: TrackProduceByArtistCreateManyTrackInputEnvelope
    set?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    disconnect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    delete?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    connect?: Enumerable<TrackProduceByArtistWhereUniqueInput>
    update?: Enumerable<TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput>
    updateMany?: Enumerable<TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput>
    deleteMany?: Enumerable<TrackProduceByArtistScalarWhereInput>
  }

  export type TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput = {
    create?: XOR<Enumerable<TracksOnPlaylistCreateWithoutTrackInput>, Enumerable<TracksOnPlaylistUncheckedCreateWithoutTrackInput>>
    connectOrCreate?: Enumerable<TracksOnPlaylistCreateOrConnectWithoutTrackInput>
    upsert?: Enumerable<TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput>
    createMany?: TracksOnPlaylistCreateManyTrackInputEnvelope
    set?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    disconnect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    delete?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    connect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    update?: Enumerable<TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput>
    updateMany?: Enumerable<TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput>
    deleteMany?: Enumerable<TracksOnPlaylistScalarWhereInput>
  }

  export type AlbumAvailableMarketCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<AlbumAvailableMarketCreateWithoutAlbumInput>, Enumerable<AlbumAvailableMarketUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<AlbumAvailableMarketCreateOrConnectWithoutAlbumInput>
    createMany?: AlbumAvailableMarketCreateManyAlbumInputEnvelope
    connect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
  }

  export type AlbumProduceByArtistCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<AlbumProduceByArtistCreateWithoutAlbumInput>, Enumerable<AlbumProduceByArtistUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<AlbumProduceByArtistCreateOrConnectWithoutAlbumInput>
    createMany?: AlbumProduceByArtistCreateManyAlbumInputEnvelope
    connect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
  }

  export type TrackCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<TrackCreateWithoutAlbumInput>, Enumerable<TrackUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutAlbumInput>
    createMany?: TrackCreateManyAlbumInputEnvelope
    connect?: Enumerable<TrackWhereUniqueInput>
  }

  export type AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<AlbumAvailableMarketCreateWithoutAlbumInput>, Enumerable<AlbumAvailableMarketUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<AlbumAvailableMarketCreateOrConnectWithoutAlbumInput>
    createMany?: AlbumAvailableMarketCreateManyAlbumInputEnvelope
    connect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
  }

  export type AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<AlbumProduceByArtistCreateWithoutAlbumInput>, Enumerable<AlbumProduceByArtistUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<AlbumProduceByArtistCreateOrConnectWithoutAlbumInput>
    createMany?: AlbumProduceByArtistCreateManyAlbumInputEnvelope
    connect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
  }

  export type TrackUncheckedCreateNestedManyWithoutAlbumInput = {
    create?: XOR<Enumerable<TrackCreateWithoutAlbumInput>, Enumerable<TrackUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutAlbumInput>
    createMany?: TrackCreateManyAlbumInputEnvelope
    connect?: Enumerable<TrackWhereUniqueInput>
  }

  export type AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<Enumerable<AlbumAvailableMarketCreateWithoutAlbumInput>, Enumerable<AlbumAvailableMarketUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<AlbumAvailableMarketCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: AlbumAvailableMarketCreateManyAlbumInputEnvelope
    set?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    disconnect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    delete?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    connect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    update?: Enumerable<AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<AlbumAvailableMarketScalarWhereInput>
  }

  export type AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<Enumerable<AlbumProduceByArtistCreateWithoutAlbumInput>, Enumerable<AlbumProduceByArtistUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<AlbumProduceByArtistCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: AlbumProduceByArtistCreateManyAlbumInputEnvelope
    set?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    disconnect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    delete?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    connect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    update?: Enumerable<AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<AlbumProduceByArtistScalarWhereInput>
  }

  export type TrackUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<Enumerable<TrackCreateWithoutAlbumInput>, Enumerable<TrackUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<TrackUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: TrackCreateManyAlbumInputEnvelope
    set?: Enumerable<TrackWhereUniqueInput>
    disconnect?: Enumerable<TrackWhereUniqueInput>
    delete?: Enumerable<TrackWhereUniqueInput>
    connect?: Enumerable<TrackWhereUniqueInput>
    update?: Enumerable<TrackUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<TrackUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<TrackScalarWhereInput>
  }

  export type AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<Enumerable<AlbumAvailableMarketCreateWithoutAlbumInput>, Enumerable<AlbumAvailableMarketUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<AlbumAvailableMarketCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: AlbumAvailableMarketCreateManyAlbumInputEnvelope
    set?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    disconnect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    delete?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    connect?: Enumerable<AlbumAvailableMarketWhereUniqueInput>
    update?: Enumerable<AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<AlbumAvailableMarketScalarWhereInput>
  }

  export type AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<Enumerable<AlbumProduceByArtistCreateWithoutAlbumInput>, Enumerable<AlbumProduceByArtistUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<AlbumProduceByArtistCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: AlbumProduceByArtistCreateManyAlbumInputEnvelope
    set?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    disconnect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    delete?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    connect?: Enumerable<AlbumProduceByArtistWhereUniqueInput>
    update?: Enumerable<AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<AlbumProduceByArtistScalarWhereInput>
  }

  export type TrackUncheckedUpdateManyWithoutAlbumNestedInput = {
    create?: XOR<Enumerable<TrackCreateWithoutAlbumInput>, Enumerable<TrackUncheckedCreateWithoutAlbumInput>>
    connectOrCreate?: Enumerable<TrackCreateOrConnectWithoutAlbumInput>
    upsert?: Enumerable<TrackUpsertWithWhereUniqueWithoutAlbumInput>
    createMany?: TrackCreateManyAlbumInputEnvelope
    set?: Enumerable<TrackWhereUniqueInput>
    disconnect?: Enumerable<TrackWhereUniqueInput>
    delete?: Enumerable<TrackWhereUniqueInput>
    connect?: Enumerable<TrackWhereUniqueInput>
    update?: Enumerable<TrackUpdateWithWhereUniqueWithoutAlbumInput>
    updateMany?: Enumerable<TrackUpdateManyWithWhereWithoutAlbumInput>
    deleteMany?: Enumerable<TrackScalarWhereInput>
  }

  export type TracksOnPlaylistCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<Enumerable<TracksOnPlaylistCreateWithoutPlaylistInput>, Enumerable<TracksOnPlaylistUncheckedCreateWithoutPlaylistInput>>
    connectOrCreate?: Enumerable<TracksOnPlaylistCreateOrConnectWithoutPlaylistInput>
    createMany?: TracksOnPlaylistCreateManyPlaylistInputEnvelope
    connect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
  }

  export type UserCreateNestedOneWithoutPlaylistInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<Enumerable<PlaylistOnFollowerCreateWithoutPlaylistInput>, Enumerable<PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput>>
    connectOrCreate?: Enumerable<PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput>
    createMany?: PlaylistOnFollowerCreateManyPlaylistInputEnvelope
    connect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
  }

  export type TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<Enumerable<TracksOnPlaylistCreateWithoutPlaylistInput>, Enumerable<TracksOnPlaylistUncheckedCreateWithoutPlaylistInput>>
    connectOrCreate?: Enumerable<TracksOnPlaylistCreateOrConnectWithoutPlaylistInput>
    createMany?: TracksOnPlaylistCreateManyPlaylistInputEnvelope
    connect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
  }

  export type PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<Enumerable<PlaylistOnFollowerCreateWithoutPlaylistInput>, Enumerable<PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput>>
    connectOrCreate?: Enumerable<PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput>
    createMany?: PlaylistOnFollowerCreateManyPlaylistInputEnvelope
    connect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
  }

  export type TracksOnPlaylistUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<Enumerable<TracksOnPlaylistCreateWithoutPlaylistInput>, Enumerable<TracksOnPlaylistUncheckedCreateWithoutPlaylistInput>>
    connectOrCreate?: Enumerable<TracksOnPlaylistCreateOrConnectWithoutPlaylistInput>
    upsert?: Enumerable<TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput>
    createMany?: TracksOnPlaylistCreateManyPlaylistInputEnvelope
    set?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    disconnect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    delete?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    connect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    update?: Enumerable<TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput>
    updateMany?: Enumerable<TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput>
    deleteMany?: Enumerable<TracksOnPlaylistScalarWhereInput>
  }

  export type UserUpdateOneRequiredWithoutPlaylistNestedInput = {
    create?: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
    connectOrCreate?: UserCreateOrConnectWithoutPlaylistInput
    upsert?: UserUpsertWithoutPlaylistInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistOnFollowerUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<Enumerable<PlaylistOnFollowerCreateWithoutPlaylistInput>, Enumerable<PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput>>
    connectOrCreate?: Enumerable<PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput>
    upsert?: Enumerable<PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput>
    createMany?: PlaylistOnFollowerCreateManyPlaylistInputEnvelope
    set?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    disconnect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    delete?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    connect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    update?: Enumerable<PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput>
    updateMany?: Enumerable<PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput>
    deleteMany?: Enumerable<PlaylistOnFollowerScalarWhereInput>
  }

  export type TracksOnPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<Enumerable<TracksOnPlaylistCreateWithoutPlaylistInput>, Enumerable<TracksOnPlaylistUncheckedCreateWithoutPlaylistInput>>
    connectOrCreate?: Enumerable<TracksOnPlaylistCreateOrConnectWithoutPlaylistInput>
    upsert?: Enumerable<TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput>
    createMany?: TracksOnPlaylistCreateManyPlaylistInputEnvelope
    set?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    disconnect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    delete?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    connect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
    update?: Enumerable<TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput>
    updateMany?: Enumerable<TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput>
    deleteMany?: Enumerable<TracksOnPlaylistScalarWhereInput>
  }

  export type PlaylistOnFollowerUncheckedUpdateManyWithoutPlaylistNestedInput = {
    create?: XOR<Enumerable<PlaylistOnFollowerCreateWithoutPlaylistInput>, Enumerable<PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput>>
    connectOrCreate?: Enumerable<PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput>
    upsert?: Enumerable<PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput>
    createMany?: PlaylistOnFollowerCreateManyPlaylistInputEnvelope
    set?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    disconnect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    delete?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    connect?: Enumerable<PlaylistOnFollowerWhereUniqueInput>
    update?: Enumerable<PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput>
    updateMany?: Enumerable<PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput>
    deleteMany?: Enumerable<PlaylistOnFollowerScalarWhereInput>
  }

  export type PlaylistCreateNestedOneWithoutTracksInput = {
    create?: XOR<PlaylistCreateWithoutTracksInput, PlaylistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutTracksInput
    connect?: PlaylistWhereUniqueInput
  }

  export type TrackCreateNestedOneWithoutInPlaylistInput = {
    create?: XOR<TrackCreateWithoutInPlaylistInput, TrackUncheckedCreateWithoutInPlaylistInput>
    connectOrCreate?: TrackCreateOrConnectWithoutInPlaylistInput
    connect?: TrackWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutTracksNestedInput = {
    create?: XOR<PlaylistCreateWithoutTracksInput, PlaylistUncheckedCreateWithoutTracksInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutTracksInput
    upsert?: PlaylistUpsertWithoutTracksInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<PlaylistUpdateWithoutTracksInput, PlaylistUncheckedUpdateWithoutTracksInput>
  }

  export type TrackUpdateOneRequiredWithoutInPlaylistNestedInput = {
    create?: XOR<TrackCreateWithoutInPlaylistInput, TrackUncheckedCreateWithoutInPlaylistInput>
    connectOrCreate?: TrackCreateOrConnectWithoutInPlaylistInput
    upsert?: TrackUpsertWithoutInPlaylistInput
    connect?: TrackWhereUniqueInput
    update?: XOR<TrackUpdateWithoutInPlaylistInput, TrackUncheckedUpdateWithoutInPlaylistInput>
  }

  export type TagCreateNestedOneWithoutTracksAvailableMarketInput = {
    create?: XOR<TagCreateWithoutTracksAvailableMarketInput, TagUncheckedCreateWithoutTracksAvailableMarketInput>
    connectOrCreate?: TagCreateOrConnectWithoutTracksAvailableMarketInput
    connect?: TagWhereUniqueInput
  }

  export type TrackCreateNestedOneWithoutAvailableMarketsInput = {
    create?: XOR<TrackCreateWithoutAvailableMarketsInput, TrackUncheckedCreateWithoutAvailableMarketsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutAvailableMarketsInput
    connect?: TrackWhereUniqueInput
  }

  export type TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput = {
    create?: XOR<TagCreateWithoutTracksAvailableMarketInput, TagUncheckedCreateWithoutTracksAvailableMarketInput>
    connectOrCreate?: TagCreateOrConnectWithoutTracksAvailableMarketInput
    upsert?: TagUpsertWithoutTracksAvailableMarketInput
    connect?: TagWhereUniqueInput
    update?: XOR<TagUpdateWithoutTracksAvailableMarketInput, TagUncheckedUpdateWithoutTracksAvailableMarketInput>
  }

  export type TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput = {
    create?: XOR<TrackCreateWithoutAvailableMarketsInput, TrackUncheckedCreateWithoutAvailableMarketsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutAvailableMarketsInput
    upsert?: TrackUpsertWithoutAvailableMarketsInput
    connect?: TrackWhereUniqueInput
    update?: XOR<TrackUpdateWithoutAvailableMarketsInput, TrackUncheckedUpdateWithoutAvailableMarketsInput>
  }

  export type TrackCreateNestedOneWithoutArtistsInput = {
    create?: XOR<TrackCreateWithoutArtistsInput, TrackUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutArtistsInput
    connect?: TrackWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutTrackProduceByArtistInput = {
    create?: XOR<ArtistCreateWithoutTrackProduceByArtistInput, ArtistUncheckedCreateWithoutTrackProduceByArtistInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutTrackProduceByArtistInput
    connect?: ArtistWhereUniqueInput
  }

  export type TrackUpdateOneRequiredWithoutArtistsNestedInput = {
    create?: XOR<TrackCreateWithoutArtistsInput, TrackUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: TrackCreateOrConnectWithoutArtistsInput
    upsert?: TrackUpsertWithoutArtistsInput
    connect?: TrackWhereUniqueInput
    update?: XOR<TrackUpdateWithoutArtistsInput, TrackUncheckedUpdateWithoutArtistsInput>
  }

  export type ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput = {
    create?: XOR<ArtistCreateWithoutTrackProduceByArtistInput, ArtistUncheckedCreateWithoutTrackProduceByArtistInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutTrackProduceByArtistInput
    upsert?: ArtistUpsertWithoutTrackProduceByArtistInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<ArtistUpdateWithoutTrackProduceByArtistInput, ArtistUncheckedUpdateWithoutTrackProduceByArtistInput>
  }

  export type PlaylistCreateNestedOneWithoutFollowersInput = {
    create?: XOR<PlaylistCreateWithoutFollowersInput, PlaylistUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutFollowersInput
    connect?: PlaylistWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowPlaylistsInput = {
    create?: XOR<UserCreateWithoutFollowPlaylistsInput, UserUncheckedCreateWithoutFollowPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowPlaylistsInput
    connect?: UserWhereUniqueInput
  }

  export type PlaylistUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<PlaylistCreateWithoutFollowersInput, PlaylistUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: PlaylistCreateOrConnectWithoutFollowersInput
    upsert?: PlaylistUpsertWithoutFollowersInput
    connect?: PlaylistWhereUniqueInput
    update?: XOR<PlaylistUpdateWithoutFollowersInput, PlaylistUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput = {
    create?: XOR<UserCreateWithoutFollowPlaylistsInput, UserUncheckedCreateWithoutFollowPlaylistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowPlaylistsInput
    upsert?: UserUpsertWithoutFollowPlaylistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowPlaylistsInput, UserUncheckedUpdateWithoutFollowPlaylistsInput>
  }

  export type AlbumCreateNestedOneWithoutArtistsInput = {
    create?: XOR<AlbumCreateWithoutArtistsInput, AlbumUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistsInput
    connect?: AlbumWhereUniqueInput
  }

  export type ArtistCreateNestedOneWithoutAlbumProduceByArtistInput = {
    create?: XOR<ArtistCreateWithoutAlbumProduceByArtistInput, ArtistUncheckedCreateWithoutAlbumProduceByArtistInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumProduceByArtistInput
    connect?: ArtistWhereUniqueInput
  }

  export type AlbumUpdateOneRequiredWithoutArtistsNestedInput = {
    create?: XOR<AlbumCreateWithoutArtistsInput, AlbumUncheckedCreateWithoutArtistsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutArtistsInput
    upsert?: AlbumUpsertWithoutArtistsInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<AlbumUpdateWithoutArtistsInput, AlbumUncheckedUpdateWithoutArtistsInput>
  }

  export type ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput = {
    create?: XOR<ArtistCreateWithoutAlbumProduceByArtistInput, ArtistUncheckedCreateWithoutAlbumProduceByArtistInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutAlbumProduceByArtistInput
    upsert?: ArtistUpsertWithoutAlbumProduceByArtistInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<ArtistUpdateWithoutAlbumProduceByArtistInput, ArtistUncheckedUpdateWithoutAlbumProduceByArtistInput>
  }

  export type AlbumCreateNestedOneWithoutAvailableMarketsInput = {
    create?: XOR<AlbumCreateWithoutAvailableMarketsInput, AlbumUncheckedCreateWithoutAvailableMarketsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutAvailableMarketsInput
    connect?: AlbumWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutAlbumAvailableMarketInput = {
    create?: XOR<TagCreateWithoutAlbumAvailableMarketInput, TagUncheckedCreateWithoutAlbumAvailableMarketInput>
    connectOrCreate?: TagCreateOrConnectWithoutAlbumAvailableMarketInput
    connect?: TagWhereUniqueInput
  }

  export type AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput = {
    create?: XOR<AlbumCreateWithoutAvailableMarketsInput, AlbumUncheckedCreateWithoutAvailableMarketsInput>
    connectOrCreate?: AlbumCreateOrConnectWithoutAvailableMarketsInput
    upsert?: AlbumUpsertWithoutAvailableMarketsInput
    connect?: AlbumWhereUniqueInput
    update?: XOR<AlbumUpdateWithoutAvailableMarketsInput, AlbumUncheckedUpdateWithoutAvailableMarketsInput>
  }

  export type TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput = {
    create?: XOR<TagCreateWithoutAlbumAvailableMarketInput, TagUncheckedCreateWithoutAlbumAvailableMarketInput>
    connectOrCreate?: TagCreateOrConnectWithoutAlbumAvailableMarketInput
    upsert?: TagUpsertWithoutAlbumAvailableMarketInput
    connect?: TagWhereUniqueInput
    update?: XOR<TagUpdateWithoutAlbumAvailableMarketInput, TagUncheckedUpdateWithoutAlbumAvailableMarketInput>
  }

  export type ArtistCreateNestedOneWithoutGenresInput = {
    create?: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutGenresInput
    connect?: ArtistWhereUniqueInput
  }

  export type TagCreateNestedOneWithoutArtistInGenresInput = {
    create?: XOR<TagCreateWithoutArtistInGenresInput, TagUncheckedCreateWithoutArtistInGenresInput>
    connectOrCreate?: TagCreateOrConnectWithoutArtistInGenresInput
    connect?: TagWhereUniqueInput
  }

  export type ArtistUpdateOneRequiredWithoutGenresNestedInput = {
    create?: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutGenresInput
    upsert?: ArtistUpsertWithoutGenresInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<ArtistUpdateWithoutGenresInput, ArtistUncheckedUpdateWithoutGenresInput>
  }

  export type TagUpdateOneRequiredWithoutArtistInGenresNestedInput = {
    create?: XOR<TagCreateWithoutArtistInGenresInput, TagUncheckedCreateWithoutArtistInGenresInput>
    connectOrCreate?: TagCreateOrConnectWithoutArtistInGenresInput
    upsert?: TagUpsertWithoutArtistInGenresInput
    connect?: TagWhereUniqueInput
    update?: XOR<TagUpdateWithoutArtistInGenresInput, TagUncheckedUpdateWithoutArtistInGenresInput>
  }

  export type ArtistCreateNestedOneWithoutFollowersInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput
    connect?: ArtistWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutFollowingArtistsInput = {
    create?: XOR<UserCreateWithoutFollowingArtistsInput, UserUncheckedCreateWithoutFollowingArtistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingArtistsInput
    connect?: UserWhereUniqueInput
  }

  export type ArtistUpdateOneRequiredWithoutFollowersNestedInput = {
    create?: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
    connectOrCreate?: ArtistCreateOrConnectWithoutFollowersInput
    upsert?: ArtistUpsertWithoutFollowersInput
    connect?: ArtistWhereUniqueInput
    update?: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
  }

  export type UserUpdateOneRequiredWithoutFollowingArtistsNestedInput = {
    create?: XOR<UserCreateWithoutFollowingArtistsInput, UserUncheckedCreateWithoutFollowingArtistsInput>
    connectOrCreate?: UserCreateOrConnectWithoutFollowingArtistsInput
    upsert?: UserUpsertWithoutFollowingArtistsInput
    connect?: UserWhereUniqueInput
    update?: XOR<UserUpdateWithoutFollowingArtistsInput, UserUncheckedUpdateWithoutFollowingArtistsInput>
  }

  export type NestedIntFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntFilter | number
  }

  export type NestedStringFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringFilter | string
  }

  export type NestedIntWithAggregatesFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntWithAggregatesFilter | number
    _count?: NestedIntFilter
    _avg?: NestedFloatFilter
    _sum?: NestedIntFilter
    _min?: NestedIntFilter
    _max?: NestedIntFilter
  }

  export type NestedFloatFilter = {
    equals?: number
    in?: Enumerable<number>
    notIn?: Enumerable<number>
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatFilter | number
  }

  export type NestedStringWithAggregatesFilter = {
    equals?: string
    in?: Enumerable<string>
    notIn?: Enumerable<string>
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringWithAggregatesFilter | string
    _count?: NestedIntFilter
    _min?: NestedStringFilter
    _max?: NestedStringFilter
  }

  export type NestedDateTimeFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeFilter | Date | string
  }

  export type NestedStringNullableFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableFilter | string | null
  }

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedDateTimeWithAggregatesFilter = {
    equals?: Date | string
    in?: Enumerable<Date> | Enumerable<string>
    notIn?: Enumerable<Date> | Enumerable<string>
    lt?: Date | string
    lte?: Date | string
    gt?: Date | string
    gte?: Date | string
    not?: NestedDateTimeWithAggregatesFilter | Date | string
    _count?: NestedIntFilter
    _min?: NestedDateTimeFilter
    _max?: NestedDateTimeFilter
  }

  export type NestedStringNullableWithAggregatesFilter = {
    equals?: string | null
    in?: Enumerable<string> | null
    notIn?: Enumerable<string> | null
    lt?: string
    lte?: string
    gt?: string
    gte?: string
    contains?: string
    startsWith?: string
    endsWith?: string
    not?: NestedStringNullableWithAggregatesFilter | string | null
    _count?: NestedIntNullableFilter
    _min?: NestedStringNullableFilter
    _max?: NestedStringNullableFilter
  }

  export type NestedIntNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableFilter | number | null
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type NestedIntNullableWithAggregatesFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedIntNullableWithAggregatesFilter | number | null
    _count?: NestedIntNullableFilter
    _avg?: NestedFloatNullableFilter
    _sum?: NestedIntNullableFilter
    _min?: NestedIntNullableFilter
    _max?: NestedIntNullableFilter
  }

  export type NestedFloatNullableFilter = {
    equals?: number | null
    in?: Enumerable<number> | null
    notIn?: Enumerable<number> | null
    lt?: number
    lte?: number
    gt?: number
    gte?: number
    not?: NestedFloatNullableFilter | number | null
  }

  export type AlbumAvailableMarketCreateWithoutTagInput = {
    Album: AlbumCreateNestedOneWithoutAvailableMarketsInput
  }

  export type AlbumAvailableMarketUncheckedCreateWithoutTagInput = {
    albumId: number
  }

  export type AlbumAvailableMarketCreateOrConnectWithoutTagInput = {
    where: AlbumAvailableMarketWhereUniqueInput
    create: XOR<AlbumAvailableMarketCreateWithoutTagInput, AlbumAvailableMarketUncheckedCreateWithoutTagInput>
  }

  export type AlbumAvailableMarketCreateManyTagInputEnvelope = {
    data: Enumerable<AlbumAvailableMarketCreateManyTagInput>
    skipDuplicates?: boolean
  }

  export type TracksAvailableMarketCreateWithoutTagInput = {
    Track: TrackCreateNestedOneWithoutAvailableMarketsInput
  }

  export type TracksAvailableMarketUncheckedCreateWithoutTagInput = {
    trackId: number
  }

  export type TracksAvailableMarketCreateOrConnectWithoutTagInput = {
    where: TracksAvailableMarketWhereUniqueInput
    create: XOR<TracksAvailableMarketCreateWithoutTagInput, TracksAvailableMarketUncheckedCreateWithoutTagInput>
  }

  export type TracksAvailableMarketCreateManyTagInputEnvelope = {
    data: Enumerable<TracksAvailableMarketCreateManyTagInput>
    skipDuplicates?: boolean
  }

  export type ArtistInGenresCreateWithoutTagInput = {
    Artist: ArtistCreateNestedOneWithoutGenresInput
  }

  export type ArtistInGenresUncheckedCreateWithoutTagInput = {
    artistId: number
  }

  export type ArtistInGenresCreateOrConnectWithoutTagInput = {
    where: ArtistInGenresWhereUniqueInput
    create: XOR<ArtistInGenresCreateWithoutTagInput, ArtistInGenresUncheckedCreateWithoutTagInput>
  }

  export type ArtistInGenresCreateManyTagInputEnvelope = {
    data: Enumerable<ArtistInGenresCreateManyTagInput>
    skipDuplicates?: boolean
  }

  export type AlbumAvailableMarketUpsertWithWhereUniqueWithoutTagInput = {
    where: AlbumAvailableMarketWhereUniqueInput
    update: XOR<AlbumAvailableMarketUpdateWithoutTagInput, AlbumAvailableMarketUncheckedUpdateWithoutTagInput>
    create: XOR<AlbumAvailableMarketCreateWithoutTagInput, AlbumAvailableMarketUncheckedCreateWithoutTagInput>
  }

  export type AlbumAvailableMarketUpdateWithWhereUniqueWithoutTagInput = {
    where: AlbumAvailableMarketWhereUniqueInput
    data: XOR<AlbumAvailableMarketUpdateWithoutTagInput, AlbumAvailableMarketUncheckedUpdateWithoutTagInput>
  }

  export type AlbumAvailableMarketUpdateManyWithWhereWithoutTagInput = {
    where: AlbumAvailableMarketScalarWhereInput
    data: XOR<AlbumAvailableMarketUpdateManyMutationInput, AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumAvailableMarketInput>
  }

  export type AlbumAvailableMarketScalarWhereInput = {
    AND?: Enumerable<AlbumAvailableMarketScalarWhereInput>
    OR?: Enumerable<AlbumAvailableMarketScalarWhereInput>
    NOT?: Enumerable<AlbumAvailableMarketScalarWhereInput>
    albumId?: IntFilter | number
    tagId?: IntFilter | number
  }

  export type TracksAvailableMarketUpsertWithWhereUniqueWithoutTagInput = {
    where: TracksAvailableMarketWhereUniqueInput
    update: XOR<TracksAvailableMarketUpdateWithoutTagInput, TracksAvailableMarketUncheckedUpdateWithoutTagInput>
    create: XOR<TracksAvailableMarketCreateWithoutTagInput, TracksAvailableMarketUncheckedCreateWithoutTagInput>
  }

  export type TracksAvailableMarketUpdateWithWhereUniqueWithoutTagInput = {
    where: TracksAvailableMarketWhereUniqueInput
    data: XOR<TracksAvailableMarketUpdateWithoutTagInput, TracksAvailableMarketUncheckedUpdateWithoutTagInput>
  }

  export type TracksAvailableMarketUpdateManyWithWhereWithoutTagInput = {
    where: TracksAvailableMarketScalarWhereInput
    data: XOR<TracksAvailableMarketUpdateManyMutationInput, TracksAvailableMarketUncheckedUpdateManyWithoutTracksAvailableMarketInput>
  }

  export type TracksAvailableMarketScalarWhereInput = {
    AND?: Enumerable<TracksAvailableMarketScalarWhereInput>
    OR?: Enumerable<TracksAvailableMarketScalarWhereInput>
    NOT?: Enumerable<TracksAvailableMarketScalarWhereInput>
    tagId?: IntFilter | number
    trackId?: IntFilter | number
  }

  export type ArtistInGenresUpsertWithWhereUniqueWithoutTagInput = {
    where: ArtistInGenresWhereUniqueInput
    update: XOR<ArtistInGenresUpdateWithoutTagInput, ArtistInGenresUncheckedUpdateWithoutTagInput>
    create: XOR<ArtistInGenresCreateWithoutTagInput, ArtistInGenresUncheckedCreateWithoutTagInput>
  }

  export type ArtistInGenresUpdateWithWhereUniqueWithoutTagInput = {
    where: ArtistInGenresWhereUniqueInput
    data: XOR<ArtistInGenresUpdateWithoutTagInput, ArtistInGenresUncheckedUpdateWithoutTagInput>
  }

  export type ArtistInGenresUpdateManyWithWhereWithoutTagInput = {
    where: ArtistInGenresScalarWhereInput
    data: XOR<ArtistInGenresUpdateManyMutationInput, ArtistInGenresUncheckedUpdateManyWithoutArtistInGenresInput>
  }

  export type ArtistInGenresScalarWhereInput = {
    AND?: Enumerable<ArtistInGenresScalarWhereInput>
    OR?: Enumerable<ArtistInGenresScalarWhereInput>
    NOT?: Enumerable<ArtistInGenresScalarWhereInput>
    artistId?: IntFilter | number
    tagId?: IntFilter | number
  }

  export type PlaylistCreateWithoutOwnerInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    imagesId?: string | null
    tracks?: TracksOnPlaylistCreateNestedManyWithoutPlaylistInput
    followers?: PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutOwnerInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    imagesId?: string | null
    tracks?: TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
    followers?: PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutOwnerInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutOwnerInput, PlaylistUncheckedCreateWithoutOwnerInput>
  }

  export type PlaylistCreateManyOwnerInputEnvelope = {
    data: Enumerable<PlaylistCreateManyOwnerInput>
    skipDuplicates?: boolean
  }

  export type PlaylistOnFollowerCreateWithoutUserInput = {
    Playlist: PlaylistCreateNestedOneWithoutFollowersInput
  }

  export type PlaylistOnFollowerUncheckedCreateWithoutUserInput = {
    playlistId: number
  }

  export type PlaylistOnFollowerCreateOrConnectWithoutUserInput = {
    where: PlaylistOnFollowerWhereUniqueInput
    create: XOR<PlaylistOnFollowerCreateWithoutUserInput, PlaylistOnFollowerUncheckedCreateWithoutUserInput>
  }

  export type PlaylistOnFollowerCreateManyUserInputEnvelope = {
    data: Enumerable<PlaylistOnFollowerCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type ArtistOnFollowingCreateWithoutUserInput = {
    Artist: ArtistCreateNestedOneWithoutFollowersInput
  }

  export type ArtistOnFollowingUncheckedCreateWithoutUserInput = {
    artistId: number
  }

  export type ArtistOnFollowingCreateOrConnectWithoutUserInput = {
    where: ArtistOnFollowingWhereUniqueInput
    create: XOR<ArtistOnFollowingCreateWithoutUserInput, ArtistOnFollowingUncheckedCreateWithoutUserInput>
  }

  export type ArtistOnFollowingCreateManyUserInputEnvelope = {
    data: Enumerable<ArtistOnFollowingCreateManyUserInput>
    skipDuplicates?: boolean
  }

  export type PlaylistUpsertWithWhereUniqueWithoutOwnerInput = {
    where: PlaylistWhereUniqueInput
    update: XOR<PlaylistUpdateWithoutOwnerInput, PlaylistUncheckedUpdateWithoutOwnerInput>
    create: XOR<PlaylistCreateWithoutOwnerInput, PlaylistUncheckedCreateWithoutOwnerInput>
  }

  export type PlaylistUpdateWithWhereUniqueWithoutOwnerInput = {
    where: PlaylistWhereUniqueInput
    data: XOR<PlaylistUpdateWithoutOwnerInput, PlaylistUncheckedUpdateWithoutOwnerInput>
  }

  export type PlaylistUpdateManyWithWhereWithoutOwnerInput = {
    where: PlaylistScalarWhereInput
    data: XOR<PlaylistUpdateManyMutationInput, PlaylistUncheckedUpdateManyWithoutPlaylistInput>
  }

  export type PlaylistScalarWhereInput = {
    AND?: Enumerable<PlaylistScalarWhereInput>
    OR?: Enumerable<PlaylistScalarWhereInput>
    NOT?: Enumerable<PlaylistScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringNullableFilter | string | null
    collaborative?: BoolFilter | boolean
    description?: StringFilter | string
    name?: StringFilter | string
    public?: BoolFilter | boolean
    snapshotId?: StringNullableFilter | string | null
    primaryColor?: StringNullableFilter | string | null
    tracksIds?: IntFilter | number
    ownerId?: IntFilter | number
    imagesId?: StringNullableFilter | string | null
  }

  export type PlaylistOnFollowerUpsertWithWhereUniqueWithoutUserInput = {
    where: PlaylistOnFollowerWhereUniqueInput
    update: XOR<PlaylistOnFollowerUpdateWithoutUserInput, PlaylistOnFollowerUncheckedUpdateWithoutUserInput>
    create: XOR<PlaylistOnFollowerCreateWithoutUserInput, PlaylistOnFollowerUncheckedCreateWithoutUserInput>
  }

  export type PlaylistOnFollowerUpdateWithWhereUniqueWithoutUserInput = {
    where: PlaylistOnFollowerWhereUniqueInput
    data: XOR<PlaylistOnFollowerUpdateWithoutUserInput, PlaylistOnFollowerUncheckedUpdateWithoutUserInput>
  }

  export type PlaylistOnFollowerUpdateManyWithWhereWithoutUserInput = {
    where: PlaylistOnFollowerScalarWhereInput
    data: XOR<PlaylistOnFollowerUpdateManyMutationInput, PlaylistOnFollowerUncheckedUpdateManyWithoutFollowPlaylistsInput>
  }

  export type PlaylistOnFollowerScalarWhereInput = {
    AND?: Enumerable<PlaylistOnFollowerScalarWhereInput>
    OR?: Enumerable<PlaylistOnFollowerScalarWhereInput>
    NOT?: Enumerable<PlaylistOnFollowerScalarWhereInput>
    playlistId?: IntFilter | number
    userId?: IntFilter | number
  }

  export type ArtistOnFollowingUpsertWithWhereUniqueWithoutUserInput = {
    where: ArtistOnFollowingWhereUniqueInput
    update: XOR<ArtistOnFollowingUpdateWithoutUserInput, ArtistOnFollowingUncheckedUpdateWithoutUserInput>
    create: XOR<ArtistOnFollowingCreateWithoutUserInput, ArtistOnFollowingUncheckedCreateWithoutUserInput>
  }

  export type ArtistOnFollowingUpdateWithWhereUniqueWithoutUserInput = {
    where: ArtistOnFollowingWhereUniqueInput
    data: XOR<ArtistOnFollowingUpdateWithoutUserInput, ArtistOnFollowingUncheckedUpdateWithoutUserInput>
  }

  export type ArtistOnFollowingUpdateManyWithWhereWithoutUserInput = {
    where: ArtistOnFollowingScalarWhereInput
    data: XOR<ArtistOnFollowingUpdateManyMutationInput, ArtistOnFollowingUncheckedUpdateManyWithoutFollowingArtistsInput>
  }

  export type ArtistOnFollowingScalarWhereInput = {
    AND?: Enumerable<ArtistOnFollowingScalarWhereInput>
    OR?: Enumerable<ArtistOnFollowingScalarWhereInput>
    NOT?: Enumerable<ArtistOnFollowingScalarWhereInput>
    artistId?: IntFilter | number
    userId?: IntFilter | number
  }

  export type ArtistInGenresCreateWithoutArtistInput = {
    Tag: TagCreateNestedOneWithoutArtistInGenresInput
  }

  export type ArtistInGenresUncheckedCreateWithoutArtistInput = {
    tagId: number
  }

  export type ArtistInGenresCreateOrConnectWithoutArtistInput = {
    where: ArtistInGenresWhereUniqueInput
    create: XOR<ArtistInGenresCreateWithoutArtistInput, ArtistInGenresUncheckedCreateWithoutArtistInput>
  }

  export type ArtistInGenresCreateManyArtistInputEnvelope = {
    data: Enumerable<ArtistInGenresCreateManyArtistInput>
    skipDuplicates?: boolean
  }

  export type TrackProduceByArtistCreateWithoutArtistsInput = {
    Track: TrackCreateNestedOneWithoutArtistsInput
  }

  export type TrackProduceByArtistUncheckedCreateWithoutArtistsInput = {
    trackId: number
  }

  export type TrackProduceByArtistCreateOrConnectWithoutArtistsInput = {
    where: TrackProduceByArtistWhereUniqueInput
    create: XOR<TrackProduceByArtistCreateWithoutArtistsInput, TrackProduceByArtistUncheckedCreateWithoutArtistsInput>
  }

  export type TrackProduceByArtistCreateManyArtistsInputEnvelope = {
    data: Enumerable<TrackProduceByArtistCreateManyArtistsInput>
    skipDuplicates?: boolean
  }

  export type AlbumProduceByArtistCreateWithoutArtistInput = {
    Album: AlbumCreateNestedOneWithoutArtistsInput
  }

  export type AlbumProduceByArtistUncheckedCreateWithoutArtistInput = {
    albumId: number
  }

  export type AlbumProduceByArtistCreateOrConnectWithoutArtistInput = {
    where: AlbumProduceByArtistWhereUniqueInput
    create: XOR<AlbumProduceByArtistCreateWithoutArtistInput, AlbumProduceByArtistUncheckedCreateWithoutArtistInput>
  }

  export type AlbumProduceByArtistCreateManyArtistInputEnvelope = {
    data: Enumerable<AlbumProduceByArtistCreateManyArtistInput>
    skipDuplicates?: boolean
  }

  export type ArtistOnFollowingCreateWithoutArtistInput = {
    User: UserCreateNestedOneWithoutFollowingArtistsInput
  }

  export type ArtistOnFollowingUncheckedCreateWithoutArtistInput = {
    userId: number
  }

  export type ArtistOnFollowingCreateOrConnectWithoutArtistInput = {
    where: ArtistOnFollowingWhereUniqueInput
    create: XOR<ArtistOnFollowingCreateWithoutArtistInput, ArtistOnFollowingUncheckedCreateWithoutArtistInput>
  }

  export type ArtistOnFollowingCreateManyArtistInputEnvelope = {
    data: Enumerable<ArtistOnFollowingCreateManyArtistInput>
    skipDuplicates?: boolean
  }

  export type ArtistInGenresUpsertWithWhereUniqueWithoutArtistInput = {
    where: ArtistInGenresWhereUniqueInput
    update: XOR<ArtistInGenresUpdateWithoutArtistInput, ArtistInGenresUncheckedUpdateWithoutArtistInput>
    create: XOR<ArtistInGenresCreateWithoutArtistInput, ArtistInGenresUncheckedCreateWithoutArtistInput>
  }

  export type ArtistInGenresUpdateWithWhereUniqueWithoutArtistInput = {
    where: ArtistInGenresWhereUniqueInput
    data: XOR<ArtistInGenresUpdateWithoutArtistInput, ArtistInGenresUncheckedUpdateWithoutArtistInput>
  }

  export type ArtistInGenresUpdateManyWithWhereWithoutArtistInput = {
    where: ArtistInGenresScalarWhereInput
    data: XOR<ArtistInGenresUpdateManyMutationInput, ArtistInGenresUncheckedUpdateManyWithoutGenresInput>
  }

  export type TrackProduceByArtistUpsertWithWhereUniqueWithoutArtistsInput = {
    where: TrackProduceByArtistWhereUniqueInput
    update: XOR<TrackProduceByArtistUpdateWithoutArtistsInput, TrackProduceByArtistUncheckedUpdateWithoutArtistsInput>
    create: XOR<TrackProduceByArtistCreateWithoutArtistsInput, TrackProduceByArtistUncheckedCreateWithoutArtistsInput>
  }

  export type TrackProduceByArtistUpdateWithWhereUniqueWithoutArtistsInput = {
    where: TrackProduceByArtistWhereUniqueInput
    data: XOR<TrackProduceByArtistUpdateWithoutArtistsInput, TrackProduceByArtistUncheckedUpdateWithoutArtistsInput>
  }

  export type TrackProduceByArtistUpdateManyWithWhereWithoutArtistsInput = {
    where: TrackProduceByArtistScalarWhereInput
    data: XOR<TrackProduceByArtistUpdateManyMutationInput, TrackProduceByArtistUncheckedUpdateManyWithoutTrackProduceByArtistInput>
  }

  export type TrackProduceByArtistScalarWhereInput = {
    AND?: Enumerable<TrackProduceByArtistScalarWhereInput>
    OR?: Enumerable<TrackProduceByArtistScalarWhereInput>
    NOT?: Enumerable<TrackProduceByArtistScalarWhereInput>
    trackId?: IntFilter | number
    artistId?: IntFilter | number
  }

  export type AlbumProduceByArtistUpsertWithWhereUniqueWithoutArtistInput = {
    where: AlbumProduceByArtistWhereUniqueInput
    update: XOR<AlbumProduceByArtistUpdateWithoutArtistInput, AlbumProduceByArtistUncheckedUpdateWithoutArtistInput>
    create: XOR<AlbumProduceByArtistCreateWithoutArtistInput, AlbumProduceByArtistUncheckedCreateWithoutArtistInput>
  }

  export type AlbumProduceByArtistUpdateWithWhereUniqueWithoutArtistInput = {
    where: AlbumProduceByArtistWhereUniqueInput
    data: XOR<AlbumProduceByArtistUpdateWithoutArtistInput, AlbumProduceByArtistUncheckedUpdateWithoutArtistInput>
  }

  export type AlbumProduceByArtistUpdateManyWithWhereWithoutArtistInput = {
    where: AlbumProduceByArtistScalarWhereInput
    data: XOR<AlbumProduceByArtistUpdateManyMutationInput, AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumProduceByArtistInput>
  }

  export type AlbumProduceByArtistScalarWhereInput = {
    AND?: Enumerable<AlbumProduceByArtistScalarWhereInput>
    OR?: Enumerable<AlbumProduceByArtistScalarWhereInput>
    NOT?: Enumerable<AlbumProduceByArtistScalarWhereInput>
    albumId?: IntFilter | number
    artistId?: IntFilter | number
  }

  export type ArtistOnFollowingUpsertWithWhereUniqueWithoutArtistInput = {
    where: ArtistOnFollowingWhereUniqueInput
    update: XOR<ArtistOnFollowingUpdateWithoutArtistInput, ArtistOnFollowingUncheckedUpdateWithoutArtistInput>
    create: XOR<ArtistOnFollowingCreateWithoutArtistInput, ArtistOnFollowingUncheckedCreateWithoutArtistInput>
  }

  export type ArtistOnFollowingUpdateWithWhereUniqueWithoutArtistInput = {
    where: ArtistOnFollowingWhereUniqueInput
    data: XOR<ArtistOnFollowingUpdateWithoutArtistInput, ArtistOnFollowingUncheckedUpdateWithoutArtistInput>
  }

  export type ArtistOnFollowingUpdateManyWithWhereWithoutArtistInput = {
    where: ArtistOnFollowingScalarWhereInput
    data: XOR<ArtistOnFollowingUpdateManyMutationInput, ArtistOnFollowingUncheckedUpdateManyWithoutFollowersInput>
  }

  export type TracksAvailableMarketCreateWithoutTrackInput = {
    Tag: TagCreateNestedOneWithoutTracksAvailableMarketInput
  }

  export type TracksAvailableMarketUncheckedCreateWithoutTrackInput = {
    tagId: number
  }

  export type TracksAvailableMarketCreateOrConnectWithoutTrackInput = {
    where: TracksAvailableMarketWhereUniqueInput
    create: XOR<TracksAvailableMarketCreateWithoutTrackInput, TracksAvailableMarketUncheckedCreateWithoutTrackInput>
  }

  export type TracksAvailableMarketCreateManyTrackInputEnvelope = {
    data: Enumerable<TracksAvailableMarketCreateManyTrackInput>
    skipDuplicates?: boolean
  }

  export type TrackProduceByArtistCreateWithoutTrackInput = {
    Artists: ArtistCreateNestedOneWithoutTrackProduceByArtistInput
  }

  export type TrackProduceByArtistUncheckedCreateWithoutTrackInput = {
    artistId: number
  }

  export type TrackProduceByArtistCreateOrConnectWithoutTrackInput = {
    where: TrackProduceByArtistWhereUniqueInput
    create: XOR<TrackProduceByArtistCreateWithoutTrackInput, TrackProduceByArtistUncheckedCreateWithoutTrackInput>
  }

  export type TrackProduceByArtistCreateManyTrackInputEnvelope = {
    data: Enumerable<TrackProduceByArtistCreateManyTrackInput>
    skipDuplicates?: boolean
  }

  export type TracksOnPlaylistCreateWithoutTrackInput = {
    Playlist: PlaylistCreateNestedOneWithoutTracksInput
  }

  export type TracksOnPlaylistUncheckedCreateWithoutTrackInput = {
    playlistId: number
  }

  export type TracksOnPlaylistCreateOrConnectWithoutTrackInput = {
    where: TracksOnPlaylistWhereUniqueInput
    create: XOR<TracksOnPlaylistCreateWithoutTrackInput, TracksOnPlaylistUncheckedCreateWithoutTrackInput>
  }

  export type TracksOnPlaylistCreateManyTrackInputEnvelope = {
    data: Enumerable<TracksOnPlaylistCreateManyTrackInput>
    skipDuplicates?: boolean
  }

  export type AlbumCreateWithoutTracksInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date | string
    releaseDatePrecision: string
    albumGroup: string
    copyrights?: string | null
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketCreateNestedManyWithoutAlbumInput
    Artists?: AlbumProduceByArtistCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutTracksInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date | string
    releaseDatePrecision: string
    albumGroup: string
    copyrights?: string | null
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInput
    Artists?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutTracksInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutTracksInput, AlbumUncheckedCreateWithoutTracksInput>
  }

  export type TracksAvailableMarketUpsertWithWhereUniqueWithoutTrackInput = {
    where: TracksAvailableMarketWhereUniqueInput
    update: XOR<TracksAvailableMarketUpdateWithoutTrackInput, TracksAvailableMarketUncheckedUpdateWithoutTrackInput>
    create: XOR<TracksAvailableMarketCreateWithoutTrackInput, TracksAvailableMarketUncheckedCreateWithoutTrackInput>
  }

  export type TracksAvailableMarketUpdateWithWhereUniqueWithoutTrackInput = {
    where: TracksAvailableMarketWhereUniqueInput
    data: XOR<TracksAvailableMarketUpdateWithoutTrackInput, TracksAvailableMarketUncheckedUpdateWithoutTrackInput>
  }

  export type TracksAvailableMarketUpdateManyWithWhereWithoutTrackInput = {
    where: TracksAvailableMarketScalarWhereInput
    data: XOR<TracksAvailableMarketUpdateManyMutationInput, TracksAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInput>
  }

  export type TrackProduceByArtistUpsertWithWhereUniqueWithoutTrackInput = {
    where: TrackProduceByArtistWhereUniqueInput
    update: XOR<TrackProduceByArtistUpdateWithoutTrackInput, TrackProduceByArtistUncheckedUpdateWithoutTrackInput>
    create: XOR<TrackProduceByArtistCreateWithoutTrackInput, TrackProduceByArtistUncheckedCreateWithoutTrackInput>
  }

  export type TrackProduceByArtistUpdateWithWhereUniqueWithoutTrackInput = {
    where: TrackProduceByArtistWhereUniqueInput
    data: XOR<TrackProduceByArtistUpdateWithoutTrackInput, TrackProduceByArtistUncheckedUpdateWithoutTrackInput>
  }

  export type TrackProduceByArtistUpdateManyWithWhereWithoutTrackInput = {
    where: TrackProduceByArtistScalarWhereInput
    data: XOR<TrackProduceByArtistUpdateManyMutationInput, TrackProduceByArtistUncheckedUpdateManyWithoutArtistsInput>
  }

  export type TracksOnPlaylistUpsertWithWhereUniqueWithoutTrackInput = {
    where: TracksOnPlaylistWhereUniqueInput
    update: XOR<TracksOnPlaylistUpdateWithoutTrackInput, TracksOnPlaylistUncheckedUpdateWithoutTrackInput>
    create: XOR<TracksOnPlaylistCreateWithoutTrackInput, TracksOnPlaylistUncheckedCreateWithoutTrackInput>
  }

  export type TracksOnPlaylistUpdateWithWhereUniqueWithoutTrackInput = {
    where: TracksOnPlaylistWhereUniqueInput
    data: XOR<TracksOnPlaylistUpdateWithoutTrackInput, TracksOnPlaylistUncheckedUpdateWithoutTrackInput>
  }

  export type TracksOnPlaylistUpdateManyWithWhereWithoutTrackInput = {
    where: TracksOnPlaylistScalarWhereInput
    data: XOR<TracksOnPlaylistUpdateManyMutationInput, TracksOnPlaylistUncheckedUpdateManyWithoutInPlaylistInput>
  }

  export type TracksOnPlaylistScalarWhereInput = {
    AND?: Enumerable<TracksOnPlaylistScalarWhereInput>
    OR?: Enumerable<TracksOnPlaylistScalarWhereInput>
    NOT?: Enumerable<TracksOnPlaylistScalarWhereInput>
    playlistId?: IntFilter | number
    trackId?: IntFilter | number
  }

  export type AlbumUpsertWithoutTracksInput = {
    update: XOR<AlbumUpdateWithoutTracksInput, AlbumUncheckedUpdateWithoutTracksInput>
    create: XOR<AlbumCreateWithoutTracksInput, AlbumUncheckedCreateWithoutTracksInput>
  }

  export type AlbumUpdateWithoutTracksInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput
    Artists?: AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInput
    Artists?: AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumAvailableMarketCreateWithoutAlbumInput = {
    Tag: TagCreateNestedOneWithoutAlbumAvailableMarketInput
  }

  export type AlbumAvailableMarketUncheckedCreateWithoutAlbumInput = {
    tagId: number
  }

  export type AlbumAvailableMarketCreateOrConnectWithoutAlbumInput = {
    where: AlbumAvailableMarketWhereUniqueInput
    create: XOR<AlbumAvailableMarketCreateWithoutAlbumInput, AlbumAvailableMarketUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumAvailableMarketCreateManyAlbumInputEnvelope = {
    data: Enumerable<AlbumAvailableMarketCreateManyAlbumInput>
    skipDuplicates?: boolean
  }

  export type AlbumProduceByArtistCreateWithoutAlbumInput = {
    Artist: ArtistCreateNestedOneWithoutAlbumProduceByArtistInput
  }

  export type AlbumProduceByArtistUncheckedCreateWithoutAlbumInput = {
    artistId: number
  }

  export type AlbumProduceByArtistCreateOrConnectWithoutAlbumInput = {
    where: AlbumProduceByArtistWhereUniqueInput
    create: XOR<AlbumProduceByArtistCreateWithoutAlbumInput, AlbumProduceByArtistUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumProduceByArtistCreateManyAlbumInputEnvelope = {
    data: Enumerable<AlbumProduceByArtistCreateManyAlbumInput>
    skipDuplicates?: boolean
  }

  export type TrackCreateWithoutAlbumInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    availableMarkets?: TracksAvailableMarketCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutAlbumInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    availableMarkets?: TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput>
  }

  export type TrackCreateManyAlbumInputEnvelope = {
    data: Enumerable<TrackCreateManyAlbumInput>
    skipDuplicates?: boolean
  }

  export type AlbumAvailableMarketUpsertWithWhereUniqueWithoutAlbumInput = {
    where: AlbumAvailableMarketWhereUniqueInput
    update: XOR<AlbumAvailableMarketUpdateWithoutAlbumInput, AlbumAvailableMarketUncheckedUpdateWithoutAlbumInput>
    create: XOR<AlbumAvailableMarketCreateWithoutAlbumInput, AlbumAvailableMarketUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumAvailableMarketUpdateWithWhereUniqueWithoutAlbumInput = {
    where: AlbumAvailableMarketWhereUniqueInput
    data: XOR<AlbumAvailableMarketUpdateWithoutAlbumInput, AlbumAvailableMarketUncheckedUpdateWithoutAlbumInput>
  }

  export type AlbumAvailableMarketUpdateManyWithWhereWithoutAlbumInput = {
    where: AlbumAvailableMarketScalarWhereInput
    data: XOR<AlbumAvailableMarketUpdateManyMutationInput, AlbumAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInput>
  }

  export type AlbumProduceByArtistUpsertWithWhereUniqueWithoutAlbumInput = {
    where: AlbumProduceByArtistWhereUniqueInput
    update: XOR<AlbumProduceByArtistUpdateWithoutAlbumInput, AlbumProduceByArtistUncheckedUpdateWithoutAlbumInput>
    create: XOR<AlbumProduceByArtistCreateWithoutAlbumInput, AlbumProduceByArtistUncheckedCreateWithoutAlbumInput>
  }

  export type AlbumProduceByArtistUpdateWithWhereUniqueWithoutAlbumInput = {
    where: AlbumProduceByArtistWhereUniqueInput
    data: XOR<AlbumProduceByArtistUpdateWithoutAlbumInput, AlbumProduceByArtistUncheckedUpdateWithoutAlbumInput>
  }

  export type AlbumProduceByArtistUpdateManyWithWhereWithoutAlbumInput = {
    where: AlbumProduceByArtistScalarWhereInput
    data: XOR<AlbumProduceByArtistUpdateManyMutationInput, AlbumProduceByArtistUncheckedUpdateManyWithoutArtistsInput>
  }

  export type TrackUpsertWithWhereUniqueWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    update: XOR<TrackUpdateWithoutAlbumInput, TrackUncheckedUpdateWithoutAlbumInput>
    create: XOR<TrackCreateWithoutAlbumInput, TrackUncheckedCreateWithoutAlbumInput>
  }

  export type TrackUpdateWithWhereUniqueWithoutAlbumInput = {
    where: TrackWhereUniqueInput
    data: XOR<TrackUpdateWithoutAlbumInput, TrackUncheckedUpdateWithoutAlbumInput>
  }

  export type TrackUpdateManyWithWhereWithoutAlbumInput = {
    where: TrackScalarWhereInput
    data: XOR<TrackUpdateManyMutationInput, TrackUncheckedUpdateManyWithoutTracksInput>
  }

  export type TrackScalarWhereInput = {
    AND?: Enumerable<TrackScalarWhereInput>
    OR?: Enumerable<TrackScalarWhereInput>
    NOT?: Enumerable<TrackScalarWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringFilter | string
    name?: StringFilter | string
    discNumber?: IntFilter | number
    durationMs?: IntFilter | number
    explicit?: BoolFilter | boolean
    popularity?: IntNullableFilter | number | null
    previewUrl?: StringNullableFilter | string | null
    trackNumber?: IntFilter | number
    isLocal?: BoolFilter | boolean
    albumId?: IntNullableFilter | number | null
  }

  export type TracksOnPlaylistCreateWithoutPlaylistInput = {
    Track: TrackCreateNestedOneWithoutInPlaylistInput
  }

  export type TracksOnPlaylistUncheckedCreateWithoutPlaylistInput = {
    trackId: number
  }

  export type TracksOnPlaylistCreateOrConnectWithoutPlaylistInput = {
    where: TracksOnPlaylistWhereUniqueInput
    create: XOR<TracksOnPlaylistCreateWithoutPlaylistInput, TracksOnPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type TracksOnPlaylistCreateManyPlaylistInputEnvelope = {
    data: Enumerable<TracksOnPlaylistCreateManyPlaylistInput>
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutPlaylistInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    name: string
    email?: string | null
    authType?: string
    type?: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId?: string | null
    product: string
    FollowPlaylists?: PlaylistOnFollowerCreateNestedManyWithoutUserInput
    FollowingArtists?: ArtistOnFollowingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutPlaylistInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    name: string
    email?: string | null
    authType?: string
    type?: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId?: string | null
    product: string
    FollowPlaylists?: PlaylistOnFollowerUncheckedCreateNestedManyWithoutUserInput
    FollowingArtists?: ArtistOnFollowingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutPlaylistInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistOnFollowerCreateWithoutPlaylistInput = {
    User: UserCreateNestedOneWithoutFollowPlaylistsInput
  }

  export type PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput = {
    userId: number
  }

  export type PlaylistOnFollowerCreateOrConnectWithoutPlaylistInput = {
    where: PlaylistOnFollowerWhereUniqueInput
    create: XOR<PlaylistOnFollowerCreateWithoutPlaylistInput, PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistOnFollowerCreateManyPlaylistInputEnvelope = {
    data: Enumerable<PlaylistOnFollowerCreateManyPlaylistInput>
    skipDuplicates?: boolean
  }

  export type TracksOnPlaylistUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: TracksOnPlaylistWhereUniqueInput
    update: XOR<TracksOnPlaylistUpdateWithoutPlaylistInput, TracksOnPlaylistUncheckedUpdateWithoutPlaylistInput>
    create: XOR<TracksOnPlaylistCreateWithoutPlaylistInput, TracksOnPlaylistUncheckedCreateWithoutPlaylistInput>
  }

  export type TracksOnPlaylistUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: TracksOnPlaylistWhereUniqueInput
    data: XOR<TracksOnPlaylistUpdateWithoutPlaylistInput, TracksOnPlaylistUncheckedUpdateWithoutPlaylistInput>
  }

  export type TracksOnPlaylistUpdateManyWithWhereWithoutPlaylistInput = {
    where: TracksOnPlaylistScalarWhereInput
    data: XOR<TracksOnPlaylistUpdateManyMutationInput, TracksOnPlaylistUncheckedUpdateManyWithoutTracksInput>
  }

  export type UserUpsertWithoutPlaylistInput = {
    update: XOR<UserUpdateWithoutPlaylistInput, UserUncheckedUpdateWithoutPlaylistInput>
    create: XOR<UserCreateWithoutPlaylistInput, UserUncheckedCreateWithoutPlaylistInput>
  }

  export type UserUpdateWithoutPlaylistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    FollowPlaylists?: PlaylistOnFollowerUpdateManyWithoutUserNestedInput
    FollowingArtists?: ArtistOnFollowingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    FollowPlaylists?: PlaylistOnFollowerUncheckedUpdateManyWithoutUserNestedInput
    FollowingArtists?: ArtistOnFollowingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type PlaylistOnFollowerUpsertWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistOnFollowerWhereUniqueInput
    update: XOR<PlaylistOnFollowerUpdateWithoutPlaylistInput, PlaylistOnFollowerUncheckedUpdateWithoutPlaylistInput>
    create: XOR<PlaylistOnFollowerCreateWithoutPlaylistInput, PlaylistOnFollowerUncheckedCreateWithoutPlaylistInput>
  }

  export type PlaylistOnFollowerUpdateWithWhereUniqueWithoutPlaylistInput = {
    where: PlaylistOnFollowerWhereUniqueInput
    data: XOR<PlaylistOnFollowerUpdateWithoutPlaylistInput, PlaylistOnFollowerUncheckedUpdateWithoutPlaylistInput>
  }

  export type PlaylistOnFollowerUpdateManyWithWhereWithoutPlaylistInput = {
    where: PlaylistOnFollowerScalarWhereInput
    data: XOR<PlaylistOnFollowerUpdateManyMutationInput, PlaylistOnFollowerUncheckedUpdateManyWithoutFollowersInput>
  }

  export type PlaylistCreateWithoutTracksInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    imagesId?: string | null
    owner: UserCreateNestedOneWithoutPlaylistInput
    followers?: PlaylistOnFollowerCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutTracksInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    ownerId: number
    imagesId?: string | null
    followers?: PlaylistOnFollowerUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutTracksInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutTracksInput, PlaylistUncheckedCreateWithoutTracksInput>
  }

  export type TrackCreateWithoutInPlaylistInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    availableMarkets?: TracksAvailableMarketCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutInPlaylistInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    albumId?: number | null
    availableMarkets?: TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutInPlaylistInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutInPlaylistInput, TrackUncheckedCreateWithoutInPlaylistInput>
  }

  export type PlaylistUpsertWithoutTracksInput = {
    update: XOR<PlaylistUpdateWithoutTracksInput, PlaylistUncheckedUpdateWithoutTracksInput>
    create: XOR<PlaylistCreateWithoutTracksInput, PlaylistUncheckedCreateWithoutTracksInput>
  }

  export type PlaylistUpdateWithoutTracksInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    owner?: UserUpdateOneRequiredWithoutPlaylistNestedInput
    followers?: PlaylistOnFollowerUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    followers?: PlaylistOnFollowerUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type TrackUpsertWithoutInPlaylistInput = {
    update: XOR<TrackUpdateWithoutInPlaylistInput, TrackUncheckedUpdateWithoutInPlaylistInput>
    create: XOR<TrackCreateWithoutInPlaylistInput, TrackUncheckedCreateWithoutInPlaylistInput>
  }

  export type TrackUpdateWithoutInPlaylistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    availableMarkets?: TracksAvailableMarketUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutInPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    availableMarkets?: TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TagCreateWithoutTracksAvailableMarketInput = {
    code: string
    type: string
    name: string
    AlbumAvailableMarket?: AlbumAvailableMarketCreateNestedManyWithoutTagInput
    ArtistInGenres?: ArtistInGenresCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutTracksAvailableMarketInput = {
    id?: number
    code: string
    type: string
    name: string
    AlbumAvailableMarket?: AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInput
    ArtistInGenres?: ArtistInGenresUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutTracksAvailableMarketInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutTracksAvailableMarketInput, TagUncheckedCreateWithoutTracksAvailableMarketInput>
  }

  export type TrackCreateWithoutAvailableMarketsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    Artists?: TrackProduceByArtistCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutAvailableMarketsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    albumId?: number | null
    Artists?: TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutAvailableMarketsInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutAvailableMarketsInput, TrackUncheckedCreateWithoutAvailableMarketsInput>
  }

  export type TagUpsertWithoutTracksAvailableMarketInput = {
    update: XOR<TagUpdateWithoutTracksAvailableMarketInput, TagUncheckedUpdateWithoutTracksAvailableMarketInput>
    create: XOR<TagCreateWithoutTracksAvailableMarketInput, TagUncheckedCreateWithoutTracksAvailableMarketInput>
  }

  export type TagUpdateWithoutTracksAvailableMarketInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    AlbumAvailableMarket?: AlbumAvailableMarketUpdateManyWithoutTagNestedInput
    ArtistInGenres?: ArtistInGenresUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutTracksAvailableMarketInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    AlbumAvailableMarket?: AlbumAvailableMarketUncheckedUpdateManyWithoutTagNestedInput
    ArtistInGenres?: ArtistInGenresUncheckedUpdateManyWithoutTagNestedInput
  }

  export type TrackUpsertWithoutAvailableMarketsInput = {
    update: XOR<TrackUpdateWithoutAvailableMarketsInput, TrackUncheckedUpdateWithoutAvailableMarketsInput>
    create: XOR<TrackCreateWithoutAvailableMarketsInput, TrackUncheckedCreateWithoutAvailableMarketsInput>
  }

  export type TrackUpdateWithoutAvailableMarketsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    Artists?: TrackProduceByArtistUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutAvailableMarketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    Artists?: TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateWithoutArtistsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    availableMarkets?: TracksAvailableMarketCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutArtistsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
    albumId?: number | null
    availableMarkets?: TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutArtistsInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutArtistsInput, TrackUncheckedCreateWithoutArtistsInput>
  }

  export type ArtistCreateWithoutTrackProduceByArtistInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresCreateNestedManyWithoutArtistInput
    AlbumProduceByArtist?: AlbumProduceByArtistCreateNestedManyWithoutArtistInput
    Followers?: ArtistOnFollowingCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutTrackProduceByArtistInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput
    Followers?: ArtistOnFollowingUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutTrackProduceByArtistInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutTrackProduceByArtistInput, ArtistUncheckedCreateWithoutTrackProduceByArtistInput>
  }

  export type TrackUpsertWithoutArtistsInput = {
    update: XOR<TrackUpdateWithoutArtistsInput, TrackUncheckedUpdateWithoutArtistsInput>
    create: XOR<TrackCreateWithoutArtistsInput, TrackUncheckedCreateWithoutArtistsInput>
  }

  export type TrackUpdateWithoutArtistsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    availableMarkets?: TracksAvailableMarketUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    availableMarkets?: TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type ArtistUpsertWithoutTrackProduceByArtistInput = {
    update: XOR<ArtistUpdateWithoutTrackProduceByArtistInput, ArtistUncheckedUpdateWithoutTrackProduceByArtistInput>
    create: XOR<ArtistCreateWithoutTrackProduceByArtistInput, ArtistUncheckedCreateWithoutTrackProduceByArtistInput>
  }

  export type ArtistUpdateWithoutTrackProduceByArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUpdateManyWithoutArtistNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUpdateManyWithoutArtistNestedInput
    Followers?: ArtistOnFollowingUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutTrackProduceByArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInput
    Followers?: ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type PlaylistCreateWithoutFollowersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    imagesId?: string | null
    tracks?: TracksOnPlaylistCreateNestedManyWithoutPlaylistInput
    owner: UserCreateNestedOneWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateWithoutFollowersInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    ownerId: number
    imagesId?: string | null
    tracks?: TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistCreateOrConnectWithoutFollowersInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutFollowersInput, PlaylistUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowPlaylistsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    name: string
    email?: string | null
    authType?: string
    type?: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId?: string | null
    product: string
    Playlist?: PlaylistCreateNestedManyWithoutOwnerInput
    FollowingArtists?: ArtistOnFollowingCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowPlaylistsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    name: string
    email?: string | null
    authType?: string
    type?: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId?: string | null
    product: string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    FollowingArtists?: ArtistOnFollowingUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowPlaylistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowPlaylistsInput, UserUncheckedCreateWithoutFollowPlaylistsInput>
  }

  export type PlaylistUpsertWithoutFollowersInput = {
    update: XOR<PlaylistUpdateWithoutFollowersInput, PlaylistUncheckedUpdateWithoutFollowersInput>
    create: XOR<PlaylistCreateWithoutFollowersInput, PlaylistUncheckedCreateWithoutFollowersInput>
  }

  export type PlaylistUpdateWithoutFollowersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksOnPlaylistUpdateManyWithoutPlaylistNestedInput
    owner?: UserUpdateOneRequiredWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    ownerId?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksOnPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type UserUpsertWithoutFollowPlaylistsInput = {
    update: XOR<UserUpdateWithoutFollowPlaylistsInput, UserUncheckedUpdateWithoutFollowPlaylistsInput>
    create: XOR<UserCreateWithoutFollowPlaylistsInput, UserUncheckedCreateWithoutFollowPlaylistsInput>
  }

  export type UserUpdateWithoutFollowPlaylistsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    Playlist?: PlaylistUpdateManyWithoutOwnerNestedInput
    FollowingArtists?: ArtistOnFollowingUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowPlaylistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    FollowingArtists?: ArtistOnFollowingUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlbumCreateWithoutArtistsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date | string
    releaseDatePrecision: string
    albumGroup: string
    copyrights?: string | null
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketCreateNestedManyWithoutAlbumInput
    Tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date | string
    releaseDatePrecision: string
    albumGroup: string
    copyrights?: string | null
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInput
    Tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistsInput, AlbumUncheckedCreateWithoutArtistsInput>
  }

  export type ArtistCreateWithoutAlbumProduceByArtistInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistCreateNestedManyWithoutArtistsInput
    Followers?: ArtistOnFollowingCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutAlbumProduceByArtistInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput
    Followers?: ArtistOnFollowingUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutAlbumProduceByArtistInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutAlbumProduceByArtistInput, ArtistUncheckedCreateWithoutAlbumProduceByArtistInput>
  }

  export type AlbumUpsertWithoutArtistsInput = {
    update: XOR<AlbumUpdateWithoutArtistsInput, AlbumUncheckedUpdateWithoutArtistsInput>
    create: XOR<AlbumCreateWithoutArtistsInput, AlbumUncheckedCreateWithoutArtistsInput>
  }

  export type AlbumUpdateWithoutArtistsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type ArtistUpsertWithoutAlbumProduceByArtistInput = {
    update: XOR<ArtistUpdateWithoutAlbumProduceByArtistInput, ArtistUncheckedUpdateWithoutAlbumProduceByArtistInput>
    create: XOR<ArtistCreateWithoutAlbumProduceByArtistInput, ArtistUncheckedCreateWithoutAlbumProduceByArtistInput>
  }

  export type ArtistUpdateWithoutAlbumProduceByArtistInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUpdateManyWithoutArtistsNestedInput
    Followers?: ArtistOnFollowingUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutAlbumProduceByArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput
    Followers?: ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type AlbumCreateWithoutAvailableMarketsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date | string
    releaseDatePrecision: string
    albumGroup: string
    copyrights?: string | null
    imageUrl?: string | null
    Artists?: AlbumProduceByArtistCreateNestedManyWithoutAlbumInput
    Tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutAvailableMarketsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    albumType: string
    totalTracks: number
    name: string
    releaseDate: Date | string
    releaseDatePrecision: string
    albumGroup: string
    copyrights?: string | null
    imageUrl?: string | null
    Artists?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInput
    Tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutAvailableMarketsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutAvailableMarketsInput, AlbumUncheckedCreateWithoutAvailableMarketsInput>
  }

  export type TagCreateWithoutAlbumAvailableMarketInput = {
    code: string
    type: string
    name: string
    TracksAvailableMarket?: TracksAvailableMarketCreateNestedManyWithoutTagInput
    ArtistInGenres?: ArtistInGenresCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutAlbumAvailableMarketInput = {
    id?: number
    code: string
    type: string
    name: string
    TracksAvailableMarket?: TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInput
    ArtistInGenres?: ArtistInGenresUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutAlbumAvailableMarketInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutAlbumAvailableMarketInput, TagUncheckedCreateWithoutAlbumAvailableMarketInput>
  }

  export type AlbumUpsertWithoutAvailableMarketsInput = {
    update: XOR<AlbumUpdateWithoutAvailableMarketsInput, AlbumUncheckedUpdateWithoutAvailableMarketsInput>
    create: XOR<AlbumCreateWithoutAvailableMarketsInput, AlbumUncheckedCreateWithoutAvailableMarketsInput>
  }

  export type AlbumUpdateWithoutAvailableMarketsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Artists?: AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutAvailableMarketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    albumGroup?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Artists?: AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type TagUpsertWithoutAlbumAvailableMarketInput = {
    update: XOR<TagUpdateWithoutAlbumAvailableMarketInput, TagUncheckedUpdateWithoutAlbumAvailableMarketInput>
    create: XOR<TagCreateWithoutAlbumAvailableMarketInput, TagUncheckedCreateWithoutAlbumAvailableMarketInput>
  }

  export type TagUpdateWithoutAlbumAvailableMarketInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    TracksAvailableMarket?: TracksAvailableMarketUpdateManyWithoutTagNestedInput
    ArtistInGenres?: ArtistInGenresUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutAlbumAvailableMarketInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    TracksAvailableMarket?: TracksAvailableMarketUncheckedUpdateManyWithoutTagNestedInput
    ArtistInGenres?: ArtistInGenresUncheckedUpdateManyWithoutTagNestedInput
  }

  export type ArtistCreateWithoutGenresInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    TrackProduceByArtist?: TrackProduceByArtistCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistCreateNestedManyWithoutArtistInput
    Followers?: ArtistOnFollowingCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutGenresInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    TrackProduceByArtist?: TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput
    Followers?: ArtistOnFollowingUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutGenresInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput>
  }

  export type TagCreateWithoutArtistInGenresInput = {
    code: string
    type: string
    name: string
    AlbumAvailableMarket?: AlbumAvailableMarketCreateNestedManyWithoutTagInput
    TracksAvailableMarket?: TracksAvailableMarketCreateNestedManyWithoutTagInput
  }

  export type TagUncheckedCreateWithoutArtistInGenresInput = {
    id?: number
    code: string
    type: string
    name: string
    AlbumAvailableMarket?: AlbumAvailableMarketUncheckedCreateNestedManyWithoutTagInput
    TracksAvailableMarket?: TracksAvailableMarketUncheckedCreateNestedManyWithoutTagInput
  }

  export type TagCreateOrConnectWithoutArtistInGenresInput = {
    where: TagWhereUniqueInput
    create: XOR<TagCreateWithoutArtistInGenresInput, TagUncheckedCreateWithoutArtistInGenresInput>
  }

  export type ArtistUpsertWithoutGenresInput = {
    update: XOR<ArtistUpdateWithoutGenresInput, ArtistUncheckedUpdateWithoutGenresInput>
    create: XOR<ArtistCreateWithoutGenresInput, ArtistUncheckedCreateWithoutGenresInput>
  }

  export type ArtistUpdateWithoutGenresInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    TrackProduceByArtist?: TrackProduceByArtistUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUpdateManyWithoutArtistNestedInput
    Followers?: ArtistOnFollowingUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    TrackProduceByArtist?: TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInput
    Followers?: ArtistOnFollowingUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type TagUpsertWithoutArtistInGenresInput = {
    update: XOR<TagUpdateWithoutArtistInGenresInput, TagUncheckedUpdateWithoutArtistInGenresInput>
    create: XOR<TagCreateWithoutArtistInGenresInput, TagUncheckedCreateWithoutArtistInGenresInput>
  }

  export type TagUpdateWithoutArtistInGenresInput = {
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    AlbumAvailableMarket?: AlbumAvailableMarketUpdateManyWithoutTagNestedInput
    TracksAvailableMarket?: TracksAvailableMarketUpdateManyWithoutTagNestedInput
  }

  export type TagUncheckedUpdateWithoutArtistInGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    code?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    AlbumAvailableMarket?: AlbumAvailableMarketUncheckedUpdateManyWithoutTagNestedInput
    TracksAvailableMarket?: TracksAvailableMarketUncheckedUpdateManyWithoutTagNestedInput
  }

  export type ArtistCreateWithoutFollowersInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutFollowersInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistCreateOrConnectWithoutFollowersInput = {
    where: ArtistWhereUniqueInput
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
  }

  export type UserCreateWithoutFollowingArtistsInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    name: string
    email?: string | null
    authType?: string
    type?: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId?: string | null
    product: string
    Playlist?: PlaylistCreateNestedManyWithoutOwnerInput
    FollowPlaylists?: PlaylistOnFollowerCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFollowingArtistsInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    name: string
    email?: string | null
    authType?: string
    type?: string
    country: string
    explicitContentFilterEnabled: boolean
    explicitContentFilterLocked: boolean
    imagesId?: string | null
    product: string
    Playlist?: PlaylistUncheckedCreateNestedManyWithoutOwnerInput
    FollowPlaylists?: PlaylistOnFollowerUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFollowingArtistsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFollowingArtistsInput, UserUncheckedCreateWithoutFollowingArtistsInput>
  }

  export type ArtistUpsertWithoutFollowersInput = {
    update: XOR<ArtistUpdateWithoutFollowersInput, ArtistUncheckedUpdateWithoutFollowersInput>
    create: XOR<ArtistCreateWithoutFollowersInput, ArtistUncheckedCreateWithoutFollowersInput>
  }

  export type ArtistUpdateWithoutFollowersInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutFollowersInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type UserUpsertWithoutFollowingArtistsInput = {
    update: XOR<UserUpdateWithoutFollowingArtistsInput, UserUncheckedUpdateWithoutFollowingArtistsInput>
    create: XOR<UserCreateWithoutFollowingArtistsInput, UserUncheckedCreateWithoutFollowingArtistsInput>
  }

  export type UserUpdateWithoutFollowingArtistsInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    Playlist?: PlaylistUpdateManyWithoutOwnerNestedInput
    FollowPlaylists?: PlaylistOnFollowerUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFollowingArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    name?: StringFieldUpdateOperationsInput | string
    email?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    country?: StringFieldUpdateOperationsInput | string
    explicitContentFilterEnabled?: BoolFieldUpdateOperationsInput | boolean
    explicitContentFilterLocked?: BoolFieldUpdateOperationsInput | boolean
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    product?: StringFieldUpdateOperationsInput | string
    Playlist?: PlaylistUncheckedUpdateManyWithoutOwnerNestedInput
    FollowPlaylists?: PlaylistOnFollowerUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AlbumAvailableMarketCreateManyTagInput = {
    albumId: number
  }

  export type TracksAvailableMarketCreateManyTagInput = {
    trackId: number
  }

  export type ArtistInGenresCreateManyTagInput = {
    artistId: number
  }

  export type AlbumAvailableMarketUpdateWithoutTagInput = {
    Album?: AlbumUpdateOneRequiredWithoutAvailableMarketsNestedInput
  }

  export type AlbumAvailableMarketUncheckedUpdateWithoutTagInput = {
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumAvailableMarketInput = {
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksAvailableMarketUpdateWithoutTagInput = {
    Track?: TrackUpdateOneRequiredWithoutAvailableMarketsNestedInput
  }

  export type TracksAvailableMarketUncheckedUpdateWithoutTagInput = {
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksAvailableMarketUncheckedUpdateManyWithoutTracksAvailableMarketInput = {
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistInGenresUpdateWithoutTagInput = {
    Artist?: ArtistUpdateOneRequiredWithoutGenresNestedInput
  }

  export type ArtistInGenresUncheckedUpdateWithoutTagInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistInGenresUncheckedUpdateManyWithoutArtistInGenresInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistCreateManyOwnerInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
    collaborative: boolean
    description: string
    name: string
    public: boolean
    snapshotId?: string | null
    primaryColor?: string | null
    tracksIds: number
    imagesId?: string | null
  }

  export type PlaylistOnFollowerCreateManyUserInput = {
    playlistId: number
  }

  export type ArtistOnFollowingCreateManyUserInput = {
    artistId: number
  }

  export type PlaylistUpdateWithoutOwnerInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksOnPlaylistUpdateManyWithoutPlaylistNestedInput
    followers?: PlaylistOnFollowerUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateWithoutOwnerInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksOnPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
    followers?: PlaylistOnFollowerUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateManyWithoutPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
    collaborative?: BoolFieldUpdateOperationsInput | boolean
    description?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    snapshotId?: NullableStringFieldUpdateOperationsInput | string | null
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    tracksIds?: IntFieldUpdateOperationsInput | number
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistOnFollowerUpdateWithoutUserInput = {
    Playlist?: PlaylistUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type PlaylistOnFollowerUncheckedUpdateWithoutUserInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistOnFollowerUncheckedUpdateManyWithoutFollowPlaylistsInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistOnFollowingUpdateWithoutUserInput = {
    Artist?: ArtistUpdateOneRequiredWithoutFollowersNestedInput
  }

  export type ArtistOnFollowingUncheckedUpdateWithoutUserInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistOnFollowingUncheckedUpdateManyWithoutFollowingArtistsInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistInGenresCreateManyArtistInput = {
    tagId: number
  }

  export type TrackProduceByArtistCreateManyArtistsInput = {
    trackId: number
  }

  export type AlbumProduceByArtistCreateManyArtistInput = {
    albumId: number
  }

  export type ArtistOnFollowingCreateManyArtistInput = {
    userId: number
  }

  export type ArtistInGenresUpdateWithoutArtistInput = {
    Tag?: TagUpdateOneRequiredWithoutArtistInGenresNestedInput
  }

  export type ArtistInGenresUncheckedUpdateWithoutArtistInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistInGenresUncheckedUpdateManyWithoutGenresInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackProduceByArtistUpdateWithoutArtistsInput = {
    Track?: TrackUpdateOneRequiredWithoutArtistsNestedInput
  }

  export type TrackProduceByArtistUncheckedUpdateWithoutArtistsInput = {
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackProduceByArtistUncheckedUpdateManyWithoutTrackProduceByArtistInput = {
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumProduceByArtistUpdateWithoutArtistInput = {
    Album?: AlbumUpdateOneRequiredWithoutArtistsNestedInput
  }

  export type AlbumProduceByArtistUncheckedUpdateWithoutArtistInput = {
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumProduceByArtistInput = {
    albumId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistOnFollowingUpdateWithoutArtistInput = {
    User?: UserUpdateOneRequiredWithoutFollowingArtistsNestedInput
  }

  export type ArtistOnFollowingUncheckedUpdateWithoutArtistInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type ArtistOnFollowingUncheckedUpdateManyWithoutFollowersInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksAvailableMarketCreateManyTrackInput = {
    tagId: number
  }

  export type TrackProduceByArtistCreateManyTrackInput = {
    artistId: number
  }

  export type TracksOnPlaylistCreateManyTrackInput = {
    playlistId: number
  }

  export type TracksAvailableMarketUpdateWithoutTrackInput = {
    Tag?: TagUpdateOneRequiredWithoutTracksAvailableMarketNestedInput
  }

  export type TracksAvailableMarketUncheckedUpdateWithoutTrackInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackProduceByArtistUpdateWithoutTrackInput = {
    Artists?: ArtistUpdateOneRequiredWithoutTrackProduceByArtistNestedInput
  }

  export type TrackProduceByArtistUncheckedUpdateWithoutTrackInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackProduceByArtistUncheckedUpdateManyWithoutArtistsInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksOnPlaylistUpdateWithoutTrackInput = {
    Playlist?: PlaylistUpdateOneRequiredWithoutTracksNestedInput
  }

  export type TracksOnPlaylistUncheckedUpdateWithoutTrackInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksOnPlaylistUncheckedUpdateManyWithoutInPlaylistInput = {
    playlistId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumAvailableMarketCreateManyAlbumInput = {
    tagId: number
  }

  export type AlbumProduceByArtistCreateManyAlbumInput = {
    artistId: number
  }

  export type TrackCreateManyAlbumInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    name: string
    discNumber: number
    durationMs: number
    explicit: boolean
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    isLocal: boolean
  }

  export type AlbumAvailableMarketUpdateWithoutAlbumInput = {
    Tag?: TagUpdateOneRequiredWithoutAlbumAvailableMarketNestedInput
  }

  export type AlbumAvailableMarketUncheckedUpdateWithoutAlbumInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumAvailableMarketUncheckedUpdateManyWithoutAvailableMarketsInput = {
    tagId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumProduceByArtistUpdateWithoutAlbumInput = {
    Artist?: ArtistUpdateOneRequiredWithoutAlbumProduceByArtistNestedInput
  }

  export type AlbumProduceByArtistUncheckedUpdateWithoutAlbumInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumProduceByArtistUncheckedUpdateManyWithoutArtistsInput = {
    artistId?: IntFieldUpdateOperationsInput | number
  }

  export type TrackUpdateWithoutAlbumInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    availableMarkets?: TracksAvailableMarketUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
    availableMarkets?: TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    durationMs?: IntFieldUpdateOperationsInput | number
    explicit?: BoolFieldUpdateOperationsInput | boolean
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    isLocal?: BoolFieldUpdateOperationsInput | boolean
  }

  export type TracksOnPlaylistCreateManyPlaylistInput = {
    trackId: number
  }

  export type PlaylistOnFollowerCreateManyPlaylistInput = {
    userId: number
  }

  export type TracksOnPlaylistUpdateWithoutPlaylistInput = {
    Track?: TrackUpdateOneRequiredWithoutInPlaylistNestedInput
  }

  export type TracksOnPlaylistUncheckedUpdateWithoutPlaylistInput = {
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type TracksOnPlaylistUncheckedUpdateManyWithoutTracksInput = {
    trackId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistOnFollowerUpdateWithoutPlaylistInput = {
    User?: UserUpdateOneRequiredWithoutFollowPlaylistsNestedInput
  }

  export type PlaylistOnFollowerUncheckedUpdateWithoutPlaylistInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }

  export type PlaylistOnFollowerUncheckedUpdateManyWithoutFollowersInput = {
    userId?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}