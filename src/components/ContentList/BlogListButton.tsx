import { useLocation } from "@solidjs/router";
import ContentListButton from "./ContentListButton";
import { paths } from "../../router";
import { POST_DATA, type PostId } from "../BlogComponent/post_data";

export type BlogListButtonProps = {
  post_id: PostId;
};

export default function BlogListButton(props: BlogListButtonProps) {
  const location = useLocation();
  return (
    <ContentListButton
      url={
        location.pathname === paths.personal_site.blog()
          ? `${paths.personal_site.blogpost()}?postid=${props.post_id}`
          : ""
      }
    >
      {POST_DATA[props.post_id].title}
    </ContentListButton>
  );
}
