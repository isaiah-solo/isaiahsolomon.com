import React from "react";

import AdminNav from "./AdminNav";
import Card from "../generic/card/Card";
import CardContent from "../generic/card/CardContent";
import Layout from "../generic/layout/Layout";
import RichTextInput from "../generic/input/RichTextInput";
import Section from "../generic/layout/Section";

export default function AdminConsoleRoot(): React.ReactElement {
  return (
    <Layout nav={<AdminNav />} seo={null}>
      <Section>
        <Card>
          <CardContent>
            <RichTextInput />
          </CardContent>
        </Card>
      </Section>
    </Layout>
  );
};
