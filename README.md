# Personal Site

# TODO

GRAPHICS:
button list with content pre-list?
- parent resize animation with dynamic content changes
- blog; markdown solid component render
- music; music player <<< no it should be a persistent toast that stays as u nav
- projects; if hosted put it in, otherwise just nav to github repo

page transitions

BACKEND:
audio component for music page
- make basic seek and play/pause button
- defaults to store song state to first in list
- auto set to next track
- css for active selection (do for nav too somehow once u figure out location signals)
- (make proper recording somehow, somewhere)

markdown blog
- markdown-to-jsx/html AST tree traversal to construct solidjs component
- they might already have method calls to map AST to some JSX construction.. u might not need to write ur own tree traversal; look into rules in their gh
- << stop procrastinating on this

TECH DEBT:
cleanup to use proper idiomatic solidjs to style, route, components

- use children component props instead of array of objects data in props
- figure out how to prepend `personal_site` to all paths
  - otherwise make a hack for router.ts for paths call to prepend it
