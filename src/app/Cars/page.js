import AllCarList from "@/_components/AllCarList";
import Footer from "@/_components/Footer";
import Nav from "@/_components/Nav";
import { cars } from "@/_utility/fakeData";

export const metadata = {
  title: "Cars",
};

async function page() {
  return (
    <>
      <div className="col-start-2 max-w-[120rem] my-0 w-full col-span-10">
        <Nav />
        <AllCarList filteredCar={cars} />
      </div>
      <Footer />
    </>
  );
}

export default page;
