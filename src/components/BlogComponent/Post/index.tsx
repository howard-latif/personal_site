import { JSX } from "@solidjs/web/jsx-runtime";
import {
  For,
  ParentProps,
  Show,
  Switch,
  Match,
  createContext,
  useContext,
} from "solid-js";

import ASTNode from "markdown-to-jsx";
import { RuleType } from "markdown-to-jsx/html";
import BlockQuote from "./BlockQuote";
import ThematicBreak from "./ThematicBreak";
import CodeBlock from "./CodeBlock";
import InlineCode from "./InlineCode";
import SetFrontMatter from "./FrontMatter";
import Heading from "./Heading";
import Paragraph from "./Paragraph";
import Link from "./Link";
import Portrait from "../../Portrait";
import HtmlElement from "./HtmlElement";
import { OrderedList, UnorderedList } from "./List";
import SetRefs from "./SetRefs";

export type Node = typeof ASTNode;

const NodeContext = createContext<Node>();

type MatchRuleProps = ParentProps<{
  rule: RuleType;
}>;

function MatchRule(props: MatchRuleProps): JSX.Element {
  const node = useContext(NodeContext);
  return <Match when={node.type === props.rule}>{props.children}</Match>;
}

type PostProps = {
  ast: Node[];
  wrap?: boolean;
};

export default function Post(props: PostProps): JSX.Element {
  return (
    <Show when={props.ast.length > 0}>
      <For each={props.ast}>
        {(node) => {
          let x = (
            <NodeContext value={node}>
              <Switch fallback={<></>}>
                <MatchRule rule={RuleType.blockQuote}>
                  <BlockQuote>
                    <Post ast={node.children} />
                  </BlockQuote>
                </MatchRule>
                <MatchRule rule={RuleType.breakLine}>
                  <br />
                </MatchRule>
                <MatchRule rule={RuleType.breakThematic}>
                  <ThematicBreak />
                </MatchRule>
                <MatchRule rule={RuleType.codeBlock}>
                  <CodeBlock lang={node.lang} code={node.text} />
                </MatchRule>
                <MatchRule rule={RuleType.codeInline}>
                  <InlineCode code={node.text} />
                </MatchRule>
                <MatchRule rule={RuleType.footnote}>
                  <></> {/* TODO */}
                </MatchRule>
                <MatchRule rule={RuleType.footnoteReference}>
                  <></> {/* TODO */}
                </MatchRule>
                <MatchRule rule={RuleType.frontmatter}>
                  <SetFrontMatter text={node.text} />
                </MatchRule>
                <MatchRule rule={RuleType.gfmTask}>
                  <input type="checkbox" checked={node.completed} disabled />
                </MatchRule>
                <MatchRule rule={RuleType.heading}>
                  <Heading level={node.level}>
                    <Post ast={node.children} />
                  </Heading>
                </MatchRule>
                <MatchRule rule={RuleType.htmlBlock}>
                  <HtmlElement tag={node.tag} a={node.a}>
                    <Post ast={node.children} />
                  </HtmlElement>
                </MatchRule>
                <MatchRule rule={RuleType.htmlComment}>
                  <></>
                </MatchRule>
                <MatchRule rule={RuleType.htmlSelfClosing}>
                  <></> {/* keine ahnung */}
                </MatchRule>
                <MatchRule rule={RuleType.image}>
                  <Portrait
                    target={node.target}
                    caption={node.alt}
                    alt={node.alt}
                  />
                </MatchRule>
                <MatchRule rule={RuleType.link}>
                  <Link target={node.target}>
                    <Post ast={node.children} />
                  </Link>
                </MatchRule>
                <MatchRule rule={RuleType.orderedList}>
                  <OrderedList items={node.items} />
                </MatchRule>
                <MatchRule rule={RuleType.unorderedList}>
                  <UnorderedList items={node.items} />
                </MatchRule>
                <MatchRule rule={RuleType.paragraph}>
                  <Paragraph>
                    <Post ast={node.children} />
                  </Paragraph>
                </MatchRule>
                <MatchRule rule={RuleType.refCollection}>
                  <SetRefs refs={node.refs} />
                </MatchRule>
                <MatchRule rule={RuleType.table}>
                  <div
                    class="blog-table"
                    style={`grid-template-columns: repeat(${node.header.length}, 1fr);`}
                  >
                    <Post ast={node.header.flat(1)} wrap />
                    <Post ast={node.cells.flat(2)} wrap />
                  </div>
                </MatchRule>
                <MatchRule rule={RuleType.text}>{node.text}</MatchRule>
                <MatchRule rule={RuleType.textFormatted}>
                  <span class={node.tag === "em" ? "italic" : "bold"}>
                    <Post ast={node.children} />
                  </span>
                </MatchRule>
              </Switch>
            </NodeContext>
          );

          return props.wrap ? <div>{x}</div> : x;
        }}
      </For>
    </Show>
  );
}
