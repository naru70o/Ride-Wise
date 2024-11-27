import Image from "next/image";
import Link from "next/link";

const footerData = [
  {
    category: "Company",
    links: [
      { name: "About us", url: "/about-us" },
      { name: "Hero", url: "/hero" },
      { name: "Newsletter", url: "/newsletter" },
      { name: "Get ride", url: "/get-ride" },
      { name: "Popular", url: "/popular" },
    ],
  },
  {
    category: "Resources",
    links: [
      { name: "Blog", url: "/blog" },
      { name: "Locations", url: "/locations" },
      { name: "Privacy Policy", url: "/privacy-policy" },
      { name: "Book Now", url: "/book-now" },
      { name: "Offers", url: "/offers" },
    ],
  },
  {
    category: "Social Media",
    links: [
      { name: "Facebook", url: "/facebook" },
      { name: "Instagram", url: "/instagram" },
      { name: "Twitter", url: "/twitter" },
      { name: "LinkedIn", url: "/linkedin" },
      { name: "TikTok", url: "/tiktok" },
    ],
  },
];

function Footer() {
  return (
    <div className="mt-[9.2rem] sm:mt-[6.4rem] w-full grid grid-cols-subgrid  col-start-1 m-0 col-span-12 bg-misty-blue">
      {/* Footer grid container */}
      <div className="col-start-2 col-span-10 py-12">
        <img
          className="h-[5.4rem] sm:h-[3.8rem]"
          fill
          src="/Logo-footer.png"
          alt="footer-logo"
        />

        {/* grid */}
        <div className="grid grid-cols-4 md:grid-cols-3 md:grid-rows-2 gap-4 mt-[4.2rem] sm:grid-rows-1 sm:gap-6">
          <img
            className="md:row-span-2 self-center md:col-span-1  sm:hidden"
            src="./footer-image.png"
            alt="car"
          />

          <div className="flex flex-col gap-12 text-deep-brown font-normal text-[2.4rem] md:text-[1.6rem] sm:text-[1.2rem] ">
            <ul className="transition-all">
              <li className="li-style">About us</li>
              <li className="li-style">Hero</li>
              <li className="li-style">Newsletter</li>
              <li className="li-style">Get ride</li>
              <li className="li-style">Popular</li>
            </ul>
          </div>
          <div className="flex flex-col gap-12 text-deep-brown font-normal text-[2.4rem] md:text-[1.6rem] sm:text-[1.2rem]">
            <ul className="transition-all">
              <li className="li-style">Blog</li>
              <li className="li-style">Locations</li>
              <li className="li-style">Privacy Policy</li>
              <li className="li-style">Book Now</li>
              <li className="li-style">Offers</li>
            </ul>
          </div>
          <div className="flex md:col-start-2 md:row-start-2 sm:row-start-1 sm:col-start-3 md:col-span-1 flex-col gap-12 text-deep-brown font-normal text-[2.4rem] md:text-[1.6rem] sm:text-[1.2rem]">
            <ul className="transition-all">
              <li className="li-style">Facebook</li>
              <li className="li-style">Instagram</li>
              <li className="li-style">Twitter</li>
              <li className="li-style">LinkedIn</li>
              <li className="li-style">TikTok</li>
            </ul>
          </div>
        </div>
        {/* copy right */}
        <div className="flex justify-center items-center mt-11">
          <div className="text-2xl sm:text-lg text-center text-white opacity-50">
            <p>
              © 2024 portfolio project, not linked to any car rental business.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
