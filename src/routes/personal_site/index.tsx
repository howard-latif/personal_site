import { Title } from "@solidjs/meta";
import Counter from "../components/Counter";
import logo from "../logo.svg";

export default function Home() {
  return (
    <main>
      <Title>Home - Howard Latif</Title>
      <h1>Howard Latif</h1>
      <p>
        My writings can be found in the Blog page whilst code projects in the
        Projects page.
      </p>
      <p>
        Please contact <code>howard.latif@proton.me</code> for business enquiries.
      </p>
    </main>
  );
}
