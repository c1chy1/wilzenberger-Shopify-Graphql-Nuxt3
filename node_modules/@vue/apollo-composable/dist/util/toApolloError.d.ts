import { ApolloError } from '@apollo/client/core';
import { GraphQLErrors } from '@apollo/client/errors';
export declare function toApolloError(error: unknown): ApolloError;
export declare function resultErrorsToApolloError(errors: GraphQLErrors): ApolloError;
