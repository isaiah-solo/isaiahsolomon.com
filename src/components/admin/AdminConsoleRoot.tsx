import React from "react";

import AdminNav from "./AdminNav";
import Card from "../generic/card/Card";
import CardContent from "../generic/card/CardContent";
import Layout from "../generic/layout/Layout";
import RichTextInput from "../generic/input/RichTextInput";
import Section from "../generic/layout/Section";
import Title2 from "../generic/text/Title2";

export default function AdminConsoleRoot(): React.ReactElement {
  return (
    <Layout nav={<AdminNav />} seo={null}>
      <Section
        subtitle="My (Isaiah's) admin panel for editing my site data, etc."
        title="Admin Console">
        <Card>
          <CardContent>
            <Title2>Title editor</Title2>
            <RichTextInput />
          </CardContent>
        </Card>
      </Section>
    </Layout>
  );
};
