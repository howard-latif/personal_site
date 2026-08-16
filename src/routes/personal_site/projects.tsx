import { Title } from "@solidjs/meta";
import ButtonList from "../../components/ButtonList";

function Quote() {
  return (
    <p class="italic">
      click{" "}
      <span>
        <a target="_blank" href="https://github.com/howard-latif">
          here
        </a>
      </span>{" "}
      for my github profile page
    </p>
  );
}

export default function Cv() {
  return (
    <main>
      <Title>Projects - Howard Latif</Title>
      <h2>my code</h2>
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
