export const metadata = {
  title: "Home - Podcast",
  description: "Page description",
};

import Hero from "@/components/hero";
import Carousel from "@/components/carousel";
import Podcasts from "@/components/podcasts";
import Hosts from "@/components/hosts";
import Testimonials from "@/components/testimonials";
import Cta from "@/components/cta";

export default function Home() {
  return (
    <>
      <Hero />
      <div className="mt-16"></div>
      <Carousel />
      <Podcasts />
      <Hosts />
      {/* <Testimonials />
      <Cta /> */}
    </>
  );
}
