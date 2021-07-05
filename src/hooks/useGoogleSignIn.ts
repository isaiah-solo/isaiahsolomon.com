import {useEffect, useState} from "react";

import firebase from 'gatsby-plugin-firebase';
import 'firebase/auth';

export default function useGoogleSignIn(): [
  () => void,
  boolean,
  boolean,
  firebase.FirebaseError | null
] {
  const [
    signedInUser,
    setSignedInUser,
  ] = useState<firebase.User | null>(null);

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<firebase.FirebaseError | null>(null);

  useEffect(() => {
    firebase.auth()
      .onAuthStateChanged((user) => {
        setSignedInUser(user);
      });
  }, [setSignedInUser]);

  const signIn = async () => {
    setLoading(true);
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      await firebase.auth()
        .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(async () => {
          await firebase.auth()
            .signInWithPopup(provider).then(userCredential => {
              setSignedInUser(userCredential.user);
            });
        });

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return [
    signIn,
    signedInUser !== null,
    loading,
    error,
  ];
};