import {
  Slot,
  component$,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { context2 } from "./context.id";

export const Provider2 = component$(() => {
  const sig = useSignal("hello provider 2");
  useContextProvider(context2, sig);
  return (
    <>
      <Slot />
    </>
  );
});
