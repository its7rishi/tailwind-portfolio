import { useEffect, useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Blogs from "./components/Blogs";
import Footer from "./components/Footer";

const initialTheme = localStorage.getItem("theme");

function App() {
  const [theme, setTheme] = useState(initialTheme || "dark");

  const handleToggleMode = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  useEffect(() => {
    document.querySelector("html").setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="overflow-x-hidden">
      <Header handleToggleMode={handleToggleMode} />
      <Hero theme={theme} />
      <Skills />
      <Projects />
      <Blogs />
      <Footer />
    </div>
  );
}
export default App;
