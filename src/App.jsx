import { useState } from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { MovieContext, ThemeContext } from "./context";

export default function App() {
  const [cartData, setCartData] = useState([]);
  const [theme, setTheme] = useState("dark");

  return (
    <>
      <ThemeContext.Provider value={{ theme, setTheme }}>
        <MovieContext.Provider value={{ cartData, setCartData }}>
          <div className={`${theme === "dark" ? "dark" : ""}`}>
            <Header />
            <Main />
            <Footer />
          </div>
        </MovieContext.Provider>
      </ThemeContext.Provider>
    </>
  );
}
