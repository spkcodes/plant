const WhereToBuyPlants = () => (
    <section className="p-6 md:p-10 bg-[#F1F8F5] flex flex-col md:flex-row items-center gap-8">
      <div className="flex-1">
        <img
          src="https://images.unsplash.com/photo-1466781783364-36c955e42a7f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8cGxhbnR8ZW58MHx8MHx8fDA%3D"
          alt="Where to Buy Plants"
          className="rounded-lg shadow-xl w-full h-auto"
        />
      </div>
  
      <div className="flex-1">
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#203E2A] mb-6 text-center md:text-left">
          Where to Buy Plants
        </h2>
        <div className="space-y-6">
          {['Visit our online store for a wide selection of indoor plants.', 
            'Check out our physical stores for personalized plant recommendations.', 
            'Contact our sales team for bulk or custom orders.'].map((text, index) => (
            <div key={index} className="flex items-start gap-4">
              <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center bg-green-600 text-white font-bold text-sm sm:text-lg md:text-xl rounded-full">
                {index + 1}
              </div>
              <p className="text-lg text-gray-700">
                {text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
  export default WhereToBuyPlants;
  