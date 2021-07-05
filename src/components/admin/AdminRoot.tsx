import React from "react";

import AdminConsoleRoot from "./AdminConsoleRoot";
import AdminSignInRoot from "./AdminSignInRoot";
import {useIsSignedIn, useIsSignedInUserEmailEqualTo, useSignInLoadingState} from "../../contexts/AdminSignInContext";

export default function AdminRoot(): React.ReactElement {
  const isSignedIn = useIsSignedIn();
  const isSignedInUserIsaiah = useIsSignedInUserEmailEqualTo('isaiah.c.solomon@gmail.com');
  const [isLoading] = useSignInLoadingState();

  if (isLoading) {
    return <div>Loading...</div>
  }
  
  if (!isSignedIn) {
    return <AdminSignInRoot />;
  }

  if (!isSignedInUserIsaiah) {
    // If somehow someone finds the admin route and tries to log in,
    // don't allow them to get in.
    return (
      <div>
        Hm... you're not Isaiah?
      </div>
    );
  }

  return (
    <AdminConsoleRoot />
  );
};
