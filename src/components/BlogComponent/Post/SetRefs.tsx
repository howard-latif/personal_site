import { JSX } from "@solidjs/web/jsx-runtime";
import { StateContext } from "../state";
import { useContext } from "solid-js";

export type RefCollection = Record<string, { target: string; title?: string }>;

type SetRefsProps = {
  refs: RefCollection;
};

export default function SetRefs(props: SetRefsProps): JSX.Element {
  const { setRefCollection } = useContext(StateContext);
  queueMicrotask(() => setRefCollection(props.refs));
  return <></>;
}
