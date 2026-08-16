import ButtonList from "../../components/ButtonList";
import { Title } from "@solidjs/meta";

export default function Cv() {
  return (
    <main>
      <Title>Music - Howard Latif</Title>
      <h2 style="color: var(--fgp)">my soul</h2>
      <p class="italic">is my love more real, if it's in a poetry or a song?</p>
      <ButtonList
        children={[
          { label: "Until", url: "" },
          { label: "Hands", url: "" },
          { label: "Takers", url: "" },
        ]}
      />
    </main>
  );
}
