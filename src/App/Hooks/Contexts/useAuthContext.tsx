import { useContext } from "react";
import { AuthContext } from "../../Contexts/AuthContext";

export const useAuthContext = () => useContext(AuthContext);
