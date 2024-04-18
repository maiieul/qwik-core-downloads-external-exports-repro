import { component$, useContext, useSignal } from "@builder.io/qwik";
import { Provider1 } from "./provider";
import { context1 } from "./context.id";

export const a = "a";
export default component$(() => {
  const aSig = useSignal(a);

  return (
    <Provider1>
      <h1>{aSig.value} signal from route 1 👋</h1>
      <Child />
    </Provider1>
  );
});

const Child = component$(() => {
  const providerSig = useContext(context1);

  return <h2>{providerSig.value} signal from provider 1 👋</h2>;
});
