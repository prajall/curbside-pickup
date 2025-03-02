import Image from "next/image";
import { Happy_Monkey } from "next/font/google";

export const happyMonkey = Happy_Monkey({
  variable: "--font-happy-monkey",
  subsets: ["latin"],
  weight: "400",
});

const HeroSection = () => {
  return (
    <section className="bg-white py-10 shadow">
      <div className="container mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col-reverse md:flex-row items-center  h-[500px]">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <div className={happyMonkey.className}>
              <h1 className="text-7xl leading-tight md font-bold text-primary mb-4">
                Skip the line. <br /> Pick up with ease
              </h1>
            </div>
            <h3 className="text-lg font-medium text-primary mb-6">
              Order online and pick up your groceries hassle-free at your
              preferred time.
            </h3>
            <button className="hero-button shadow-md shadow-gray-600 py-2 w-72 rounded-full text-white cursor-pointer">
              Find Stores Near You
            </button>
          </div>
          <div className="md:w-1/2  ">
            <div className="flex justify-center items-center">
              <Image
                src={"/hero.png"}
                alt="Hero Image"
                width={500}
                height={500}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
