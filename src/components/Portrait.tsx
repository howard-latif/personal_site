import { JSX } from "@solidjs/web/jsx-runtime";
import { Show } from "solid-js";

type PortraitProps = {
  target: string;
  alt?: string;
  caption?: string;
};

export default function Portrait(props: PortraitProps): JSX.Element {
  return (
    <div class="center">
      <figure style="margin: 1em;">
        <figure style="margin: 0.5em;">
          <figure style="margin: 0.15em; padding: 1em;">
            <img
              class="landing-img noselect"
              src={props.target}
              alt={props.alt}
            />
            <Show when={props.caption !== undefined}>
              <figcaption>{props.caption}</figcaption>
            </Show>
          </figure>
        </figure>
      </figure>
    </div>
  );
}
