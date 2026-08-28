import { Dynamic, JSX } from "@solidjs/web";
import { ParentProps } from "solid-js";

function parseAttribute(str: string): Record<string, string> {
  const attributes: Record<string, string> = {};
  const regexp = /(?:^|\s)([A-Za-z_:][\w:.-]*)\s*=\s*"([^"]*)"/g;
  let match;

  while ((match = regexp.exec(str)) !== null) {
    attributes[match[1]] = match[2];
  }
  return attributes;
}

type HtmlElementProps = ParentProps<{
  tag: string;
  a: string;
}>;

export default function HtmlElement(props: HtmlElementProps): JSX.Element {
  return (
    <Dynamic component={props.tag} {...parseAttribute(props.a)}>
      {props.children}
    </Dynamic>
  );
}
