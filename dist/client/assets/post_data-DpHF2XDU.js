var e=`---
date: 17th Aug 2026
title: Of Language, Theory and Models
---

The use of mathematics as a field (to me) isn't so much about the production of proofs in papers, or to construct new structures for their own sake. But rather for their eventual use, in mathematics itself or other domains, be it science, technology or the humanities, or even in the arts. blablabla.

asd\\
asdasd[^1]

[^1]: my footnote, that the parser clearly captures this text as part of the parse through since it doesnt render as a paragraph nor text.. so why the fck isnt it captured as string at least and placed in the fckin AST? bloody hell m8

[^2]: another one

Now, i present to you a piece of \`inline code\` written between words.

- [ ] buy liberties
- [x] enact reforms

<div><span>is this html?</span></div>

[pre sam altman chatgpt](https://www.google.com)

---

\`\`\`java
public static void main(String[] args) {
  System.out.println("hello world");
}
\`\`\`

\`\`\`javascript
console.log("hello world");
\`\`\`

\`\`\`haskell
main :: IO ()
main = putStrLn "hello world"
\`\`\`

\`\`\`rust
use std;
fn main() {
  println!("hello world");
}
\`\`\`

\`\`\`go
import "fmt"
func main() {
  fmt.Println("hello world");
}
\`\`\`

\`\`\`cpp
using namespace std;
int main() {
  cout << "hello world";
}
\`\`\`

\`\`\`
no lang block
can
this
track
more
than
two
digit
number
lines?
yes
good
asd
\`\`\`

_is this formatted text_ and **this as well?**

---

asd

> hello im a blockquote
>
> multiple lines type shi
>
> > nested quote type shit
> >
> > multiline nested quote type shit
> >
> > > another one
> >
> > > and another one

![Tux, the Linux mascot](https://www.markdownguide.org/assets/images/generated/assets/images/tux-1080.webp)

Thus the activity of producing proofs, that the field itself cannot build up upon to further the field or other domains is an activity of mathematics. If it does not invite engagement, is that really mathematics?

Reminds me alot of the mochizuki abc conjecture proof. Is that really mathematics if nobody is really able to engage with it and build up from those ideas? And when i say build, i don't mean immediately constructing new theorems from them, but to even elucidate or speculate new approaches or interpretations.

very short paragraph

- this
- is
  1. a
  2. list

hello

<div style="background-color: var(--white); color: var(--gold);" class="lol" >html?</div>

wheres the table?

| _column1_ | column2 | column3 | col4 |
| --------- | ------- | ------- | ---- |
| a         | b       | c       | X    |
| d         | e       | f       | Y    |

its not above?
`,t=`---
date: 17th Aug 2026
title: Introduction to Type Theory
---

lorem ipsum

- a
- b
- c
`,n=`---
date: 17th Aug 2026
title: Jurisprudence for the age of AI
---

lorem ipsum

test test test
`,r=`---
date: 22nd Aug 2026
title: Cybernetic Anthropology
---

lorem ipsum
`,i=`---
date: 17th Aug 2026
title: An Ontology of Computation
---

loremipsumdolorsitamet

test

yo

<div style="color: red;">asd</div>

\`\`\`javascript
console.log("lmao");
\`\`\`

![my img with caption from markdown](landing.jpeg)

- a
- b
- c
  - d
  - e
`,a={OfLanguageTheoryAndModels:0,IntroductionToTypeTheory:1,AnOntologyOfComputation:2,JurisprudenceForTheAgeOfAI:3,CyberneticAnthropology:4},o={[a.OfLanguageTheoryAndModels]:{title:`Of Language, Theory and Models`,filename:`OfLanguageTheoryAndModels`,raw:e},[a.IntroductionToTypeTheory]:{title:`Introduction to Type Theory`,filename:`IntroductionToTypeTheory`,raw:t},[a.AnOntologyOfComputation]:{title:`An Ontology of Computation`,filename:`AnOntologyOfComputation`,raw:i},[a.JurisprudenceForTheAgeOfAI]:{title:`Jurisprudence for the Age of AI`,filename:`JurisprudenceForTheAgeOfAI`,raw:n},[a.CyberneticAnthropology]:{title:`Cybernetic Anthropology`,filename:`CyberneticAnthropology`,raw:r}};export{a as n,o as t};