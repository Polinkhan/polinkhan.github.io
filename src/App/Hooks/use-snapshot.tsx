import { DocumentData, DocumentReference, onSnapshot } from "firebase/firestore";
import { useEffect, useState } from "react";

const useSnapshot = ({
  ref,
  defaultValue,
}: {
  ref: DocumentReference<DocumentData, DocumentData>;
  defaultValue: any;
}) => {
  const [content, setContent] = useState<any>(defaultValue);

  useEffect(() => {
    const unsub = onSnapshot(ref, (doc) => {
      setContent(doc.data() as any);
    });

    return () => unsub();
  }, []);

  return { content };
};

export default useSnapshot;
