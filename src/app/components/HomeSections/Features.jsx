const FeatureCard = ({ image, title, description }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm border border-gray-100">
      <img
        src={image || "/placeholder.svg"}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <div className="p-6 bg-sky-50">
        <h3 className="text-lg font-medium text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const Features = () => {
  const features = [
    {
      image: "/placeholder.svg?height=300&width=300",
      title: "Shop with Family",
      description:
        "Create shared shopping lists and collaborate with family members to ensure you get everything you need.",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      title: "Easy Ordering",
      description:
        "Our intuitive interface makes it simple to find products and place orders in minutes.",
    },
    {
      image: "/placeholder.svg?height=300&width=300",
      title: "Convenient Pickup",
      description:
        "Schedule a pickup time that works for you and have your groceries brought right to your car.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
