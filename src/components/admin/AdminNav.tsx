import React from "react";

import FlatButton from "../generic/button/FlatButton";
import Nav from "../generic/layout/Nav";
import SubTitle from "../generic/text/SubTitle";
import {useSignOutCallback} from "../../contexts/AdminSignInContext";

export default function AdminNav(): React.ReactElement {
  const signOut = useSignOutCallback();

  return (
    <Nav
      leftContent={(
        <SubTitle>
          Admin Console
        </SubTitle>
      )}
      rightContent={(
        <FlatButton onClick={signOut}>
          Sign Out
        </FlatButton>
      )}
    />
  );
};
