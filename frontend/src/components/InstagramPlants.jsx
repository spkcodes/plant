const InstagramPlants = () => {
    const instagramImages = [
      { id: 1, image: "/images/instagram-1.jpg" },
      { id: 2, image: "/images/instagram-2.jpg" },
      { id: 3, image: "/images/instagram-3.jpg" },
      { id: 4, image: "/images/instagram-4.jpg" },
      { id: 5, image: "/images/instagram-5.jpg" },
      { id: 6, image: "/images/instagram-6.jpg" },
    ];
  
    return (
      <section className="p-10 bg-white">
        <h2 className="text-3xl font-extrabold text-center text-[#203E2A]">
          Instagram Plants
        </h2>
        <p className="text-center text-gray-600 mt-2">
          Follow us on Instagram for more inspiration!
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-8">
          {instagramImages.map((item) => (
            <div key={item.id} className="overflow-hidden rounded-md shadow-lg">
              <img
                src={item.image}
                alt={`Instagram Plant ${item.id}`}
                className="w-full h-40 object-cover transform transition-all hover:scale-105"
              />
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default InstagramPlants;
  