import { JSX } from "@solidjs/web/jsx-runtime";
import { For, useContext } from "solid-js";
import { StateContext } from "./state";
import { targetToId } from "./Post/SetRefs";

type FootNoteProps = {
  refname: string;
  title?: string;
  target: string;
};

function FootNote(props: FootNoteProps): JSX.Element {
  return (
    <div
      id={`${targetToId(props.refname)}`}
      style="text-align: left; margin: 1em 0;"
    >
      <span style="margin-right: 0.5em; color: var(--bright); font-weight: 800;">{`[${props.refname}]`}</span>
      {props.title !== undefined ? (
        <span style="font-style: italic;">{`(${props.title})`}</span>
      ) : (
        <></>
      )}
      <span>{props.target}</span>
    </div>
  );
}

export default function Refs(): JSX.Element {
  const { refNames, refs } = useContext(StateContext);

  return (
    <div style="text-align: left; width: min(40em, 100%);">
      <span
        class="center"
        style="font-style: italic; font-weight: 500; margin-top: 3em;"
      >
        references
      </span>
      <For each={refNames()}>
        {(x) => (
          <FootNote
            refname={x}
            title={refs()[x]?.title}
            target={refs()[x]?.target}
          />
        )}
      </For>
    </div>
  );
}
