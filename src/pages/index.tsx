import React from 'react'
import {StyleSheet} from 'aphrodite'

import Footer from '../components/generic/layout/Footer'
import Layout from '../components/generic/layout/Layout'
import Section from '../components/generic/layout/Section'

import Paragraph from '../components/generic/text/Paragraph'

import HomeCover from '../components/home/HomeCover'
import HomeNav from '../components/home/HomeNav'
import HomeScrollIndicator from '../components/home/HomeScrollIndicator'
import Timeline from '../components/home/Timeline'

import {useMobileProvider} from '../contexts/MobileContext'
import TimelineSection from '../components/home/TimelineSection'

const styles = StyleSheet.create({
  indicatorMargin: {
    boxSizing: 'border-box',
    marginBottom: 20,
  },
})

export default function HomePage(): React.ReactElement {
  const MobileProvider = useMobileProvider()

  return (
    <MobileProvider>
      <Layout
        footer={
          <Section>
            <Footer />
          </Section>
        }
        nav={<HomeNav />}
        seo="Home">
        <Section>
          <HomeCover />
        </Section>
        <HomeScrollIndicator styleOverride={styles.indicatorMargin} />
        <Section
          subtitle="Below are my various professional work experiences and education! Please have a look."
          title="Experience">
          <Timeline>
            <TimelineSection
              subtitle="Software Engineer &middot; Jun 2018 - Present"
              title="Facebook">
              <Paragraph>
                Led development of large-scale projects from beginning to
                go-live
                <br />
                - Internal application redesign
                <br />- New smart global keyword-search experience within
                product
              </Paragraph>
              <Paragraph>
                Initially started out as a contractor, converting to full-time
                within a quick 4 months, in which I successfully built our
                project's email client end-to-end, handling complex cases and
                functionalities.
              </Paragraph>
            </TimelineSection>
            <TimelineSection
              subtitle="Software Engineer &middot; Mar 2018 - Jun 2018"
              title="Williams-Sonoma">
              <Paragraph>
                Managed the enterprise-scale analytics tagging codebase existing
                in all of the six sites under Williams-Sonoma.
              </Paragraph>
              <Paragraph>
                Introduced site metric tracking and improved site speed by
                refactoring inefficient code.
              </Paragraph>
            </TimelineSection>
            <TimelineSection
              subtitle="Software Engineer &middot; Nov 2016 - Mar 2018"
              title="X2CRM | X2Engine">
              <Paragraph>
                One of the core developers in landing one of our company's first
                big enterprise customers.
              </Paragraph>
              <Paragraph>
                Built our marketing landing page designer from scratch and
                managed our complex marketing automation codebase.
              </Paragraph>
              <Paragraph>
                Handled the production process for new versions of the
                application and developed various internal scripts to automate
                and optimize productivity.
              </Paragraph>
            </TimelineSection>
            <TimelineSection
              subtitle="Student &middot; Sep 2013 - Jun 2017"
              title="College | University of California, Santa Cruz">
              <Paragraph>Graduated with a B.S. in Computer Science.</Paragraph>
              <Paragraph>
                Led the cultural dance troupe in our Filipino Student
                Association; hosted our biggest event with 400+ attendees.
              </Paragraph>
              <Paragraph>
                Ran the Alpha Phi Omega website as webmaster and active member.
              </Paragraph>
            </TimelineSection>
            <TimelineSection
              subtitle="Student &middot; Sep 2009 - Jun 2013"
              title="High School | Concord High School">
              <Paragraph>Graduated with a 3.3 GPA.</Paragraph>
            </TimelineSection>
          </Timeline>
        </Section>
      </Layout>
    </MobileProvider>
  )
}
