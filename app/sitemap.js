const SITE_URL = "https://www.construccionesciviles.com";

export default function sitemap() {
  return [
    { url: SITE_URL, changeFrequency: "monthly", priority: 1 },
    { url: `${SITE_URL}/privacidad`, changeFrequency: "yearly", priority: 0.3 },
    { url: `${SITE_URL}/terminos`, changeFrequency: "yearly", priority: 0.3 },
  ];
}
