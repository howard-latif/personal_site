import { JSX } from "@solidjs/web/jsx-runtime";
import { For } from "@solidjs/web";

import { FaRegularCopy } from "solid-icons/fa";

type CodeBlockProps = {
  lang?: string;
  code: string;
};

function copyToClipboard(text: string) {
  navigator.clipboard.writeText(text);
}

type ClipBoardBtnProps = {
  code: string;
};

function ClipboardBtn(props: ClipBoardBtnProps): JSX.Element {
  return (
    <div
      class="blog-block-code-copy-icon"
      onClick={() => copyToClipboard(props.code)}
    >
      <FaRegularCopy />
    </div>
  );
}

function Header(props: CodeBlockProps): JSX.Element {
  return props.lang !== undefined ? (
    <div class="blog-block-code-header">
      {props.lang}
      <ClipboardBtn code={props.code} />
    </div>
  ) : (
    <></>
  );
}

export default function CodeBlock(props: CodeBlockProps): JSX.Element {
  return (
    <div class="blog-block-code">
      <Header lang={props.lang} code={props.code} />
      <div class="blog-block-code-body">
        <For each={props.code.split("\n")}>
          {(line, i) => (
            <>
              <span class="blog-block-code-num">{i() + 1}</span>
              <div class="blog-block-code-line">{line}</div>
            </>
          )}
        </For>
      </div>
    </div>
  );
}
