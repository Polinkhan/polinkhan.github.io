import ThemeProvider from "./App/Themes";
import MainLayout from "./App/Layouts/MainLayout";
import Home from "./App/Pages/Home";
import Work from "./App/Pages/Work";
import Skill from "./App/Pages/Skill";
import Experience from "./App/Pages/Experience";
import Education from "./App/Pages/Education";
import ContactMe from "./App/Pages/contactMe/ContactMe";
import AboutMe from "./App/Pages/AboutMe/AboutMe";

function App() {
  return (
    <ThemeProvider>
      <MainLayout>
        <Home />
        <Work />
        <Skill />
        <Experience />
        <Education />
        <AboutMe />
        <ContactMe />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
