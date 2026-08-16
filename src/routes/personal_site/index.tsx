import { Title } from "@solidjs/meta";
import { useNavigate } from "@solidjs/router";

export default function Home() {
  const navigate = useNavigate();

  return (
    <main>
      <Title>Home - Howard Latif</Title>
      <h1>Howard Latif</h1>
      <figure>
        <img class="landing-img" src="/personal_site/landing.jpeg" />
        <figcaption class="italic" style="opacity: 35%; margin: -0.25em 0 0 0;">
          malena bozzini
        </figcaption>
      </figure>
      <div class="vertical-space" />
      <p class="max-halfwidth italic">
        My writings can be found in the{" "}
        <a href="" onClick={() => navigate("/personal_site/blog")}>
          blog
        </a>{" "}
        page whilst code{" "}
        <a href="" onClick={() => navigate("/personal_site/projects")}>
          projects
        </a>{" "}
        in the Projects page.
      </p>
      <div class="vertical-space" />
      <p>
        Please contact <code>howard.latif@proton.me</code> for business
        enquiries.
      </p>
    </main>
  );
}
