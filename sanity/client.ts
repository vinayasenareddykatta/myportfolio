import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "32xud2oy",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});