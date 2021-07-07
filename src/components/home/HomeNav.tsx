import {faGithubSquare, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {css, StyleSheet} from 'aphrodite';
import React, {useState} from 'react';
import Nav from '../generic/layout/Nav';
import Link from '../generic/text/Link';
import RouteLink from '../generic/text/RouteLink';
import SubTitle from '../generic/text/SubTitle';

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
  const [contactMeIsHovered, setContactMeIsHovered] = useState(false);

  return (
    <Nav
      leftContent={
        <div className={css(styles.row)}>
          <RouteLink to="/">
            <SubTitle>Home</SubTitle>
          </RouteLink>
          <RouteLink to="/blog">
            <SubTitle>Blog</SubTitle>
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
            <SubTitle>
              {!contactMeIsHovered ? (
                'Contact Me'
              ) : (
                <Link href="mailto:isaiah.c.solomon@gmail.com">
                  isaiah.c.solomon@gmail.com
                </Link>
              )}
            </SubTitle>
          </div>
          <Link href="https://www.linkedin.com/in/isaiah-c-solomon/">
            <FontAwesomeIcon className={css(styles.icon)} icon={faLinkedin} />
          </Link>
          <Link href="https://github.com/isaiah-solo">
            <FontAwesomeIcon
              className={css(styles.icon)}
              icon={faGithubSquare}
            />
          </Link>
        </div>
      }
    />
  );
}
