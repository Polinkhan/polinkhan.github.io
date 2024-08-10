import { DocumentData, DocumentReference, DocumentSnapshot, FirestoreError, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

// interfaces
interface UseFirebaseSnapshotProps {
  ref: DocumentReference<DocumentData, DocumentData>;
  defaultValue: any;
}

// types
type onNext = (snapshot: DocumentSnapshot<DocumentData>) => void;
type onError = (error: FirestoreError) => void;

// -----------------------------------------------------------------------------------

const useFirebaseSnapshot = ({ ref, defaultValue }: UseFirebaseSnapshotProps) => {
  // State
  const [content, setContent] = useState<any>(defaultValue);

  // Functions
  const onNext: onNext = (doc) => {
    doc.exists() && setContent(doc.data());
  };

  const onError: onError = (error) => {
    console.log("error => ", error);
  };

  // Lifecycle hooks
  useEffect(() => {
    const unsub = onSnapshot(ref, onNext, onError);
    return unsub;
  }, []);

  return { content };
};

export default useFirebaseSnapshot;
