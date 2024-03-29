import { GraphQLResolveInfo, GraphQLScalarType, GraphQLScalarTypeConfig } from 'graphql';
import { Members as MembersModel } from '@prisma/client';
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

export type ActiveSubscriptions = {
  __typename?: 'ActiveSubscriptions';
  cardNumber: Scalars['Int'];
  createdAt: Scalars['Date'];
  firstName: Scalars['String'];
  hasActiveMembership: Scalars['Boolean'];
  id: Scalars['Int'];
  isBlocked?: Maybe<Scalars['Boolean']>;
  isStudent: Scalars['Boolean'];
  lastName: Scalars['String'];
  membershipValidTill: Scalars['Date'];
  subscriptions?: Maybe<Array<Maybe<Subscription>>>;
  updatedAt: Scalars['Date'];
  visits?: Maybe<Scalars['Int']>;
};

export type ConfirmEntryInput = {
  subscriptionId: Scalars['Int'];
  type?: InputMaybe<SubscriptionType>;
};

export type CreateMemberDataInput = {
  cardNumber: Scalars['Int'];
  firstName: Scalars['String'];
  isStudent: Scalars['Boolean'];
  lastName: Scalars['String'];
};

export type CreateMemberInput = {
  memberData: CreateMemberDataInput;
  personalData: CreatePersonalDataInput;
  subscriptionData?: InputMaybe<CreateSubscriptionDataInput>;
};

export type CreatePersonalDataInput = {
  address: Scalars['String'];
  city: Scalars['String'];
  country: Scalars['String'];
  email?: InputMaybe<Scalars['String']>;
  gender: GenderType;
  telNumber?: InputMaybe<Scalars['String']>;
};

export type CreateSubscriptionDataInput = {
  entries?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<SubscriptionPeriod>;
  type: SubscriptionType;
};

export enum GenderType {
  Man = 'MAN',
  Woman = 'WOMAN'
}

export type Member = {
  __typename?: 'Member';
  cardNumber?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['Date']>;
  firstName?: Maybe<Scalars['String']>;
  hasActiveMembership?: Maybe<Scalars['Boolean']>;
  id?: Maybe<Scalars['Int']>;
  isBlocked?: Maybe<Scalars['Boolean']>;
  isStudent?: Maybe<Scalars['Boolean']>;
  lastName?: Maybe<Scalars['String']>;
  membershipValidTill?: Maybe<Scalars['Date']>;
  personalData?: Maybe<PersonalData>;
  subscriptions?: Maybe<Array<Maybe<Subscription>>>;
  updatedAt?: Maybe<Scalars['Date']>;
  visits?: Maybe<Scalars['Int']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  blockMember?: Maybe<Scalars['Boolean']>;
  confirmEntry?: Maybe<Scalars['Boolean']>;
  createMember?: Maybe<Member>;
  deleteMember?: Maybe<Scalars['Boolean']>;
  newSubscription?: Maybe<Scalars['Boolean']>;
  prolongMembership?: Maybe<Scalars['Boolean']>;
  updateMember?: Maybe<Member>;
};


export type MutationBlockMemberArgs = {
  cardNumber: Scalars['Int'];
  isBlocked: Scalars['Boolean'];
};


export type MutationConfirmEntryArgs = {
  input?: InputMaybe<ConfirmEntryInput>;
};


export type MutationCreateMemberArgs = {
  input: CreateMemberInput;
};


export type MutationDeleteMemberArgs = {
  memberId: Scalars['Int'];
};


export type MutationNewSubscriptionArgs = {
  input?: InputMaybe<NewSubscriptionInput>;
};


export type MutationProlongMembershipArgs = {
  cardNumber: Scalars['Int'];
};


export type MutationUpdateMemberArgs = {
  cardNumber: Scalars['Int'];
  input: UpdateMemberInput;
};

export type NewSubscriptionInput = {
  cardNumber: Scalars['Int'];
  entries?: InputMaybe<Scalars['Int']>;
  period?: InputMaybe<SubscriptionPeriod>;
  type: SubscriptionType;
};

export type PersonalData = {
  __typename?: 'PersonalData';
  address?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt?: Maybe<Scalars['Date']>;
  email?: Maybe<Scalars['String']>;
  gender?: Maybe<GenderType>;
  id?: Maybe<Scalars['Int']>;
  ownerId?: Maybe<Scalars['Int']>;
  telNumber?: Maybe<Scalars['String']>;
  updatedAt?: Maybe<Scalars['Date']>;
};

export type Query = {
  __typename?: 'Query';
  activeSubscriptionsByCardNumber: ActiveSubscriptions;
  getActiveSubscriptions?: Maybe<Array<Maybe<Subscription>>>;
  member: Member;
  members: Array<Maybe<Member>>;
  subscriptions: Array<Maybe<Subscription>>;
};


export type QueryActiveSubscriptionsByCardNumberArgs = {
  cardNumber: Scalars['Int'];
};


export type QueryGetActiveSubscriptionsArgs = {
  cardNumber: Scalars['Int'];
};


export type QueryMemberArgs = {
  cardNumber: Scalars['Int'];
};

export type Subscription = {
  __typename?: 'Subscription';
  createdAt: Scalars['Date'];
  entries?: Maybe<Scalars['Int']>;
  id: Scalars['Int'];
  isActive: Scalars['Boolean'];
  owner?: Maybe<Member>;
  ownerId?: Maybe<Scalars['Int']>;
  period?: Maybe<SubscriptionPeriod>;
  type: SubscriptionType;
  updatedAt: Scalars['Date'];
  validTill?: Maybe<Scalars['Date']>;
};

export enum SubscriptionPeriod {
  Six = 'SIX',
  Three = 'THREE',
  Twelve = 'TWELVE'
}

export enum SubscriptionType {
  Entry = 'ENTRY',
  Time = 'TIME'
}

export type UpdateMemberInput = {
  memberData: CreateMemberDataInput;
  personalData: CreatePersonalDataInput;
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
  ActiveSubscriptions: ResolverTypeWrapper<Omit<ActiveSubscriptions, 'subscriptions'> & { subscriptions?: Maybe<Array<Maybe<ResolversTypes['Subscription']>>> }>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  ConfirmEntryInput: ConfirmEntryInput;
  CreateMemberDataInput: CreateMemberDataInput;
  CreateMemberInput: CreateMemberInput;
  CreatePersonalDataInput: CreatePersonalDataInput;
  CreateSubscriptionDataInput: CreateSubscriptionDataInput;
  Date: ResolverTypeWrapper<Scalars['Date']>;
  GenderType: GenderType;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  Member: ResolverTypeWrapper<MembersModel>;
  Mutation: ResolverTypeWrapper<{}>;
  NewSubscriptionInput: NewSubscriptionInput;
  PersonalData: ResolverTypeWrapper<PersonalData>;
  Query: ResolverTypeWrapper<{}>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Subscription: ResolverTypeWrapper<{}>;
  SubscriptionPeriod: SubscriptionPeriod;
  SubscriptionType: SubscriptionType;
  UpdateMemberInput: UpdateMemberInput;
}>;

/** Mapping between all available schema types and the resolvers parents */
export type ResolversParentTypes = ResolversObject<{
  ActiveSubscriptions: Omit<ActiveSubscriptions, 'subscriptions'> & { subscriptions?: Maybe<Array<Maybe<ResolversParentTypes['Subscription']>>> };
  Boolean: Scalars['Boolean'];
  ConfirmEntryInput: ConfirmEntryInput;
  CreateMemberDataInput: CreateMemberDataInput;
  CreateMemberInput: CreateMemberInput;
  CreatePersonalDataInput: CreatePersonalDataInput;
  CreateSubscriptionDataInput: CreateSubscriptionDataInput;
  Date: Scalars['Date'];
  Int: Scalars['Int'];
  Member: MembersModel;
  Mutation: {};
  NewSubscriptionInput: NewSubscriptionInput;
  PersonalData: PersonalData;
  Query: {};
  String: Scalars['String'];
  Subscription: {};
  UpdateMemberInput: UpdateMemberInput;
}>;

export type ActiveSubscriptionsResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['ActiveSubscriptions'] = ResolversParentTypes['ActiveSubscriptions']> = ResolversObject<{
  cardNumber?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  createdAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  firstName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  hasActiveMembership?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  id?: Resolver<ResolversTypes['Int'], ParentType, ContextType>;
  isBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isStudent?: Resolver<ResolversTypes['Boolean'], ParentType, ContextType>;
  lastName?: Resolver<ResolversTypes['String'], ParentType, ContextType>;
  membershipValidTill?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  subscriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subscription']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<ResolversTypes['Date'], ParentType, ContextType>;
  visits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export interface DateScalarConfig extends GraphQLScalarTypeConfig<ResolversTypes['Date'], any> {
  name: 'Date';
}

export type MemberResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Member'] = ResolversParentTypes['Member']> = ResolversObject<{
  cardNumber?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  firstName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  hasActiveMembership?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  isBlocked?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  isStudent?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType>;
  lastName?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  membershipValidTill?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  personalData?: Resolver<Maybe<ResolversTypes['PersonalData']>, ParentType, ContextType>;
  subscriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subscription']>>>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  visits?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type MutationResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Mutation'] = ResolversParentTypes['Mutation']> = ResolversObject<{
  blockMember?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationBlockMemberArgs, 'cardNumber' | 'isBlocked'>>;
  confirmEntry?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationConfirmEntryArgs>>;
  createMember?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MutationCreateMemberArgs, 'input'>>;
  deleteMember?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationDeleteMemberArgs, 'memberId'>>;
  newSubscription?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, Partial<MutationNewSubscriptionArgs>>;
  prolongMembership?: Resolver<Maybe<ResolversTypes['Boolean']>, ParentType, ContextType, RequireFields<MutationProlongMembershipArgs, 'cardNumber'>>;
  updateMember?: Resolver<Maybe<ResolversTypes['Member']>, ParentType, ContextType, RequireFields<MutationUpdateMemberArgs, 'cardNumber' | 'input'>>;
}>;

export type PersonalDataResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['PersonalData'] = ResolversParentTypes['PersonalData']> = ResolversObject<{
  address?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  city?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  country?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  createdAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  email?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  gender?: Resolver<Maybe<ResolversTypes['GenderType']>, ParentType, ContextType>;
  id?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  ownerId?: Resolver<Maybe<ResolversTypes['Int']>, ParentType, ContextType>;
  telNumber?: Resolver<Maybe<ResolversTypes['String']>, ParentType, ContextType>;
  updatedAt?: Resolver<Maybe<ResolversTypes['Date']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
}>;

export type QueryResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Query'] = ResolversParentTypes['Query']> = ResolversObject<{
  activeSubscriptionsByCardNumber?: Resolver<ResolversTypes['ActiveSubscriptions'], ParentType, ContextType, RequireFields<QueryActiveSubscriptionsByCardNumberArgs, 'cardNumber'>>;
  getActiveSubscriptions?: Resolver<Maybe<Array<Maybe<ResolversTypes['Subscription']>>>, ParentType, ContextType, RequireFields<QueryGetActiveSubscriptionsArgs, 'cardNumber'>>;
  member?: Resolver<ResolversTypes['Member'], ParentType, ContextType, RequireFields<QueryMemberArgs, 'cardNumber'>>;
  members?: Resolver<Array<Maybe<ResolversTypes['Member']>>, ParentType, ContextType>;
  subscriptions?: Resolver<Array<Maybe<ResolversTypes['Subscription']>>, ParentType, ContextType>;
}>;

export type SubscriptionResolvers<ContextType = IPrismaContext, ParentType extends ResolversParentTypes['Subscription'] = ResolversParentTypes['Subscription']> = ResolversObject<{
  createdAt?: SubscriptionResolver<ResolversTypes['Date'], "createdAt", ParentType, ContextType>;
  entries?: SubscriptionResolver<Maybe<ResolversTypes['Int']>, "entries", ParentType, ContextType>;
  id?: SubscriptionResolver<ResolversTypes['Int'], "id", ParentType, ContextType>;
  isActive?: SubscriptionResolver<ResolversTypes['Boolean'], "isActive", ParentType, ContextType>;
  owner?: SubscriptionResolver<Maybe<ResolversTypes['Member']>, "owner", ParentType, ContextType>;
  ownerId?: SubscriptionResolver<Maybe<ResolversTypes['Int']>, "ownerId", ParentType, ContextType>;
  period?: SubscriptionResolver<Maybe<ResolversTypes['SubscriptionPeriod']>, "period", ParentType, ContextType>;
  type?: SubscriptionResolver<ResolversTypes['SubscriptionType'], "type", ParentType, ContextType>;
  updatedAt?: SubscriptionResolver<ResolversTypes['Date'], "updatedAt", ParentType, ContextType>;
  validTill?: SubscriptionResolver<Maybe<ResolversTypes['Date']>, "validTill", ParentType, ContextType>;
}>;

export type Resolvers<ContextType = IPrismaContext> = ResolversObject<{
  ActiveSubscriptions?: ActiveSubscriptionsResolvers<ContextType>;
  Date?: GraphQLScalarType;
  Member?: MemberResolvers<ContextType>;
  Mutation?: MutationResolvers<ContextType>;
  PersonalData?: PersonalDataResolvers<ContextType>;
  Query?: QueryResolvers<ContextType>;
  Subscription?: SubscriptionResolvers<ContextType>;
}>;

