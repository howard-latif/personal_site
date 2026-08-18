import AudioPlayer from "../../components/AudioPlayer";
import ButtonList from "../../components/ButtonList";
import { Title } from "@solidjs/meta";

function Quote() {
  return (
    <>
      <div class="italic">
        is my love more real, if it's in poetry or a song?
      </div>
      <div
        class="bodoni-moda-sc-titlefont"
        style="text-transform: lowercase; font-size: 0.85em; opacity: 30%; color: var(--fg2);"
      >
        Моя любовь будет более реальной, <br />
        если она выражена в стихах или в песне?
      </div>
    </>
  );
}

export default function Cv() {
  return (
    <main>
      <Title>Music - Howard Latif</Title>
      <h1>my soul</h1>
      <Quote />
      <AudioPlayer />
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
