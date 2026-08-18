import { ParentProps } from "solid-js";

export type ContentListButtonProps = ParentProps<{
  href?: string;
}>;

export default function ContentListButton(props: ContentListButtonProps) {
  return <a href={props.href}>§ {props.children}</a>;
}
