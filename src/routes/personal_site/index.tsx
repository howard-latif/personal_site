import { Title } from "@solidjs/meta";
import VertSpace from "../../components/VertSpace";
import { useLocation, useNavigate } from "@solidjs/router";

import { FaRegularDotCircle } from "solid-icons/fa";
import { createEffect } from "solid-js";

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
    <p class="italic">
      these{" "}
      <a class="redbgh" href="" onClick={() => navigate("/personal_site/blog")}>
        words
      </a>{" "}
      for you to listen, <br />
      these{" "}
      <a
        class="bluebgh"
        href=""
        onClick={() => navigate("/personal_site/projects")}
      >
        symbols
      </a>{" "}
      for you to dream, <br />
      my{" "}
      <a
        class="pinkbgh"
        href=""
        onClick={() => navigate("/personal_site/music")}
      >
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
      <VertSpace />
      <div class="content-list shrink grow-sub" style="align-self: center;">
        <div style="padding-top: var(--gap);">
          <p class="font-title">Please contact</p>{" "}
          <code class="inline-code">howard.latif@proton.me</code>{" "}
          <p class="font-title">for business enquiries</p>
        </div>
        <div style="color: var(--gray); align-self: stretch; flex: 1; display: flex; align-items: center; justify-content: flex-end; flex-direction: column; margin-bottom: var(--hgap);">
          <FaRegularDotCircle />
        </div>
      </div>
    </main>
  );
}
