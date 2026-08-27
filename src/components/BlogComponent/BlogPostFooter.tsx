import { JSX } from "@solidjs/web/jsx-runtime";

export default function BlogPostFooter(): JSX.Element {
  return (
    <div class="content-list-footer-container noselect" style="width: 100%">
      <div class="content-list-footer blog-nav">
        <a>prev</a>
        <a>home</a>
        <a>next</a>
      </div>
    </div>
  );
}
