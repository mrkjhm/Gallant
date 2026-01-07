import { createClient } from "@sanity/client";

export const sanity = createClient({
  projectId: "2ic82ju3",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true, // faster
});

export interface Blog {
  _id: string;
  title: string;
  slug: { current: string };
  image: { assets: { _id: string; url: string } }[];
  body: string;
}
