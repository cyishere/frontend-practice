import Head from "next/head";

interface Props {
  title: string;
  description?: string;
  pathname: string;
}

const SEO: React.FC<Props> = ({ title, description, pathname }) => {
  const domainUrl = "https://practice.cyishere.dev";

  const content = description
    ? description
    : "Become a better frontend developer by recreating";
  const canonical = pathname !== "/" ? `${domainUrl}${pathname}` : domainUrl;

  return (
    <Head>
      <meta charSet="UTF-8" />
      <title>{title} | Projects of Frontend Practice</title>
      <meta name="description" content={content} />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="canonical" href={canonical} />
    </Head>
  );
};

export default SEO;
