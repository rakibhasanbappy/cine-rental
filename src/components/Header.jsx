import { useContext, useState } from "react";
import moon from "../assets/icons/moon.svg";
import sun from "../assets/icons/sun.svg";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import shoppingCart from "../assets/shopping-cart.svg";
import { MovieContext, ThemeContext } from "../context";
import CartDetailsModal from "./CartDetailsModal";

export default function Header() {
  const [showCart, setShowCart] = useState(false);

  const { cartData, setCartData } = useContext(MovieContext);

  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <header>
      <nav className="container flex items-center justify-between space-x-10 py-6">
        <a href="index.html">
          <img src={logo} width="139" height="26" alt="" />
        </a>

        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="" />
            </a>
          </li>
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              {
                // Toggle theme
                theme === "dark" ? (
                  <img
                    src={sun}
                    width="24"
                    height="24"
                    alt="light"
                    onClick={() => setTheme("light")}
                  />
                ) : (
                  <img
                    src={moon}
                    width="24"
                    height="24"
                    alt="dark"
                    onClick={() => setTheme("dark")}
                  />
                )
              }
            </a>
          </li>
          <li>
            {showCart && (
              <CartDetailsModal
                cartData={cartData}
                setCartData={setCartData}
                onClose={() => setShowCart(false)}
              />
            )}
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCart(true)}
            >
              <img src={shoppingCart} width="24" height="24" alt="cart" />
              {cartData.length > 0 && (
                <span className="absolute -top-1 -right-1 bg-primary text-white text-xs font-semibold rounded-full px-2">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
