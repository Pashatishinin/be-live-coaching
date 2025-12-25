import { groq } from "next-sanity";
import { client } from "./client";
import { HeroData } from "./types";

export async function getHero(): Promise<HeroData[]> {
  const query = groq`*[_type == "hero"]{
    title_ua,
    title_en,
    title_de,
    img
  }`;
  return await client.fetch(query);
}
