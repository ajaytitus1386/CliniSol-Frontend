import type { NextPage } from "next";
import { useRouter } from "next/router";

const Home: NextPage = () => {
  const router = useRouter();
  if (typeof window !== "undefined") {
    router.push("/dashboard/nishal/");
  }
  return <div>Home Page Goes Here</div>;
};

export default Home;
