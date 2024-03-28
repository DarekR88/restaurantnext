import Image from "next/image";
import Link from "next/link";
import DiningImg from "../../public/images/carlos-lindner-sjBYA8dAw54-unsplash.jpg";
import wineImg from "../../public/images/wine.jpg";

export default function Home() {
  return (
    <>
      <div className="w-screen static flex justify-center mt-6">
        <div className="max-w-1200px flex flex-col lg:flex-row">
          <div className="w-screen lg:w-[600px] lg:h-[370px] lg:overflow-hidden">
            <Image
              src={DiningImg}
              alt="dining"
              className="relative lg:w-[500px] lg:h-[285px] z-10"
            />
            <div className="relative -top-[225px] left-[60px] lg:w-[500px] lg:h-[285px] bg-bg-tertiary z-0"></div>
          </div>
          <div className="w-screen flex flex-col text-center lg:text-left lg:items-left lg:w-[600px] justify-center">
            <h1 className="text-6xl font-Arizonia z-10">Timeless Flavors</h1>
            <p className="text-xl font-Open font-thin lg:pl-5">
              Butter, cheese, sugar, salt, sweet, savory. Experience the highest
              quality ingredients cooked to a degree of excellence you can&#39;t
              find anywhere else.
            </p>
          </div>
        </div>
      </div>
      <div className="w-screen static flex justify-center mt-6">
        <div className="max-w-1200px flex flex-col lg:flex-row">
          <div className="w-screen flex flex-col text-center lg:text-left lg:items-left lg:w-[600px] justify-center">
            <h1 className="text-6xl font-Arizonia z-10">Tradition</h1>
            <p className="text-xl font-Open font-thin lg:pl-5">
              At Oui Oui our traditions are time honored and that comes out in
              our classic dishes the whole family will love
            </p>
          </div>
          <div className="w-screen lg:w-[600px] lg:h-[370px] lg:overflow-hidden">
            <Image
              src={wineImg}
              alt="dining"
              className="relative lg:w-[500px] lg:h-[285px] z-10"
            />
            <div className="relative -top-[225px] left-[60px] lg:w-[500px] lg:h-[285px] bg-[#FFE8F8] z-0"></div>
          </div>
        </div>
      </div>
    </>
  );
}
