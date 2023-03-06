import "@/styles/globals.css";
import store from "../redux/store/store";
import { Provider } from "react-redux";
import { Josefin_Sans } from "@next/font/google";

const josefin = Josefin_Sans({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }) {
  return (
    <main className={josefin.className}>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}
