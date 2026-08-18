import { Title } from "@solidjs/meta";
import ButtonList from "../../components/ButtonList";

function Quote() {
  return (
    <>
      <div class="italic">
        our devotion, laid bare in the{" "}
        <span>
          <a target="_blank" href="https://github.com/howard-latif">
            works
          </a>
        </span>{" "}
        we make
      </div>
      <div
        class="bodoni-moda-sc-titlefont"
        style="font-size: 0.75em; opacity: 30%; color: var(--fg2);"
      >
        Devotio nostra, in operibus quae facimus manifesta
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
