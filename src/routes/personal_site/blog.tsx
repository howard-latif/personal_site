import { Title } from "@solidjs/meta";
import ButtonList from "../../components/ButtonList";

function Quote() {
  return (
    <div class="center">
      <div style="display: flex; flex-direction: column; gap:0;">
        <div class="italic" style="margin-right: 1em; padding-bottom: 0.75em;">
          the unexamined life is not worth living
          <div style="opacity: 30%; color: var(--fg2);">
            ὁ δὲ ἀνεξέταστος βίος οὐ βιωτὸς ἀνθρώπῳ
          </div>
        </div>
        <div class="italic" style="align-self: flex-end;">
          — Socrates
        </div>
      </div>
    </div>
  );
}

export default function Cv() {
  return (
    <main>
      <Title>Blog - Howard Latif</Title>
      <h2>my thoughts</h2>
      <Quote />
      <ButtonList
        type={0}
        children={[
          { label: "Of Language, Theory and Models", url: "" },
          { label: "Introduction to Type Theory", url: "" },
          { label: "An Ontology of Computation", url: "" },
          { label: "Jurisprudence for the age of AI", url: "" },
        ]}
      />
    </main>
  );
}
