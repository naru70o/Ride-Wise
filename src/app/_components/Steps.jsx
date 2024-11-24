const steps = [
  {
    title: "Book Your Car",
    description:
      "Browse through our wide selection of vehicles and choose the one that suits your needs",
    image: "./solar_card-search-bold-duotone.png",
  },
  {
    title: "Pick Up and Drive",
    description:
      "Inspect the car with our team, sign the agreement, and start your journey",
    image: "./game-icons_house-keys.png",
  },
  {
    title: "Return with Ease",
    description:
      "Complete the handover process and you’re good to go—simple and hassle-free!",
    image: "./game-icons_return-arrow.png",
  },
];

function Steps() {
  return (
    <div className="mt-[9.2rem] sm:mt-[6.4rem] w-full grid grid-cols-subgrid col-start-1 m-0 col-span-12">
      <h1 className="text-[2.8rem] col-start-2 col-span-10 text-sunset-orange font-extrabold lg:text-[3rem] max-w-[120rem] mx-auto w-full ">
        Our car collection
      </h1>

      <div className="max-w-[120rem] col-start-2 col-span-10 mx-auto">
        <div className="flex justify-between items-center mt-[4.6rem] w-full md:flex-col">
          {steps.map((step, index) => {
            return (
              <>
                <div className="flex gap-1 flex-col" key={step.description}>
                  <img
                    className="bg-pale-lemon rounded-full self-center p-24 slg:p-12 "
                    src={step.image}
                    alt={step.title}
                  />
                  <p className="text-[1.6rem] font-extrabold mt-6 text-deep-brown text-center">
                    {step.title}
                  </p>
                  <p className="text-[1.4rem] font-normal mt-4 text-deep-brown self-center w-[85%] slg:w-full md:w-[70%] text-center">
                    {step.description}
                  </p>
                </div>
                {index < steps.length - 1 && (
                  <div className="border-t-2 md:border-r-2 md:border-t-0 w-[20%] md:w-0 self-center h-24 border-dashed border-deep-brown md:my-6"></div>
                )}
              </>
            );
          })}
        </div>
      </div>

      <img
        className="self-start col-start-1  col-span-12 sm:h-[214px]"
        src="./steps-section-image.png"
        alt="section-img"
      />
    </div>
  );
}

export default Steps;
