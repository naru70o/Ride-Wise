import Username from "@/_ui/Username";

function page() {
  return (
    <div className="col-start-1 h-screen bg-pale-lemon my-0 col-span-12 w-full max-w-[120rem] mx-auto">
      <div className="grid sm:grid-cols-custom-2 grid-cols-custom-2xlg h-full">
        <div className="image-booking bg-cover bg-center h-full w-full"></div>
        <div className="flex flex-col gap-8 text-xl text-deep-brown p-12">
          <h1 className="text-[2.8rem] block max-w-[120rem] mx-auto w-full text-deep-brown font-extrabold md:text-[1.8rem] ">
            op
          </h1>
          <Username />
        </div>
      </div>
    </div>
  );
}

export default page;
