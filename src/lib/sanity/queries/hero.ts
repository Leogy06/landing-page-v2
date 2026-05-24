// lib/sanity/hero.ts

import { HERO_QUERY } from ".";
import { client } from "../client";


export async function getHero() {
  return client.fetch(HERO_QUERY);
}
