import { For } from "solid-js";
import { JSX } from "@solidjs/web/jsx-runtime";
import { MarkdownToJSX, parser } from "markdown-to-jsx/html";

import md_jurisprudence from "./jurisprudence.md?raw";
import md_intro_tt from "./intro_tt.md?raw";
import md_comp from "./comp.md?raw";
import md_ltm from "./ltm.md?raw";

const RAW_MARKDOWN = [md_jurisprudence, md_intro_tt, md_comp, md_ltm];

function compileSolid(md: string): JSX.Element {
  return nodesToSolid(parser(md));
}

function nodesToSolid(ast: MarkdownToJSX.ASTNode[]): JSX.Element {
  return <For each={ast.map(nodeToSolid)}>{(x) => x}</For>;
}

function nodeToSolid(node: MarkdownToJSX.ASTNode): JSX.Element {
  switch (node.type) {
    case 7:
      return <div>one</div>;
    case 9:
      return <div>two</div>;
    case 16:
      return <div>three</div>;
  }
  return <div>four</div>;
  // TODO recurse on children
}

const [jurisprudence, intro_tt, comp, ltm] = RAW_MARKDOWN.map(compileSolid);

export { jurisprudence, intro_tt, comp, ltm };
