import { Title } from "@solidjs/meta";
import ContentList from "../../components/ContentList";
import BlogListButton from "../../components/ContentList/BlogListButton";
import { PostId } from "../../components/BlogComponent";
import { For } from "solid-js";

function Quote() {
  return (
    <div class="center">
      <div style="display: flex; flex-direction: column; gap:0;">
        <div class="italic">
          the unexamined life is not worth living — Socrates
          <div
            class="noselect"
            style="font-size: 0.875em; opacity: 30%; color: var(--fg2);"
          >
            ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ — Σωκράτης
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Cv() {
  return (
    <main>
      <Title>Blog - Howard Latif</Title>
      <h1>my thoughts</h1>
      <Quote />
      <ContentList>
        <For each={Object.values(PostId)}>
          {(post_id) => <BlogListButton post_id={post_id} />}
        </For>
      </ContentList>
    </main>
  );
}
