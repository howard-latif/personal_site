import { Title } from "@solidjs/meta";
import { RAW_MARKDOWN, renderSolid2WKatex } from "../../blog";
import ContentList from "../../components/ContentList";
import ContentListButton from "../../components/ContentList/ContentListButton";

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
      {/* <div>{renderSolid2WKatex(RAW_MARKDOWN.md_comp)}</div> */}
      <ContentList>
        <ContentListButton>Of Language, Theory and Models</ContentListButton>
        <ContentListButton>Introduction to Type Theory</ContentListButton>
        <ContentListButton>An Ontology of Computation</ContentListButton>
        <ContentListButton>Jurisprudence for the Age of AI</ContentListButton>
      </ContentList>
    </main>
  );
}
