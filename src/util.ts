import * as Vue from "vue";

export type TargetOrEventName = string | ((v: Vue) => Vue) | undefined;

export function processEventArgs(arg1: TargetOrEventName, arg2: TargetOrEventName) {
    let targetFn: null | ((v: Vue) => Vue) = null;
    let evtName: null | string = null;
    if (typeof arg1 === "string") {
        evtName = arg1;
        if (arg2 && typeof arg2 !== "string") {
            targetFn = arg2;
        }
    } else {
        if (arg1) {
            targetFn = arg1;
        }
        if (typeof arg2 === "string") {
            evtName = arg2;
        }
    }
    return { targetFn, evtName };
}