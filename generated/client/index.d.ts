
/**
 * Client
**/

import * as runtime from './runtime/library.js';
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
 * Model SalePoint
 * 
 */
export type SalePoint = $Result.DefaultSelection<Prisma.$SalePointPayload>
/**
 * Model Carpet
 * 
 */
export type Carpet = $Result.DefaultSelection<Prisma.$CarpetPayload>
/**
 * Model Sale
 * 
 */
export type Sale = $Result.DefaultSelection<Prisma.$SalePayload>
/**
 * Model SaleItem
 * 
 */
export type SaleItem = $Result.DefaultSelection<Prisma.$SaleItemPayload>
/**
 * Model Customer
 * 
 */
export type Customer = $Result.DefaultSelection<Prisma.$CustomerPayload>
/**
 * Model CustomerDebt
 * 
 */
export type CustomerDebt = $Result.DefaultSelection<Prisma.$CustomerDebtPayload>
/**
 * Model SellerProfit
 * 
 */
export type SellerProfit = $Result.DefaultSelection<Prisma.$SellerProfitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  SELLER: 'SELLER'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * `prisma.salePoint`: Exposes CRUD operations for the **SalePoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SalePoints
    * const salePoints = await prisma.salePoint.findMany()
    * ```
    */
  get salePoint(): Prisma.SalePointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.carpet`: Exposes CRUD operations for the **Carpet** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Carpets
    * const carpets = await prisma.carpet.findMany()
    * ```
    */
  get carpet(): Prisma.CarpetDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sale`: Exposes CRUD operations for the **Sale** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sales
    * const sales = await prisma.sale.findMany()
    * ```
    */
  get sale(): Prisma.SaleDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.saleItem`: Exposes CRUD operations for the **SaleItem** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SaleItems
    * const saleItems = await prisma.saleItem.findMany()
    * ```
    */
  get saleItem(): Prisma.SaleItemDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customer`: Exposes CRUD operations for the **Customer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Customers
    * const customers = await prisma.customer.findMany()
    * ```
    */
  get customer(): Prisma.CustomerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.customerDebt`: Exposes CRUD operations for the **CustomerDebt** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more CustomerDebts
    * const customerDebts = await prisma.customerDebt.findMany()
    * ```
    */
  get customerDebt(): Prisma.CustomerDebtDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sellerProfit`: Exposes CRUD operations for the **SellerProfit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SellerProfits
    * const sellerProfits = await prisma.sellerProfit.findMany()
    * ```
    */
  get sellerProfit(): Prisma.SellerProfitDelegate<ExtArgs, ClientOptions>;
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
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

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
   * Prisma Client JS version: 6.19.0
   * Query Engine version: 2ba551f319ab1df4bc874a89965d8b3641056773
   */
  export type PrismaVersion = {
    client: string
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
    SalePoint: 'SalePoint',
    Carpet: 'Carpet',
    Sale: 'Sale',
    SaleItem: 'SaleItem',
    Customer: 'Customer',
    CustomerDebt: 'CustomerDebt',
    SellerProfit: 'SellerProfit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "salePoint" | "carpet" | "sale" | "saleItem" | "customer" | "customerDebt" | "sellerProfit"
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
      SalePoint: {
        payload: Prisma.$SalePointPayload<ExtArgs>
        fields: Prisma.SalePointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SalePointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SalePointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload>
          }
          findFirst: {
            args: Prisma.SalePointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SalePointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload>
          }
          findMany: {
            args: Prisma.SalePointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload>[]
          }
          create: {
            args: Prisma.SalePointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload>
          }
          createMany: {
            args: Prisma.SalePointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SalePointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload>[]
          }
          delete: {
            args: Prisma.SalePointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload>
          }
          update: {
            args: Prisma.SalePointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload>
          }
          deleteMany: {
            args: Prisma.SalePointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SalePointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SalePointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload>[]
          }
          upsert: {
            args: Prisma.SalePointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePointPayload>
          }
          aggregate: {
            args: Prisma.SalePointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSalePoint>
          }
          groupBy: {
            args: Prisma.SalePointGroupByArgs<ExtArgs>
            result: $Utils.Optional<SalePointGroupByOutputType>[]
          }
          count: {
            args: Prisma.SalePointCountArgs<ExtArgs>
            result: $Utils.Optional<SalePointCountAggregateOutputType> | number
          }
        }
      }
      Carpet: {
        payload: Prisma.$CarpetPayload<ExtArgs>
        fields: Prisma.CarpetFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CarpetFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CarpetFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload>
          }
          findFirst: {
            args: Prisma.CarpetFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CarpetFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload>
          }
          findMany: {
            args: Prisma.CarpetFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload>[]
          }
          create: {
            args: Prisma.CarpetCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload>
          }
          createMany: {
            args: Prisma.CarpetCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CarpetCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload>[]
          }
          delete: {
            args: Prisma.CarpetDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload>
          }
          update: {
            args: Prisma.CarpetUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload>
          }
          deleteMany: {
            args: Prisma.CarpetDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CarpetUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CarpetUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload>[]
          }
          upsert: {
            args: Prisma.CarpetUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CarpetPayload>
          }
          aggregate: {
            args: Prisma.CarpetAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCarpet>
          }
          groupBy: {
            args: Prisma.CarpetGroupByArgs<ExtArgs>
            result: $Utils.Optional<CarpetGroupByOutputType>[]
          }
          count: {
            args: Prisma.CarpetCountArgs<ExtArgs>
            result: $Utils.Optional<CarpetCountAggregateOutputType> | number
          }
        }
      }
      Sale: {
        payload: Prisma.$SalePayload<ExtArgs>
        fields: Prisma.SaleFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findFirst: {
            args: Prisma.SaleFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          findMany: {
            args: Prisma.SaleFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          create: {
            args: Prisma.SaleCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          createMany: {
            args: Prisma.SaleCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          delete: {
            args: Prisma.SaleDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          update: {
            args: Prisma.SaleUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          deleteMany: {
            args: Prisma.SaleDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>[]
          }
          upsert: {
            args: Prisma.SaleUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SalePayload>
          }
          aggregate: {
            args: Prisma.SaleAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSale>
          }
          groupBy: {
            args: Prisma.SaleGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleCountArgs<ExtArgs>
            result: $Utils.Optional<SaleCountAggregateOutputType> | number
          }
        }
      }
      SaleItem: {
        payload: Prisma.$SaleItemPayload<ExtArgs>
        fields: Prisma.SaleItemFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SaleItemFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SaleItemFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findFirst: {
            args: Prisma.SaleItemFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SaleItemFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          findMany: {
            args: Prisma.SaleItemFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          create: {
            args: Prisma.SaleItemCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          createMany: {
            args: Prisma.SaleItemCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SaleItemCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          delete: {
            args: Prisma.SaleItemDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          update: {
            args: Prisma.SaleItemUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          deleteMany: {
            args: Prisma.SaleItemDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SaleItemUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SaleItemUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>[]
          }
          upsert: {
            args: Prisma.SaleItemUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SaleItemPayload>
          }
          aggregate: {
            args: Prisma.SaleItemAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSaleItem>
          }
          groupBy: {
            args: Prisma.SaleItemGroupByArgs<ExtArgs>
            result: $Utils.Optional<SaleItemGroupByOutputType>[]
          }
          count: {
            args: Prisma.SaleItemCountArgs<ExtArgs>
            result: $Utils.Optional<SaleItemCountAggregateOutputType> | number
          }
        }
      }
      Customer: {
        payload: Prisma.$CustomerPayload<ExtArgs>
        fields: Prisma.CustomerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findFirst: {
            args: Prisma.CustomerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          findMany: {
            args: Prisma.CustomerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          create: {
            args: Prisma.CustomerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          createMany: {
            args: Prisma.CustomerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          delete: {
            args: Prisma.CustomerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          update: {
            args: Prisma.CustomerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>[]
          }
          upsert: {
            args: Prisma.CustomerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerPayload>
          }
          aggregate: {
            args: Prisma.CustomerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomer>
          }
          groupBy: {
            args: Prisma.CustomerGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerCountAggregateOutputType> | number
          }
        }
      }
      CustomerDebt: {
        payload: Prisma.$CustomerDebtPayload<ExtArgs>
        fields: Prisma.CustomerDebtFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CustomerDebtFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CustomerDebtFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload>
          }
          findFirst: {
            args: Prisma.CustomerDebtFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CustomerDebtFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload>
          }
          findMany: {
            args: Prisma.CustomerDebtFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload>[]
          }
          create: {
            args: Prisma.CustomerDebtCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload>
          }
          createMany: {
            args: Prisma.CustomerDebtCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CustomerDebtCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload>[]
          }
          delete: {
            args: Prisma.CustomerDebtDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload>
          }
          update: {
            args: Prisma.CustomerDebtUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload>
          }
          deleteMany: {
            args: Prisma.CustomerDebtDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CustomerDebtUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CustomerDebtUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload>[]
          }
          upsert: {
            args: Prisma.CustomerDebtUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CustomerDebtPayload>
          }
          aggregate: {
            args: Prisma.CustomerDebtAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCustomerDebt>
          }
          groupBy: {
            args: Prisma.CustomerDebtGroupByArgs<ExtArgs>
            result: $Utils.Optional<CustomerDebtGroupByOutputType>[]
          }
          count: {
            args: Prisma.CustomerDebtCountArgs<ExtArgs>
            result: $Utils.Optional<CustomerDebtCountAggregateOutputType> | number
          }
        }
      }
      SellerProfit: {
        payload: Prisma.$SellerProfitPayload<ExtArgs>
        fields: Prisma.SellerProfitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SellerProfitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SellerProfitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload>
          }
          findFirst: {
            args: Prisma.SellerProfitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SellerProfitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload>
          }
          findMany: {
            args: Prisma.SellerProfitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload>[]
          }
          create: {
            args: Prisma.SellerProfitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload>
          }
          createMany: {
            args: Prisma.SellerProfitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SellerProfitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload>[]
          }
          delete: {
            args: Prisma.SellerProfitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload>
          }
          update: {
            args: Prisma.SellerProfitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload>
          }
          deleteMany: {
            args: Prisma.SellerProfitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SellerProfitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SellerProfitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload>[]
          }
          upsert: {
            args: Prisma.SellerProfitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SellerProfitPayload>
          }
          aggregate: {
            args: Prisma.SellerProfitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSellerProfit>
          }
          groupBy: {
            args: Prisma.SellerProfitGroupByArgs<ExtArgs>
            result: $Utils.Optional<SellerProfitGroupByOutputType>[]
          }
          count: {
            args: Prisma.SellerProfitCountArgs<ExtArgs>
            result: $Utils.Optional<SellerProfitCountAggregateOutputType> | number
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
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
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
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
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
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    salePoint?: SalePointOmit
    carpet?: CarpetOmit
    sale?: SaleOmit
    saleItem?: SaleItemOmit
    customer?: CustomerOmit
    customerDebt?: CustomerDebtOmit
    sellerProfit?: SellerProfitOmit
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
    sales: number
    sellerCuts: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | UserCountOutputTypeCountSalesArgs
    sellerCuts?: boolean | UserCountOutputTypeCountSellerCutsArgs
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
  export type UserCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSellerCutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerProfitWhereInput
  }


  /**
   * Count Type SalePointCountOutputType
   */

  export type SalePointCountOutputType = {
    sales: number
  }

  export type SalePointCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | SalePointCountOutputTypeCountSalesArgs
  }

  // Custom InputTypes
  /**
   * SalePointCountOutputType without action
   */
  export type SalePointCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePointCountOutputType
     */
    select?: SalePointCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SalePointCountOutputType without action
   */
  export type SalePointCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }


  /**
   * Count Type SaleCountOutputType
   */

  export type SaleCountOutputType = {
    items: number
    sellerProfits: number
  }

  export type SaleCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    items?: boolean | SaleCountOutputTypeCountItemsArgs
    sellerProfits?: boolean | SaleCountOutputTypeCountSellerProfitsArgs
  }

  // Custom InputTypes
  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleCountOutputType
     */
    select?: SaleCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountItemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
  }

  /**
   * SaleCountOutputType without action
   */
  export type SaleCountOutputTypeCountSellerProfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerProfitWhereInput
  }


  /**
   * Count Type CustomerCountOutputType
   */

  export type CustomerCountOutputType = {
    sales: number
    debts: number
  }

  export type CustomerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | CustomerCountOutputTypeCountSalesArgs
    debts?: boolean | CustomerCountOutputTypeCountDebtsArgs
  }

  // Custom InputTypes
  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerCountOutputType
     */
    select?: CustomerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountSalesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
  }

  /**
   * CustomerCountOutputType without action
   */
  export type CustomerCountOutputTypeCountDebtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerDebtWhereInput
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
    name: string | null
    phone: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    role: $Enums.UserRole | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    role: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    role?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    role?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    role?: true
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
    name: string
    phone: string | null
    role: $Enums.UserRole
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
    name?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
    sales?: boolean | User$salesArgs<ExtArgs>
    sellerCuts?: boolean | User$sellerCutsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    role?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "role" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | User$salesArgs<ExtArgs>
    sellerCuts?: boolean | User$sellerCutsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
      sellerCuts: Prisma.$SellerProfitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      role: $Enums.UserRole
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
    sales<T extends User$salesArgs<ExtArgs> = {}>(args?: Subset<T, User$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellerCuts<T extends User$sellerCutsArgs<ExtArgs> = {}>(args?: Subset<T, User$sellerCutsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly phone: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
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
   * User.sales
   */
  export type User$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * User.sellerCuts
   */
  export type User$sellerCutsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    where?: SellerProfitWhereInput
    orderBy?: SellerProfitOrderByWithRelationInput | SellerProfitOrderByWithRelationInput[]
    cursor?: SellerProfitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellerProfitScalarFieldEnum | SellerProfitScalarFieldEnum[]
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
   * Model SalePoint
   */

  export type AggregateSalePoint = {
    _count: SalePointCountAggregateOutputType | null
    _min: SalePointMinAggregateOutputType | null
    _max: SalePointMaxAggregateOutputType | null
  }

  export type SalePointMinAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SalePointMaxAggregateOutputType = {
    id: string | null
    name: string | null
    createdAt: Date | null
  }

  export type SalePointCountAggregateOutputType = {
    id: number
    name: number
    createdAt: number
    _all: number
  }


  export type SalePointMinAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SalePointMaxAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
  }

  export type SalePointCountAggregateInputType = {
    id?: true
    name?: true
    createdAt?: true
    _all?: true
  }

  export type SalePointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalePoint to aggregate.
     */
    where?: SalePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePoints to fetch.
     */
    orderBy?: SalePointOrderByWithRelationInput | SalePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SalePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SalePoints
    **/
    _count?: true | SalePointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SalePointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SalePointMaxAggregateInputType
  }

  export type GetSalePointAggregateType<T extends SalePointAggregateArgs> = {
        [P in keyof T & keyof AggregateSalePoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSalePoint[P]>
      : GetScalarType<T[P], AggregateSalePoint[P]>
  }




  export type SalePointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SalePointWhereInput
    orderBy?: SalePointOrderByWithAggregationInput | SalePointOrderByWithAggregationInput[]
    by: SalePointScalarFieldEnum[] | SalePointScalarFieldEnum
    having?: SalePointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SalePointCountAggregateInputType | true
    _min?: SalePointMinAggregateInputType
    _max?: SalePointMaxAggregateInputType
  }

  export type SalePointGroupByOutputType = {
    id: string
    name: string
    createdAt: Date
    _count: SalePointCountAggregateOutputType | null
    _min: SalePointMinAggregateOutputType | null
    _max: SalePointMaxAggregateOutputType | null
  }

  type GetSalePointGroupByPayload<T extends SalePointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SalePointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SalePointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SalePointGroupByOutputType[P]>
            : GetScalarType<T[P], SalePointGroupByOutputType[P]>
        }
      >
    >


  export type SalePointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
    sales?: boolean | SalePoint$salesArgs<ExtArgs>
    _count?: boolean | SalePointCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["salePoint"]>

  export type SalePointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["salePoint"]>

  export type SalePointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["salePoint"]>

  export type SalePointSelectScalar = {
    id?: boolean
    name?: boolean
    createdAt?: boolean
  }

  export type SalePointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "createdAt", ExtArgs["result"]["salePoint"]>
  export type SalePointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | SalePoint$salesArgs<ExtArgs>
    _count?: boolean | SalePointCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SalePointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type SalePointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $SalePointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SalePoint"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      createdAt: Date
    }, ExtArgs["result"]["salePoint"]>
    composites: {}
  }

  type SalePointGetPayload<S extends boolean | null | undefined | SalePointDefaultArgs> = $Result.GetResult<Prisma.$SalePointPayload, S>

  type SalePointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SalePointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SalePointCountAggregateInputType | true
    }

  export interface SalePointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SalePoint'], meta: { name: 'SalePoint' } }
    /**
     * Find zero or one SalePoint that matches the filter.
     * @param {SalePointFindUniqueArgs} args - Arguments to find a SalePoint
     * @example
     * // Get one SalePoint
     * const salePoint = await prisma.salePoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SalePointFindUniqueArgs>(args: SelectSubset<T, SalePointFindUniqueArgs<ExtArgs>>): Prisma__SalePointClient<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SalePoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SalePointFindUniqueOrThrowArgs} args - Arguments to find a SalePoint
     * @example
     * // Get one SalePoint
     * const salePoint = await prisma.salePoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SalePointFindUniqueOrThrowArgs>(args: SelectSubset<T, SalePointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SalePointClient<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalePoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePointFindFirstArgs} args - Arguments to find a SalePoint
     * @example
     * // Get one SalePoint
     * const salePoint = await prisma.salePoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SalePointFindFirstArgs>(args?: SelectSubset<T, SalePointFindFirstArgs<ExtArgs>>): Prisma__SalePointClient<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SalePoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePointFindFirstOrThrowArgs} args - Arguments to find a SalePoint
     * @example
     * // Get one SalePoint
     * const salePoint = await prisma.salePoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SalePointFindFirstOrThrowArgs>(args?: SelectSubset<T, SalePointFindFirstOrThrowArgs<ExtArgs>>): Prisma__SalePointClient<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SalePoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SalePoints
     * const salePoints = await prisma.salePoint.findMany()
     * 
     * // Get first 10 SalePoints
     * const salePoints = await prisma.salePoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const salePointWithIdOnly = await prisma.salePoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SalePointFindManyArgs>(args?: SelectSubset<T, SalePointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SalePoint.
     * @param {SalePointCreateArgs} args - Arguments to create a SalePoint.
     * @example
     * // Create one SalePoint
     * const SalePoint = await prisma.salePoint.create({
     *   data: {
     *     // ... data to create a SalePoint
     *   }
     * })
     * 
     */
    create<T extends SalePointCreateArgs>(args: SelectSubset<T, SalePointCreateArgs<ExtArgs>>): Prisma__SalePointClient<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SalePoints.
     * @param {SalePointCreateManyArgs} args - Arguments to create many SalePoints.
     * @example
     * // Create many SalePoints
     * const salePoint = await prisma.salePoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SalePointCreateManyArgs>(args?: SelectSubset<T, SalePointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SalePoints and returns the data saved in the database.
     * @param {SalePointCreateManyAndReturnArgs} args - Arguments to create many SalePoints.
     * @example
     * // Create many SalePoints
     * const salePoint = await prisma.salePoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SalePoints and only return the `id`
     * const salePointWithIdOnly = await prisma.salePoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SalePointCreateManyAndReturnArgs>(args?: SelectSubset<T, SalePointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SalePoint.
     * @param {SalePointDeleteArgs} args - Arguments to delete one SalePoint.
     * @example
     * // Delete one SalePoint
     * const SalePoint = await prisma.salePoint.delete({
     *   where: {
     *     // ... filter to delete one SalePoint
     *   }
     * })
     * 
     */
    delete<T extends SalePointDeleteArgs>(args: SelectSubset<T, SalePointDeleteArgs<ExtArgs>>): Prisma__SalePointClient<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SalePoint.
     * @param {SalePointUpdateArgs} args - Arguments to update one SalePoint.
     * @example
     * // Update one SalePoint
     * const salePoint = await prisma.salePoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SalePointUpdateArgs>(args: SelectSubset<T, SalePointUpdateArgs<ExtArgs>>): Prisma__SalePointClient<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SalePoints.
     * @param {SalePointDeleteManyArgs} args - Arguments to filter SalePoints to delete.
     * @example
     * // Delete a few SalePoints
     * const { count } = await prisma.salePoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SalePointDeleteManyArgs>(args?: SelectSubset<T, SalePointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SalePoints
     * const salePoint = await prisma.salePoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SalePointUpdateManyArgs>(args: SelectSubset<T, SalePointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SalePoints and returns the data updated in the database.
     * @param {SalePointUpdateManyAndReturnArgs} args - Arguments to update many SalePoints.
     * @example
     * // Update many SalePoints
     * const salePoint = await prisma.salePoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SalePoints and only return the `id`
     * const salePointWithIdOnly = await prisma.salePoint.updateManyAndReturn({
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
    updateManyAndReturn<T extends SalePointUpdateManyAndReturnArgs>(args: SelectSubset<T, SalePointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SalePoint.
     * @param {SalePointUpsertArgs} args - Arguments to update or create a SalePoint.
     * @example
     * // Update or create a SalePoint
     * const salePoint = await prisma.salePoint.upsert({
     *   create: {
     *     // ... data to create a SalePoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SalePoint we want to update
     *   }
     * })
     */
    upsert<T extends SalePointUpsertArgs>(args: SelectSubset<T, SalePointUpsertArgs<ExtArgs>>): Prisma__SalePointClient<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SalePoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePointCountArgs} args - Arguments to filter SalePoints to count.
     * @example
     * // Count the number of SalePoints
     * const count = await prisma.salePoint.count({
     *   where: {
     *     // ... the filter for the SalePoints we want to count
     *   }
     * })
    **/
    count<T extends SalePointCountArgs>(
      args?: Subset<T, SalePointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SalePointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SalePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SalePointAggregateArgs>(args: Subset<T, SalePointAggregateArgs>): Prisma.PrismaPromise<GetSalePointAggregateType<T>>

    /**
     * Group by SalePoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SalePointGroupByArgs} args - Group by arguments.
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
      T extends SalePointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SalePointGroupByArgs['orderBy'] }
        : { orderBy?: SalePointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SalePointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSalePointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SalePoint model
   */
  readonly fields: SalePointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SalePoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SalePointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends SalePoint$salesArgs<ExtArgs> = {}>(args?: Subset<T, SalePoint$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the SalePoint model
   */
  interface SalePointFieldRefs {
    readonly id: FieldRef<"SalePoint", 'String'>
    readonly name: FieldRef<"SalePoint", 'String'>
    readonly createdAt: FieldRef<"SalePoint", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SalePoint findUnique
   */
  export type SalePointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
    /**
     * Filter, which SalePoint to fetch.
     */
    where: SalePointWhereUniqueInput
  }

  /**
   * SalePoint findUniqueOrThrow
   */
  export type SalePointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
    /**
     * Filter, which SalePoint to fetch.
     */
    where: SalePointWhereUniqueInput
  }

  /**
   * SalePoint findFirst
   */
  export type SalePointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
    /**
     * Filter, which SalePoint to fetch.
     */
    where?: SalePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePoints to fetch.
     */
    orderBy?: SalePointOrderByWithRelationInput | SalePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalePoints.
     */
    cursor?: SalePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalePoints.
     */
    distinct?: SalePointScalarFieldEnum | SalePointScalarFieldEnum[]
  }

  /**
   * SalePoint findFirstOrThrow
   */
  export type SalePointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
    /**
     * Filter, which SalePoint to fetch.
     */
    where?: SalePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePoints to fetch.
     */
    orderBy?: SalePointOrderByWithRelationInput | SalePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SalePoints.
     */
    cursor?: SalePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SalePoints.
     */
    distinct?: SalePointScalarFieldEnum | SalePointScalarFieldEnum[]
  }

  /**
   * SalePoint findMany
   */
  export type SalePointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
    /**
     * Filter, which SalePoints to fetch.
     */
    where?: SalePointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SalePoints to fetch.
     */
    orderBy?: SalePointOrderByWithRelationInput | SalePointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SalePoints.
     */
    cursor?: SalePointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SalePoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SalePoints.
     */
    skip?: number
    distinct?: SalePointScalarFieldEnum | SalePointScalarFieldEnum[]
  }

  /**
   * SalePoint create
   */
  export type SalePointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
    /**
     * The data needed to create a SalePoint.
     */
    data: XOR<SalePointCreateInput, SalePointUncheckedCreateInput>
  }

  /**
   * SalePoint createMany
   */
  export type SalePointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SalePoints.
     */
    data: SalePointCreateManyInput | SalePointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalePoint createManyAndReturn
   */
  export type SalePointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * The data used to create many SalePoints.
     */
    data: SalePointCreateManyInput | SalePointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SalePoint update
   */
  export type SalePointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
    /**
     * The data needed to update a SalePoint.
     */
    data: XOR<SalePointUpdateInput, SalePointUncheckedUpdateInput>
    /**
     * Choose, which SalePoint to update.
     */
    where: SalePointWhereUniqueInput
  }

  /**
   * SalePoint updateMany
   */
  export type SalePointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SalePoints.
     */
    data: XOR<SalePointUpdateManyMutationInput, SalePointUncheckedUpdateManyInput>
    /**
     * Filter which SalePoints to update
     */
    where?: SalePointWhereInput
    /**
     * Limit how many SalePoints to update.
     */
    limit?: number
  }

  /**
   * SalePoint updateManyAndReturn
   */
  export type SalePointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * The data used to update SalePoints.
     */
    data: XOR<SalePointUpdateManyMutationInput, SalePointUncheckedUpdateManyInput>
    /**
     * Filter which SalePoints to update
     */
    where?: SalePointWhereInput
    /**
     * Limit how many SalePoints to update.
     */
    limit?: number
  }

  /**
   * SalePoint upsert
   */
  export type SalePointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
    /**
     * The filter to search for the SalePoint to update in case it exists.
     */
    where: SalePointWhereUniqueInput
    /**
     * In case the SalePoint found by the `where` argument doesn't exist, create a new SalePoint with this data.
     */
    create: XOR<SalePointCreateInput, SalePointUncheckedCreateInput>
    /**
     * In case the SalePoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SalePointUpdateInput, SalePointUncheckedUpdateInput>
  }

  /**
   * SalePoint delete
   */
  export type SalePointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
    /**
     * Filter which SalePoint to delete.
     */
    where: SalePointWhereUniqueInput
  }

  /**
   * SalePoint deleteMany
   */
  export type SalePointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SalePoints to delete
     */
    where?: SalePointWhereInput
    /**
     * Limit how many SalePoints to delete.
     */
    limit?: number
  }

  /**
   * SalePoint.sales
   */
  export type SalePoint$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * SalePoint without action
   */
  export type SalePointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SalePoint
     */
    select?: SalePointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SalePoint
     */
    omit?: SalePointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SalePointInclude<ExtArgs> | null
  }


  /**
   * Model Carpet
   */

  export type AggregateCarpet = {
    _count: CarpetCountAggregateOutputType | null
    _avg: CarpetAvgAggregateOutputType | null
    _sum: CarpetSumAggregateOutputType | null
    _min: CarpetMinAggregateOutputType | null
    _max: CarpetMaxAggregateOutputType | null
  }

  export type CarpetAvgAggregateOutputType = {
    width: number | null
    height: number | null
    area: number | null
    costPrice: number | null
    sellPrice: number | null
  }

  export type CarpetSumAggregateOutputType = {
    width: number | null
    height: number | null
    area: number | null
    costPrice: number | null
    sellPrice: number | null
  }

  export type CarpetMinAggregateOutputType = {
    id: string | null
    code: string | null
    width: number | null
    height: number | null
    area: number | null
    pattern: string | null
    color: string | null
    material: string | null
    costPrice: number | null
    sellPrice: number | null
    isSold: boolean | null
    soldAt: Date | null
    createdAt: Date | null
  }

  export type CarpetMaxAggregateOutputType = {
    id: string | null
    code: string | null
    width: number | null
    height: number | null
    area: number | null
    pattern: string | null
    color: string | null
    material: string | null
    costPrice: number | null
    sellPrice: number | null
    isSold: boolean | null
    soldAt: Date | null
    createdAt: Date | null
  }

  export type CarpetCountAggregateOutputType = {
    id: number
    code: number
    width: number
    height: number
    area: number
    pattern: number
    color: number
    material: number
    costPrice: number
    sellPrice: number
    isSold: number
    soldAt: number
    createdAt: number
    _all: number
  }


  export type CarpetAvgAggregateInputType = {
    width?: true
    height?: true
    area?: true
    costPrice?: true
    sellPrice?: true
  }

  export type CarpetSumAggregateInputType = {
    width?: true
    height?: true
    area?: true
    costPrice?: true
    sellPrice?: true
  }

  export type CarpetMinAggregateInputType = {
    id?: true
    code?: true
    width?: true
    height?: true
    area?: true
    pattern?: true
    color?: true
    material?: true
    costPrice?: true
    sellPrice?: true
    isSold?: true
    soldAt?: true
    createdAt?: true
  }

  export type CarpetMaxAggregateInputType = {
    id?: true
    code?: true
    width?: true
    height?: true
    area?: true
    pattern?: true
    color?: true
    material?: true
    costPrice?: true
    sellPrice?: true
    isSold?: true
    soldAt?: true
    createdAt?: true
  }

  export type CarpetCountAggregateInputType = {
    id?: true
    code?: true
    width?: true
    height?: true
    area?: true
    pattern?: true
    color?: true
    material?: true
    costPrice?: true
    sellPrice?: true
    isSold?: true
    soldAt?: true
    createdAt?: true
    _all?: true
  }

  export type CarpetAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carpet to aggregate.
     */
    where?: CarpetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carpets to fetch.
     */
    orderBy?: CarpetOrderByWithRelationInput | CarpetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CarpetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carpets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carpets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Carpets
    **/
    _count?: true | CarpetCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CarpetAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CarpetSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CarpetMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CarpetMaxAggregateInputType
  }

  export type GetCarpetAggregateType<T extends CarpetAggregateArgs> = {
        [P in keyof T & keyof AggregateCarpet]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCarpet[P]>
      : GetScalarType<T[P], AggregateCarpet[P]>
  }




  export type CarpetGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CarpetWhereInput
    orderBy?: CarpetOrderByWithAggregationInput | CarpetOrderByWithAggregationInput[]
    by: CarpetScalarFieldEnum[] | CarpetScalarFieldEnum
    having?: CarpetScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CarpetCountAggregateInputType | true
    _avg?: CarpetAvgAggregateInputType
    _sum?: CarpetSumAggregateInputType
    _min?: CarpetMinAggregateInputType
    _max?: CarpetMaxAggregateInputType
  }

  export type CarpetGroupByOutputType = {
    id: string
    code: string
    width: number
    height: number
    area: number
    pattern: string
    color: string | null
    material: string | null
    costPrice: number
    sellPrice: number
    isSold: boolean
    soldAt: Date | null
    createdAt: Date
    _count: CarpetCountAggregateOutputType | null
    _avg: CarpetAvgAggregateOutputType | null
    _sum: CarpetSumAggregateOutputType | null
    _min: CarpetMinAggregateOutputType | null
    _max: CarpetMaxAggregateOutputType | null
  }

  type GetCarpetGroupByPayload<T extends CarpetGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CarpetGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CarpetGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CarpetGroupByOutputType[P]>
            : GetScalarType<T[P], CarpetGroupByOutputType[P]>
        }
      >
    >


  export type CarpetSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    width?: boolean
    height?: boolean
    area?: boolean
    pattern?: boolean
    color?: boolean
    material?: boolean
    costPrice?: boolean
    sellPrice?: boolean
    isSold?: boolean
    soldAt?: boolean
    createdAt?: boolean
    saleItem?: boolean | Carpet$saleItemArgs<ExtArgs>
  }, ExtArgs["result"]["carpet"]>

  export type CarpetSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    width?: boolean
    height?: boolean
    area?: boolean
    pattern?: boolean
    color?: boolean
    material?: boolean
    costPrice?: boolean
    sellPrice?: boolean
    isSold?: boolean
    soldAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["carpet"]>

  export type CarpetSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    width?: boolean
    height?: boolean
    area?: boolean
    pattern?: boolean
    color?: boolean
    material?: boolean
    costPrice?: boolean
    sellPrice?: boolean
    isSold?: boolean
    soldAt?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["carpet"]>

  export type CarpetSelectScalar = {
    id?: boolean
    code?: boolean
    width?: boolean
    height?: boolean
    area?: boolean
    pattern?: boolean
    color?: boolean
    material?: boolean
    costPrice?: boolean
    sellPrice?: boolean
    isSold?: boolean
    soldAt?: boolean
    createdAt?: boolean
  }

  export type CarpetOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "code" | "width" | "height" | "area" | "pattern" | "color" | "material" | "costPrice" | "sellPrice" | "isSold" | "soldAt" | "createdAt", ExtArgs["result"]["carpet"]>
  export type CarpetInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    saleItem?: boolean | Carpet$saleItemArgs<ExtArgs>
  }
  export type CarpetIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CarpetIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CarpetPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Carpet"
    objects: {
      saleItem: Prisma.$SaleItemPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      width: number
      height: number
      area: number
      pattern: string
      color: string | null
      material: string | null
      costPrice: number
      sellPrice: number
      isSold: boolean
      soldAt: Date | null
      createdAt: Date
    }, ExtArgs["result"]["carpet"]>
    composites: {}
  }

  type CarpetGetPayload<S extends boolean | null | undefined | CarpetDefaultArgs> = $Result.GetResult<Prisma.$CarpetPayload, S>

  type CarpetCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CarpetFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CarpetCountAggregateInputType | true
    }

  export interface CarpetDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Carpet'], meta: { name: 'Carpet' } }
    /**
     * Find zero or one Carpet that matches the filter.
     * @param {CarpetFindUniqueArgs} args - Arguments to find a Carpet
     * @example
     * // Get one Carpet
     * const carpet = await prisma.carpet.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CarpetFindUniqueArgs>(args: SelectSubset<T, CarpetFindUniqueArgs<ExtArgs>>): Prisma__CarpetClient<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Carpet that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CarpetFindUniqueOrThrowArgs} args - Arguments to find a Carpet
     * @example
     * // Get one Carpet
     * const carpet = await prisma.carpet.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CarpetFindUniqueOrThrowArgs>(args: SelectSubset<T, CarpetFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CarpetClient<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carpet that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetFindFirstArgs} args - Arguments to find a Carpet
     * @example
     * // Get one Carpet
     * const carpet = await prisma.carpet.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CarpetFindFirstArgs>(args?: SelectSubset<T, CarpetFindFirstArgs<ExtArgs>>): Prisma__CarpetClient<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Carpet that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetFindFirstOrThrowArgs} args - Arguments to find a Carpet
     * @example
     * // Get one Carpet
     * const carpet = await prisma.carpet.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CarpetFindFirstOrThrowArgs>(args?: SelectSubset<T, CarpetFindFirstOrThrowArgs<ExtArgs>>): Prisma__CarpetClient<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Carpets that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Carpets
     * const carpets = await prisma.carpet.findMany()
     * 
     * // Get first 10 Carpets
     * const carpets = await prisma.carpet.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const carpetWithIdOnly = await prisma.carpet.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CarpetFindManyArgs>(args?: SelectSubset<T, CarpetFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Carpet.
     * @param {CarpetCreateArgs} args - Arguments to create a Carpet.
     * @example
     * // Create one Carpet
     * const Carpet = await prisma.carpet.create({
     *   data: {
     *     // ... data to create a Carpet
     *   }
     * })
     * 
     */
    create<T extends CarpetCreateArgs>(args: SelectSubset<T, CarpetCreateArgs<ExtArgs>>): Prisma__CarpetClient<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Carpets.
     * @param {CarpetCreateManyArgs} args - Arguments to create many Carpets.
     * @example
     * // Create many Carpets
     * const carpet = await prisma.carpet.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CarpetCreateManyArgs>(args?: SelectSubset<T, CarpetCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Carpets and returns the data saved in the database.
     * @param {CarpetCreateManyAndReturnArgs} args - Arguments to create many Carpets.
     * @example
     * // Create many Carpets
     * const carpet = await prisma.carpet.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Carpets and only return the `id`
     * const carpetWithIdOnly = await prisma.carpet.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CarpetCreateManyAndReturnArgs>(args?: SelectSubset<T, CarpetCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Carpet.
     * @param {CarpetDeleteArgs} args - Arguments to delete one Carpet.
     * @example
     * // Delete one Carpet
     * const Carpet = await prisma.carpet.delete({
     *   where: {
     *     // ... filter to delete one Carpet
     *   }
     * })
     * 
     */
    delete<T extends CarpetDeleteArgs>(args: SelectSubset<T, CarpetDeleteArgs<ExtArgs>>): Prisma__CarpetClient<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Carpet.
     * @param {CarpetUpdateArgs} args - Arguments to update one Carpet.
     * @example
     * // Update one Carpet
     * const carpet = await prisma.carpet.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CarpetUpdateArgs>(args: SelectSubset<T, CarpetUpdateArgs<ExtArgs>>): Prisma__CarpetClient<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Carpets.
     * @param {CarpetDeleteManyArgs} args - Arguments to filter Carpets to delete.
     * @example
     * // Delete a few Carpets
     * const { count } = await prisma.carpet.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CarpetDeleteManyArgs>(args?: SelectSubset<T, CarpetDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carpets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Carpets
     * const carpet = await prisma.carpet.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CarpetUpdateManyArgs>(args: SelectSubset<T, CarpetUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Carpets and returns the data updated in the database.
     * @param {CarpetUpdateManyAndReturnArgs} args - Arguments to update many Carpets.
     * @example
     * // Update many Carpets
     * const carpet = await prisma.carpet.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Carpets and only return the `id`
     * const carpetWithIdOnly = await prisma.carpet.updateManyAndReturn({
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
    updateManyAndReturn<T extends CarpetUpdateManyAndReturnArgs>(args: SelectSubset<T, CarpetUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Carpet.
     * @param {CarpetUpsertArgs} args - Arguments to update or create a Carpet.
     * @example
     * // Update or create a Carpet
     * const carpet = await prisma.carpet.upsert({
     *   create: {
     *     // ... data to create a Carpet
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Carpet we want to update
     *   }
     * })
     */
    upsert<T extends CarpetUpsertArgs>(args: SelectSubset<T, CarpetUpsertArgs<ExtArgs>>): Prisma__CarpetClient<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Carpets.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetCountArgs} args - Arguments to filter Carpets to count.
     * @example
     * // Count the number of Carpets
     * const count = await prisma.carpet.count({
     *   where: {
     *     // ... the filter for the Carpets we want to count
     *   }
     * })
    **/
    count<T extends CarpetCountArgs>(
      args?: Subset<T, CarpetCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CarpetCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Carpet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CarpetAggregateArgs>(args: Subset<T, CarpetAggregateArgs>): Prisma.PrismaPromise<GetCarpetAggregateType<T>>

    /**
     * Group by Carpet.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CarpetGroupByArgs} args - Group by arguments.
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
      T extends CarpetGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CarpetGroupByArgs['orderBy'] }
        : { orderBy?: CarpetGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CarpetGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCarpetGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Carpet model
   */
  readonly fields: CarpetFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Carpet.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CarpetClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    saleItem<T extends Carpet$saleItemArgs<ExtArgs> = {}>(args?: Subset<T, Carpet$saleItemArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Carpet model
   */
  interface CarpetFieldRefs {
    readonly id: FieldRef<"Carpet", 'String'>
    readonly code: FieldRef<"Carpet", 'String'>
    readonly width: FieldRef<"Carpet", 'Float'>
    readonly height: FieldRef<"Carpet", 'Float'>
    readonly area: FieldRef<"Carpet", 'Float'>
    readonly pattern: FieldRef<"Carpet", 'String'>
    readonly color: FieldRef<"Carpet", 'String'>
    readonly material: FieldRef<"Carpet", 'String'>
    readonly costPrice: FieldRef<"Carpet", 'Int'>
    readonly sellPrice: FieldRef<"Carpet", 'Int'>
    readonly isSold: FieldRef<"Carpet", 'Boolean'>
    readonly soldAt: FieldRef<"Carpet", 'DateTime'>
    readonly createdAt: FieldRef<"Carpet", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Carpet findUnique
   */
  export type CarpetFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
    /**
     * Filter, which Carpet to fetch.
     */
    where: CarpetWhereUniqueInput
  }

  /**
   * Carpet findUniqueOrThrow
   */
  export type CarpetFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
    /**
     * Filter, which Carpet to fetch.
     */
    where: CarpetWhereUniqueInput
  }

  /**
   * Carpet findFirst
   */
  export type CarpetFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
    /**
     * Filter, which Carpet to fetch.
     */
    where?: CarpetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carpets to fetch.
     */
    orderBy?: CarpetOrderByWithRelationInput | CarpetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carpets.
     */
    cursor?: CarpetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carpets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carpets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carpets.
     */
    distinct?: CarpetScalarFieldEnum | CarpetScalarFieldEnum[]
  }

  /**
   * Carpet findFirstOrThrow
   */
  export type CarpetFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
    /**
     * Filter, which Carpet to fetch.
     */
    where?: CarpetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carpets to fetch.
     */
    orderBy?: CarpetOrderByWithRelationInput | CarpetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Carpets.
     */
    cursor?: CarpetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carpets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carpets.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Carpets.
     */
    distinct?: CarpetScalarFieldEnum | CarpetScalarFieldEnum[]
  }

  /**
   * Carpet findMany
   */
  export type CarpetFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
    /**
     * Filter, which Carpets to fetch.
     */
    where?: CarpetWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Carpets to fetch.
     */
    orderBy?: CarpetOrderByWithRelationInput | CarpetOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Carpets.
     */
    cursor?: CarpetWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Carpets from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Carpets.
     */
    skip?: number
    distinct?: CarpetScalarFieldEnum | CarpetScalarFieldEnum[]
  }

  /**
   * Carpet create
   */
  export type CarpetCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
    /**
     * The data needed to create a Carpet.
     */
    data: XOR<CarpetCreateInput, CarpetUncheckedCreateInput>
  }

  /**
   * Carpet createMany
   */
  export type CarpetCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Carpets.
     */
    data: CarpetCreateManyInput | CarpetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carpet createManyAndReturn
   */
  export type CarpetCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * The data used to create many Carpets.
     */
    data: CarpetCreateManyInput | CarpetCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Carpet update
   */
  export type CarpetUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
    /**
     * The data needed to update a Carpet.
     */
    data: XOR<CarpetUpdateInput, CarpetUncheckedUpdateInput>
    /**
     * Choose, which Carpet to update.
     */
    where: CarpetWhereUniqueInput
  }

  /**
   * Carpet updateMany
   */
  export type CarpetUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Carpets.
     */
    data: XOR<CarpetUpdateManyMutationInput, CarpetUncheckedUpdateManyInput>
    /**
     * Filter which Carpets to update
     */
    where?: CarpetWhereInput
    /**
     * Limit how many Carpets to update.
     */
    limit?: number
  }

  /**
   * Carpet updateManyAndReturn
   */
  export type CarpetUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * The data used to update Carpets.
     */
    data: XOR<CarpetUpdateManyMutationInput, CarpetUncheckedUpdateManyInput>
    /**
     * Filter which Carpets to update
     */
    where?: CarpetWhereInput
    /**
     * Limit how many Carpets to update.
     */
    limit?: number
  }

  /**
   * Carpet upsert
   */
  export type CarpetUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
    /**
     * The filter to search for the Carpet to update in case it exists.
     */
    where: CarpetWhereUniqueInput
    /**
     * In case the Carpet found by the `where` argument doesn't exist, create a new Carpet with this data.
     */
    create: XOR<CarpetCreateInput, CarpetUncheckedCreateInput>
    /**
     * In case the Carpet was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CarpetUpdateInput, CarpetUncheckedUpdateInput>
  }

  /**
   * Carpet delete
   */
  export type CarpetDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
    /**
     * Filter which Carpet to delete.
     */
    where: CarpetWhereUniqueInput
  }

  /**
   * Carpet deleteMany
   */
  export type CarpetDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Carpets to delete
     */
    where?: CarpetWhereInput
    /**
     * Limit how many Carpets to delete.
     */
    limit?: number
  }

  /**
   * Carpet.saleItem
   */
  export type Carpet$saleItemArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
  }

  /**
   * Carpet without action
   */
  export type CarpetDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Carpet
     */
    select?: CarpetSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Carpet
     */
    omit?: CarpetOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CarpetInclude<ExtArgs> | null
  }


  /**
   * Model Sale
   */

  export type AggregateSale = {
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  export type SaleAvgAggregateOutputType = {
    totalPrice: number | null
    totalCost: number | null
    profit: number | null
    paidAmount: number | null
    debtAmount: number | null
  }

  export type SaleSumAggregateOutputType = {
    totalPrice: number | null
    totalCost: number | null
    profit: number | null
    paidAmount: number | null
    debtAmount: number | null
  }

  export type SaleMinAggregateOutputType = {
    id: string | null
    salePointId: string | null
    sellerId: string | null
    customerId: string | null
    totalPrice: number | null
    totalCost: number | null
    profit: number | null
    paidAmount: number | null
    debtAmount: number | null
    createdAt: Date | null
  }

  export type SaleMaxAggregateOutputType = {
    id: string | null
    salePointId: string | null
    sellerId: string | null
    customerId: string | null
    totalPrice: number | null
    totalCost: number | null
    profit: number | null
    paidAmount: number | null
    debtAmount: number | null
    createdAt: Date | null
  }

  export type SaleCountAggregateOutputType = {
    id: number
    salePointId: number
    sellerId: number
    customerId: number
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount: number
    debtAmount: number
    createdAt: number
    _all: number
  }


  export type SaleAvgAggregateInputType = {
    totalPrice?: true
    totalCost?: true
    profit?: true
    paidAmount?: true
    debtAmount?: true
  }

  export type SaleSumAggregateInputType = {
    totalPrice?: true
    totalCost?: true
    profit?: true
    paidAmount?: true
    debtAmount?: true
  }

  export type SaleMinAggregateInputType = {
    id?: true
    salePointId?: true
    sellerId?: true
    customerId?: true
    totalPrice?: true
    totalCost?: true
    profit?: true
    paidAmount?: true
    debtAmount?: true
    createdAt?: true
  }

  export type SaleMaxAggregateInputType = {
    id?: true
    salePointId?: true
    sellerId?: true
    customerId?: true
    totalPrice?: true
    totalCost?: true
    profit?: true
    paidAmount?: true
    debtAmount?: true
    createdAt?: true
  }

  export type SaleCountAggregateInputType = {
    id?: true
    salePointId?: true
    sellerId?: true
    customerId?: true
    totalPrice?: true
    totalCost?: true
    profit?: true
    paidAmount?: true
    debtAmount?: true
    createdAt?: true
    _all?: true
  }

  export type SaleAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sale to aggregate.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sales
    **/
    _count?: true | SaleCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleMaxAggregateInputType
  }

  export type GetSaleAggregateType<T extends SaleAggregateArgs> = {
        [P in keyof T & keyof AggregateSale]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSale[P]>
      : GetScalarType<T[P], AggregateSale[P]>
  }




  export type SaleGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithAggregationInput | SaleOrderByWithAggregationInput[]
    by: SaleScalarFieldEnum[] | SaleScalarFieldEnum
    having?: SaleScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleCountAggregateInputType | true
    _avg?: SaleAvgAggregateInputType
    _sum?: SaleSumAggregateInputType
    _min?: SaleMinAggregateInputType
    _max?: SaleMaxAggregateInputType
  }

  export type SaleGroupByOutputType = {
    id: string
    salePointId: string
    sellerId: string | null
    customerId: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount: number
    debtAmount: number
    createdAt: Date
    _count: SaleCountAggregateOutputType | null
    _avg: SaleAvgAggregateOutputType | null
    _sum: SaleSumAggregateOutputType | null
    _min: SaleMinAggregateOutputType | null
    _max: SaleMaxAggregateOutputType | null
  }

  type GetSaleGroupByPayload<T extends SaleGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleGroupByOutputType[P]>
            : GetScalarType<T[P], SaleGroupByOutputType[P]>
        }
      >
    >


  export type SaleSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salePointId?: boolean
    sellerId?: boolean
    customerId?: boolean
    totalPrice?: boolean
    totalCost?: boolean
    profit?: boolean
    paidAmount?: boolean
    debtAmount?: boolean
    createdAt?: boolean
    salePoint?: boolean | SalePointDefaultArgs<ExtArgs>
    seller?: boolean | Sale$sellerArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    sellerProfits?: boolean | Sale$sellerProfitsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salePointId?: boolean
    sellerId?: boolean
    customerId?: boolean
    totalPrice?: boolean
    totalCost?: boolean
    profit?: boolean
    paidAmount?: boolean
    debtAmount?: boolean
    createdAt?: boolean
    salePoint?: boolean | SalePointDefaultArgs<ExtArgs>
    seller?: boolean | Sale$sellerArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    salePointId?: boolean
    sellerId?: boolean
    customerId?: boolean
    totalPrice?: boolean
    totalCost?: boolean
    profit?: boolean
    paidAmount?: boolean
    debtAmount?: boolean
    createdAt?: boolean
    salePoint?: boolean | SalePointDefaultArgs<ExtArgs>
    seller?: boolean | Sale$sellerArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }, ExtArgs["result"]["sale"]>

  export type SaleSelectScalar = {
    id?: boolean
    salePointId?: boolean
    sellerId?: boolean
    customerId?: boolean
    totalPrice?: boolean
    totalCost?: boolean
    profit?: boolean
    paidAmount?: boolean
    debtAmount?: boolean
    createdAt?: boolean
  }

  export type SaleOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "salePointId" | "sellerId" | "customerId" | "totalPrice" | "totalCost" | "profit" | "paidAmount" | "debtAmount" | "createdAt", ExtArgs["result"]["sale"]>
  export type SaleInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salePoint?: boolean | SalePointDefaultArgs<ExtArgs>
    seller?: boolean | Sale$sellerArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
    items?: boolean | Sale$itemsArgs<ExtArgs>
    sellerProfits?: boolean | Sale$sellerProfitsArgs<ExtArgs>
    _count?: boolean | SaleCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type SaleIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salePoint?: boolean | SalePointDefaultArgs<ExtArgs>
    seller?: boolean | Sale$sellerArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }
  export type SaleIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    salePoint?: boolean | SalePointDefaultArgs<ExtArgs>
    seller?: boolean | Sale$sellerArgs<ExtArgs>
    customer?: boolean | Sale$customerArgs<ExtArgs>
  }

  export type $SalePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Sale"
    objects: {
      salePoint: Prisma.$SalePointPayload<ExtArgs>
      seller: Prisma.$UserPayload<ExtArgs> | null
      customer: Prisma.$CustomerPayload<ExtArgs> | null
      items: Prisma.$SaleItemPayload<ExtArgs>[]
      sellerProfits: Prisma.$SellerProfitPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      salePointId: string
      sellerId: string | null
      customerId: string | null
      totalPrice: number
      totalCost: number
      profit: number
      paidAmount: number
      debtAmount: number
      createdAt: Date
    }, ExtArgs["result"]["sale"]>
    composites: {}
  }

  type SaleGetPayload<S extends boolean | null | undefined | SaleDefaultArgs> = $Result.GetResult<Prisma.$SalePayload, S>

  type SaleCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleCountAggregateInputType | true
    }

  export interface SaleDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Sale'], meta: { name: 'Sale' } }
    /**
     * Find zero or one Sale that matches the filter.
     * @param {SaleFindUniqueArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleFindUniqueArgs>(args: SelectSubset<T, SaleFindUniqueArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Sale that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleFindUniqueOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleFindFirstArgs>(args?: SelectSubset<T, SaleFindFirstArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Sale that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindFirstOrThrowArgs} args - Arguments to find a Sale
     * @example
     * // Get one Sale
     * const sale = await prisma.sale.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sales that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sales
     * const sales = await prisma.sale.findMany()
     * 
     * // Get first 10 Sales
     * const sales = await prisma.sale.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleWithIdOnly = await prisma.sale.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleFindManyArgs>(args?: SelectSubset<T, SaleFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Sale.
     * @param {SaleCreateArgs} args - Arguments to create a Sale.
     * @example
     * // Create one Sale
     * const Sale = await prisma.sale.create({
     *   data: {
     *     // ... data to create a Sale
     *   }
     * })
     * 
     */
    create<T extends SaleCreateArgs>(args: SelectSubset<T, SaleCreateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sales.
     * @param {SaleCreateManyArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleCreateManyArgs>(args?: SelectSubset<T, SaleCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sales and returns the data saved in the database.
     * @param {SaleCreateManyAndReturnArgs} args - Arguments to create many Sales.
     * @example
     * // Create many Sales
     * const sale = await prisma.sale.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Sale.
     * @param {SaleDeleteArgs} args - Arguments to delete one Sale.
     * @example
     * // Delete one Sale
     * const Sale = await prisma.sale.delete({
     *   where: {
     *     // ... filter to delete one Sale
     *   }
     * })
     * 
     */
    delete<T extends SaleDeleteArgs>(args: SelectSubset<T, SaleDeleteArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Sale.
     * @param {SaleUpdateArgs} args - Arguments to update one Sale.
     * @example
     * // Update one Sale
     * const sale = await prisma.sale.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleUpdateArgs>(args: SelectSubset<T, SaleUpdateArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sales.
     * @param {SaleDeleteManyArgs} args - Arguments to filter Sales to delete.
     * @example
     * // Delete a few Sales
     * const { count } = await prisma.sale.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleDeleteManyArgs>(args?: SelectSubset<T, SaleDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleUpdateManyArgs>(args: SelectSubset<T, SaleUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sales and returns the data updated in the database.
     * @param {SaleUpdateManyAndReturnArgs} args - Arguments to update many Sales.
     * @example
     * // Update many Sales
     * const sale = await prisma.sale.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sales and only return the `id`
     * const saleWithIdOnly = await prisma.sale.updateManyAndReturn({
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
    updateManyAndReturn<T extends SaleUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Sale.
     * @param {SaleUpsertArgs} args - Arguments to update or create a Sale.
     * @example
     * // Update or create a Sale
     * const sale = await prisma.sale.upsert({
     *   create: {
     *     // ... data to create a Sale
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Sale we want to update
     *   }
     * })
     */
    upsert<T extends SaleUpsertArgs>(args: SelectSubset<T, SaleUpsertArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sales.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleCountArgs} args - Arguments to filter Sales to count.
     * @example
     * // Count the number of Sales
     * const count = await prisma.sale.count({
     *   where: {
     *     // ... the filter for the Sales we want to count
     *   }
     * })
    **/
    count<T extends SaleCountArgs>(
      args?: Subset<T, SaleCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleAggregateArgs>(args: Subset<T, SaleAggregateArgs>): Prisma.PrismaPromise<GetSaleAggregateType<T>>

    /**
     * Group by Sale.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleGroupByArgs} args - Group by arguments.
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
      T extends SaleGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleGroupByArgs['orderBy'] }
        : { orderBy?: SaleGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Sale model
   */
  readonly fields: SaleFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Sale.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    salePoint<T extends SalePointDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SalePointDefaultArgs<ExtArgs>>): Prisma__SalePointClient<$Result.GetResult<Prisma.$SalePointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    seller<T extends Sale$sellerArgs<ExtArgs> = {}>(args?: Subset<T, Sale$sellerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    customer<T extends Sale$customerArgs<ExtArgs> = {}>(args?: Subset<T, Sale$customerArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    items<T extends Sale$itemsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$itemsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sellerProfits<T extends Sale$sellerProfitsArgs<ExtArgs> = {}>(args?: Subset<T, Sale$sellerProfitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Sale model
   */
  interface SaleFieldRefs {
    readonly id: FieldRef<"Sale", 'String'>
    readonly salePointId: FieldRef<"Sale", 'String'>
    readonly sellerId: FieldRef<"Sale", 'String'>
    readonly customerId: FieldRef<"Sale", 'String'>
    readonly totalPrice: FieldRef<"Sale", 'Int'>
    readonly totalCost: FieldRef<"Sale", 'Int'>
    readonly profit: FieldRef<"Sale", 'Int'>
    readonly paidAmount: FieldRef<"Sale", 'Int'>
    readonly debtAmount: FieldRef<"Sale", 'Int'>
    readonly createdAt: FieldRef<"Sale", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Sale findUnique
   */
  export type SaleFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findUniqueOrThrow
   */
  export type SaleFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale findFirst
   */
  export type SaleFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findFirstOrThrow
   */
  export type SaleFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sale to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sales.
     */
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale findMany
   */
  export type SaleFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter, which Sales to fetch.
     */
    where?: SaleWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sales to fetch.
     */
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sales.
     */
    cursor?: SaleWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sales from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sales.
     */
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Sale create
   */
  export type SaleCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to create a Sale.
     */
    data: XOR<SaleCreateInput, SaleUncheckedCreateInput>
  }

  /**
   * Sale createMany
   */
  export type SaleCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Sale createManyAndReturn
   */
  export type SaleCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to create many Sales.
     */
    data: SaleCreateManyInput | SaleCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale update
   */
  export type SaleUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The data needed to update a Sale.
     */
    data: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
    /**
     * Choose, which Sale to update.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale updateMany
   */
  export type SaleUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
  }

  /**
   * Sale updateManyAndReturn
   */
  export type SaleUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * The data used to update Sales.
     */
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyInput>
    /**
     * Filter which Sales to update
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Sale upsert
   */
  export type SaleUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * The filter to search for the Sale to update in case it exists.
     */
    where: SaleWhereUniqueInput
    /**
     * In case the Sale found by the `where` argument doesn't exist, create a new Sale with this data.
     */
    create: XOR<SaleCreateInput, SaleUncheckedCreateInput>
    /**
     * In case the Sale was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleUpdateInput, SaleUncheckedUpdateInput>
  }

  /**
   * Sale delete
   */
  export type SaleDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    /**
     * Filter which Sale to delete.
     */
    where: SaleWhereUniqueInput
  }

  /**
   * Sale deleteMany
   */
  export type SaleDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sales to delete
     */
    where?: SaleWhereInput
    /**
     * Limit how many Sales to delete.
     */
    limit?: number
  }

  /**
   * Sale.seller
   */
  export type Sale$sellerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    where?: UserWhereInput
  }

  /**
   * Sale.customer
   */
  export type Sale$customerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    where?: CustomerWhereInput
  }

  /**
   * Sale.items
   */
  export type Sale$itemsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    cursor?: SaleItemWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * Sale.sellerProfits
   */
  export type Sale$sellerProfitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    where?: SellerProfitWhereInput
    orderBy?: SellerProfitOrderByWithRelationInput | SellerProfitOrderByWithRelationInput[]
    cursor?: SellerProfitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SellerProfitScalarFieldEnum | SellerProfitScalarFieldEnum[]
  }

  /**
   * Sale without action
   */
  export type SaleDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
  }


  /**
   * Model SaleItem
   */

  export type AggregateSaleItem = {
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  export type SaleItemAvgAggregateOutputType = {
    price: number | null
    cost: number | null
    profit: number | null
  }

  export type SaleItemSumAggregateOutputType = {
    price: number | null
    cost: number | null
    profit: number | null
  }

  export type SaleItemMinAggregateOutputType = {
    id: string | null
    saleId: string | null
    carpetId: string | null
    price: number | null
    cost: number | null
    profit: number | null
  }

  export type SaleItemMaxAggregateOutputType = {
    id: string | null
    saleId: string | null
    carpetId: string | null
    price: number | null
    cost: number | null
    profit: number | null
  }

  export type SaleItemCountAggregateOutputType = {
    id: number
    saleId: number
    carpetId: number
    price: number
    cost: number
    profit: number
    _all: number
  }


  export type SaleItemAvgAggregateInputType = {
    price?: true
    cost?: true
    profit?: true
  }

  export type SaleItemSumAggregateInputType = {
    price?: true
    cost?: true
    profit?: true
  }

  export type SaleItemMinAggregateInputType = {
    id?: true
    saleId?: true
    carpetId?: true
    price?: true
    cost?: true
    profit?: true
  }

  export type SaleItemMaxAggregateInputType = {
    id?: true
    saleId?: true
    carpetId?: true
    price?: true
    cost?: true
    profit?: true
  }

  export type SaleItemCountAggregateInputType = {
    id?: true
    saleId?: true
    carpetId?: true
    price?: true
    cost?: true
    profit?: true
    _all?: true
  }

  export type SaleItemAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItem to aggregate.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SaleItems
    **/
    _count?: true | SaleItemCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SaleItemAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SaleItemSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SaleItemMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SaleItemMaxAggregateInputType
  }

  export type GetSaleItemAggregateType<T extends SaleItemAggregateArgs> = {
        [P in keyof T & keyof AggregateSaleItem]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSaleItem[P]>
      : GetScalarType<T[P], AggregateSaleItem[P]>
  }




  export type SaleItemGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SaleItemWhereInput
    orderBy?: SaleItemOrderByWithAggregationInput | SaleItemOrderByWithAggregationInput[]
    by: SaleItemScalarFieldEnum[] | SaleItemScalarFieldEnum
    having?: SaleItemScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SaleItemCountAggregateInputType | true
    _avg?: SaleItemAvgAggregateInputType
    _sum?: SaleItemSumAggregateInputType
    _min?: SaleItemMinAggregateInputType
    _max?: SaleItemMaxAggregateInputType
  }

  export type SaleItemGroupByOutputType = {
    id: string
    saleId: string
    carpetId: string
    price: number
    cost: number
    profit: number
    _count: SaleItemCountAggregateOutputType | null
    _avg: SaleItemAvgAggregateOutputType | null
    _sum: SaleItemSumAggregateOutputType | null
    _min: SaleItemMinAggregateOutputType | null
    _max: SaleItemMaxAggregateOutputType | null
  }

  type GetSaleItemGroupByPayload<T extends SaleItemGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SaleItemGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SaleItemGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
            : GetScalarType<T[P], SaleItemGroupByOutputType[P]>
        }
      >
    >


  export type SaleItemSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    carpetId?: boolean
    price?: boolean
    cost?: boolean
    profit?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    carpet?: boolean | CarpetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    carpetId?: boolean
    price?: boolean
    cost?: boolean
    profit?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    carpet?: boolean | CarpetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    saleId?: boolean
    carpetId?: boolean
    price?: boolean
    cost?: boolean
    profit?: boolean
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    carpet?: boolean | CarpetDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["saleItem"]>

  export type SaleItemSelectScalar = {
    id?: boolean
    saleId?: boolean
    carpetId?: boolean
    price?: boolean
    cost?: boolean
    profit?: boolean
  }

  export type SaleItemOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "saleId" | "carpetId" | "price" | "cost" | "profit", ExtArgs["result"]["saleItem"]>
  export type SaleItemInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    carpet?: boolean | CarpetDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    carpet?: boolean | CarpetDefaultArgs<ExtArgs>
  }
  export type SaleItemIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sale?: boolean | SaleDefaultArgs<ExtArgs>
    carpet?: boolean | CarpetDefaultArgs<ExtArgs>
  }

  export type $SaleItemPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SaleItem"
    objects: {
      sale: Prisma.$SalePayload<ExtArgs>
      carpet: Prisma.$CarpetPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      saleId: string
      carpetId: string
      price: number
      cost: number
      profit: number
    }, ExtArgs["result"]["saleItem"]>
    composites: {}
  }

  type SaleItemGetPayload<S extends boolean | null | undefined | SaleItemDefaultArgs> = $Result.GetResult<Prisma.$SaleItemPayload, S>

  type SaleItemCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SaleItemFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SaleItemCountAggregateInputType | true
    }

  export interface SaleItemDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SaleItem'], meta: { name: 'SaleItem' } }
    /**
     * Find zero or one SaleItem that matches the filter.
     * @param {SaleItemFindUniqueArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SaleItemFindUniqueArgs>(args: SelectSubset<T, SaleItemFindUniqueArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SaleItem that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SaleItemFindUniqueOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SaleItemFindUniqueOrThrowArgs>(args: SelectSubset<T, SaleItemFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SaleItemFindFirstArgs>(args?: SelectSubset<T, SaleItemFindFirstArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SaleItem that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindFirstOrThrowArgs} args - Arguments to find a SaleItem
     * @example
     * // Get one SaleItem
     * const saleItem = await prisma.saleItem.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SaleItemFindFirstOrThrowArgs>(args?: SelectSubset<T, SaleItemFindFirstOrThrowArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SaleItems that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SaleItems
     * const saleItems = await prisma.saleItem.findMany()
     * 
     * // Get first 10 SaleItems
     * const saleItems = await prisma.saleItem.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SaleItemFindManyArgs>(args?: SelectSubset<T, SaleItemFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SaleItem.
     * @param {SaleItemCreateArgs} args - Arguments to create a SaleItem.
     * @example
     * // Create one SaleItem
     * const SaleItem = await prisma.saleItem.create({
     *   data: {
     *     // ... data to create a SaleItem
     *   }
     * })
     * 
     */
    create<T extends SaleItemCreateArgs>(args: SelectSubset<T, SaleItemCreateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SaleItems.
     * @param {SaleItemCreateManyArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SaleItemCreateManyArgs>(args?: SelectSubset<T, SaleItemCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SaleItems and returns the data saved in the database.
     * @param {SaleItemCreateManyAndReturnArgs} args - Arguments to create many SaleItems.
     * @example
     * // Create many SaleItems
     * const saleItem = await prisma.saleItem.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SaleItemCreateManyAndReturnArgs>(args?: SelectSubset<T, SaleItemCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SaleItem.
     * @param {SaleItemDeleteArgs} args - Arguments to delete one SaleItem.
     * @example
     * // Delete one SaleItem
     * const SaleItem = await prisma.saleItem.delete({
     *   where: {
     *     // ... filter to delete one SaleItem
     *   }
     * })
     * 
     */
    delete<T extends SaleItemDeleteArgs>(args: SelectSubset<T, SaleItemDeleteArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SaleItem.
     * @param {SaleItemUpdateArgs} args - Arguments to update one SaleItem.
     * @example
     * // Update one SaleItem
     * const saleItem = await prisma.saleItem.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SaleItemUpdateArgs>(args: SelectSubset<T, SaleItemUpdateArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SaleItems.
     * @param {SaleItemDeleteManyArgs} args - Arguments to filter SaleItems to delete.
     * @example
     * // Delete a few SaleItems
     * const { count } = await prisma.saleItem.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SaleItemDeleteManyArgs>(args?: SelectSubset<T, SaleItemDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SaleItemUpdateManyArgs>(args: SelectSubset<T, SaleItemUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SaleItems and returns the data updated in the database.
     * @param {SaleItemUpdateManyAndReturnArgs} args - Arguments to update many SaleItems.
     * @example
     * // Update many SaleItems
     * const saleItem = await prisma.saleItem.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SaleItems and only return the `id`
     * const saleItemWithIdOnly = await prisma.saleItem.updateManyAndReturn({
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
    updateManyAndReturn<T extends SaleItemUpdateManyAndReturnArgs>(args: SelectSubset<T, SaleItemUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SaleItem.
     * @param {SaleItemUpsertArgs} args - Arguments to update or create a SaleItem.
     * @example
     * // Update or create a SaleItem
     * const saleItem = await prisma.saleItem.upsert({
     *   create: {
     *     // ... data to create a SaleItem
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SaleItem we want to update
     *   }
     * })
     */
    upsert<T extends SaleItemUpsertArgs>(args: SelectSubset<T, SaleItemUpsertArgs<ExtArgs>>): Prisma__SaleItemClient<$Result.GetResult<Prisma.$SaleItemPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SaleItems.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemCountArgs} args - Arguments to filter SaleItems to count.
     * @example
     * // Count the number of SaleItems
     * const count = await prisma.saleItem.count({
     *   where: {
     *     // ... the filter for the SaleItems we want to count
     *   }
     * })
    **/
    count<T extends SaleItemCountArgs>(
      args?: Subset<T, SaleItemCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SaleItemCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SaleItemAggregateArgs>(args: Subset<T, SaleItemAggregateArgs>): Prisma.PrismaPromise<GetSaleItemAggregateType<T>>

    /**
     * Group by SaleItem.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SaleItemGroupByArgs} args - Group by arguments.
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
      T extends SaleItemGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SaleItemGroupByArgs['orderBy'] }
        : { orderBy?: SaleItemGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SaleItemGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSaleItemGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SaleItem model
   */
  readonly fields: SaleItemFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SaleItem.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SaleItemClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    carpet<T extends CarpetDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CarpetDefaultArgs<ExtArgs>>): Prisma__CarpetClient<$Result.GetResult<Prisma.$CarpetPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SaleItem model
   */
  interface SaleItemFieldRefs {
    readonly id: FieldRef<"SaleItem", 'String'>
    readonly saleId: FieldRef<"SaleItem", 'String'>
    readonly carpetId: FieldRef<"SaleItem", 'String'>
    readonly price: FieldRef<"SaleItem", 'Int'>
    readonly cost: FieldRef<"SaleItem", 'Int'>
    readonly profit: FieldRef<"SaleItem", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * SaleItem findUnique
   */
  export type SaleItemFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findUniqueOrThrow
   */
  export type SaleItemFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem findFirst
   */
  export type SaleItemFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findFirstOrThrow
   */
  export type SaleItemFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItem to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SaleItems.
     */
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem findMany
   */
  export type SaleItemFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter, which SaleItems to fetch.
     */
    where?: SaleItemWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SaleItems to fetch.
     */
    orderBy?: SaleItemOrderByWithRelationInput | SaleItemOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SaleItems.
     */
    cursor?: SaleItemWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SaleItems from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SaleItems.
     */
    skip?: number
    distinct?: SaleItemScalarFieldEnum | SaleItemScalarFieldEnum[]
  }

  /**
   * SaleItem create
   */
  export type SaleItemCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to create a SaleItem.
     */
    data: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
  }

  /**
   * SaleItem createMany
   */
  export type SaleItemCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SaleItem createManyAndReturn
   */
  export type SaleItemCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to create many SaleItems.
     */
    data: SaleItemCreateManyInput | SaleItemCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem update
   */
  export type SaleItemUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The data needed to update a SaleItem.
     */
    data: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
    /**
     * Choose, which SaleItem to update.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem updateMany
   */
  export type SaleItemUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
  }

  /**
   * SaleItem updateManyAndReturn
   */
  export type SaleItemUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * The data used to update SaleItems.
     */
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyInput>
    /**
     * Filter which SaleItems to update
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SaleItem upsert
   */
  export type SaleItemUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * The filter to search for the SaleItem to update in case it exists.
     */
    where: SaleItemWhereUniqueInput
    /**
     * In case the SaleItem found by the `where` argument doesn't exist, create a new SaleItem with this data.
     */
    create: XOR<SaleItemCreateInput, SaleItemUncheckedCreateInput>
    /**
     * In case the SaleItem was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SaleItemUpdateInput, SaleItemUncheckedUpdateInput>
  }

  /**
   * SaleItem delete
   */
  export type SaleItemDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
    /**
     * Filter which SaleItem to delete.
     */
    where: SaleItemWhereUniqueInput
  }

  /**
   * SaleItem deleteMany
   */
  export type SaleItemDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SaleItems to delete
     */
    where?: SaleItemWhereInput
    /**
     * Limit how many SaleItems to delete.
     */
    limit?: number
  }

  /**
   * SaleItem without action
   */
  export type SaleItemDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SaleItem
     */
    select?: SaleItemSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SaleItem
     */
    omit?: SaleItemOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleItemInclude<ExtArgs> | null
  }


  /**
   * Model Customer
   */

  export type AggregateCustomer = {
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  export type CustomerMinAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type CustomerMaxAggregateOutputType = {
    id: string | null
    name: string | null
    phone: string | null
    createdAt: Date | null
  }

  export type CustomerCountAggregateOutputType = {
    id: number
    name: number
    phone: number
    createdAt: number
    _all: number
  }


  export type CustomerMinAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
  }

  export type CustomerMaxAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
  }

  export type CustomerCountAggregateInputType = {
    id?: true
    name?: true
    phone?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customer to aggregate.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Customers
    **/
    _count?: true | CustomerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerMaxAggregateInputType
  }

  export type GetCustomerAggregateType<T extends CustomerAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomer[P]>
      : GetScalarType<T[P], AggregateCustomer[P]>
  }




  export type CustomerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerWhereInput
    orderBy?: CustomerOrderByWithAggregationInput | CustomerOrderByWithAggregationInput[]
    by: CustomerScalarFieldEnum[] | CustomerScalarFieldEnum
    having?: CustomerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerCountAggregateInputType | true
    _min?: CustomerMinAggregateInputType
    _max?: CustomerMaxAggregateInputType
  }

  export type CustomerGroupByOutputType = {
    id: string
    name: string
    phone: string | null
    createdAt: Date
    _count: CustomerCountAggregateOutputType | null
    _min: CustomerMinAggregateOutputType | null
    _max: CustomerMaxAggregateOutputType | null
  }

  type GetCustomerGroupByPayload<T extends CustomerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerGroupByOutputType[P]>
        }
      >
    >


  export type CustomerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
    sales?: boolean | Customer$salesArgs<ExtArgs>
    debts?: boolean | Customer$debtsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["customer"]>

  export type CustomerSelectScalar = {
    id?: boolean
    name?: boolean
    phone?: boolean
    createdAt?: boolean
  }

  export type CustomerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "phone" | "createdAt", ExtArgs["result"]["customer"]>
  export type CustomerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sales?: boolean | Customer$salesArgs<ExtArgs>
    debts?: boolean | Customer$debtsArgs<ExtArgs>
    _count?: boolean | CustomerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CustomerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CustomerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CustomerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Customer"
    objects: {
      sales: Prisma.$SalePayload<ExtArgs>[]
      debts: Prisma.$CustomerDebtPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      phone: string | null
      createdAt: Date
    }, ExtArgs["result"]["customer"]>
    composites: {}
  }

  type CustomerGetPayload<S extends boolean | null | undefined | CustomerDefaultArgs> = $Result.GetResult<Prisma.$CustomerPayload, S>

  type CustomerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerCountAggregateInputType | true
    }

  export interface CustomerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Customer'], meta: { name: 'Customer' } }
    /**
     * Find zero or one Customer that matches the filter.
     * @param {CustomerFindUniqueArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerFindUniqueArgs>(args: SelectSubset<T, CustomerFindUniqueArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Customer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerFindUniqueOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerFindFirstArgs>(args?: SelectSubset<T, CustomerFindFirstArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Customer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindFirstOrThrowArgs} args - Arguments to find a Customer
     * @example
     * // Get one Customer
     * const customer = await prisma.customer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Customers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Customers
     * const customers = await prisma.customer.findMany()
     * 
     * // Get first 10 Customers
     * const customers = await prisma.customer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerWithIdOnly = await prisma.customer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerFindManyArgs>(args?: SelectSubset<T, CustomerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Customer.
     * @param {CustomerCreateArgs} args - Arguments to create a Customer.
     * @example
     * // Create one Customer
     * const Customer = await prisma.customer.create({
     *   data: {
     *     // ... data to create a Customer
     *   }
     * })
     * 
     */
    create<T extends CustomerCreateArgs>(args: SelectSubset<T, CustomerCreateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Customers.
     * @param {CustomerCreateManyArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerCreateManyArgs>(args?: SelectSubset<T, CustomerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Customers and returns the data saved in the database.
     * @param {CustomerCreateManyAndReturnArgs} args - Arguments to create many Customers.
     * @example
     * // Create many Customers
     * const customer = await prisma.customer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Customer.
     * @param {CustomerDeleteArgs} args - Arguments to delete one Customer.
     * @example
     * // Delete one Customer
     * const Customer = await prisma.customer.delete({
     *   where: {
     *     // ... filter to delete one Customer
     *   }
     * })
     * 
     */
    delete<T extends CustomerDeleteArgs>(args: SelectSubset<T, CustomerDeleteArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Customer.
     * @param {CustomerUpdateArgs} args - Arguments to update one Customer.
     * @example
     * // Update one Customer
     * const customer = await prisma.customer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerUpdateArgs>(args: SelectSubset<T, CustomerUpdateArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Customers.
     * @param {CustomerDeleteManyArgs} args - Arguments to filter Customers to delete.
     * @example
     * // Delete a few Customers
     * const { count } = await prisma.customer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDeleteManyArgs>(args?: SelectSubset<T, CustomerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerUpdateManyArgs>(args: SelectSubset<T, CustomerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Customers and returns the data updated in the database.
     * @param {CustomerUpdateManyAndReturnArgs} args - Arguments to update many Customers.
     * @example
     * // Update many Customers
     * const customer = await prisma.customer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Customers and only return the `id`
     * const customerWithIdOnly = await prisma.customer.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Customer.
     * @param {CustomerUpsertArgs} args - Arguments to update or create a Customer.
     * @example
     * // Update or create a Customer
     * const customer = await prisma.customer.upsert({
     *   create: {
     *     // ... data to create a Customer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Customer we want to update
     *   }
     * })
     */
    upsert<T extends CustomerUpsertArgs>(args: SelectSubset<T, CustomerUpsertArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Customers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerCountArgs} args - Arguments to filter Customers to count.
     * @example
     * // Count the number of Customers
     * const count = await prisma.customer.count({
     *   where: {
     *     // ... the filter for the Customers we want to count
     *   }
     * })
    **/
    count<T extends CustomerCountArgs>(
      args?: Subset<T, CustomerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerAggregateArgs>(args: Subset<T, CustomerAggregateArgs>): Prisma.PrismaPromise<GetCustomerAggregateType<T>>

    /**
     * Group by Customer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerGroupByArgs} args - Group by arguments.
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
      T extends CustomerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerGroupByArgs['orderBy'] }
        : { orderBy?: CustomerGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Customer model
   */
  readonly fields: CustomerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Customer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sales<T extends Customer$salesArgs<ExtArgs> = {}>(args?: Subset<T, Customer$salesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    debts<T extends Customer$debtsArgs<ExtArgs> = {}>(args?: Subset<T, Customer$debtsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Customer model
   */
  interface CustomerFieldRefs {
    readonly id: FieldRef<"Customer", 'String'>
    readonly name: FieldRef<"Customer", 'String'>
    readonly phone: FieldRef<"Customer", 'String'>
    readonly createdAt: FieldRef<"Customer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Customer findUnique
   */
  export type CustomerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findUniqueOrThrow
   */
  export type CustomerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer findFirst
   */
  export type CustomerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findFirstOrThrow
   */
  export type CustomerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customer to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Customers.
     */
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer findMany
   */
  export type CustomerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter, which Customers to fetch.
     */
    where?: CustomerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Customers to fetch.
     */
    orderBy?: CustomerOrderByWithRelationInput | CustomerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Customers.
     */
    cursor?: CustomerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Customers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Customers.
     */
    skip?: number
    distinct?: CustomerScalarFieldEnum | CustomerScalarFieldEnum[]
  }

  /**
   * Customer create
   */
  export type CustomerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to create a Customer.
     */
    data: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
  }

  /**
   * Customer createMany
   */
  export type CustomerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer createManyAndReturn
   */
  export type CustomerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to create many Customers.
     */
    data: CustomerCreateManyInput | CustomerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Customer update
   */
  export type CustomerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The data needed to update a Customer.
     */
    data: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
    /**
     * Choose, which Customer to update.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer updateMany
   */
  export type CustomerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer updateManyAndReturn
   */
  export type CustomerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * The data used to update Customers.
     */
    data: XOR<CustomerUpdateManyMutationInput, CustomerUncheckedUpdateManyInput>
    /**
     * Filter which Customers to update
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to update.
     */
    limit?: number
  }

  /**
   * Customer upsert
   */
  export type CustomerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * The filter to search for the Customer to update in case it exists.
     */
    where: CustomerWhereUniqueInput
    /**
     * In case the Customer found by the `where` argument doesn't exist, create a new Customer with this data.
     */
    create: XOR<CustomerCreateInput, CustomerUncheckedCreateInput>
    /**
     * In case the Customer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerUpdateInput, CustomerUncheckedUpdateInput>
  }

  /**
   * Customer delete
   */
  export type CustomerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
    /**
     * Filter which Customer to delete.
     */
    where: CustomerWhereUniqueInput
  }

  /**
   * Customer deleteMany
   */
  export type CustomerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Customers to delete
     */
    where?: CustomerWhereInput
    /**
     * Limit how many Customers to delete.
     */
    limit?: number
  }

  /**
   * Customer.sales
   */
  export type Customer$salesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Sale
     */
    select?: SaleSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Sale
     */
    omit?: SaleOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SaleInclude<ExtArgs> | null
    where?: SaleWhereInput
    orderBy?: SaleOrderByWithRelationInput | SaleOrderByWithRelationInput[]
    cursor?: SaleWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SaleScalarFieldEnum | SaleScalarFieldEnum[]
  }

  /**
   * Customer.debts
   */
  export type Customer$debtsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    where?: CustomerDebtWhereInput
    orderBy?: CustomerDebtOrderByWithRelationInput | CustomerDebtOrderByWithRelationInput[]
    cursor?: CustomerDebtWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CustomerDebtScalarFieldEnum | CustomerDebtScalarFieldEnum[]
  }

  /**
   * Customer without action
   */
  export type CustomerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Customer
     */
    select?: CustomerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Customer
     */
    omit?: CustomerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerInclude<ExtArgs> | null
  }


  /**
   * Model CustomerDebt
   */

  export type AggregateCustomerDebt = {
    _count: CustomerDebtCountAggregateOutputType | null
    _avg: CustomerDebtAvgAggregateOutputType | null
    _sum: CustomerDebtSumAggregateOutputType | null
    _min: CustomerDebtMinAggregateOutputType | null
    _max: CustomerDebtMaxAggregateOutputType | null
  }

  export type CustomerDebtAvgAggregateOutputType = {
    amount: number | null
  }

  export type CustomerDebtSumAggregateOutputType = {
    amount: number | null
  }

  export type CustomerDebtMinAggregateOutputType = {
    id: string | null
    customerId: string | null
    amount: number | null
    note: string | null
    paymentDate: Date | null
    createdAt: Date | null
  }

  export type CustomerDebtMaxAggregateOutputType = {
    id: string | null
    customerId: string | null
    amount: number | null
    note: string | null
    paymentDate: Date | null
    createdAt: Date | null
  }

  export type CustomerDebtCountAggregateOutputType = {
    id: number
    customerId: number
    amount: number
    note: number
    paymentDate: number
    createdAt: number
    _all: number
  }


  export type CustomerDebtAvgAggregateInputType = {
    amount?: true
  }

  export type CustomerDebtSumAggregateInputType = {
    amount?: true
  }

  export type CustomerDebtMinAggregateInputType = {
    id?: true
    customerId?: true
    amount?: true
    note?: true
    paymentDate?: true
    createdAt?: true
  }

  export type CustomerDebtMaxAggregateInputType = {
    id?: true
    customerId?: true
    amount?: true
    note?: true
    paymentDate?: true
    createdAt?: true
  }

  export type CustomerDebtCountAggregateInputType = {
    id?: true
    customerId?: true
    amount?: true
    note?: true
    paymentDate?: true
    createdAt?: true
    _all?: true
  }

  export type CustomerDebtAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerDebt to aggregate.
     */
    where?: CustomerDebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDebts to fetch.
     */
    orderBy?: CustomerDebtOrderByWithRelationInput | CustomerDebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CustomerDebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDebts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDebts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned CustomerDebts
    **/
    _count?: true | CustomerDebtCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CustomerDebtAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CustomerDebtSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CustomerDebtMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CustomerDebtMaxAggregateInputType
  }

  export type GetCustomerDebtAggregateType<T extends CustomerDebtAggregateArgs> = {
        [P in keyof T & keyof AggregateCustomerDebt]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCustomerDebt[P]>
      : GetScalarType<T[P], AggregateCustomerDebt[P]>
  }




  export type CustomerDebtGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CustomerDebtWhereInput
    orderBy?: CustomerDebtOrderByWithAggregationInput | CustomerDebtOrderByWithAggregationInput[]
    by: CustomerDebtScalarFieldEnum[] | CustomerDebtScalarFieldEnum
    having?: CustomerDebtScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CustomerDebtCountAggregateInputType | true
    _avg?: CustomerDebtAvgAggregateInputType
    _sum?: CustomerDebtSumAggregateInputType
    _min?: CustomerDebtMinAggregateInputType
    _max?: CustomerDebtMaxAggregateInputType
  }

  export type CustomerDebtGroupByOutputType = {
    id: string
    customerId: string
    amount: number
    note: string | null
    paymentDate: Date | null
    createdAt: Date
    _count: CustomerDebtCountAggregateOutputType | null
    _avg: CustomerDebtAvgAggregateOutputType | null
    _sum: CustomerDebtSumAggregateOutputType | null
    _min: CustomerDebtMinAggregateOutputType | null
    _max: CustomerDebtMaxAggregateOutputType | null
  }

  type GetCustomerDebtGroupByPayload<T extends CustomerDebtGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CustomerDebtGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CustomerDebtGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CustomerDebtGroupByOutputType[P]>
            : GetScalarType<T[P], CustomerDebtGroupByOutputType[P]>
        }
      >
    >


  export type CustomerDebtSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    amount?: boolean
    note?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerDebt"]>

  export type CustomerDebtSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    amount?: boolean
    note?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerDebt"]>

  export type CustomerDebtSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    customerId?: boolean
    amount?: boolean
    note?: boolean
    paymentDate?: boolean
    createdAt?: boolean
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["customerDebt"]>

  export type CustomerDebtSelectScalar = {
    id?: boolean
    customerId?: boolean
    amount?: boolean
    note?: boolean
    paymentDate?: boolean
    createdAt?: boolean
  }

  export type CustomerDebtOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "customerId" | "amount" | "note" | "paymentDate" | "createdAt", ExtArgs["result"]["customerDebt"]>
  export type CustomerDebtInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerDebtIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }
  export type CustomerDebtIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    customer?: boolean | CustomerDefaultArgs<ExtArgs>
  }

  export type $CustomerDebtPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "CustomerDebt"
    objects: {
      customer: Prisma.$CustomerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      customerId: string
      amount: number
      note: string | null
      paymentDate: Date | null
      createdAt: Date
    }, ExtArgs["result"]["customerDebt"]>
    composites: {}
  }

  type CustomerDebtGetPayload<S extends boolean | null | undefined | CustomerDebtDefaultArgs> = $Result.GetResult<Prisma.$CustomerDebtPayload, S>

  type CustomerDebtCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CustomerDebtFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CustomerDebtCountAggregateInputType | true
    }

  export interface CustomerDebtDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['CustomerDebt'], meta: { name: 'CustomerDebt' } }
    /**
     * Find zero or one CustomerDebt that matches the filter.
     * @param {CustomerDebtFindUniqueArgs} args - Arguments to find a CustomerDebt
     * @example
     * // Get one CustomerDebt
     * const customerDebt = await prisma.customerDebt.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CustomerDebtFindUniqueArgs>(args: SelectSubset<T, CustomerDebtFindUniqueArgs<ExtArgs>>): Prisma__CustomerDebtClient<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one CustomerDebt that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CustomerDebtFindUniqueOrThrowArgs} args - Arguments to find a CustomerDebt
     * @example
     * // Get one CustomerDebt
     * const customerDebt = await prisma.customerDebt.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CustomerDebtFindUniqueOrThrowArgs>(args: SelectSubset<T, CustomerDebtFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CustomerDebtClient<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerDebt that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDebtFindFirstArgs} args - Arguments to find a CustomerDebt
     * @example
     * // Get one CustomerDebt
     * const customerDebt = await prisma.customerDebt.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CustomerDebtFindFirstArgs>(args?: SelectSubset<T, CustomerDebtFindFirstArgs<ExtArgs>>): Prisma__CustomerDebtClient<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first CustomerDebt that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDebtFindFirstOrThrowArgs} args - Arguments to find a CustomerDebt
     * @example
     * // Get one CustomerDebt
     * const customerDebt = await prisma.customerDebt.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CustomerDebtFindFirstOrThrowArgs>(args?: SelectSubset<T, CustomerDebtFindFirstOrThrowArgs<ExtArgs>>): Prisma__CustomerDebtClient<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more CustomerDebts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDebtFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all CustomerDebts
     * const customerDebts = await prisma.customerDebt.findMany()
     * 
     * // Get first 10 CustomerDebts
     * const customerDebts = await prisma.customerDebt.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const customerDebtWithIdOnly = await prisma.customerDebt.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CustomerDebtFindManyArgs>(args?: SelectSubset<T, CustomerDebtFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a CustomerDebt.
     * @param {CustomerDebtCreateArgs} args - Arguments to create a CustomerDebt.
     * @example
     * // Create one CustomerDebt
     * const CustomerDebt = await prisma.customerDebt.create({
     *   data: {
     *     // ... data to create a CustomerDebt
     *   }
     * })
     * 
     */
    create<T extends CustomerDebtCreateArgs>(args: SelectSubset<T, CustomerDebtCreateArgs<ExtArgs>>): Prisma__CustomerDebtClient<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many CustomerDebts.
     * @param {CustomerDebtCreateManyArgs} args - Arguments to create many CustomerDebts.
     * @example
     * // Create many CustomerDebts
     * const customerDebt = await prisma.customerDebt.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CustomerDebtCreateManyArgs>(args?: SelectSubset<T, CustomerDebtCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many CustomerDebts and returns the data saved in the database.
     * @param {CustomerDebtCreateManyAndReturnArgs} args - Arguments to create many CustomerDebts.
     * @example
     * // Create many CustomerDebts
     * const customerDebt = await prisma.customerDebt.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many CustomerDebts and only return the `id`
     * const customerDebtWithIdOnly = await prisma.customerDebt.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CustomerDebtCreateManyAndReturnArgs>(args?: SelectSubset<T, CustomerDebtCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a CustomerDebt.
     * @param {CustomerDebtDeleteArgs} args - Arguments to delete one CustomerDebt.
     * @example
     * // Delete one CustomerDebt
     * const CustomerDebt = await prisma.customerDebt.delete({
     *   where: {
     *     // ... filter to delete one CustomerDebt
     *   }
     * })
     * 
     */
    delete<T extends CustomerDebtDeleteArgs>(args: SelectSubset<T, CustomerDebtDeleteArgs<ExtArgs>>): Prisma__CustomerDebtClient<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one CustomerDebt.
     * @param {CustomerDebtUpdateArgs} args - Arguments to update one CustomerDebt.
     * @example
     * // Update one CustomerDebt
     * const customerDebt = await prisma.customerDebt.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CustomerDebtUpdateArgs>(args: SelectSubset<T, CustomerDebtUpdateArgs<ExtArgs>>): Prisma__CustomerDebtClient<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more CustomerDebts.
     * @param {CustomerDebtDeleteManyArgs} args - Arguments to filter CustomerDebts to delete.
     * @example
     * // Delete a few CustomerDebts
     * const { count } = await prisma.customerDebt.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CustomerDebtDeleteManyArgs>(args?: SelectSubset<T, CustomerDebtDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerDebts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDebtUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many CustomerDebts
     * const customerDebt = await prisma.customerDebt.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CustomerDebtUpdateManyArgs>(args: SelectSubset<T, CustomerDebtUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more CustomerDebts and returns the data updated in the database.
     * @param {CustomerDebtUpdateManyAndReturnArgs} args - Arguments to update many CustomerDebts.
     * @example
     * // Update many CustomerDebts
     * const customerDebt = await prisma.customerDebt.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more CustomerDebts and only return the `id`
     * const customerDebtWithIdOnly = await prisma.customerDebt.updateManyAndReturn({
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
    updateManyAndReturn<T extends CustomerDebtUpdateManyAndReturnArgs>(args: SelectSubset<T, CustomerDebtUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one CustomerDebt.
     * @param {CustomerDebtUpsertArgs} args - Arguments to update or create a CustomerDebt.
     * @example
     * // Update or create a CustomerDebt
     * const customerDebt = await prisma.customerDebt.upsert({
     *   create: {
     *     // ... data to create a CustomerDebt
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the CustomerDebt we want to update
     *   }
     * })
     */
    upsert<T extends CustomerDebtUpsertArgs>(args: SelectSubset<T, CustomerDebtUpsertArgs<ExtArgs>>): Prisma__CustomerDebtClient<$Result.GetResult<Prisma.$CustomerDebtPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of CustomerDebts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDebtCountArgs} args - Arguments to filter CustomerDebts to count.
     * @example
     * // Count the number of CustomerDebts
     * const count = await prisma.customerDebt.count({
     *   where: {
     *     // ... the filter for the CustomerDebts we want to count
     *   }
     * })
    **/
    count<T extends CustomerDebtCountArgs>(
      args?: Subset<T, CustomerDebtCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CustomerDebtCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a CustomerDebt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDebtAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CustomerDebtAggregateArgs>(args: Subset<T, CustomerDebtAggregateArgs>): Prisma.PrismaPromise<GetCustomerDebtAggregateType<T>>

    /**
     * Group by CustomerDebt.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CustomerDebtGroupByArgs} args - Group by arguments.
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
      T extends CustomerDebtGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CustomerDebtGroupByArgs['orderBy'] }
        : { orderBy?: CustomerDebtGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CustomerDebtGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCustomerDebtGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the CustomerDebt model
   */
  readonly fields: CustomerDebtFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for CustomerDebt.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CustomerDebtClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    customer<T extends CustomerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CustomerDefaultArgs<ExtArgs>>): Prisma__CustomerClient<$Result.GetResult<Prisma.$CustomerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the CustomerDebt model
   */
  interface CustomerDebtFieldRefs {
    readonly id: FieldRef<"CustomerDebt", 'String'>
    readonly customerId: FieldRef<"CustomerDebt", 'String'>
    readonly amount: FieldRef<"CustomerDebt", 'Int'>
    readonly note: FieldRef<"CustomerDebt", 'String'>
    readonly paymentDate: FieldRef<"CustomerDebt", 'DateTime'>
    readonly createdAt: FieldRef<"CustomerDebt", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * CustomerDebt findUnique
   */
  export type CustomerDebtFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDebt to fetch.
     */
    where: CustomerDebtWhereUniqueInput
  }

  /**
   * CustomerDebt findUniqueOrThrow
   */
  export type CustomerDebtFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDebt to fetch.
     */
    where: CustomerDebtWhereUniqueInput
  }

  /**
   * CustomerDebt findFirst
   */
  export type CustomerDebtFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDebt to fetch.
     */
    where?: CustomerDebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDebts to fetch.
     */
    orderBy?: CustomerDebtOrderByWithRelationInput | CustomerDebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerDebts.
     */
    cursor?: CustomerDebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDebts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDebts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerDebts.
     */
    distinct?: CustomerDebtScalarFieldEnum | CustomerDebtScalarFieldEnum[]
  }

  /**
   * CustomerDebt findFirstOrThrow
   */
  export type CustomerDebtFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDebt to fetch.
     */
    where?: CustomerDebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDebts to fetch.
     */
    orderBy?: CustomerDebtOrderByWithRelationInput | CustomerDebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for CustomerDebts.
     */
    cursor?: CustomerDebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDebts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDebts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of CustomerDebts.
     */
    distinct?: CustomerDebtScalarFieldEnum | CustomerDebtScalarFieldEnum[]
  }

  /**
   * CustomerDebt findMany
   */
  export type CustomerDebtFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    /**
     * Filter, which CustomerDebts to fetch.
     */
    where?: CustomerDebtWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of CustomerDebts to fetch.
     */
    orderBy?: CustomerDebtOrderByWithRelationInput | CustomerDebtOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing CustomerDebts.
     */
    cursor?: CustomerDebtWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` CustomerDebts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` CustomerDebts.
     */
    skip?: number
    distinct?: CustomerDebtScalarFieldEnum | CustomerDebtScalarFieldEnum[]
  }

  /**
   * CustomerDebt create
   */
  export type CustomerDebtCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    /**
     * The data needed to create a CustomerDebt.
     */
    data: XOR<CustomerDebtCreateInput, CustomerDebtUncheckedCreateInput>
  }

  /**
   * CustomerDebt createMany
   */
  export type CustomerDebtCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many CustomerDebts.
     */
    data: CustomerDebtCreateManyInput | CustomerDebtCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * CustomerDebt createManyAndReturn
   */
  export type CustomerDebtCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * The data used to create many CustomerDebts.
     */
    data: CustomerDebtCreateManyInput | CustomerDebtCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerDebt update
   */
  export type CustomerDebtUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    /**
     * The data needed to update a CustomerDebt.
     */
    data: XOR<CustomerDebtUpdateInput, CustomerDebtUncheckedUpdateInput>
    /**
     * Choose, which CustomerDebt to update.
     */
    where: CustomerDebtWhereUniqueInput
  }

  /**
   * CustomerDebt updateMany
   */
  export type CustomerDebtUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update CustomerDebts.
     */
    data: XOR<CustomerDebtUpdateManyMutationInput, CustomerDebtUncheckedUpdateManyInput>
    /**
     * Filter which CustomerDebts to update
     */
    where?: CustomerDebtWhereInput
    /**
     * Limit how many CustomerDebts to update.
     */
    limit?: number
  }

  /**
   * CustomerDebt updateManyAndReturn
   */
  export type CustomerDebtUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * The data used to update CustomerDebts.
     */
    data: XOR<CustomerDebtUpdateManyMutationInput, CustomerDebtUncheckedUpdateManyInput>
    /**
     * Filter which CustomerDebts to update
     */
    where?: CustomerDebtWhereInput
    /**
     * Limit how many CustomerDebts to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * CustomerDebt upsert
   */
  export type CustomerDebtUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    /**
     * The filter to search for the CustomerDebt to update in case it exists.
     */
    where: CustomerDebtWhereUniqueInput
    /**
     * In case the CustomerDebt found by the `where` argument doesn't exist, create a new CustomerDebt with this data.
     */
    create: XOR<CustomerDebtCreateInput, CustomerDebtUncheckedCreateInput>
    /**
     * In case the CustomerDebt was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CustomerDebtUpdateInput, CustomerDebtUncheckedUpdateInput>
  }

  /**
   * CustomerDebt delete
   */
  export type CustomerDebtDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
    /**
     * Filter which CustomerDebt to delete.
     */
    where: CustomerDebtWhereUniqueInput
  }

  /**
   * CustomerDebt deleteMany
   */
  export type CustomerDebtDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which CustomerDebts to delete
     */
    where?: CustomerDebtWhereInput
    /**
     * Limit how many CustomerDebts to delete.
     */
    limit?: number
  }

  /**
   * CustomerDebt without action
   */
  export type CustomerDebtDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CustomerDebt
     */
    select?: CustomerDebtSelect<ExtArgs> | null
    /**
     * Omit specific fields from the CustomerDebt
     */
    omit?: CustomerDebtOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CustomerDebtInclude<ExtArgs> | null
  }


  /**
   * Model SellerProfit
   */

  export type AggregateSellerProfit = {
    _count: SellerProfitCountAggregateOutputType | null
    _avg: SellerProfitAvgAggregateOutputType | null
    _sum: SellerProfitSumAggregateOutputType | null
    _min: SellerProfitMinAggregateOutputType | null
    _max: SellerProfitMaxAggregateOutputType | null
  }

  export type SellerProfitAvgAggregateOutputType = {
    amount: number | null
    openedPercent: number | null
  }

  export type SellerProfitSumAggregateOutputType = {
    amount: number | null
    openedPercent: number | null
  }

  export type SellerProfitMinAggregateOutputType = {
    id: string | null
    sellerId: string | null
    saleId: string | null
    amount: number | null
    openedPercent: number | null
    createdAt: Date | null
  }

  export type SellerProfitMaxAggregateOutputType = {
    id: string | null
    sellerId: string | null
    saleId: string | null
    amount: number | null
    openedPercent: number | null
    createdAt: Date | null
  }

  export type SellerProfitCountAggregateOutputType = {
    id: number
    sellerId: number
    saleId: number
    amount: number
    openedPercent: number
    createdAt: number
    _all: number
  }


  export type SellerProfitAvgAggregateInputType = {
    amount?: true
    openedPercent?: true
  }

  export type SellerProfitSumAggregateInputType = {
    amount?: true
    openedPercent?: true
  }

  export type SellerProfitMinAggregateInputType = {
    id?: true
    sellerId?: true
    saleId?: true
    amount?: true
    openedPercent?: true
    createdAt?: true
  }

  export type SellerProfitMaxAggregateInputType = {
    id?: true
    sellerId?: true
    saleId?: true
    amount?: true
    openedPercent?: true
    createdAt?: true
  }

  export type SellerProfitCountAggregateInputType = {
    id?: true
    sellerId?: true
    saleId?: true
    amount?: true
    openedPercent?: true
    createdAt?: true
    _all?: true
  }

  export type SellerProfitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerProfit to aggregate.
     */
    where?: SellerProfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerProfits to fetch.
     */
    orderBy?: SellerProfitOrderByWithRelationInput | SellerProfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SellerProfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerProfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerProfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SellerProfits
    **/
    _count?: true | SellerProfitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SellerProfitAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SellerProfitSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SellerProfitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SellerProfitMaxAggregateInputType
  }

  export type GetSellerProfitAggregateType<T extends SellerProfitAggregateArgs> = {
        [P in keyof T & keyof AggregateSellerProfit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSellerProfit[P]>
      : GetScalarType<T[P], AggregateSellerProfit[P]>
  }




  export type SellerProfitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SellerProfitWhereInput
    orderBy?: SellerProfitOrderByWithAggregationInput | SellerProfitOrderByWithAggregationInput[]
    by: SellerProfitScalarFieldEnum[] | SellerProfitScalarFieldEnum
    having?: SellerProfitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SellerProfitCountAggregateInputType | true
    _avg?: SellerProfitAvgAggregateInputType
    _sum?: SellerProfitSumAggregateInputType
    _min?: SellerProfitMinAggregateInputType
    _max?: SellerProfitMaxAggregateInputType
  }

  export type SellerProfitGroupByOutputType = {
    id: string
    sellerId: string
    saleId: string
    amount: number
    openedPercent: number
    createdAt: Date
    _count: SellerProfitCountAggregateOutputType | null
    _avg: SellerProfitAvgAggregateOutputType | null
    _sum: SellerProfitSumAggregateOutputType | null
    _min: SellerProfitMinAggregateOutputType | null
    _max: SellerProfitMaxAggregateOutputType | null
  }

  type GetSellerProfitGroupByPayload<T extends SellerProfitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SellerProfitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SellerProfitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SellerProfitGroupByOutputType[P]>
            : GetScalarType<T[P], SellerProfitGroupByOutputType[P]>
        }
      >
    >


  export type SellerProfitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    saleId?: boolean
    amount?: boolean
    openedPercent?: boolean
    createdAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerProfit"]>

  export type SellerProfitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    saleId?: boolean
    amount?: boolean
    openedPercent?: boolean
    createdAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerProfit"]>

  export type SellerProfitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sellerId?: boolean
    saleId?: boolean
    amount?: boolean
    openedPercent?: boolean
    createdAt?: boolean
    seller?: boolean | UserDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sellerProfit"]>

  export type SellerProfitSelectScalar = {
    id?: boolean
    sellerId?: boolean
    saleId?: boolean
    amount?: boolean
    openedPercent?: boolean
    createdAt?: boolean
  }

  export type SellerProfitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sellerId" | "saleId" | "amount" | "openedPercent" | "createdAt", ExtArgs["result"]["sellerProfit"]>
  export type SellerProfitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }
  export type SellerProfitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }
  export type SellerProfitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    seller?: boolean | UserDefaultArgs<ExtArgs>
    sale?: boolean | SaleDefaultArgs<ExtArgs>
  }

  export type $SellerProfitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SellerProfit"
    objects: {
      seller: Prisma.$UserPayload<ExtArgs>
      sale: Prisma.$SalePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sellerId: string
      saleId: string
      amount: number
      openedPercent: number
      createdAt: Date
    }, ExtArgs["result"]["sellerProfit"]>
    composites: {}
  }

  type SellerProfitGetPayload<S extends boolean | null | undefined | SellerProfitDefaultArgs> = $Result.GetResult<Prisma.$SellerProfitPayload, S>

  type SellerProfitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SellerProfitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SellerProfitCountAggregateInputType | true
    }

  export interface SellerProfitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SellerProfit'], meta: { name: 'SellerProfit' } }
    /**
     * Find zero or one SellerProfit that matches the filter.
     * @param {SellerProfitFindUniqueArgs} args - Arguments to find a SellerProfit
     * @example
     * // Get one SellerProfit
     * const sellerProfit = await prisma.sellerProfit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SellerProfitFindUniqueArgs>(args: SelectSubset<T, SellerProfitFindUniqueArgs<ExtArgs>>): Prisma__SellerProfitClient<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SellerProfit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SellerProfitFindUniqueOrThrowArgs} args - Arguments to find a SellerProfit
     * @example
     * // Get one SellerProfit
     * const sellerProfit = await prisma.sellerProfit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SellerProfitFindUniqueOrThrowArgs>(args: SelectSubset<T, SellerProfitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SellerProfitClient<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerProfit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfitFindFirstArgs} args - Arguments to find a SellerProfit
     * @example
     * // Get one SellerProfit
     * const sellerProfit = await prisma.sellerProfit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SellerProfitFindFirstArgs>(args?: SelectSubset<T, SellerProfitFindFirstArgs<ExtArgs>>): Prisma__SellerProfitClient<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SellerProfit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfitFindFirstOrThrowArgs} args - Arguments to find a SellerProfit
     * @example
     * // Get one SellerProfit
     * const sellerProfit = await prisma.sellerProfit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SellerProfitFindFirstOrThrowArgs>(args?: SelectSubset<T, SellerProfitFindFirstOrThrowArgs<ExtArgs>>): Prisma__SellerProfitClient<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SellerProfits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SellerProfits
     * const sellerProfits = await prisma.sellerProfit.findMany()
     * 
     * // Get first 10 SellerProfits
     * const sellerProfits = await prisma.sellerProfit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sellerProfitWithIdOnly = await prisma.sellerProfit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SellerProfitFindManyArgs>(args?: SelectSubset<T, SellerProfitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SellerProfit.
     * @param {SellerProfitCreateArgs} args - Arguments to create a SellerProfit.
     * @example
     * // Create one SellerProfit
     * const SellerProfit = await prisma.sellerProfit.create({
     *   data: {
     *     // ... data to create a SellerProfit
     *   }
     * })
     * 
     */
    create<T extends SellerProfitCreateArgs>(args: SelectSubset<T, SellerProfitCreateArgs<ExtArgs>>): Prisma__SellerProfitClient<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SellerProfits.
     * @param {SellerProfitCreateManyArgs} args - Arguments to create many SellerProfits.
     * @example
     * // Create many SellerProfits
     * const sellerProfit = await prisma.sellerProfit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SellerProfitCreateManyArgs>(args?: SelectSubset<T, SellerProfitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SellerProfits and returns the data saved in the database.
     * @param {SellerProfitCreateManyAndReturnArgs} args - Arguments to create many SellerProfits.
     * @example
     * // Create many SellerProfits
     * const sellerProfit = await prisma.sellerProfit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SellerProfits and only return the `id`
     * const sellerProfitWithIdOnly = await prisma.sellerProfit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SellerProfitCreateManyAndReturnArgs>(args?: SelectSubset<T, SellerProfitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SellerProfit.
     * @param {SellerProfitDeleteArgs} args - Arguments to delete one SellerProfit.
     * @example
     * // Delete one SellerProfit
     * const SellerProfit = await prisma.sellerProfit.delete({
     *   where: {
     *     // ... filter to delete one SellerProfit
     *   }
     * })
     * 
     */
    delete<T extends SellerProfitDeleteArgs>(args: SelectSubset<T, SellerProfitDeleteArgs<ExtArgs>>): Prisma__SellerProfitClient<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SellerProfit.
     * @param {SellerProfitUpdateArgs} args - Arguments to update one SellerProfit.
     * @example
     * // Update one SellerProfit
     * const sellerProfit = await prisma.sellerProfit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SellerProfitUpdateArgs>(args: SelectSubset<T, SellerProfitUpdateArgs<ExtArgs>>): Prisma__SellerProfitClient<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SellerProfits.
     * @param {SellerProfitDeleteManyArgs} args - Arguments to filter SellerProfits to delete.
     * @example
     * // Delete a few SellerProfits
     * const { count } = await prisma.sellerProfit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SellerProfitDeleteManyArgs>(args?: SelectSubset<T, SellerProfitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerProfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SellerProfits
     * const sellerProfit = await prisma.sellerProfit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SellerProfitUpdateManyArgs>(args: SelectSubset<T, SellerProfitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SellerProfits and returns the data updated in the database.
     * @param {SellerProfitUpdateManyAndReturnArgs} args - Arguments to update many SellerProfits.
     * @example
     * // Update many SellerProfits
     * const sellerProfit = await prisma.sellerProfit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SellerProfits and only return the `id`
     * const sellerProfitWithIdOnly = await prisma.sellerProfit.updateManyAndReturn({
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
    updateManyAndReturn<T extends SellerProfitUpdateManyAndReturnArgs>(args: SelectSubset<T, SellerProfitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SellerProfit.
     * @param {SellerProfitUpsertArgs} args - Arguments to update or create a SellerProfit.
     * @example
     * // Update or create a SellerProfit
     * const sellerProfit = await prisma.sellerProfit.upsert({
     *   create: {
     *     // ... data to create a SellerProfit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SellerProfit we want to update
     *   }
     * })
     */
    upsert<T extends SellerProfitUpsertArgs>(args: SelectSubset<T, SellerProfitUpsertArgs<ExtArgs>>): Prisma__SellerProfitClient<$Result.GetResult<Prisma.$SellerProfitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SellerProfits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfitCountArgs} args - Arguments to filter SellerProfits to count.
     * @example
     * // Count the number of SellerProfits
     * const count = await prisma.sellerProfit.count({
     *   where: {
     *     // ... the filter for the SellerProfits we want to count
     *   }
     * })
    **/
    count<T extends SellerProfitCountArgs>(
      args?: Subset<T, SellerProfitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SellerProfitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SellerProfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SellerProfitAggregateArgs>(args: Subset<T, SellerProfitAggregateArgs>): Prisma.PrismaPromise<GetSellerProfitAggregateType<T>>

    /**
     * Group by SellerProfit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SellerProfitGroupByArgs} args - Group by arguments.
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
      T extends SellerProfitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SellerProfitGroupByArgs['orderBy'] }
        : { orderBy?: SellerProfitGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SellerProfitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSellerProfitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SellerProfit model
   */
  readonly fields: SellerProfitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SellerProfit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SellerProfitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    seller<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sale<T extends SaleDefaultArgs<ExtArgs> = {}>(args?: Subset<T, SaleDefaultArgs<ExtArgs>>): Prisma__SaleClient<$Result.GetResult<Prisma.$SalePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the SellerProfit model
   */
  interface SellerProfitFieldRefs {
    readonly id: FieldRef<"SellerProfit", 'String'>
    readonly sellerId: FieldRef<"SellerProfit", 'String'>
    readonly saleId: FieldRef<"SellerProfit", 'String'>
    readonly amount: FieldRef<"SellerProfit", 'Int'>
    readonly openedPercent: FieldRef<"SellerProfit", 'Float'>
    readonly createdAt: FieldRef<"SellerProfit", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * SellerProfit findUnique
   */
  export type SellerProfitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfit to fetch.
     */
    where: SellerProfitWhereUniqueInput
  }

  /**
   * SellerProfit findUniqueOrThrow
   */
  export type SellerProfitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfit to fetch.
     */
    where: SellerProfitWhereUniqueInput
  }

  /**
   * SellerProfit findFirst
   */
  export type SellerProfitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfit to fetch.
     */
    where?: SellerProfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerProfits to fetch.
     */
    orderBy?: SellerProfitOrderByWithRelationInput | SellerProfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerProfits.
     */
    cursor?: SellerProfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerProfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerProfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerProfits.
     */
    distinct?: SellerProfitScalarFieldEnum | SellerProfitScalarFieldEnum[]
  }

  /**
   * SellerProfit findFirstOrThrow
   */
  export type SellerProfitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfit to fetch.
     */
    where?: SellerProfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerProfits to fetch.
     */
    orderBy?: SellerProfitOrderByWithRelationInput | SellerProfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SellerProfits.
     */
    cursor?: SellerProfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerProfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerProfits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SellerProfits.
     */
    distinct?: SellerProfitScalarFieldEnum | SellerProfitScalarFieldEnum[]
  }

  /**
   * SellerProfit findMany
   */
  export type SellerProfitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    /**
     * Filter, which SellerProfits to fetch.
     */
    where?: SellerProfitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SellerProfits to fetch.
     */
    orderBy?: SellerProfitOrderByWithRelationInput | SellerProfitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SellerProfits.
     */
    cursor?: SellerProfitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SellerProfits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SellerProfits.
     */
    skip?: number
    distinct?: SellerProfitScalarFieldEnum | SellerProfitScalarFieldEnum[]
  }

  /**
   * SellerProfit create
   */
  export type SellerProfitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    /**
     * The data needed to create a SellerProfit.
     */
    data: XOR<SellerProfitCreateInput, SellerProfitUncheckedCreateInput>
  }

  /**
   * SellerProfit createMany
   */
  export type SellerProfitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SellerProfits.
     */
    data: SellerProfitCreateManyInput | SellerProfitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SellerProfit createManyAndReturn
   */
  export type SellerProfitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * The data used to create many SellerProfits.
     */
    data: SellerProfitCreateManyInput | SellerProfitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerProfit update
   */
  export type SellerProfitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    /**
     * The data needed to update a SellerProfit.
     */
    data: XOR<SellerProfitUpdateInput, SellerProfitUncheckedUpdateInput>
    /**
     * Choose, which SellerProfit to update.
     */
    where: SellerProfitWhereUniqueInput
  }

  /**
   * SellerProfit updateMany
   */
  export type SellerProfitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SellerProfits.
     */
    data: XOR<SellerProfitUpdateManyMutationInput, SellerProfitUncheckedUpdateManyInput>
    /**
     * Filter which SellerProfits to update
     */
    where?: SellerProfitWhereInput
    /**
     * Limit how many SellerProfits to update.
     */
    limit?: number
  }

  /**
   * SellerProfit updateManyAndReturn
   */
  export type SellerProfitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * The data used to update SellerProfits.
     */
    data: XOR<SellerProfitUpdateManyMutationInput, SellerProfitUncheckedUpdateManyInput>
    /**
     * Filter which SellerProfits to update
     */
    where?: SellerProfitWhereInput
    /**
     * Limit how many SellerProfits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SellerProfit upsert
   */
  export type SellerProfitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    /**
     * The filter to search for the SellerProfit to update in case it exists.
     */
    where: SellerProfitWhereUniqueInput
    /**
     * In case the SellerProfit found by the `where` argument doesn't exist, create a new SellerProfit with this data.
     */
    create: XOR<SellerProfitCreateInput, SellerProfitUncheckedCreateInput>
    /**
     * In case the SellerProfit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SellerProfitUpdateInput, SellerProfitUncheckedUpdateInput>
  }

  /**
   * SellerProfit delete
   */
  export type SellerProfitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
    /**
     * Filter which SellerProfit to delete.
     */
    where: SellerProfitWhereUniqueInput
  }

  /**
   * SellerProfit deleteMany
   */
  export type SellerProfitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SellerProfits to delete
     */
    where?: SellerProfitWhereInput
    /**
     * Limit how many SellerProfits to delete.
     */
    limit?: number
  }

  /**
   * SellerProfit without action
   */
  export type SellerProfitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SellerProfit
     */
    select?: SellerProfitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SellerProfit
     */
    omit?: SellerProfitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SellerProfitInclude<ExtArgs> | null
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
    name: 'name',
    phone: 'phone',
    role: 'role',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const SalePointScalarFieldEnum: {
    id: 'id',
    name: 'name',
    createdAt: 'createdAt'
  };

  export type SalePointScalarFieldEnum = (typeof SalePointScalarFieldEnum)[keyof typeof SalePointScalarFieldEnum]


  export const CarpetScalarFieldEnum: {
    id: 'id',
    code: 'code',
    width: 'width',
    height: 'height',
    area: 'area',
    pattern: 'pattern',
    color: 'color',
    material: 'material',
    costPrice: 'costPrice',
    sellPrice: 'sellPrice',
    isSold: 'isSold',
    soldAt: 'soldAt',
    createdAt: 'createdAt'
  };

  export type CarpetScalarFieldEnum = (typeof CarpetScalarFieldEnum)[keyof typeof CarpetScalarFieldEnum]


  export const SaleScalarFieldEnum: {
    id: 'id',
    salePointId: 'salePointId',
    sellerId: 'sellerId',
    customerId: 'customerId',
    totalPrice: 'totalPrice',
    totalCost: 'totalCost',
    profit: 'profit',
    paidAmount: 'paidAmount',
    debtAmount: 'debtAmount',
    createdAt: 'createdAt'
  };

  export type SaleScalarFieldEnum = (typeof SaleScalarFieldEnum)[keyof typeof SaleScalarFieldEnum]


  export const SaleItemScalarFieldEnum: {
    id: 'id',
    saleId: 'saleId',
    carpetId: 'carpetId',
    price: 'price',
    cost: 'cost',
    profit: 'profit'
  };

  export type SaleItemScalarFieldEnum = (typeof SaleItemScalarFieldEnum)[keyof typeof SaleItemScalarFieldEnum]


  export const CustomerScalarFieldEnum: {
    id: 'id',
    name: 'name',
    phone: 'phone',
    createdAt: 'createdAt'
  };

  export type CustomerScalarFieldEnum = (typeof CustomerScalarFieldEnum)[keyof typeof CustomerScalarFieldEnum]


  export const CustomerDebtScalarFieldEnum: {
    id: 'id',
    customerId: 'customerId',
    amount: 'amount',
    note: 'note',
    paymentDate: 'paymentDate',
    createdAt: 'createdAt'
  };

  export type CustomerDebtScalarFieldEnum = (typeof CustomerDebtScalarFieldEnum)[keyof typeof CustomerDebtScalarFieldEnum]


  export const SellerProfitScalarFieldEnum: {
    id: 'id',
    sellerId: 'sellerId',
    saleId: 'saleId',
    amount: 'amount',
    openedPercent: 'openedPercent',
    createdAt: 'createdAt'
  };

  export type SellerProfitScalarFieldEnum = (typeof SellerProfitScalarFieldEnum)[keyof typeof SellerProfitScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    phone?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sales?: SaleListRelationFilter
    sellerCuts?: SellerProfitListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
    sellerCuts?: SellerProfitOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    phone?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    sales?: SaleListRelationFilter
    sellerCuts?: SellerProfitListRelationFilter
  }, "id" | "phone">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    role?: SortOrder
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
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    phone?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type SalePointWhereInput = {
    AND?: SalePointWhereInput | SalePointWhereInput[]
    OR?: SalePointWhereInput[]
    NOT?: SalePointWhereInput | SalePointWhereInput[]
    id?: StringFilter<"SalePoint"> | string
    name?: StringFilter<"SalePoint"> | string
    createdAt?: DateTimeFilter<"SalePoint"> | Date | string
    sales?: SaleListRelationFilter
  }

  export type SalePointOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
  }

  export type SalePointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SalePointWhereInput | SalePointWhereInput[]
    OR?: SalePointWhereInput[]
    NOT?: SalePointWhereInput | SalePointWhereInput[]
    name?: StringFilter<"SalePoint"> | string
    createdAt?: DateTimeFilter<"SalePoint"> | Date | string
    sales?: SaleListRelationFilter
  }, "id">

  export type SalePointOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
    _count?: SalePointCountOrderByAggregateInput
    _max?: SalePointMaxOrderByAggregateInput
    _min?: SalePointMinOrderByAggregateInput
  }

  export type SalePointScalarWhereWithAggregatesInput = {
    AND?: SalePointScalarWhereWithAggregatesInput | SalePointScalarWhereWithAggregatesInput[]
    OR?: SalePointScalarWhereWithAggregatesInput[]
    NOT?: SalePointScalarWhereWithAggregatesInput | SalePointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SalePoint"> | string
    name?: StringWithAggregatesFilter<"SalePoint"> | string
    createdAt?: DateTimeWithAggregatesFilter<"SalePoint"> | Date | string
  }

  export type CarpetWhereInput = {
    AND?: CarpetWhereInput | CarpetWhereInput[]
    OR?: CarpetWhereInput[]
    NOT?: CarpetWhereInput | CarpetWhereInput[]
    id?: StringFilter<"Carpet"> | string
    code?: StringFilter<"Carpet"> | string
    width?: FloatFilter<"Carpet"> | number
    height?: FloatFilter<"Carpet"> | number
    area?: FloatFilter<"Carpet"> | number
    pattern?: StringFilter<"Carpet"> | string
    color?: StringNullableFilter<"Carpet"> | string | null
    material?: StringNullableFilter<"Carpet"> | string | null
    costPrice?: IntFilter<"Carpet"> | number
    sellPrice?: IntFilter<"Carpet"> | number
    isSold?: BoolFilter<"Carpet"> | boolean
    soldAt?: DateTimeNullableFilter<"Carpet"> | Date | string | null
    createdAt?: DateTimeFilter<"Carpet"> | Date | string
    saleItem?: XOR<SaleItemNullableScalarRelationFilter, SaleItemWhereInput> | null
  }

  export type CarpetOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    width?: SortOrder
    height?: SortOrder
    area?: SortOrder
    pattern?: SortOrder
    color?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    sellPrice?: SortOrder
    isSold?: SortOrder
    soldAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    saleItem?: SaleItemOrderByWithRelationInput
  }

  export type CarpetWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: CarpetWhereInput | CarpetWhereInput[]
    OR?: CarpetWhereInput[]
    NOT?: CarpetWhereInput | CarpetWhereInput[]
    width?: FloatFilter<"Carpet"> | number
    height?: FloatFilter<"Carpet"> | number
    area?: FloatFilter<"Carpet"> | number
    pattern?: StringFilter<"Carpet"> | string
    color?: StringNullableFilter<"Carpet"> | string | null
    material?: StringNullableFilter<"Carpet"> | string | null
    costPrice?: IntFilter<"Carpet"> | number
    sellPrice?: IntFilter<"Carpet"> | number
    isSold?: BoolFilter<"Carpet"> | boolean
    soldAt?: DateTimeNullableFilter<"Carpet"> | Date | string | null
    createdAt?: DateTimeFilter<"Carpet"> | Date | string
    saleItem?: XOR<SaleItemNullableScalarRelationFilter, SaleItemWhereInput> | null
  }, "id" | "code">

  export type CarpetOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    width?: SortOrder
    height?: SortOrder
    area?: SortOrder
    pattern?: SortOrder
    color?: SortOrderInput | SortOrder
    material?: SortOrderInput | SortOrder
    costPrice?: SortOrder
    sellPrice?: SortOrder
    isSold?: SortOrder
    soldAt?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CarpetCountOrderByAggregateInput
    _avg?: CarpetAvgOrderByAggregateInput
    _max?: CarpetMaxOrderByAggregateInput
    _min?: CarpetMinOrderByAggregateInput
    _sum?: CarpetSumOrderByAggregateInput
  }

  export type CarpetScalarWhereWithAggregatesInput = {
    AND?: CarpetScalarWhereWithAggregatesInput | CarpetScalarWhereWithAggregatesInput[]
    OR?: CarpetScalarWhereWithAggregatesInput[]
    NOT?: CarpetScalarWhereWithAggregatesInput | CarpetScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Carpet"> | string
    code?: StringWithAggregatesFilter<"Carpet"> | string
    width?: FloatWithAggregatesFilter<"Carpet"> | number
    height?: FloatWithAggregatesFilter<"Carpet"> | number
    area?: FloatWithAggregatesFilter<"Carpet"> | number
    pattern?: StringWithAggregatesFilter<"Carpet"> | string
    color?: StringNullableWithAggregatesFilter<"Carpet"> | string | null
    material?: StringNullableWithAggregatesFilter<"Carpet"> | string | null
    costPrice?: IntWithAggregatesFilter<"Carpet"> | number
    sellPrice?: IntWithAggregatesFilter<"Carpet"> | number
    isSold?: BoolWithAggregatesFilter<"Carpet"> | boolean
    soldAt?: DateTimeNullableWithAggregatesFilter<"Carpet"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Carpet"> | Date | string
  }

  export type SaleWhereInput = {
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    id?: StringFilter<"Sale"> | string
    salePointId?: StringFilter<"Sale"> | string
    sellerId?: StringNullableFilter<"Sale"> | string | null
    customerId?: StringNullableFilter<"Sale"> | string | null
    totalPrice?: IntFilter<"Sale"> | number
    totalCost?: IntFilter<"Sale"> | number
    profit?: IntFilter<"Sale"> | number
    paidAmount?: IntFilter<"Sale"> | number
    debtAmount?: IntFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    salePoint?: XOR<SalePointScalarRelationFilter, SalePointWhereInput>
    seller?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    items?: SaleItemListRelationFilter
    sellerProfits?: SellerProfitListRelationFilter
  }

  export type SaleOrderByWithRelationInput = {
    id?: SortOrder
    salePointId?: SortOrder
    sellerId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paidAmount?: SortOrder
    debtAmount?: SortOrder
    createdAt?: SortOrder
    salePoint?: SalePointOrderByWithRelationInput
    seller?: UserOrderByWithRelationInput
    customer?: CustomerOrderByWithRelationInput
    items?: SaleItemOrderByRelationAggregateInput
    sellerProfits?: SellerProfitOrderByRelationAggregateInput
  }

  export type SaleWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SaleWhereInput | SaleWhereInput[]
    OR?: SaleWhereInput[]
    NOT?: SaleWhereInput | SaleWhereInput[]
    salePointId?: StringFilter<"Sale"> | string
    sellerId?: StringNullableFilter<"Sale"> | string | null
    customerId?: StringNullableFilter<"Sale"> | string | null
    totalPrice?: IntFilter<"Sale"> | number
    totalCost?: IntFilter<"Sale"> | number
    profit?: IntFilter<"Sale"> | number
    paidAmount?: IntFilter<"Sale"> | number
    debtAmount?: IntFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
    salePoint?: XOR<SalePointScalarRelationFilter, SalePointWhereInput>
    seller?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    customer?: XOR<CustomerNullableScalarRelationFilter, CustomerWhereInput> | null
    items?: SaleItemListRelationFilter
    sellerProfits?: SellerProfitListRelationFilter
  }, "id">

  export type SaleOrderByWithAggregationInput = {
    id?: SortOrder
    salePointId?: SortOrder
    sellerId?: SortOrderInput | SortOrder
    customerId?: SortOrderInput | SortOrder
    totalPrice?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paidAmount?: SortOrder
    debtAmount?: SortOrder
    createdAt?: SortOrder
    _count?: SaleCountOrderByAggregateInput
    _avg?: SaleAvgOrderByAggregateInput
    _max?: SaleMaxOrderByAggregateInput
    _min?: SaleMinOrderByAggregateInput
    _sum?: SaleSumOrderByAggregateInput
  }

  export type SaleScalarWhereWithAggregatesInput = {
    AND?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    OR?: SaleScalarWhereWithAggregatesInput[]
    NOT?: SaleScalarWhereWithAggregatesInput | SaleScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Sale"> | string
    salePointId?: StringWithAggregatesFilter<"Sale"> | string
    sellerId?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    customerId?: StringNullableWithAggregatesFilter<"Sale"> | string | null
    totalPrice?: IntWithAggregatesFilter<"Sale"> | number
    totalCost?: IntWithAggregatesFilter<"Sale"> | number
    profit?: IntWithAggregatesFilter<"Sale"> | number
    paidAmount?: IntWithAggregatesFilter<"Sale"> | number
    debtAmount?: IntWithAggregatesFilter<"Sale"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Sale"> | Date | string
  }

  export type SaleItemWhereInput = {
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    carpetId?: StringFilter<"SaleItem"> | string
    price?: IntFilter<"SaleItem"> | number
    cost?: IntFilter<"SaleItem"> | number
    profit?: IntFilter<"SaleItem"> | number
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    carpet?: XOR<CarpetScalarRelationFilter, CarpetWhereInput>
  }

  export type SaleItemOrderByWithRelationInput = {
    id?: SortOrder
    saleId?: SortOrder
    carpetId?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    profit?: SortOrder
    sale?: SaleOrderByWithRelationInput
    carpet?: CarpetOrderByWithRelationInput
  }

  export type SaleItemWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    carpetId?: string
    AND?: SaleItemWhereInput | SaleItemWhereInput[]
    OR?: SaleItemWhereInput[]
    NOT?: SaleItemWhereInput | SaleItemWhereInput[]
    saleId?: StringFilter<"SaleItem"> | string
    price?: IntFilter<"SaleItem"> | number
    cost?: IntFilter<"SaleItem"> | number
    profit?: IntFilter<"SaleItem"> | number
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
    carpet?: XOR<CarpetScalarRelationFilter, CarpetWhereInput>
  }, "id" | "carpetId">

  export type SaleItemOrderByWithAggregationInput = {
    id?: SortOrder
    saleId?: SortOrder
    carpetId?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    profit?: SortOrder
    _count?: SaleItemCountOrderByAggregateInput
    _avg?: SaleItemAvgOrderByAggregateInput
    _max?: SaleItemMaxOrderByAggregateInput
    _min?: SaleItemMinOrderByAggregateInput
    _sum?: SaleItemSumOrderByAggregateInput
  }

  export type SaleItemScalarWhereWithAggregatesInput = {
    AND?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    OR?: SaleItemScalarWhereWithAggregatesInput[]
    NOT?: SaleItemScalarWhereWithAggregatesInput | SaleItemScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SaleItem"> | string
    saleId?: StringWithAggregatesFilter<"SaleItem"> | string
    carpetId?: StringWithAggregatesFilter<"SaleItem"> | string
    price?: IntWithAggregatesFilter<"SaleItem"> | number
    cost?: IntWithAggregatesFilter<"SaleItem"> | number
    profit?: IntWithAggregatesFilter<"SaleItem"> | number
  }

  export type CustomerWhereInput = {
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    id?: StringFilter<"Customer"> | string
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    sales?: SaleListRelationFilter
    debts?: CustomerDebtListRelationFilter
  }

  export type CustomerOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    sales?: SaleOrderByRelationAggregateInput
    debts?: CustomerDebtOrderByRelationAggregateInput
  }

  export type CustomerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerWhereInput | CustomerWhereInput[]
    OR?: CustomerWhereInput[]
    NOT?: CustomerWhereInput | CustomerWhereInput[]
    name?: StringFilter<"Customer"> | string
    phone?: StringNullableFilter<"Customer"> | string | null
    createdAt?: DateTimeFilter<"Customer"> | Date | string
    sales?: SaleListRelationFilter
    debts?: CustomerDebtListRelationFilter
  }, "id">

  export type CustomerOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerCountOrderByAggregateInput
    _max?: CustomerMaxOrderByAggregateInput
    _min?: CustomerMinOrderByAggregateInput
  }

  export type CustomerScalarWhereWithAggregatesInput = {
    AND?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    OR?: CustomerScalarWhereWithAggregatesInput[]
    NOT?: CustomerScalarWhereWithAggregatesInput | CustomerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Customer"> | string
    name?: StringWithAggregatesFilter<"Customer"> | string
    phone?: StringNullableWithAggregatesFilter<"Customer"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Customer"> | Date | string
  }

  export type CustomerDebtWhereInput = {
    AND?: CustomerDebtWhereInput | CustomerDebtWhereInput[]
    OR?: CustomerDebtWhereInput[]
    NOT?: CustomerDebtWhereInput | CustomerDebtWhereInput[]
    id?: StringFilter<"CustomerDebt"> | string
    customerId?: StringFilter<"CustomerDebt"> | string
    amount?: IntFilter<"CustomerDebt"> | number
    note?: StringNullableFilter<"CustomerDebt"> | string | null
    paymentDate?: DateTimeNullableFilter<"CustomerDebt"> | Date | string | null
    createdAt?: DateTimeFilter<"CustomerDebt"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }

  export type CustomerDebtOrderByWithRelationInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    customer?: CustomerOrderByWithRelationInput
  }

  export type CustomerDebtWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CustomerDebtWhereInput | CustomerDebtWhereInput[]
    OR?: CustomerDebtWhereInput[]
    NOT?: CustomerDebtWhereInput | CustomerDebtWhereInput[]
    customerId?: StringFilter<"CustomerDebt"> | string
    amount?: IntFilter<"CustomerDebt"> | number
    note?: StringNullableFilter<"CustomerDebt"> | string | null
    paymentDate?: DateTimeNullableFilter<"CustomerDebt"> | Date | string | null
    createdAt?: DateTimeFilter<"CustomerDebt"> | Date | string
    customer?: XOR<CustomerScalarRelationFilter, CustomerWhereInput>
  }, "id">

  export type CustomerDebtOrderByWithAggregationInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    note?: SortOrderInput | SortOrder
    paymentDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CustomerDebtCountOrderByAggregateInput
    _avg?: CustomerDebtAvgOrderByAggregateInput
    _max?: CustomerDebtMaxOrderByAggregateInput
    _min?: CustomerDebtMinOrderByAggregateInput
    _sum?: CustomerDebtSumOrderByAggregateInput
  }

  export type CustomerDebtScalarWhereWithAggregatesInput = {
    AND?: CustomerDebtScalarWhereWithAggregatesInput | CustomerDebtScalarWhereWithAggregatesInput[]
    OR?: CustomerDebtScalarWhereWithAggregatesInput[]
    NOT?: CustomerDebtScalarWhereWithAggregatesInput | CustomerDebtScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"CustomerDebt"> | string
    customerId?: StringWithAggregatesFilter<"CustomerDebt"> | string
    amount?: IntWithAggregatesFilter<"CustomerDebt"> | number
    note?: StringNullableWithAggregatesFilter<"CustomerDebt"> | string | null
    paymentDate?: DateTimeNullableWithAggregatesFilter<"CustomerDebt"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"CustomerDebt"> | Date | string
  }

  export type SellerProfitWhereInput = {
    AND?: SellerProfitWhereInput | SellerProfitWhereInput[]
    OR?: SellerProfitWhereInput[]
    NOT?: SellerProfitWhereInput | SellerProfitWhereInput[]
    id?: StringFilter<"SellerProfit"> | string
    sellerId?: StringFilter<"SellerProfit"> | string
    saleId?: StringFilter<"SellerProfit"> | string
    amount?: IntFilter<"SellerProfit"> | number
    openedPercent?: FloatFilter<"SellerProfit"> | number
    createdAt?: DateTimeFilter<"SellerProfit"> | Date | string
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
  }

  export type SellerProfitOrderByWithRelationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    openedPercent?: SortOrder
    createdAt?: SortOrder
    seller?: UserOrderByWithRelationInput
    sale?: SaleOrderByWithRelationInput
  }

  export type SellerProfitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SellerProfitWhereInput | SellerProfitWhereInput[]
    OR?: SellerProfitWhereInput[]
    NOT?: SellerProfitWhereInput | SellerProfitWhereInput[]
    sellerId?: StringFilter<"SellerProfit"> | string
    saleId?: StringFilter<"SellerProfit"> | string
    amount?: IntFilter<"SellerProfit"> | number
    openedPercent?: FloatFilter<"SellerProfit"> | number
    createdAt?: DateTimeFilter<"SellerProfit"> | Date | string
    seller?: XOR<UserScalarRelationFilter, UserWhereInput>
    sale?: XOR<SaleScalarRelationFilter, SaleWhereInput>
  }, "id">

  export type SellerProfitOrderByWithAggregationInput = {
    id?: SortOrder
    sellerId?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    openedPercent?: SortOrder
    createdAt?: SortOrder
    _count?: SellerProfitCountOrderByAggregateInput
    _avg?: SellerProfitAvgOrderByAggregateInput
    _max?: SellerProfitMaxOrderByAggregateInput
    _min?: SellerProfitMinOrderByAggregateInput
    _sum?: SellerProfitSumOrderByAggregateInput
  }

  export type SellerProfitScalarWhereWithAggregatesInput = {
    AND?: SellerProfitScalarWhereWithAggregatesInput | SellerProfitScalarWhereWithAggregatesInput[]
    OR?: SellerProfitScalarWhereWithAggregatesInput[]
    NOT?: SellerProfitScalarWhereWithAggregatesInput | SellerProfitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SellerProfit"> | string
    sellerId?: StringWithAggregatesFilter<"SellerProfit"> | string
    saleId?: StringWithAggregatesFilter<"SellerProfit"> | string
    amount?: IntWithAggregatesFilter<"SellerProfit"> | number
    openedPercent?: FloatWithAggregatesFilter<"SellerProfit"> | number
    createdAt?: DateTimeWithAggregatesFilter<"SellerProfit"> | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutSellerInput
    sellerCuts?: SellerProfitCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutSellerInput
    sellerCuts?: SellerProfitUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutSellerNestedInput
    sellerCuts?: SellerProfitUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutSellerNestedInput
    sellerCuts?: SellerProfitUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalePointCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutSalePointInput
  }

  export type SalePointUncheckedCreateInput = {
    id?: string
    name: string
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutSalePointInput
  }

  export type SalePointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutSalePointNestedInput
  }

  export type SalePointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutSalePointNestedInput
  }

  export type SalePointCreateManyInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type SalePointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalePointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarpetCreateInput = {
    id?: string
    code: string
    width: number
    height: number
    area: number
    pattern: string
    color?: string | null
    material?: string | null
    costPrice: number
    sellPrice: number
    isSold?: boolean
    soldAt?: Date | string | null
    createdAt?: Date | string
    saleItem?: SaleItemCreateNestedOneWithoutCarpetInput
  }

  export type CarpetUncheckedCreateInput = {
    id?: string
    code: string
    width: number
    height: number
    area: number
    pattern: string
    color?: string | null
    material?: string | null
    costPrice: number
    sellPrice: number
    isSold?: boolean
    soldAt?: Date | string | null
    createdAt?: Date | string
    saleItem?: SaleItemUncheckedCreateNestedOneWithoutCarpetInput
  }

  export type CarpetUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    pattern?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItem?: SaleItemUpdateOneWithoutCarpetNestedInput
  }

  export type CarpetUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    pattern?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    saleItem?: SaleItemUncheckedUpdateOneWithoutCarpetNestedInput
  }

  export type CarpetCreateManyInput = {
    id?: string
    code: string
    width: number
    height: number
    area: number
    pattern: string
    color?: string | null
    material?: string | null
    costPrice: number
    sellPrice: number
    isSold?: boolean
    soldAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CarpetUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    pattern?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarpetUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    pattern?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateInput = {
    id?: string
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    salePoint: SalePointCreateNestedOneWithoutSalesInput
    seller?: UserCreateNestedOneWithoutSalesInput
    customer?: CustomerCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
    sellerProfits?: SellerProfitCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateInput = {
    id?: string
    salePointId: string
    sellerId?: string | null
    customerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    sellerProfits?: SellerProfitUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salePoint?: SalePointUpdateOneRequiredWithoutSalesNestedInput
    seller?: UserUpdateOneWithoutSalesNestedInput
    customer?: CustomerUpdateOneWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    sellerProfits?: SellerProfitUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePointId?: StringFieldUpdateOperationsInput | string
    sellerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    sellerProfits?: SellerProfitUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManyInput = {
    id?: string
    salePointId: string
    sellerId?: string | null
    customerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
  }

  export type SaleUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePointId?: StringFieldUpdateOperationsInput | string
    sellerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateInput = {
    id?: string
    price: number
    cost: number
    profit: number
    sale: SaleCreateNestedOneWithoutItemsInput
    carpet: CarpetCreateNestedOneWithoutSaleItemInput
  }

  export type SaleItemUncheckedCreateInput = {
    id?: string
    saleId: string
    carpetId: string
    price: number
    cost: number
    profit: number
  }

  export type SaleItemUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
    carpet?: CarpetUpdateOneRequiredWithoutSaleItemNestedInput
  }

  export type SaleItemUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    carpetId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
  }

  export type SaleItemCreateManyInput = {
    id?: string
    saleId: string
    carpetId: string
    price: number
    cost: number
    profit: number
  }

  export type SaleItemUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
  }

  export type SaleItemUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    carpetId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
  }

  export type CustomerCreateInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutCustomerInput
    debts?: CustomerDebtCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutCustomerInput
    debts?: CustomerDebtUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutCustomerNestedInput
    debts?: CustomerDebtUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutCustomerNestedInput
    debts?: CustomerDebtUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerCreateManyInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
  }

  export type CustomerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerDebtCreateInput = {
    id?: string
    amount: number
    note?: string | null
    paymentDate?: Date | string | null
    createdAt?: Date | string
    customer: CustomerCreateNestedOneWithoutDebtsInput
  }

  export type CustomerDebtUncheckedCreateInput = {
    id?: string
    customerId: string
    amount: number
    note?: string | null
    paymentDate?: Date | string | null
    createdAt?: Date | string
  }

  export type CustomerDebtUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    customer?: CustomerUpdateOneRequiredWithoutDebtsNestedInput
  }

  export type CustomerDebtUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerDebtCreateManyInput = {
    id?: string
    customerId: string
    amount: number
    note?: string | null
    paymentDate?: Date | string | null
    createdAt?: Date | string
  }

  export type CustomerDebtUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerDebtUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    customerId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerProfitCreateInput = {
    id?: string
    amount: number
    openedPercent: number
    createdAt?: Date | string
    seller: UserCreateNestedOneWithoutSellerCutsInput
    sale: SaleCreateNestedOneWithoutSellerProfitsInput
  }

  export type SellerProfitUncheckedCreateInput = {
    id?: string
    sellerId: string
    saleId: string
    amount: number
    openedPercent: number
    createdAt?: Date | string
  }

  export type SellerProfitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutSellerCutsNestedInput
    sale?: SaleUpdateOneRequiredWithoutSellerProfitsNestedInput
  }

  export type SellerProfitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerProfitCreateManyInput = {
    id?: string
    sellerId: string
    saleId: string
    amount: number
    openedPercent: number
    createdAt?: Date | string
  }

  export type SellerProfitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerProfitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type SaleListRelationFilter = {
    every?: SaleWhereInput
    some?: SaleWhereInput
    none?: SaleWhereInput
  }

  export type SellerProfitListRelationFilter = {
    every?: SellerProfitWhereInput
    some?: SellerProfitWhereInput
    none?: SellerProfitWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type SaleOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SellerProfitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    role?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type SalePointCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SalePointMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type SalePointMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    createdAt?: SortOrder
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type SaleItemNullableScalarRelationFilter = {
    is?: SaleItemWhereInput | null
    isNot?: SaleItemWhereInput | null
  }

  export type CarpetCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    width?: SortOrder
    height?: SortOrder
    area?: SortOrder
    pattern?: SortOrder
    color?: SortOrder
    material?: SortOrder
    costPrice?: SortOrder
    sellPrice?: SortOrder
    isSold?: SortOrder
    soldAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CarpetAvgOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    area?: SortOrder
    costPrice?: SortOrder
    sellPrice?: SortOrder
  }

  export type CarpetMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    width?: SortOrder
    height?: SortOrder
    area?: SortOrder
    pattern?: SortOrder
    color?: SortOrder
    material?: SortOrder
    costPrice?: SortOrder
    sellPrice?: SortOrder
    isSold?: SortOrder
    soldAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CarpetMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    width?: SortOrder
    height?: SortOrder
    area?: SortOrder
    pattern?: SortOrder
    color?: SortOrder
    material?: SortOrder
    costPrice?: SortOrder
    sellPrice?: SortOrder
    isSold?: SortOrder
    soldAt?: SortOrder
    createdAt?: SortOrder
  }

  export type CarpetSumOrderByAggregateInput = {
    width?: SortOrder
    height?: SortOrder
    area?: SortOrder
    costPrice?: SortOrder
    sellPrice?: SortOrder
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SalePointScalarRelationFilter = {
    is?: SalePointWhereInput
    isNot?: SalePointWhereInput
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type CustomerNullableScalarRelationFilter = {
    is?: CustomerWhereInput | null
    isNot?: CustomerWhereInput | null
  }

  export type SaleItemListRelationFilter = {
    every?: SaleItemWhereInput
    some?: SaleItemWhereInput
    none?: SaleItemWhereInput
  }

  export type SaleItemOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SaleCountOrderByAggregateInput = {
    id?: SortOrder
    salePointId?: SortOrder
    sellerId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paidAmount?: SortOrder
    debtAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleAvgOrderByAggregateInput = {
    totalPrice?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paidAmount?: SortOrder
    debtAmount?: SortOrder
  }

  export type SaleMaxOrderByAggregateInput = {
    id?: SortOrder
    salePointId?: SortOrder
    sellerId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paidAmount?: SortOrder
    debtAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleMinOrderByAggregateInput = {
    id?: SortOrder
    salePointId?: SortOrder
    sellerId?: SortOrder
    customerId?: SortOrder
    totalPrice?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paidAmount?: SortOrder
    debtAmount?: SortOrder
    createdAt?: SortOrder
  }

  export type SaleSumOrderByAggregateInput = {
    totalPrice?: SortOrder
    totalCost?: SortOrder
    profit?: SortOrder
    paidAmount?: SortOrder
    debtAmount?: SortOrder
  }

  export type SaleScalarRelationFilter = {
    is?: SaleWhereInput
    isNot?: SaleWhereInput
  }

  export type CarpetScalarRelationFilter = {
    is?: CarpetWhereInput
    isNot?: CarpetWhereInput
  }

  export type SaleItemCountOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    carpetId?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    profit?: SortOrder
  }

  export type SaleItemAvgOrderByAggregateInput = {
    price?: SortOrder
    cost?: SortOrder
    profit?: SortOrder
  }

  export type SaleItemMaxOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    carpetId?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    profit?: SortOrder
  }

  export type SaleItemMinOrderByAggregateInput = {
    id?: SortOrder
    saleId?: SortOrder
    carpetId?: SortOrder
    price?: SortOrder
    cost?: SortOrder
    profit?: SortOrder
  }

  export type SaleItemSumOrderByAggregateInput = {
    price?: SortOrder
    cost?: SortOrder
    profit?: SortOrder
  }

  export type CustomerDebtListRelationFilter = {
    every?: CustomerDebtWhereInput
    some?: CustomerDebtWhereInput
    none?: CustomerDebtWhereInput
  }

  export type CustomerDebtOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CustomerCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    phone?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerScalarRelationFilter = {
    is?: CustomerWhereInput
    isNot?: CustomerWhereInput
  }

  export type CustomerDebtCountOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerDebtAvgOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type CustomerDebtMaxOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerDebtMinOrderByAggregateInput = {
    id?: SortOrder
    customerId?: SortOrder
    amount?: SortOrder
    note?: SortOrder
    paymentDate?: SortOrder
    createdAt?: SortOrder
  }

  export type CustomerDebtSumOrderByAggregateInput = {
    amount?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type SellerProfitCountOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    openedPercent?: SortOrder
    createdAt?: SortOrder
  }

  export type SellerProfitAvgOrderByAggregateInput = {
    amount?: SortOrder
    openedPercent?: SortOrder
  }

  export type SellerProfitMaxOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    openedPercent?: SortOrder
    createdAt?: SortOrder
  }

  export type SellerProfitMinOrderByAggregateInput = {
    id?: SortOrder
    sellerId?: SortOrder
    saleId?: SortOrder
    amount?: SortOrder
    openedPercent?: SortOrder
    createdAt?: SortOrder
  }

  export type SellerProfitSumOrderByAggregateInput = {
    amount?: SortOrder
    openedPercent?: SortOrder
  }

  export type SaleCreateNestedManyWithoutSellerInput = {
    create?: XOR<SaleCreateWithoutSellerInput, SaleUncheckedCreateWithoutSellerInput> | SaleCreateWithoutSellerInput[] | SaleUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutSellerInput | SaleCreateOrConnectWithoutSellerInput[]
    createMany?: SaleCreateManySellerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SellerProfitCreateNestedManyWithoutSellerInput = {
    create?: XOR<SellerProfitCreateWithoutSellerInput, SellerProfitUncheckedCreateWithoutSellerInput> | SellerProfitCreateWithoutSellerInput[] | SellerProfitUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerProfitCreateOrConnectWithoutSellerInput | SellerProfitCreateOrConnectWithoutSellerInput[]
    createMany?: SellerProfitCreateManySellerInputEnvelope
    connect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<SaleCreateWithoutSellerInput, SaleUncheckedCreateWithoutSellerInput> | SaleCreateWithoutSellerInput[] | SaleUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutSellerInput | SaleCreateOrConnectWithoutSellerInput[]
    createMany?: SaleCreateManySellerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SellerProfitUncheckedCreateNestedManyWithoutSellerInput = {
    create?: XOR<SellerProfitCreateWithoutSellerInput, SellerProfitUncheckedCreateWithoutSellerInput> | SellerProfitCreateWithoutSellerInput[] | SellerProfitUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerProfitCreateOrConnectWithoutSellerInput | SellerProfitCreateOrConnectWithoutSellerInput[]
    createMany?: SellerProfitCreateManySellerInputEnvelope
    connect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type SaleUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SaleCreateWithoutSellerInput, SaleUncheckedCreateWithoutSellerInput> | SaleCreateWithoutSellerInput[] | SaleUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutSellerInput | SaleCreateOrConnectWithoutSellerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutSellerInput | SaleUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SaleCreateManySellerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutSellerInput | SaleUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutSellerInput | SaleUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SellerProfitUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SellerProfitCreateWithoutSellerInput, SellerProfitUncheckedCreateWithoutSellerInput> | SellerProfitCreateWithoutSellerInput[] | SellerProfitUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerProfitCreateOrConnectWithoutSellerInput | SellerProfitCreateOrConnectWithoutSellerInput[]
    upsert?: SellerProfitUpsertWithWhereUniqueWithoutSellerInput | SellerProfitUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SellerProfitCreateManySellerInputEnvelope
    set?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    disconnect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    delete?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    connect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    update?: SellerProfitUpdateWithWhereUniqueWithoutSellerInput | SellerProfitUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SellerProfitUpdateManyWithWhereWithoutSellerInput | SellerProfitUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SellerProfitScalarWhereInput | SellerProfitScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SaleCreateWithoutSellerInput, SaleUncheckedCreateWithoutSellerInput> | SaleCreateWithoutSellerInput[] | SaleUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutSellerInput | SaleCreateOrConnectWithoutSellerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutSellerInput | SaleUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SaleCreateManySellerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutSellerInput | SaleUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutSellerInput | SaleUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SellerProfitUncheckedUpdateManyWithoutSellerNestedInput = {
    create?: XOR<SellerProfitCreateWithoutSellerInput, SellerProfitUncheckedCreateWithoutSellerInput> | SellerProfitCreateWithoutSellerInput[] | SellerProfitUncheckedCreateWithoutSellerInput[]
    connectOrCreate?: SellerProfitCreateOrConnectWithoutSellerInput | SellerProfitCreateOrConnectWithoutSellerInput[]
    upsert?: SellerProfitUpsertWithWhereUniqueWithoutSellerInput | SellerProfitUpsertWithWhereUniqueWithoutSellerInput[]
    createMany?: SellerProfitCreateManySellerInputEnvelope
    set?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    disconnect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    delete?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    connect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    update?: SellerProfitUpdateWithWhereUniqueWithoutSellerInput | SellerProfitUpdateWithWhereUniqueWithoutSellerInput[]
    updateMany?: SellerProfitUpdateManyWithWhereWithoutSellerInput | SellerProfitUpdateManyWithWhereWithoutSellerInput[]
    deleteMany?: SellerProfitScalarWhereInput | SellerProfitScalarWhereInput[]
  }

  export type SaleCreateNestedManyWithoutSalePointInput = {
    create?: XOR<SaleCreateWithoutSalePointInput, SaleUncheckedCreateWithoutSalePointInput> | SaleCreateWithoutSalePointInput[] | SaleUncheckedCreateWithoutSalePointInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutSalePointInput | SaleCreateOrConnectWithoutSalePointInput[]
    createMany?: SaleCreateManySalePointInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutSalePointInput = {
    create?: XOR<SaleCreateWithoutSalePointInput, SaleUncheckedCreateWithoutSalePointInput> | SaleCreateWithoutSalePointInput[] | SaleUncheckedCreateWithoutSalePointInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutSalePointInput | SaleCreateOrConnectWithoutSalePointInput[]
    createMany?: SaleCreateManySalePointInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type SaleUpdateManyWithoutSalePointNestedInput = {
    create?: XOR<SaleCreateWithoutSalePointInput, SaleUncheckedCreateWithoutSalePointInput> | SaleCreateWithoutSalePointInput[] | SaleUncheckedCreateWithoutSalePointInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutSalePointInput | SaleCreateOrConnectWithoutSalePointInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutSalePointInput | SaleUpsertWithWhereUniqueWithoutSalePointInput[]
    createMany?: SaleCreateManySalePointInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutSalePointInput | SaleUpdateWithWhereUniqueWithoutSalePointInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutSalePointInput | SaleUpdateManyWithWhereWithoutSalePointInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutSalePointNestedInput = {
    create?: XOR<SaleCreateWithoutSalePointInput, SaleUncheckedCreateWithoutSalePointInput> | SaleCreateWithoutSalePointInput[] | SaleUncheckedCreateWithoutSalePointInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutSalePointInput | SaleCreateOrConnectWithoutSalePointInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutSalePointInput | SaleUpsertWithWhereUniqueWithoutSalePointInput[]
    createMany?: SaleCreateManySalePointInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutSalePointInput | SaleUpdateWithWhereUniqueWithoutSalePointInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutSalePointInput | SaleUpdateManyWithWhereWithoutSalePointInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type SaleItemCreateNestedOneWithoutCarpetInput = {
    create?: XOR<SaleItemCreateWithoutCarpetInput, SaleItemUncheckedCreateWithoutCarpetInput>
    connectOrCreate?: SaleItemCreateOrConnectWithoutCarpetInput
    connect?: SaleItemWhereUniqueInput
  }

  export type SaleItemUncheckedCreateNestedOneWithoutCarpetInput = {
    create?: XOR<SaleItemCreateWithoutCarpetInput, SaleItemUncheckedCreateWithoutCarpetInput>
    connectOrCreate?: SaleItemCreateOrConnectWithoutCarpetInput
    connect?: SaleItemWhereUniqueInput
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type SaleItemUpdateOneWithoutCarpetNestedInput = {
    create?: XOR<SaleItemCreateWithoutCarpetInput, SaleItemUncheckedCreateWithoutCarpetInput>
    connectOrCreate?: SaleItemCreateOrConnectWithoutCarpetInput
    upsert?: SaleItemUpsertWithoutCarpetInput
    disconnect?: SaleItemWhereInput | boolean
    delete?: SaleItemWhereInput | boolean
    connect?: SaleItemWhereUniqueInput
    update?: XOR<XOR<SaleItemUpdateToOneWithWhereWithoutCarpetInput, SaleItemUpdateWithoutCarpetInput>, SaleItemUncheckedUpdateWithoutCarpetInput>
  }

  export type SaleItemUncheckedUpdateOneWithoutCarpetNestedInput = {
    create?: XOR<SaleItemCreateWithoutCarpetInput, SaleItemUncheckedCreateWithoutCarpetInput>
    connectOrCreate?: SaleItemCreateOrConnectWithoutCarpetInput
    upsert?: SaleItemUpsertWithoutCarpetInput
    disconnect?: SaleItemWhereInput | boolean
    delete?: SaleItemWhereInput | boolean
    connect?: SaleItemWhereUniqueInput
    update?: XOR<XOR<SaleItemUpdateToOneWithWhereWithoutCarpetInput, SaleItemUpdateWithoutCarpetInput>, SaleItemUncheckedUpdateWithoutCarpetInput>
  }

  export type SalePointCreateNestedOneWithoutSalesInput = {
    create?: XOR<SalePointCreateWithoutSalesInput, SalePointUncheckedCreateWithoutSalesInput>
    connectOrCreate?: SalePointCreateOrConnectWithoutSalesInput
    connect?: SalePointWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutSalesInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    connect?: UserWhereUniqueInput
  }

  export type CustomerCreateNestedOneWithoutSalesInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    connect?: CustomerWhereUniqueInput
  }

  export type SaleItemCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SellerProfitCreateNestedManyWithoutSaleInput = {
    create?: XOR<SellerProfitCreateWithoutSaleInput, SellerProfitUncheckedCreateWithoutSaleInput> | SellerProfitCreateWithoutSaleInput[] | SellerProfitUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SellerProfitCreateOrConnectWithoutSaleInput | SellerProfitCreateOrConnectWithoutSaleInput[]
    createMany?: SellerProfitCreateManySaleInputEnvelope
    connect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
  }

  export type SaleItemUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
  }

  export type SellerProfitUncheckedCreateNestedManyWithoutSaleInput = {
    create?: XOR<SellerProfitCreateWithoutSaleInput, SellerProfitUncheckedCreateWithoutSaleInput> | SellerProfitCreateWithoutSaleInput[] | SellerProfitUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SellerProfitCreateOrConnectWithoutSaleInput | SellerProfitCreateOrConnectWithoutSaleInput[]
    createMany?: SellerProfitCreateManySaleInputEnvelope
    connect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
  }

  export type SalePointUpdateOneRequiredWithoutSalesNestedInput = {
    create?: XOR<SalePointCreateWithoutSalesInput, SalePointUncheckedCreateWithoutSalesInput>
    connectOrCreate?: SalePointCreateOrConnectWithoutSalesInput
    upsert?: SalePointUpsertWithoutSalesInput
    connect?: SalePointWhereUniqueInput
    update?: XOR<XOR<SalePointUpdateToOneWithWhereWithoutSalesInput, SalePointUpdateWithoutSalesInput>, SalePointUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateOneWithoutSalesNestedInput = {
    create?: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    connectOrCreate?: UserCreateOrConnectWithoutSalesInput
    upsert?: UserUpsertWithoutSalesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSalesInput, UserUpdateWithoutSalesInput>, UserUncheckedUpdateWithoutSalesInput>
  }

  export type CustomerUpdateOneWithoutSalesNestedInput = {
    create?: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutSalesInput
    upsert?: CustomerUpsertWithoutSalesInput
    disconnect?: CustomerWhereInput | boolean
    delete?: CustomerWhereInput | boolean
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutSalesInput, CustomerUpdateWithoutSalesInput>, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type SaleItemUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SellerProfitUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SellerProfitCreateWithoutSaleInput, SellerProfitUncheckedCreateWithoutSaleInput> | SellerProfitCreateWithoutSaleInput[] | SellerProfitUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SellerProfitCreateOrConnectWithoutSaleInput | SellerProfitCreateOrConnectWithoutSaleInput[]
    upsert?: SellerProfitUpsertWithWhereUniqueWithoutSaleInput | SellerProfitUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SellerProfitCreateManySaleInputEnvelope
    set?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    disconnect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    delete?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    connect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    update?: SellerProfitUpdateWithWhereUniqueWithoutSaleInput | SellerProfitUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SellerProfitUpdateManyWithWhereWithoutSaleInput | SellerProfitUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SellerProfitScalarWhereInput | SellerProfitScalarWhereInput[]
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput> | SaleItemCreateWithoutSaleInput[] | SaleItemUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SaleItemCreateOrConnectWithoutSaleInput | SaleItemCreateOrConnectWithoutSaleInput[]
    upsert?: SaleItemUpsertWithWhereUniqueWithoutSaleInput | SaleItemUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SaleItemCreateManySaleInputEnvelope
    set?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    disconnect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    delete?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    connect?: SaleItemWhereUniqueInput | SaleItemWhereUniqueInput[]
    update?: SaleItemUpdateWithWhereUniqueWithoutSaleInput | SaleItemUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SaleItemUpdateManyWithWhereWithoutSaleInput | SaleItemUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
  }

  export type SellerProfitUncheckedUpdateManyWithoutSaleNestedInput = {
    create?: XOR<SellerProfitCreateWithoutSaleInput, SellerProfitUncheckedCreateWithoutSaleInput> | SellerProfitCreateWithoutSaleInput[] | SellerProfitUncheckedCreateWithoutSaleInput[]
    connectOrCreate?: SellerProfitCreateOrConnectWithoutSaleInput | SellerProfitCreateOrConnectWithoutSaleInput[]
    upsert?: SellerProfitUpsertWithWhereUniqueWithoutSaleInput | SellerProfitUpsertWithWhereUniqueWithoutSaleInput[]
    createMany?: SellerProfitCreateManySaleInputEnvelope
    set?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    disconnect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    delete?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    connect?: SellerProfitWhereUniqueInput | SellerProfitWhereUniqueInput[]
    update?: SellerProfitUpdateWithWhereUniqueWithoutSaleInput | SellerProfitUpdateWithWhereUniqueWithoutSaleInput[]
    updateMany?: SellerProfitUpdateManyWithWhereWithoutSaleInput | SellerProfitUpdateManyWithWhereWithoutSaleInput[]
    deleteMany?: SellerProfitScalarWhereInput | SellerProfitScalarWhereInput[]
  }

  export type SaleCreateNestedOneWithoutItemsInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    connect?: SaleWhereUniqueInput
  }

  export type CarpetCreateNestedOneWithoutSaleItemInput = {
    create?: XOR<CarpetCreateWithoutSaleItemInput, CarpetUncheckedCreateWithoutSaleItemInput>
    connectOrCreate?: CarpetCreateOrConnectWithoutSaleItemInput
    connect?: CarpetWhereUniqueInput
  }

  export type SaleUpdateOneRequiredWithoutItemsNestedInput = {
    create?: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutItemsInput
    upsert?: SaleUpsertWithoutItemsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutItemsInput, SaleUpdateWithoutItemsInput>, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type CarpetUpdateOneRequiredWithoutSaleItemNestedInput = {
    create?: XOR<CarpetCreateWithoutSaleItemInput, CarpetUncheckedCreateWithoutSaleItemInput>
    connectOrCreate?: CarpetCreateOrConnectWithoutSaleItemInput
    upsert?: CarpetUpsertWithoutSaleItemInput
    connect?: CarpetWhereUniqueInput
    update?: XOR<XOR<CarpetUpdateToOneWithWhereWithoutSaleItemInput, CarpetUpdateWithoutSaleItemInput>, CarpetUncheckedUpdateWithoutSaleItemInput>
  }

  export type SaleCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CustomerDebtCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerDebtCreateWithoutCustomerInput, CustomerDebtUncheckedCreateWithoutCustomerInput> | CustomerDebtCreateWithoutCustomerInput[] | CustomerDebtUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerDebtCreateOrConnectWithoutCustomerInput | CustomerDebtCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerDebtCreateManyCustomerInputEnvelope
    connect?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
  }

  export type SaleUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
  }

  export type CustomerDebtUncheckedCreateNestedManyWithoutCustomerInput = {
    create?: XOR<CustomerDebtCreateWithoutCustomerInput, CustomerDebtUncheckedCreateWithoutCustomerInput> | CustomerDebtCreateWithoutCustomerInput[] | CustomerDebtUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerDebtCreateOrConnectWithoutCustomerInput | CustomerDebtCreateOrConnectWithoutCustomerInput[]
    createMany?: CustomerDebtCreateManyCustomerInputEnvelope
    connect?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
  }

  export type SaleUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CustomerDebtUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerDebtCreateWithoutCustomerInput, CustomerDebtUncheckedCreateWithoutCustomerInput> | CustomerDebtCreateWithoutCustomerInput[] | CustomerDebtUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerDebtCreateOrConnectWithoutCustomerInput | CustomerDebtCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerDebtUpsertWithWhereUniqueWithoutCustomerInput | CustomerDebtUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerDebtCreateManyCustomerInputEnvelope
    set?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
    disconnect?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
    delete?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
    connect?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
    update?: CustomerDebtUpdateWithWhereUniqueWithoutCustomerInput | CustomerDebtUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerDebtUpdateManyWithWhereWithoutCustomerInput | CustomerDebtUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerDebtScalarWhereInput | CustomerDebtScalarWhereInput[]
  }

  export type SaleUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput> | SaleCreateWithoutCustomerInput[] | SaleUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: SaleCreateOrConnectWithoutCustomerInput | SaleCreateOrConnectWithoutCustomerInput[]
    upsert?: SaleUpsertWithWhereUniqueWithoutCustomerInput | SaleUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: SaleCreateManyCustomerInputEnvelope
    set?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    disconnect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    delete?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    connect?: SaleWhereUniqueInput | SaleWhereUniqueInput[]
    update?: SaleUpdateWithWhereUniqueWithoutCustomerInput | SaleUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: SaleUpdateManyWithWhereWithoutCustomerInput | SaleUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: SaleScalarWhereInput | SaleScalarWhereInput[]
  }

  export type CustomerDebtUncheckedUpdateManyWithoutCustomerNestedInput = {
    create?: XOR<CustomerDebtCreateWithoutCustomerInput, CustomerDebtUncheckedCreateWithoutCustomerInput> | CustomerDebtCreateWithoutCustomerInput[] | CustomerDebtUncheckedCreateWithoutCustomerInput[]
    connectOrCreate?: CustomerDebtCreateOrConnectWithoutCustomerInput | CustomerDebtCreateOrConnectWithoutCustomerInput[]
    upsert?: CustomerDebtUpsertWithWhereUniqueWithoutCustomerInput | CustomerDebtUpsertWithWhereUniqueWithoutCustomerInput[]
    createMany?: CustomerDebtCreateManyCustomerInputEnvelope
    set?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
    disconnect?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
    delete?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
    connect?: CustomerDebtWhereUniqueInput | CustomerDebtWhereUniqueInput[]
    update?: CustomerDebtUpdateWithWhereUniqueWithoutCustomerInput | CustomerDebtUpdateWithWhereUniqueWithoutCustomerInput[]
    updateMany?: CustomerDebtUpdateManyWithWhereWithoutCustomerInput | CustomerDebtUpdateManyWithWhereWithoutCustomerInput[]
    deleteMany?: CustomerDebtScalarWhereInput | CustomerDebtScalarWhereInput[]
  }

  export type CustomerCreateNestedOneWithoutDebtsInput = {
    create?: XOR<CustomerCreateWithoutDebtsInput, CustomerUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDebtsInput
    connect?: CustomerWhereUniqueInput
  }

  export type CustomerUpdateOneRequiredWithoutDebtsNestedInput = {
    create?: XOR<CustomerCreateWithoutDebtsInput, CustomerUncheckedCreateWithoutDebtsInput>
    connectOrCreate?: CustomerCreateOrConnectWithoutDebtsInput
    upsert?: CustomerUpsertWithoutDebtsInput
    connect?: CustomerWhereUniqueInput
    update?: XOR<XOR<CustomerUpdateToOneWithWhereWithoutDebtsInput, CustomerUpdateWithoutDebtsInput>, CustomerUncheckedUpdateWithoutDebtsInput>
  }

  export type UserCreateNestedOneWithoutSellerCutsInput = {
    create?: XOR<UserCreateWithoutSellerCutsInput, UserUncheckedCreateWithoutSellerCutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerCutsInput
    connect?: UserWhereUniqueInput
  }

  export type SaleCreateNestedOneWithoutSellerProfitsInput = {
    create?: XOR<SaleCreateWithoutSellerProfitsInput, SaleUncheckedCreateWithoutSellerProfitsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutSellerProfitsInput
    connect?: SaleWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSellerCutsNestedInput = {
    create?: XOR<UserCreateWithoutSellerCutsInput, UserUncheckedCreateWithoutSellerCutsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSellerCutsInput
    upsert?: UserUpsertWithoutSellerCutsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSellerCutsInput, UserUpdateWithoutSellerCutsInput>, UserUncheckedUpdateWithoutSellerCutsInput>
  }

  export type SaleUpdateOneRequiredWithoutSellerProfitsNestedInput = {
    create?: XOR<SaleCreateWithoutSellerProfitsInput, SaleUncheckedCreateWithoutSellerProfitsInput>
    connectOrCreate?: SaleCreateOrConnectWithoutSellerProfitsInput
    upsert?: SaleUpsertWithoutSellerProfitsInput
    connect?: SaleWhereUniqueInput
    update?: XOR<XOR<SaleUpdateToOneWithWhereWithoutSellerProfitsInput, SaleUpdateWithoutSellerProfitsInput>, SaleUncheckedUpdateWithoutSellerProfitsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type SaleCreateWithoutSellerInput = {
    id?: string
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    salePoint: SalePointCreateNestedOneWithoutSalesInput
    customer?: CustomerCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
    sellerProfits?: SellerProfitCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutSellerInput = {
    id?: string
    salePointId: string
    customerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    sellerProfits?: SellerProfitUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutSellerInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutSellerInput, SaleUncheckedCreateWithoutSellerInput>
  }

  export type SaleCreateManySellerInputEnvelope = {
    data: SaleCreateManySellerInput | SaleCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type SellerProfitCreateWithoutSellerInput = {
    id?: string
    amount: number
    openedPercent: number
    createdAt?: Date | string
    sale: SaleCreateNestedOneWithoutSellerProfitsInput
  }

  export type SellerProfitUncheckedCreateWithoutSellerInput = {
    id?: string
    saleId: string
    amount: number
    openedPercent: number
    createdAt?: Date | string
  }

  export type SellerProfitCreateOrConnectWithoutSellerInput = {
    where: SellerProfitWhereUniqueInput
    create: XOR<SellerProfitCreateWithoutSellerInput, SellerProfitUncheckedCreateWithoutSellerInput>
  }

  export type SellerProfitCreateManySellerInputEnvelope = {
    data: SellerProfitCreateManySellerInput | SellerProfitCreateManySellerInput[]
    skipDuplicates?: boolean
  }

  export type SaleUpsertWithWhereUniqueWithoutSellerInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutSellerInput, SaleUncheckedUpdateWithoutSellerInput>
    create: XOR<SaleCreateWithoutSellerInput, SaleUncheckedCreateWithoutSellerInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutSellerInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutSellerInput, SaleUncheckedUpdateWithoutSellerInput>
  }

  export type SaleUpdateManyWithWhereWithoutSellerInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutSellerInput>
  }

  export type SaleScalarWhereInput = {
    AND?: SaleScalarWhereInput | SaleScalarWhereInput[]
    OR?: SaleScalarWhereInput[]
    NOT?: SaleScalarWhereInput | SaleScalarWhereInput[]
    id?: StringFilter<"Sale"> | string
    salePointId?: StringFilter<"Sale"> | string
    sellerId?: StringNullableFilter<"Sale"> | string | null
    customerId?: StringNullableFilter<"Sale"> | string | null
    totalPrice?: IntFilter<"Sale"> | number
    totalCost?: IntFilter<"Sale"> | number
    profit?: IntFilter<"Sale"> | number
    paidAmount?: IntFilter<"Sale"> | number
    debtAmount?: IntFilter<"Sale"> | number
    createdAt?: DateTimeFilter<"Sale"> | Date | string
  }

  export type SellerProfitUpsertWithWhereUniqueWithoutSellerInput = {
    where: SellerProfitWhereUniqueInput
    update: XOR<SellerProfitUpdateWithoutSellerInput, SellerProfitUncheckedUpdateWithoutSellerInput>
    create: XOR<SellerProfitCreateWithoutSellerInput, SellerProfitUncheckedCreateWithoutSellerInput>
  }

  export type SellerProfitUpdateWithWhereUniqueWithoutSellerInput = {
    where: SellerProfitWhereUniqueInput
    data: XOR<SellerProfitUpdateWithoutSellerInput, SellerProfitUncheckedUpdateWithoutSellerInput>
  }

  export type SellerProfitUpdateManyWithWhereWithoutSellerInput = {
    where: SellerProfitScalarWhereInput
    data: XOR<SellerProfitUpdateManyMutationInput, SellerProfitUncheckedUpdateManyWithoutSellerInput>
  }

  export type SellerProfitScalarWhereInput = {
    AND?: SellerProfitScalarWhereInput | SellerProfitScalarWhereInput[]
    OR?: SellerProfitScalarWhereInput[]
    NOT?: SellerProfitScalarWhereInput | SellerProfitScalarWhereInput[]
    id?: StringFilter<"SellerProfit"> | string
    sellerId?: StringFilter<"SellerProfit"> | string
    saleId?: StringFilter<"SellerProfit"> | string
    amount?: IntFilter<"SellerProfit"> | number
    openedPercent?: FloatFilter<"SellerProfit"> | number
    createdAt?: DateTimeFilter<"SellerProfit"> | Date | string
  }

  export type SaleCreateWithoutSalePointInput = {
    id?: string
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    seller?: UserCreateNestedOneWithoutSalesInput
    customer?: CustomerCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
    sellerProfits?: SellerProfitCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutSalePointInput = {
    id?: string
    sellerId?: string | null
    customerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    sellerProfits?: SellerProfitUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutSalePointInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutSalePointInput, SaleUncheckedCreateWithoutSalePointInput>
  }

  export type SaleCreateManySalePointInputEnvelope = {
    data: SaleCreateManySalePointInput | SaleCreateManySalePointInput[]
    skipDuplicates?: boolean
  }

  export type SaleUpsertWithWhereUniqueWithoutSalePointInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutSalePointInput, SaleUncheckedUpdateWithoutSalePointInput>
    create: XOR<SaleCreateWithoutSalePointInput, SaleUncheckedCreateWithoutSalePointInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutSalePointInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutSalePointInput, SaleUncheckedUpdateWithoutSalePointInput>
  }

  export type SaleUpdateManyWithWhereWithoutSalePointInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutSalePointInput>
  }

  export type SaleItemCreateWithoutCarpetInput = {
    id?: string
    price: number
    cost: number
    profit: number
    sale: SaleCreateNestedOneWithoutItemsInput
  }

  export type SaleItemUncheckedCreateWithoutCarpetInput = {
    id?: string
    saleId: string
    price: number
    cost: number
    profit: number
  }

  export type SaleItemCreateOrConnectWithoutCarpetInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutCarpetInput, SaleItemUncheckedCreateWithoutCarpetInput>
  }

  export type SaleItemUpsertWithoutCarpetInput = {
    update: XOR<SaleItemUpdateWithoutCarpetInput, SaleItemUncheckedUpdateWithoutCarpetInput>
    create: XOR<SaleItemCreateWithoutCarpetInput, SaleItemUncheckedCreateWithoutCarpetInput>
    where?: SaleItemWhereInput
  }

  export type SaleItemUpdateToOneWithWhereWithoutCarpetInput = {
    where?: SaleItemWhereInput
    data: XOR<SaleItemUpdateWithoutCarpetInput, SaleItemUncheckedUpdateWithoutCarpetInput>
  }

  export type SaleItemUpdateWithoutCarpetInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    sale?: SaleUpdateOneRequiredWithoutItemsNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutCarpetInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
  }

  export type SalePointCreateWithoutSalesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type SalePointUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    createdAt?: Date | string
  }

  export type SalePointCreateOrConnectWithoutSalesInput = {
    where: SalePointWhereUniqueInput
    create: XOR<SalePointCreateWithoutSalesInput, SalePointUncheckedCreateWithoutSalesInput>
  }

  export type UserCreateWithoutSalesInput = {
    id?: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    sellerCuts?: SellerProfitCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    sellerCuts?: SellerProfitUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutSalesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
  }

  export type CustomerCreateWithoutSalesInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
    debts?: CustomerDebtCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutSalesInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
    debts?: CustomerDebtUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutSalesInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
  }

  export type SaleItemCreateWithoutSaleInput = {
    id?: string
    price: number
    cost: number
    profit: number
    carpet: CarpetCreateNestedOneWithoutSaleItemInput
  }

  export type SaleItemUncheckedCreateWithoutSaleInput = {
    id?: string
    carpetId: string
    price: number
    cost: number
    profit: number
  }

  export type SaleItemCreateOrConnectWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemCreateManySaleInputEnvelope = {
    data: SaleItemCreateManySaleInput | SaleItemCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type SellerProfitCreateWithoutSaleInput = {
    id?: string
    amount: number
    openedPercent: number
    createdAt?: Date | string
    seller: UserCreateNestedOneWithoutSellerCutsInput
  }

  export type SellerProfitUncheckedCreateWithoutSaleInput = {
    id?: string
    sellerId: string
    amount: number
    openedPercent: number
    createdAt?: Date | string
  }

  export type SellerProfitCreateOrConnectWithoutSaleInput = {
    where: SellerProfitWhereUniqueInput
    create: XOR<SellerProfitCreateWithoutSaleInput, SellerProfitUncheckedCreateWithoutSaleInput>
  }

  export type SellerProfitCreateManySaleInputEnvelope = {
    data: SellerProfitCreateManySaleInput | SellerProfitCreateManySaleInput[]
    skipDuplicates?: boolean
  }

  export type SalePointUpsertWithoutSalesInput = {
    update: XOR<SalePointUpdateWithoutSalesInput, SalePointUncheckedUpdateWithoutSalesInput>
    create: XOR<SalePointCreateWithoutSalesInput, SalePointUncheckedCreateWithoutSalesInput>
    where?: SalePointWhereInput
  }

  export type SalePointUpdateToOneWithWhereWithoutSalesInput = {
    where?: SalePointWhereInput
    data: XOR<SalePointUpdateWithoutSalesInput, SalePointUncheckedUpdateWithoutSalesInput>
  }

  export type SalePointUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SalePointUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUpsertWithoutSalesInput = {
    update: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
    create: XOR<UserCreateWithoutSalesInput, UserUncheckedCreateWithoutSalesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSalesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSalesInput, UserUncheckedUpdateWithoutSalesInput>
  }

  export type UserUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerCuts?: SellerProfitUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerCuts?: SellerProfitUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type CustomerUpsertWithoutSalesInput = {
    update: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
    create: XOR<CustomerCreateWithoutSalesInput, CustomerUncheckedCreateWithoutSalesInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutSalesInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutSalesInput, CustomerUncheckedUpdateWithoutSalesInput>
  }

  export type CustomerUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debts?: CustomerDebtUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutSalesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    debts?: CustomerDebtUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type SaleItemUpsertWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    update: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
    create: XOR<SaleItemCreateWithoutSaleInput, SaleItemUncheckedCreateWithoutSaleInput>
  }

  export type SaleItemUpdateWithWhereUniqueWithoutSaleInput = {
    where: SaleItemWhereUniqueInput
    data: XOR<SaleItemUpdateWithoutSaleInput, SaleItemUncheckedUpdateWithoutSaleInput>
  }

  export type SaleItemUpdateManyWithWhereWithoutSaleInput = {
    where: SaleItemScalarWhereInput
    data: XOR<SaleItemUpdateManyMutationInput, SaleItemUncheckedUpdateManyWithoutSaleInput>
  }

  export type SaleItemScalarWhereInput = {
    AND?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    OR?: SaleItemScalarWhereInput[]
    NOT?: SaleItemScalarWhereInput | SaleItemScalarWhereInput[]
    id?: StringFilter<"SaleItem"> | string
    saleId?: StringFilter<"SaleItem"> | string
    carpetId?: StringFilter<"SaleItem"> | string
    price?: IntFilter<"SaleItem"> | number
    cost?: IntFilter<"SaleItem"> | number
    profit?: IntFilter<"SaleItem"> | number
  }

  export type SellerProfitUpsertWithWhereUniqueWithoutSaleInput = {
    where: SellerProfitWhereUniqueInput
    update: XOR<SellerProfitUpdateWithoutSaleInput, SellerProfitUncheckedUpdateWithoutSaleInput>
    create: XOR<SellerProfitCreateWithoutSaleInput, SellerProfitUncheckedCreateWithoutSaleInput>
  }

  export type SellerProfitUpdateWithWhereUniqueWithoutSaleInput = {
    where: SellerProfitWhereUniqueInput
    data: XOR<SellerProfitUpdateWithoutSaleInput, SellerProfitUncheckedUpdateWithoutSaleInput>
  }

  export type SellerProfitUpdateManyWithWhereWithoutSaleInput = {
    where: SellerProfitScalarWhereInput
    data: XOR<SellerProfitUpdateManyMutationInput, SellerProfitUncheckedUpdateManyWithoutSaleInput>
  }

  export type SaleCreateWithoutItemsInput = {
    id?: string
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    salePoint: SalePointCreateNestedOneWithoutSalesInput
    seller?: UserCreateNestedOneWithoutSalesInput
    customer?: CustomerCreateNestedOneWithoutSalesInput
    sellerProfits?: SellerProfitCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutItemsInput = {
    id?: string
    salePointId: string
    sellerId?: string | null
    customerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    sellerProfits?: SellerProfitUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutItemsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
  }

  export type CarpetCreateWithoutSaleItemInput = {
    id?: string
    code: string
    width: number
    height: number
    area: number
    pattern: string
    color?: string | null
    material?: string | null
    costPrice: number
    sellPrice: number
    isSold?: boolean
    soldAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CarpetUncheckedCreateWithoutSaleItemInput = {
    id?: string
    code: string
    width: number
    height: number
    area: number
    pattern: string
    color?: string | null
    material?: string | null
    costPrice: number
    sellPrice: number
    isSold?: boolean
    soldAt?: Date | string | null
    createdAt?: Date | string
  }

  export type CarpetCreateOrConnectWithoutSaleItemInput = {
    where: CarpetWhereUniqueInput
    create: XOR<CarpetCreateWithoutSaleItemInput, CarpetUncheckedCreateWithoutSaleItemInput>
  }

  export type SaleUpsertWithoutItemsInput = {
    update: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
    create: XOR<SaleCreateWithoutItemsInput, SaleUncheckedCreateWithoutItemsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutItemsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutItemsInput, SaleUncheckedUpdateWithoutItemsInput>
  }

  export type SaleUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salePoint?: SalePointUpdateOneRequiredWithoutSalesNestedInput
    seller?: UserUpdateOneWithoutSalesNestedInput
    customer?: CustomerUpdateOneWithoutSalesNestedInput
    sellerProfits?: SellerProfitUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutItemsInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePointId?: StringFieldUpdateOperationsInput | string
    sellerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sellerProfits?: SellerProfitUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type CarpetUpsertWithoutSaleItemInput = {
    update: XOR<CarpetUpdateWithoutSaleItemInput, CarpetUncheckedUpdateWithoutSaleItemInput>
    create: XOR<CarpetCreateWithoutSaleItemInput, CarpetUncheckedCreateWithoutSaleItemInput>
    where?: CarpetWhereInput
  }

  export type CarpetUpdateToOneWithWhereWithoutSaleItemInput = {
    where?: CarpetWhereInput
    data: XOR<CarpetUpdateWithoutSaleItemInput, CarpetUncheckedUpdateWithoutSaleItemInput>
  }

  export type CarpetUpdateWithoutSaleItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    pattern?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CarpetUncheckedUpdateWithoutSaleItemInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    width?: FloatFieldUpdateOperationsInput | number
    height?: FloatFieldUpdateOperationsInput | number
    area?: FloatFieldUpdateOperationsInput | number
    pattern?: StringFieldUpdateOperationsInput | string
    color?: NullableStringFieldUpdateOperationsInput | string | null
    material?: NullableStringFieldUpdateOperationsInput | string | null
    costPrice?: IntFieldUpdateOperationsInput | number
    sellPrice?: IntFieldUpdateOperationsInput | number
    isSold?: BoolFieldUpdateOperationsInput | boolean
    soldAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateWithoutCustomerInput = {
    id?: string
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    salePoint: SalePointCreateNestedOneWithoutSalesInput
    seller?: UserCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
    sellerProfits?: SellerProfitCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutCustomerInput = {
    id?: string
    salePointId: string
    sellerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
    sellerProfits?: SellerProfitUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleCreateManyCustomerInputEnvelope = {
    data: SaleCreateManyCustomerInput | SaleCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type CustomerDebtCreateWithoutCustomerInput = {
    id?: string
    amount: number
    note?: string | null
    paymentDate?: Date | string | null
    createdAt?: Date | string
  }

  export type CustomerDebtUncheckedCreateWithoutCustomerInput = {
    id?: string
    amount: number
    note?: string | null
    paymentDate?: Date | string | null
    createdAt?: Date | string
  }

  export type CustomerDebtCreateOrConnectWithoutCustomerInput = {
    where: CustomerDebtWhereUniqueInput
    create: XOR<CustomerDebtCreateWithoutCustomerInput, CustomerDebtUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerDebtCreateManyCustomerInputEnvelope = {
    data: CustomerDebtCreateManyCustomerInput | CustomerDebtCreateManyCustomerInput[]
    skipDuplicates?: boolean
  }

  export type SaleUpsertWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    update: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
    create: XOR<SaleCreateWithoutCustomerInput, SaleUncheckedCreateWithoutCustomerInput>
  }

  export type SaleUpdateWithWhereUniqueWithoutCustomerInput = {
    where: SaleWhereUniqueInput
    data: XOR<SaleUpdateWithoutCustomerInput, SaleUncheckedUpdateWithoutCustomerInput>
  }

  export type SaleUpdateManyWithWhereWithoutCustomerInput = {
    where: SaleScalarWhereInput
    data: XOR<SaleUpdateManyMutationInput, SaleUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerDebtUpsertWithWhereUniqueWithoutCustomerInput = {
    where: CustomerDebtWhereUniqueInput
    update: XOR<CustomerDebtUpdateWithoutCustomerInput, CustomerDebtUncheckedUpdateWithoutCustomerInput>
    create: XOR<CustomerDebtCreateWithoutCustomerInput, CustomerDebtUncheckedCreateWithoutCustomerInput>
  }

  export type CustomerDebtUpdateWithWhereUniqueWithoutCustomerInput = {
    where: CustomerDebtWhereUniqueInput
    data: XOR<CustomerDebtUpdateWithoutCustomerInput, CustomerDebtUncheckedUpdateWithoutCustomerInput>
  }

  export type CustomerDebtUpdateManyWithWhereWithoutCustomerInput = {
    where: CustomerDebtScalarWhereInput
    data: XOR<CustomerDebtUpdateManyMutationInput, CustomerDebtUncheckedUpdateManyWithoutCustomerInput>
  }

  export type CustomerDebtScalarWhereInput = {
    AND?: CustomerDebtScalarWhereInput | CustomerDebtScalarWhereInput[]
    OR?: CustomerDebtScalarWhereInput[]
    NOT?: CustomerDebtScalarWhereInput | CustomerDebtScalarWhereInput[]
    id?: StringFilter<"CustomerDebt"> | string
    customerId?: StringFilter<"CustomerDebt"> | string
    amount?: IntFilter<"CustomerDebt"> | number
    note?: StringNullableFilter<"CustomerDebt"> | string | null
    paymentDate?: DateTimeNullableFilter<"CustomerDebt"> | Date | string | null
    createdAt?: DateTimeFilter<"CustomerDebt"> | Date | string
  }

  export type CustomerCreateWithoutDebtsInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutCustomerInput
  }

  export type CustomerUncheckedCreateWithoutDebtsInput = {
    id?: string
    name: string
    phone?: string | null
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutCustomerInput
  }

  export type CustomerCreateOrConnectWithoutDebtsInput = {
    where: CustomerWhereUniqueInput
    create: XOR<CustomerCreateWithoutDebtsInput, CustomerUncheckedCreateWithoutDebtsInput>
  }

  export type CustomerUpsertWithoutDebtsInput = {
    update: XOR<CustomerUpdateWithoutDebtsInput, CustomerUncheckedUpdateWithoutDebtsInput>
    create: XOR<CustomerCreateWithoutDebtsInput, CustomerUncheckedCreateWithoutDebtsInput>
    where?: CustomerWhereInput
  }

  export type CustomerUpdateToOneWithWhereWithoutDebtsInput = {
    where?: CustomerWhereInput
    data: XOR<CustomerUpdateWithoutDebtsInput, CustomerUncheckedUpdateWithoutDebtsInput>
  }

  export type CustomerUpdateWithoutDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutCustomerNestedInput
  }

  export type CustomerUncheckedUpdateWithoutDebtsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutCustomerNestedInput
  }

  export type UserCreateWithoutSellerCutsInput = {
    id?: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    sales?: SaleCreateNestedManyWithoutSellerInput
  }

  export type UserUncheckedCreateWithoutSellerCutsInput = {
    id?: string
    name: string
    phone?: string | null
    role?: $Enums.UserRole
    password: string
    createdAt?: Date | string
    sales?: SaleUncheckedCreateNestedManyWithoutSellerInput
  }

  export type UserCreateOrConnectWithoutSellerCutsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSellerCutsInput, UserUncheckedCreateWithoutSellerCutsInput>
  }

  export type SaleCreateWithoutSellerProfitsInput = {
    id?: string
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    salePoint: SalePointCreateNestedOneWithoutSalesInput
    seller?: UserCreateNestedOneWithoutSalesInput
    customer?: CustomerCreateNestedOneWithoutSalesInput
    items?: SaleItemCreateNestedManyWithoutSaleInput
  }

  export type SaleUncheckedCreateWithoutSellerProfitsInput = {
    id?: string
    salePointId: string
    sellerId?: string | null
    customerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
    items?: SaleItemUncheckedCreateNestedManyWithoutSaleInput
  }

  export type SaleCreateOrConnectWithoutSellerProfitsInput = {
    where: SaleWhereUniqueInput
    create: XOR<SaleCreateWithoutSellerProfitsInput, SaleUncheckedCreateWithoutSellerProfitsInput>
  }

  export type UserUpsertWithoutSellerCutsInput = {
    update: XOR<UserUpdateWithoutSellerCutsInput, UserUncheckedUpdateWithoutSellerCutsInput>
    create: XOR<UserCreateWithoutSellerCutsInput, UserUncheckedCreateWithoutSellerCutsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSellerCutsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSellerCutsInput, UserUncheckedUpdateWithoutSellerCutsInput>
  }

  export type UserUpdateWithoutSellerCutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUpdateManyWithoutSellerNestedInput
  }

  export type UserUncheckedUpdateWithoutSellerCutsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sales?: SaleUncheckedUpdateManyWithoutSellerNestedInput
  }

  export type SaleUpsertWithoutSellerProfitsInput = {
    update: XOR<SaleUpdateWithoutSellerProfitsInput, SaleUncheckedUpdateWithoutSellerProfitsInput>
    create: XOR<SaleCreateWithoutSellerProfitsInput, SaleUncheckedCreateWithoutSellerProfitsInput>
    where?: SaleWhereInput
  }

  export type SaleUpdateToOneWithWhereWithoutSellerProfitsInput = {
    where?: SaleWhereInput
    data: XOR<SaleUpdateWithoutSellerProfitsInput, SaleUncheckedUpdateWithoutSellerProfitsInput>
  }

  export type SaleUpdateWithoutSellerProfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salePoint?: SalePointUpdateOneRequiredWithoutSalesNestedInput
    seller?: UserUpdateOneWithoutSalesNestedInput
    customer?: CustomerUpdateOneWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutSellerProfitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePointId?: StringFieldUpdateOperationsInput | string
    sellerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleCreateManySellerInput = {
    id?: string
    salePointId: string
    customerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
  }

  export type SellerProfitCreateManySellerInput = {
    id?: string
    saleId: string
    amount: number
    openedPercent: number
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salePoint?: SalePointUpdateOneRequiredWithoutSalesNestedInput
    customer?: CustomerUpdateOneWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    sellerProfits?: SellerProfitUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePointId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    sellerProfits?: SellerProfitUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePointId?: StringFieldUpdateOperationsInput | string
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerProfitUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sale?: SaleUpdateOneRequiredWithoutSellerProfitsNestedInput
  }

  export type SellerProfitUncheckedUpdateWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerProfitUncheckedUpdateManyWithoutSellerInput = {
    id?: StringFieldUpdateOperationsInput | string
    saleId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManySalePointInput = {
    id?: string
    sellerId?: string | null
    customerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutSalePointInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneWithoutSalesNestedInput
    customer?: CustomerUpdateOneWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    sellerProfits?: SellerProfitUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutSalePointInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    sellerProfits?: SellerProfitUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutSalePointInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: NullableStringFieldUpdateOperationsInput | string | null
    customerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleItemCreateManySaleInput = {
    id?: string
    carpetId: string
    price: number
    cost: number
    profit: number
  }

  export type SellerProfitCreateManySaleInput = {
    id?: string
    sellerId: string
    amount: number
    openedPercent: number
    createdAt?: Date | string
  }

  export type SaleItemUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    carpet?: CarpetUpdateOneRequiredWithoutSaleItemNestedInput
  }

  export type SaleItemUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    carpetId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
  }

  export type SaleItemUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    carpetId?: StringFieldUpdateOperationsInput | string
    price?: IntFieldUpdateOperationsInput | number
    cost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
  }

  export type SellerProfitUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seller?: UserUpdateOneRequiredWithoutSellerCutsNestedInput
  }

  export type SellerProfitUncheckedUpdateWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SellerProfitUncheckedUpdateManyWithoutSaleInput = {
    id?: StringFieldUpdateOperationsInput | string
    sellerId?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    openedPercent?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SaleCreateManyCustomerInput = {
    id?: string
    salePointId: string
    sellerId?: string | null
    totalPrice: number
    totalCost: number
    profit: number
    paidAmount?: number
    debtAmount?: number
    createdAt?: Date | string
  }

  export type CustomerDebtCreateManyCustomerInput = {
    id?: string
    amount: number
    note?: string | null
    paymentDate?: Date | string | null
    createdAt?: Date | string
  }

  export type SaleUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    salePoint?: SalePointUpdateOneRequiredWithoutSalesNestedInput
    seller?: UserUpdateOneWithoutSalesNestedInput
    items?: SaleItemUpdateManyWithoutSaleNestedInput
    sellerProfits?: SellerProfitUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePointId?: StringFieldUpdateOperationsInput | string
    sellerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    items?: SaleItemUncheckedUpdateManyWithoutSaleNestedInput
    sellerProfits?: SellerProfitUncheckedUpdateManyWithoutSaleNestedInput
  }

  export type SaleUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    salePointId?: StringFieldUpdateOperationsInput | string
    sellerId?: NullableStringFieldUpdateOperationsInput | string | null
    totalPrice?: IntFieldUpdateOperationsInput | number
    totalCost?: IntFieldUpdateOperationsInput | number
    profit?: IntFieldUpdateOperationsInput | number
    paidAmount?: IntFieldUpdateOperationsInput | number
    debtAmount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerDebtUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerDebtUncheckedUpdateWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CustomerDebtUncheckedUpdateManyWithoutCustomerInput = {
    id?: StringFieldUpdateOperationsInput | string
    amount?: IntFieldUpdateOperationsInput | number
    note?: NullableStringFieldUpdateOperationsInput | string | null
    paymentDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
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