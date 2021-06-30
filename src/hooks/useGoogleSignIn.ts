import {useState} from "react";

import firebase from 'gatsby-plugin-firebase';
import 'firebase/auth';

export default function useGoogleSignIn(
): [
    () => void,
    firebase.auth.UserCredential,
    boolean,
    firebase.FirebaseError
  ] {

  const [
    signedInUser,
    setSignedInUser,
  ] = useState<firebase.auth.UserCredential>();

  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<firebase.FirebaseError>();

  const signIn = async () => {
    setLoading(true);
    try {
      const provider = new firebase.auth.GoogleAuthProvider();

      await firebase.auth().signInWithPopup(provider).then(setSignedInUser);

      setLoading(false);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  return [
    signIn,
    signedInUser,
    loading,
    error,
  ];
};