import {useEffect, useState} from "react";

import firebase from 'gatsby-plugin-firebase';
import 'firebase/auth';

export default function useGoogleSignIn(): [
  () => void,
  () => void,
  firebase.User | null,
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
    setLoading(true);
    
    firebase.auth()
      .onAuthStateChanged((user) => {
        setSignedInUser(user);
        setLoading(false);
      });
  }, [setLoading, setSignedInUser]);

  const signIn = async () => {
    const provider = new firebase.auth.GoogleAuthProvider();

    setLoading(true);

    await firebase.auth()
      .setPersistence(firebase.auth.Auth.Persistence.LOCAL)
      .then(async () => {
        await firebase.auth()
          .signInWithPopup(provider).then(userCredential => {
            setSignedInUser(userCredential.user);
          })
          .catch(error => {
            setError(error);
            setLoading(false);
          });
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  };

  const signOut = async () => {
    await firebase.auth()
      .signOut()
      .catch(error => {
        setError(error);
        setLoading(false);
      });

    setLoading(false);
  };

  return [
    signIn,
    signOut,
    signedInUser,
    signedInUser !== null,
    loading,
    error,
  ];
};