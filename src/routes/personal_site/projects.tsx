import { Title } from "@solidjs/meta";
import ContentList from "../../components/ContentList";
import ContentListButton from "../../components/ContentList/ContentListButton";
import {
  getColor,
  useContentListType,
} from "../../components/ContentList/contentListType";

function Quote() {
  return (
    <>
      <div class="italic">
        so let it be{" "}
        <span>
          <a class="ab" target="_blank" href="https://github.com/howard-latif">
            written
          </a>
        </span>{" "}
        , so let it be done — T. A. Davis.
      </div>
      <div
        class="font-title noselect"
        style="font-size: 0.8em; opacity: 30%; color: var(--fg2);"
      >
        ita scribatur, ita fiat
      </div>
    </>
  );
}

export default function Cv() {
  const cl_type = useContentListType();
  const col = getColor(cl_type);
  return (
    <main>
      <Title>Projects - Howard Latif</Title>
      <h1 class={col}>my code</h1>
      <Quote />
      <ContentList>
        <ContentListButton>Rust Chess Bot</ContentListButton>
        <ContentListButton>Experience Interpretation Diagram</ContentListButton>
      </ContentList>
    </main>
  );
}
