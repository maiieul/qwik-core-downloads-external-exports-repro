import { component$, useContext, useSignal } from "@builder.io/qwik";
import { Provider2 } from "./provider";
import { context2 } from "./context.id";

export const b = "b";
export default component$(() => {
  const bSig = useSignal(b);

  return (
    <Provider2>
      <h1>{bSig.value} signal from route 2 👋</h1>
      <Child />
    </Provider2>
  );
});

const Child = component$(() => {
  const providerSig = useContext(context2);

  return <h2>{providerSig.value} signal from provider 2 👋</h2>;
});
