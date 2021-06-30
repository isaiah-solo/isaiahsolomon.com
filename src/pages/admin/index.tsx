import React from "react";
import {StyleSheet, css} from 'aphrodite';
import firebase from 'firebase/app';

import useGoogleSignIn from "../../hooks/useGoogleSignIn";
import Title1 from "../../components/generic/text/Title1";

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    boxSizing: 'border-box',
    height: 'calc(100vh - 16px)',
    position: 'relative',
    width: '100%',
  },
  body: {
    alignItems: 'center',
    boxSizing: 'border-box',
    display: 'grid',
    gridGap: 20,
    gridTemplateRows: '1fr auto',
    left: '50%',
    position: 'relative',
    top: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    width: 'fit-content',
  },
});

export default function AdminPage(): React.ReactElement {
  const [signIn, user, loading, error] = useGoogleSignIn();

  console.log(user);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error.message}</div>;
  }

  return (
    <div className={css(styles.root)}>
      <div className={css(styles.body)}>
        <Title1>Welcome back Daddy</Title1>
        <button onClick={signIn}>
          Sign in with Google
        </button>
      </div>
    </div>
  );
};
