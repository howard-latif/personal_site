import md_OfLanguageTheoryAndModels from "../../markdown/OfLanguageTheoryAndModels.md?raw";
import md_IntroductionToTypeTheory from "../../markdown/IntroductionToTypeTheory.md?raw";
import md_JurisprudenceForTheAgeOfAI from "../../markdown/JurisprudenceForTheAgeOfAI.md?raw";
import md_CyberneticAnthropology from "../../markdown/CyberneticAnthropology.md?raw";
import md_AnOntologyOfComputation from "../../markdown/AnOntologyOfComputation.md?raw";

export const PostId = {
  OfLanguageTheoryAndModels: 0,
  IntroductionToTypeTheory: 1,
  AnOntologyOfComputation: 2,
  JurisprudenceForTheAgeOfAI: 3,
  CyberneticAnthropology: 4,
};

export type PostId = (typeof PostId)[keyof typeof PostId];

export type PostDataEntry = {
  title: string;
  filename: string;
  raw: string;
};

export type PostData = Record<PostId, PostDataEntry>;

export const POST_DATA: PostData = {
  [PostId.OfLanguageTheoryAndModels]: {
    title: "Of Language, Theory and Models",
    filename: "OfLanguageTheoryAndModels",
    raw: md_OfLanguageTheoryAndModels,
  },
  [PostId.IntroductionToTypeTheory]: {
    title: "Introduction to Type Theory",
    filename: "IntroductionToTypeTheory",
    raw: md_IntroductionToTypeTheory,
  },
  [PostId.AnOntologyOfComputation]: {
    title: "An Ontology of Computation",
    filename: "AnOntologyOfComputation",
    raw: md_AnOntologyOfComputation,
  },
  [PostId.JurisprudenceForTheAgeOfAI]: {
    title: "Jurisprudence for the Age of AI",
    filename: "JurisprudenceForTheAgeOfAI",
    raw: md_JurisprudenceForTheAgeOfAI,
  },
  [PostId.CyberneticAnthropology]: {
    title: "Cybernetic Anthropology",
    filename: "CyberneticAnthropology",
    raw: md_CyberneticAnthropology,
  },
};
