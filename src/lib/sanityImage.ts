import { createImageUrlBuilder } from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url";
import { sanity } from "./sanity";

const builder = createImageUrlBuilder(sanity);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}
