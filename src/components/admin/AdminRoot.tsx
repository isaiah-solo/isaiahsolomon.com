import React from "react";

import AdminConsoleRoot from "./AdminConsoleRoot";
import AdminSignInRoot from "./AdminSignInRoot";
import {useIsSignedIn} from "../../contexts/AdminSignInContext";

export default function AdminRoot(): React.ReactElement {
  const isSignedIn = useIsSignedIn();

  if (!isSignedIn) {
    return <AdminSignInRoot />;
  }

  return (
    <AdminConsoleRoot />
  );
};
