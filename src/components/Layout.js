import React, {useState} from "react"
import PropTypes from "prop-types"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Link from "./Link"
import Nav from "./Nav"
import SmallTitle from "./SmallTitle"

const styles = {
  content: {
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
    height: 'calc(100vh - 78px)',
    margin: 'auto',
    maxWidth: 960,
    padding: 20,
  },
  footer: {
    boxSizing: 'border-box',
    width: '100%',
  },
  footerLink: {
    boxSizing: 'border-box',
    display: 'inline',
  },
  icon: {
    boxSizing: 'border-box',
    height: 22,
    width: 22,
  },
  icons: {
    boxSizing: 'border-box',
    display: 'grid',
    height: 22,
    gridAutoFlow: 'column',
    gridGap: 12,
  },
  link: {
    boxSizing: 'border-box',
    width: 100,
  },
  main: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'flex',
    flexDirection: 'row',
    flexGrow: 1,
    width: '100%',
  },
};

const Layout = ({
  children,
}) => {
  const [contactMeIsHovered, setContactMeIsHovered] = useState(false);
  return (
    <>
      <Nav
        leftContent={
          <div
            onMouseEnter={() => {
              setContactMeIsHovered(true)
            }}
            onMouseLeave={() => {
              setContactMeIsHovered(false)
            }}
            style={styles.link}>
            <SmallTitle>
              {!contactMeIsHovered ? (
                'Contact Me'
              ) : (
                <Link href="mailto:isaiah.c.solomon@gmail.com">
                  {'isaiah.c.solomon@gmail.com'}
                </Link>
              )}
            </SmallTitle>
          </div>
        }
        rightContent={
          <div style={styles.icons}>
            <Link href="https://www.linkedin.com/in/isaiah-c-solomon/">
              <FontAwesomeIcon icon={faLinkedin} style={styles.icon} />
            </Link>
            <Link href="https://github.com/isaiah-solo">
              <FontAwesomeIcon icon={faGithubSquare} style={styles.icon} />
            </Link>
          </div>
        }
      />
      <div style={styles.content}>
        <main style={styles.main}>{children}</main>
        <footer style={styles.footer}>
          © {new Date().getFullYear()} Powered by
          {' '}
          <Link cstyle={styles.footerLink} href="https://www.gatsbyjs.org">Gatsby</Link>
        </footer>
      </div>
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
