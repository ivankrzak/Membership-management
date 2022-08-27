import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Date: string;
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
  prolongMembership?: Maybe<Scalars['Boolean']>;
  updateMember?: Maybe<Member>;
};


export type MutationBlockMemberArgs = {
  isBlocked: Scalars['Boolean'];
  memberId: Scalars['Int'];
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


export type MutationProlongMembershipArgs = {
  memberId: Scalars['Int'];
};


export type MutationUpdateMemberArgs = {
  input: UpdateMemberInput;
  memberId: Scalars['Int'];
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

export type MembersQueryVariables = Exact<{ [key: string]: never; }>;


export type MembersQuery = { __typename?: 'Query', members: Array<{ __typename?: 'Member', id?: number | null, cardNumber?: number | null, firstName?: string | null, lastName?: string | null, isStudent?: boolean | null, visits?: number | null, hasActiveMembership?: boolean | null, membershipValidTill?: string | null, createdAt?: string | null, updatedAt?: string | null } | null> };

export type CreateMemberMutationVariables = Exact<{
  input: CreateMemberInput;
}>;


export type CreateMemberMutation = { __typename?: 'Mutation', createMember?: { __typename?: 'Member', id?: number | null, cardNumber?: number | null, firstName?: string | null, lastName?: string | null, isStudent?: boolean | null, hasActiveMembership?: boolean | null, membershipValidTill?: string | null } | null };

export type CreateMemberReturnValueFragment = { __typename?: 'Member', id?: number | null, cardNumber?: number | null, firstName?: string | null, lastName?: string | null, isStudent?: boolean | null };

export const CreateMemberReturnValueFragmentDoc = gql`
    fragment CreateMemberReturnValue on Member {
  id
  cardNumber
  firstName
  lastName
  isStudent
}
    `;
export const MembersDocument = gql`
    query Members {
  members {
    id
    cardNumber
    firstName
    lastName
    isStudent
    visits
    hasActiveMembership
    membershipValidTill
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useMembersQuery__
 *
 * To run a query within a React component, call `useMembersQuery` and pass it any options that fit your needs.
 * When your component renders, `useMembersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMembersQuery({
 *   variables: {
 *   },
 * });
 */
export function useMembersQuery(baseOptions?: Apollo.QueryHookOptions<MembersQuery, MembersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<MembersQuery, MembersQueryVariables>(MembersDocument, options);
      }
export function useMembersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<MembersQuery, MembersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<MembersQuery, MembersQueryVariables>(MembersDocument, options);
        }
export type MembersQueryHookResult = ReturnType<typeof useMembersQuery>;
export type MembersLazyQueryHookResult = ReturnType<typeof useMembersLazyQuery>;
export type MembersQueryResult = Apollo.QueryResult<MembersQuery, MembersQueryVariables>;
export const CreateMemberDocument = gql`
    mutation CreateMember($input: CreateMemberInput!) {
  createMember(input: $input) {
    id
    cardNumber
    firstName
    lastName
    isStudent
    hasActiveMembership
    membershipValidTill
  }
}
    `;
export type CreateMemberMutationFn = Apollo.MutationFunction<CreateMemberMutation, CreateMemberMutationVariables>;

/**
 * __useCreateMemberMutation__
 *
 * To run a mutation, you first call `useCreateMemberMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateMemberMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createMemberMutation, { data, loading, error }] = useCreateMemberMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateMemberMutation(baseOptions?: Apollo.MutationHookOptions<CreateMemberMutation, CreateMemberMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateMemberMutation, CreateMemberMutationVariables>(CreateMemberDocument, options);
      }
export type CreateMemberMutationHookResult = ReturnType<typeof useCreateMemberMutation>;
export type CreateMemberMutationResult = Apollo.MutationResult<CreateMemberMutation>;
export type CreateMemberMutationOptions = Apollo.BaseMutationOptions<CreateMemberMutation, CreateMemberMutationVariables>;