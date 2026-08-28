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

type Node = typeof ASTNode;

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
};

export default function Post(props: PostProps): JSX.Element {
  return (
    <Show when={props.ast.length > 0}>
      <For each={props.ast}>
        {(node) => (
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
                <></>
                {/* TODO just put some untoggleable checkbox */}
              </MatchRule>
              <MatchRule rule={RuleType.heading}>
                <Heading level={node.level}>
                  <Post ast={node.children} />
                </Heading>
              </MatchRule>
              <MatchRule rule={RuleType.htmlBlock}>
                <></>
                {/* TODO use js default window DOM methods?
      unless solidjs has some util to create JSX.Element dynamically */}
              </MatchRule>
              <MatchRule rule={RuleType.htmlComment}>
                <></>
              </MatchRule>
              <MatchRule rule={RuleType.htmlSelfClosing}>
                <></> {/* TODO */}
              </MatchRule>
              <MatchRule rule={RuleType.image}>
                <Portrait target={node.target} caption={node.alt} alt={node.alt} />
              </MatchRule>
              <MatchRule rule={RuleType.link}>
                <Link target={node.target}>
                  <Post ast={node.children} />
                </Link>
              </MatchRule>
              <MatchRule rule={RuleType.orderedList}>
                <></> {/* TODO */}
              </MatchRule>
              <MatchRule rule={RuleType.unorderedList}>
                <></> {/* TODO */}
              </MatchRule>
              <MatchRule rule={RuleType.paragraph}>
                <Paragraph>
                  <Post ast={node.children} />
                </Paragraph>
              </MatchRule>
              <MatchRule rule={RuleType.ref}>
                <></> {/* TODO */}
              </MatchRule>
              <MatchRule rule={RuleType.refCollection}>
                <></> {/* TODO */}
              </MatchRule>
              <MatchRule rule={RuleType.table}>
                <></> {/* TODO */}
              </MatchRule>
              <MatchRule rule={RuleType.text}>{node.text}</MatchRule>
              <MatchRule rule={RuleType.textFormatted}>
                <></> {/* TODO */}
              </MatchRule>
            </Switch>
          </NodeContext>
        )}
      </For>
    </Show>
  );
}
