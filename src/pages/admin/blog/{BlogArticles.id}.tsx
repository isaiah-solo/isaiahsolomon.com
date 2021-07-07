import {graphql} from 'gatsby';
import React, {useState} from 'react';
import AdminNav from '../../../components/admin/AdminNav';
import SubmitButton from '../../../components/generic/button/SubmitButton';
import Card from '../../../components/generic/card/Card';
import CardContent from '../../../components/generic/card/CardContent';
import CardFormFooter from '../../../components/generic/card/CardFormFooter';
import MarkdownInput from '../../../components/generic/input/MarkdownInput';
import Title2TextInput from '../../../components/generic/input/Title2TextInput';
import Layout from '../../../components/generic/layout/Layout';
import Section from '../../../components/generic/layout/Section';
import {AdminSignInProvider} from '../../../contexts/AdminSignInContext';
import useFirestoreDocumentMutation from '../../../hooks/useFirestoreDocumentMutation';

export const query = graphql`
  query($id: String!) {
    blogArticles(id: {eq: $id}) {
      content
      id
      title
    }
  }
`;

export default function BlogArticlePage({data}): React.ReactElement {
  const {content, id, title} = data.blogArticles;

  const [newTitle, setNewTitle] = useState<string>(title);
  const [newContent, setNewContent] = useState<string>(content);

  const [commitMutation, _isLoading] = useFirestoreDocumentMutation(
    'blog_articles',
    id,
  );

  return (
    <AdminSignInProvider>
      <Layout nav={<AdminNav />} seo="Admin">
        <Section
          subtitle={
            `This is the editing page for this blog "${title}"'s ` +
            `data. Use the form below to edit.`
          }
          title={`Editing blog "${title}"`}>
          <Card>
            <CardContent>
              <Title2TextInput
                label="Title"
                setText={setNewTitle}
                text={newTitle}
              />
              <MarkdownInput
                defaultText={newContent}
                label="Content"
                onTextChange={setNewContent}
              />
            </CardContent>
            <CardFormFooter
              primaryCTA={
                <SubmitButton
                  onClick={async () =>
                    commitMutation(prevData => ({
                      ...prevData,
                      content: newContent,
                      title: newTitle,
                    }))
                  }>
                  Submit
                </SubmitButton>
              }
            />
          </Card>
        </Section>
      </Layout>
    </AdminSignInProvider>
  );
}
