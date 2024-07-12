import { Box, CircularProgress, Container, Fab, Stack, TextField, Typography } from "@mui/material";
import { Fragment, useEffect, useState } from "react";

import { useAuthContext } from "../../Hooks/Contexts/useAuthContext";
import { useNavigate } from "react-router-dom";
import { collection, doc, getDocs, updateDoc } from "firebase/firestore";
import { db } from "../../DB/firebase.config";
import BrandText from "../../Components/brandText/BrandText";
import CustomTextField, { ManageTextField } from "../../Components/textfield/CustomTextField";
import { FaAngleDown, FaCheck, FaSortDown } from "react-icons/fa6";

const ManageSite = () => {
  const navigate = useNavigate();
  const { isLoggedIn } = useAuthContext();
  const [docs, setDocs] = useState<any>();
  const [updatedField, setUpdatedField] = useState({} as any);

  useEffect(() => {
    if (!isLoggedIn) navigate("/", { replace: true });

    (async () => {
      const querySnapshot = await getDocs(collection(db, "Content"));
      querySnapshot.forEach((doc) => {
        const data = doc.data();
        const sortedData = Object.fromEntries(Object.entries(data).sort(([key1], [key2]) => key1.localeCompare(key2)));
        setDocs((prev: any) => ({ ...prev, [doc.id]: sortedData }));
      });
    })();
  }, []);

  if (!docs)
    return (
      <Stack bgcolor={"secondary.dark"} sx={{ height: "100vh", justifyContent: "center", alignItems: "center" }}>
        <CircularProgress color="primary" />
      </Stack>
    );

  const handleClick = () => {
    const docRef = doc(db, "Content", "work");
    updateDoc(docRef, {
      workList: [
        docs["work"].workList[0],
        docs["work"].workList[0],
        docs["work"].workList[0],
        docs["work"].workList[0],
      ],
    });
  };

  return (
    <Stack py={5} bgcolor={"secondary.dark"}>
      <Container sx={{ height: 1 }}>
        <Stack gap={10}>
          {Object.keys(docs).map((doc) => {
            return (
              <Stack key={doc}>
                <BrandText>{doc.toUpperCase()}</BrandText>
                <Editor doc={docs[doc]} parrant={[doc]} setUpdatedField={setUpdatedField} />
              </Stack>
            );
          })}
        </Stack>

        <Fab color="primary" sx={{ position: "fixed", bottom: 30, right: 30 }} onClick={handleClick}>
          <FaCheck />
        </Fab>
      </Container>
    </Stack>
  );
};

const Editor = ({ doc, parrant, setUpdatedField }: { doc: any; parrant: string[]; setUpdatedField: any }) => {
  const Keys: string[] = [];
  Object.keys(doc)
    .sort()
    .forEach((key) => {
      if (typeof doc[key] === "string") Keys.unshift(key);
      else Keys.push(key);
    });

  const generateObjectAndAssignValue = (obj: any, arr: string[], val: any) => {
    console.log("called");

    const key: any = arr.shift();
    if (arr.length === 0) {
      obj[key] = val;
      return;
    } else {
      if (!obj[key]) obj[key] = {};
      generateObjectAndAssignValue(obj[key], arr, val);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, key: string) => {
    const parrantChain = [...parrant, key];
    setUpdatedField((prev: any) => {
      const data = { ...prev };
      generateObjectAndAssignValue(data, parrantChain, e.target.value);
      return data;
    });
  };

  return (
    <Stack gap={3}>
      {Keys.map((key, i) => {
        if (typeof doc[key] === "string") {
          return (
            <ManageTextField key={`${key}-${i}`} label={key} value={doc[key]} onChange={(e) => handleChange(e, key)} />
          );
        }

        if (Array.isArray(doc[key])) {
          const isArrayOfString = doc[key].every((data) => typeof data === "string");
          if (isArrayOfString) {
            return (
              <ManageTextField
                key={`${key}-${i}`}
                label={key}
                value={doc[key].join(" ")}
                helperText={"Space separated value"}
              />
            );
          }

          return (
            <Stack key={`${key}-${i}`} direction={"row"} color={"secondary.contrastText"} gap={1}>
              <Typography fontWeight={500}>{key}</Typography>
              <Stack gap={1}>
                <FaSortDown />
                <Stack pl={1}>
                  {doc[key].map((doc, i) => (
                    <Editor
                      key={`${key}-${i}`}
                      doc={doc}
                      parrant={[...parrant, key]}
                      setUpdatedField={setUpdatedField}
                    />
                  ))}
                </Stack>
              </Stack>
            </Stack>
          );
        }

        return (
          <Stack key={`${key}-${i}`} direction={"row"} color={"secondary.contrastText"} gap={1}>
            <Typography>{key}</Typography>
            <Stack>
              <FaSortDown />
              <Stack pl={1}>
                <Editor doc={doc[key]} parrant={[...parrant, key]} setUpdatedField={setUpdatedField} />
              </Stack>
            </Stack>
          </Stack>
        );
      })}
    </Stack>
  );
};

export default ManageSite;
