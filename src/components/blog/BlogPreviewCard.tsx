import React from "react";

import Card from "../generic/card/Card";
import CardContent from "../generic/card/CardContent";
import CardFooter from "../generic/card/CardFooter";
import FlatButton from "../generic/button/FlatButton";
import Paragraph from "../generic/text/Paragraph";
import RouteLink from "../generic/text/RouteLink";
import SubTitle from "../generic/text/SubTitle";
import Title2 from "../generic/text/Title2";

type Props = Readonly<{
  content: string,
  path: string,
  title: string,
}>

export default function BlogPreviewCard({
  content,
  path,
  title,
}: Props): React.ReactElement {
  return (
    <Card>
      <CardContent>
        <Title2>{title}</Title2>
        <Paragraph>{content}</Paragraph>
      </CardContent>
      <CardFooter
        primaryCTA={(
          <RouteLink to={path}>
            <FlatButton>GO TO FULL ARTICLE</FlatButton>
          </RouteLink>
        )}
      />
    </Card>
  );
};
