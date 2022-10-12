import { ApolloClient } from '@apollo/client/core';
export declare const DefaultApolloClient: unique symbol;
export declare const ApolloClients: unique symbol;
declare type ClientId = string;
declare type ClientDict<T> = Record<ClientId, ApolloClient<T>>;
declare type ResolveClient<TCacheShape, TReturn = ApolloClient<TCacheShape>> = (clientId?: ClientId) => TReturn;
export interface UseApolloClientReturn<TCacheShape> {
    resolveClient: ResolveClient<TCacheShape>;
    readonly client: ApolloClient<TCacheShape>;
}
export declare function useApolloClient<TCacheShape = any>(clientId?: ClientId): UseApolloClientReturn<TCacheShape>;
export declare function provideApolloClient<TCacheShape = any>(client: ApolloClient<TCacheShape>): <TFnResult = any>(fn: () => TFnResult) => TFnResult;
export declare function provideApolloClients<TCacheShape = any>(clients: ClientDict<TCacheShape>): <TFnResult = any>(fn: () => TFnResult) => TFnResult;
export {};
