import AudioPlayer from "../../components/AudioPlayer";
import { Title } from "@solidjs/meta";
import ContentList from "../../components/ContentList";
import ContentListButton from "../../components/ContentList/ContentListButton";

function Quote() {
  return (
    <>
      <div class="italic">
        is my love more real, if it's in poetry or a song?
      </div>
      <div
        class="font-title noselect"
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
      {/* <AudioPlayer /> */}
      <ContentList>
        <ContentListButton>Until</ContentListButton>
        <ContentListButton>Hands</ContentListButton>
        <ContentListButton>Takers</ContentListButton>
      </ContentList>
    </main>
  );
}
