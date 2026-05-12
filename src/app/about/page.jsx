import AboutImage from "@/components/about/AboutImage";
import Faq from "@/components/about/Faq";
import OurPurpose from "@/components/about/OurPurpose";
import StoryApproach from "@/components/about/StoryApproach";
import PageHero from "@/components/common/PageHero";
import Highlights from "@/components/home/Highlights";
import { createPageMetadata } from "@/lib/seo";

const AboutPage = () => {
  return (
    <>
      <PageHero
        blinkBtnText="About Mita Group"
        title="Crafting Spaces, Shaping Visions"
        description="The Mita Group is a leading provider of innovative and sustainable construction solutions, offering a wide range of projects across various sectors."
      />
      <AboutImage img="	https://framerusercontent.com/images/wXngEhRqzHuClHdgKenqpshI7A.jpg?scale-down-to=2048" />
      <OurPurpose />
      <StoryApproach />
      <Highlights />
      <Faq />
    </>
  );
};

export default AboutPage;

export async function generateMetadata() {
  return createPageMetadata("/about");
}
