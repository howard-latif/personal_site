import { JSX } from "@solidjs/web/jsx-runtime";
import { ParentProps } from "solid-js";

type ParagraphProps = ParentProps<{}>;

export default function Paragraph(props: ParagraphProps): JSX.Element {
  return <p class="blog-text">{props.children}</p>;
}
