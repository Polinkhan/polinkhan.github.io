import ThemeProvider from "./App/Themes";
import MainLayout from "./App/Layouts/MainLayout";
import Home from "./App/Pages/Home";
import Work from "./App/Pages/Work";
import Skill from "./App/Pages/Skill";
import Experience from "./App/Pages/Experience";
import Education from "./App/Pages/Education";
import ContactMe from "./App/Pages/contactMe/ContactMe";
import AboutMe from "./App/Pages/AboutMe/AboutMe";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./App/Pages/Login";
import Footer from "./App/Pages/Footer";
import ManageSite from "./App/Pages/Manage";

function App() {
  return (
    <ThemeProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<MainApp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/manage" element={<ManageSite />} />
          <Route path="*" element={<MainApp />} />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  );
}

const MainApp = () => {
  return (
    <MainLayout>
      <Home />
      <Work />
      <Skill />
      <Experience />
      <Education />
      <AboutMe />
      <ContactMe />
      <Footer />
    </MainLayout>
  );
};

export default App;
