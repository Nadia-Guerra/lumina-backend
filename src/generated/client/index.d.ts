
/**
 * Client
**/

import * as runtime from './runtime/client.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model MakeupProduct
 * 
 */
export type MakeupProduct = $Result.DefaultSelection<Prisma.$MakeupProductPayload>
/**
 * Model MakeupStyle
 * 
 */
export type MakeupStyle = $Result.DefaultSelection<Prisma.$MakeupStylePayload>
/**
 * Model StyleRule
 * 
 */
export type StyleRule = $Result.DefaultSelection<Prisma.$StyleRulePayload>
/**
 * Model MakeupExample
 * 
 */
export type MakeupExample = $Result.DefaultSelection<Prisma.$MakeupExamplePayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Favorite
 * 
 */
export type Favorite = $Result.DefaultSelection<Prisma.$FavoritePayload>

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient({
 *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
 * })
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient({
   *   adapter: new PrismaPg({ connectionString: process.env.DATABASE_URL })
   * })
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://www.prisma.io/docs/orm/prisma-client/queries/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.makeupProduct`: Exposes CRUD operations for the **MakeupProduct** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MakeupProducts
    * const makeupProducts = await prisma.makeupProduct.findMany()
    * ```
    */
  get makeupProduct(): Prisma.MakeupProductDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.makeupStyle`: Exposes CRUD operations for the **MakeupStyle** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MakeupStyles
    * const makeupStyles = await prisma.makeupStyle.findMany()
    * ```
    */
  get makeupStyle(): Prisma.MakeupStyleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.styleRule`: Exposes CRUD operations for the **StyleRule** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more StyleRules
    * const styleRules = await prisma.styleRule.findMany()
    * ```
    */
  get styleRule(): Prisma.StyleRuleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.makeupExample`: Exposes CRUD operations for the **MakeupExample** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MakeupExamples
    * const makeupExamples = await prisma.makeupExample.findMany()
    * ```
    */
  get makeupExample(): Prisma.MakeupExampleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.favorite`: Exposes CRUD operations for the **Favorite** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Favorites
    * const favorites = await prisma.favorite.findMany()
    * ```
    */
  get favorite(): Prisma.FavoriteDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.7.0
   * Query Engine version: 75cbdc1eb7150937890ad5465d861175c6624711
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

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

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

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
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    MakeupProduct: 'MakeupProduct',
    MakeupStyle: 'MakeupStyle',
    StyleRule: 'StyleRule',
    MakeupExample: 'MakeupExample',
    Review: 'Review',
    Favorite: 'Favorite'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "makeupProduct" | "makeupStyle" | "styleRule" | "makeupExample" | "review" | "favorite"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      MakeupProduct: {
        payload: Prisma.$MakeupProductPayload<ExtArgs>
        fields: Prisma.MakeupProductFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MakeupProductFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MakeupProductFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload>
          }
          findFirst: {
            args: Prisma.MakeupProductFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MakeupProductFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload>
          }
          findMany: {
            args: Prisma.MakeupProductFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload>[]
          }
          create: {
            args: Prisma.MakeupProductCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload>
          }
          createMany: {
            args: Prisma.MakeupProductCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MakeupProductCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload>[]
          }
          delete: {
            args: Prisma.MakeupProductDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload>
          }
          update: {
            args: Prisma.MakeupProductUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload>
          }
          deleteMany: {
            args: Prisma.MakeupProductDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MakeupProductUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MakeupProductUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload>[]
          }
          upsert: {
            args: Prisma.MakeupProductUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupProductPayload>
          }
          aggregate: {
            args: Prisma.MakeupProductAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMakeupProduct>
          }
          groupBy: {
            args: Prisma.MakeupProductGroupByArgs<ExtArgs>
            result: $Utils.Optional<MakeupProductGroupByOutputType>[]
          }
          count: {
            args: Prisma.MakeupProductCountArgs<ExtArgs>
            result: $Utils.Optional<MakeupProductCountAggregateOutputType> | number
          }
        }
      }
      MakeupStyle: {
        payload: Prisma.$MakeupStylePayload<ExtArgs>
        fields: Prisma.MakeupStyleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MakeupStyleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MakeupStyleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload>
          }
          findFirst: {
            args: Prisma.MakeupStyleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MakeupStyleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload>
          }
          findMany: {
            args: Prisma.MakeupStyleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload>[]
          }
          create: {
            args: Prisma.MakeupStyleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload>
          }
          createMany: {
            args: Prisma.MakeupStyleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MakeupStyleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload>[]
          }
          delete: {
            args: Prisma.MakeupStyleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload>
          }
          update: {
            args: Prisma.MakeupStyleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload>
          }
          deleteMany: {
            args: Prisma.MakeupStyleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MakeupStyleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MakeupStyleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload>[]
          }
          upsert: {
            args: Prisma.MakeupStyleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupStylePayload>
          }
          aggregate: {
            args: Prisma.MakeupStyleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMakeupStyle>
          }
          groupBy: {
            args: Prisma.MakeupStyleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MakeupStyleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MakeupStyleCountArgs<ExtArgs>
            result: $Utils.Optional<MakeupStyleCountAggregateOutputType> | number
          }
        }
      }
      StyleRule: {
        payload: Prisma.$StyleRulePayload<ExtArgs>
        fields: Prisma.StyleRuleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.StyleRuleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.StyleRuleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload>
          }
          findFirst: {
            args: Prisma.StyleRuleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.StyleRuleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload>
          }
          findMany: {
            args: Prisma.StyleRuleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload>[]
          }
          create: {
            args: Prisma.StyleRuleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload>
          }
          createMany: {
            args: Prisma.StyleRuleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.StyleRuleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload>[]
          }
          delete: {
            args: Prisma.StyleRuleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload>
          }
          update: {
            args: Prisma.StyleRuleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload>
          }
          deleteMany: {
            args: Prisma.StyleRuleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.StyleRuleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.StyleRuleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload>[]
          }
          upsert: {
            args: Prisma.StyleRuleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$StyleRulePayload>
          }
          aggregate: {
            args: Prisma.StyleRuleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateStyleRule>
          }
          groupBy: {
            args: Prisma.StyleRuleGroupByArgs<ExtArgs>
            result: $Utils.Optional<StyleRuleGroupByOutputType>[]
          }
          count: {
            args: Prisma.StyleRuleCountArgs<ExtArgs>
            result: $Utils.Optional<StyleRuleCountAggregateOutputType> | number
          }
        }
      }
      MakeupExample: {
        payload: Prisma.$MakeupExamplePayload<ExtArgs>
        fields: Prisma.MakeupExampleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MakeupExampleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MakeupExampleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload>
          }
          findFirst: {
            args: Prisma.MakeupExampleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MakeupExampleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload>
          }
          findMany: {
            args: Prisma.MakeupExampleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload>[]
          }
          create: {
            args: Prisma.MakeupExampleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload>
          }
          createMany: {
            args: Prisma.MakeupExampleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MakeupExampleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload>[]
          }
          delete: {
            args: Prisma.MakeupExampleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload>
          }
          update: {
            args: Prisma.MakeupExampleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload>
          }
          deleteMany: {
            args: Prisma.MakeupExampleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MakeupExampleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MakeupExampleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload>[]
          }
          upsert: {
            args: Prisma.MakeupExampleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MakeupExamplePayload>
          }
          aggregate: {
            args: Prisma.MakeupExampleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMakeupExample>
          }
          groupBy: {
            args: Prisma.MakeupExampleGroupByArgs<ExtArgs>
            result: $Utils.Optional<MakeupExampleGroupByOutputType>[]
          }
          count: {
            args: Prisma.MakeupExampleCountArgs<ExtArgs>
            result: $Utils.Optional<MakeupExampleCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Favorite: {
        payload: Prisma.$FavoritePayload<ExtArgs>
        fields: Prisma.FavoriteFieldRefs
        operations: {
          findUnique: {
            args: Prisma.FavoriteFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.FavoriteFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findFirst: {
            args: Prisma.FavoriteFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.FavoriteFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          findMany: {
            args: Prisma.FavoriteFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          create: {
            args: Prisma.FavoriteCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          createMany: {
            args: Prisma.FavoriteCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.FavoriteCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          delete: {
            args: Prisma.FavoriteDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          update: {
            args: Prisma.FavoriteUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          deleteMany: {
            args: Prisma.FavoriteDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.FavoriteUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.FavoriteUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>[]
          }
          upsert: {
            args: Prisma.FavoriteUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$FavoritePayload>
          }
          aggregate: {
            args: Prisma.FavoriteAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateFavorite>
          }
          groupBy: {
            args: Prisma.FavoriteGroupByArgs<ExtArgs>
            result: $Utils.Optional<FavoriteGroupByOutputType>[]
          }
          count: {
            args: Prisma.FavoriteCountArgs<ExtArgs>
            result: $Utils.Optional<FavoriteCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    makeupProduct?: MakeupProductOmit
    makeupStyle?: MakeupStyleOmit
    styleRule?: StyleRuleOmit
    makeupExample?: MakeupExampleOmit
    review?: ReviewOmit
    favorite?: FavoriteOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    reviews: number
    favorites: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | UserCountOutputTypeCountReviewsArgs
    favorites?: boolean | UserCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type MakeupProductCountOutputType
   */

  export type MakeupProductCountOutputType = {
    reviews: number
    favorites: number
  }

  export type MakeupProductCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | MakeupProductCountOutputTypeCountReviewsArgs
    favorites?: boolean | MakeupProductCountOutputTypeCountFavoritesArgs
  }

  // Custom InputTypes
  /**
   * MakeupProductCountOutputType without action
   */
  export type MakeupProductCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProductCountOutputType
     */
    select?: MakeupProductCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MakeupProductCountOutputType without action
   */
  export type MakeupProductCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * MakeupProductCountOutputType without action
   */
  export type MakeupProductCountOutputTypeCountFavoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
  }


  /**
   * Count Type MakeupStyleCountOutputType
   */

  export type MakeupStyleCountOutputType = {
    rules: number
    examples: number
  }

  export type MakeupStyleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | MakeupStyleCountOutputTypeCountRulesArgs
    examples?: boolean | MakeupStyleCountOutputTypeCountExamplesArgs
  }

  // Custom InputTypes
  /**
   * MakeupStyleCountOutputType without action
   */
  export type MakeupStyleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyleCountOutputType
     */
    select?: MakeupStyleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MakeupStyleCountOutputType without action
   */
  export type MakeupStyleCountOutputTypeCountRulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StyleRuleWhereInput
  }

  /**
   * MakeupStyleCountOutputType without action
   */
  export type MakeupStyleCountOutputTypeCountExamplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MakeupExampleWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    username: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    username: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    username?: true
    email?: true
    password?: true
    createdAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    username: string
    email: string
    password: string
    createdAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    username?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "username" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | User$reviewsArgs<ExtArgs>
    favorites?: boolean | User$favoritesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      username: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
      T extends $Utils.Record<'select', any>
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
      ByFields extends MaybeTupleToUnion<T['by']>,
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
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends User$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, User$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends User$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, User$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly username: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
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
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.reviews
   */
  export type User$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * User.favorites
   */
  export type User$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model MakeupProduct
   */

  export type AggregateMakeupProduct = {
    _count: MakeupProductCountAggregateOutputType | null
    _avg: MakeupProductAvgAggregateOutputType | null
    _sum: MakeupProductSumAggregateOutputType | null
    _min: MakeupProductMinAggregateOutputType | null
    _max: MakeupProductMaxAggregateOutputType | null
  }

  export type MakeupProductAvgAggregateOutputType = {
    externalId: number | null
  }

  export type MakeupProductSumAggregateOutputType = {
    externalId: number | null
  }

  export type MakeupProductMinAggregateOutputType = {
    id: string | null
    externalId: number | null
    name: string | null
    imgUrl: string | null
  }

  export type MakeupProductMaxAggregateOutputType = {
    id: string | null
    externalId: number | null
    name: string | null
    imgUrl: string | null
  }

  export type MakeupProductCountAggregateOutputType = {
    id: number
    externalId: number
    name: number
    imgUrl: number
    _all: number
  }


  export type MakeupProductAvgAggregateInputType = {
    externalId?: true
  }

  export type MakeupProductSumAggregateInputType = {
    externalId?: true
  }

  export type MakeupProductMinAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    imgUrl?: true
  }

  export type MakeupProductMaxAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    imgUrl?: true
  }

  export type MakeupProductCountAggregateInputType = {
    id?: true
    externalId?: true
    name?: true
    imgUrl?: true
    _all?: true
  }

  export type MakeupProductAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MakeupProduct to aggregate.
     */
    where?: MakeupProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupProducts to fetch.
     */
    orderBy?: MakeupProductOrderByWithRelationInput | MakeupProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MakeupProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MakeupProducts
    **/
    _count?: true | MakeupProductCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MakeupProductAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MakeupProductSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MakeupProductMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MakeupProductMaxAggregateInputType
  }

  export type GetMakeupProductAggregateType<T extends MakeupProductAggregateArgs> = {
        [P in keyof T & keyof AggregateMakeupProduct]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMakeupProduct[P]>
      : GetScalarType<T[P], AggregateMakeupProduct[P]>
  }




  export type MakeupProductGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MakeupProductWhereInput
    orderBy?: MakeupProductOrderByWithAggregationInput | MakeupProductOrderByWithAggregationInput[]
    by: MakeupProductScalarFieldEnum[] | MakeupProductScalarFieldEnum
    having?: MakeupProductScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MakeupProductCountAggregateInputType | true
    _avg?: MakeupProductAvgAggregateInputType
    _sum?: MakeupProductSumAggregateInputType
    _min?: MakeupProductMinAggregateInputType
    _max?: MakeupProductMaxAggregateInputType
  }

  export type MakeupProductGroupByOutputType = {
    id: string
    externalId: number
    name: string | null
    imgUrl: string | null
    _count: MakeupProductCountAggregateOutputType | null
    _avg: MakeupProductAvgAggregateOutputType | null
    _sum: MakeupProductSumAggregateOutputType | null
    _min: MakeupProductMinAggregateOutputType | null
    _max: MakeupProductMaxAggregateOutputType | null
  }

  type GetMakeupProductGroupByPayload<T extends MakeupProductGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MakeupProductGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MakeupProductGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MakeupProductGroupByOutputType[P]>
            : GetScalarType<T[P], MakeupProductGroupByOutputType[P]>
        }
      >
    >


  export type MakeupProductSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    imgUrl?: boolean
    reviews?: boolean | MakeupProduct$reviewsArgs<ExtArgs>
    favorites?: boolean | MakeupProduct$favoritesArgs<ExtArgs>
    _count?: boolean | MakeupProductCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["makeupProduct"]>

  export type MakeupProductSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    imgUrl?: boolean
  }, ExtArgs["result"]["makeupProduct"]>

  export type MakeupProductSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    externalId?: boolean
    name?: boolean
    imgUrl?: boolean
  }, ExtArgs["result"]["makeupProduct"]>

  export type MakeupProductSelectScalar = {
    id?: boolean
    externalId?: boolean
    name?: boolean
    imgUrl?: boolean
  }

  export type MakeupProductOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "externalId" | "name" | "imgUrl", ExtArgs["result"]["makeupProduct"]>
  export type MakeupProductInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | MakeupProduct$reviewsArgs<ExtArgs>
    favorites?: boolean | MakeupProduct$favoritesArgs<ExtArgs>
    _count?: boolean | MakeupProductCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MakeupProductIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MakeupProductIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MakeupProductPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MakeupProduct"
    objects: {
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
      favorites: Prisma.$FavoritePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      externalId: number
      name: string | null
      imgUrl: string | null
    }, ExtArgs["result"]["makeupProduct"]>
    composites: {}
  }

  type MakeupProductGetPayload<S extends boolean | null | undefined | MakeupProductDefaultArgs> = $Result.GetResult<Prisma.$MakeupProductPayload, S>

  type MakeupProductCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MakeupProductFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MakeupProductCountAggregateInputType | true
    }

  export interface MakeupProductDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MakeupProduct'], meta: { name: 'MakeupProduct' } }
    /**
     * Find zero or one MakeupProduct that matches the filter.
     * @param {MakeupProductFindUniqueArgs} args - Arguments to find a MakeupProduct
     * @example
     * // Get one MakeupProduct
     * const makeupProduct = await prisma.makeupProduct.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MakeupProductFindUniqueArgs>(args: SelectSubset<T, MakeupProductFindUniqueArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MakeupProduct that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MakeupProductFindUniqueOrThrowArgs} args - Arguments to find a MakeupProduct
     * @example
     * // Get one MakeupProduct
     * const makeupProduct = await prisma.makeupProduct.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MakeupProductFindUniqueOrThrowArgs>(args: SelectSubset<T, MakeupProductFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MakeupProduct that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupProductFindFirstArgs} args - Arguments to find a MakeupProduct
     * @example
     * // Get one MakeupProduct
     * const makeupProduct = await prisma.makeupProduct.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MakeupProductFindFirstArgs>(args?: SelectSubset<T, MakeupProductFindFirstArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MakeupProduct that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupProductFindFirstOrThrowArgs} args - Arguments to find a MakeupProduct
     * @example
     * // Get one MakeupProduct
     * const makeupProduct = await prisma.makeupProduct.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MakeupProductFindFirstOrThrowArgs>(args?: SelectSubset<T, MakeupProductFindFirstOrThrowArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MakeupProducts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupProductFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MakeupProducts
     * const makeupProducts = await prisma.makeupProduct.findMany()
     * 
     * // Get first 10 MakeupProducts
     * const makeupProducts = await prisma.makeupProduct.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const makeupProductWithIdOnly = await prisma.makeupProduct.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MakeupProductFindManyArgs>(args?: SelectSubset<T, MakeupProductFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MakeupProduct.
     * @param {MakeupProductCreateArgs} args - Arguments to create a MakeupProduct.
     * @example
     * // Create one MakeupProduct
     * const MakeupProduct = await prisma.makeupProduct.create({
     *   data: {
     *     // ... data to create a MakeupProduct
     *   }
     * })
     * 
     */
    create<T extends MakeupProductCreateArgs>(args: SelectSubset<T, MakeupProductCreateArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MakeupProducts.
     * @param {MakeupProductCreateManyArgs} args - Arguments to create many MakeupProducts.
     * @example
     * // Create many MakeupProducts
     * const makeupProduct = await prisma.makeupProduct.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MakeupProductCreateManyArgs>(args?: SelectSubset<T, MakeupProductCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MakeupProducts and returns the data saved in the database.
     * @param {MakeupProductCreateManyAndReturnArgs} args - Arguments to create many MakeupProducts.
     * @example
     * // Create many MakeupProducts
     * const makeupProduct = await prisma.makeupProduct.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MakeupProducts and only return the `id`
     * const makeupProductWithIdOnly = await prisma.makeupProduct.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MakeupProductCreateManyAndReturnArgs>(args?: SelectSubset<T, MakeupProductCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MakeupProduct.
     * @param {MakeupProductDeleteArgs} args - Arguments to delete one MakeupProduct.
     * @example
     * // Delete one MakeupProduct
     * const MakeupProduct = await prisma.makeupProduct.delete({
     *   where: {
     *     // ... filter to delete one MakeupProduct
     *   }
     * })
     * 
     */
    delete<T extends MakeupProductDeleteArgs>(args: SelectSubset<T, MakeupProductDeleteArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MakeupProduct.
     * @param {MakeupProductUpdateArgs} args - Arguments to update one MakeupProduct.
     * @example
     * // Update one MakeupProduct
     * const makeupProduct = await prisma.makeupProduct.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MakeupProductUpdateArgs>(args: SelectSubset<T, MakeupProductUpdateArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MakeupProducts.
     * @param {MakeupProductDeleteManyArgs} args - Arguments to filter MakeupProducts to delete.
     * @example
     * // Delete a few MakeupProducts
     * const { count } = await prisma.makeupProduct.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MakeupProductDeleteManyArgs>(args?: SelectSubset<T, MakeupProductDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MakeupProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupProductUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MakeupProducts
     * const makeupProduct = await prisma.makeupProduct.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MakeupProductUpdateManyArgs>(args: SelectSubset<T, MakeupProductUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MakeupProducts and returns the data updated in the database.
     * @param {MakeupProductUpdateManyAndReturnArgs} args - Arguments to update many MakeupProducts.
     * @example
     * // Update many MakeupProducts
     * const makeupProduct = await prisma.makeupProduct.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MakeupProducts and only return the `id`
     * const makeupProductWithIdOnly = await prisma.makeupProduct.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MakeupProductUpdateManyAndReturnArgs>(args: SelectSubset<T, MakeupProductUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MakeupProduct.
     * @param {MakeupProductUpsertArgs} args - Arguments to update or create a MakeupProduct.
     * @example
     * // Update or create a MakeupProduct
     * const makeupProduct = await prisma.makeupProduct.upsert({
     *   create: {
     *     // ... data to create a MakeupProduct
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MakeupProduct we want to update
     *   }
     * })
     */
    upsert<T extends MakeupProductUpsertArgs>(args: SelectSubset<T, MakeupProductUpsertArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MakeupProducts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupProductCountArgs} args - Arguments to filter MakeupProducts to count.
     * @example
     * // Count the number of MakeupProducts
     * const count = await prisma.makeupProduct.count({
     *   where: {
     *     // ... the filter for the MakeupProducts we want to count
     *   }
     * })
    **/
    count<T extends MakeupProductCountArgs>(
      args?: Subset<T, MakeupProductCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MakeupProductCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MakeupProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupProductAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MakeupProductAggregateArgs>(args: Subset<T, MakeupProductAggregateArgs>): Prisma.PrismaPromise<GetMakeupProductAggregateType<T>>

    /**
     * Group by MakeupProduct.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupProductGroupByArgs} args - Group by arguments.
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
      T extends MakeupProductGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MakeupProductGroupByArgs['orderBy'] }
        : { orderBy?: MakeupProductGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MakeupProductGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMakeupProductGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MakeupProduct model
   */
  readonly fields: MakeupProductFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MakeupProduct.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MakeupProductClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    reviews<T extends MakeupProduct$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, MakeupProduct$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    favorites<T extends MakeupProduct$favoritesArgs<ExtArgs> = {}>(args?: Subset<T, MakeupProduct$favoritesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MakeupProduct model
   */
  interface MakeupProductFieldRefs {
    readonly id: FieldRef<"MakeupProduct", 'String'>
    readonly externalId: FieldRef<"MakeupProduct", 'Int'>
    readonly name: FieldRef<"MakeupProduct", 'String'>
    readonly imgUrl: FieldRef<"MakeupProduct", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MakeupProduct findUnique
   */
  export type MakeupProductFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
    /**
     * Filter, which MakeupProduct to fetch.
     */
    where: MakeupProductWhereUniqueInput
  }

  /**
   * MakeupProduct findUniqueOrThrow
   */
  export type MakeupProductFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
    /**
     * Filter, which MakeupProduct to fetch.
     */
    where: MakeupProductWhereUniqueInput
  }

  /**
   * MakeupProduct findFirst
   */
  export type MakeupProductFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
    /**
     * Filter, which MakeupProduct to fetch.
     */
    where?: MakeupProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupProducts to fetch.
     */
    orderBy?: MakeupProductOrderByWithRelationInput | MakeupProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MakeupProducts.
     */
    cursor?: MakeupProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MakeupProducts.
     */
    distinct?: MakeupProductScalarFieldEnum | MakeupProductScalarFieldEnum[]
  }

  /**
   * MakeupProduct findFirstOrThrow
   */
  export type MakeupProductFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
    /**
     * Filter, which MakeupProduct to fetch.
     */
    where?: MakeupProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupProducts to fetch.
     */
    orderBy?: MakeupProductOrderByWithRelationInput | MakeupProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MakeupProducts.
     */
    cursor?: MakeupProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MakeupProducts.
     */
    distinct?: MakeupProductScalarFieldEnum | MakeupProductScalarFieldEnum[]
  }

  /**
   * MakeupProduct findMany
   */
  export type MakeupProductFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
    /**
     * Filter, which MakeupProducts to fetch.
     */
    where?: MakeupProductWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupProducts to fetch.
     */
    orderBy?: MakeupProductOrderByWithRelationInput | MakeupProductOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MakeupProducts.
     */
    cursor?: MakeupProductWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupProducts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupProducts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MakeupProducts.
     */
    distinct?: MakeupProductScalarFieldEnum | MakeupProductScalarFieldEnum[]
  }

  /**
   * MakeupProduct create
   */
  export type MakeupProductCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
    /**
     * The data needed to create a MakeupProduct.
     */
    data: XOR<MakeupProductCreateInput, MakeupProductUncheckedCreateInput>
  }

  /**
   * MakeupProduct createMany
   */
  export type MakeupProductCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MakeupProducts.
     */
    data: MakeupProductCreateManyInput | MakeupProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MakeupProduct createManyAndReturn
   */
  export type MakeupProductCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * The data used to create many MakeupProducts.
     */
    data: MakeupProductCreateManyInput | MakeupProductCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MakeupProduct update
   */
  export type MakeupProductUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
    /**
     * The data needed to update a MakeupProduct.
     */
    data: XOR<MakeupProductUpdateInput, MakeupProductUncheckedUpdateInput>
    /**
     * Choose, which MakeupProduct to update.
     */
    where: MakeupProductWhereUniqueInput
  }

  /**
   * MakeupProduct updateMany
   */
  export type MakeupProductUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MakeupProducts.
     */
    data: XOR<MakeupProductUpdateManyMutationInput, MakeupProductUncheckedUpdateManyInput>
    /**
     * Filter which MakeupProducts to update
     */
    where?: MakeupProductWhereInput
    /**
     * Limit how many MakeupProducts to update.
     */
    limit?: number
  }

  /**
   * MakeupProduct updateManyAndReturn
   */
  export type MakeupProductUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * The data used to update MakeupProducts.
     */
    data: XOR<MakeupProductUpdateManyMutationInput, MakeupProductUncheckedUpdateManyInput>
    /**
     * Filter which MakeupProducts to update
     */
    where?: MakeupProductWhereInput
    /**
     * Limit how many MakeupProducts to update.
     */
    limit?: number
  }

  /**
   * MakeupProduct upsert
   */
  export type MakeupProductUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
    /**
     * The filter to search for the MakeupProduct to update in case it exists.
     */
    where: MakeupProductWhereUniqueInput
    /**
     * In case the MakeupProduct found by the `where` argument doesn't exist, create a new MakeupProduct with this data.
     */
    create: XOR<MakeupProductCreateInput, MakeupProductUncheckedCreateInput>
    /**
     * In case the MakeupProduct was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MakeupProductUpdateInput, MakeupProductUncheckedUpdateInput>
  }

  /**
   * MakeupProduct delete
   */
  export type MakeupProductDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
    /**
     * Filter which MakeupProduct to delete.
     */
    where: MakeupProductWhereUniqueInput
  }

  /**
   * MakeupProduct deleteMany
   */
  export type MakeupProductDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MakeupProducts to delete
     */
    where?: MakeupProductWhereInput
    /**
     * Limit how many MakeupProducts to delete.
     */
    limit?: number
  }

  /**
   * MakeupProduct.reviews
   */
  export type MakeupProduct$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * MakeupProduct.favorites
   */
  export type MakeupProduct$favoritesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    cursor?: FavoriteWhereUniqueInput
    take?: number
    skip?: number
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * MakeupProduct without action
   */
  export type MakeupProductDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupProduct
     */
    select?: MakeupProductSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupProduct
     */
    omit?: MakeupProductOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupProductInclude<ExtArgs> | null
  }


  /**
   * Model MakeupStyle
   */

  export type AggregateMakeupStyle = {
    _count: MakeupStyleCountAggregateOutputType | null
    _min: MakeupStyleMinAggregateOutputType | null
    _max: MakeupStyleMaxAggregateOutputType | null
  }

  export type MakeupStyleMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    styleImg: string | null
  }

  export type MakeupStyleMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    styleImg: string | null
  }

  export type MakeupStyleCountAggregateOutputType = {
    id: number
    name: number
    description: number
    styleImg: number
    _all: number
  }


  export type MakeupStyleMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    styleImg?: true
  }

  export type MakeupStyleMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    styleImg?: true
  }

  export type MakeupStyleCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    styleImg?: true
    _all?: true
  }

  export type MakeupStyleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MakeupStyle to aggregate.
     */
    where?: MakeupStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupStyles to fetch.
     */
    orderBy?: MakeupStyleOrderByWithRelationInput | MakeupStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MakeupStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MakeupStyles
    **/
    _count?: true | MakeupStyleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MakeupStyleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MakeupStyleMaxAggregateInputType
  }

  export type GetMakeupStyleAggregateType<T extends MakeupStyleAggregateArgs> = {
        [P in keyof T & keyof AggregateMakeupStyle]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMakeupStyle[P]>
      : GetScalarType<T[P], AggregateMakeupStyle[P]>
  }




  export type MakeupStyleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MakeupStyleWhereInput
    orderBy?: MakeupStyleOrderByWithAggregationInput | MakeupStyleOrderByWithAggregationInput[]
    by: MakeupStyleScalarFieldEnum[] | MakeupStyleScalarFieldEnum
    having?: MakeupStyleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MakeupStyleCountAggregateInputType | true
    _min?: MakeupStyleMinAggregateInputType
    _max?: MakeupStyleMaxAggregateInputType
  }

  export type MakeupStyleGroupByOutputType = {
    id: string
    name: string
    description: string | null
    styleImg: string | null
    _count: MakeupStyleCountAggregateOutputType | null
    _min: MakeupStyleMinAggregateOutputType | null
    _max: MakeupStyleMaxAggregateOutputType | null
  }

  type GetMakeupStyleGroupByPayload<T extends MakeupStyleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MakeupStyleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MakeupStyleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MakeupStyleGroupByOutputType[P]>
            : GetScalarType<T[P], MakeupStyleGroupByOutputType[P]>
        }
      >
    >


  export type MakeupStyleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    styleImg?: boolean
    rules?: boolean | MakeupStyle$rulesArgs<ExtArgs>
    examples?: boolean | MakeupStyle$examplesArgs<ExtArgs>
    _count?: boolean | MakeupStyleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["makeupStyle"]>

  export type MakeupStyleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    styleImg?: boolean
  }, ExtArgs["result"]["makeupStyle"]>

  export type MakeupStyleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    styleImg?: boolean
  }, ExtArgs["result"]["makeupStyle"]>

  export type MakeupStyleSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    styleImg?: boolean
  }

  export type MakeupStyleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "styleImg", ExtArgs["result"]["makeupStyle"]>
  export type MakeupStyleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    rules?: boolean | MakeupStyle$rulesArgs<ExtArgs>
    examples?: boolean | MakeupStyle$examplesArgs<ExtArgs>
    _count?: boolean | MakeupStyleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MakeupStyleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type MakeupStyleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $MakeupStylePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MakeupStyle"
    objects: {
      rules: Prisma.$StyleRulePayload<ExtArgs>[]
      examples: Prisma.$MakeupExamplePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string | null
      styleImg: string | null
    }, ExtArgs["result"]["makeupStyle"]>
    composites: {}
  }

  type MakeupStyleGetPayload<S extends boolean | null | undefined | MakeupStyleDefaultArgs> = $Result.GetResult<Prisma.$MakeupStylePayload, S>

  type MakeupStyleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MakeupStyleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MakeupStyleCountAggregateInputType | true
    }

  export interface MakeupStyleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MakeupStyle'], meta: { name: 'MakeupStyle' } }
    /**
     * Find zero or one MakeupStyle that matches the filter.
     * @param {MakeupStyleFindUniqueArgs} args - Arguments to find a MakeupStyle
     * @example
     * // Get one MakeupStyle
     * const makeupStyle = await prisma.makeupStyle.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MakeupStyleFindUniqueArgs>(args: SelectSubset<T, MakeupStyleFindUniqueArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MakeupStyle that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MakeupStyleFindUniqueOrThrowArgs} args - Arguments to find a MakeupStyle
     * @example
     * // Get one MakeupStyle
     * const makeupStyle = await prisma.makeupStyle.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MakeupStyleFindUniqueOrThrowArgs>(args: SelectSubset<T, MakeupStyleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MakeupStyle that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupStyleFindFirstArgs} args - Arguments to find a MakeupStyle
     * @example
     * // Get one MakeupStyle
     * const makeupStyle = await prisma.makeupStyle.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MakeupStyleFindFirstArgs>(args?: SelectSubset<T, MakeupStyleFindFirstArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MakeupStyle that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupStyleFindFirstOrThrowArgs} args - Arguments to find a MakeupStyle
     * @example
     * // Get one MakeupStyle
     * const makeupStyle = await prisma.makeupStyle.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MakeupStyleFindFirstOrThrowArgs>(args?: SelectSubset<T, MakeupStyleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MakeupStyles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupStyleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MakeupStyles
     * const makeupStyles = await prisma.makeupStyle.findMany()
     * 
     * // Get first 10 MakeupStyles
     * const makeupStyles = await prisma.makeupStyle.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const makeupStyleWithIdOnly = await prisma.makeupStyle.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MakeupStyleFindManyArgs>(args?: SelectSubset<T, MakeupStyleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MakeupStyle.
     * @param {MakeupStyleCreateArgs} args - Arguments to create a MakeupStyle.
     * @example
     * // Create one MakeupStyle
     * const MakeupStyle = await prisma.makeupStyle.create({
     *   data: {
     *     // ... data to create a MakeupStyle
     *   }
     * })
     * 
     */
    create<T extends MakeupStyleCreateArgs>(args: SelectSubset<T, MakeupStyleCreateArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MakeupStyles.
     * @param {MakeupStyleCreateManyArgs} args - Arguments to create many MakeupStyles.
     * @example
     * // Create many MakeupStyles
     * const makeupStyle = await prisma.makeupStyle.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MakeupStyleCreateManyArgs>(args?: SelectSubset<T, MakeupStyleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MakeupStyles and returns the data saved in the database.
     * @param {MakeupStyleCreateManyAndReturnArgs} args - Arguments to create many MakeupStyles.
     * @example
     * // Create many MakeupStyles
     * const makeupStyle = await prisma.makeupStyle.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MakeupStyles and only return the `id`
     * const makeupStyleWithIdOnly = await prisma.makeupStyle.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MakeupStyleCreateManyAndReturnArgs>(args?: SelectSubset<T, MakeupStyleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MakeupStyle.
     * @param {MakeupStyleDeleteArgs} args - Arguments to delete one MakeupStyle.
     * @example
     * // Delete one MakeupStyle
     * const MakeupStyle = await prisma.makeupStyle.delete({
     *   where: {
     *     // ... filter to delete one MakeupStyle
     *   }
     * })
     * 
     */
    delete<T extends MakeupStyleDeleteArgs>(args: SelectSubset<T, MakeupStyleDeleteArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MakeupStyle.
     * @param {MakeupStyleUpdateArgs} args - Arguments to update one MakeupStyle.
     * @example
     * // Update one MakeupStyle
     * const makeupStyle = await prisma.makeupStyle.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MakeupStyleUpdateArgs>(args: SelectSubset<T, MakeupStyleUpdateArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MakeupStyles.
     * @param {MakeupStyleDeleteManyArgs} args - Arguments to filter MakeupStyles to delete.
     * @example
     * // Delete a few MakeupStyles
     * const { count } = await prisma.makeupStyle.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MakeupStyleDeleteManyArgs>(args?: SelectSubset<T, MakeupStyleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MakeupStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupStyleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MakeupStyles
     * const makeupStyle = await prisma.makeupStyle.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MakeupStyleUpdateManyArgs>(args: SelectSubset<T, MakeupStyleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MakeupStyles and returns the data updated in the database.
     * @param {MakeupStyleUpdateManyAndReturnArgs} args - Arguments to update many MakeupStyles.
     * @example
     * // Update many MakeupStyles
     * const makeupStyle = await prisma.makeupStyle.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MakeupStyles and only return the `id`
     * const makeupStyleWithIdOnly = await prisma.makeupStyle.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MakeupStyleUpdateManyAndReturnArgs>(args: SelectSubset<T, MakeupStyleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MakeupStyle.
     * @param {MakeupStyleUpsertArgs} args - Arguments to update or create a MakeupStyle.
     * @example
     * // Update or create a MakeupStyle
     * const makeupStyle = await prisma.makeupStyle.upsert({
     *   create: {
     *     // ... data to create a MakeupStyle
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MakeupStyle we want to update
     *   }
     * })
     */
    upsert<T extends MakeupStyleUpsertArgs>(args: SelectSubset<T, MakeupStyleUpsertArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MakeupStyles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupStyleCountArgs} args - Arguments to filter MakeupStyles to count.
     * @example
     * // Count the number of MakeupStyles
     * const count = await prisma.makeupStyle.count({
     *   where: {
     *     // ... the filter for the MakeupStyles we want to count
     *   }
     * })
    **/
    count<T extends MakeupStyleCountArgs>(
      args?: Subset<T, MakeupStyleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MakeupStyleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MakeupStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupStyleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MakeupStyleAggregateArgs>(args: Subset<T, MakeupStyleAggregateArgs>): Prisma.PrismaPromise<GetMakeupStyleAggregateType<T>>

    /**
     * Group by MakeupStyle.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupStyleGroupByArgs} args - Group by arguments.
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
      T extends MakeupStyleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MakeupStyleGroupByArgs['orderBy'] }
        : { orderBy?: MakeupStyleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MakeupStyleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMakeupStyleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MakeupStyle model
   */
  readonly fields: MakeupStyleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MakeupStyle.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MakeupStyleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    rules<T extends MakeupStyle$rulesArgs<ExtArgs> = {}>(args?: Subset<T, MakeupStyle$rulesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    examples<T extends MakeupStyle$examplesArgs<ExtArgs> = {}>(args?: Subset<T, MakeupStyle$examplesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MakeupStyle model
   */
  interface MakeupStyleFieldRefs {
    readonly id: FieldRef<"MakeupStyle", 'String'>
    readonly name: FieldRef<"MakeupStyle", 'String'>
    readonly description: FieldRef<"MakeupStyle", 'String'>
    readonly styleImg: FieldRef<"MakeupStyle", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MakeupStyle findUnique
   */
  export type MakeupStyleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupStyle to fetch.
     */
    where: MakeupStyleWhereUniqueInput
  }

  /**
   * MakeupStyle findUniqueOrThrow
   */
  export type MakeupStyleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupStyle to fetch.
     */
    where: MakeupStyleWhereUniqueInput
  }

  /**
   * MakeupStyle findFirst
   */
  export type MakeupStyleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupStyle to fetch.
     */
    where?: MakeupStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupStyles to fetch.
     */
    orderBy?: MakeupStyleOrderByWithRelationInput | MakeupStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MakeupStyles.
     */
    cursor?: MakeupStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MakeupStyles.
     */
    distinct?: MakeupStyleScalarFieldEnum | MakeupStyleScalarFieldEnum[]
  }

  /**
   * MakeupStyle findFirstOrThrow
   */
  export type MakeupStyleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupStyle to fetch.
     */
    where?: MakeupStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupStyles to fetch.
     */
    orderBy?: MakeupStyleOrderByWithRelationInput | MakeupStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MakeupStyles.
     */
    cursor?: MakeupStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MakeupStyles.
     */
    distinct?: MakeupStyleScalarFieldEnum | MakeupStyleScalarFieldEnum[]
  }

  /**
   * MakeupStyle findMany
   */
  export type MakeupStyleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupStyles to fetch.
     */
    where?: MakeupStyleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupStyles to fetch.
     */
    orderBy?: MakeupStyleOrderByWithRelationInput | MakeupStyleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MakeupStyles.
     */
    cursor?: MakeupStyleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupStyles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupStyles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MakeupStyles.
     */
    distinct?: MakeupStyleScalarFieldEnum | MakeupStyleScalarFieldEnum[]
  }

  /**
   * MakeupStyle create
   */
  export type MakeupStyleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
    /**
     * The data needed to create a MakeupStyle.
     */
    data: XOR<MakeupStyleCreateInput, MakeupStyleUncheckedCreateInput>
  }

  /**
   * MakeupStyle createMany
   */
  export type MakeupStyleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MakeupStyles.
     */
    data: MakeupStyleCreateManyInput | MakeupStyleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MakeupStyle createManyAndReturn
   */
  export type MakeupStyleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * The data used to create many MakeupStyles.
     */
    data: MakeupStyleCreateManyInput | MakeupStyleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MakeupStyle update
   */
  export type MakeupStyleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
    /**
     * The data needed to update a MakeupStyle.
     */
    data: XOR<MakeupStyleUpdateInput, MakeupStyleUncheckedUpdateInput>
    /**
     * Choose, which MakeupStyle to update.
     */
    where: MakeupStyleWhereUniqueInput
  }

  /**
   * MakeupStyle updateMany
   */
  export type MakeupStyleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MakeupStyles.
     */
    data: XOR<MakeupStyleUpdateManyMutationInput, MakeupStyleUncheckedUpdateManyInput>
    /**
     * Filter which MakeupStyles to update
     */
    where?: MakeupStyleWhereInput
    /**
     * Limit how many MakeupStyles to update.
     */
    limit?: number
  }

  /**
   * MakeupStyle updateManyAndReturn
   */
  export type MakeupStyleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * The data used to update MakeupStyles.
     */
    data: XOR<MakeupStyleUpdateManyMutationInput, MakeupStyleUncheckedUpdateManyInput>
    /**
     * Filter which MakeupStyles to update
     */
    where?: MakeupStyleWhereInput
    /**
     * Limit how many MakeupStyles to update.
     */
    limit?: number
  }

  /**
   * MakeupStyle upsert
   */
  export type MakeupStyleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
    /**
     * The filter to search for the MakeupStyle to update in case it exists.
     */
    where: MakeupStyleWhereUniqueInput
    /**
     * In case the MakeupStyle found by the `where` argument doesn't exist, create a new MakeupStyle with this data.
     */
    create: XOR<MakeupStyleCreateInput, MakeupStyleUncheckedCreateInput>
    /**
     * In case the MakeupStyle was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MakeupStyleUpdateInput, MakeupStyleUncheckedUpdateInput>
  }

  /**
   * MakeupStyle delete
   */
  export type MakeupStyleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
    /**
     * Filter which MakeupStyle to delete.
     */
    where: MakeupStyleWhereUniqueInput
  }

  /**
   * MakeupStyle deleteMany
   */
  export type MakeupStyleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MakeupStyles to delete
     */
    where?: MakeupStyleWhereInput
    /**
     * Limit how many MakeupStyles to delete.
     */
    limit?: number
  }

  /**
   * MakeupStyle.rules
   */
  export type MakeupStyle$rulesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    where?: StyleRuleWhereInput
    orderBy?: StyleRuleOrderByWithRelationInput | StyleRuleOrderByWithRelationInput[]
    cursor?: StyleRuleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: StyleRuleScalarFieldEnum | StyleRuleScalarFieldEnum[]
  }

  /**
   * MakeupStyle.examples
   */
  export type MakeupStyle$examplesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    where?: MakeupExampleWhereInput
    orderBy?: MakeupExampleOrderByWithRelationInput | MakeupExampleOrderByWithRelationInput[]
    cursor?: MakeupExampleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MakeupExampleScalarFieldEnum | MakeupExampleScalarFieldEnum[]
  }

  /**
   * MakeupStyle without action
   */
  export type MakeupStyleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupStyle
     */
    select?: MakeupStyleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupStyle
     */
    omit?: MakeupStyleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupStyleInclude<ExtArgs> | null
  }


  /**
   * Model StyleRule
   */

  export type AggregateStyleRule = {
    _count: StyleRuleCountAggregateOutputType | null
    _min: StyleRuleMinAggregateOutputType | null
    _max: StyleRuleMaxAggregateOutputType | null
  }

  export type StyleRuleMinAggregateOutputType = {
    id: string | null
    styleId: string | null
    productType: string | null
    tagRequirement: string | null
    colorFamily: string | null
  }

  export type StyleRuleMaxAggregateOutputType = {
    id: string | null
    styleId: string | null
    productType: string | null
    tagRequirement: string | null
    colorFamily: string | null
  }

  export type StyleRuleCountAggregateOutputType = {
    id: number
    styleId: number
    productType: number
    tagRequirement: number
    colorFamily: number
    _all: number
  }


  export type StyleRuleMinAggregateInputType = {
    id?: true
    styleId?: true
    productType?: true
    tagRequirement?: true
    colorFamily?: true
  }

  export type StyleRuleMaxAggregateInputType = {
    id?: true
    styleId?: true
    productType?: true
    tagRequirement?: true
    colorFamily?: true
  }

  export type StyleRuleCountAggregateInputType = {
    id?: true
    styleId?: true
    productType?: true
    tagRequirement?: true
    colorFamily?: true
    _all?: true
  }

  export type StyleRuleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StyleRule to aggregate.
     */
    where?: StyleRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StyleRules to fetch.
     */
    orderBy?: StyleRuleOrderByWithRelationInput | StyleRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: StyleRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StyleRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StyleRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned StyleRules
    **/
    _count?: true | StyleRuleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: StyleRuleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: StyleRuleMaxAggregateInputType
  }

  export type GetStyleRuleAggregateType<T extends StyleRuleAggregateArgs> = {
        [P in keyof T & keyof AggregateStyleRule]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateStyleRule[P]>
      : GetScalarType<T[P], AggregateStyleRule[P]>
  }




  export type StyleRuleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: StyleRuleWhereInput
    orderBy?: StyleRuleOrderByWithAggregationInput | StyleRuleOrderByWithAggregationInput[]
    by: StyleRuleScalarFieldEnum[] | StyleRuleScalarFieldEnum
    having?: StyleRuleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: StyleRuleCountAggregateInputType | true
    _min?: StyleRuleMinAggregateInputType
    _max?: StyleRuleMaxAggregateInputType
  }

  export type StyleRuleGroupByOutputType = {
    id: string
    styleId: string
    productType: string | null
    tagRequirement: string | null
    colorFamily: string | null
    _count: StyleRuleCountAggregateOutputType | null
    _min: StyleRuleMinAggregateOutputType | null
    _max: StyleRuleMaxAggregateOutputType | null
  }

  type GetStyleRuleGroupByPayload<T extends StyleRuleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<StyleRuleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof StyleRuleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], StyleRuleGroupByOutputType[P]>
            : GetScalarType<T[P], StyleRuleGroupByOutputType[P]>
        }
      >
    >


  export type StyleRuleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleId?: boolean
    productType?: boolean
    tagRequirement?: boolean
    colorFamily?: boolean
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["styleRule"]>

  export type StyleRuleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleId?: boolean
    productType?: boolean
    tagRequirement?: boolean
    colorFamily?: boolean
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["styleRule"]>

  export type StyleRuleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleId?: boolean
    productType?: boolean
    tagRequirement?: boolean
    colorFamily?: boolean
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["styleRule"]>

  export type StyleRuleSelectScalar = {
    id?: boolean
    styleId?: boolean
    productType?: boolean
    tagRequirement?: boolean
    colorFamily?: boolean
  }

  export type StyleRuleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "styleId" | "productType" | "tagRequirement" | "colorFamily", ExtArgs["result"]["styleRule"]>
  export type StyleRuleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }
  export type StyleRuleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }
  export type StyleRuleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }

  export type $StyleRulePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "StyleRule"
    objects: {
      style: Prisma.$MakeupStylePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      styleId: string
      productType: string | null
      tagRequirement: string | null
      colorFamily: string | null
    }, ExtArgs["result"]["styleRule"]>
    composites: {}
  }

  type StyleRuleGetPayload<S extends boolean | null | undefined | StyleRuleDefaultArgs> = $Result.GetResult<Prisma.$StyleRulePayload, S>

  type StyleRuleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<StyleRuleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: StyleRuleCountAggregateInputType | true
    }

  export interface StyleRuleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['StyleRule'], meta: { name: 'StyleRule' } }
    /**
     * Find zero or one StyleRule that matches the filter.
     * @param {StyleRuleFindUniqueArgs} args - Arguments to find a StyleRule
     * @example
     * // Get one StyleRule
     * const styleRule = await prisma.styleRule.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends StyleRuleFindUniqueArgs>(args: SelectSubset<T, StyleRuleFindUniqueArgs<ExtArgs>>): Prisma__StyleRuleClient<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one StyleRule that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {StyleRuleFindUniqueOrThrowArgs} args - Arguments to find a StyleRule
     * @example
     * // Get one StyleRule
     * const styleRule = await prisma.styleRule.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends StyleRuleFindUniqueOrThrowArgs>(args: SelectSubset<T, StyleRuleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__StyleRuleClient<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StyleRule that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleRuleFindFirstArgs} args - Arguments to find a StyleRule
     * @example
     * // Get one StyleRule
     * const styleRule = await prisma.styleRule.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends StyleRuleFindFirstArgs>(args?: SelectSubset<T, StyleRuleFindFirstArgs<ExtArgs>>): Prisma__StyleRuleClient<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first StyleRule that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleRuleFindFirstOrThrowArgs} args - Arguments to find a StyleRule
     * @example
     * // Get one StyleRule
     * const styleRule = await prisma.styleRule.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends StyleRuleFindFirstOrThrowArgs>(args?: SelectSubset<T, StyleRuleFindFirstOrThrowArgs<ExtArgs>>): Prisma__StyleRuleClient<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more StyleRules that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleRuleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all StyleRules
     * const styleRules = await prisma.styleRule.findMany()
     * 
     * // Get first 10 StyleRules
     * const styleRules = await prisma.styleRule.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const styleRuleWithIdOnly = await prisma.styleRule.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends StyleRuleFindManyArgs>(args?: SelectSubset<T, StyleRuleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a StyleRule.
     * @param {StyleRuleCreateArgs} args - Arguments to create a StyleRule.
     * @example
     * // Create one StyleRule
     * const StyleRule = await prisma.styleRule.create({
     *   data: {
     *     // ... data to create a StyleRule
     *   }
     * })
     * 
     */
    create<T extends StyleRuleCreateArgs>(args: SelectSubset<T, StyleRuleCreateArgs<ExtArgs>>): Prisma__StyleRuleClient<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many StyleRules.
     * @param {StyleRuleCreateManyArgs} args - Arguments to create many StyleRules.
     * @example
     * // Create many StyleRules
     * const styleRule = await prisma.styleRule.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends StyleRuleCreateManyArgs>(args?: SelectSubset<T, StyleRuleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many StyleRules and returns the data saved in the database.
     * @param {StyleRuleCreateManyAndReturnArgs} args - Arguments to create many StyleRules.
     * @example
     * // Create many StyleRules
     * const styleRule = await prisma.styleRule.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many StyleRules and only return the `id`
     * const styleRuleWithIdOnly = await prisma.styleRule.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends StyleRuleCreateManyAndReturnArgs>(args?: SelectSubset<T, StyleRuleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a StyleRule.
     * @param {StyleRuleDeleteArgs} args - Arguments to delete one StyleRule.
     * @example
     * // Delete one StyleRule
     * const StyleRule = await prisma.styleRule.delete({
     *   where: {
     *     // ... filter to delete one StyleRule
     *   }
     * })
     * 
     */
    delete<T extends StyleRuleDeleteArgs>(args: SelectSubset<T, StyleRuleDeleteArgs<ExtArgs>>): Prisma__StyleRuleClient<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one StyleRule.
     * @param {StyleRuleUpdateArgs} args - Arguments to update one StyleRule.
     * @example
     * // Update one StyleRule
     * const styleRule = await prisma.styleRule.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends StyleRuleUpdateArgs>(args: SelectSubset<T, StyleRuleUpdateArgs<ExtArgs>>): Prisma__StyleRuleClient<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more StyleRules.
     * @param {StyleRuleDeleteManyArgs} args - Arguments to filter StyleRules to delete.
     * @example
     * // Delete a few StyleRules
     * const { count } = await prisma.styleRule.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends StyleRuleDeleteManyArgs>(args?: SelectSubset<T, StyleRuleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StyleRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleRuleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many StyleRules
     * const styleRule = await prisma.styleRule.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends StyleRuleUpdateManyArgs>(args: SelectSubset<T, StyleRuleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more StyleRules and returns the data updated in the database.
     * @param {StyleRuleUpdateManyAndReturnArgs} args - Arguments to update many StyleRules.
     * @example
     * // Update many StyleRules
     * const styleRule = await prisma.styleRule.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more StyleRules and only return the `id`
     * const styleRuleWithIdOnly = await prisma.styleRule.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends StyleRuleUpdateManyAndReturnArgs>(args: SelectSubset<T, StyleRuleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one StyleRule.
     * @param {StyleRuleUpsertArgs} args - Arguments to update or create a StyleRule.
     * @example
     * // Update or create a StyleRule
     * const styleRule = await prisma.styleRule.upsert({
     *   create: {
     *     // ... data to create a StyleRule
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the StyleRule we want to update
     *   }
     * })
     */
    upsert<T extends StyleRuleUpsertArgs>(args: SelectSubset<T, StyleRuleUpsertArgs<ExtArgs>>): Prisma__StyleRuleClient<$Result.GetResult<Prisma.$StyleRulePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of StyleRules.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleRuleCountArgs} args - Arguments to filter StyleRules to count.
     * @example
     * // Count the number of StyleRules
     * const count = await prisma.styleRule.count({
     *   where: {
     *     // ... the filter for the StyleRules we want to count
     *   }
     * })
    **/
    count<T extends StyleRuleCountArgs>(
      args?: Subset<T, StyleRuleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], StyleRuleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a StyleRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleRuleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends StyleRuleAggregateArgs>(args: Subset<T, StyleRuleAggregateArgs>): Prisma.PrismaPromise<GetStyleRuleAggregateType<T>>

    /**
     * Group by StyleRule.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {StyleRuleGroupByArgs} args - Group by arguments.
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
      T extends StyleRuleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: StyleRuleGroupByArgs['orderBy'] }
        : { orderBy?: StyleRuleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, StyleRuleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetStyleRuleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the StyleRule model
   */
  readonly fields: StyleRuleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for StyleRule.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__StyleRuleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    style<T extends MakeupStyleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MakeupStyleDefaultArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the StyleRule model
   */
  interface StyleRuleFieldRefs {
    readonly id: FieldRef<"StyleRule", 'String'>
    readonly styleId: FieldRef<"StyleRule", 'String'>
    readonly productType: FieldRef<"StyleRule", 'String'>
    readonly tagRequirement: FieldRef<"StyleRule", 'String'>
    readonly colorFamily: FieldRef<"StyleRule", 'String'>
  }
    

  // Custom InputTypes
  /**
   * StyleRule findUnique
   */
  export type StyleRuleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    /**
     * Filter, which StyleRule to fetch.
     */
    where: StyleRuleWhereUniqueInput
  }

  /**
   * StyleRule findUniqueOrThrow
   */
  export type StyleRuleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    /**
     * Filter, which StyleRule to fetch.
     */
    where: StyleRuleWhereUniqueInput
  }

  /**
   * StyleRule findFirst
   */
  export type StyleRuleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    /**
     * Filter, which StyleRule to fetch.
     */
    where?: StyleRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StyleRules to fetch.
     */
    orderBy?: StyleRuleOrderByWithRelationInput | StyleRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StyleRules.
     */
    cursor?: StyleRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StyleRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StyleRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StyleRules.
     */
    distinct?: StyleRuleScalarFieldEnum | StyleRuleScalarFieldEnum[]
  }

  /**
   * StyleRule findFirstOrThrow
   */
  export type StyleRuleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    /**
     * Filter, which StyleRule to fetch.
     */
    where?: StyleRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StyleRules to fetch.
     */
    orderBy?: StyleRuleOrderByWithRelationInput | StyleRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for StyleRules.
     */
    cursor?: StyleRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StyleRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StyleRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StyleRules.
     */
    distinct?: StyleRuleScalarFieldEnum | StyleRuleScalarFieldEnum[]
  }

  /**
   * StyleRule findMany
   */
  export type StyleRuleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    /**
     * Filter, which StyleRules to fetch.
     */
    where?: StyleRuleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of StyleRules to fetch.
     */
    orderBy?: StyleRuleOrderByWithRelationInput | StyleRuleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing StyleRules.
     */
    cursor?: StyleRuleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` StyleRules from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` StyleRules.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of StyleRules.
     */
    distinct?: StyleRuleScalarFieldEnum | StyleRuleScalarFieldEnum[]
  }

  /**
   * StyleRule create
   */
  export type StyleRuleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    /**
     * The data needed to create a StyleRule.
     */
    data: XOR<StyleRuleCreateInput, StyleRuleUncheckedCreateInput>
  }

  /**
   * StyleRule createMany
   */
  export type StyleRuleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many StyleRules.
     */
    data: StyleRuleCreateManyInput | StyleRuleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * StyleRule createManyAndReturn
   */
  export type StyleRuleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * The data used to create many StyleRules.
     */
    data: StyleRuleCreateManyInput | StyleRuleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * StyleRule update
   */
  export type StyleRuleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    /**
     * The data needed to update a StyleRule.
     */
    data: XOR<StyleRuleUpdateInput, StyleRuleUncheckedUpdateInput>
    /**
     * Choose, which StyleRule to update.
     */
    where: StyleRuleWhereUniqueInput
  }

  /**
   * StyleRule updateMany
   */
  export type StyleRuleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update StyleRules.
     */
    data: XOR<StyleRuleUpdateManyMutationInput, StyleRuleUncheckedUpdateManyInput>
    /**
     * Filter which StyleRules to update
     */
    where?: StyleRuleWhereInput
    /**
     * Limit how many StyleRules to update.
     */
    limit?: number
  }

  /**
   * StyleRule updateManyAndReturn
   */
  export type StyleRuleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * The data used to update StyleRules.
     */
    data: XOR<StyleRuleUpdateManyMutationInput, StyleRuleUncheckedUpdateManyInput>
    /**
     * Filter which StyleRules to update
     */
    where?: StyleRuleWhereInput
    /**
     * Limit how many StyleRules to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * StyleRule upsert
   */
  export type StyleRuleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    /**
     * The filter to search for the StyleRule to update in case it exists.
     */
    where: StyleRuleWhereUniqueInput
    /**
     * In case the StyleRule found by the `where` argument doesn't exist, create a new StyleRule with this data.
     */
    create: XOR<StyleRuleCreateInput, StyleRuleUncheckedCreateInput>
    /**
     * In case the StyleRule was found with the provided `where` argument, update it with this data.
     */
    update: XOR<StyleRuleUpdateInput, StyleRuleUncheckedUpdateInput>
  }

  /**
   * StyleRule delete
   */
  export type StyleRuleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
    /**
     * Filter which StyleRule to delete.
     */
    where: StyleRuleWhereUniqueInput
  }

  /**
   * StyleRule deleteMany
   */
  export type StyleRuleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which StyleRules to delete
     */
    where?: StyleRuleWhereInput
    /**
     * Limit how many StyleRules to delete.
     */
    limit?: number
  }

  /**
   * StyleRule without action
   */
  export type StyleRuleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the StyleRule
     */
    select?: StyleRuleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the StyleRule
     */
    omit?: StyleRuleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: StyleRuleInclude<ExtArgs> | null
  }


  /**
   * Model MakeupExample
   */

  export type AggregateMakeupExample = {
    _count: MakeupExampleCountAggregateOutputType | null
    _min: MakeupExampleMinAggregateOutputType | null
    _max: MakeupExampleMaxAggregateOutputType | null
  }

  export type MakeupExampleMinAggregateOutputType = {
    id: string | null
    styleId: string | null
    title: string | null
    imageUrl: string | null
    tutorialTips: string | null
  }

  export type MakeupExampleMaxAggregateOutputType = {
    id: string | null
    styleId: string | null
    title: string | null
    imageUrl: string | null
    tutorialTips: string | null
  }

  export type MakeupExampleCountAggregateOutputType = {
    id: number
    styleId: number
    title: number
    imageUrl: number
    tutorialTips: number
    _all: number
  }


  export type MakeupExampleMinAggregateInputType = {
    id?: true
    styleId?: true
    title?: true
    imageUrl?: true
    tutorialTips?: true
  }

  export type MakeupExampleMaxAggregateInputType = {
    id?: true
    styleId?: true
    title?: true
    imageUrl?: true
    tutorialTips?: true
  }

  export type MakeupExampleCountAggregateInputType = {
    id?: true
    styleId?: true
    title?: true
    imageUrl?: true
    tutorialTips?: true
    _all?: true
  }

  export type MakeupExampleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MakeupExample to aggregate.
     */
    where?: MakeupExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupExamples to fetch.
     */
    orderBy?: MakeupExampleOrderByWithRelationInput | MakeupExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MakeupExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MakeupExamples
    **/
    _count?: true | MakeupExampleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MakeupExampleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MakeupExampleMaxAggregateInputType
  }

  export type GetMakeupExampleAggregateType<T extends MakeupExampleAggregateArgs> = {
        [P in keyof T & keyof AggregateMakeupExample]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMakeupExample[P]>
      : GetScalarType<T[P], AggregateMakeupExample[P]>
  }




  export type MakeupExampleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MakeupExampleWhereInput
    orderBy?: MakeupExampleOrderByWithAggregationInput | MakeupExampleOrderByWithAggregationInput[]
    by: MakeupExampleScalarFieldEnum[] | MakeupExampleScalarFieldEnum
    having?: MakeupExampleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MakeupExampleCountAggregateInputType | true
    _min?: MakeupExampleMinAggregateInputType
    _max?: MakeupExampleMaxAggregateInputType
  }

  export type MakeupExampleGroupByOutputType = {
    id: string
    styleId: string
    title: string | null
    imageUrl: string | null
    tutorialTips: string | null
    _count: MakeupExampleCountAggregateOutputType | null
    _min: MakeupExampleMinAggregateOutputType | null
    _max: MakeupExampleMaxAggregateOutputType | null
  }

  type GetMakeupExampleGroupByPayload<T extends MakeupExampleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MakeupExampleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MakeupExampleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MakeupExampleGroupByOutputType[P]>
            : GetScalarType<T[P], MakeupExampleGroupByOutputType[P]>
        }
      >
    >


  export type MakeupExampleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleId?: boolean
    title?: boolean
    imageUrl?: boolean
    tutorialTips?: boolean
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["makeupExample"]>

  export type MakeupExampleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleId?: boolean
    title?: boolean
    imageUrl?: boolean
    tutorialTips?: boolean
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["makeupExample"]>

  export type MakeupExampleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    styleId?: boolean
    title?: boolean
    imageUrl?: boolean
    tutorialTips?: boolean
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["makeupExample"]>

  export type MakeupExampleSelectScalar = {
    id?: boolean
    styleId?: boolean
    title?: boolean
    imageUrl?: boolean
    tutorialTips?: boolean
  }

  export type MakeupExampleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "styleId" | "title" | "imageUrl" | "tutorialTips", ExtArgs["result"]["makeupExample"]>
  export type MakeupExampleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }
  export type MakeupExampleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }
  export type MakeupExampleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    style?: boolean | MakeupStyleDefaultArgs<ExtArgs>
  }

  export type $MakeupExamplePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "MakeupExample"
    objects: {
      style: Prisma.$MakeupStylePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      styleId: string
      title: string | null
      imageUrl: string | null
      tutorialTips: string | null
    }, ExtArgs["result"]["makeupExample"]>
    composites: {}
  }

  type MakeupExampleGetPayload<S extends boolean | null | undefined | MakeupExampleDefaultArgs> = $Result.GetResult<Prisma.$MakeupExamplePayload, S>

  type MakeupExampleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MakeupExampleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MakeupExampleCountAggregateInputType | true
    }

  export interface MakeupExampleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MakeupExample'], meta: { name: 'MakeupExample' } }
    /**
     * Find zero or one MakeupExample that matches the filter.
     * @param {MakeupExampleFindUniqueArgs} args - Arguments to find a MakeupExample
     * @example
     * // Get one MakeupExample
     * const makeupExample = await prisma.makeupExample.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MakeupExampleFindUniqueArgs>(args: SelectSubset<T, MakeupExampleFindUniqueArgs<ExtArgs>>): Prisma__MakeupExampleClient<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one MakeupExample that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MakeupExampleFindUniqueOrThrowArgs} args - Arguments to find a MakeupExample
     * @example
     * // Get one MakeupExample
     * const makeupExample = await prisma.makeupExample.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MakeupExampleFindUniqueOrThrowArgs>(args: SelectSubset<T, MakeupExampleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MakeupExampleClient<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MakeupExample that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupExampleFindFirstArgs} args - Arguments to find a MakeupExample
     * @example
     * // Get one MakeupExample
     * const makeupExample = await prisma.makeupExample.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MakeupExampleFindFirstArgs>(args?: SelectSubset<T, MakeupExampleFindFirstArgs<ExtArgs>>): Prisma__MakeupExampleClient<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first MakeupExample that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupExampleFindFirstOrThrowArgs} args - Arguments to find a MakeupExample
     * @example
     * // Get one MakeupExample
     * const makeupExample = await prisma.makeupExample.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MakeupExampleFindFirstOrThrowArgs>(args?: SelectSubset<T, MakeupExampleFindFirstOrThrowArgs<ExtArgs>>): Prisma__MakeupExampleClient<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more MakeupExamples that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupExampleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MakeupExamples
     * const makeupExamples = await prisma.makeupExample.findMany()
     * 
     * // Get first 10 MakeupExamples
     * const makeupExamples = await prisma.makeupExample.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const makeupExampleWithIdOnly = await prisma.makeupExample.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MakeupExampleFindManyArgs>(args?: SelectSubset<T, MakeupExampleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a MakeupExample.
     * @param {MakeupExampleCreateArgs} args - Arguments to create a MakeupExample.
     * @example
     * // Create one MakeupExample
     * const MakeupExample = await prisma.makeupExample.create({
     *   data: {
     *     // ... data to create a MakeupExample
     *   }
     * })
     * 
     */
    create<T extends MakeupExampleCreateArgs>(args: SelectSubset<T, MakeupExampleCreateArgs<ExtArgs>>): Prisma__MakeupExampleClient<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many MakeupExamples.
     * @param {MakeupExampleCreateManyArgs} args - Arguments to create many MakeupExamples.
     * @example
     * // Create many MakeupExamples
     * const makeupExample = await prisma.makeupExample.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MakeupExampleCreateManyArgs>(args?: SelectSubset<T, MakeupExampleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many MakeupExamples and returns the data saved in the database.
     * @param {MakeupExampleCreateManyAndReturnArgs} args - Arguments to create many MakeupExamples.
     * @example
     * // Create many MakeupExamples
     * const makeupExample = await prisma.makeupExample.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many MakeupExamples and only return the `id`
     * const makeupExampleWithIdOnly = await prisma.makeupExample.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MakeupExampleCreateManyAndReturnArgs>(args?: SelectSubset<T, MakeupExampleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a MakeupExample.
     * @param {MakeupExampleDeleteArgs} args - Arguments to delete one MakeupExample.
     * @example
     * // Delete one MakeupExample
     * const MakeupExample = await prisma.makeupExample.delete({
     *   where: {
     *     // ... filter to delete one MakeupExample
     *   }
     * })
     * 
     */
    delete<T extends MakeupExampleDeleteArgs>(args: SelectSubset<T, MakeupExampleDeleteArgs<ExtArgs>>): Prisma__MakeupExampleClient<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one MakeupExample.
     * @param {MakeupExampleUpdateArgs} args - Arguments to update one MakeupExample.
     * @example
     * // Update one MakeupExample
     * const makeupExample = await prisma.makeupExample.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MakeupExampleUpdateArgs>(args: SelectSubset<T, MakeupExampleUpdateArgs<ExtArgs>>): Prisma__MakeupExampleClient<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more MakeupExamples.
     * @param {MakeupExampleDeleteManyArgs} args - Arguments to filter MakeupExamples to delete.
     * @example
     * // Delete a few MakeupExamples
     * const { count } = await prisma.makeupExample.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MakeupExampleDeleteManyArgs>(args?: SelectSubset<T, MakeupExampleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MakeupExamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupExampleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MakeupExamples
     * const makeupExample = await prisma.makeupExample.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MakeupExampleUpdateManyArgs>(args: SelectSubset<T, MakeupExampleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MakeupExamples and returns the data updated in the database.
     * @param {MakeupExampleUpdateManyAndReturnArgs} args - Arguments to update many MakeupExamples.
     * @example
     * // Update many MakeupExamples
     * const makeupExample = await prisma.makeupExample.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more MakeupExamples and only return the `id`
     * const makeupExampleWithIdOnly = await prisma.makeupExample.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MakeupExampleUpdateManyAndReturnArgs>(args: SelectSubset<T, MakeupExampleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one MakeupExample.
     * @param {MakeupExampleUpsertArgs} args - Arguments to update or create a MakeupExample.
     * @example
     * // Update or create a MakeupExample
     * const makeupExample = await prisma.makeupExample.upsert({
     *   create: {
     *     // ... data to create a MakeupExample
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MakeupExample we want to update
     *   }
     * })
     */
    upsert<T extends MakeupExampleUpsertArgs>(args: SelectSubset<T, MakeupExampleUpsertArgs<ExtArgs>>): Prisma__MakeupExampleClient<$Result.GetResult<Prisma.$MakeupExamplePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of MakeupExamples.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupExampleCountArgs} args - Arguments to filter MakeupExamples to count.
     * @example
     * // Count the number of MakeupExamples
     * const count = await prisma.makeupExample.count({
     *   where: {
     *     // ... the filter for the MakeupExamples we want to count
     *   }
     * })
    **/
    count<T extends MakeupExampleCountArgs>(
      args?: Subset<T, MakeupExampleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MakeupExampleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MakeupExample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupExampleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MakeupExampleAggregateArgs>(args: Subset<T, MakeupExampleAggregateArgs>): Prisma.PrismaPromise<GetMakeupExampleAggregateType<T>>

    /**
     * Group by MakeupExample.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MakeupExampleGroupByArgs} args - Group by arguments.
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
      T extends MakeupExampleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MakeupExampleGroupByArgs['orderBy'] }
        : { orderBy?: MakeupExampleGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, MakeupExampleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMakeupExampleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MakeupExample model
   */
  readonly fields: MakeupExampleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MakeupExample.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MakeupExampleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    style<T extends MakeupStyleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MakeupStyleDefaultArgs<ExtArgs>>): Prisma__MakeupStyleClient<$Result.GetResult<Prisma.$MakeupStylePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the MakeupExample model
   */
  interface MakeupExampleFieldRefs {
    readonly id: FieldRef<"MakeupExample", 'String'>
    readonly styleId: FieldRef<"MakeupExample", 'String'>
    readonly title: FieldRef<"MakeupExample", 'String'>
    readonly imageUrl: FieldRef<"MakeupExample", 'String'>
    readonly tutorialTips: FieldRef<"MakeupExample", 'String'>
  }
    

  // Custom InputTypes
  /**
   * MakeupExample findUnique
   */
  export type MakeupExampleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupExample to fetch.
     */
    where: MakeupExampleWhereUniqueInput
  }

  /**
   * MakeupExample findUniqueOrThrow
   */
  export type MakeupExampleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupExample to fetch.
     */
    where: MakeupExampleWhereUniqueInput
  }

  /**
   * MakeupExample findFirst
   */
  export type MakeupExampleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupExample to fetch.
     */
    where?: MakeupExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupExamples to fetch.
     */
    orderBy?: MakeupExampleOrderByWithRelationInput | MakeupExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MakeupExamples.
     */
    cursor?: MakeupExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MakeupExamples.
     */
    distinct?: MakeupExampleScalarFieldEnum | MakeupExampleScalarFieldEnum[]
  }

  /**
   * MakeupExample findFirstOrThrow
   */
  export type MakeupExampleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupExample to fetch.
     */
    where?: MakeupExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupExamples to fetch.
     */
    orderBy?: MakeupExampleOrderByWithRelationInput | MakeupExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MakeupExamples.
     */
    cursor?: MakeupExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MakeupExamples.
     */
    distinct?: MakeupExampleScalarFieldEnum | MakeupExampleScalarFieldEnum[]
  }

  /**
   * MakeupExample findMany
   */
  export type MakeupExampleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    /**
     * Filter, which MakeupExamples to fetch.
     */
    where?: MakeupExampleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MakeupExamples to fetch.
     */
    orderBy?: MakeupExampleOrderByWithRelationInput | MakeupExampleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MakeupExamples.
     */
    cursor?: MakeupExampleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MakeupExamples from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MakeupExamples.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MakeupExamples.
     */
    distinct?: MakeupExampleScalarFieldEnum | MakeupExampleScalarFieldEnum[]
  }

  /**
   * MakeupExample create
   */
  export type MakeupExampleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    /**
     * The data needed to create a MakeupExample.
     */
    data: XOR<MakeupExampleCreateInput, MakeupExampleUncheckedCreateInput>
  }

  /**
   * MakeupExample createMany
   */
  export type MakeupExampleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MakeupExamples.
     */
    data: MakeupExampleCreateManyInput | MakeupExampleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * MakeupExample createManyAndReturn
   */
  export type MakeupExampleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * The data used to create many MakeupExamples.
     */
    data: MakeupExampleCreateManyInput | MakeupExampleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * MakeupExample update
   */
  export type MakeupExampleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    /**
     * The data needed to update a MakeupExample.
     */
    data: XOR<MakeupExampleUpdateInput, MakeupExampleUncheckedUpdateInput>
    /**
     * Choose, which MakeupExample to update.
     */
    where: MakeupExampleWhereUniqueInput
  }

  /**
   * MakeupExample updateMany
   */
  export type MakeupExampleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MakeupExamples.
     */
    data: XOR<MakeupExampleUpdateManyMutationInput, MakeupExampleUncheckedUpdateManyInput>
    /**
     * Filter which MakeupExamples to update
     */
    where?: MakeupExampleWhereInput
    /**
     * Limit how many MakeupExamples to update.
     */
    limit?: number
  }

  /**
   * MakeupExample updateManyAndReturn
   */
  export type MakeupExampleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * The data used to update MakeupExamples.
     */
    data: XOR<MakeupExampleUpdateManyMutationInput, MakeupExampleUncheckedUpdateManyInput>
    /**
     * Filter which MakeupExamples to update
     */
    where?: MakeupExampleWhereInput
    /**
     * Limit how many MakeupExamples to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * MakeupExample upsert
   */
  export type MakeupExampleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    /**
     * The filter to search for the MakeupExample to update in case it exists.
     */
    where: MakeupExampleWhereUniqueInput
    /**
     * In case the MakeupExample found by the `where` argument doesn't exist, create a new MakeupExample with this data.
     */
    create: XOR<MakeupExampleCreateInput, MakeupExampleUncheckedCreateInput>
    /**
     * In case the MakeupExample was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MakeupExampleUpdateInput, MakeupExampleUncheckedUpdateInput>
  }

  /**
   * MakeupExample delete
   */
  export type MakeupExampleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
    /**
     * Filter which MakeupExample to delete.
     */
    where: MakeupExampleWhereUniqueInput
  }

  /**
   * MakeupExample deleteMany
   */
  export type MakeupExampleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which MakeupExamples to delete
     */
    where?: MakeupExampleWhereInput
    /**
     * Limit how many MakeupExamples to delete.
     */
    limit?: number
  }

  /**
   * MakeupExample without action
   */
  export type MakeupExampleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MakeupExample
     */
    select?: MakeupExampleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the MakeupExample
     */
    omit?: MakeupExampleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MakeupExampleInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    rating: number | null
    content: string | null
    userId: string | null
    makeupProductId: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    content: string | null
    userId: string | null
    makeupProductId: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    rating: number
    content: number
    userId: number
    makeupProductId: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    rating?: true
    content?: true
    userId?: true
    makeupProductId?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    rating?: true
    content?: true
    userId?: true
    makeupProductId?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    rating?: true
    content?: true
    userId?: true
    makeupProductId?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    rating: number | null
    content: string | null
    userId: string
    makeupProductId: string
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    content?: boolean
    userId?: boolean
    makeupProductId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    content?: boolean
    userId?: boolean
    makeupProductId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    content?: boolean
    userId?: boolean
    makeupProductId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    rating?: boolean
    content?: boolean
    userId?: boolean
    makeupProductId?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "content" | "userId" | "makeupProductId" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$MakeupProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number | null
      content: string | null
      userId: string
      makeupProductId: string
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
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
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends MakeupProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MakeupProductDefaultArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly content: FieldRef<"Review", 'String'>
    readonly userId: FieldRef<"Review", 'String'>
    readonly makeupProductId: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Favorite
   */

  export type AggregateFavorite = {
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  export type FavoriteMinAggregateOutputType = {
    id: string | null
    userId: string | null
    makeupProductId: string | null
    createdAt: Date | null
  }

  export type FavoriteMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    makeupProductId: string | null
    createdAt: Date | null
  }

  export type FavoriteCountAggregateOutputType = {
    id: number
    userId: number
    makeupProductId: number
    createdAt: number
    _all: number
  }


  export type FavoriteMinAggregateInputType = {
    id?: true
    userId?: true
    makeupProductId?: true
    createdAt?: true
  }

  export type FavoriteMaxAggregateInputType = {
    id?: true
    userId?: true
    makeupProductId?: true
    createdAt?: true
  }

  export type FavoriteCountAggregateInputType = {
    id?: true
    userId?: true
    makeupProductId?: true
    createdAt?: true
    _all?: true
  }

  export type FavoriteAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorite to aggregate.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Favorites
    **/
    _count?: true | FavoriteCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: FavoriteMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: FavoriteMaxAggregateInputType
  }

  export type GetFavoriteAggregateType<T extends FavoriteAggregateArgs> = {
        [P in keyof T & keyof AggregateFavorite]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateFavorite[P]>
      : GetScalarType<T[P], AggregateFavorite[P]>
  }




  export type FavoriteGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: FavoriteWhereInput
    orderBy?: FavoriteOrderByWithAggregationInput | FavoriteOrderByWithAggregationInput[]
    by: FavoriteScalarFieldEnum[] | FavoriteScalarFieldEnum
    having?: FavoriteScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: FavoriteCountAggregateInputType | true
    _min?: FavoriteMinAggregateInputType
    _max?: FavoriteMaxAggregateInputType
  }

  export type FavoriteGroupByOutputType = {
    id: string
    userId: string
    makeupProductId: string
    createdAt: Date
    _count: FavoriteCountAggregateOutputType | null
    _min: FavoriteMinAggregateOutputType | null
    _max: FavoriteMaxAggregateOutputType | null
  }

  type GetFavoriteGroupByPayload<T extends FavoriteGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<FavoriteGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof FavoriteGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
            : GetScalarType<T[P], FavoriteGroupByOutputType[P]>
        }
      >
    >


  export type FavoriteSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    makeupProductId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    makeupProductId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    makeupProductId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["favorite"]>

  export type FavoriteSelectScalar = {
    id?: boolean
    userId?: boolean
    makeupProductId?: boolean
    createdAt?: boolean
  }

  export type FavoriteOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "makeupProductId" | "createdAt", ExtArgs["result"]["favorite"]>
  export type FavoriteInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }
  export type FavoriteIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    product?: boolean | MakeupProductDefaultArgs<ExtArgs>
  }

  export type $FavoritePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Favorite"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      product: Prisma.$MakeupProductPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      makeupProductId: string
      createdAt: Date
    }, ExtArgs["result"]["favorite"]>
    composites: {}
  }

  type FavoriteGetPayload<S extends boolean | null | undefined | FavoriteDefaultArgs> = $Result.GetResult<Prisma.$FavoritePayload, S>

  type FavoriteCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<FavoriteFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: FavoriteCountAggregateInputType | true
    }

  export interface FavoriteDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Favorite'], meta: { name: 'Favorite' } }
    /**
     * Find zero or one Favorite that matches the filter.
     * @param {FavoriteFindUniqueArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends FavoriteFindUniqueArgs>(args: SelectSubset<T, FavoriteFindUniqueArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Favorite that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {FavoriteFindUniqueOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends FavoriteFindUniqueOrThrowArgs>(args: SelectSubset<T, FavoriteFindUniqueOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends FavoriteFindFirstArgs>(args?: SelectSubset<T, FavoriteFindFirstArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Favorite that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindFirstOrThrowArgs} args - Arguments to find a Favorite
     * @example
     * // Get one Favorite
     * const favorite = await prisma.favorite.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends FavoriteFindFirstOrThrowArgs>(args?: SelectSubset<T, FavoriteFindFirstOrThrowArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Favorites that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Favorites
     * const favorites = await prisma.favorite.findMany()
     * 
     * // Get first 10 Favorites
     * const favorites = await prisma.favorite.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const favoriteWithIdOnly = await prisma.favorite.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends FavoriteFindManyArgs>(args?: SelectSubset<T, FavoriteFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Favorite.
     * @param {FavoriteCreateArgs} args - Arguments to create a Favorite.
     * @example
     * // Create one Favorite
     * const Favorite = await prisma.favorite.create({
     *   data: {
     *     // ... data to create a Favorite
     *   }
     * })
     * 
     */
    create<T extends FavoriteCreateArgs>(args: SelectSubset<T, FavoriteCreateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Favorites.
     * @param {FavoriteCreateManyArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends FavoriteCreateManyArgs>(args?: SelectSubset<T, FavoriteCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Favorites and returns the data saved in the database.
     * @param {FavoriteCreateManyAndReturnArgs} args - Arguments to create many Favorites.
     * @example
     * // Create many Favorites
     * const favorite = await prisma.favorite.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends FavoriteCreateManyAndReturnArgs>(args?: SelectSubset<T, FavoriteCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Favorite.
     * @param {FavoriteDeleteArgs} args - Arguments to delete one Favorite.
     * @example
     * // Delete one Favorite
     * const Favorite = await prisma.favorite.delete({
     *   where: {
     *     // ... filter to delete one Favorite
     *   }
     * })
     * 
     */
    delete<T extends FavoriteDeleteArgs>(args: SelectSubset<T, FavoriteDeleteArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Favorite.
     * @param {FavoriteUpdateArgs} args - Arguments to update one Favorite.
     * @example
     * // Update one Favorite
     * const favorite = await prisma.favorite.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends FavoriteUpdateArgs>(args: SelectSubset<T, FavoriteUpdateArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Favorites.
     * @param {FavoriteDeleteManyArgs} args - Arguments to filter Favorites to delete.
     * @example
     * // Delete a few Favorites
     * const { count } = await prisma.favorite.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends FavoriteDeleteManyArgs>(args?: SelectSubset<T, FavoriteDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends FavoriteUpdateManyArgs>(args: SelectSubset<T, FavoriteUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Favorites and returns the data updated in the database.
     * @param {FavoriteUpdateManyAndReturnArgs} args - Arguments to update many Favorites.
     * @example
     * // Update many Favorites
     * const favorite = await prisma.favorite.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Favorites and only return the `id`
     * const favoriteWithIdOnly = await prisma.favorite.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends FavoriteUpdateManyAndReturnArgs>(args: SelectSubset<T, FavoriteUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Favorite.
     * @param {FavoriteUpsertArgs} args - Arguments to update or create a Favorite.
     * @example
     * // Update or create a Favorite
     * const favorite = await prisma.favorite.upsert({
     *   create: {
     *     // ... data to create a Favorite
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Favorite we want to update
     *   }
     * })
     */
    upsert<T extends FavoriteUpsertArgs>(args: SelectSubset<T, FavoriteUpsertArgs<ExtArgs>>): Prisma__FavoriteClient<$Result.GetResult<Prisma.$FavoritePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Favorites.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteCountArgs} args - Arguments to filter Favorites to count.
     * @example
     * // Count the number of Favorites
     * const count = await prisma.favorite.count({
     *   where: {
     *     // ... the filter for the Favorites we want to count
     *   }
     * })
    **/
    count<T extends FavoriteCountArgs>(
      args?: Subset<T, FavoriteCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], FavoriteCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends FavoriteAggregateArgs>(args: Subset<T, FavoriteAggregateArgs>): Prisma.PrismaPromise<GetFavoriteAggregateType<T>>

    /**
     * Group by Favorite.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {FavoriteGroupByArgs} args - Group by arguments.
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
      T extends FavoriteGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: FavoriteGroupByArgs['orderBy'] }
        : { orderBy?: FavoriteGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
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
    >(args: SubsetIntersection<T, FavoriteGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetFavoriteGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Favorite model
   */
  readonly fields: FavoriteFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Favorite.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__FavoriteClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    product<T extends MakeupProductDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MakeupProductDefaultArgs<ExtArgs>>): Prisma__MakeupProductClient<$Result.GetResult<Prisma.$MakeupProductPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Favorite model
   */
  interface FavoriteFieldRefs {
    readonly id: FieldRef<"Favorite", 'String'>
    readonly userId: FieldRef<"Favorite", 'String'>
    readonly makeupProductId: FieldRef<"Favorite", 'String'>
    readonly createdAt: FieldRef<"Favorite", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Favorite findUnique
   */
  export type FavoriteFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findUniqueOrThrow
   */
  export type FavoriteFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite findFirst
   */
  export type FavoriteFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findFirstOrThrow
   */
  export type FavoriteFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorite to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite findMany
   */
  export type FavoriteFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter, which Favorites to fetch.
     */
    where?: FavoriteWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Favorites to fetch.
     */
    orderBy?: FavoriteOrderByWithRelationInput | FavoriteOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Favorites.
     */
    cursor?: FavoriteWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Favorites from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Favorites.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Favorites.
     */
    distinct?: FavoriteScalarFieldEnum | FavoriteScalarFieldEnum[]
  }

  /**
   * Favorite create
   */
  export type FavoriteCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to create a Favorite.
     */
    data: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
  }

  /**
   * Favorite createMany
   */
  export type FavoriteCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Favorite createManyAndReturn
   */
  export type FavoriteCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to create many Favorites.
     */
    data: FavoriteCreateManyInput | FavoriteCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite update
   */
  export type FavoriteUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The data needed to update a Favorite.
     */
    data: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
    /**
     * Choose, which Favorite to update.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite updateMany
   */
  export type FavoriteUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
  }

  /**
   * Favorite updateManyAndReturn
   */
  export type FavoriteUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * The data used to update Favorites.
     */
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyInput>
    /**
     * Filter which Favorites to update
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Favorite upsert
   */
  export type FavoriteUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * The filter to search for the Favorite to update in case it exists.
     */
    where: FavoriteWhereUniqueInput
    /**
     * In case the Favorite found by the `where` argument doesn't exist, create a new Favorite with this data.
     */
    create: XOR<FavoriteCreateInput, FavoriteUncheckedCreateInput>
    /**
     * In case the Favorite was found with the provided `where` argument, update it with this data.
     */
    update: XOR<FavoriteUpdateInput, FavoriteUncheckedUpdateInput>
  }

  /**
   * Favorite delete
   */
  export type FavoriteDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
    /**
     * Filter which Favorite to delete.
     */
    where: FavoriteWhereUniqueInput
  }

  /**
   * Favorite deleteMany
   */
  export type FavoriteDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Favorites to delete
     */
    where?: FavoriteWhereInput
    /**
     * Limit how many Favorites to delete.
     */
    limit?: number
  }

  /**
   * Favorite without action
   */
  export type FavoriteDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Favorite
     */
    select?: FavoriteSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Favorite
     */
    omit?: FavoriteOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: FavoriteInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    username: 'username',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const MakeupProductScalarFieldEnum: {
    id: 'id',
    externalId: 'externalId',
    name: 'name',
    imgUrl: 'imgUrl'
  };

  export type MakeupProductScalarFieldEnum = (typeof MakeupProductScalarFieldEnum)[keyof typeof MakeupProductScalarFieldEnum]


  export const MakeupStyleScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    styleImg: 'styleImg'
  };

  export type MakeupStyleScalarFieldEnum = (typeof MakeupStyleScalarFieldEnum)[keyof typeof MakeupStyleScalarFieldEnum]


  export const StyleRuleScalarFieldEnum: {
    id: 'id',
    styleId: 'styleId',
    productType: 'productType',
    tagRequirement: 'tagRequirement',
    colorFamily: 'colorFamily'
  };

  export type StyleRuleScalarFieldEnum = (typeof StyleRuleScalarFieldEnum)[keyof typeof StyleRuleScalarFieldEnum]


  export const MakeupExampleScalarFieldEnum: {
    id: 'id',
    styleId: 'styleId',
    title: 'title',
    imageUrl: 'imageUrl',
    tutorialTips: 'tutorialTips'
  };

  export type MakeupExampleScalarFieldEnum = (typeof MakeupExampleScalarFieldEnum)[keyof typeof MakeupExampleScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    content: 'content',
    userId: 'userId',
    makeupProductId: 'makeupProductId',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const FavoriteScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    makeupProductId: 'makeupProductId',
    createdAt: 'createdAt'
  };

  export type FavoriteScalarFieldEnum = (typeof FavoriteScalarFieldEnum)[keyof typeof FavoriteScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: UuidFilter<"User"> | string
    username?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    username?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    reviews?: ReviewListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"User"> | string
    username?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type MakeupProductWhereInput = {
    AND?: MakeupProductWhereInput | MakeupProductWhereInput[]
    OR?: MakeupProductWhereInput[]
    NOT?: MakeupProductWhereInput | MakeupProductWhereInput[]
    id?: UuidFilter<"MakeupProduct"> | string
    externalId?: IntFilter<"MakeupProduct"> | number
    name?: StringNullableFilter<"MakeupProduct"> | string | null
    imgUrl?: StringNullableFilter<"MakeupProduct"> | string | null
    reviews?: ReviewListRelationFilter
    favorites?: FavoriteListRelationFilter
  }

  export type MakeupProductOrderByWithRelationInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrderInput | SortOrder
    imgUrl?: SortOrderInput | SortOrder
    reviews?: ReviewOrderByRelationAggregateInput
    favorites?: FavoriteOrderByRelationAggregateInput
  }

  export type MakeupProductWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    externalId?: number
    AND?: MakeupProductWhereInput | MakeupProductWhereInput[]
    OR?: MakeupProductWhereInput[]
    NOT?: MakeupProductWhereInput | MakeupProductWhereInput[]
    name?: StringNullableFilter<"MakeupProduct"> | string | null
    imgUrl?: StringNullableFilter<"MakeupProduct"> | string | null
    reviews?: ReviewListRelationFilter
    favorites?: FavoriteListRelationFilter
  }, "id" | "externalId">

  export type MakeupProductOrderByWithAggregationInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrderInput | SortOrder
    imgUrl?: SortOrderInput | SortOrder
    _count?: MakeupProductCountOrderByAggregateInput
    _avg?: MakeupProductAvgOrderByAggregateInput
    _max?: MakeupProductMaxOrderByAggregateInput
    _min?: MakeupProductMinOrderByAggregateInput
    _sum?: MakeupProductSumOrderByAggregateInput
  }

  export type MakeupProductScalarWhereWithAggregatesInput = {
    AND?: MakeupProductScalarWhereWithAggregatesInput | MakeupProductScalarWhereWithAggregatesInput[]
    OR?: MakeupProductScalarWhereWithAggregatesInput[]
    NOT?: MakeupProductScalarWhereWithAggregatesInput | MakeupProductScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MakeupProduct"> | string
    externalId?: IntWithAggregatesFilter<"MakeupProduct"> | number
    name?: StringNullableWithAggregatesFilter<"MakeupProduct"> | string | null
    imgUrl?: StringNullableWithAggregatesFilter<"MakeupProduct"> | string | null
  }

  export type MakeupStyleWhereInput = {
    AND?: MakeupStyleWhereInput | MakeupStyleWhereInput[]
    OR?: MakeupStyleWhereInput[]
    NOT?: MakeupStyleWhereInput | MakeupStyleWhereInput[]
    id?: UuidFilter<"MakeupStyle"> | string
    name?: StringFilter<"MakeupStyle"> | string
    description?: StringNullableFilter<"MakeupStyle"> | string | null
    styleImg?: StringNullableFilter<"MakeupStyle"> | string | null
    rules?: StyleRuleListRelationFilter
    examples?: MakeupExampleListRelationFilter
  }

  export type MakeupStyleOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    styleImg?: SortOrderInput | SortOrder
    rules?: StyleRuleOrderByRelationAggregateInput
    examples?: MakeupExampleOrderByRelationAggregateInput
  }

  export type MakeupStyleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MakeupStyleWhereInput | MakeupStyleWhereInput[]
    OR?: MakeupStyleWhereInput[]
    NOT?: MakeupStyleWhereInput | MakeupStyleWhereInput[]
    name?: StringFilter<"MakeupStyle"> | string
    description?: StringNullableFilter<"MakeupStyle"> | string | null
    styleImg?: StringNullableFilter<"MakeupStyle"> | string | null
    rules?: StyleRuleListRelationFilter
    examples?: MakeupExampleListRelationFilter
  }, "id">

  export type MakeupStyleOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    styleImg?: SortOrderInput | SortOrder
    _count?: MakeupStyleCountOrderByAggregateInput
    _max?: MakeupStyleMaxOrderByAggregateInput
    _min?: MakeupStyleMinOrderByAggregateInput
  }

  export type MakeupStyleScalarWhereWithAggregatesInput = {
    AND?: MakeupStyleScalarWhereWithAggregatesInput | MakeupStyleScalarWhereWithAggregatesInput[]
    OR?: MakeupStyleScalarWhereWithAggregatesInput[]
    NOT?: MakeupStyleScalarWhereWithAggregatesInput | MakeupStyleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MakeupStyle"> | string
    name?: StringWithAggregatesFilter<"MakeupStyle"> | string
    description?: StringNullableWithAggregatesFilter<"MakeupStyle"> | string | null
    styleImg?: StringNullableWithAggregatesFilter<"MakeupStyle"> | string | null
  }

  export type StyleRuleWhereInput = {
    AND?: StyleRuleWhereInput | StyleRuleWhereInput[]
    OR?: StyleRuleWhereInput[]
    NOT?: StyleRuleWhereInput | StyleRuleWhereInput[]
    id?: UuidFilter<"StyleRule"> | string
    styleId?: UuidFilter<"StyleRule"> | string
    productType?: StringNullableFilter<"StyleRule"> | string | null
    tagRequirement?: StringNullableFilter<"StyleRule"> | string | null
    colorFamily?: StringNullableFilter<"StyleRule"> | string | null
    style?: XOR<MakeupStyleScalarRelationFilter, MakeupStyleWhereInput>
  }

  export type StyleRuleOrderByWithRelationInput = {
    id?: SortOrder
    styleId?: SortOrder
    productType?: SortOrderInput | SortOrder
    tagRequirement?: SortOrderInput | SortOrder
    colorFamily?: SortOrderInput | SortOrder
    style?: MakeupStyleOrderByWithRelationInput
  }

  export type StyleRuleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: StyleRuleWhereInput | StyleRuleWhereInput[]
    OR?: StyleRuleWhereInput[]
    NOT?: StyleRuleWhereInput | StyleRuleWhereInput[]
    styleId?: UuidFilter<"StyleRule"> | string
    productType?: StringNullableFilter<"StyleRule"> | string | null
    tagRequirement?: StringNullableFilter<"StyleRule"> | string | null
    colorFamily?: StringNullableFilter<"StyleRule"> | string | null
    style?: XOR<MakeupStyleScalarRelationFilter, MakeupStyleWhereInput>
  }, "id">

  export type StyleRuleOrderByWithAggregationInput = {
    id?: SortOrder
    styleId?: SortOrder
    productType?: SortOrderInput | SortOrder
    tagRequirement?: SortOrderInput | SortOrder
    colorFamily?: SortOrderInput | SortOrder
    _count?: StyleRuleCountOrderByAggregateInput
    _max?: StyleRuleMaxOrderByAggregateInput
    _min?: StyleRuleMinOrderByAggregateInput
  }

  export type StyleRuleScalarWhereWithAggregatesInput = {
    AND?: StyleRuleScalarWhereWithAggregatesInput | StyleRuleScalarWhereWithAggregatesInput[]
    OR?: StyleRuleScalarWhereWithAggregatesInput[]
    NOT?: StyleRuleScalarWhereWithAggregatesInput | StyleRuleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"StyleRule"> | string
    styleId?: UuidWithAggregatesFilter<"StyleRule"> | string
    productType?: StringNullableWithAggregatesFilter<"StyleRule"> | string | null
    tagRequirement?: StringNullableWithAggregatesFilter<"StyleRule"> | string | null
    colorFamily?: StringNullableWithAggregatesFilter<"StyleRule"> | string | null
  }

  export type MakeupExampleWhereInput = {
    AND?: MakeupExampleWhereInput | MakeupExampleWhereInput[]
    OR?: MakeupExampleWhereInput[]
    NOT?: MakeupExampleWhereInput | MakeupExampleWhereInput[]
    id?: UuidFilter<"MakeupExample"> | string
    styleId?: UuidFilter<"MakeupExample"> | string
    title?: StringNullableFilter<"MakeupExample"> | string | null
    imageUrl?: StringNullableFilter<"MakeupExample"> | string | null
    tutorialTips?: StringNullableFilter<"MakeupExample"> | string | null
    style?: XOR<MakeupStyleScalarRelationFilter, MakeupStyleWhereInput>
  }

  export type MakeupExampleOrderByWithRelationInput = {
    id?: SortOrder
    styleId?: SortOrder
    title?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tutorialTips?: SortOrderInput | SortOrder
    style?: MakeupStyleOrderByWithRelationInput
  }

  export type MakeupExampleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MakeupExampleWhereInput | MakeupExampleWhereInput[]
    OR?: MakeupExampleWhereInput[]
    NOT?: MakeupExampleWhereInput | MakeupExampleWhereInput[]
    styleId?: UuidFilter<"MakeupExample"> | string
    title?: StringNullableFilter<"MakeupExample"> | string | null
    imageUrl?: StringNullableFilter<"MakeupExample"> | string | null
    tutorialTips?: StringNullableFilter<"MakeupExample"> | string | null
    style?: XOR<MakeupStyleScalarRelationFilter, MakeupStyleWhereInput>
  }, "id">

  export type MakeupExampleOrderByWithAggregationInput = {
    id?: SortOrder
    styleId?: SortOrder
    title?: SortOrderInput | SortOrder
    imageUrl?: SortOrderInput | SortOrder
    tutorialTips?: SortOrderInput | SortOrder
    _count?: MakeupExampleCountOrderByAggregateInput
    _max?: MakeupExampleMaxOrderByAggregateInput
    _min?: MakeupExampleMinOrderByAggregateInput
  }

  export type MakeupExampleScalarWhereWithAggregatesInput = {
    AND?: MakeupExampleScalarWhereWithAggregatesInput | MakeupExampleScalarWhereWithAggregatesInput[]
    OR?: MakeupExampleScalarWhereWithAggregatesInput[]
    NOT?: MakeupExampleScalarWhereWithAggregatesInput | MakeupExampleScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"MakeupExample"> | string
    styleId?: UuidWithAggregatesFilter<"MakeupExample"> | string
    title?: StringNullableWithAggregatesFilter<"MakeupExample"> | string | null
    imageUrl?: StringNullableWithAggregatesFilter<"MakeupExample"> | string | null
    tutorialTips?: StringNullableWithAggregatesFilter<"MakeupExample"> | string | null
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: UuidFilter<"Review"> | string
    rating?: IntNullableFilter<"Review"> | number | null
    content?: StringNullableFilter<"Review"> | string | null
    userId?: UuidFilter<"Review"> | string
    makeupProductId?: UuidFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<MakeupProductScalarRelationFilter, MakeupProductWhereInput>
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: MakeupProductOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    rating?: IntNullableFilter<"Review"> | number | null
    content?: StringNullableFilter<"Review"> | string | null
    userId?: UuidFilter<"Review"> | string
    makeupProductId?: UuidFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<MakeupProductScalarRelationFilter, MakeupProductWhereInput>
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrderInput | SortOrder
    content?: SortOrderInput | SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Review"> | string
    rating?: IntNullableWithAggregatesFilter<"Review"> | number | null
    content?: StringNullableWithAggregatesFilter<"Review"> | string | null
    userId?: UuidWithAggregatesFilter<"Review"> | string
    makeupProductId?: UuidWithAggregatesFilter<"Review"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type FavoriteWhereInput = {
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    id?: UuidFilter<"Favorite"> | string
    userId?: UuidFilter<"Favorite"> | string
    makeupProductId?: UuidFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<MakeupProductScalarRelationFilter, MakeupProductWhereInput>
  }

  export type FavoriteOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    product?: MakeupProductOrderByWithRelationInput
  }

  export type FavoriteWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    unique_user_favorite?: FavoriteUnique_user_favoriteCompoundUniqueInput
    AND?: FavoriteWhereInput | FavoriteWhereInput[]
    OR?: FavoriteWhereInput[]
    NOT?: FavoriteWhereInput | FavoriteWhereInput[]
    userId?: UuidFilter<"Favorite"> | string
    makeupProductId?: UuidFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    product?: XOR<MakeupProductScalarRelationFilter, MakeupProductWhereInput>
  }, "id" | "unique_user_favorite">

  export type FavoriteOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
    _count?: FavoriteCountOrderByAggregateInput
    _max?: FavoriteMaxOrderByAggregateInput
    _min?: FavoriteMinOrderByAggregateInput
  }

  export type FavoriteScalarWhereWithAggregatesInput = {
    AND?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    OR?: FavoriteScalarWhereWithAggregatesInput[]
    NOT?: FavoriteScalarWhereWithAggregatesInput | FavoriteScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Favorite"> | string
    userId?: UuidWithAggregatesFilter<"Favorite"> | string
    makeupProductId?: UuidWithAggregatesFilter<"Favorite"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Favorite"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MakeupProductCreateInput = {
    id?: string
    externalId: number
    name?: string | null
    imgUrl?: string | null
    reviews?: ReviewCreateNestedManyWithoutProductInput
    favorites?: FavoriteCreateNestedManyWithoutProductInput
  }

  export type MakeupProductUncheckedCreateInput = {
    id?: string
    externalId: number
    name?: string | null
    imgUrl?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
    favorites?: FavoriteUncheckedCreateNestedManyWithoutProductInput
  }

  export type MakeupProductUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUpdateManyWithoutProductNestedInput
    favorites?: FavoriteUpdateManyWithoutProductNestedInput
  }

  export type MakeupProductUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
    favorites?: FavoriteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type MakeupProductCreateManyInput = {
    id?: string
    externalId: number
    name?: string | null
    imgUrl?: string | null
  }

  export type MakeupProductUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeupProductUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeupStyleCreateInput = {
    id?: string
    name: string
    description?: string | null
    styleImg?: string | null
    rules?: StyleRuleCreateNestedManyWithoutStyleInput
    examples?: MakeupExampleCreateNestedManyWithoutStyleInput
  }

  export type MakeupStyleUncheckedCreateInput = {
    id?: string
    name: string
    description?: string | null
    styleImg?: string | null
    rules?: StyleRuleUncheckedCreateNestedManyWithoutStyleInput
    examples?: MakeupExampleUncheckedCreateNestedManyWithoutStyleInput
  }

  export type MakeupStyleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    styleImg?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: StyleRuleUpdateManyWithoutStyleNestedInput
    examples?: MakeupExampleUpdateManyWithoutStyleNestedInput
  }

  export type MakeupStyleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    styleImg?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: StyleRuleUncheckedUpdateManyWithoutStyleNestedInput
    examples?: MakeupExampleUncheckedUpdateManyWithoutStyleNestedInput
  }

  export type MakeupStyleCreateManyInput = {
    id?: string
    name: string
    description?: string | null
    styleImg?: string | null
  }

  export type MakeupStyleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    styleImg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeupStyleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    styleImg?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StyleRuleCreateInput = {
    id?: string
    productType?: string | null
    tagRequirement?: string | null
    colorFamily?: string | null
    style: MakeupStyleCreateNestedOneWithoutRulesInput
  }

  export type StyleRuleUncheckedCreateInput = {
    id?: string
    styleId: string
    productType?: string | null
    tagRequirement?: string | null
    colorFamily?: string | null
  }

  export type StyleRuleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    colorFamily?: NullableStringFieldUpdateOperationsInput | string | null
    style?: MakeupStyleUpdateOneRequiredWithoutRulesNestedInput
  }

  export type StyleRuleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    styleId?: StringFieldUpdateOperationsInput | string
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    colorFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StyleRuleCreateManyInput = {
    id?: string
    styleId: string
    productType?: string | null
    tagRequirement?: string | null
    colorFamily?: string | null
  }

  export type StyleRuleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    colorFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StyleRuleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    styleId?: StringFieldUpdateOperationsInput | string
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    colorFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeupExampleCreateInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    tutorialTips?: string | null
    style: MakeupStyleCreateNestedOneWithoutExamplesInput
  }

  export type MakeupExampleUncheckedCreateInput = {
    id?: string
    styleId: string
    title?: string | null
    imageUrl?: string | null
    tutorialTips?: string | null
  }

  export type MakeupExampleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialTips?: NullableStringFieldUpdateOperationsInput | string | null
    style?: MakeupStyleUpdateOneRequiredWithoutExamplesNestedInput
  }

  export type MakeupExampleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    styleId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialTips?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeupExampleCreateManyInput = {
    id?: string
    styleId: string
    title?: string | null
    imageUrl?: string | null
    tutorialTips?: string | null
  }

  export type MakeupExampleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialTips?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeupExampleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    styleId?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialTips?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type ReviewCreateInput = {
    id?: string
    rating?: number | null
    content?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
    product: MakeupProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    rating?: number | null
    content?: string | null
    userId: string
    makeupProductId: string
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
    product?: MakeupProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    makeupProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    rating?: number | null
    content?: string | null
    userId: string
    makeupProductId: string
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    makeupProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
    product: MakeupProductCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateInput = {
    id?: string
    userId: string
    makeupProductId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
    product?: MakeupProductUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    makeupProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteCreateManyInput = {
    id?: string
    userId: string
    makeupProductId: string
    createdAt?: Date | string
  }

  export type FavoriteUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    makeupProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type FavoriteListRelationFilter = {
    every?: FavoriteWhereInput
    some?: FavoriteWhereInput
    none?: FavoriteWhereInput
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type FavoriteOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    username?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MakeupProductCountOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
  }

  export type MakeupProductAvgOrderByAggregateInput = {
    externalId?: SortOrder
  }

  export type MakeupProductMaxOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
  }

  export type MakeupProductMinOrderByAggregateInput = {
    id?: SortOrder
    externalId?: SortOrder
    name?: SortOrder
    imgUrl?: SortOrder
  }

  export type MakeupProductSumOrderByAggregateInput = {
    externalId?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type StyleRuleListRelationFilter = {
    every?: StyleRuleWhereInput
    some?: StyleRuleWhereInput
    none?: StyleRuleWhereInput
  }

  export type MakeupExampleListRelationFilter = {
    every?: MakeupExampleWhereInput
    some?: MakeupExampleWhereInput
    none?: MakeupExampleWhereInput
  }

  export type StyleRuleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MakeupExampleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MakeupStyleCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    styleImg?: SortOrder
  }

  export type MakeupStyleMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    styleImg?: SortOrder
  }

  export type MakeupStyleMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    styleImg?: SortOrder
  }

  export type MakeupStyleScalarRelationFilter = {
    is?: MakeupStyleWhereInput
    isNot?: MakeupStyleWhereInput
  }

  export type StyleRuleCountOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    productType?: SortOrder
    tagRequirement?: SortOrder
    colorFamily?: SortOrder
  }

  export type StyleRuleMaxOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    productType?: SortOrder
    tagRequirement?: SortOrder
    colorFamily?: SortOrder
  }

  export type StyleRuleMinOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    productType?: SortOrder
    tagRequirement?: SortOrder
    colorFamily?: SortOrder
  }

  export type MakeupExampleCountOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    tutorialTips?: SortOrder
  }

  export type MakeupExampleMaxOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    tutorialTips?: SortOrder
  }

  export type MakeupExampleMinOrderByAggregateInput = {
    id?: SortOrder
    styleId?: SortOrder
    title?: SortOrder
    imageUrl?: SortOrder
    tutorialTips?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type MakeupProductScalarRelationFilter = {
    is?: MakeupProductWhereInput
    isNot?: MakeupProductWhereInput
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    content?: SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type FavoriteUnique_user_favoriteCompoundUniqueInput = {
    userId: string
    makeupProductId: string
  }

  export type FavoriteCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
  }

  export type FavoriteMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    makeupProductId?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type ReviewUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput> | ReviewCreateWithoutUserInput[] | ReviewUncheckedCreateWithoutUserInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutUserInput | ReviewCreateOrConnectWithoutUserInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutUserInput | ReviewUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: ReviewCreateManyUserInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutUserInput | ReviewUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutUserInput | ReviewUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput> | FavoriteCreateWithoutUserInput[] | FavoriteUncheckedCreateWithoutUserInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutUserInput | FavoriteCreateOrConnectWithoutUserInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutUserInput | FavoriteUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: FavoriteCreateManyUserInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutUserInput | FavoriteUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutUserInput | FavoriteUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ReviewCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FavoriteCreateNestedManyWithoutProductInput = {
    create?: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput> | FavoriteCreateWithoutProductInput[] | FavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutProductInput | FavoriteCreateOrConnectWithoutProductInput[]
    createMany?: FavoriteCreateManyProductInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type FavoriteUncheckedCreateNestedManyWithoutProductInput = {
    create?: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput> | FavoriteCreateWithoutProductInput[] | FavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutProductInput | FavoriteCreateOrConnectWithoutProductInput[]
    createMany?: FavoriteCreateManyProductInputEnvelope
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ReviewUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FavoriteUpdateManyWithoutProductNestedInput = {
    create?: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput> | FavoriteCreateWithoutProductInput[] | FavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutProductInput | FavoriteCreateOrConnectWithoutProductInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutProductInput | FavoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FavoriteCreateManyProductInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutProductInput | FavoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutProductInput | FavoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput> | ReviewCreateWithoutProductInput[] | ReviewUncheckedCreateWithoutProductInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutProductInput | ReviewCreateOrConnectWithoutProductInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutProductInput | ReviewUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: ReviewCreateManyProductInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutProductInput | ReviewUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutProductInput | ReviewUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type FavoriteUncheckedUpdateManyWithoutProductNestedInput = {
    create?: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput> | FavoriteCreateWithoutProductInput[] | FavoriteUncheckedCreateWithoutProductInput[]
    connectOrCreate?: FavoriteCreateOrConnectWithoutProductInput | FavoriteCreateOrConnectWithoutProductInput[]
    upsert?: FavoriteUpsertWithWhereUniqueWithoutProductInput | FavoriteUpsertWithWhereUniqueWithoutProductInput[]
    createMany?: FavoriteCreateManyProductInputEnvelope
    set?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    disconnect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    delete?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    connect?: FavoriteWhereUniqueInput | FavoriteWhereUniqueInput[]
    update?: FavoriteUpdateWithWhereUniqueWithoutProductInput | FavoriteUpdateWithWhereUniqueWithoutProductInput[]
    updateMany?: FavoriteUpdateManyWithWhereWithoutProductInput | FavoriteUpdateManyWithWhereWithoutProductInput[]
    deleteMany?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
  }

  export type StyleRuleCreateNestedManyWithoutStyleInput = {
    create?: XOR<StyleRuleCreateWithoutStyleInput, StyleRuleUncheckedCreateWithoutStyleInput> | StyleRuleCreateWithoutStyleInput[] | StyleRuleUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: StyleRuleCreateOrConnectWithoutStyleInput | StyleRuleCreateOrConnectWithoutStyleInput[]
    createMany?: StyleRuleCreateManyStyleInputEnvelope
    connect?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
  }

  export type MakeupExampleCreateNestedManyWithoutStyleInput = {
    create?: XOR<MakeupExampleCreateWithoutStyleInput, MakeupExampleUncheckedCreateWithoutStyleInput> | MakeupExampleCreateWithoutStyleInput[] | MakeupExampleUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: MakeupExampleCreateOrConnectWithoutStyleInput | MakeupExampleCreateOrConnectWithoutStyleInput[]
    createMany?: MakeupExampleCreateManyStyleInputEnvelope
    connect?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
  }

  export type StyleRuleUncheckedCreateNestedManyWithoutStyleInput = {
    create?: XOR<StyleRuleCreateWithoutStyleInput, StyleRuleUncheckedCreateWithoutStyleInput> | StyleRuleCreateWithoutStyleInput[] | StyleRuleUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: StyleRuleCreateOrConnectWithoutStyleInput | StyleRuleCreateOrConnectWithoutStyleInput[]
    createMany?: StyleRuleCreateManyStyleInputEnvelope
    connect?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
  }

  export type MakeupExampleUncheckedCreateNestedManyWithoutStyleInput = {
    create?: XOR<MakeupExampleCreateWithoutStyleInput, MakeupExampleUncheckedCreateWithoutStyleInput> | MakeupExampleCreateWithoutStyleInput[] | MakeupExampleUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: MakeupExampleCreateOrConnectWithoutStyleInput | MakeupExampleCreateOrConnectWithoutStyleInput[]
    createMany?: MakeupExampleCreateManyStyleInputEnvelope
    connect?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
  }

  export type StyleRuleUpdateManyWithoutStyleNestedInput = {
    create?: XOR<StyleRuleCreateWithoutStyleInput, StyleRuleUncheckedCreateWithoutStyleInput> | StyleRuleCreateWithoutStyleInput[] | StyleRuleUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: StyleRuleCreateOrConnectWithoutStyleInput | StyleRuleCreateOrConnectWithoutStyleInput[]
    upsert?: StyleRuleUpsertWithWhereUniqueWithoutStyleInput | StyleRuleUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: StyleRuleCreateManyStyleInputEnvelope
    set?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
    disconnect?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
    delete?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
    connect?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
    update?: StyleRuleUpdateWithWhereUniqueWithoutStyleInput | StyleRuleUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: StyleRuleUpdateManyWithWhereWithoutStyleInput | StyleRuleUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: StyleRuleScalarWhereInput | StyleRuleScalarWhereInput[]
  }

  export type MakeupExampleUpdateManyWithoutStyleNestedInput = {
    create?: XOR<MakeupExampleCreateWithoutStyleInput, MakeupExampleUncheckedCreateWithoutStyleInput> | MakeupExampleCreateWithoutStyleInput[] | MakeupExampleUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: MakeupExampleCreateOrConnectWithoutStyleInput | MakeupExampleCreateOrConnectWithoutStyleInput[]
    upsert?: MakeupExampleUpsertWithWhereUniqueWithoutStyleInput | MakeupExampleUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: MakeupExampleCreateManyStyleInputEnvelope
    set?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
    disconnect?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
    delete?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
    connect?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
    update?: MakeupExampleUpdateWithWhereUniqueWithoutStyleInput | MakeupExampleUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: MakeupExampleUpdateManyWithWhereWithoutStyleInput | MakeupExampleUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: MakeupExampleScalarWhereInput | MakeupExampleScalarWhereInput[]
  }

  export type StyleRuleUncheckedUpdateManyWithoutStyleNestedInput = {
    create?: XOR<StyleRuleCreateWithoutStyleInput, StyleRuleUncheckedCreateWithoutStyleInput> | StyleRuleCreateWithoutStyleInput[] | StyleRuleUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: StyleRuleCreateOrConnectWithoutStyleInput | StyleRuleCreateOrConnectWithoutStyleInput[]
    upsert?: StyleRuleUpsertWithWhereUniqueWithoutStyleInput | StyleRuleUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: StyleRuleCreateManyStyleInputEnvelope
    set?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
    disconnect?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
    delete?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
    connect?: StyleRuleWhereUniqueInput | StyleRuleWhereUniqueInput[]
    update?: StyleRuleUpdateWithWhereUniqueWithoutStyleInput | StyleRuleUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: StyleRuleUpdateManyWithWhereWithoutStyleInput | StyleRuleUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: StyleRuleScalarWhereInput | StyleRuleScalarWhereInput[]
  }

  export type MakeupExampleUncheckedUpdateManyWithoutStyleNestedInput = {
    create?: XOR<MakeupExampleCreateWithoutStyleInput, MakeupExampleUncheckedCreateWithoutStyleInput> | MakeupExampleCreateWithoutStyleInput[] | MakeupExampleUncheckedCreateWithoutStyleInput[]
    connectOrCreate?: MakeupExampleCreateOrConnectWithoutStyleInput | MakeupExampleCreateOrConnectWithoutStyleInput[]
    upsert?: MakeupExampleUpsertWithWhereUniqueWithoutStyleInput | MakeupExampleUpsertWithWhereUniqueWithoutStyleInput[]
    createMany?: MakeupExampleCreateManyStyleInputEnvelope
    set?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
    disconnect?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
    delete?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
    connect?: MakeupExampleWhereUniqueInput | MakeupExampleWhereUniqueInput[]
    update?: MakeupExampleUpdateWithWhereUniqueWithoutStyleInput | MakeupExampleUpdateWithWhereUniqueWithoutStyleInput[]
    updateMany?: MakeupExampleUpdateManyWithWhereWithoutStyleInput | MakeupExampleUpdateManyWithWhereWithoutStyleInput[]
    deleteMany?: MakeupExampleScalarWhereInput | MakeupExampleScalarWhereInput[]
  }

  export type MakeupStyleCreateNestedOneWithoutRulesInput = {
    create?: XOR<MakeupStyleCreateWithoutRulesInput, MakeupStyleUncheckedCreateWithoutRulesInput>
    connectOrCreate?: MakeupStyleCreateOrConnectWithoutRulesInput
    connect?: MakeupStyleWhereUniqueInput
  }

  export type MakeupStyleUpdateOneRequiredWithoutRulesNestedInput = {
    create?: XOR<MakeupStyleCreateWithoutRulesInput, MakeupStyleUncheckedCreateWithoutRulesInput>
    connectOrCreate?: MakeupStyleCreateOrConnectWithoutRulesInput
    upsert?: MakeupStyleUpsertWithoutRulesInput
    connect?: MakeupStyleWhereUniqueInput
    update?: XOR<XOR<MakeupStyleUpdateToOneWithWhereWithoutRulesInput, MakeupStyleUpdateWithoutRulesInput>, MakeupStyleUncheckedUpdateWithoutRulesInput>
  }

  export type MakeupStyleCreateNestedOneWithoutExamplesInput = {
    create?: XOR<MakeupStyleCreateWithoutExamplesInput, MakeupStyleUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: MakeupStyleCreateOrConnectWithoutExamplesInput
    connect?: MakeupStyleWhereUniqueInput
  }

  export type MakeupStyleUpdateOneRequiredWithoutExamplesNestedInput = {
    create?: XOR<MakeupStyleCreateWithoutExamplesInput, MakeupStyleUncheckedCreateWithoutExamplesInput>
    connectOrCreate?: MakeupStyleCreateOrConnectWithoutExamplesInput
    upsert?: MakeupStyleUpsertWithoutExamplesInput
    connect?: MakeupStyleWhereUniqueInput
    update?: XOR<XOR<MakeupStyleUpdateToOneWithWhereWithoutExamplesInput, MakeupStyleUpdateWithoutExamplesInput>, MakeupStyleUncheckedUpdateWithoutExamplesInput>
  }

  export type UserCreateNestedOneWithoutReviewsInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    connect?: UserWhereUniqueInput
  }

  export type MakeupProductCreateNestedOneWithoutReviewsInput = {
    create?: XOR<MakeupProductCreateWithoutReviewsInput, MakeupProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MakeupProductCreateOrConnectWithoutReviewsInput
    connect?: MakeupProductWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: UserCreateOrConnectWithoutReviewsInput
    upsert?: UserUpsertWithoutReviewsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReviewsInput, UserUpdateWithoutReviewsInput>, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type MakeupProductUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<MakeupProductCreateWithoutReviewsInput, MakeupProductUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: MakeupProductCreateOrConnectWithoutReviewsInput
    upsert?: MakeupProductUpsertWithoutReviewsInput
    connect?: MakeupProductWhereUniqueInput
    update?: XOR<XOR<MakeupProductUpdateToOneWithWhereWithoutReviewsInput, MakeupProductUpdateWithoutReviewsInput>, MakeupProductUncheckedUpdateWithoutReviewsInput>
  }

  export type UserCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    connect?: UserWhereUniqueInput
  }

  export type MakeupProductCreateNestedOneWithoutFavoritesInput = {
    create?: XOR<MakeupProductCreateWithoutFavoritesInput, MakeupProductUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: MakeupProductCreateOrConnectWithoutFavoritesInput
    connect?: MakeupProductWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: UserCreateOrConnectWithoutFavoritesInput
    upsert?: UserUpsertWithoutFavoritesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutFavoritesInput, UserUpdateWithoutFavoritesInput>, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type MakeupProductUpdateOneRequiredWithoutFavoritesNestedInput = {
    create?: XOR<MakeupProductCreateWithoutFavoritesInput, MakeupProductUncheckedCreateWithoutFavoritesInput>
    connectOrCreate?: MakeupProductCreateOrConnectWithoutFavoritesInput
    upsert?: MakeupProductUpsertWithoutFavoritesInput
    connect?: MakeupProductWhereUniqueInput
    update?: XOR<XOR<MakeupProductUpdateToOneWithWhereWithoutFavoritesInput, MakeupProductUpdateWithoutFavoritesInput>, MakeupProductUncheckedUpdateWithoutFavoritesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type ReviewCreateWithoutUserInput = {
    id?: string
    rating?: number | null
    content?: string | null
    createdAt?: Date | string
    product: MakeupProductCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutUserInput = {
    id?: string
    rating?: number | null
    content?: string | null
    makeupProductId: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutUserInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewCreateManyUserInputEnvelope = {
    data: ReviewCreateManyUserInput | ReviewCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    product: MakeupProductCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutUserInput = {
    id?: string
    makeupProductId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteCreateManyUserInputEnvelope = {
    data: FavoriteCreateManyUserInput | FavoriteCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
    create: XOR<ReviewCreateWithoutUserInput, ReviewUncheckedCreateWithoutUserInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutUserInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutUserInput, ReviewUncheckedUpdateWithoutUserInput>
  }

  export type ReviewUpdateManyWithWhereWithoutUserInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutUserInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: UuidFilter<"Review"> | string
    rating?: IntNullableFilter<"Review"> | number | null
    content?: StringNullableFilter<"Review"> | string | null
    userId?: UuidFilter<"Review"> | string
    makeupProductId?: UuidFilter<"Review"> | string
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type FavoriteUpsertWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
    create: XOR<FavoriteCreateWithoutUserInput, FavoriteUncheckedCreateWithoutUserInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutUserInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutUserInput, FavoriteUncheckedUpdateWithoutUserInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutUserInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutUserInput>
  }

  export type FavoriteScalarWhereInput = {
    AND?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    OR?: FavoriteScalarWhereInput[]
    NOT?: FavoriteScalarWhereInput | FavoriteScalarWhereInput[]
    id?: UuidFilter<"Favorite"> | string
    userId?: UuidFilter<"Favorite"> | string
    makeupProductId?: UuidFilter<"Favorite"> | string
    createdAt?: DateTimeFilter<"Favorite"> | Date | string
  }

  export type ReviewCreateWithoutProductInput = {
    id?: string
    rating?: number | null
    content?: string | null
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutReviewsInput
  }

  export type ReviewUncheckedCreateWithoutProductInput = {
    id?: string
    rating?: number | null
    content?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutProductInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewCreateManyProductInputEnvelope = {
    data: ReviewCreateManyProductInput | ReviewCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type FavoriteCreateWithoutProductInput = {
    id?: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutFavoritesInput
  }

  export type FavoriteUncheckedCreateWithoutProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateOrConnectWithoutProductInput = {
    where: FavoriteWhereUniqueInput
    create: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput>
  }

  export type FavoriteCreateManyProductInputEnvelope = {
    data: FavoriteCreateManyProductInput | FavoriteCreateManyProductInput[]
    skipDuplicates?: boolean
  }

  export type ReviewUpsertWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
    create: XOR<ReviewCreateWithoutProductInput, ReviewUncheckedCreateWithoutProductInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutProductInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutProductInput, ReviewUncheckedUpdateWithoutProductInput>
  }

  export type ReviewUpdateManyWithWhereWithoutProductInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutProductInput>
  }

  export type FavoriteUpsertWithWhereUniqueWithoutProductInput = {
    where: FavoriteWhereUniqueInput
    update: XOR<FavoriteUpdateWithoutProductInput, FavoriteUncheckedUpdateWithoutProductInput>
    create: XOR<FavoriteCreateWithoutProductInput, FavoriteUncheckedCreateWithoutProductInput>
  }

  export type FavoriteUpdateWithWhereUniqueWithoutProductInput = {
    where: FavoriteWhereUniqueInput
    data: XOR<FavoriteUpdateWithoutProductInput, FavoriteUncheckedUpdateWithoutProductInput>
  }

  export type FavoriteUpdateManyWithWhereWithoutProductInput = {
    where: FavoriteScalarWhereInput
    data: XOR<FavoriteUpdateManyMutationInput, FavoriteUncheckedUpdateManyWithoutProductInput>
  }

  export type StyleRuleCreateWithoutStyleInput = {
    id?: string
    productType?: string | null
    tagRequirement?: string | null
    colorFamily?: string | null
  }

  export type StyleRuleUncheckedCreateWithoutStyleInput = {
    id?: string
    productType?: string | null
    tagRequirement?: string | null
    colorFamily?: string | null
  }

  export type StyleRuleCreateOrConnectWithoutStyleInput = {
    where: StyleRuleWhereUniqueInput
    create: XOR<StyleRuleCreateWithoutStyleInput, StyleRuleUncheckedCreateWithoutStyleInput>
  }

  export type StyleRuleCreateManyStyleInputEnvelope = {
    data: StyleRuleCreateManyStyleInput | StyleRuleCreateManyStyleInput[]
    skipDuplicates?: boolean
  }

  export type MakeupExampleCreateWithoutStyleInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    tutorialTips?: string | null
  }

  export type MakeupExampleUncheckedCreateWithoutStyleInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    tutorialTips?: string | null
  }

  export type MakeupExampleCreateOrConnectWithoutStyleInput = {
    where: MakeupExampleWhereUniqueInput
    create: XOR<MakeupExampleCreateWithoutStyleInput, MakeupExampleUncheckedCreateWithoutStyleInput>
  }

  export type MakeupExampleCreateManyStyleInputEnvelope = {
    data: MakeupExampleCreateManyStyleInput | MakeupExampleCreateManyStyleInput[]
    skipDuplicates?: boolean
  }

  export type StyleRuleUpsertWithWhereUniqueWithoutStyleInput = {
    where: StyleRuleWhereUniqueInput
    update: XOR<StyleRuleUpdateWithoutStyleInput, StyleRuleUncheckedUpdateWithoutStyleInput>
    create: XOR<StyleRuleCreateWithoutStyleInput, StyleRuleUncheckedCreateWithoutStyleInput>
  }

  export type StyleRuleUpdateWithWhereUniqueWithoutStyleInput = {
    where: StyleRuleWhereUniqueInput
    data: XOR<StyleRuleUpdateWithoutStyleInput, StyleRuleUncheckedUpdateWithoutStyleInput>
  }

  export type StyleRuleUpdateManyWithWhereWithoutStyleInput = {
    where: StyleRuleScalarWhereInput
    data: XOR<StyleRuleUpdateManyMutationInput, StyleRuleUncheckedUpdateManyWithoutStyleInput>
  }

  export type StyleRuleScalarWhereInput = {
    AND?: StyleRuleScalarWhereInput | StyleRuleScalarWhereInput[]
    OR?: StyleRuleScalarWhereInput[]
    NOT?: StyleRuleScalarWhereInput | StyleRuleScalarWhereInput[]
    id?: UuidFilter<"StyleRule"> | string
    styleId?: UuidFilter<"StyleRule"> | string
    productType?: StringNullableFilter<"StyleRule"> | string | null
    tagRequirement?: StringNullableFilter<"StyleRule"> | string | null
    colorFamily?: StringNullableFilter<"StyleRule"> | string | null
  }

  export type MakeupExampleUpsertWithWhereUniqueWithoutStyleInput = {
    where: MakeupExampleWhereUniqueInput
    update: XOR<MakeupExampleUpdateWithoutStyleInput, MakeupExampleUncheckedUpdateWithoutStyleInput>
    create: XOR<MakeupExampleCreateWithoutStyleInput, MakeupExampleUncheckedCreateWithoutStyleInput>
  }

  export type MakeupExampleUpdateWithWhereUniqueWithoutStyleInput = {
    where: MakeupExampleWhereUniqueInput
    data: XOR<MakeupExampleUpdateWithoutStyleInput, MakeupExampleUncheckedUpdateWithoutStyleInput>
  }

  export type MakeupExampleUpdateManyWithWhereWithoutStyleInput = {
    where: MakeupExampleScalarWhereInput
    data: XOR<MakeupExampleUpdateManyMutationInput, MakeupExampleUncheckedUpdateManyWithoutStyleInput>
  }

  export type MakeupExampleScalarWhereInput = {
    AND?: MakeupExampleScalarWhereInput | MakeupExampleScalarWhereInput[]
    OR?: MakeupExampleScalarWhereInput[]
    NOT?: MakeupExampleScalarWhereInput | MakeupExampleScalarWhereInput[]
    id?: UuidFilter<"MakeupExample"> | string
    styleId?: UuidFilter<"MakeupExample"> | string
    title?: StringNullableFilter<"MakeupExample"> | string | null
    imageUrl?: StringNullableFilter<"MakeupExample"> | string | null
    tutorialTips?: StringNullableFilter<"MakeupExample"> | string | null
  }

  export type MakeupStyleCreateWithoutRulesInput = {
    id?: string
    name: string
    description?: string | null
    styleImg?: string | null
    examples?: MakeupExampleCreateNestedManyWithoutStyleInput
  }

  export type MakeupStyleUncheckedCreateWithoutRulesInput = {
    id?: string
    name: string
    description?: string | null
    styleImg?: string | null
    examples?: MakeupExampleUncheckedCreateNestedManyWithoutStyleInput
  }

  export type MakeupStyleCreateOrConnectWithoutRulesInput = {
    where: MakeupStyleWhereUniqueInput
    create: XOR<MakeupStyleCreateWithoutRulesInput, MakeupStyleUncheckedCreateWithoutRulesInput>
  }

  export type MakeupStyleUpsertWithoutRulesInput = {
    update: XOR<MakeupStyleUpdateWithoutRulesInput, MakeupStyleUncheckedUpdateWithoutRulesInput>
    create: XOR<MakeupStyleCreateWithoutRulesInput, MakeupStyleUncheckedCreateWithoutRulesInput>
    where?: MakeupStyleWhereInput
  }

  export type MakeupStyleUpdateToOneWithWhereWithoutRulesInput = {
    where?: MakeupStyleWhereInput
    data: XOR<MakeupStyleUpdateWithoutRulesInput, MakeupStyleUncheckedUpdateWithoutRulesInput>
  }

  export type MakeupStyleUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    styleImg?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: MakeupExampleUpdateManyWithoutStyleNestedInput
  }

  export type MakeupStyleUncheckedUpdateWithoutRulesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    styleImg?: NullableStringFieldUpdateOperationsInput | string | null
    examples?: MakeupExampleUncheckedUpdateManyWithoutStyleNestedInput
  }

  export type MakeupStyleCreateWithoutExamplesInput = {
    id?: string
    name: string
    description?: string | null
    styleImg?: string | null
    rules?: StyleRuleCreateNestedManyWithoutStyleInput
  }

  export type MakeupStyleUncheckedCreateWithoutExamplesInput = {
    id?: string
    name: string
    description?: string | null
    styleImg?: string | null
    rules?: StyleRuleUncheckedCreateNestedManyWithoutStyleInput
  }

  export type MakeupStyleCreateOrConnectWithoutExamplesInput = {
    where: MakeupStyleWhereUniqueInput
    create: XOR<MakeupStyleCreateWithoutExamplesInput, MakeupStyleUncheckedCreateWithoutExamplesInput>
  }

  export type MakeupStyleUpsertWithoutExamplesInput = {
    update: XOR<MakeupStyleUpdateWithoutExamplesInput, MakeupStyleUncheckedUpdateWithoutExamplesInput>
    create: XOR<MakeupStyleCreateWithoutExamplesInput, MakeupStyleUncheckedCreateWithoutExamplesInput>
    where?: MakeupStyleWhereInput
  }

  export type MakeupStyleUpdateToOneWithWhereWithoutExamplesInput = {
    where?: MakeupStyleWhereInput
    data: XOR<MakeupStyleUpdateWithoutExamplesInput, MakeupStyleUncheckedUpdateWithoutExamplesInput>
  }

  export type MakeupStyleUpdateWithoutExamplesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    styleImg?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: StyleRuleUpdateManyWithoutStyleNestedInput
  }

  export type MakeupStyleUncheckedUpdateWithoutExamplesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    styleImg?: NullableStringFieldUpdateOperationsInput | string | null
    rules?: StyleRuleUncheckedUpdateManyWithoutStyleNestedInput
  }

  export type UserCreateWithoutReviewsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    favorites?: FavoriteCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReviewsInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    favorites?: FavoriteUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReviewsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
  }

  export type MakeupProductCreateWithoutReviewsInput = {
    id?: string
    externalId: number
    name?: string | null
    imgUrl?: string | null
    favorites?: FavoriteCreateNestedManyWithoutProductInput
  }

  export type MakeupProductUncheckedCreateWithoutReviewsInput = {
    id?: string
    externalId: number
    name?: string | null
    imgUrl?: string | null
    favorites?: FavoriteUncheckedCreateNestedManyWithoutProductInput
  }

  export type MakeupProductCreateOrConnectWithoutReviewsInput = {
    where: MakeupProductWhereUniqueInput
    create: XOR<MakeupProductCreateWithoutReviewsInput, MakeupProductUncheckedCreateWithoutReviewsInput>
  }

  export type UserUpsertWithoutReviewsInput = {
    update: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
    create: XOR<UserCreateWithoutReviewsInput, UserUncheckedCreateWithoutReviewsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReviewsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReviewsInput, UserUncheckedUpdateWithoutReviewsInput>
  }

  export type UserUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    favorites?: FavoriteUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MakeupProductUpsertWithoutReviewsInput = {
    update: XOR<MakeupProductUpdateWithoutReviewsInput, MakeupProductUncheckedUpdateWithoutReviewsInput>
    create: XOR<MakeupProductCreateWithoutReviewsInput, MakeupProductUncheckedCreateWithoutReviewsInput>
    where?: MakeupProductWhereInput
  }

  export type MakeupProductUpdateToOneWithWhereWithoutReviewsInput = {
    where?: MakeupProductWhereInput
    data: XOR<MakeupProductUpdateWithoutReviewsInput, MakeupProductUncheckedUpdateWithoutReviewsInput>
  }

  export type MakeupProductUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: FavoriteUpdateManyWithoutProductNestedInput
  }

  export type MakeupProductUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    favorites?: FavoriteUncheckedUpdateManyWithoutProductNestedInput
  }

  export type UserCreateWithoutFavoritesInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutFavoritesInput = {
    id?: string
    username: string
    email: string
    password: string
    createdAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutFavoritesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
  }

  export type MakeupProductCreateWithoutFavoritesInput = {
    id?: string
    externalId: number
    name?: string | null
    imgUrl?: string | null
    reviews?: ReviewCreateNestedManyWithoutProductInput
  }

  export type MakeupProductUncheckedCreateWithoutFavoritesInput = {
    id?: string
    externalId: number
    name?: string | null
    imgUrl?: string | null
    reviews?: ReviewUncheckedCreateNestedManyWithoutProductInput
  }

  export type MakeupProductCreateOrConnectWithoutFavoritesInput = {
    where: MakeupProductWhereUniqueInput
    create: XOR<MakeupProductCreateWithoutFavoritesInput, MakeupProductUncheckedCreateWithoutFavoritesInput>
  }

  export type UserUpsertWithoutFavoritesInput = {
    update: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
    create: XOR<UserCreateWithoutFavoritesInput, UserUncheckedCreateWithoutFavoritesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutFavoritesInput, UserUncheckedUpdateWithoutFavoritesInput>
  }

  export type UserUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    username?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutUserNestedInput
  }

  export type MakeupProductUpsertWithoutFavoritesInput = {
    update: XOR<MakeupProductUpdateWithoutFavoritesInput, MakeupProductUncheckedUpdateWithoutFavoritesInput>
    create: XOR<MakeupProductCreateWithoutFavoritesInput, MakeupProductUncheckedCreateWithoutFavoritesInput>
    where?: MakeupProductWhereInput
  }

  export type MakeupProductUpdateToOneWithWhereWithoutFavoritesInput = {
    where?: MakeupProductWhereInput
    data: XOR<MakeupProductUpdateWithoutFavoritesInput, MakeupProductUncheckedUpdateWithoutFavoritesInput>
  }

  export type MakeupProductUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUpdateManyWithoutProductNestedInput
  }

  export type MakeupProductUncheckedUpdateWithoutFavoritesInput = {
    id?: StringFieldUpdateOperationsInput | string
    externalId?: IntFieldUpdateOperationsInput | number
    name?: NullableStringFieldUpdateOperationsInput | string | null
    imgUrl?: NullableStringFieldUpdateOperationsInput | string | null
    reviews?: ReviewUncheckedUpdateManyWithoutProductNestedInput
  }

  export type ReviewCreateManyUserInput = {
    id?: string
    rating?: number | null
    content?: string | null
    makeupProductId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateManyUserInput = {
    id?: string
    makeupProductId: string
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: MakeupProductUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    makeupProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    makeupProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    product?: MakeupProductUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    makeupProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    makeupProductId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyProductInput = {
    id?: string
    rating?: number | null
    content?: string | null
    userId: string
    createdAt?: Date | string
  }

  export type FavoriteCreateManyProductInput = {
    id?: string
    userId: string
    createdAt?: Date | string
  }

  export type ReviewUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: NullableIntFieldUpdateOperationsInput | number | null
    content?: NullableStringFieldUpdateOperationsInput | string | null
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutFavoritesNestedInput
  }

  export type FavoriteUncheckedUpdateWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type FavoriteUncheckedUpdateManyWithoutProductInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StyleRuleCreateManyStyleInput = {
    id?: string
    productType?: string | null
    tagRequirement?: string | null
    colorFamily?: string | null
  }

  export type MakeupExampleCreateManyStyleInput = {
    id?: string
    title?: string | null
    imageUrl?: string | null
    tutorialTips?: string | null
  }

  export type StyleRuleUpdateWithoutStyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    colorFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StyleRuleUncheckedUpdateWithoutStyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    colorFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type StyleRuleUncheckedUpdateManyWithoutStyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    productType?: NullableStringFieldUpdateOperationsInput | string | null
    tagRequirement?: NullableStringFieldUpdateOperationsInput | string | null
    colorFamily?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeupExampleUpdateWithoutStyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialTips?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeupExampleUncheckedUpdateWithoutStyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialTips?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type MakeupExampleUncheckedUpdateManyWithoutStyleInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: NullableStringFieldUpdateOperationsInput | string | null
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    tutorialTips?: NullableStringFieldUpdateOperationsInput | string | null
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