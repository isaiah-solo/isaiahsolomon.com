import React from 'react';
import {graphql} from 'gatsby';

import Card from '../generic/card/Card';
import CardContent from '../generic/card/CardContent';
import CardFooter from '../generic/card/CardFooter';
import FlatButton from '../generic/button/FlatButton';
import Paragraph from '../generic/text/Paragraph';
import RouteLink from '../generic/text/RouteLink';
import Title2 from '../generic/text/Title2';

export const query = graphql`
  fragment BlogPreviewCard on BlogArticles {
    content
    title
  }
`;

export type BlogPreviewCardNode = Readonly<{
  content: string;
  id: string;
  title: string;
}>;

type Props = Readonly<{
  blogArticle: BlogPreviewCardNode;
  linkText: string;
  path: string;
}>;

export default function BlogPreviewCard({
  blogArticle,
  linkText,
  path,
}: Props): React.ReactElement {
  const {content, title} = blogArticle;

  return (
    <Card>
      <CardContent>
        <Title2>{title}</Title2>
        <Paragraph>{content}</Paragraph>
      </CardContent>
      <CardFooter
        primaryCTA={
          <RouteLink to={path}>
            <FlatButton>{linkText}</FlatButton>
          </RouteLink>
        }
      />
    </Card>
  );
}
