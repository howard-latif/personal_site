import { JSX } from "@solidjs/web/jsx-runtime";
import { useContext } from "solid-js";
import { StateContext } from "./index";

export type FrontMatter = Record<string, string>;

type FrontMatterProps = {
  text: string;
};

export default function SetFrontMatter(props: FrontMatterProps): JSX.Element {
  const { setValue } = useContext(StateContext);
  const value = Object.fromEntries(
    props.text
      .split("\n")
      .filter((line: string) => line !== "---")
      .map((line: string) =>
        line
          .trim()
          .split(":")
          .map((s: string) => s.trim()),
      ),
  );

  queueMicrotask(() => setValue(value));

  return <></>;
}
