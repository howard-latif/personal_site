# Personal Site

# TODO

GRAPHICS:

- blog post page nav, next post, prev post, blog home page

BACKEND:

- audio component for music page
  - make basic seek and play/pause button
  - defaults to store song state to first in list
  - auto set to next track

- blog
  - (1) component per rule
  - (2) detect math e.g. $E=mc^2$ and block $$\\begin{align}\nf(x) &= y \\\\\n g \circ f(x) &= z\n\\end{align}$$

```
(alias) const RuleType: {
 readonly blockQuote: 0;
 readonly breakLine: 1;
 readonly breakThematic: 2;
 readonly codeBlock: 3;
 readonly codeInline: 4;
 readonly footnote: 5;
 readonly footnoteReference: 6;
 readonly frontmatter: 7;
 readonly gfmTask: 8;
 readonly heading: 9;
 readonly htmlBlock: 10;
 readonly htmlComment: 11;
 readonly htmlSelfClosing: 12;
 readonly image: 13;
 readonly link: 14;
 readonly orderedList: 15;
 readonly paragraph: 16;
 readonly ref: 17;
 readonly refCollection: 18;
 readonly table: 19;
 readonly text: 20;
 readonly textFormatted: 21;
 readonly unorderedList: 22;
}
import RuleType
```

TECH DEBT:

- figure out how to prepend `personal_site` to all paths
  - otherwise make a hack for router.ts for paths call to prepend it
