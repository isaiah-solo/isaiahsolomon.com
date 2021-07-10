import 'firebase/firestore';
import firebase from 'gatsby-plugin-firebase';
import {useState} from 'react';

export type FirestoreTimestamp = firebase.firestore.FieldValue;

export default function useFirestoreCurrentDate(): FirestoreTimestamp {
  const [date] = useState<FirestoreTimestamp>(() =>
    firebase.firestore.FieldValue.serverTimestamp(),
  );
  return date;
}
