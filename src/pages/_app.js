import "@/styles/globals.css";
import store from "../redux/store/store";
import { Provider } from "react-redux";
import { Josefin_Sans } from "@next/font/google";
import localFont from "@next/font/local";

const josefinInstance = Josefin_Sans({
  weights: [100, 200, 400, 500, 600, 700, "variable"],
  subsets: ["latin"],
});

const localFontInstance = localFont({
  src: "../../public/Fonts/wondar-quason-free.ttf",
});

export default function App({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <main className={josefinInstance.className}>
        <Component {...pageProps} />
      </main>
    </Provider>
  );
}
