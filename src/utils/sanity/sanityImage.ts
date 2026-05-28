import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url";
import { client } from "@/lib/sanity/client";

const { projectId, dataset } = client.config();

export function urlFor(source: SanityImageSource) {
  if (!projectId || !dataset) {
    throw new Error("Sanity projectId or dataset is not configured.");
  }
  return createImageUrlBuilder({ projectId, dataset }).image(source)
}
