import {graphql} from 'gatsby';
import React, {useState} from 'react';
import {useDocumentData} from 'react-firebase-hooks/firestore';
import AdminNav from '../../../components/admin/AdminNav';
import SubmitButton from '../../../components/generic/button/SubmitButton';
import Card from '../../../components/generic/card/Card';
import CardContent from '../../../components/generic/card/CardContent';
import CardFormFooter from '../../../components/generic/card/CardFormFooter';
import MarkdownInput from '../../../components/generic/input/MarkdownInput';
import Title2TextInput from '../../../components/generic/input/Title2TextInput';
import Layout from '../../../components/generic/layout/Layout';
import Section from '../../../components/generic/layout/Section';
import PageSkeleton from '../../../components/generic/skeleton/PageSkeleton';
import {AdminSignInProvider} from '../../../contexts/AdminSignInContext';
import useFirestore from '../../../hooks/useFirestore';
import useFirestoreCurrentDate, {
  FirestoreTimestamp,
} from '../../../hooks/useFirestoreCurrentDate';
import useFirestoreDocumentMutation from '../../../hooks/useFirestoreDocumentMutation';

export const query = graphql`
  query($id: String!) {
    blogArticles(id: {eq: $id}) {
      content
      id
      lastUpdatedDate: last_updated_date
      title
    }
  }
`;

type LiveBlogArticleData = Readonly<{
  last_updated_date: FirestoreTimestamp;
}>;

export default function BlogArticlePage({data}): React.ReactElement {
  const {content, id, lastUpdatedDate, title} = data.blogArticles;

  const [newTitle, setNewTitle] = useState<string>(title);
  const [newContent, setNewContent] = useState<string>(content);

  const currentDate = useFirestoreCurrentDate();

  const [commitMutation, isMutationCommitting] = useFirestoreDocumentMutation(
    'blog_articles',
    id,
  );

  const firestore = useFirestore();
  const [liveData = null, isLiveDataLoading, error = null] = useDocumentData<
    LiveBlogArticleData
  >(firestore.doc(`blog_articles/${id}`));

  const {last_updated_date: liveLastUpdatedDateValue = null} = liveData ?? {};
  const liveLastUpdatedDate = Math.floor(
    new Date(liveLastUpdatedDateValue as any).getTime() / 1000,
  );

  const isBlogUpToDate = lastUpdatedDate >= liveLastUpdatedDate;

  if (error !== null) {
    <div>Error! {JSON.stringify(error)}</div>;
  }

  if (isMutationCommitting || isLiveDataLoading || liveData === null) {
    return <PageSkeleton />;
  }

  if (!isBlogUpToDate) {
    return (
      <AdminSignInProvider>
        <Layout nav={<AdminNav />} seo="Admin">
          <Section
            subtitle="Please let your blog updates propagate for ~5 mins"
            title="Your blog is on its way!"
          />
        </Layout>
      </AdminSignInProvider>
    );
  }

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
                      last_updated_date: currentDate,
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
