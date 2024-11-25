import CarList from "./_components/Car-List";
import Footer from "./_components/Footer";
import Header from "./_components/Header";
import Newsletter from "./_components/Newsletter";
import PartnersMobile from "./_components/PartnersMobile";
import PopularCars from "./_components/PopularCars";
import Steps from "./_components/Steps";
import Tastemonials from "./_components/Tastemonials";

function Page() {
  return (
    <>
      <Header />
      <PartnersMobile />
      <PopularCars />
      <CarList />
      <Steps />
      <Newsletter />
      <Tastemonials />
      <Footer />
    </>
  );
}

export default Page;
