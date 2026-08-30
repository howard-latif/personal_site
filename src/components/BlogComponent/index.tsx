import { Show } from "solid-js";
import { JSX } from "@solidjs/web/jsx-runtime";
import { parser } from "markdown-to-jsx/html";

import { POST_DATA, PostId } from "./post_data";
import createStateSignal, { StateContext } from "./state";
import Heading from "./Post/Heading";
import BlogPostFooter from "./BlogPostFooter";
import Post from "./Post";
import Refs from "./Refs";

type BlogComponentProps = {
  post_id: PostId;
};

export default function BlogComponent(props: BlogComponentProps): JSX.Element {
  const s = createStateSignal();
  const ast = parser(POST_DATA[props.post_id].raw);
  return (
    <StateContext value={s}>
      <div class="blog grow-sub">
        <div class="content-list grow-sub" style="max-width: 40em;">
          <Show when={s.frontMatter().title !== undefined}>
            <Heading level={1}>{s.frontMatter().title}</Heading>
          </Show>
          <Show when={s.frontMatter().date !== undefined}>
            <div class="blog-date">{s.frontMatter().date}</div>
          </Show>
          <Post ast={ast} />
          <br />
        </div>
        <Refs />
        <BlogPostFooter />
      </div>
    </StateContext>
  );
}
