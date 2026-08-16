import { Title } from "@solidjs/meta";
import ButtonList from "../../components/ButtonList";

export default function Cv() {
  return (
    <main>
      <Title>Blog - Howard Latif</Title>
      <h2 style="color: var(--fgr)">my thoughts</h2>
      <p class="italic">the unexamined life is not worth living — Socrates</p>
      <ButtonList
        children={[
          { label: "Of Language, Theory and Models", url: "" },
          { label: "An introduction to Type Theory", url: "" },
          { label: "What is Computation?", url: "" },
          {
            label: "Speculations on a Jurisprudence in the age of AI",
            url: "",
          },
        ]}
      />
    </main>
  );
}
