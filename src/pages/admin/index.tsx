import React from 'react';
import AdminNav from '../../components/admin/AdminNav';
import Card from '../../components/generic/card/Card';
import CardContent from '../../components/generic/card/CardContent';
import Layout from '../../components/generic/layout/Layout';
import Section from '../../components/generic/layout/Section';
import {AdminSignInProvider} from '../../contexts/AdminSignInContext';

export default function AdminPage(): React.ReactElement {
  return (
    <AdminSignInProvider>
      <Layout nav={<AdminNav />} seo="Admin">
        <Section
          subtitle="Admin panel for editing my site data, etc."
          title="Admin Console">
          <Card>
            <CardContent>
              <div>TBA!</div>
            </CardContent>
          </Card>
        </Section>
      </Layout>
    </AdminSignInProvider>
  );
}
