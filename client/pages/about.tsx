import React, { useState } from 'react';
import Link from 'next/link';
import Layout from '../components/Layout';
import Title from './style';

const AboutPage: React.FunctionComponent = () => {
  const [count] = useState(0);
  return (
    <Layout title="About | Next.js + TypeScript Example">
      <Title />
      <p>This is the about page</p>
      <div>{count}</div>
      <p>
        <Link href="/">
          <a href="/">Go home</a>
        </Link>
      </p>
    </Layout>
  );
};

export default AboutPage;
