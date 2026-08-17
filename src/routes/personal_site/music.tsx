import ButtonList from "../../components/ButtonList";
import { Title } from "@solidjs/meta";

function Quote() {
  return (
    <p class="italic">
      is my <span style="color: rgb(120 120 35);">love</span> more{" "}
      <span style="color: rgb(35 35 120);">real</span>, if it's in a{" "}
      <span style="color: rgb(120 35 35);">poetry</span> or a{" "}
      <span style="color: rgb(170, 0, 170);">song</span>?
    </p>
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
