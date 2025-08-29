import Hero from "@/components/Hero";
import LeadMagnet from "@/components/LeadMagnet";
import PainRecognition from "@/components/PainRecognition";
import Transformation from "@/components/Transformation";
import PackContents from "@/components/PackContents";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <LeadMagnet />
      <PainRecognition />
      <Transformation />
      <PackContents />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
