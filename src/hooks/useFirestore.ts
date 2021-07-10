import 'firebase/firestore';
import firebase from 'gatsby-plugin-firebase';
import {useRef} from 'react';

export default function useFirestore(): firebase.firestore.Firestore {
  const {current: firestore} = useRef(firebase.firestore());
  return firestore;
}
