import ButtonList from "../../components/ButtonList";
import { Title } from "@solidjs/meta";

function Quote() {
  return (
    <p class="italic">is my love more real, if it's in a poetry or a song?</p>
  );
}

export default function Cv() {
  return (
    <main>
      <Title>Music - Howard Latif</Title>
      <h2>my soul</h2>
      <Quote />
      <ButtonList
        type={2}
        children={[
          { label: "Until", url: "" },
          { label: "Hands", url: "" },
          { label: "Takers", url: "" },
        ]}
      />
    </main>
  );
}
