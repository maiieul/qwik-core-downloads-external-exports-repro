import { Signal, createContextId } from "@builder.io/qwik";

export const context1 = createContextId<Signal<string>>("context-1");
