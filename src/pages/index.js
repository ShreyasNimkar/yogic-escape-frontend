import { Inter } from "@next/font/google";

import Landing from "@/components/screens/Landing";

import Header from "@/components/common/Header";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Landing />
      {/* <Header /> */}
    </>
  );
}
