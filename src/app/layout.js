import "./globals.css";
import { Lato } from "next/font/google";

export const metadata = {
  title: "RideWise",
  description: "Generated by create next app",
};

const lato = Lato({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html className="text-[62.5%]" lang="en">
      <body
        className={`${lato.className} overflow-x-hidden antialiased my-0 mx-auto`}
      >
        {children}
      </body>
    </html>
  );
}
