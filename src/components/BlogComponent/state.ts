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
  refNames: () => any;
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
    setFrontMatter: (x) => setValue({ ...value(), frontMatter: x }),
    setRefCollection: (obj) => setValue({ ...value(), refs: obj }),
    setRef: (name, target, title) =>
      setValue({
        ...value(),
        refs: { ...value().refs, [name]: { target, title } },
      }),
    refTarget: (n) => value().refs[n].target,
    refTitle: (n) => value().refs[n].title,
    refNames: () => value(),
  };
}
