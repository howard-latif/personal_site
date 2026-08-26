import { createContext, createSignal, Show, type ParentProps } from "solid-js";
import { JSX } from "@solidjs/web/jsx-runtime";
import { parser, RuleType } from "markdown-to-jsx/html";
import type ASTNode from "markdown-to-jsx";

import { For } from "@solidjs/web";

import { POST_DATA, PostId } from "./post_data";

import BlockQuote from "./BlockQuote";
import Heading from "./Heading";
import ThematicBreak from "./ThematicBreak";
import CodeBlock from "./CodeBlock";
import InlineCode from "./InlineCode";
import SetFrontMatter, { FrontMatter } from "./FrontMatter";

type Node = typeof ASTNode;

type ChildrenProps = ParentProps<{
  nodes: Node[];
}>;

function Children(props: ChildrenProps): JSX.Element {
  return (
    <Show when={props.nodes.length > 0}>
      <For each={props.nodes}>{(n) => node(n)}</For>
    </Show>
  );
}

function node(node: Node): JSX.Element {
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
        <p class="blog-text">
          <Children nodes={node.children} />
        </p>
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

function BlogPostFooter(): JSX.Element {
  return (
    <div class="content-list-footer-container noselect" style="width: 100%">
      <div class="content-list-footer blog-nav">
        <a>prev</a>
        <a>home</a>
        <a>next</a>
      </div>
    </div>
  );
}

export type StateContext = {
  value: () => FrontMatter;
  setValue: (value: FrontMatter) => void;
};

export const StateContext = createContext<StateContext>();

type BlogComponentProps = {
  post_id: PostId;
};

export default function BlogComponent(props: BlogComponentProps): JSX.Element {
  const [value, setValue] = createSignal({} as FrontMatter);
  return (
    <StateContext value={{ value, setValue }}>
      <div class="blog grow-sub">
        <div class="content-list grow-sub" style="max-width: 40em;">
          <Show when={value()["title"] !== undefined}>
            <Heading level={1}>{value().title}</Heading>
          </Show>
          <Show when={value()["date"] !== undefined}>
            <div class="blog-date">{value()["date"]}</div>
          </Show>
          <Children nodes={parser(POST_DATA[props.post_id].raw)} />
        </div>
        <BlogPostFooter />
      </div>
    </StateContext>
  );
}
