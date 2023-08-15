// _app.js
import '../styles/globals.css';
import Layout from '../components/Layout';
import Head from 'next/head';

function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
    <title>Dev Khandelwal</title>
    <link rel='icon' href='https://avatars.githubusercontent.com/u/122960451?v=4' type='image/x-icon' />
    </Head>
    <Layout>
      <Component {...pageProps} />
    </Layout>
    </>
  );
}

export default MyApp;
