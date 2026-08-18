import { getIcon, useContentListType } from "./contentListType";

export default function ContentListFooterIcon() {
  return (
    <div class="content-list-footer-container">
      <div class={`content-list-footer gray`}>
        {getIcon(useContentListType())}
      </div>
    </div>
  );
}
