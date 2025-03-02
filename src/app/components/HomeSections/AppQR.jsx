import Image from "next/image";

const AppQR = () => {
  return (
    <div className="container max-w-5xl mx-auto relative flex items-center bg-[#E6F4F1] rounded-lg py-4 my-10 shadow-md w-full ">
      {/* Left Image */}
      <div className="absolute bottom-0 left-4">
        <Image
          src="/cycle.png" // Change this to your actual image name
          alt="Illustration"
          width={120}
          height={120}
          className="object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="flex-1 text-center px-8">
        <h2 className="text-lg font-semibold text-gray-800">
          Get the full KSVA Curbside experience
        </h2>
        <p className="text-sm text-gray-600">
          Scan the QR code with your camera. First delivery is free.
        </p>
      </div>

      {/* QR Code */}
      <div className="w-16 h-16">
        <Image
          src="/qr-code.png" // Change this to your actual QR code image
          alt="QR Code"
          width={64}
          height={64}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default AppQR;
