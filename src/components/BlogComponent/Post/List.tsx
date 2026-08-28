import { JSX } from "@solidjs/web/jsx-runtime";
import { For, ParentProps } from "solid-js";
import Post, { Node } from ".";

type ItemsProps = ParentProps<{
  items: Node[];
}>;

function Items(props: ItemsProps): JSX.Element {
  return (
    <For each={props.items}>
      {(item) => (
        <li>
          <Post ast={item} />
        </li>
      )}
    </For>
  );
}

export function OrderedList(props: ItemsProps): JSX.Element {
  return (
    <ol>
      <Items items={props.items} />
    </ol>
  );
}

export function UnorderedList(props: ItemsProps): JSX.Element {
  return (
    <ul>
      <Items items={props.items} />
    </ul>
  );
}
