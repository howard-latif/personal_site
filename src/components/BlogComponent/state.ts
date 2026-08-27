import { createContext, createSignal } from "solid-js";
import { FrontMatter } from "./PostComponents/FrontMatter";

export type State = {
  frontMatter: FrontMatter;
};

export type StateContext = {
  frontMatter: () => FrontMatter;
  setFrontMatter: (value: FrontMatter) => void;
};

export const StateContext = createContext<StateContext>();

export default function createStateSignal(): StateContext {
  const [value, setValue] = createSignal({
    frontMatter: {},
  } as State);
  return {
    frontMatter: () => value().frontMatter,
    setFrontMatter: (x) => setValue({ ...x, frontMatter: x }),
  };
}
