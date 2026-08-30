import { createContext, createSignal } from "solid-js";
import { FrontMatter } from "./Post/FrontMatter";
import { RefCollection } from "./Post/SetRefs";

export type State = {
  frontMatter: FrontMatter;
  refs: RefCollection;
};

export type StateContext = {
  frontMatter: () => FrontMatter;
  setFrontMatter: (value: FrontMatter) => void;
  refNames: () => string[];
  setRefCollection: (obj: RefCollection) => void;
  refs: () => RefCollection;
};

export const StateContext = createContext<StateContext>();

export default function createStateSignal(): StateContext {
  const [value, setValue] = createSignal({
    frontMatter: {},
    refs: {},
  } as State);
  return {
    frontMatter: () => value().frontMatter,
    setFrontMatter: (x: FrontMatter) =>
      setValue((obj) => ({ ...obj, frontMatter: x })),
    refs: () => value().refs,
    setRefCollection: (refs: RefCollection) =>
      setValue((obj) => ({ ...obj, refs })),
    refNames: () => Object.keys(value().refs),
  };
}
