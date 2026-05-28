import { createClient } from "next-sanity";
import{ createImageUrlBuilder } from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_PROJ_ID!,
  dataset: process.env.NEXT_PUBLIC_DATASET!,
  apiVersion: "2026-05-15",
  useCdn: process.env.NODE_ENV === "production", // ✅ CDN in prod, live in dev
});

const builder = createImageUrlBuilder(client);

