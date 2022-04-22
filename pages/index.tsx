import type { NextPage } from "next";
import { useRouter } from "next/router";
import Dashboard from "./appointments";

const Home: NextPage = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/dashboard/100100A/");
  }
  return <div>Home Page Goes Here</div>;
};

export default Home;
