import Head from 'next/head';

const DEFAULT_DESC = 'Exult it Solution is leading company provides IT services and solutions, we expert in web design and development, software development, cloud computing and SEO services.';
const KEYWORDS = 'Website Development, Software Development, Application Development, Mobile App Development, E Commerce Web Development, Search Engine Optimization, CRM Development, Cloud Computing, SEO, Data and AI, ERP System Development';

export default function Seo({ title, description = DEFAULT_DESC }) {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={KEYWORDS} />
      <meta name="author" content="Exult IT Solution" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
    </Head>
  );
}
