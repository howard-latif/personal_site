import { Title } from "@solidjs/meta";
import { Loading } from "solid-js";
import { paths, Router } from "./router";
import "./App.css";

export default function App() {
  return (
    <Router>
      {(props) => (
        <>
          <Title>⚡️ Howard Latif</Title>
          <nav class="bodoni-moda-sc-titlefont">
            <a href={`/personal_site/${paths()}`}>Home</a>
            <a href={paths.personal_site.blog()}>Blog</a>
            <a href={paths.personal_site.projects()}>Projects</a>
            <a href={paths.personal_site.music()}>Music</a>
          </nav>
          <Loading fallback={<main>Loading…</main>}>{props.children}</Loading>
        </>
      )}
    </Router>
  );
}
