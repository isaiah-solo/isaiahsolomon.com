import {useRef, useState} from 'react'

import firebase from 'gatsby-plugin-firebase'
import 'firebase/firestore'

type DocumentData = firebase.firestore.DocumentData
type DocumentDataUpdater = (data: DocumentData) => DocumentData

export default function useFirestoreDocumentMutation(
  collection: string,
  docID: string,
): [(updater: DocumentDataUpdater) => void, boolean] {
  const {current: firestore} = useRef(firebase.firestore())
  const docRef = firestore.collection(collection).doc(docID)

  const [isLoading, setIsLoading] = useState<boolean>(false)

  const updateDoc = async (updater: DocumentDataUpdater) => {
    setIsLoading(true)

    await firebase.firestore().runTransaction(async transaction => {
      // This code may get re-run multiple times if there are conflicts.
      return transaction
        .get(docRef)
        .then(doc => {
          setIsLoading(false)

          if (!doc.exists) {
            throw 'Document does not exist!'
          }

          transaction.update(docRef, updater(doc.data()))
        })
        .catch(error => console.error(error))
    })
  }

  return [updateDoc, isLoading]
}
