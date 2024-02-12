import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: 'ym9xe25l',
  dataset: 'production',
  apiVersion: '2022-02-12',
  useCdn: true,
  token: 'skELDGBJFQRFZgyNwsBLLs8CtELFpzYWq7HQEsYHz49uJ2yJNP5d4Pyc7RsXLKSzHySXypa59gjpvzjheB18pCWsjyGF6d2u1QQKEXSyGozxxvTvty4d5C51TumkHuYlHcdMikVYUrP8sO77Acsntwp6PdbWcdixi0rIUMPEISzajXF8HXpq',
  ignoreBrowserTokenWarning: true,
});

const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);