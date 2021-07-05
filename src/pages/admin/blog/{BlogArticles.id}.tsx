import React from "react";
import {graphql} from "gatsby";

import Layout from "../../../components/generic/layout/Layout";
import Section from "../../../components/generic/layout/Section";
import Card from "../../../components/generic/card/Card";
import CardContent from "../../../components/generic/card/CardContent";
import Title2TextInput from "../../../components/generic/input/Title2TextInput";
import RichTextInput from "../../../components/generic/input/RichTextInput";
import CardFormFooter from "../../../components/generic/card/CardFormFooter";
import SubmitButton from "../../../components/generic/button/SubmitButton";
import AdminNav from "../../../components/admin/AdminNav";
import {useAdminSignInProvider} from "../../../contexts/AdminSignInContext";

export const query = graphql`
  query($id: String!) {
    blogArticles(id: {eq: $id}) {
      content
      title
    }
  }
`;

export default function BlogArticlePage({data}): React.ReactElement {
  const AdminSignInProvider = useAdminSignInProvider();

  const {content, title} = data.blogArticles;

  return (
    <AdminSignInProvider>
      <Layout
        nav={<AdminNav />}
        seo="Admin">
        <Section
          subtitle={
            `This is the editing page for this blog "${title}"'s ` +
            `data. Use the form below to edit.`
          }
          title={`Editing blog "${title}"`}>
          <Card>
            <CardContent>
              <Title2TextInput
                defaultText={title}
                label="Title"
              />
              <RichTextInput
                defaultText={content}
                label="Content"
              />
            </CardContent>
            <CardFormFooter
              primaryCTA={<SubmitButton>Submit</SubmitButton>}
            />
          </Card>
        </Section>
      </Layout>
    </AdminSignInProvider>
  );
}
