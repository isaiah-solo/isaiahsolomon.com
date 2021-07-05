import React from "react";

import AdminRoot from "../../components/admin/AdminRoot";
import {useAdminSignInProvider} from "../../contexts/AdminSignInContext";

export default function AdminPage(): React.ReactElement {
  const AdminSignInProvider = useAdminSignInProvider();

  return (
    <AdminSignInProvider>
      <AdminRoot />
    </AdminSignInProvider>
  );
};
