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
  refTarget: (name: string) => string;
  refTitle: (name: string) => string | undefined;
  setRef: (name: string, target: string, title?: string) => void;
  setRefCollection: (obj: RefCollection) => void;
};

export const StateContext = createContext<StateContext>();

export default function createStateSignal(): StateContext {
  const [value, setValue] = createSignal({
    frontMatter: {},
    refs: {},
  } as State);
  return {
    frontMatter: () => value().frontMatter,
    setFrontMatter: (x) => setValue((obj) => ({ ...obj, frontMatter: x })),
    setRefCollection: (refs) => setValue((obj) => ({ ...obj, refs })),
    setRef: (name, target, title) =>
      setValue((obj) => ({
        ...obj,
        refs: { ...obj.refs, [name]: { target, title } },
      })),
    refTarget: (n) => value().refs[n].target,
    refTitle: (n) => value().refs[n].title,
    refNames: () => Object.keys(value().refs),
  };
}
