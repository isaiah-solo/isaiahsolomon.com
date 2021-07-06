import React from 'react';
import {useStaticQuery, graphql} from 'gatsby';
import Img from 'gatsby-image';
import {StyleSheet, css} from 'aphrodite';

const styles = StyleSheet.create({
  root: {
    borderRadius: '50%',
    boxSizing: 'border-box',
    height: 300,
    width: 300,
  },
});

export default function WebProfileImage(): React.ReactElement {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: {eq: "isaiah.jpg"}) {
        childImageSharp {
          fluid(maxWidth: 400, maxHeight: 400) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return (
    <Img
      className={css(styles.root)}
      fluid={data.placeholderImage.childImageSharp.fluid}
    />
  );
}
