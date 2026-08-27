import BlogComponent from "../../components/BlogComponent";
import { PostId } from "../../components/BlogComponent/post_data";
import { useSearchParams } from "@solidjs/router";

export default function BlogPost() {
  const [searchParams, _] = useSearchParams();
  return <BlogComponent post_id={Number(searchParams.postid) as PostId} />;
}
