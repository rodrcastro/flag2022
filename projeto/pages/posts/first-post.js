import Head from 'next/head';
import Image from 'next/image';

import Layout from '../../components/layout/layout';

export default function FirstPost() {
  return (
    <Layout>
      <Head>
        <title>My first post</title>
      </Head>
      <Image
        src='/public/images/vercel.png'
        height={500}
        width={500}
        alt='Profile Picture'
      />

      <h1>Hello first post</h1>
    </Layout>
  );
}
