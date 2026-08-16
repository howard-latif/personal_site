import { Title } from "@solidjs/meta";
import ButtonList from "../../components/ButtonList";

export default function Cv() {
  return (
    <main>
      <Title>Projects - Howard Latif</Title>
      <h2 style="color: var(--fgb)">my code</h2>
      <p class="italic">
        click{" "}
        <span>
          <a target="_blank" href="https://github.com/howard-latif">
            here
          </a>
        </span>{" "}
        for my github profile page
      </p>
      <ButtonList
        children={[
          { label: "Rust Chess Bot", url: "" },
          { label: "Experience Interpretation Diagram", url: "" },
        ]}
      />
    </main>
  );
}
