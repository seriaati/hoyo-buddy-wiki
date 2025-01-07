import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';

import { useEffect } from 'react';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  useEffect(() => {
    window.location.href = 'https://seria.is-a.dev/hb-site/index-zh-tw.html';
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
