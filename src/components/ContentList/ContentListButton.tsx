import { ParentProps } from "solid-js";

export type ContentListButtonProps = ParentProps<{
  url?: string;
  onClick?: () => void;
}>;

export default function ContentListButton(props: ContentListButtonProps) {
  return (
    <a href={props.url} onClick={props.onClick}>
      § {props.children}
    </a>
  );
}
