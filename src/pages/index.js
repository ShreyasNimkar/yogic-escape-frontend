import { Inter } from "@next/font/google";

import Landing from "@/components/screens/Landing";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Landing />
    </>
  );
}
