import { Title } from "@solidjs/meta";
import ButtonList from "../../components/ButtonList";

function Quote() {
  return (
    <>
      <div class="italic">
        so let it be{" "}
        <span>
          <a target="_blank" href="https://github.com/howard-latif">
            written
          </a>
        </span>{" "}
        , so let it be done
      </div>
      <div
        class="bodoni-moda-sc-titlefont"
        style="font-size: 0.8em; opacity: 30%; color: var(--fg2);"
      >
        ita scribatur, ita fiat
      </div>
    </>
  );
}

export default function Cv() {
  return (
    <main>
      <Title>Projects - Howard Latif</Title>
      <h1>my code</h1>
      <Quote />
      <ButtonList
        type={1}
        children={[
          { label: "Rust Chess Bot", url: "" },
          { label: "Experience Interpretation Diagram", url: "" },
        ]}
      />
    </main>
  );
}
