import {css, StyleSheet} from 'aphrodite';
import React from 'react';
import TimelineDot from './TimelineDot';
import TimelineLine from './TimelineLine';

const styles = StyleSheet.create({
  timelineSection: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 40,
    gridTemplateColumns: 'auto 1fr',
  },
  timelineSectionContent: {
    paddingBottom: 64,
  },
  timelineUI: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
    gridTemplateRows: 'auto 1fr',
    paddingTop: 16,
  },
});

type Props = Readonly<{
  children: React.ReactNodeArray;
}>;

export default function Timeline({children}: Props): React.ReactElement {
  const timelineElements = children.map((child, index) => (
    <div className={css(styles.timelineSection)} key={index}>
      <div className={css(styles.timelineUI)}>
        <TimelineDot />
        <TimelineLine />
      </div>
      <div className={css(styles.timelineSectionContent)}>{child}</div>
    </div>
  ));

  return <div>{timelineElements}</div>;
}
