import { groq } from "next-sanity";
import { client } from "./client";
import { HeroData, ProblemData } from "./types";

export async function getHero(): Promise<HeroData> {
  const query = groq`*[_type == "hero"][0]{
    title_ua,
    title_en,
    title_de,
    img
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}

export async function getProblems(): Promise<ProblemData[]> {
  const query = groq`*[_type == "problems"]{
    problemIcon,
      arrowIcon,
      problem_content_ua {
    title,
    desc
  },
      solution_content_ua {
    title,
    desc
  },
      problem_content_en {
    title,
    desc
  },
      solution_content_en {
    title,
    desc
  },
      problem_content_de {
    title,
    desc
  },
      solution_content_de {
    title,
    desc
  }
  }`;
  return await client.fetch(query, {}, { next: { revalidate: 0 } });
}
