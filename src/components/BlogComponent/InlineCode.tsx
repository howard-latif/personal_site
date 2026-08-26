import { JSX } from "@solidjs/web/jsx-runtime";

type InlineCodeProps = {
  code: string;
};

export default function InlineCode(props: InlineCodeProps): JSX.Element {
  return <span class="blog-inline-code">{props.code}</span>;
}
