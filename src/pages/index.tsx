import React from "react";

import Footer from '../components/generic/layout/Footer';
import Layout from "../components/generic/layout/Layout";
import Section from "../components/generic/layout/Section";

import Link from '../components/generic/text/Link';
import Paragraph from "../components/generic/text/Paragraph";
import SubTitle from "../components/generic/text/SubTitle";
import Title2 from "../components/generic/text/Title2";

import HomeCover from "../components/home/HomeCover";
import HomeNav from '../components/home/HomeNav';
import HomeScrollIndicator from "../components/home/HomeScrollIndicator";
import Timeline from "../components/home/Timeline";

export default function HomePage(): React.ReactElement {
  return (
    <Layout
      footer={
        <Section>
          <Footer>
            © {new Date().getFullYear()} Powered by
            {' '}
            <Link href="https://www.gatsbyjs.org">
              Gatsby
          </Link>
          </Footer>
        </Section>
      }
      nav={<HomeNav />}
      seo="Home">
      <Section>
        <HomeCover />
      </Section>
      <HomeScrollIndicator />
      <Section title="Work Experience">
        <Timeline>
          <div>
            <Title2>Facebook</Title2>
            <SubTitle>Software Engineer &middot; Jun 2018 - Present</SubTitle>
            <Paragraph>
              Led development of large-scale projects from beginning to go-live<br />
              - Internal application redesign<br />
              - New smart global keyword-search experience within product<br />
              <br />
              Initially started out as a contractor, converting to full-time within a quick 4 months, in which I successfully built our project's email client end-to-end, handling complex cases and functionalities
            </Paragraph>
          </div>
          <div>
            <Title2>Williams-Sonoma</Title2>
            <SubTitle>Software Engineer &middot; Mar 2018 - Jun 2018</SubTitle>
            <Paragraph>
              - Managed the enterprise-scale analytics tagging codebase existing in all of the six sites under Williams-Sonoma.<br />
              - Introduced site metric tracking and improved site speed by refactoring inefficient code.
            </Paragraph>
          </div>
          <div>
            <Title2>X2CRM | X2Engine</Title2>
            <SubTitle>Software Engineer &middot; Nov 2016 - Mar 2018</SubTitle>
            <Paragraph>
              - One of the core developers in landing one of our company's first big enterprise customers.<br />
              - Built our marketing landing page designer from scratch and managed our complex marketing automation codebase.<br />
              - Handled the production process for new versions of the application and developed various internal scripts to automate and optimize productivity.
            </Paragraph>
          </div>
        </Timeline>
      </Section>
    </Layout>
  );
};
