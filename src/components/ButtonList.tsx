import { For } from "solid-js";
import { AiOutlineStar } from "solid-icons/ai";
import { AiOutlineMoon } from "solid-icons/ai";
import { RiOthersFlowerLine } from "solid-icons/ri";
import { FaRegularDotCircle } from "solid-icons/fa";

type ButtonListProps = {
  children: {
    label: string;
    url: string;
  }[];
  type: number;
};

function getIcon(x: number) {
  switch (x) {
    case 0:
      return <AiOutlineStar />;
    case 1:
      return <AiOutlineMoon />;
    case 2:
      return <RiOthersFlowerLine />;
    default:
      return <FaRegularDotCircle />;
  }
}
export default function ButtonList(props: ButtonListProps) {
  return (
    <div class="center child-height-grow">
      <div class="button-list bodoni-moda-sc-titlefont">
        <For each={props.children}>
          {({ label, url }) => <a href={url}>§ {label}</a>}
        </For>
        <div style="display: flex; flex: 1; justify-content: center;">
          <div style="color: var(--fgh); padding-bottom: 1rem; align-self: flex-end;">
            {getIcon(props.type)}
          </div>
        </div>
      </div>
    </div>
  );
}
