import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "1wxkppm4",
  dataset: "production",
  useCdn: true, // set to `true` to fetch from edge cache
  apiVersion: "2023-07-19",
  token:
    "skPfCwxjTHJ4wEOXzDkyYFed5bxNpQ1SwRlKNSNvShOVaGOAR5tHzymFMTsx43stqGjNUHe3q9VYI1rZfNlCkLaCMZc8oVYTMymclj3mpdtLW0CtOEuNxgF0SZN9g55fdniwD7RhaNbIkitRJ5uoeJgs2lfOkEhb36xloalYpEqdfxVtl0Wj",
});
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);
