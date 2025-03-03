import { happyMonkey } from "@/app/components/HomeSections/HeroSection";
import Image from "next/image";
import { GiPathDistance } from "react-icons/gi";

const StoreCard = ({ name, logo, address, distance }) => {
  return (
    <div className="bg-white rounded-2xl border border-gray-200 p-4 flex flex-col ">
      <div className="flex items-center mb-4">
        <Image
          src={logo || "/placeholder.svg"}
          alt={name}
          width="100"
          height="100"
          className=" object-contain mr-4 border-none outline-none"
        />
        <div>
          <h3 className="text-lg font-medium text-gray-800">{name}</h3>
        </div>
      </div>

      <div className="w-full mt-2">
        <div className="flex items-start mb-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 text-red-500 mt-0.5 flex-shrink-0"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
              clipRule="evenodd"
            />
          </svg>
          <div className="ml-2">
            {address && <p className="text-sm text-gray-600">{address}</p>}
          </div>
        </div>

        {distance && (
          <div className="flex items-center mb-4">
            <GiPathDistance color="#43ED43" />
            <span className="ml-2 text-sm text-gray-600">{distance}</span>
          </div>
        )}
      </div>

      <button className="mt-auto w-fit px-4 py-1 rounded-full mx-auto cursor-pointer hover:bg-primary duration-300 bg-secondary text-white font-medium ">
        Select Store
      </button>
    </div>
  );
};

const Stores = () => {
  const stores = [
    {
      name: "Whole Foods Market",
      logo: "/wholeFoods.png",
      address: "4315 Arden Way, Sacramento CA 95864",
      distance: "5 miles",
    },
    {
      name: "Nugget Markets",
      logo: "/nuggetMarkets.png",
      address: "1040 Florin Rd, Sacramento CA 95831",
      distance: "8 miles",
    },
    {
      name: "Trader Joe's",
      logo: "/Traderjoe.png",
      address: "2625 Marconi Ave, Sacramento CA 95821",
      distance: "6 miles",
    },
    {
      name: "Safeway",
      logo: "/safeway.png",
      address: "2851 Del Paso Rd, Sacramento CA 95834",
      distance: "7 miles",
    },
  ];

  return (
    <section className="py-10 ">
      <div className="container mx-auto px-4">
        <div className=" mb-10">
          <div className={happyMonkey.className}>
            <h2 className="text-4xl font-semibold text-primary mb-4">
              Stores for you
            </h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6  mx-auto">
          {stores.map((store, index) => (
            <StoreCard key={index} {...store} />
          ))}
        </div>

        <div className="text-center mt-8">
          <button className="text-teal-600 font-medium hover:underline cursor-pointer">
            Show all
          </button>
        </div>
      </div>
    </section>
  );
};

export default Stores;
