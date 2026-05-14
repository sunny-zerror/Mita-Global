import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import IntroLoader from "@/components/home/IntroLoader";
import KeyProjects from "@/components/home/KeyProjects";
import News from "@/components/home/News";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
    <IntroLoader/>
    <Hero />
    <Clients/>
    <KeyProjects/>
    <Highlights/>
    <News/>
    </>
  );
};

export default HomePage;

export async function generateMetadata() {
  return createPageMetadata("/");
}
