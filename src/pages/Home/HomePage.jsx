import { Nav } from "@/components/Layout/Nav";
import { Intro } from "./components/Intro";
import { Steps } from "./components/Steps";
import { Features } from "./components/Features";
import { FAQs } from "./components/FAQs";
import { Footer } from "@/components/Layout/Footer";

export const HomePage = () => {
  return (
    <>
      <Nav />
      <Intro />
      <Steps />
      <Features />
      <FAQs />
      <Footer />
    </>
  );
};
