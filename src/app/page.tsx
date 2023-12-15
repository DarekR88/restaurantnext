import Image from "next/image";
import Link from "next/link";
import DiningImg from "../../public/images/carlos-lindner-sjBYA8dAw54-unsplash.jpg";

export default function Home() {
  return (
    <>
      <div className="w-screen static flex justify-center">
        <div className="max-w-1200px flex flex-col lg:flex-row">
          <div className="w-screen lg:w-[600px]">
            <Image src={DiningImg} alt="dining" className="relative lg:w-[450px] lg:h-[285px] z-10" />
            <div className="relative -top-[200px] left-[85px] lg:w-[450px] lg:h-[285px] bg-bg-tertiary z-0"></div>
          </div>
          <div className="w-screen lg:w-[600px] lg:pt-[20px]">
            <h1 className="text-6xl font-Arizonia">Timeless Flavors</h1>
            <p className="text-xl font-Open font-thin lg:pl-5">
              Butter, cheese, sugar, salt, sweet, savory. Experience the highest quality
              ingredients cooked to the highest degree of excellence.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
