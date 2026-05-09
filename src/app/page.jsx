import Clients from "@/components/home/Clients";
import Hero from "@/components/home/Hero";
import Highlights from "@/components/home/Highlights";
import KeyProjects from "@/components/home/KeyProjects";
import News from "@/components/home/News";
import { createPageMetadata } from "@/lib/seo";

const HomePage = () => {
  return (
    <>
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
