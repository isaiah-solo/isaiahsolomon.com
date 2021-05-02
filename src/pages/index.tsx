import React from "react";
import {StyleSheet, css} from 'aphrodite';

import Footer from '../components/generic/Footer';
import Layout from "../components/generic/Layout";
import ProfileImage from "../components/generic/ProfileImage";
import Section from "../components/generic/Section";

import Link from '../components/generic/text/Link';
import Paragraph from "../components/generic/text/Paragraph";
import SmallTitle from "../components/generic/text/SmallTitle";
import Title1 from "../components/generic/text/Title1";
import Title2 from "../components/generic/text/Title2";

import HomeNav from '../components/home/HomeNav';
import Timeline from "../components/home/Timeline";

const styles = StyleSheet.create({
  body: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'grid',
    flexGrow: 1,
    gridGap: 20,
    gridTemplateColumns: '1fr auto',
    width: '100%',
  },
  text: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  titleSection: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    height: 'calc(100vh - 136px)',
    width: '100%',
  },
});

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
        <div className={css(styles.titleSection)}>
          <div className={css(styles.body)}>
            <div className={css(styles.text)}>
              <Title1>Isaiah Solomon</Title1>
              <Paragraph>
                Hey, my name is Isaiah. I am a software developer and I like to build cool things.
              </Paragraph>
            </div>
            <ProfileImage />
          </div>
        </div>
      </Section>
      <Section title="Work Experience">
        <Timeline>
          <div>
            <Title2>Facebook</Title2>
            <SmallTitle>Software Engineer &middot; Jun 2018 - Present</SmallTitle>
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
            <SmallTitle>Software Engineer &middot; Mar 2018 - Jun 2018</SmallTitle>
            <Paragraph>
              - Managed the enterprise-scale analytics tagging codebase existing in all of the six sites under Williams-Sonoma.<br />
              - Introduced site metric tracking and improved site speed by refactoring inefficient code.
            </Paragraph>
          </div>
          <div>
            <Title2>X2CRM | X2Engine</Title2>
            <SmallTitle>Software Engineer &middot; Nov 2016 - Mar 2018</SmallTitle>
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
