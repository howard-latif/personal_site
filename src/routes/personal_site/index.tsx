import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";
import ContentList from "../../components/ContentList";

function Portrait() {
  return (
    <div class="center">
      <figure style="margin: 1em;">
        <figure style="margin: 0.5em;">
          <figure style="margin: 0.15em; padding: 1em;">
            <img
              class="landing-img noselect"
              src="/personal_site/landing.jpeg"
            />
            <figcaption>art by malena bozzini</figcaption>
          </figure>
        </figure>
      </figure>
    </div>
  );
}

function Quote() {
  const navigate = useNavigate();

  return (
    <p class="italic" style="padding-bottom: var(--gap);">
      these{" "}
      <a href="" onClick={() => navigate("/personal_site/blog")}>
        words
      </a>{" "}
      for you to listen, <br />
      these{" "}
      <a href="" onClick={() => navigate("/personal_site/projects")}>
        symbols
      </a>{" "}
      for you to dream, <br />
      my{" "}
      <a href="" onClick={() => navigate("/personal_site/music")}>
        serenades
      </a>{" "}
      for those who believe
    </p>
  );
}

export default function Home() {
  return (
    <main>
      <Title>Home - Howard Latif</Title>
      <h1>Howard Latif</h1>
      <Portrait />
      <Quote />
      <ContentList>
        <div style="padding-top: var(--gap);">
          <div class="content-list-index-text">Please contact</div>
          <code class="inline-code">howard.latif@proton.me</code>
          <div class="content-list-index-text">for business enquiries</div>
        </div>
      </ContentList>
    </main>
  );
}
