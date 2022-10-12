export declare function useEventHook<TParam = any>(): {
    on: (fn: (param: TParam) => void) => {
        off: () => void;
    };
    off: (fn: (param: TParam) => void) => void;
    trigger: (param: TParam) => void;
    getCount: () => number;
};
