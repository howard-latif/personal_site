import { JSX } from "@solidjs/web/jsx-runtime";

type MathBlockProps = {
  code: string;
};

export default function MathBlock(props: MathBlockProps): JSX.Element {
  return <>{props.code}</>;
}
