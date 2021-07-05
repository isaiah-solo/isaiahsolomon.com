import React from "react";

import AdminNav from "./AdminNav";
import Card from "../generic/card/Card";
import CardContent from "../generic/card/CardContent";
import CardFormFooter from "../generic/card/CardFormFooter";
import Layout from "../generic/layout/Layout";
import RichTextInput from "../generic/input/RichTextInput";
import Section from "../generic/layout/Section";
import SubmitButton from "../generic/button/SubmitButton";
import Title2TextInput from "../generic/input/Title2TextInput";

export default function AdminConsoleRoot(): React.ReactElement {
  return (
    <Layout nav={<AdminNav />} seo={null}>
      <Section
        subtitle="My (Isaiah's) admin panel for editing my site data, etc."
        title="Admin Console">
        <Card>
          <CardContent>
            <Title2TextInput
              defaultText="Test title"
              label="Title"
            />
            <RichTextInput
              label="Content"
            />
          </CardContent>
          <CardFormFooter
            primaryCTA={<SubmitButton>Submit</SubmitButton>}
          />
        </Card>
      </Section>
    </Layout>
  );
};
