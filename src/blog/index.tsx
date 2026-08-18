import { JSX } from "@solidjs/web/jsx-runtime";
import { parser, RuleType } from "markdown-to-jsx/html";
import katex from "katex";

import md_jurisprudence from "./jurisprudence.md?raw";
import md_intro_tt from "./intro_tt.md?raw";
import md_comp from "./comp.md?raw";
import md_ltm from "./ltm.md?raw";
import { Dynamic } from "@solidjs/web";

export const RAW_MARKDOWN = { md_jurisprudence, md_intro_tt, md_comp, md_ltm };

type MathNode = {
  type: "math";
  value: string;
  display: boolean;
};

type Node = any | MathNode;

export function renderSolid2WKatex(md: string): JSX.Element {
  const ast = addMath(parser(md));
  return <>{ast.map(render)}</>;

  function addMath(nodes: Node[]): Node[] {
    return nodes.flatMap((n) => {
      if (n.type === RuleType.text) {
        const out: Node[] = [];
        const re = /\$\$([\s\S]+?)\$\$|\$([^$\n]+?)\$/g;
        let last = 0;

        for (const m of n.text.matchAll(re)) {
          const i = m.index!;
          if (i > last) out.push({ ...n, text: n.text.slice(last, i) });

          out.push({
            type: "math",
            value: m[1] ?? m[2],
            display: !!m[1],
          });

          last = i + m[0].length;
        }

        if (last < n.text.length) out.push({ ...n, text: n.text.slice(last) });

        return out;
      }

      if (n.children) return [{ ...n, children: addMath(n.children) }];

      if (n.items)
        return [
          {
            ...n,
            items: n.items.map((x: Node[]) => addMath(x)),
          },
        ];

      return [n];
    });
  }

  function render(n: Node): JSX.Element {
    switch (n.type) {
      case "math":
        return (
          <span
            innerHTML={katex.renderToString(n.value, {
              displayMode: n.display,
              throwOnError: false,
            })}
          />
        );

      case RuleType.text:
        return n.text;

      case RuleType.heading:
        return el(`h${n.level}`, n.children);

      case RuleType.paragraph:
        return <p>{children(n.children)}</p>;

      case RuleType.textFormatted:
        return el(n.tag, n.children);

      case RuleType.codeInline:
        return <code>{n.text}</code>;

      case RuleType.codeBlock:
        return (
          <pre>
            <code>{n.text}</code>
          </pre>
        );

      case RuleType.link:
        return <a href={n.target}>{children(n.children)}</a>;

      case RuleType.image:
        return <img src={n.target} alt={n.alt ?? ""} />;

      case RuleType.blockQuote:
        return <blockquote>{children(n.children)}</blockquote>;

      case RuleType.orderedList:
        return (
          <ol>
            {n.items.map((x: Node[]) => (
              <li>{children(x)}</li>
            ))}
          </ol>
        );

      case RuleType.unorderedList:
        return (
          <ul>
            {n.items.map((x: Node[]) => (
              <li>{children(x)}</li>
            ))}
          </ul>
        );

      case RuleType.breakLine:
        return <br />;

      case RuleType.breakThematic:
        return <hr />;

      default:
        return <>{n.children ? children(n.children) : null}</>;
    }
  }

  function children(nodes: Node[]) {
    return nodes.map(render);
  }

  function el(tag: string, nodes: Node[]) {
    const Tag = tag as keyof JSX.IntrinsicElements;
    return <Dynamic component={tag}>{children(nodes)}</Dynamic>;
  }
}
