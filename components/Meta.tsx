import Head from "next/head";
import { FC } from "react";

const Meta: FC = () => (
  <Head>
    <meta name="viewport" content="width=device-width,initial-scale=1" />

    {/* Theme Color for Chrome, Firefox OS and Opera */}
    <meta name="theme-color" content="#ff0a78" />

    {/* Control the behavior of search engine crawling and indexing */}
    <meta name="robots" content="index,follow" />

    {/* Short description of your document's subject */}
    <meta name="subject" content="Rômulo Silva's portfolio" />

    {/* Gives a general age rating based on the document's content */}
    <meta name="rating" content="General" />

    <meta name="Author" content="Rômulo Silva" />
    <meta
      name="description"
      content="A passionate full-stack developer focused on creating interactive, accessible and responsive websites"
      key="description"
    />
  </Head>
);

export default Meta;
