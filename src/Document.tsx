import type { ParentProps } from "solid-js";
import { HydrationScript } from "@solidjs/web";

export default function Document(props: ParentProps) {
  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/personal_site/favicon.ico" />
        <title>Solid App</title>
        <HydrationScript />
      </head>
      <body class="baskervville-bodyfont">{props.children}</body>
    </html>
  );
}
