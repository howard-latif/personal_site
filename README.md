# Personal Site

# TODO

GRAPHICS:

BACKEND:

- blog post nav use search params. hide prev on 0, hide next on last, implement dec and inc set search param hook.

- (4) audio component for music page
  - make basic seek and play/pause button
  - defaults to store song state to first in list
  - auto set to next track

- blog
  - (1) component per rule
  - (2) detect math e.g. $E=mc^2$ and block $$\\begin{align}\nf(x) &= y \\\\\n g \circ f(x) &= z\n\\end{align}$$

TECH DEBT:

- figure out how to prepend `personal_site` to all paths
  - otherwise make a hack for router.ts for paths call to prepend it
- use memo for warning (ensure its compute once values i.e. from markdown not live data)...
