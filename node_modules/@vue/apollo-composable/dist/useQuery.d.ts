import { Ref } from 'vue-demi';
import { DocumentNode } from 'graphql';
import { OperationVariables, WatchQueryOptions, ObservableQuery, ApolloQueryResult, SubscribeToMoreOptions, FetchMoreQueryOptions, FetchMoreOptions, TypedDocumentNode, ApolloError } from '@apollo/client/core';
import { ReactiveFunction } from './util/ReactiveFunction';
export interface UseQueryOptions<TResult = any, TVariables = OperationVariables> extends Omit<WatchQueryOptions<TVariables>, 'query' | 'variables'> {
    clientId?: string;
    enabled?: boolean;
    throttle?: number;
    debounce?: number;
    prefetch?: boolean;
}
export declare type DocumentParameter<TResult, TVariables = undefined> = DocumentNode | Ref<DocumentNode> | ReactiveFunction<DocumentNode> | TypedDocumentNode<TResult, TVariables> | Ref<TypedDocumentNode<TResult, TVariables>> | ReactiveFunction<TypedDocumentNode<TResult, TVariables>>;
export declare type VariablesParameter<TVariables> = TVariables | Ref<TVariables> | ReactiveFunction<TVariables>;
export declare type OptionsParameter<TResult, TVariables> = UseQueryOptions<TResult, TVariables> | Ref<UseQueryOptions<TResult, TVariables>> | ReactiveFunction<UseQueryOptions<TResult, TVariables>>;
export interface UseQueryReturn<TResult, TVariables> {
    result: Ref<TResult | undefined>;
    loading: Ref<boolean>;
    networkStatus: Ref<number | undefined>;
    error: Ref<ApolloError | null>;
    start: () => void;
    stop: () => void;
    restart: () => void;
    forceDisabled: Ref<boolean>;
    document: Ref<DocumentNode>;
    variables: Ref<TVariables | undefined>;
    options: UseQueryOptions<TResult, TVariables> | Ref<UseQueryOptions<TResult, TVariables>>;
    query: Ref<ObservableQuery<TResult, TVariables> | null | undefined>;
    refetch: (variables?: TVariables) => Promise<ApolloQueryResult<TResult>> | undefined;
    fetchMore: (options: FetchMoreQueryOptions<TVariables, TResult> & FetchMoreOptions<TResult, TVariables>) => Promise<ApolloQueryResult<TResult>> | undefined;
    subscribeToMore: <TSubscriptionVariables = OperationVariables, TSubscriptionData = TResult>(options: SubscribeToMoreOptions<TResult, TSubscriptionVariables, TSubscriptionData> | Ref<SubscribeToMoreOptions<TResult, TSubscriptionVariables, TSubscriptionData>> | ReactiveFunction<SubscribeToMoreOptions<TResult, TSubscriptionVariables, TSubscriptionData>>) => void;
    onResult: (fn: (param: ApolloQueryResult<TResult>) => void) => {
        off: () => void;
    };
    onError: (fn: (param: ApolloError) => void) => {
        off: () => void;
    };
}
/**
 * Use a query that does not require variables or options.
 * */
export declare function useQuery<TResult = any>(document: DocumentParameter<TResult, undefined>): UseQueryReturn<TResult, undefined>;
/**
 * Use a query that has optional variables but not options
 */
export declare function useQuery<TResult = any, TVariables extends OperationVariables = OperationVariables>(document: DocumentParameter<TResult, TVariables>): UseQueryReturn<TResult, TVariables>;
/**
 * Use a query that has required variables but not options
 */
export declare function useQuery<TResult = any, TVariables extends OperationVariables = OperationVariables>(document: DocumentParameter<TResult, TVariables>, variables: VariablesParameter<TVariables>): UseQueryReturn<TResult, TVariables>;
/**
 * Use a query that requires options but not variables.
 */
export declare function useQuery<TResult = any>(document: DocumentParameter<TResult, undefined>, variables: undefined | null, options: OptionsParameter<TResult, null>): UseQueryReturn<TResult, null>;
/**
 * Use a query that requires variables and options.
 */
export declare function useQuery<TResult = any, TVariables extends OperationVariables = OperationVariables>(document: DocumentParameter<TResult, TVariables>, variables: VariablesParameter<TVariables>, options: OptionsParameter<TResult, TVariables>): UseQueryReturn<TResult, TVariables>;
export declare function useQueryImpl<TResult, TVariables extends OperationVariables>(document: DocumentParameter<TResult, TVariables>, variables?: VariablesParameter<TVariables>, options?: OptionsParameter<TResult, TVariables>, lazy?: boolean): UseQueryReturn<TResult, TVariables>;
