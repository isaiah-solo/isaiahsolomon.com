import React from "react";
import {StyleSheet, css} from 'aphrodite';

import TimelineDot from "./TimelineDot";
import TimelineLine from "./TimelineLine";

const styles = StyleSheet.create({
  timelineSection: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 40,
    gridTemplateColumns: 'auto 1fr',
  },
  timelineSectionContent: {
    paddingBottom: 16,
  },
  timelineUI: {
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 16,
    gridTemplateRows: 'auto 1fr',
    paddingTop: 16,
  },
});

type Props = {
  children: React.ReactNodeArray,
};

export default function Timeline({
  children,
}: Props): React.ReactElement {
  const timelineElements = children.map(child => (
    <div className={css(styles.timelineSection)}>
      <div className={css(styles.timelineUI)}>
        <TimelineDot />
        <TimelineLine />
      </div>
      <div className={css(styles.timelineSectionContent)}>
        {child}
      </div>
    </div>
  ));

  return (
    <div>
      {timelineElements}
    </div>
  );
};
