import { getColor, getIcon, useContentListType } from "./contentListType";

export default function ContentListFooterIcon() {
  const cl_type = useContentListType();
  const col = "gray";//getColor(cl_type);
  const icon = getIcon(cl_type);

  return (
    <div class="content-list-footer-container">
      <div class={`content-list-footer ${col}`}>{icon}</div>
    </div>
  );
}
