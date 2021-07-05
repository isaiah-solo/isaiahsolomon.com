import React from "react";
import {graphql} from "gatsby";

import Card from "../generic/card/Card";
import CardContent from "../generic/card/CardContent";
import CardFooter from "../generic/card/CardFooter";
import FlatButton from "../generic/button/FlatButton";
import Paragraph from "../generic/text/Paragraph";
import RouteLink from "../generic/text/RouteLink";
import Title2 from "../generic/text/Title2";

export const query = graphql`
  fragment BlogPreviewCard on BlogArticles {
    blogArticlePath: gatsbyPath(filePath: "/blog/{BlogArticles.id}")
    content
    title
  }
`

export type BlogPreviewCardNode = Readonly<{
  blogArticlePath: string,
  content: string,
  id: string,
  title: string,
}>;

type Props = Readonly<{
  blogArticle: BlogPreviewCardNode,
}>

export default function BlogPreviewCard({
  blogArticle
}: Props): React.ReactElement {
  const {blogArticlePath, content, title} = blogArticle;

  return (
    <Card>
      <CardContent>
        <Title2>{title}</Title2>
        <Paragraph>{content}</Paragraph>
      </CardContent>
      <CardFooter
        primaryCTA={(
          <RouteLink to={blogArticlePath}>
            <FlatButton>GO TO FULL ARTICLE</FlatButton>
          </RouteLink>
        )}
      />
    </Card>
  );
};
