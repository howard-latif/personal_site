import { JSX } from "@solidjs/web/jsx-runtime";
import { parser, RuleType } from "markdown-to-jsx/html";
import type ASTNode from "markdown-to-jsx";
import md_OfLanguageTheoryAndModels from "../../public/markdown/OfLanguageTheoryAndModels.md?raw";
import md_IntroductionToTypeTheory from "../../public/markdown/IntroductionToTypeTheory.md?raw";
import md_JurisprudenceForTheAgeOfAI from "../../public/markdown/JurisprudenceForTheAgeOfAI.md?raw";
import md_CyberneticAnthropology from "../../public/markdown/CyberneticAnthropology.md?raw";
import md_AnOntologyOfComputation from "../../public/markdown/AnOntologyOfComputation.md?raw";

import { For } from "@solidjs/web";

export const PostId = {
  OfLanguageTheoryAndModels: 0,
  IntroductionToTypeTheory: 1,
  AnOntologyOfComputation: 2,
  JurisprudenceForTheAgeOfAI: 3,
  CyberneticAnthropology: 4,
};

export type PostId = (typeof PostId)[keyof typeof PostId];

export type PostDataEntry = {
  title: string;
  filename: string;
  raw: string;
};

export type PostData = Record<PostId, PostDataEntry>;

export const POST_DATA: PostData = {
  [PostId.OfLanguageTheoryAndModels]: {
    title: "Of Language, Theory and Models",
    filename: "OfLanguageTheoryAndModels",
    raw: md_OfLanguageTheoryAndModels,
  },
  [PostId.IntroductionToTypeTheory]: {
    title: "Introduction to Type Theory",
    filename: "IntroductionToTypeTheory",
    raw: md_IntroductionToTypeTheory,
  },
  [PostId.AnOntologyOfComputation]: {
    title: "An Ontology of Computation",
    filename: "AnOntologyOfComputation",
    raw: md_AnOntologyOfComputation,
  },
  [PostId.JurisprudenceForTheAgeOfAI]: {
    title: "Jurisprudence for the Age of AI",
    filename: "JurisprudenceForTheAgeOfAI",
    raw: md_JurisprudenceForTheAgeOfAI,
  },
  [PostId.CyberneticAnthropology]: {
    title: "Cybernetic Anthropology",
    filename: "CyberneticAnthropology",
    raw: md_CyberneticAnthropology,
  },
};

type Node = typeof ASTNode;

function children(nodes: Node[]): JSX.Element {
  return (
    <div class="blog-post">
      <For each={nodes}>{(n) => node(n)}</For>
    </div>
  );
}

function node(node: Node): JSX.Element {
  switch (node.type) {
    case RuleType.heading:
      return <h3>{children(node.children)}</h3>;
    case RuleType.frontmatter:
      return <></>;
    case RuleType.paragraph:
      return <p>{children(node.children)}</p>;
    case RuleType.text:
      return node.text;
    default:
      console.log(JSON.stringify(node, null, 2));
      return <div>lmao</div>;
  }
}

function frontMatter(node: Node): Record<string, string> {
  return Object.fromEntries(
    node.text
      .split("\n")
      .filter((line: string) => line !== "---")
      .map((line: string) =>
        line
          .trim()
          .split(":")
          .map((s: string) => s.trim()),
      ),
  );
}

type BlogComponentProps = {
  post_id: PostId;
};

export default function BlogComponent(props: BlogComponentProps): JSX.Element {
  const ast: Node[] = parser(POST_DATA[props.post_id].raw);
  const fmObj =
    ast.length > 0 && ast[0].type === RuleType.frontmatter
      ? frontMatter(ast[0])
      : {};
  return children(ast);
}
