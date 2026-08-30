import { JSX } from "@solidjs/web/jsx-runtime";
import { targetToId } from "./SetRefs";

type FootnoteRefProps = {
  target: string;
  text: string;
};

export default function FootnoteRef(props: FootnoteRefProps): JSX.Element {
  return (
    <a
      href={targetToId(props.target, true)}
      style="margin: 0 0.25em; color: var(--bright); font-weight: 800;"
    >
      {`[^${props.text}]`}
    </a>
  );
}
