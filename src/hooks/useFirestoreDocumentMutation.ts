import 'firebase/firestore';
import firebase from 'gatsby-plugin-firebase';
import {useState} from 'react';
import useFirestore from './useFirestore';

type DocumentData = firebase.firestore.DocumentData;
type DocumentDataUpdater = (data: DocumentData) => DocumentData;

export default function useFirestoreDocumentMutation(
  collection: string,
  docID: string,
): [(updater: DocumentDataUpdater) => void, boolean] {
  const firestore = useFirestore();
  const docRef = firestore.collection(collection).doc(docID);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const updateDoc = async (updater: DocumentDataUpdater) => {
    setIsLoading(true);

    await firestore.runTransaction(async transaction => {
      // This code may get re-run multiple times if there are conflicts.
      const doc = await transaction.get(docRef);

      if (!doc.exists) {
        throw 'Document does not exist!';
      }

      transaction.update(docRef, updater(doc.data()));

      setIsLoading(false);
    });
  };

  return [updateDoc, isLoading];
}
