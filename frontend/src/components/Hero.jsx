const Hero = () => (
    <section className="p-6 md:p-10 bg-[#F1F8F5] grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
      {/* Left Side */}
      <div className="flex flex-col gap-6 md:gap-12">
        {/* Plant Image and Heading */}
        <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
          {/* Tall Plant Image */}
          <img
            src="https://images.unsplash.com/photo-1517191434949-5e90cd67d2b6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cGxhbnR8ZW58MHx8MHx8fDA%3D" // Dummy tall plant image
            alt="Tall Plant"
            className="h-64 md:h-auto object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105"
          />
          
          {/* Main Heading */}
          <h1 className="text-3xl md:text-5xl font-extrabold text-[#203E2A] text-center md:text-left">
            Beautify Your Home <br /> With Plants
          </h1>
        </div>
  
        {/* Authentic Product & Sub Image */}
        <div className="flex items-center gap-6 md:gap-8">
          <div className="flex items-center gap-3">
            <img
              src="https://via.placeholder.com/50/4CAF50/FFFFFF?text=%E2%9C%85" // Dummy badge image
              alt="100% Authentic Product"
              className="h-10"
            />
            <p className="text-base md:text-lg font-medium text-gray-700">
              100% Authentic Product
            </p>
          </div>
          <div>
            <img
              src="https://via.placeholder.com/100x100/4CAF50/FFFFFF?text=Small+Plant" // Dummy small plant image
              alt="Small Plant"
              className="h-16 md:h-20 rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
  
      {/* Right Side */}
      <div className="relative flex justify-center">
        {/* Phone Mockup */}
        <div className="w-full max-w-[330px] mx-auto">
          <img
            src="https://plus.unsplash.com/premium_photo-1675864663002-c330710c6ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhbnR8ZW58MHx8MHx8fDA%3D" // Dummy phone mockup
            alt="Phone with Plant"
            className="rounded-lg shadow-xl transition-all transform hover:scale-105"
          />
        </div>
  
        {/* Badge */}
        <div className="absolute top-4 right-4 bg-green-100 text-green-800 text-sm md:text-base font-semibold rounded-full py-2 px-4 shadow-md">
          More items you can find in our store
          <button className="ml-2 bg-[#2C6E49] text-white px-4 py-2 rounded-lg transition-all duration-300 transform hover:bg-[#1E4B34] hover:scale-105">
            Shop Now
          </button>
        </div>
      </div>
    </section>
  );
  
  export default Hero;
  