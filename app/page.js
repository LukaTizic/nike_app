import CustomerReviews from "@/components/CustomerReviews";
import Hero from "@/components/Hero";
import PopularProducts from "@/components/PopularProducts";
import Services from "@/components/Services";
import SpecialOffer from "@/components/SpecialOffer";
import Subscribe from "@/components/Subscribe";
import SuperQuality from "@/components/SuperQuality";

export default function Home() {
  return (
    <>
      <Hero />
      <PopularProducts />
      <SuperQuality />
      <Services />
      <SpecialOffer />
      <CustomerReviews />
      <Subscribe />
    </>
  );
}
