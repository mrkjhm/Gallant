import { sanity } from "./sanity";

export async function getPosts() {
  return sanity.fetch(`
    *[_type == "post]{
      title,
      slug,
      image,
      body
    }
    `);
}
