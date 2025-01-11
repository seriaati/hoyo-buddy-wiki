import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { useEffect } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    if (window.location.pathname !== '/vi/docs/intro') {
      window.location.href = '/vi/docs/intro';
    }
  }, []);
  return null;
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title} Wiki`}
      description="Wiki for Hoyo Buddy Bot">
      <HomepageHeader />
    </Layout>
    
  );
}
