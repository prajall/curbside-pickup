export default function HeroSection({ username = "Kritika" }) {
  return (
    <div className="relative w-full overflow-hidden bg-white py-12 px-4 md:px-8 lg:px-">
      {/* Background elements */}
      <div className="absolute -left-14 top-0 h-full w-1/4 max-w-[150px]">
        <img
          src="/bottle.png"
          alt="Decorative bottle"
          width={300}
          height={300}
          className="h-auto w-full object-contain"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 mx-auto flex max-w-6xl flex-col md:flex-row items-center justify-between">
        {/* Text content */}
        <div className="md:max-w-[70%] mb-8 md:mb-0 pt-16 md:pt-0">
          <h1 className="text-3xl md:text-4xl lg:text-6xl font-semibold text-primary mb-4">
            Welcome back, <span className="font-bold">{username}!</span>
          </h1>
          <p className="text-2xl md:text-3xl lg:text-3xl font-medium text-primary leading-relaxed">
            Find fresh deals and trending products just for you!
          </p>
        </div>

        {/* Illustration */}
        <div className="relative h-[300px] md:h-[400px] w-full md:w-auto">
          <img
            src="/fruits-stack.png"
            alt="Stack of fresh fruits and vegetables"
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
}
