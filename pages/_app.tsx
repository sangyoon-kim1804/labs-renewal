import '#/styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import type { AppProps } from 'next/app'
import Layout from "#/components/ui/Layout";
import { DefaultSeo } from 'next-seo';
import SEO from '#/config/seo.config';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <DefaultSeo {...SEO} />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  )
}
