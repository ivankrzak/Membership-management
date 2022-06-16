import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Member as MemberModel } from '@prisma/client';
import { IPrismaContext } from '../prisma/IPrismaContext';
export type Maybe<T> = T | null;
export type InputMaybe<T> = undefined | T;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = Omit<T, K> & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: any;
};

export type CreateMemberInput = {
  address: Scalars['String'];
  country: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  firstName: Scalars['String'];
  gender: GenderType;
  isStudent?: InputMaybe<Scalars['Boolean']>;
  lastName: Scalars['String'];
  telNumber?: InputMaybe<Scalars['String']>;
};

export enum GenderType {
  Man = 'MAN',
  Woman = 'WOMAN'
}

export type Member = {
  __typename?: 'Member';
  address?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  firstName?: Maybe<Scalars['String']>;
  gender?: Maybe<GenderType>;
  id?: Maybe<Scalars['Int']>;
  isStudent?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  memberships?: Maybe<Array<Maybe<Membership>>>;
  telNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Membership = {
  __typename?: 'Membership';
  barcode: Scalars['String'];
  createdAt?: Maybe<Scalars['Date']>;
  entries?: Maybe<Scalars['String']>;
  id: Scalars['Int'];
  isBlocked?: Maybe<Scalars['Boolean']>;
  owner?: Maybe<Member>;
  ownerId?: Maybe<Scalars['Int']>;
  period?: Maybe<MemebershipTimePeriod>;
  type: MemebershipType;
  updatedAt?: Maybe<Scalars['Date']>;
  validTill?: Maybe<Scalars['Date']>;
};

export enum MemebershipTimePeriod {
  Six = 'SIX',
  Three = 'THREE',
  Twelwe = 'TWELWE'
}

export enum MemebershipType {
  Entry = 'ENTRY',
  Time = 'TIME'
}

export type Mutation = {
  __typename?: 'Mutation';
  createMember?: Maybe<Member>;
};


export type MutationCreateMemberArgs = {
  input: CreateMemberInput;
};

export type Query = {
  __typename?: 'Query';
  members: Array<Maybe<Member>>;
};

export type WithIndex<TObject> = TObject & Record<string, any>;
export type ResolversObject<TObject> = WithIndex<TObject>;

export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type ResolversTypes = ResolversObject<{
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  CreateMemberInput: CreateMemberInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  GenderType: GenderType;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Member: ResolverTypeWrapper<MemberModel>;
  Membership: ResolverTypeWrapper<Omit<Membership, 'owner'> & { owner?: Maybe<ResolversTypes['Member']> }>;
  MemebershipTimePeriod: MemebershipTimePeriod;
  MemebershipType: MemebershipType;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  Boolean: Scalars['Boolean'];
  CreateMemberInput: CreateMemberInput;
  Date: Scalars['Date'];
  Int: Scalars['Int'];
  Member: MemberModel;
  Membership: Omit<Membership, 'owner'> & { owner?: Maybe<ResolversParentTypes['Member']> };
  Mutation: {};
  Query: {};
  String: Scalars['String'];
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MemberResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['GenderType']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isStudent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  memberships?: Resolver<Maybe<Array<Maybe<ResolversTypes['Membership']>>>, ParentType, ContextType>;
  telNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MembershipResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Membership'] = ResolversParentTypes['Membership']> = ResolversObject<{
  barcode?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  entries?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  owner?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  period?: Resolver<Maybe<ResolversTypes['MemebershipTimePeriod']>, ParentType, ContextType>;
  type?: Resolver<ResolversTypes['MemebershipType'], ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  validTill?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  createMember?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MutationCreateMemberArgs, 'input'>>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  members?: Resolver<Array<Maybe<ResolversTypes['Member']>>, ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  Date?: GraphQLScalarType;
  Member?: MemberResolvers<ContextType>;
  Membership?: MembershipResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
}>;

