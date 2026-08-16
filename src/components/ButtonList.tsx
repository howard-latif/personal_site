import { For } from "solid-js";

type ButtonListProps = {
  children: {
    label: string;
    url: string;
  }[];
};

export default function ButtonList(props: ButtonListProps) {
  return (
    <div class="button-list">
      <For each={props.children}>
        {({ label, url }) => <a href={url}>§ {label}</a>}
      </For>
    </div>
  );
}
