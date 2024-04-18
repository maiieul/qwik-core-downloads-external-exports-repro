import {
  Slot,
  component$,
  useContextProvider,
  useSignal,
} from "@builder.io/qwik";
import { context1 } from "./context.id";

export const Provider1 = component$(() => {
  const flower = useSignal("hello provider 1");
  useContextProvider(context1, flower);
  return (
    <>
      <Slot />
    </>
  );
});
