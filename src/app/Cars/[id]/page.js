import Inputs from "@/_components/Inputs";
import { cars } from "@/_utility/fakeData";

async function page({ params }) {
  const { id } = await params;
  console.log(typeof id);

  const car = cars.find((car) => {
    return car.id === Number(id);
  });

  if (!car)
    throw new Error(
      "this car doesn't exis so please go back and choose another one"
    );

  const {
    id: carId,
    brand,
    model,
    pricePerDay,
    fuelType,
    availability,
    year,
  } = car;

  return (
    <div className="col-start-1 grid grid-cols-subgrid bg-pale-lemon content-center h-screen my-0 col-span-12 w-full mx-auto">
      <div className="grid col-start-2 overflow-hidden col-span-10 max-w-[120rem] grid-cols-2 md:grid-cols-1 bg-slate-teal rounded-xl h-full">
        <div className="image-booking bg-cover bg-center h-full md:h-[10rem] w-full"></div>
        <div className="flex flex-col gap-8 text-xl sm:text-xl text-deep-brown p-12 sm:px-4">
          <h1 className="text-[2.8rem] sm:text-[1.6rem] block max-w-[120rem] mx-auto w-full text-white font-extrabold md:text-[1.8rem] p-4">
            Book your{" "}
            <span className="text-sunset-orange">
              {" "}
              {`${brand} - ${model}`}{" "}
            </span>
            and Enjoy
          </h1>
          <Inputs />
        </div>
      </div>
    </div>
  );
}

export default page;
