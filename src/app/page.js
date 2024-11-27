import CarList from "../_components/CarList";
import Footer from "../_components/Footer";
import Header from "../_components/Header";
import Newsletter from "../_components/Newsletter";
import Partners from "../_components/Partners";
import PopularCars from "../_components/PopularCars";
import Steps from "../_components/Steps";
import Tastemonials from "../_components/Tastemonials";

function page() {
  return (
    <>
      <Header />
      <Partners />
      <PopularCars />
      <CarList />
      <Steps />
      <Newsletter />
      <Tastemonials />
      <Footer />
    </>
  );
}

export default page;
