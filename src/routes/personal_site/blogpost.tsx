import BlogComponent, { PostId } from "../../components/BlogComponent";
import { useSearchParams } from "@solidjs/router";

export default function BlogPost() {
  const [searchParams, _] = useSearchParams();
  const postIdNum = Number(searchParams.postid);
  return <BlogComponent post_id={postIdNum as PostId} />;
}
