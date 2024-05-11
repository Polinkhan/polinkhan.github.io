import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import UIContextPropvider from "./App/Contexts/UIContext.tsx";
import { SnackbarProvider } from "notistack";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <UIContextPropvider>
    <SnackbarProvider autoHideDuration={3000} anchorOrigin={{ horizontal: "center", vertical: "bottom" }}>
      <App />
    </SnackbarProvider>
  </UIContextPropvider>
);
