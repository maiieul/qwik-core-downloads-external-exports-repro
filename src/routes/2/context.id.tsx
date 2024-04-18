import { Signal, createContextId } from "@builder.io/qwik";

export const context2 = createContextId<Signal<string>>("context-2");
