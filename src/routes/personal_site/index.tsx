import { Title } from "@solidjs/meta";
import VertSpace from "../../components/VertSpace";
import { useNavigate } from "@solidjs/router";

import { FaRegularDotCircle } from "solid-icons/fa";

function Portrait() {
  return (
    <div class="center">
      <figure class>
        <img class="landing-img" src="/personal_site/landing.jpeg" />
        <figcaption>art by malena bozzini</figcaption>
      </figure>
    </div>
  );
}

function Quote() {
  const navigate = useNavigate();

  return (
    <p class="italic">
      these{" "}
      <a href="" onClick={() => navigate("/personal_site/blog")}>
        words
      </a>{" "}
      for you to listen, these{" "}
      <a href="" onClick={() => navigate("/personal_site/projects")}>
        symbols
      </a>{" "}
      for you to dream
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
      <div class="center child-height-grow">
        <div class="indexbody">
          <div>
            <p class="bodoni-moda-sc-titlefont">Please contact</p>{" "}
            <code>howard.latif@proton.me</code>{" "}
            <p class="bodoni-moda-sc-titlefont">for business enquiries</p>
          </div>
          <div style="display: flex; flex: 1; justify-content: center;">
            <div style="color: var(--fg2); margin-bottom: 0.525em; align-self: flex-end;">
              <FaRegularDotCircle />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
