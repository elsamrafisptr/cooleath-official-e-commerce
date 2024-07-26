import HeadlineSection from "@/components/elements/HeadlineSection";
import NewArrivals from "./NewArrivals";
import BestSeller from "./BestSeller";
import CTA from "@/components/elements/CTA";

const Home = () => {
  return (
    <>
      <HeadlineSection />
      <NewArrivals />
      <BestSeller />
      {/* <Collection/> */}
      <CTA />
    </>
  );
};

export default Home;
