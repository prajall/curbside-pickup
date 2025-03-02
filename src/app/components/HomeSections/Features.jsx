import Image from "next/image";
import { happyMonkey } from "./HeroSection";

const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-sky-50 w-[300px] h-[450px] rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <Image
        src={image || "/placeholder.svg"}
        alt={title}
        width="300"
        height="300"
      />
      <div className="p-6 ">
        <h3 className="text-lg font-medium text-primary mb-2 text-center">
          {title}
        </h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      image: "/feature1.png",
      title: "Shop with Family",
      description:
        "Create shared shopping lists and collaborate with family members to ensure you get everything you need.",
    },
    {
      image: "/feature2.png",
      title: "Easy Ordering",
      description:
        "Our intuitive interface makes it simple to find products and place orders in minutes.",
    },
    {
      image: "/feature3.png",
      title: "Convenient Pickup",
      description:
        "Schedule a pickup time that works for you and have your groceries brought right to your car.",
    },
  ];

  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className={happyMonkey.className}>
          <h3 className="text-6xl mx-auto font-semibold text-primary mb-4 max-w-4xl text-center">
            Reliable Grocery Delivery at Your Convenience
          </h3>
        </div>
        <p className="text-primary max-w-2xl mx-auto text-center mb-10">
          Shop online, choose your pickup time and let us handle the rest saving
          you time and effort while ensuring fresh, quality products every time.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-center">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
