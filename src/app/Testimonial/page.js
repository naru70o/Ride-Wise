import Footer from "@/_components/Footer";
import Nav from "@/_components/Nav";
import TastemonilasList from "@/_components/TastemonilasList";
import { testimonials } from "@/_utility/fakeData";
export const metadata = {
  title: "Testimonials",
};
function page() {
  return (
    <>
      <div className="col-start-2 max-w-[120rem] my-0 w-full col-span-10">
        <Nav />
        <TastemonilasList filteredTestimonials={testimonials} />
      </div>
      <Footer />
    </>
  );
}

export default page;
