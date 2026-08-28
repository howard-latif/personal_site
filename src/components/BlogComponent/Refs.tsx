import { JSX } from "@solidjs/web/jsx-runtime";
import { useContext } from "solid-js";
import { StateContext } from "./state";

export default function Refs(): JSX.Element {
  const { refNames } = useContext(StateContext);

  return <>{JSON.stringify(refNames(), null, 2)}</>;
}
