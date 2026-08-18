import { type ParentProps } from "solid-js";
import ContentListFooterIcon from "./ContentListFooterIcon";

export type ContentListProps = ParentProps<{
  shrink?: boolean;
}>;

export default function ContentList(props: ContentListProps) {
  return (
    <div class="center grow-sub">
      <div class={`content-list font-title ${props.shrink ? "shrink" : ""}`}>
        {props.children}
        <ContentListFooterIcon />
      </div>
    </div>
  );
}
