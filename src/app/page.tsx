import HeroSlider from "@/components/HeroSlider/HeroSlider";
import AboutSection from "@/components/AboutSection/AboutSection";
import ScrollReveal from "@/components/ScrollReveal/ScrollReveal";

export default function Home() {
  return (
    <>
      <HeroSlider />
        <ScrollReveal><AboutSection /></ ScrollReveal>
    </>
  );
}
