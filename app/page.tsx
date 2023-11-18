import Banner from "@/components/banner";
import logo from "@/assets/img/panaverse-logo.png";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Banner />
      <main className="w-[64rem] max-w-full mx-auto py-8 px-24 flex flex-col space-y-5">
        <h1 className="font-color-green text-[2em]">
          Certified Web 3.0 and Metaverse Developer: A Nationwide Program in
          Karachi, Lahore, Islamabad, and Peshawar
        </h1>
        <Image src={logo} alt="panaverse" />
        <h2 className="font-color-green text-2xl leading-normal">
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing.
          Panaverse DAO is a movement to spread these technologies globally. It
          is community of Web 3 and Metaverse developers, designers, trainers,
          startup founders and service providers.
        </h2>
        <a href="#" className="text-blue-900 text-2xl block">
          Admissions Now Open in Karachi, Lahore, Islamabad, and Peshawar
        </a>
        <a href="#" className="text-blue-900 text-lg block">
          This document on Google Docs
        </a>
      </main>
    </div>
  );
}
