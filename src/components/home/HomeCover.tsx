import React from 'react';
import {StyleSheet, css} from 'aphrodite';

import Title1 from '../generic/text/Title1';
import Paragraph from '../generic/text/Paragraph';

import MobileProfileImage from '../generic/image/MobileProfileImage';
import WebProfileImage from '../generic/image/WebProfileImage';

import {useIsMobile} from '../../contexts/MobileContext';

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    height: 'calc(100vh - 156px)',
    width: '100%',
  },
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
});

const mobileStyles = StyleSheet.create({
  body: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'grid',
    flexGrow: 1,
    gridGap: 20,
    gridAutoFlow: 'row',
    width: '100%',
  },
});

export default function HomeCover(): React.ReactElement {
  const isMobile = useIsMobile();

  if (isMobile) {
    return (
      <div className={css(styles.root)}>
        <div className={css(mobileStyles.body)}>
          <MobileProfileImage />
          <div>
            <Title1>Isaiah Solomon</Title1>
            <Paragraph>
              Hey, my name is Isaiah. I am a software developer and I like to
              build cool things.
            </Paragraph>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.body)}>
        <div className={css(styles.text)}>
          <Title1>Isaiah Solomon</Title1>
          <Paragraph>
            Hey, my name is Isaiah. I am a software developer and I like to
            build cool things.
          </Paragraph>
        </div>
        <WebProfileImage />
      </div>
    </div>
  );
}
