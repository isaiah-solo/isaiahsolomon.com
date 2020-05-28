import React from "react";
import {useStaticQuery, graphql} from "gatsby";
import Img from "gatsby-image";

const ProfileImage = (): React.ReactElement => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "isaiah.jpg" }) {
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
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{borderRadius: '50%'}}
    />
  );
};

export default ProfileImage;
