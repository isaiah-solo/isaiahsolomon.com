import React, {useState} from "react";
import {StyleSheet, css} from 'aphrodite';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';

import Link from "../generic/Link";
import Nav from "../generic/Nav";
import SmallTitle from "../generic/SmallTitle";
import RouteLink from "../generic/RouteLink";

type BoxSizing = 'border-box';

const styles = StyleSheet.create({
  icon: {
    boxSizing: 'border-box' as BoxSizing,
    height: 22,
    width: 22,
  },
  link: {
    boxSizing: 'border-box' as BoxSizing,
    width: 'fit-content',
  },
  row: {
    boxSizing: 'border-box' as BoxSizing,
    display: 'grid',
    height: 22,
    gridAutoFlow: 'column',
    gridGap: 12,
  },
});

export default function HomeNav(): React.ReactElement {
  const [
    contactMeIsHovered,
    setContactMeIsHovered,
  ] = useState(false);

  return (
    <Nav
      leftContent={
        <div className={css(styles.row)}>
          <RouteLink to="/">
            <SmallTitle>Home</SmallTitle>
          </RouteLink>
          <RouteLink to="/blog">
            <SmallTitle>Blog</SmallTitle>
          </RouteLink>
        </div>
      }
      rightContent={
        <div className={css(styles.row)}>
          <div
            className={css(styles.link)}
            onMouseEnter={(): void => {
              setContactMeIsHovered(true);
            }}
            onMouseLeave={(): void => {
              setContactMeIsHovered(false);
            }}
            role="none">
            <SmallTitle>
              {!contactMeIsHovered ? (
                'Contact Me'
              ) : (
                <Link href="mailto:isaiah.c.solomon@gmail.com">
                  isaiah.c.solomon@gmail.com
                </Link>
              )}
            </SmallTitle>
          </div>
          <Link href="https://www.linkedin.com/in/isaiah-c-solomon/">
            <FontAwesomeIcon className={css(styles.icon)} icon={faLinkedin} />
          </Link>
          <Link href="https://github.com/isaiah-solo">
            <FontAwesomeIcon className={css(styles.icon)} icon={faGithubSquare} />
          </Link>
        </div>
      }
    />
  );
};
