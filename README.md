# Personal Site

# TODO

GRAPHICS:

- (3) blog post page nav, next post, prev post, blog home page
- figure out responsive design shi for nav.. maybe just shrink font on mediaquery for small enough screen size

BACKEND:

- (4) audio component for music page
  - make basic seek and play/pause button
  - defaults to store song state to first in list
  - auto set to next track

- blog
  - (1) component per rule
    - where the fck is the footnote body/text
  - (2) detect math e.g. $E=mc^2$ and block $$\\begin{align}\nf(x) &= y \\\\\n g \circ f(x) &= z\n\\end{align}$$

TECH DEBT:

- figure out how to prepend `personal_site` to all paths
  - otherwise make a hack for router.ts for paths call to prepend it
- use memo for warning (ensure its compute once values i.e. from markdown not live data)
