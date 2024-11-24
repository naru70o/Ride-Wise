import CarList from "./_components/Car-List";
import Header from "./_components/Header";
import Newsletter from "./_components/Newsletter";
import PopularCars from "./_components/PopularCars";
import Steps from "./_components/Steps";

function page() {
  return (
    <>
      <Header />
      <PopularCars />
      <CarList />
      <Steps />
      <Newsletter />
    </>
  );
}

export default page;
