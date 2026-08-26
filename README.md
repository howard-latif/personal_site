# Personal Site

# TODO

GRAPHICS:

- (3) blog post page nav, next post, prev post, blog home page

BACKEND:

- (4) audio component for music page
  - make basic seek and play/pause button
  - defaults to store song state to first in list
  - auto set to next track

- blog
  - (1) component per rule
    - frontmatter component to use context to pass data to parent to
    - footnote custom parse AST node then component to use context to accumulate compute unique mapping ref label to ref data.. need some combinator to combine references objects
  - (2) detect math e.g. $E=mc^2$ and block $$\\begin{align}\nf(x) &= y \\\\\n g \circ f(x) &= z\n\\end{align}$$

TECH DEBT:

- figure out how to prepend `personal_site` to all paths
  - otherwise make a hack for router.ts for paths call to prepend it
- use memo for warning (ensure its compute once values i.e. from markdown not live data)...
