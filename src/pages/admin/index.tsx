import React from "react";
import AdminNav from "../../components/admin/AdminNav";

import {AdminSignInProvider} from "../../contexts/AdminSignInContext";
import Card from "../../components/generic/card/Card";
import CardContent from "../../components/generic/card/CardContent";
import Layout from "../../components/generic/layout/Layout";
import Section from "../../components/generic/layout/Section";

export default function AdminPage(): React.ReactElement {
  return (
    <AdminSignInProvider>
      <Layout
        nav={<AdminNav />}
        seo="Admin">
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
};
