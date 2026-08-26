import BlogComponent from "../../components/BlogComponent";
import { PostId } from "../../components/BlogComponent/post_data";
import { useSearchParams } from "@solidjs/router";

export default function BlogPost() {
  const [searchParams, _] = useSearchParams();
  const postIdNum = Number(searchParams.postid);
  return <BlogComponent post_id={postIdNum as PostId} />;
}
