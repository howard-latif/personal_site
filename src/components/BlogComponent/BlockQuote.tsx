import { JSX } from "@solidjs/web/jsx-runtime";
import { ParentProps } from "solid-js";

export default function BlockQuote(props: ParentProps): JSX.Element {
  return <div class="blog-block-quote">{props.children}</div>;
}
