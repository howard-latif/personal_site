import { JSX } from "@solidjs/web/jsx-runtime";
import { For, ParentProps, Show } from "solid-js";

import ASTNode from "markdown-to-jsx";
import { RuleType } from "markdown-to-jsx/html";
import BlockQuote from "./PostComponents/BlockQuote";
import ThematicBreak from "./PostComponents/ThematicBreak";
import CodeBlock from "./PostComponents/CodeBlock";
import InlineCode from "./PostComponents/InlineCode";
import SetFrontMatter from "./PostComponents/FrontMatter";
import Heading from "./PostComponents/Heading";
import Paragraph from "./PostComponents/Paragraph";

type Node = typeof ASTNode;

export function node(node: Node): JSX.Element {
  switch (node.type) {
    case RuleType.blockQuote:
      return (
        <BlockQuote>
          <Children nodes={node.children} />
        </BlockQuote>
      );
    case RuleType.breakLine:
      return <br />;
    case RuleType.breakThematic:
      return <ThematicBreak />;
    case RuleType.codeBlock:
      return <CodeBlock lang={node.lang} code={node.text} />;
    case RuleType.codeInline:
      return <InlineCode code={node.text} />;
    case RuleType.footnote:
      return <></>; //TODO
    case RuleType.footnoteReference:
      return <></>; //TODO
    case RuleType.frontmatter:
      return <SetFrontMatter text={node.text} />; //TODO
    case RuleType.gfmTask:
      return <></>; //TODO
    case RuleType.heading:
      return (
        <Heading level={node.level}>
          <Children nodes={node.children} />
        </Heading>
      );
    case RuleType.htmlBlock:
      return <></>; //TODO
    case RuleType.htmlComment:
      return <></>; //TODO
    case RuleType.htmlSelfClosing:
      return <></>; //TODO
    case RuleType.image:
      return <></>; //TODO
    case RuleType.link:
      return <></>; //TODO
    case RuleType.orderedList:
      return <></>; //TODO
    case RuleType.paragraph:
      return (
        <Paragraph>
          <Children nodes={node.children} />
        </Paragraph>
      );
    case RuleType.ref:
      return <></>; //TODO
    case RuleType.refCollection:
      return <></>; //TODO
    case RuleType.table:
      return <></>; //TODO
    case RuleType.text:
      return node.text;
    case RuleType.textFormatted:
      return <></>; //TODO
    default:
      console.log(JSON.stringify(node, null, 2));
      return <></>; //TODO
  }
}

type ChildrenProps = ParentProps<{
  nodes: Node[];
}>;

export default function Children(props: ChildrenProps): JSX.Element {
  return (
    <Show when={props.nodes.length > 0}>
      <For each={props.nodes}>{(n) => node(n)}</For>
    </Show>
  );
}
