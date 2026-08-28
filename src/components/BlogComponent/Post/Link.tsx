import { JSX } from "@solidjs/web/jsx-runtime";
import { ParentProps } from "solid-js";

type LinkProps = ParentProps<{
  target: string;
}>;

export default function Link(props: LinkProps): JSX.Element {
  return (
    <a class="blog-link" href={props.target} target="_blank">
      {props.children}
    </a>
  );
}
