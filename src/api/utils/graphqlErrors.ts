import { ApolloError, createError } from 'apollo-errors'

interface ApolloErrorArgs {
  time_thrown?: string
  data?: Record<any, any>
  internalData?: Record<any, any>
  message?: string
}

interface ConstructableApolloError {
  new (params?: ApolloErrorArgs): ApolloError
}

export enum ErrorName {
  AlreadyExists = 'AlreadyExists',
  InternalError = 'InternalError',
  ValidationError = 'ValidationError',
  NotFoundError = 'NotFoundError',
  AuthError = 'AuthError',
  ForbiddenError = 'ForbiddenError',
}

export enum ErrorMessage {
  AlreadyExists = 'Already exists',
  SomethingWentWrong = 'Something went wrong',
  Validation = 'Validation error',
  NotFound = 'Not found error',
  Unauthorized = 'Unauthorized',
  PermissionDenied = 'Permission denied',
}

export const AlreadyExists: ConstructableApolloError = createError(
  ErrorName.AlreadyExists,
  {
    message: ErrorMessage.AlreadyExists,
  }
)

export const InternalError: ConstructableApolloError = createError(
  ErrorName.InternalError,
  {
    message: ErrorMessage.SomethingWentWrong,
  }
)

export const ValidationError: ConstructableApolloError = createError(
  ErrorName.ValidationError,
  {
    message: ErrorMessage.Validation,
  }
)

export const NotFoundError: ConstructableApolloError = createError(
  ErrorName.NotFoundError,
  {
    message: ErrorMessage.NotFound,
  }
)

export const AuthError: ConstructableApolloError = createError(
  ErrorName.AuthError,
  {
    message: ErrorMessage.Unauthorized,
  }
)

export const ForbiddenError: ConstructableApolloError = createError(
  ErrorName.ForbiddenError,
  {
    message: ErrorMessage.PermissionDenied,
  }
)
