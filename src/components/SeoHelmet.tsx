import { Helmet } from "react-helmet-async";

interface SeoHelmetProps {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  type?: string;
}

const SeoHelmet = ({
  title,
  description,
  canonical,
  ogImage = "https://ndcconseils.com/og-image.png",
  type = "website",
}: SeoHelmetProps) => {
  const fullTitle = `${title} | NDC CONSEILS`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={canonical} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={canonical} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:type" content={type} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
};

export default SeoHelmet;
