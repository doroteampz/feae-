import { Helmet } from "react-helmet-async";

const SITE_URL = "https://feae-aragon.lovable.app";

interface SeoProps {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article" | "event";
  jsonLd?: Record<string, unknown> | Record<string, unknown>[];
}

export const Seo = ({ title, description, path, type = "website", jsonLd }: SeoProps) => {
  const url = `${SITE_URL}${path}`;
  const ogType = type === "event" ? "website" : type;
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={ogType} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      {jsonLd && (
        <script type="application/ld+json">{JSON.stringify(jsonLd)}</script>
      )}
    </Helmet>
  );
};
