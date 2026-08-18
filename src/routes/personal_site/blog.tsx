import { Title } from "@solidjs/meta";
import ButtonList from "../../components/ButtonList";

function Quote() {
  return (
    <div class="center">
      <div style="display: flex; flex-direction: column; gap:0;">
        <div class="italic">
          the unexamined life is not worth living — Socrates
          <div style="font-size: 0.875em; opacity: 30%; color: var(--fg2);">
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
