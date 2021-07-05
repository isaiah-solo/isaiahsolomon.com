import React from "react";

import AdminNav from "./AdminNav";
import Card from "../generic/card/Card";
import CardContent from "../generic/card/CardContent";
import Layout from "../generic/layout/Layout";
import Section from "../generic/layout/Section";

export default function AdminConsoleRoot(): React.ReactElement {
  return (
    <Layout nav={<AdminNav />} seo={null}>
      <Section
        subtitle="My (Isaiah's) admin panel for editing my site data, etc."
        title="Admin Console">
        <Card>
          <CardContent>
            <div>TBA!</div>
          </CardContent>
        </Card>
      </Section>
    </Layout>
  );
};
