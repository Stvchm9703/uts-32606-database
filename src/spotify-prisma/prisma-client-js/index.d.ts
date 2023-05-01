
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
 * Model Artist
 * 
 */
export type Artist = {
  id: number
  name: string
  popularity: number | null
  imageUrl: string | null
}

/**
 * Model ArtistDataMeta
 * 
 */
export type ArtistDataMeta = {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string
}

/**
 * Model Track
 * 
 */
export type Track = {
  id: number
  name: string
  discNumber: number
  popularity: number | null
  previewUrl: string | null
  trackNumber: number
  albumId: number | null
}

/**
 * Model TrackMeta
 * 
 */
export type TrackMeta = {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string
  durationMs: number
}

/**
 * Model Album
 * 
 */
export type Album = {
  id: number
  albumType: string
  totalTracks: number
  name: string
  imageUrl: string | null
}

/**
 * Model AlbumMeta
 * 
 */
export type AlbumMeta = {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string
  releaseDate: Date
  releaseDatePrecision: string
  copyrights: string | null
}

/**
 * Model Playlist
 * 
 */
export type Playlist = {
  id: number
  name: string
  description: string
  public: boolean
  primaryColor: string | null
  imagesId: string | null
}

/**
 * Model PlaylistMeta
 * 
 */
export type PlaylistMeta = {
  id: number
  createdAt: Date
  updatedAt: Date
  uid: string | null
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
   * `prisma.artist`: Exposes CRUD operations for the **Artist** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Artists
    * const artists = await prisma.artist.findMany()
    * ```
    */
  get artist(): Prisma.ArtistDelegate<GlobalReject>;

  /**
   * `prisma.artistDataMeta`: Exposes CRUD operations for the **ArtistDataMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more ArtistDataMetas
    * const artistDataMetas = await prisma.artistDataMeta.findMany()
    * ```
    */
  get artistDataMeta(): Prisma.ArtistDataMetaDelegate<GlobalReject>;

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
   * `prisma.trackMeta`: Exposes CRUD operations for the **TrackMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more TrackMetas
    * const trackMetas = await prisma.trackMeta.findMany()
    * ```
    */
  get trackMeta(): Prisma.TrackMetaDelegate<GlobalReject>;

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
   * `prisma.albumMeta`: Exposes CRUD operations for the **AlbumMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more AlbumMetas
    * const albumMetas = await prisma.albumMeta.findMany()
    * ```
    */
  get albumMeta(): Prisma.AlbumMetaDelegate<GlobalReject>;

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
   * `prisma.playlistMeta`: Exposes CRUD operations for the **PlaylistMeta** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more PlaylistMetas
    * const playlistMetas = await prisma.playlistMeta.findMany()
    * ```
    */
  get playlistMeta(): Prisma.PlaylistMetaDelegate<GlobalReject>;

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
   * Query Engine version: 1e7af066ee9cb95cf3a403c78d9aab3e6b04f37a
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
   * Count Type ArtistCountOutputType
   */


  export type ArtistCountOutputType = {
    Genres: number
    TrackProduceByArtist: number
    AlbumProduceByArtist: number
  }

  export type ArtistCountOutputTypeSelect = {
    Genres?: boolean
    TrackProduceByArtist?: boolean
    AlbumProduceByArtist?: boolean
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
  }

  export type PlaylistCountOutputTypeSelect = {
    tracks?: boolean
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
    name: string | null
    popularity: number | null
    imageUrl: string | null
  }

  export type ArtistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    popularity: number | null
    imageUrl: string | null
  }

  export type ArtistCountAggregateOutputType = {
    id: number
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
    name?: true
    popularity?: true
    imageUrl?: true
  }

  export type ArtistMaxAggregateInputType = {
    id?: true
    name?: true
    popularity?: true
    imageUrl?: true
  }

  export type ArtistCountAggregateInputType = {
    id?: true
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
    name?: boolean
    popularity?: boolean
    imageUrl?: boolean
    Genres?: boolean | Artist$GenresArgs
    TrackProduceByArtist?: boolean | Artist$TrackProduceByArtistArgs
    AlbumProduceByArtist?: boolean | Artist$AlbumProduceByArtistArgs
    _count?: boolean | ArtistCountOutputTypeArgs
  }


  export type ArtistInclude = {
    Genres?: boolean | Artist$GenresArgs
    TrackProduceByArtist?: boolean | Artist$TrackProduceByArtistArgs
    AlbumProduceByArtist?: boolean | Artist$AlbumProduceByArtistArgs
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
        P extends '_count' ? ArtistCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (ArtistArgs | ArtistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'Genres' ? Array < ArtistInGenresGetPayload<S['select'][P]>>  :
        P extends 'TrackProduceByArtist' ? Array < TrackProduceByArtistGetPayload<S['select'][P]>>  :
        P extends 'AlbumProduceByArtist' ? Array < AlbumProduceByArtistGetPayload<S['select'][P]>>  :
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
   * Model ArtistDataMeta
   */


  export type AggregateArtistDataMeta = {
    _count: ArtistDataMetaCountAggregateOutputType | null
    _avg: ArtistDataMetaAvgAggregateOutputType | null
    _sum: ArtistDataMetaSumAggregateOutputType | null
    _min: ArtistDataMetaMinAggregateOutputType | null
    _max: ArtistDataMetaMaxAggregateOutputType | null
  }

  export type ArtistDataMetaAvgAggregateOutputType = {
    id: number | null
  }

  export type ArtistDataMetaSumAggregateOutputType = {
    id: number | null
  }

  export type ArtistDataMetaMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
  }

  export type ArtistDataMetaMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
  }

  export type ArtistDataMetaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    _all: number
  }


  export type ArtistDataMetaAvgAggregateInputType = {
    id?: true
  }

  export type ArtistDataMetaSumAggregateInputType = {
    id?: true
  }

  export type ArtistDataMetaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
  }

  export type ArtistDataMetaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
  }

  export type ArtistDataMetaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    _all?: true
  }

  export type ArtistDataMetaAggregateArgs = {
    /**
     * Filter which ArtistDataMeta to aggregate.
     */
    where?: ArtistDataMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistDataMetas to fetch.
     */
    orderBy?: Enumerable<ArtistDataMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ArtistDataMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistDataMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistDataMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned ArtistDataMetas
    **/
    _count?: true | ArtistDataMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ArtistDataMetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ArtistDataMetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ArtistDataMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ArtistDataMetaMaxAggregateInputType
  }

  export type GetArtistDataMetaAggregateType<T extends ArtistDataMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateArtistDataMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateArtistDataMeta[P]>
      : GetScalarType<T[P], AggregateArtistDataMeta[P]>
  }




  export type ArtistDataMetaGroupByArgs = {
    where?: ArtistDataMetaWhereInput
    orderBy?: Enumerable<ArtistDataMetaOrderByWithAggregationInput>
    by: ArtistDataMetaScalarFieldEnum[]
    having?: ArtistDataMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ArtistDataMetaCountAggregateInputType | true
    _avg?: ArtistDataMetaAvgAggregateInputType
    _sum?: ArtistDataMetaSumAggregateInputType
    _min?: ArtistDataMetaMinAggregateInputType
    _max?: ArtistDataMetaMaxAggregateInputType
  }


  export type ArtistDataMetaGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    uid: string
    _count: ArtistDataMetaCountAggregateOutputType | null
    _avg: ArtistDataMetaAvgAggregateOutputType | null
    _sum: ArtistDataMetaSumAggregateOutputType | null
    _min: ArtistDataMetaMinAggregateOutputType | null
    _max: ArtistDataMetaMaxAggregateOutputType | null
  }

  type GetArtistDataMetaGroupByPayload<T extends ArtistDataMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<ArtistDataMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ArtistDataMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ArtistDataMetaGroupByOutputType[P]>
            : GetScalarType<T[P], ArtistDataMetaGroupByOutputType[P]>
        }
      >
    >


  export type ArtistDataMetaSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
  }


  export type ArtistDataMetaGetPayload<S extends boolean | null | undefined | ArtistDataMetaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? ArtistDataMeta :
    S extends undefined ? never :
    S extends { include: any } & (ArtistDataMetaArgs | ArtistDataMetaFindManyArgs)
    ? ArtistDataMeta 
    : S extends { select: any } & (ArtistDataMetaArgs | ArtistDataMetaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof ArtistDataMeta ? ArtistDataMeta[P] : never
  } 
      : ArtistDataMeta


  type ArtistDataMetaCountArgs = 
    Omit<ArtistDataMetaFindManyArgs, 'select' | 'include'> & {
      select?: ArtistDataMetaCountAggregateInputType | true
    }

  export interface ArtistDataMetaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one ArtistDataMeta that matches the filter.
     * @param {ArtistDataMetaFindUniqueArgs} args - Arguments to find a ArtistDataMeta
     * @example
     * // Get one ArtistDataMeta
     * const artistDataMeta = await prisma.artistDataMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends ArtistDataMetaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, ArtistDataMetaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'ArtistDataMeta'> extends True ? Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T>> : Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T> | null, null>

    /**
     * Find one ArtistDataMeta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {ArtistDataMetaFindUniqueOrThrowArgs} args - Arguments to find a ArtistDataMeta
     * @example
     * // Get one ArtistDataMeta
     * const artistDataMeta = await prisma.artistDataMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends ArtistDataMetaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, ArtistDataMetaFindUniqueOrThrowArgs>
    ): Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T>>

    /**
     * Find the first ArtistDataMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistDataMetaFindFirstArgs} args - Arguments to find a ArtistDataMeta
     * @example
     * // Get one ArtistDataMeta
     * const artistDataMeta = await prisma.artistDataMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends ArtistDataMetaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, ArtistDataMetaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'ArtistDataMeta'> extends True ? Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T>> : Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T> | null, null>

    /**
     * Find the first ArtistDataMeta that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistDataMetaFindFirstOrThrowArgs} args - Arguments to find a ArtistDataMeta
     * @example
     * // Get one ArtistDataMeta
     * const artistDataMeta = await prisma.artistDataMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends ArtistDataMetaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, ArtistDataMetaFindFirstOrThrowArgs>
    ): Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T>>

    /**
     * Find zero or more ArtistDataMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistDataMetaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all ArtistDataMetas
     * const artistDataMetas = await prisma.artistDataMeta.findMany()
     * 
     * // Get first 10 ArtistDataMetas
     * const artistDataMetas = await prisma.artistDataMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const artistDataMetaWithIdOnly = await prisma.artistDataMeta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends ArtistDataMetaFindManyArgs>(
      args?: SelectSubset<T, ArtistDataMetaFindManyArgs>
    ): Prisma.PrismaPromise<Array<ArtistDataMetaGetPayload<T>>>

    /**
     * Create a ArtistDataMeta.
     * @param {ArtistDataMetaCreateArgs} args - Arguments to create a ArtistDataMeta.
     * @example
     * // Create one ArtistDataMeta
     * const ArtistDataMeta = await prisma.artistDataMeta.create({
     *   data: {
     *     // ... data to create a ArtistDataMeta
     *   }
     * })
     * 
    **/
    create<T extends ArtistDataMetaCreateArgs>(
      args: SelectSubset<T, ArtistDataMetaCreateArgs>
    ): Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T>>

    /**
     * Create many ArtistDataMetas.
     *     @param {ArtistDataMetaCreateManyArgs} args - Arguments to create many ArtistDataMetas.
     *     @example
     *     // Create many ArtistDataMetas
     *     const artistDataMeta = await prisma.artistDataMeta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends ArtistDataMetaCreateManyArgs>(
      args?: SelectSubset<T, ArtistDataMetaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a ArtistDataMeta.
     * @param {ArtistDataMetaDeleteArgs} args - Arguments to delete one ArtistDataMeta.
     * @example
     * // Delete one ArtistDataMeta
     * const ArtistDataMeta = await prisma.artistDataMeta.delete({
     *   where: {
     *     // ... filter to delete one ArtistDataMeta
     *   }
     * })
     * 
    **/
    delete<T extends ArtistDataMetaDeleteArgs>(
      args: SelectSubset<T, ArtistDataMetaDeleteArgs>
    ): Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T>>

    /**
     * Update one ArtistDataMeta.
     * @param {ArtistDataMetaUpdateArgs} args - Arguments to update one ArtistDataMeta.
     * @example
     * // Update one ArtistDataMeta
     * const artistDataMeta = await prisma.artistDataMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends ArtistDataMetaUpdateArgs>(
      args: SelectSubset<T, ArtistDataMetaUpdateArgs>
    ): Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T>>

    /**
     * Delete zero or more ArtistDataMetas.
     * @param {ArtistDataMetaDeleteManyArgs} args - Arguments to filter ArtistDataMetas to delete.
     * @example
     * // Delete a few ArtistDataMetas
     * const { count } = await prisma.artistDataMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends ArtistDataMetaDeleteManyArgs>(
      args?: SelectSubset<T, ArtistDataMetaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more ArtistDataMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistDataMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many ArtistDataMetas
     * const artistDataMeta = await prisma.artistDataMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends ArtistDataMetaUpdateManyArgs>(
      args: SelectSubset<T, ArtistDataMetaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one ArtistDataMeta.
     * @param {ArtistDataMetaUpsertArgs} args - Arguments to update or create a ArtistDataMeta.
     * @example
     * // Update or create a ArtistDataMeta
     * const artistDataMeta = await prisma.artistDataMeta.upsert({
     *   create: {
     *     // ... data to create a ArtistDataMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the ArtistDataMeta we want to update
     *   }
     * })
    **/
    upsert<T extends ArtistDataMetaUpsertArgs>(
      args: SelectSubset<T, ArtistDataMetaUpsertArgs>
    ): Prisma__ArtistDataMetaClient<ArtistDataMetaGetPayload<T>>

    /**
     * Count the number of ArtistDataMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistDataMetaCountArgs} args - Arguments to filter ArtistDataMetas to count.
     * @example
     * // Count the number of ArtistDataMetas
     * const count = await prisma.artistDataMeta.count({
     *   where: {
     *     // ... the filter for the ArtistDataMetas we want to count
     *   }
     * })
    **/
    count<T extends ArtistDataMetaCountArgs>(
      args?: Subset<T, ArtistDataMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ArtistDataMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a ArtistDataMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistDataMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ArtistDataMetaAggregateArgs>(args: Subset<T, ArtistDataMetaAggregateArgs>): Prisma.PrismaPromise<GetArtistDataMetaAggregateType<T>>

    /**
     * Group by ArtistDataMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ArtistDataMetaGroupByArgs} args - Group by arguments.
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
      T extends ArtistDataMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ArtistDataMetaGroupByArgs['orderBy'] }
        : { orderBy?: ArtistDataMetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ArtistDataMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetArtistDataMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for ArtistDataMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__ArtistDataMetaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * ArtistDataMeta base type for findUnique actions
   */
  export type ArtistDataMetaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
    /**
     * Filter, which ArtistDataMeta to fetch.
     */
    where: ArtistDataMetaWhereUniqueInput
  }

  /**
   * ArtistDataMeta findUnique
   */
  export interface ArtistDataMetaFindUniqueArgs extends ArtistDataMetaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ArtistDataMeta findUniqueOrThrow
   */
  export type ArtistDataMetaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
    /**
     * Filter, which ArtistDataMeta to fetch.
     */
    where: ArtistDataMetaWhereUniqueInput
  }


  /**
   * ArtistDataMeta base type for findFirst actions
   */
  export type ArtistDataMetaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
    /**
     * Filter, which ArtistDataMeta to fetch.
     */
    where?: ArtistDataMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistDataMetas to fetch.
     */
    orderBy?: Enumerable<ArtistDataMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistDataMetas.
     */
    cursor?: ArtistDataMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistDataMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistDataMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistDataMetas.
     */
    distinct?: Enumerable<ArtistDataMetaScalarFieldEnum>
  }

  /**
   * ArtistDataMeta findFirst
   */
  export interface ArtistDataMetaFindFirstArgs extends ArtistDataMetaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * ArtistDataMeta findFirstOrThrow
   */
  export type ArtistDataMetaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
    /**
     * Filter, which ArtistDataMeta to fetch.
     */
    where?: ArtistDataMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistDataMetas to fetch.
     */
    orderBy?: Enumerable<ArtistDataMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for ArtistDataMetas.
     */
    cursor?: ArtistDataMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistDataMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistDataMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of ArtistDataMetas.
     */
    distinct?: Enumerable<ArtistDataMetaScalarFieldEnum>
  }


  /**
   * ArtistDataMeta findMany
   */
  export type ArtistDataMetaFindManyArgs = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
    /**
     * Filter, which ArtistDataMetas to fetch.
     */
    where?: ArtistDataMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of ArtistDataMetas to fetch.
     */
    orderBy?: Enumerable<ArtistDataMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing ArtistDataMetas.
     */
    cursor?: ArtistDataMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` ArtistDataMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` ArtistDataMetas.
     */
    skip?: number
    distinct?: Enumerable<ArtistDataMetaScalarFieldEnum>
  }


  /**
   * ArtistDataMeta create
   */
  export type ArtistDataMetaCreateArgs = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
    /**
     * The data needed to create a ArtistDataMeta.
     */
    data: XOR<ArtistDataMetaCreateInput, ArtistDataMetaUncheckedCreateInput>
  }


  /**
   * ArtistDataMeta createMany
   */
  export type ArtistDataMetaCreateManyArgs = {
    /**
     * The data used to create many ArtistDataMetas.
     */
    data: Enumerable<ArtistDataMetaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * ArtistDataMeta update
   */
  export type ArtistDataMetaUpdateArgs = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
    /**
     * The data needed to update a ArtistDataMeta.
     */
    data: XOR<ArtistDataMetaUpdateInput, ArtistDataMetaUncheckedUpdateInput>
    /**
     * Choose, which ArtistDataMeta to update.
     */
    where: ArtistDataMetaWhereUniqueInput
  }


  /**
   * ArtistDataMeta updateMany
   */
  export type ArtistDataMetaUpdateManyArgs = {
    /**
     * The data used to update ArtistDataMetas.
     */
    data: XOR<ArtistDataMetaUpdateManyMutationInput, ArtistDataMetaUncheckedUpdateManyInput>
    /**
     * Filter which ArtistDataMetas to update
     */
    where?: ArtistDataMetaWhereInput
  }


  /**
   * ArtistDataMeta upsert
   */
  export type ArtistDataMetaUpsertArgs = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
    /**
     * The filter to search for the ArtistDataMeta to update in case it exists.
     */
    where: ArtistDataMetaWhereUniqueInput
    /**
     * In case the ArtistDataMeta found by the `where` argument doesn't exist, create a new ArtistDataMeta with this data.
     */
    create: XOR<ArtistDataMetaCreateInput, ArtistDataMetaUncheckedCreateInput>
    /**
     * In case the ArtistDataMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ArtistDataMetaUpdateInput, ArtistDataMetaUncheckedUpdateInput>
  }


  /**
   * ArtistDataMeta delete
   */
  export type ArtistDataMetaDeleteArgs = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
    /**
     * Filter which ArtistDataMeta to delete.
     */
    where: ArtistDataMetaWhereUniqueInput
  }


  /**
   * ArtistDataMeta deleteMany
   */
  export type ArtistDataMetaDeleteManyArgs = {
    /**
     * Filter which ArtistDataMetas to delete
     */
    where?: ArtistDataMetaWhereInput
  }


  /**
   * ArtistDataMeta without action
   */
  export type ArtistDataMetaArgs = {
    /**
     * Select specific fields to fetch from the ArtistDataMeta
     */
    select?: ArtistDataMetaSelect | null
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
    popularity: number | null
    trackNumber: number | null
    albumId: number | null
  }

  export type TrackSumAggregateOutputType = {
    id: number | null
    discNumber: number | null
    popularity: number | null
    trackNumber: number | null
    albumId: number | null
  }

  export type TrackMinAggregateOutputType = {
    id: number | null
    name: string | null
    discNumber: number | null
    popularity: number | null
    previewUrl: string | null
    trackNumber: number | null
    albumId: number | null
  }

  export type TrackMaxAggregateOutputType = {
    id: number | null
    name: string | null
    discNumber: number | null
    popularity: number | null
    previewUrl: string | null
    trackNumber: number | null
    albumId: number | null
  }

  export type TrackCountAggregateOutputType = {
    id: number
    name: number
    discNumber: number
    popularity: number
    previewUrl: number
    trackNumber: number
    albumId: number
    _all: number
  }


  export type TrackAvgAggregateInputType = {
    id?: true
    discNumber?: true
    popularity?: true
    trackNumber?: true
    albumId?: true
  }

  export type TrackSumAggregateInputType = {
    id?: true
    discNumber?: true
    popularity?: true
    trackNumber?: true
    albumId?: true
  }

  export type TrackMinAggregateInputType = {
    id?: true
    name?: true
    discNumber?: true
    popularity?: true
    previewUrl?: true
    trackNumber?: true
    albumId?: true
  }

  export type TrackMaxAggregateInputType = {
    id?: true
    name?: true
    discNumber?: true
    popularity?: true
    previewUrl?: true
    trackNumber?: true
    albumId?: true
  }

  export type TrackCountAggregateInputType = {
    id?: true
    name?: true
    discNumber?: true
    popularity?: true
    previewUrl?: true
    trackNumber?: true
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
    name: string
    discNumber: number
    popularity: number | null
    previewUrl: string | null
    trackNumber: number
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
    name?: boolean
    discNumber?: boolean
    popularity?: boolean
    previewUrl?: boolean
    trackNumber?: boolean
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
   * Model TrackMeta
   */


  export type AggregateTrackMeta = {
    _count: TrackMetaCountAggregateOutputType | null
    _avg: TrackMetaAvgAggregateOutputType | null
    _sum: TrackMetaSumAggregateOutputType | null
    _min: TrackMetaMinAggregateOutputType | null
    _max: TrackMetaMaxAggregateOutputType | null
  }

  export type TrackMetaAvgAggregateOutputType = {
    id: number | null
    durationMs: number | null
  }

  export type TrackMetaSumAggregateOutputType = {
    id: number | null
    durationMs: number | null
  }

  export type TrackMetaMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    durationMs: number | null
  }

  export type TrackMetaMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    durationMs: number | null
  }

  export type TrackMetaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    durationMs: number
    _all: number
  }


  export type TrackMetaAvgAggregateInputType = {
    id?: true
    durationMs?: true
  }

  export type TrackMetaSumAggregateInputType = {
    id?: true
    durationMs?: true
  }

  export type TrackMetaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    durationMs?: true
  }

  export type TrackMetaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    durationMs?: true
  }

  export type TrackMetaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    durationMs?: true
    _all?: true
  }

  export type TrackMetaAggregateArgs = {
    /**
     * Filter which TrackMeta to aggregate.
     */
    where?: TrackMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackMetas to fetch.
     */
    orderBy?: Enumerable<TrackMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TrackMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned TrackMetas
    **/
    _count?: true | TrackMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TrackMetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TrackMetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TrackMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TrackMetaMaxAggregateInputType
  }

  export type GetTrackMetaAggregateType<T extends TrackMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateTrackMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTrackMeta[P]>
      : GetScalarType<T[P], AggregateTrackMeta[P]>
  }




  export type TrackMetaGroupByArgs = {
    where?: TrackMetaWhereInput
    orderBy?: Enumerable<TrackMetaOrderByWithAggregationInput>
    by: TrackMetaScalarFieldEnum[]
    having?: TrackMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TrackMetaCountAggregateInputType | true
    _avg?: TrackMetaAvgAggregateInputType
    _sum?: TrackMetaSumAggregateInputType
    _min?: TrackMetaMinAggregateInputType
    _max?: TrackMetaMaxAggregateInputType
  }


  export type TrackMetaGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    uid: string
    durationMs: number
    _count: TrackMetaCountAggregateOutputType | null
    _avg: TrackMetaAvgAggregateOutputType | null
    _sum: TrackMetaSumAggregateOutputType | null
    _min: TrackMetaMinAggregateOutputType | null
    _max: TrackMetaMaxAggregateOutputType | null
  }

  type GetTrackMetaGroupByPayload<T extends TrackMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<TrackMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TrackMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TrackMetaGroupByOutputType[P]>
            : GetScalarType<T[P], TrackMetaGroupByOutputType[P]>
        }
      >
    >


  export type TrackMetaSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    durationMs?: boolean
  }


  export type TrackMetaGetPayload<S extends boolean | null | undefined | TrackMetaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? TrackMeta :
    S extends undefined ? never :
    S extends { include: any } & (TrackMetaArgs | TrackMetaFindManyArgs)
    ? TrackMeta 
    : S extends { select: any } & (TrackMetaArgs | TrackMetaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof TrackMeta ? TrackMeta[P] : never
  } 
      : TrackMeta


  type TrackMetaCountArgs = 
    Omit<TrackMetaFindManyArgs, 'select' | 'include'> & {
      select?: TrackMetaCountAggregateInputType | true
    }

  export interface TrackMetaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one TrackMeta that matches the filter.
     * @param {TrackMetaFindUniqueArgs} args - Arguments to find a TrackMeta
     * @example
     * // Get one TrackMeta
     * const trackMeta = await prisma.trackMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends TrackMetaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, TrackMetaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'TrackMeta'> extends True ? Prisma__TrackMetaClient<TrackMetaGetPayload<T>> : Prisma__TrackMetaClient<TrackMetaGetPayload<T> | null, null>

    /**
     * Find one TrackMeta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {TrackMetaFindUniqueOrThrowArgs} args - Arguments to find a TrackMeta
     * @example
     * // Get one TrackMeta
     * const trackMeta = await prisma.trackMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends TrackMetaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, TrackMetaFindUniqueOrThrowArgs>
    ): Prisma__TrackMetaClient<TrackMetaGetPayload<T>>

    /**
     * Find the first TrackMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackMetaFindFirstArgs} args - Arguments to find a TrackMeta
     * @example
     * // Get one TrackMeta
     * const trackMeta = await prisma.trackMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends TrackMetaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, TrackMetaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'TrackMeta'> extends True ? Prisma__TrackMetaClient<TrackMetaGetPayload<T>> : Prisma__TrackMetaClient<TrackMetaGetPayload<T> | null, null>

    /**
     * Find the first TrackMeta that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackMetaFindFirstOrThrowArgs} args - Arguments to find a TrackMeta
     * @example
     * // Get one TrackMeta
     * const trackMeta = await prisma.trackMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends TrackMetaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, TrackMetaFindFirstOrThrowArgs>
    ): Prisma__TrackMetaClient<TrackMetaGetPayload<T>>

    /**
     * Find zero or more TrackMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackMetaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all TrackMetas
     * const trackMetas = await prisma.trackMeta.findMany()
     * 
     * // Get first 10 TrackMetas
     * const trackMetas = await prisma.trackMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const trackMetaWithIdOnly = await prisma.trackMeta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends TrackMetaFindManyArgs>(
      args?: SelectSubset<T, TrackMetaFindManyArgs>
    ): Prisma.PrismaPromise<Array<TrackMetaGetPayload<T>>>

    /**
     * Create a TrackMeta.
     * @param {TrackMetaCreateArgs} args - Arguments to create a TrackMeta.
     * @example
     * // Create one TrackMeta
     * const TrackMeta = await prisma.trackMeta.create({
     *   data: {
     *     // ... data to create a TrackMeta
     *   }
     * })
     * 
    **/
    create<T extends TrackMetaCreateArgs>(
      args: SelectSubset<T, TrackMetaCreateArgs>
    ): Prisma__TrackMetaClient<TrackMetaGetPayload<T>>

    /**
     * Create many TrackMetas.
     *     @param {TrackMetaCreateManyArgs} args - Arguments to create many TrackMetas.
     *     @example
     *     // Create many TrackMetas
     *     const trackMeta = await prisma.trackMeta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends TrackMetaCreateManyArgs>(
      args?: SelectSubset<T, TrackMetaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a TrackMeta.
     * @param {TrackMetaDeleteArgs} args - Arguments to delete one TrackMeta.
     * @example
     * // Delete one TrackMeta
     * const TrackMeta = await prisma.trackMeta.delete({
     *   where: {
     *     // ... filter to delete one TrackMeta
     *   }
     * })
     * 
    **/
    delete<T extends TrackMetaDeleteArgs>(
      args: SelectSubset<T, TrackMetaDeleteArgs>
    ): Prisma__TrackMetaClient<TrackMetaGetPayload<T>>

    /**
     * Update one TrackMeta.
     * @param {TrackMetaUpdateArgs} args - Arguments to update one TrackMeta.
     * @example
     * // Update one TrackMeta
     * const trackMeta = await prisma.trackMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends TrackMetaUpdateArgs>(
      args: SelectSubset<T, TrackMetaUpdateArgs>
    ): Prisma__TrackMetaClient<TrackMetaGetPayload<T>>

    /**
     * Delete zero or more TrackMetas.
     * @param {TrackMetaDeleteManyArgs} args - Arguments to filter TrackMetas to delete.
     * @example
     * // Delete a few TrackMetas
     * const { count } = await prisma.trackMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends TrackMetaDeleteManyArgs>(
      args?: SelectSubset<T, TrackMetaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more TrackMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many TrackMetas
     * const trackMeta = await prisma.trackMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends TrackMetaUpdateManyArgs>(
      args: SelectSubset<T, TrackMetaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one TrackMeta.
     * @param {TrackMetaUpsertArgs} args - Arguments to update or create a TrackMeta.
     * @example
     * // Update or create a TrackMeta
     * const trackMeta = await prisma.trackMeta.upsert({
     *   create: {
     *     // ... data to create a TrackMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the TrackMeta we want to update
     *   }
     * })
    **/
    upsert<T extends TrackMetaUpsertArgs>(
      args: SelectSubset<T, TrackMetaUpsertArgs>
    ): Prisma__TrackMetaClient<TrackMetaGetPayload<T>>

    /**
     * Count the number of TrackMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackMetaCountArgs} args - Arguments to filter TrackMetas to count.
     * @example
     * // Count the number of TrackMetas
     * const count = await prisma.trackMeta.count({
     *   where: {
     *     // ... the filter for the TrackMetas we want to count
     *   }
     * })
    **/
    count<T extends TrackMetaCountArgs>(
      args?: Subset<T, TrackMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TrackMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a TrackMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TrackMetaAggregateArgs>(args: Subset<T, TrackMetaAggregateArgs>): Prisma.PrismaPromise<GetTrackMetaAggregateType<T>>

    /**
     * Group by TrackMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TrackMetaGroupByArgs} args - Group by arguments.
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
      T extends TrackMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TrackMetaGroupByArgs['orderBy'] }
        : { orderBy?: TrackMetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TrackMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTrackMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for TrackMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__TrackMetaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * TrackMeta base type for findUnique actions
   */
  export type TrackMetaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
    /**
     * Filter, which TrackMeta to fetch.
     */
    where: TrackMetaWhereUniqueInput
  }

  /**
   * TrackMeta findUnique
   */
  export interface TrackMetaFindUniqueArgs extends TrackMetaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TrackMeta findUniqueOrThrow
   */
  export type TrackMetaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
    /**
     * Filter, which TrackMeta to fetch.
     */
    where: TrackMetaWhereUniqueInput
  }


  /**
   * TrackMeta base type for findFirst actions
   */
  export type TrackMetaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
    /**
     * Filter, which TrackMeta to fetch.
     */
    where?: TrackMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackMetas to fetch.
     */
    orderBy?: Enumerable<TrackMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackMetas.
     */
    cursor?: TrackMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackMetas.
     */
    distinct?: Enumerable<TrackMetaScalarFieldEnum>
  }

  /**
   * TrackMeta findFirst
   */
  export interface TrackMetaFindFirstArgs extends TrackMetaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * TrackMeta findFirstOrThrow
   */
  export type TrackMetaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
    /**
     * Filter, which TrackMeta to fetch.
     */
    where?: TrackMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackMetas to fetch.
     */
    orderBy?: Enumerable<TrackMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for TrackMetas.
     */
    cursor?: TrackMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of TrackMetas.
     */
    distinct?: Enumerable<TrackMetaScalarFieldEnum>
  }


  /**
   * TrackMeta findMany
   */
  export type TrackMetaFindManyArgs = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
    /**
     * Filter, which TrackMetas to fetch.
     */
    where?: TrackMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of TrackMetas to fetch.
     */
    orderBy?: Enumerable<TrackMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing TrackMetas.
     */
    cursor?: TrackMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` TrackMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` TrackMetas.
     */
    skip?: number
    distinct?: Enumerable<TrackMetaScalarFieldEnum>
  }


  /**
   * TrackMeta create
   */
  export type TrackMetaCreateArgs = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
    /**
     * The data needed to create a TrackMeta.
     */
    data: XOR<TrackMetaCreateInput, TrackMetaUncheckedCreateInput>
  }


  /**
   * TrackMeta createMany
   */
  export type TrackMetaCreateManyArgs = {
    /**
     * The data used to create many TrackMetas.
     */
    data: Enumerable<TrackMetaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * TrackMeta update
   */
  export type TrackMetaUpdateArgs = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
    /**
     * The data needed to update a TrackMeta.
     */
    data: XOR<TrackMetaUpdateInput, TrackMetaUncheckedUpdateInput>
    /**
     * Choose, which TrackMeta to update.
     */
    where: TrackMetaWhereUniqueInput
  }


  /**
   * TrackMeta updateMany
   */
  export type TrackMetaUpdateManyArgs = {
    /**
     * The data used to update TrackMetas.
     */
    data: XOR<TrackMetaUpdateManyMutationInput, TrackMetaUncheckedUpdateManyInput>
    /**
     * Filter which TrackMetas to update
     */
    where?: TrackMetaWhereInput
  }


  /**
   * TrackMeta upsert
   */
  export type TrackMetaUpsertArgs = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
    /**
     * The filter to search for the TrackMeta to update in case it exists.
     */
    where: TrackMetaWhereUniqueInput
    /**
     * In case the TrackMeta found by the `where` argument doesn't exist, create a new TrackMeta with this data.
     */
    create: XOR<TrackMetaCreateInput, TrackMetaUncheckedCreateInput>
    /**
     * In case the TrackMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TrackMetaUpdateInput, TrackMetaUncheckedUpdateInput>
  }


  /**
   * TrackMeta delete
   */
  export type TrackMetaDeleteArgs = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
    /**
     * Filter which TrackMeta to delete.
     */
    where: TrackMetaWhereUniqueInput
  }


  /**
   * TrackMeta deleteMany
   */
  export type TrackMetaDeleteManyArgs = {
    /**
     * Filter which TrackMetas to delete
     */
    where?: TrackMetaWhereInput
  }


  /**
   * TrackMeta without action
   */
  export type TrackMetaArgs = {
    /**
     * Select specific fields to fetch from the TrackMeta
     */
    select?: TrackMetaSelect | null
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
    albumType: string | null
    totalTracks: number | null
    name: string | null
    imageUrl: string | null
  }

  export type AlbumMaxAggregateOutputType = {
    id: number | null
    albumType: string | null
    totalTracks: number | null
    name: string | null
    imageUrl: string | null
  }

  export type AlbumCountAggregateOutputType = {
    id: number
    albumType: number
    totalTracks: number
    name: number
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
    albumType?: true
    totalTracks?: true
    name?: true
    imageUrl?: true
  }

  export type AlbumMaxAggregateInputType = {
    id?: true
    albumType?: true
    totalTracks?: true
    name?: true
    imageUrl?: true
  }

  export type AlbumCountAggregateInputType = {
    id?: true
    albumType?: true
    totalTracks?: true
    name?: true
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
    albumType: string
    totalTracks: number
    name: string
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
    albumType?: boolean
    totalTracks?: boolean
    name?: boolean
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
   * Model AlbumMeta
   */


  export type AggregateAlbumMeta = {
    _count: AlbumMetaCountAggregateOutputType | null
    _avg: AlbumMetaAvgAggregateOutputType | null
    _sum: AlbumMetaSumAggregateOutputType | null
    _min: AlbumMetaMinAggregateOutputType | null
    _max: AlbumMetaMaxAggregateOutputType | null
  }

  export type AlbumMetaAvgAggregateOutputType = {
    id: number | null
  }

  export type AlbumMetaSumAggregateOutputType = {
    id: number | null
  }

  export type AlbumMetaMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    releaseDate: Date | null
    releaseDatePrecision: string | null
    copyrights: string | null
  }

  export type AlbumMetaMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
    releaseDate: Date | null
    releaseDatePrecision: string | null
    copyrights: string | null
  }

  export type AlbumMetaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    releaseDate: number
    releaseDatePrecision: number
    copyrights: number
    _all: number
  }


  export type AlbumMetaAvgAggregateInputType = {
    id?: true
  }

  export type AlbumMetaSumAggregateInputType = {
    id?: true
  }

  export type AlbumMetaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    releaseDate?: true
    releaseDatePrecision?: true
    copyrights?: true
  }

  export type AlbumMetaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    releaseDate?: true
    releaseDatePrecision?: true
    copyrights?: true
  }

  export type AlbumMetaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    releaseDate?: true
    releaseDatePrecision?: true
    copyrights?: true
    _all?: true
  }

  export type AlbumMetaAggregateArgs = {
    /**
     * Filter which AlbumMeta to aggregate.
     */
    where?: AlbumMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumMetas to fetch.
     */
    orderBy?: Enumerable<AlbumMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AlbumMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned AlbumMetas
    **/
    _count?: true | AlbumMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AlbumMetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AlbumMetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AlbumMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AlbumMetaMaxAggregateInputType
  }

  export type GetAlbumMetaAggregateType<T extends AlbumMetaAggregateArgs> = {
        [P in keyof T & keyof AggregateAlbumMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAlbumMeta[P]>
      : GetScalarType<T[P], AggregateAlbumMeta[P]>
  }




  export type AlbumMetaGroupByArgs = {
    where?: AlbumMetaWhereInput
    orderBy?: Enumerable<AlbumMetaOrderByWithAggregationInput>
    by: AlbumMetaScalarFieldEnum[]
    having?: AlbumMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AlbumMetaCountAggregateInputType | true
    _avg?: AlbumMetaAvgAggregateInputType
    _sum?: AlbumMetaSumAggregateInputType
    _min?: AlbumMetaMinAggregateInputType
    _max?: AlbumMetaMaxAggregateInputType
  }


  export type AlbumMetaGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    uid: string
    releaseDate: Date
    releaseDatePrecision: string
    copyrights: string | null
    _count: AlbumMetaCountAggregateOutputType | null
    _avg: AlbumMetaAvgAggregateOutputType | null
    _sum: AlbumMetaSumAggregateOutputType | null
    _min: AlbumMetaMinAggregateOutputType | null
    _max: AlbumMetaMaxAggregateOutputType | null
  }

  type GetAlbumMetaGroupByPayload<T extends AlbumMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<AlbumMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AlbumMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AlbumMetaGroupByOutputType[P]>
            : GetScalarType<T[P], AlbumMetaGroupByOutputType[P]>
        }
      >
    >


  export type AlbumMetaSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
    releaseDate?: boolean
    releaseDatePrecision?: boolean
    copyrights?: boolean
  }


  export type AlbumMetaGetPayload<S extends boolean | null | undefined | AlbumMetaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? AlbumMeta :
    S extends undefined ? never :
    S extends { include: any } & (AlbumMetaArgs | AlbumMetaFindManyArgs)
    ? AlbumMeta 
    : S extends { select: any } & (AlbumMetaArgs | AlbumMetaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof AlbumMeta ? AlbumMeta[P] : never
  } 
      : AlbumMeta


  type AlbumMetaCountArgs = 
    Omit<AlbumMetaFindManyArgs, 'select' | 'include'> & {
      select?: AlbumMetaCountAggregateInputType | true
    }

  export interface AlbumMetaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one AlbumMeta that matches the filter.
     * @param {AlbumMetaFindUniqueArgs} args - Arguments to find a AlbumMeta
     * @example
     * // Get one AlbumMeta
     * const albumMeta = await prisma.albumMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AlbumMetaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, AlbumMetaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'AlbumMeta'> extends True ? Prisma__AlbumMetaClient<AlbumMetaGetPayload<T>> : Prisma__AlbumMetaClient<AlbumMetaGetPayload<T> | null, null>

    /**
     * Find one AlbumMeta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AlbumMetaFindUniqueOrThrowArgs} args - Arguments to find a AlbumMeta
     * @example
     * // Get one AlbumMeta
     * const albumMeta = await prisma.albumMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AlbumMetaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, AlbumMetaFindUniqueOrThrowArgs>
    ): Prisma__AlbumMetaClient<AlbumMetaGetPayload<T>>

    /**
     * Find the first AlbumMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMetaFindFirstArgs} args - Arguments to find a AlbumMeta
     * @example
     * // Get one AlbumMeta
     * const albumMeta = await prisma.albumMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AlbumMetaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, AlbumMetaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'AlbumMeta'> extends True ? Prisma__AlbumMetaClient<AlbumMetaGetPayload<T>> : Prisma__AlbumMetaClient<AlbumMetaGetPayload<T> | null, null>

    /**
     * Find the first AlbumMeta that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMetaFindFirstOrThrowArgs} args - Arguments to find a AlbumMeta
     * @example
     * // Get one AlbumMeta
     * const albumMeta = await prisma.albumMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AlbumMetaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, AlbumMetaFindFirstOrThrowArgs>
    ): Prisma__AlbumMetaClient<AlbumMetaGetPayload<T>>

    /**
     * Find zero or more AlbumMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMetaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all AlbumMetas
     * const albumMetas = await prisma.albumMeta.findMany()
     * 
     * // Get first 10 AlbumMetas
     * const albumMetas = await prisma.albumMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const albumMetaWithIdOnly = await prisma.albumMeta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AlbumMetaFindManyArgs>(
      args?: SelectSubset<T, AlbumMetaFindManyArgs>
    ): Prisma.PrismaPromise<Array<AlbumMetaGetPayload<T>>>

    /**
     * Create a AlbumMeta.
     * @param {AlbumMetaCreateArgs} args - Arguments to create a AlbumMeta.
     * @example
     * // Create one AlbumMeta
     * const AlbumMeta = await prisma.albumMeta.create({
     *   data: {
     *     // ... data to create a AlbumMeta
     *   }
     * })
     * 
    **/
    create<T extends AlbumMetaCreateArgs>(
      args: SelectSubset<T, AlbumMetaCreateArgs>
    ): Prisma__AlbumMetaClient<AlbumMetaGetPayload<T>>

    /**
     * Create many AlbumMetas.
     *     @param {AlbumMetaCreateManyArgs} args - Arguments to create many AlbumMetas.
     *     @example
     *     // Create many AlbumMetas
     *     const albumMeta = await prisma.albumMeta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AlbumMetaCreateManyArgs>(
      args?: SelectSubset<T, AlbumMetaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a AlbumMeta.
     * @param {AlbumMetaDeleteArgs} args - Arguments to delete one AlbumMeta.
     * @example
     * // Delete one AlbumMeta
     * const AlbumMeta = await prisma.albumMeta.delete({
     *   where: {
     *     // ... filter to delete one AlbumMeta
     *   }
     * })
     * 
    **/
    delete<T extends AlbumMetaDeleteArgs>(
      args: SelectSubset<T, AlbumMetaDeleteArgs>
    ): Prisma__AlbumMetaClient<AlbumMetaGetPayload<T>>

    /**
     * Update one AlbumMeta.
     * @param {AlbumMetaUpdateArgs} args - Arguments to update one AlbumMeta.
     * @example
     * // Update one AlbumMeta
     * const albumMeta = await prisma.albumMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AlbumMetaUpdateArgs>(
      args: SelectSubset<T, AlbumMetaUpdateArgs>
    ): Prisma__AlbumMetaClient<AlbumMetaGetPayload<T>>

    /**
     * Delete zero or more AlbumMetas.
     * @param {AlbumMetaDeleteManyArgs} args - Arguments to filter AlbumMetas to delete.
     * @example
     * // Delete a few AlbumMetas
     * const { count } = await prisma.albumMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AlbumMetaDeleteManyArgs>(
      args?: SelectSubset<T, AlbumMetaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more AlbumMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many AlbumMetas
     * const albumMeta = await prisma.albumMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AlbumMetaUpdateManyArgs>(
      args: SelectSubset<T, AlbumMetaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one AlbumMeta.
     * @param {AlbumMetaUpsertArgs} args - Arguments to update or create a AlbumMeta.
     * @example
     * // Update or create a AlbumMeta
     * const albumMeta = await prisma.albumMeta.upsert({
     *   create: {
     *     // ... data to create a AlbumMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the AlbumMeta we want to update
     *   }
     * })
    **/
    upsert<T extends AlbumMetaUpsertArgs>(
      args: SelectSubset<T, AlbumMetaUpsertArgs>
    ): Prisma__AlbumMetaClient<AlbumMetaGetPayload<T>>

    /**
     * Count the number of AlbumMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMetaCountArgs} args - Arguments to filter AlbumMetas to count.
     * @example
     * // Count the number of AlbumMetas
     * const count = await prisma.albumMeta.count({
     *   where: {
     *     // ... the filter for the AlbumMetas we want to count
     *   }
     * })
    **/
    count<T extends AlbumMetaCountArgs>(
      args?: Subset<T, AlbumMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AlbumMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a AlbumMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AlbumMetaAggregateArgs>(args: Subset<T, AlbumMetaAggregateArgs>): Prisma.PrismaPromise<GetAlbumMetaAggregateType<T>>

    /**
     * Group by AlbumMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AlbumMetaGroupByArgs} args - Group by arguments.
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
      T extends AlbumMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AlbumMetaGroupByArgs['orderBy'] }
        : { orderBy?: AlbumMetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AlbumMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAlbumMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for AlbumMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__AlbumMetaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * AlbumMeta base type for findUnique actions
   */
  export type AlbumMetaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
    /**
     * Filter, which AlbumMeta to fetch.
     */
    where: AlbumMetaWhereUniqueInput
  }

  /**
   * AlbumMeta findUnique
   */
  export interface AlbumMetaFindUniqueArgs extends AlbumMetaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AlbumMeta findUniqueOrThrow
   */
  export type AlbumMetaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
    /**
     * Filter, which AlbumMeta to fetch.
     */
    where: AlbumMetaWhereUniqueInput
  }


  /**
   * AlbumMeta base type for findFirst actions
   */
  export type AlbumMetaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
    /**
     * Filter, which AlbumMeta to fetch.
     */
    where?: AlbumMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumMetas to fetch.
     */
    orderBy?: Enumerable<AlbumMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumMetas.
     */
    cursor?: AlbumMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumMetas.
     */
    distinct?: Enumerable<AlbumMetaScalarFieldEnum>
  }

  /**
   * AlbumMeta findFirst
   */
  export interface AlbumMetaFindFirstArgs extends AlbumMetaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * AlbumMeta findFirstOrThrow
   */
  export type AlbumMetaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
    /**
     * Filter, which AlbumMeta to fetch.
     */
    where?: AlbumMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumMetas to fetch.
     */
    orderBy?: Enumerable<AlbumMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for AlbumMetas.
     */
    cursor?: AlbumMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of AlbumMetas.
     */
    distinct?: Enumerable<AlbumMetaScalarFieldEnum>
  }


  /**
   * AlbumMeta findMany
   */
  export type AlbumMetaFindManyArgs = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
    /**
     * Filter, which AlbumMetas to fetch.
     */
    where?: AlbumMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of AlbumMetas to fetch.
     */
    orderBy?: Enumerable<AlbumMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing AlbumMetas.
     */
    cursor?: AlbumMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` AlbumMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` AlbumMetas.
     */
    skip?: number
    distinct?: Enumerable<AlbumMetaScalarFieldEnum>
  }


  /**
   * AlbumMeta create
   */
  export type AlbumMetaCreateArgs = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
    /**
     * The data needed to create a AlbumMeta.
     */
    data: XOR<AlbumMetaCreateInput, AlbumMetaUncheckedCreateInput>
  }


  /**
   * AlbumMeta createMany
   */
  export type AlbumMetaCreateManyArgs = {
    /**
     * The data used to create many AlbumMetas.
     */
    data: Enumerable<AlbumMetaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * AlbumMeta update
   */
  export type AlbumMetaUpdateArgs = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
    /**
     * The data needed to update a AlbumMeta.
     */
    data: XOR<AlbumMetaUpdateInput, AlbumMetaUncheckedUpdateInput>
    /**
     * Choose, which AlbumMeta to update.
     */
    where: AlbumMetaWhereUniqueInput
  }


  /**
   * AlbumMeta updateMany
   */
  export type AlbumMetaUpdateManyArgs = {
    /**
     * The data used to update AlbumMetas.
     */
    data: XOR<AlbumMetaUpdateManyMutationInput, AlbumMetaUncheckedUpdateManyInput>
    /**
     * Filter which AlbumMetas to update
     */
    where?: AlbumMetaWhereInput
  }


  /**
   * AlbumMeta upsert
   */
  export type AlbumMetaUpsertArgs = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
    /**
     * The filter to search for the AlbumMeta to update in case it exists.
     */
    where: AlbumMetaWhereUniqueInput
    /**
     * In case the AlbumMeta found by the `where` argument doesn't exist, create a new AlbumMeta with this data.
     */
    create: XOR<AlbumMetaCreateInput, AlbumMetaUncheckedCreateInput>
    /**
     * In case the AlbumMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AlbumMetaUpdateInput, AlbumMetaUncheckedUpdateInput>
  }


  /**
   * AlbumMeta delete
   */
  export type AlbumMetaDeleteArgs = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
    /**
     * Filter which AlbumMeta to delete.
     */
    where: AlbumMetaWhereUniqueInput
  }


  /**
   * AlbumMeta deleteMany
   */
  export type AlbumMetaDeleteManyArgs = {
    /**
     * Filter which AlbumMetas to delete
     */
    where?: AlbumMetaWhereInput
  }


  /**
   * AlbumMeta without action
   */
  export type AlbumMetaArgs = {
    /**
     * Select specific fields to fetch from the AlbumMeta
     */
    select?: AlbumMetaSelect | null
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
  }

  export type PlaylistSumAggregateOutputType = {
    id: number | null
  }

  export type PlaylistMinAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    public: boolean | null
    primaryColor: string | null
    imagesId: string | null
  }

  export type PlaylistMaxAggregateOutputType = {
    id: number | null
    name: string | null
    description: string | null
    public: boolean | null
    primaryColor: string | null
    imagesId: string | null
  }

  export type PlaylistCountAggregateOutputType = {
    id: number
    name: number
    description: number
    public: number
    primaryColor: number
    imagesId: number
    _all: number
  }


  export type PlaylistAvgAggregateInputType = {
    id?: true
  }

  export type PlaylistSumAggregateInputType = {
    id?: true
  }

  export type PlaylistMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    public?: true
    primaryColor?: true
    imagesId?: true
  }

  export type PlaylistMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    public?: true
    primaryColor?: true
    imagesId?: true
  }

  export type PlaylistCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    public?: true
    primaryColor?: true
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
    name: string
    description: string
    public: boolean
    primaryColor: string | null
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
    name?: boolean
    description?: boolean
    public?: boolean
    primaryColor?: boolean
    imagesId?: boolean
    tracks?: boolean | Playlist$tracksArgs
    _count?: boolean | PlaylistCountOutputTypeArgs
  }


  export type PlaylistInclude = {
    tracks?: boolean | Playlist$tracksArgs
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
        P extends '_count' ? PlaylistCountOutputTypeGetPayload<S['include'][P]> :  never
  } 
    : S extends { select: any } & (PlaylistArgs | PlaylistFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
        P extends 'tracks' ? Array < TracksOnPlaylistGetPayload<S['select'][P]>>  :
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
   * Model PlaylistMeta
   */


  export type AggregatePlaylistMeta = {
    _count: PlaylistMetaCountAggregateOutputType | null
    _avg: PlaylistMetaAvgAggregateOutputType | null
    _sum: PlaylistMetaSumAggregateOutputType | null
    _min: PlaylistMetaMinAggregateOutputType | null
    _max: PlaylistMetaMaxAggregateOutputType | null
  }

  export type PlaylistMetaAvgAggregateOutputType = {
    id: number | null
  }

  export type PlaylistMetaSumAggregateOutputType = {
    id: number | null
  }

  export type PlaylistMetaMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
  }

  export type PlaylistMetaMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    uid: string | null
  }

  export type PlaylistMetaCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    uid: number
    _all: number
  }


  export type PlaylistMetaAvgAggregateInputType = {
    id?: true
  }

  export type PlaylistMetaSumAggregateInputType = {
    id?: true
  }

  export type PlaylistMetaMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
  }

  export type PlaylistMetaMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
  }

  export type PlaylistMetaCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    uid?: true
    _all?: true
  }

  export type PlaylistMetaAggregateArgs = {
    /**
     * Filter which PlaylistMeta to aggregate.
     */
    where?: PlaylistMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistMetas to fetch.
     */
    orderBy?: Enumerable<PlaylistMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: PlaylistMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned PlaylistMetas
    **/
    _count?: true | PlaylistMetaCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: PlaylistMetaAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: PlaylistMetaSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: PlaylistMetaMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: PlaylistMetaMaxAggregateInputType
  }

  export type GetPlaylistMetaAggregateType<T extends PlaylistMetaAggregateArgs> = {
        [P in keyof T & keyof AggregatePlaylistMeta]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregatePlaylistMeta[P]>
      : GetScalarType<T[P], AggregatePlaylistMeta[P]>
  }




  export type PlaylistMetaGroupByArgs = {
    where?: PlaylistMetaWhereInput
    orderBy?: Enumerable<PlaylistMetaOrderByWithAggregationInput>
    by: PlaylistMetaScalarFieldEnum[]
    having?: PlaylistMetaScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: PlaylistMetaCountAggregateInputType | true
    _avg?: PlaylistMetaAvgAggregateInputType
    _sum?: PlaylistMetaSumAggregateInputType
    _min?: PlaylistMetaMinAggregateInputType
    _max?: PlaylistMetaMaxAggregateInputType
  }


  export type PlaylistMetaGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    uid: string | null
    _count: PlaylistMetaCountAggregateOutputType | null
    _avg: PlaylistMetaAvgAggregateOutputType | null
    _sum: PlaylistMetaSumAggregateOutputType | null
    _min: PlaylistMetaMinAggregateOutputType | null
    _max: PlaylistMetaMaxAggregateOutputType | null
  }

  type GetPlaylistMetaGroupByPayload<T extends PlaylistMetaGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickArray<PlaylistMetaGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof PlaylistMetaGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], PlaylistMetaGroupByOutputType[P]>
            : GetScalarType<T[P], PlaylistMetaGroupByOutputType[P]>
        }
      >
    >


  export type PlaylistMetaSelect = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    uid?: boolean
  }


  export type PlaylistMetaGetPayload<S extends boolean | null | undefined | PlaylistMetaArgs> =
    S extends { select: any, include: any } ? 'Please either choose `select` or `include`' :
    S extends true ? PlaylistMeta :
    S extends undefined ? never :
    S extends { include: any } & (PlaylistMetaArgs | PlaylistMetaFindManyArgs)
    ? PlaylistMeta 
    : S extends { select: any } & (PlaylistMetaArgs | PlaylistMetaFindManyArgs)
      ? {
    [P in TruthyKeys<S['select']>]:
    P extends keyof PlaylistMeta ? PlaylistMeta[P] : never
  } 
      : PlaylistMeta


  type PlaylistMetaCountArgs = 
    Omit<PlaylistMetaFindManyArgs, 'select' | 'include'> & {
      select?: PlaylistMetaCountAggregateInputType | true
    }

  export interface PlaylistMetaDelegate<GlobalRejectSettings extends Prisma.RejectOnNotFound | Prisma.RejectPerOperation | false | undefined> {

    /**
     * Find zero or one PlaylistMeta that matches the filter.
     * @param {PlaylistMetaFindUniqueArgs} args - Arguments to find a PlaylistMeta
     * @example
     * // Get one PlaylistMeta
     * const playlistMeta = await prisma.playlistMeta.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends PlaylistMetaFindUniqueArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args: SelectSubset<T, PlaylistMetaFindUniqueArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findUnique', 'PlaylistMeta'> extends True ? Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T>> : Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T> | null, null>

    /**
     * Find one PlaylistMeta that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {PlaylistMetaFindUniqueOrThrowArgs} args - Arguments to find a PlaylistMeta
     * @example
     * // Get one PlaylistMeta
     * const playlistMeta = await prisma.playlistMeta.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends PlaylistMetaFindUniqueOrThrowArgs>(
      args?: SelectSubset<T, PlaylistMetaFindUniqueOrThrowArgs>
    ): Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T>>

    /**
     * Find the first PlaylistMeta that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMetaFindFirstArgs} args - Arguments to find a PlaylistMeta
     * @example
     * // Get one PlaylistMeta
     * const playlistMeta = await prisma.playlistMeta.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends PlaylistMetaFindFirstArgs,  LocalRejectSettings = T["rejectOnNotFound"] extends RejectOnNotFound ? T['rejectOnNotFound'] : undefined>(
      args?: SelectSubset<T, PlaylistMetaFindFirstArgs>
    ): HasReject<GlobalRejectSettings, LocalRejectSettings, 'findFirst', 'PlaylistMeta'> extends True ? Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T>> : Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T> | null, null>

    /**
     * Find the first PlaylistMeta that matches the filter or
     * throw `NotFoundError` if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMetaFindFirstOrThrowArgs} args - Arguments to find a PlaylistMeta
     * @example
     * // Get one PlaylistMeta
     * const playlistMeta = await prisma.playlistMeta.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends PlaylistMetaFindFirstOrThrowArgs>(
      args?: SelectSubset<T, PlaylistMetaFindFirstOrThrowArgs>
    ): Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T>>

    /**
     * Find zero or more PlaylistMetas that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMetaFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all PlaylistMetas
     * const playlistMetas = await prisma.playlistMeta.findMany()
     * 
     * // Get first 10 PlaylistMetas
     * const playlistMetas = await prisma.playlistMeta.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const playlistMetaWithIdOnly = await prisma.playlistMeta.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends PlaylistMetaFindManyArgs>(
      args?: SelectSubset<T, PlaylistMetaFindManyArgs>
    ): Prisma.PrismaPromise<Array<PlaylistMetaGetPayload<T>>>

    /**
     * Create a PlaylistMeta.
     * @param {PlaylistMetaCreateArgs} args - Arguments to create a PlaylistMeta.
     * @example
     * // Create one PlaylistMeta
     * const PlaylistMeta = await prisma.playlistMeta.create({
     *   data: {
     *     // ... data to create a PlaylistMeta
     *   }
     * })
     * 
    **/
    create<T extends PlaylistMetaCreateArgs>(
      args: SelectSubset<T, PlaylistMetaCreateArgs>
    ): Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T>>

    /**
     * Create many PlaylistMetas.
     *     @param {PlaylistMetaCreateManyArgs} args - Arguments to create many PlaylistMetas.
     *     @example
     *     // Create many PlaylistMetas
     *     const playlistMeta = await prisma.playlistMeta.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends PlaylistMetaCreateManyArgs>(
      args?: SelectSubset<T, PlaylistMetaCreateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a PlaylistMeta.
     * @param {PlaylistMetaDeleteArgs} args - Arguments to delete one PlaylistMeta.
     * @example
     * // Delete one PlaylistMeta
     * const PlaylistMeta = await prisma.playlistMeta.delete({
     *   where: {
     *     // ... filter to delete one PlaylistMeta
     *   }
     * })
     * 
    **/
    delete<T extends PlaylistMetaDeleteArgs>(
      args: SelectSubset<T, PlaylistMetaDeleteArgs>
    ): Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T>>

    /**
     * Update one PlaylistMeta.
     * @param {PlaylistMetaUpdateArgs} args - Arguments to update one PlaylistMeta.
     * @example
     * // Update one PlaylistMeta
     * const playlistMeta = await prisma.playlistMeta.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends PlaylistMetaUpdateArgs>(
      args: SelectSubset<T, PlaylistMetaUpdateArgs>
    ): Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T>>

    /**
     * Delete zero or more PlaylistMetas.
     * @param {PlaylistMetaDeleteManyArgs} args - Arguments to filter PlaylistMetas to delete.
     * @example
     * // Delete a few PlaylistMetas
     * const { count } = await prisma.playlistMeta.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends PlaylistMetaDeleteManyArgs>(
      args?: SelectSubset<T, PlaylistMetaDeleteManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more PlaylistMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMetaUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many PlaylistMetas
     * const playlistMeta = await prisma.playlistMeta.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends PlaylistMetaUpdateManyArgs>(
      args: SelectSubset<T, PlaylistMetaUpdateManyArgs>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one PlaylistMeta.
     * @param {PlaylistMetaUpsertArgs} args - Arguments to update or create a PlaylistMeta.
     * @example
     * // Update or create a PlaylistMeta
     * const playlistMeta = await prisma.playlistMeta.upsert({
     *   create: {
     *     // ... data to create a PlaylistMeta
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the PlaylistMeta we want to update
     *   }
     * })
    **/
    upsert<T extends PlaylistMetaUpsertArgs>(
      args: SelectSubset<T, PlaylistMetaUpsertArgs>
    ): Prisma__PlaylistMetaClient<PlaylistMetaGetPayload<T>>

    /**
     * Count the number of PlaylistMetas.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMetaCountArgs} args - Arguments to filter PlaylistMetas to count.
     * @example
     * // Count the number of PlaylistMetas
     * const count = await prisma.playlistMeta.count({
     *   where: {
     *     // ... the filter for the PlaylistMetas we want to count
     *   }
     * })
    **/
    count<T extends PlaylistMetaCountArgs>(
      args?: Subset<T, PlaylistMetaCountArgs>,
    ): Prisma.PrismaPromise<
      T extends _Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], PlaylistMetaCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a PlaylistMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMetaAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends PlaylistMetaAggregateArgs>(args: Subset<T, PlaylistMetaAggregateArgs>): Prisma.PrismaPromise<GetPlaylistMetaAggregateType<T>>

    /**
     * Group by PlaylistMeta.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {PlaylistMetaGroupByArgs} args - Group by arguments.
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
      T extends PlaylistMetaGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: PlaylistMetaGroupByArgs['orderBy'] }
        : { orderBy?: PlaylistMetaGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, PlaylistMetaGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetPlaylistMetaGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>

  }

  /**
   * The delegate class that acts as a "Promise-like" for PlaylistMeta.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export class Prisma__PlaylistMetaClient<T, Null = never> implements Prisma.PrismaPromise<T> {
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
   * PlaylistMeta base type for findUnique actions
   */
  export type PlaylistMetaFindUniqueArgsBase = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
    /**
     * Filter, which PlaylistMeta to fetch.
     */
    where: PlaylistMetaWhereUniqueInput
  }

  /**
   * PlaylistMeta findUnique
   */
  export interface PlaylistMetaFindUniqueArgs extends PlaylistMetaFindUniqueArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findUniqueOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PlaylistMeta findUniqueOrThrow
   */
  export type PlaylistMetaFindUniqueOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
    /**
     * Filter, which PlaylistMeta to fetch.
     */
    where: PlaylistMetaWhereUniqueInput
  }


  /**
   * PlaylistMeta base type for findFirst actions
   */
  export type PlaylistMetaFindFirstArgsBase = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
    /**
     * Filter, which PlaylistMeta to fetch.
     */
    where?: PlaylistMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistMetas to fetch.
     */
    orderBy?: Enumerable<PlaylistMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistMetas.
     */
    cursor?: PlaylistMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistMetas.
     */
    distinct?: Enumerable<PlaylistMetaScalarFieldEnum>
  }

  /**
   * PlaylistMeta findFirst
   */
  export interface PlaylistMetaFindFirstArgs extends PlaylistMetaFindFirstArgsBase {
   /**
    * Throw an Error if query returns no results
    * @deprecated since 4.0.0: use `findFirstOrThrow` method instead
    */
    rejectOnNotFound?: RejectOnNotFound
  }
      

  /**
   * PlaylistMeta findFirstOrThrow
   */
  export type PlaylistMetaFindFirstOrThrowArgs = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
    /**
     * Filter, which PlaylistMeta to fetch.
     */
    where?: PlaylistMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistMetas to fetch.
     */
    orderBy?: Enumerable<PlaylistMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for PlaylistMetas.
     */
    cursor?: PlaylistMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistMetas.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of PlaylistMetas.
     */
    distinct?: Enumerable<PlaylistMetaScalarFieldEnum>
  }


  /**
   * PlaylistMeta findMany
   */
  export type PlaylistMetaFindManyArgs = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
    /**
     * Filter, which PlaylistMetas to fetch.
     */
    where?: PlaylistMetaWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of PlaylistMetas to fetch.
     */
    orderBy?: Enumerable<PlaylistMetaOrderByWithRelationInput>
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing PlaylistMetas.
     */
    cursor?: PlaylistMetaWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` PlaylistMetas from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` PlaylistMetas.
     */
    skip?: number
    distinct?: Enumerable<PlaylistMetaScalarFieldEnum>
  }


  /**
   * PlaylistMeta create
   */
  export type PlaylistMetaCreateArgs = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
    /**
     * The data needed to create a PlaylistMeta.
     */
    data: XOR<PlaylistMetaCreateInput, PlaylistMetaUncheckedCreateInput>
  }


  /**
   * PlaylistMeta createMany
   */
  export type PlaylistMetaCreateManyArgs = {
    /**
     * The data used to create many PlaylistMetas.
     */
    data: Enumerable<PlaylistMetaCreateManyInput>
    skipDuplicates?: boolean
  }


  /**
   * PlaylistMeta update
   */
  export type PlaylistMetaUpdateArgs = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
    /**
     * The data needed to update a PlaylistMeta.
     */
    data: XOR<PlaylistMetaUpdateInput, PlaylistMetaUncheckedUpdateInput>
    /**
     * Choose, which PlaylistMeta to update.
     */
    where: PlaylistMetaWhereUniqueInput
  }


  /**
   * PlaylistMeta updateMany
   */
  export type PlaylistMetaUpdateManyArgs = {
    /**
     * The data used to update PlaylistMetas.
     */
    data: XOR<PlaylistMetaUpdateManyMutationInput, PlaylistMetaUncheckedUpdateManyInput>
    /**
     * Filter which PlaylistMetas to update
     */
    where?: PlaylistMetaWhereInput
  }


  /**
   * PlaylistMeta upsert
   */
  export type PlaylistMetaUpsertArgs = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
    /**
     * The filter to search for the PlaylistMeta to update in case it exists.
     */
    where: PlaylistMetaWhereUniqueInput
    /**
     * In case the PlaylistMeta found by the `where` argument doesn't exist, create a new PlaylistMeta with this data.
     */
    create: XOR<PlaylistMetaCreateInput, PlaylistMetaUncheckedCreateInput>
    /**
     * In case the PlaylistMeta was found with the provided `where` argument, update it with this data.
     */
    update: XOR<PlaylistMetaUpdateInput, PlaylistMetaUncheckedUpdateInput>
  }


  /**
   * PlaylistMeta delete
   */
  export type PlaylistMetaDeleteArgs = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
    /**
     * Filter which PlaylistMeta to delete.
     */
    where: PlaylistMetaWhereUniqueInput
  }


  /**
   * PlaylistMeta deleteMany
   */
  export type PlaylistMetaDeleteManyArgs = {
    /**
     * Filter which PlaylistMetas to delete
     */
    where?: PlaylistMetaWhereInput
  }


  /**
   * PlaylistMeta without action
   */
  export type PlaylistMetaArgs = {
    /**
     * Select specific fields to fetch from the PlaylistMeta
     */
    select?: PlaylistMetaSelect | null
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
   * Enums
   */

  // Based on
  // https://github.com/microsoft/TypeScript/issues/3192#issuecomment-261720275

  export const AlbumAvailableMarketScalarFieldEnum: {
    albumId: 'albumId',
    tagId: 'tagId'
  };

  export type AlbumAvailableMarketScalarFieldEnum = (typeof AlbumAvailableMarketScalarFieldEnum)[keyof typeof AlbumAvailableMarketScalarFieldEnum]


  export const AlbumMetaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    uid: 'uid',
    releaseDate: 'releaseDate',
    releaseDatePrecision: 'releaseDatePrecision',
    copyrights: 'copyrights'
  };

  export type AlbumMetaScalarFieldEnum = (typeof AlbumMetaScalarFieldEnum)[keyof typeof AlbumMetaScalarFieldEnum]


  export const AlbumProduceByArtistScalarFieldEnum: {
    albumId: 'albumId',
    artistId: 'artistId'
  };

  export type AlbumProduceByArtistScalarFieldEnum = (typeof AlbumProduceByArtistScalarFieldEnum)[keyof typeof AlbumProduceByArtistScalarFieldEnum]


  export const AlbumScalarFieldEnum: {
    id: 'id',
    albumType: 'albumType',
    totalTracks: 'totalTracks',
    name: 'name',
    imageUrl: 'imageUrl'
  };

  export type AlbumScalarFieldEnum = (typeof AlbumScalarFieldEnum)[keyof typeof AlbumScalarFieldEnum]


  export const ArtistDataMetaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    uid: 'uid'
  };

  export type ArtistDataMetaScalarFieldEnum = (typeof ArtistDataMetaScalarFieldEnum)[keyof typeof ArtistDataMetaScalarFieldEnum]


  export const ArtistInGenresScalarFieldEnum: {
    artistId: 'artistId',
    tagId: 'tagId'
  };

  export type ArtistInGenresScalarFieldEnum = (typeof ArtistInGenresScalarFieldEnum)[keyof typeof ArtistInGenresScalarFieldEnum]


  export const ArtistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    popularity: 'popularity',
    imageUrl: 'imageUrl'
  };

  export type ArtistScalarFieldEnum = (typeof ArtistScalarFieldEnum)[keyof typeof ArtistScalarFieldEnum]


  export const PlaylistMetaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    uid: 'uid'
  };

  export type PlaylistMetaScalarFieldEnum = (typeof PlaylistMetaScalarFieldEnum)[keyof typeof PlaylistMetaScalarFieldEnum]


  export const PlaylistScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    public: 'public',
    primaryColor: 'primaryColor',
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


  export const TrackMetaScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    uid: 'uid',
    durationMs: 'durationMs'
  };

  export type TrackMetaScalarFieldEnum = (typeof TrackMetaScalarFieldEnum)[keyof typeof TrackMetaScalarFieldEnum]


  export const TrackProduceByArtistScalarFieldEnum: {
    trackId: 'trackId',
    artistId: 'artistId'
  };

  export type TrackProduceByArtistScalarFieldEnum = (typeof TrackProduceByArtistScalarFieldEnum)[keyof typeof TrackProduceByArtistScalarFieldEnum]


  export const TrackScalarFieldEnum: {
    id: 'id',
    name: 'name',
    discNumber: 'discNumber',
    popularity: 'popularity',
    previewUrl: 'previewUrl',
    trackNumber: 'trackNumber',
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

  export type ArtistWhereInput = {
    AND?: Enumerable<ArtistWhereInput>
    OR?: Enumerable<ArtistWhereInput>
    NOT?: Enumerable<ArtistWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    popularity?: IntNullableFilter | number | null
    imageUrl?: StringNullableFilter | string | null
    Genres?: ArtistInGenresListRelationFilter
    TrackProduceByArtist?: TrackProduceByArtistListRelationFilter
    AlbumProduceByArtist?: AlbumProduceByArtistListRelationFilter
  }

  export type ArtistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    popularity?: SortOrder
    imageUrl?: SortOrder
    Genres?: ArtistInGenresOrderByRelationAggregateInput
    TrackProduceByArtist?: TrackProduceByArtistOrderByRelationAggregateInput
    AlbumProduceByArtist?: AlbumProduceByArtistOrderByRelationAggregateInput
  }

  export type ArtistWhereUniqueInput = {
    id?: number
  }

  export type ArtistOrderByWithAggregationInput = {
    id?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    popularity?: IntNullableWithAggregatesFilter | number | null
    imageUrl?: StringNullableWithAggregatesFilter | string | null
  }

  export type ArtistDataMetaWhereInput = {
    AND?: Enumerable<ArtistDataMetaWhereInput>
    OR?: Enumerable<ArtistDataMetaWhereInput>
    NOT?: Enumerable<ArtistDataMetaWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringFilter | string
  }

  export type ArtistDataMetaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
  }

  export type ArtistDataMetaWhereUniqueInput = {
    id?: number
    uid?: string
  }

  export type ArtistDataMetaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    _count?: ArtistDataMetaCountOrderByAggregateInput
    _avg?: ArtistDataMetaAvgOrderByAggregateInput
    _max?: ArtistDataMetaMaxOrderByAggregateInput
    _min?: ArtistDataMetaMinOrderByAggregateInput
    _sum?: ArtistDataMetaSumOrderByAggregateInput
  }

  export type ArtistDataMetaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<ArtistDataMetaScalarWhereWithAggregatesInput>
    OR?: Enumerable<ArtistDataMetaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<ArtistDataMetaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    uid?: StringWithAggregatesFilter | string
  }

  export type TrackWhereInput = {
    AND?: Enumerable<TrackWhereInput>
    OR?: Enumerable<TrackWhereInput>
    NOT?: Enumerable<TrackWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    discNumber?: IntFilter | number
    popularity?: IntNullableFilter | number | null
    previewUrl?: StringNullableFilter | string | null
    trackNumber?: IntFilter | number
    albumId?: IntNullableFilter | number | null
    availableMarkets?: TracksAvailableMarketListRelationFilter
    Artists?: TrackProduceByArtistListRelationFilter
    InPlaylist?: TracksOnPlaylistListRelationFilter
    Album?: XOR<AlbumRelationFilter, AlbumWhereInput> | null
  }

  export type TrackOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    discNumber?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
    albumId?: SortOrder
    availableMarkets?: TracksAvailableMarketOrderByRelationAggregateInput
    Artists?: TrackProduceByArtistOrderByRelationAggregateInput
    InPlaylist?: TracksOnPlaylistOrderByRelationAggregateInput
    Album?: AlbumOrderByWithRelationInput
  }

  export type TrackWhereUniqueInput = {
    id?: number
  }

  export type TrackOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    discNumber?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    discNumber?: IntWithAggregatesFilter | number
    popularity?: IntNullableWithAggregatesFilter | number | null
    previewUrl?: StringNullableWithAggregatesFilter | string | null
    trackNumber?: IntWithAggregatesFilter | number
    albumId?: IntNullableWithAggregatesFilter | number | null
  }

  export type TrackMetaWhereInput = {
    AND?: Enumerable<TrackMetaWhereInput>
    OR?: Enumerable<TrackMetaWhereInput>
    NOT?: Enumerable<TrackMetaWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringFilter | string
    durationMs?: IntFilter | number
  }

  export type TrackMetaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    durationMs?: SortOrder
  }

  export type TrackMetaWhereUniqueInput = {
    id?: number
    uid?: string
  }

  export type TrackMetaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    durationMs?: SortOrder
    _count?: TrackMetaCountOrderByAggregateInput
    _avg?: TrackMetaAvgOrderByAggregateInput
    _max?: TrackMetaMaxOrderByAggregateInput
    _min?: TrackMetaMinOrderByAggregateInput
    _sum?: TrackMetaSumOrderByAggregateInput
  }

  export type TrackMetaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<TrackMetaScalarWhereWithAggregatesInput>
    OR?: Enumerable<TrackMetaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<TrackMetaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    uid?: StringWithAggregatesFilter | string
    durationMs?: IntWithAggregatesFilter | number
  }

  export type AlbumWhereInput = {
    AND?: Enumerable<AlbumWhereInput>
    OR?: Enumerable<AlbumWhereInput>
    NOT?: Enumerable<AlbumWhereInput>
    id?: IntFilter | number
    albumType?: StringFilter | string
    totalTracks?: IntFilter | number
    name?: StringFilter | string
    imageUrl?: StringNullableFilter | string | null
    availableMarkets?: AlbumAvailableMarketListRelationFilter
    Artists?: AlbumProduceByArtistListRelationFilter
    Tracks?: TrackListRelationFilter
  }

  export type AlbumOrderByWithRelationInput = {
    id?: SortOrder
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
    availableMarkets?: AlbumAvailableMarketOrderByRelationAggregateInput
    Artists?: AlbumProduceByArtistOrderByRelationAggregateInput
    Tracks?: TrackOrderByRelationAggregateInput
  }

  export type AlbumWhereUniqueInput = {
    id?: number
  }

  export type AlbumOrderByWithAggregationInput = {
    id?: SortOrder
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
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
    albumType?: StringWithAggregatesFilter | string
    totalTracks?: IntWithAggregatesFilter | number
    name?: StringWithAggregatesFilter | string
    imageUrl?: StringNullableWithAggregatesFilter | string | null
  }

  export type AlbumMetaWhereInput = {
    AND?: Enumerable<AlbumMetaWhereInput>
    OR?: Enumerable<AlbumMetaWhereInput>
    NOT?: Enumerable<AlbumMetaWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringFilter | string
    releaseDate?: DateTimeFilter | Date | string
    releaseDatePrecision?: StringFilter | string
    copyrights?: StringNullableFilter | string | null
  }

  export type AlbumMetaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    copyrights?: SortOrder
  }

  export type AlbumMetaWhereUniqueInput = {
    id?: number
  }

  export type AlbumMetaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    copyrights?: SortOrder
    _count?: AlbumMetaCountOrderByAggregateInput
    _avg?: AlbumMetaAvgOrderByAggregateInput
    _max?: AlbumMetaMaxOrderByAggregateInput
    _min?: AlbumMetaMinOrderByAggregateInput
    _sum?: AlbumMetaSumOrderByAggregateInput
  }

  export type AlbumMetaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<AlbumMetaScalarWhereWithAggregatesInput>
    OR?: Enumerable<AlbumMetaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<AlbumMetaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    uid?: StringWithAggregatesFilter | string
    releaseDate?: DateTimeWithAggregatesFilter | Date | string
    releaseDatePrecision?: StringWithAggregatesFilter | string
    copyrights?: StringNullableWithAggregatesFilter | string | null
  }

  export type PlaylistWhereInput = {
    AND?: Enumerable<PlaylistWhereInput>
    OR?: Enumerable<PlaylistWhereInput>
    NOT?: Enumerable<PlaylistWhereInput>
    id?: IntFilter | number
    name?: StringFilter | string
    description?: StringFilter | string
    public?: BoolFilter | boolean
    primaryColor?: StringNullableFilter | string | null
    imagesId?: StringNullableFilter | string | null
    tracks?: TracksOnPlaylistListRelationFilter
  }

  export type PlaylistOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    primaryColor?: SortOrder
    imagesId?: SortOrder
    tracks?: TracksOnPlaylistOrderByRelationAggregateInput
  }

  export type PlaylistWhereUniqueInput = {
    id?: number
  }

  export type PlaylistOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    primaryColor?: SortOrder
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
    name?: StringWithAggregatesFilter | string
    description?: StringWithAggregatesFilter | string
    public?: BoolWithAggregatesFilter | boolean
    primaryColor?: StringNullableWithAggregatesFilter | string | null
    imagesId?: StringNullableWithAggregatesFilter | string | null
  }

  export type PlaylistMetaWhereInput = {
    AND?: Enumerable<PlaylistMetaWhereInput>
    OR?: Enumerable<PlaylistMetaWhereInput>
    NOT?: Enumerable<PlaylistMetaWhereInput>
    id?: IntFilter | number
    createdAt?: DateTimeFilter | Date | string
    updatedAt?: DateTimeFilter | Date | string
    uid?: StringNullableFilter | string | null
  }

  export type PlaylistMetaOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
  }

  export type PlaylistMetaWhereUniqueInput = {
    id?: number
  }

  export type PlaylistMetaOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    _count?: PlaylistMetaCountOrderByAggregateInput
    _avg?: PlaylistMetaAvgOrderByAggregateInput
    _max?: PlaylistMetaMaxOrderByAggregateInput
    _min?: PlaylistMetaMinOrderByAggregateInput
    _sum?: PlaylistMetaSumOrderByAggregateInput
  }

  export type PlaylistMetaScalarWhereWithAggregatesInput = {
    AND?: Enumerable<PlaylistMetaScalarWhereWithAggregatesInput>
    OR?: Enumerable<PlaylistMetaScalarWhereWithAggregatesInput>
    NOT?: Enumerable<PlaylistMetaScalarWhereWithAggregatesInput>
    id?: IntWithAggregatesFilter | number
    createdAt?: DateTimeWithAggregatesFilter | Date | string
    updatedAt?: DateTimeWithAggregatesFilter | Date | string
    uid?: StringNullableWithAggregatesFilter | string | null
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

  export type ArtistCreateInput = {
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateInput = {
    id?: number
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput
  }

  export type ArtistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type ArtistCreateManyInput = {
    id?: number
    name: string
    popularity?: number | null
    imageUrl?: string | null
  }

  export type ArtistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ArtistDataMetaCreateInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
  }

  export type ArtistDataMetaUncheckedCreateInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
  }

  export type ArtistDataMetaUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistDataMetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistDataMetaCreateManyInput = {
    id: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
  }

  export type ArtistDataMetaUpdateManyMutationInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type ArtistDataMetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
  }

  export type TrackCreateInput = {
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    availableMarkets?: TracksAvailableMarketCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateInput = {
    id?: number
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    albumId?: number | null
    availableMarkets?: TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistUncheckedCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    availableMarkets?: TracksAvailableMarketUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    availableMarkets?: TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateManyInput = {
    id?: number
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    albumId?: number | null
  }

  export type TrackUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
  }

  export type TrackUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
  }

  export type TrackMetaCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    durationMs: number
  }

  export type TrackMetaUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    durationMs: number
  }

  export type TrackMetaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type TrackMetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type TrackMetaCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    durationMs: number
  }

  export type TrackMetaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type TrackMetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    durationMs?: IntFieldUpdateOperationsInput | number
  }

  export type AlbumCreateInput = {
    albumType: string
    totalTracks: number
    name: string
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketCreateNestedManyWithoutAlbumInput
    Artists?: AlbumProduceByArtistCreateNestedManyWithoutAlbumInput
    Tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateInput = {
    id?: number
    albumType: string
    totalTracks: number
    name: string
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInput
    Artists?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutAlbumInput
    Tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUpdateInput = {
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput
    Artists?: AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInput
    Artists?: AlbumProduceByArtistUncheckedUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumCreateManyInput = {
    id?: number
    albumType: string
    totalTracks: number
    name: string
    imageUrl?: string | null
  }

  export type AlbumUpdateManyMutationInput = {
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumMetaCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    releaseDate: Date | string
    releaseDatePrecision: string
    copyrights?: string | null
  }

  export type AlbumMetaUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    releaseDate: Date | string
    releaseDatePrecision: string
    copyrights?: string | null
  }

  export type AlbumMetaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumMetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumMetaCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid: string
    releaseDate: Date | string
    releaseDatePrecision: string
    copyrights?: string | null
  }

  export type AlbumMetaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AlbumMetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: StringFieldUpdateOperationsInput | string
    releaseDate?: DateTimeFieldUpdateOperationsInput | Date | string
    releaseDatePrecision?: StringFieldUpdateOperationsInput | string
    copyrights?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistCreateInput = {
    name: string
    description: string
    public: boolean
    primaryColor?: string | null
    imagesId?: string | null
    tracks?: TracksOnPlaylistCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUncheckedCreateInput = {
    id?: number
    name: string
    description: string
    public: boolean
    primaryColor?: string | null
    imagesId?: string | null
    tracks?: TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInput
  }

  export type PlaylistUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksOnPlaylistUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
    tracks?: TracksOnPlaylistUncheckedUpdateManyWithoutPlaylistNestedInput
  }

  export type PlaylistCreateManyInput = {
    id?: number
    name: string
    description: string
    public: boolean
    primaryColor?: string | null
    imagesId?: string | null
  }

  export type PlaylistUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistMetaCreateInput = {
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
  }

  export type PlaylistMetaUncheckedCreateInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
  }

  export type PlaylistMetaUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistMetaUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistMetaCreateManyInput = {
    id?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    uid?: string | null
  }

  export type PlaylistMetaUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistMetaUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    uid?: NullableStringFieldUpdateOperationsInput | string | null
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
    name?: SortOrder
    popularity?: SortOrder
    imageUrl?: SortOrder
  }

  export type ArtistMinOrderByAggregateInput = {
    id?: SortOrder
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

  export type ArtistDataMetaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
  }

  export type ArtistDataMetaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type ArtistDataMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
  }

  export type ArtistDataMetaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
  }

  export type ArtistDataMetaSumOrderByAggregateInput = {
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
    name?: SortOrder
    discNumber?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
    albumId?: SortOrder
  }

  export type TrackAvgOrderByAggregateInput = {
    id?: SortOrder
    discNumber?: SortOrder
    popularity?: SortOrder
    trackNumber?: SortOrder
    albumId?: SortOrder
  }

  export type TrackMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discNumber?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
    albumId?: SortOrder
  }

  export type TrackMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    discNumber?: SortOrder
    popularity?: SortOrder
    previewUrl?: SortOrder
    trackNumber?: SortOrder
    albumId?: SortOrder
  }

  export type TrackSumOrderByAggregateInput = {
    id?: SortOrder
    discNumber?: SortOrder
    popularity?: SortOrder
    trackNumber?: SortOrder
    albumId?: SortOrder
  }

  export type TrackMetaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    durationMs?: SortOrder
  }

  export type TrackMetaAvgOrderByAggregateInput = {
    id?: SortOrder
    durationMs?: SortOrder
  }

  export type TrackMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    durationMs?: SortOrder
  }

  export type TrackMetaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    durationMs?: SortOrder
  }

  export type TrackMetaSumOrderByAggregateInput = {
    id?: SortOrder
    durationMs?: SortOrder
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
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumAvgOrderByAggregateInput = {
    id?: SortOrder
    totalTracks?: SortOrder
  }

  export type AlbumMaxOrderByAggregateInput = {
    id?: SortOrder
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumMinOrderByAggregateInput = {
    id?: SortOrder
    albumType?: SortOrder
    totalTracks?: SortOrder
    name?: SortOrder
    imageUrl?: SortOrder
  }

  export type AlbumSumOrderByAggregateInput = {
    id?: SortOrder
    totalTracks?: SortOrder
  }

  export type AlbumMetaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    copyrights?: SortOrder
  }

  export type AlbumMetaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AlbumMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    copyrights?: SortOrder
  }

  export type AlbumMetaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
    releaseDate?: SortOrder
    releaseDatePrecision?: SortOrder
    copyrights?: SortOrder
  }

  export type AlbumMetaSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type PlaylistCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    primaryColor?: SortOrder
    imagesId?: SortOrder
  }

  export type PlaylistAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlaylistMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    primaryColor?: SortOrder
    imagesId?: SortOrder
  }

  export type PlaylistMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    public?: SortOrder
    primaryColor?: SortOrder
    imagesId?: SortOrder
  }

  export type PlaylistSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type BoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
  }

  export type PlaylistMetaCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
  }

  export type PlaylistMetaAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type PlaylistMetaMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
  }

  export type PlaylistMetaMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    uid?: SortOrder
  }

  export type PlaylistMetaSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
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

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
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

  export type TracksOnPlaylistUncheckedCreateNestedManyWithoutPlaylistInput = {
    create?: XOR<Enumerable<TracksOnPlaylistCreateWithoutPlaylistInput>, Enumerable<TracksOnPlaylistUncheckedCreateWithoutPlaylistInput>>
    connectOrCreate?: Enumerable<TracksOnPlaylistCreateOrConnectWithoutPlaylistInput>
    createMany?: TracksOnPlaylistCreateManyPlaylistInputEnvelope
    connect?: Enumerable<TracksOnPlaylistWhereUniqueInput>
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
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

  export type NestedBoolFilter = {
    equals?: boolean
    not?: NestedBoolFilter | boolean
  }

  export type NestedBoolWithAggregatesFilter = {
    equals?: boolean
    not?: NestedBoolWithAggregatesFilter | boolean
    _count?: NestedIntFilter
    _min?: NestedBoolFilter
    _max?: NestedBoolFilter
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
    albumType: string
    totalTracks: number
    name: string
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketCreateNestedManyWithoutAlbumInput
    Artists?: AlbumProduceByArtistCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutTracksInput = {
    id?: number
    albumType: string
    totalTracks: number
    name: string
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
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput
    Artists?: AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    availableMarkets?: TracksAvailableMarketCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistCreateNestedManyWithoutTrackInput
  }

  export type TrackUncheckedCreateWithoutAlbumInput = {
    id?: number
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
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
    name?: StringFilter | string
    discNumber?: IntFilter | number
    popularity?: IntNullableFilter | number | null
    previewUrl?: StringNullableFilter | string | null
    trackNumber?: IntFilter | number
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

  export type PlaylistCreateWithoutTracksInput = {
    name: string
    description: string
    public: boolean
    primaryColor?: string | null
    imagesId?: string | null
  }

  export type PlaylistUncheckedCreateWithoutTracksInput = {
    id?: number
    name: string
    description: string
    public: boolean
    primaryColor?: string | null
    imagesId?: string | null
  }

  export type PlaylistCreateOrConnectWithoutTracksInput = {
    where: PlaylistWhereUniqueInput
    create: XOR<PlaylistCreateWithoutTracksInput, PlaylistUncheckedCreateWithoutTracksInput>
  }

  export type TrackCreateWithoutInPlaylistInput = {
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    availableMarkets?: TracksAvailableMarketCreateNestedManyWithoutTrackInput
    Artists?: TrackProduceByArtistCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutInPlaylistInput = {
    id?: number
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
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
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type PlaylistUncheckedUpdateWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    public?: BoolFieldUpdateOperationsInput | boolean
    primaryColor?: NullableStringFieldUpdateOperationsInput | string | null
    imagesId?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type TrackUpsertWithoutInPlaylistInput = {
    update: XOR<TrackUpdateWithoutInPlaylistInput, TrackUncheckedUpdateWithoutInPlaylistInput>
    create: XOR<TrackCreateWithoutInPlaylistInput, TrackUncheckedCreateWithoutInPlaylistInput>
  }

  export type TrackUpdateWithoutInPlaylistInput = {
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    availableMarkets?: TracksAvailableMarketUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutInPlaylistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
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
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    Artists?: TrackProduceByArtistCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutAvailableMarketsInput = {
    id?: number
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
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
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    Artists?: TrackProduceByArtistUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutAvailableMarketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    Artists?: TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackCreateWithoutArtistsInput = {
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    availableMarkets?: TracksAvailableMarketCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistCreateNestedManyWithoutTrackInput
    Album?: AlbumCreateNestedOneWithoutTracksInput
  }

  export type TrackUncheckedCreateWithoutArtistsInput = {
    id?: number
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
    albumId?: number | null
    availableMarkets?: TracksAvailableMarketUncheckedCreateNestedManyWithoutTrackInput
    InPlaylist?: TracksOnPlaylistUncheckedCreateNestedManyWithoutTrackInput
  }

  export type TrackCreateOrConnectWithoutArtistsInput = {
    where: TrackWhereUniqueInput
    create: XOR<TrackCreateWithoutArtistsInput, TrackUncheckedCreateWithoutArtistsInput>
  }

  export type ArtistCreateWithoutTrackProduceByArtistInput = {
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresCreateNestedManyWithoutArtistInput
    AlbumProduceByArtist?: AlbumProduceByArtistCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutTrackProduceByArtistInput = {
    id?: number
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput
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
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    availableMarkets?: TracksAvailableMarketUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUpdateManyWithoutTrackNestedInput
    Album?: AlbumUpdateOneWithoutTracksNestedInput
  }

  export type TrackUncheckedUpdateWithoutArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    albumId?: NullableIntFieldUpdateOperationsInput | number | null
    availableMarkets?: TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type ArtistUpsertWithoutTrackProduceByArtistInput = {
    update: XOR<ArtistUpdateWithoutTrackProduceByArtistInput, ArtistUncheckedUpdateWithoutTrackProduceByArtistInput>
    create: XOR<ArtistCreateWithoutTrackProduceByArtistInput, ArtistUncheckedCreateWithoutTrackProduceByArtistInput>
  }

  export type ArtistUpdateWithoutTrackProduceByArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUpdateManyWithoutArtistNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutTrackProduceByArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInput
  }

  export type AlbumCreateWithoutArtistsInput = {
    albumType: string
    totalTracks: number
    name: string
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketCreateNestedManyWithoutAlbumInput
    Tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutArtistsInput = {
    id?: number
    albumType: string
    totalTracks: number
    name: string
    imageUrl?: string | null
    availableMarkets?: AlbumAvailableMarketUncheckedCreateNestedManyWithoutAlbumInput
    Tracks?: TrackUncheckedCreateNestedManyWithoutAlbumInput
  }

  export type AlbumCreateOrConnectWithoutArtistsInput = {
    where: AlbumWhereUniqueInput
    create: XOR<AlbumCreateWithoutArtistsInput, AlbumUncheckedCreateWithoutArtistsInput>
  }

  export type ArtistCreateWithoutAlbumProduceByArtistInput = {
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistCreateNestedManyWithoutArtistsInput
  }

  export type ArtistUncheckedCreateWithoutAlbumProduceByArtistInput = {
    id?: number
    name: string
    popularity?: number | null
    imageUrl?: string | null
    Genres?: ArtistInGenresUncheckedCreateNestedManyWithoutArtistInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput
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
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutArtistsInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    availableMarkets?: AlbumAvailableMarketUncheckedUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUncheckedUpdateManyWithoutAlbumNestedInput
  }

  export type ArtistUpsertWithoutAlbumProduceByArtistInput = {
    update: XOR<ArtistUpdateWithoutAlbumProduceByArtistInput, ArtistUncheckedUpdateWithoutAlbumProduceByArtistInput>
    create: XOR<ArtistCreateWithoutAlbumProduceByArtistInput, ArtistUncheckedCreateWithoutAlbumProduceByArtistInput>
  }

  export type ArtistUpdateWithoutAlbumProduceByArtistInput = {
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUpdateManyWithoutArtistsNestedInput
  }

  export type ArtistUncheckedUpdateWithoutAlbumProduceByArtistInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Genres?: ArtistInGenresUncheckedUpdateManyWithoutArtistNestedInput
    TrackProduceByArtist?: TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput
  }

  export type AlbumCreateWithoutAvailableMarketsInput = {
    albumType: string
    totalTracks: number
    name: string
    imageUrl?: string | null
    Artists?: AlbumProduceByArtistCreateNestedManyWithoutAlbumInput
    Tracks?: TrackCreateNestedManyWithoutAlbumInput
  }

  export type AlbumUncheckedCreateWithoutAvailableMarketsInput = {
    id?: number
    albumType: string
    totalTracks: number
    name: string
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
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    Artists?: AlbumProduceByArtistUpdateManyWithoutAlbumNestedInput
    Tracks?: TrackUpdateManyWithoutAlbumNestedInput
  }

  export type AlbumUncheckedUpdateWithoutAvailableMarketsInput = {
    id?: IntFieldUpdateOperationsInput | number
    albumType?: StringFieldUpdateOperationsInput | string
    totalTracks?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
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
    name: string
    popularity?: number | null
    imageUrl?: string | null
    TrackProduceByArtist?: TrackProduceByArtistCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistCreateNestedManyWithoutArtistInput
  }

  export type ArtistUncheckedCreateWithoutGenresInput = {
    id?: number
    name: string
    popularity?: number | null
    imageUrl?: string | null
    TrackProduceByArtist?: TrackProduceByArtistUncheckedCreateNestedManyWithoutArtistsInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedCreateNestedManyWithoutArtistInput
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
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    TrackProduceByArtist?: TrackProduceByArtistUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUpdateManyWithoutArtistNestedInput
  }

  export type ArtistUncheckedUpdateWithoutGenresInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    TrackProduceByArtist?: TrackProduceByArtistUncheckedUpdateManyWithoutArtistsNestedInput
    AlbumProduceByArtist?: AlbumProduceByArtistUncheckedUpdateManyWithoutArtistNestedInput
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

  export type ArtistInGenresCreateManyArtistInput = {
    tagId: number
  }

  export type TrackProduceByArtistCreateManyArtistsInput = {
    trackId: number
  }

  export type AlbumProduceByArtistCreateManyArtistInput = {
    albumId: number
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
    name: string
    discNumber: number
    popularity?: number | null
    previewUrl?: string | null
    trackNumber: number
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
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    availableMarkets?: TracksAvailableMarketUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateWithoutAlbumInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
    availableMarkets?: TracksAvailableMarketUncheckedUpdateManyWithoutTrackNestedInput
    Artists?: TrackProduceByArtistUncheckedUpdateManyWithoutTrackNestedInput
    InPlaylist?: TracksOnPlaylistUncheckedUpdateManyWithoutTrackNestedInput
  }

  export type TrackUncheckedUpdateManyWithoutTracksInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    discNumber?: IntFieldUpdateOperationsInput | number
    popularity?: NullableIntFieldUpdateOperationsInput | number | null
    previewUrl?: NullableStringFieldUpdateOperationsInput | string | null
    trackNumber?: IntFieldUpdateOperationsInput | number
  }

  export type TracksOnPlaylistCreateManyPlaylistInput = {
    trackId: number
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