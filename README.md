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
    - gfm; sort out static checkbox design, maybe just use icon?
    - lists; sort out design for lists
    - textformatted; wtf are textformatted?
    - HtmlSelfClosing; wtf?
    - ref; wtf are refs?
    - table; oi vey..
    - htmlblock; dynamic JSX.Element construction
    - footnote; blocked by custom parse
    - math; blocked by katex and custom parse
  - (2) detect math e.g. $E=mc^2$ and block $$\\begin{align}\nf(x) &= y \\\\\n g \circ f(x) &= z\n\\end{align}$$

TECH DEBT:

- figure out how to prepend `personal_site` to all paths
  - otherwise make a hack for router.ts for paths call to prepend it
- download font file and load it up as public asset. make everything self contained.. no link to outside
