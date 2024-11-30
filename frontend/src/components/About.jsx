const About = () => (
    <section className="bg-secondary p-10">
      <h2 className="text-3xl font-bold text-center text-primary">Why Choose Us?</h2>
      <p className="mt-4 text-gray-600 text-center">
        We deliver the healthiest plants to your doorstep with care and precision.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
        <div className="p-6 border rounded-lg text-center">
          <h3 className="text-xl font-bold text-primary">Fresh Plants</h3>
          <p className="mt-2 text-gray-600">All plants are freshly grown and packed.</p>
        </div>
        <div className="p-6 border rounded-lg text-center">
          <h3 className="text-xl font-bold text-primary">Free Shipping</h3>
          <p className="mt-2 text-gray-600">Enjoy free delivery on orders over $50.</p>
        </div>
        <div className="p-6 border rounded-lg text-center">
          <h3 className="text-xl font-bold text-primary">Customer Support</h3>
          <p className="mt-2 text-gray-600">24/7 support for all your queries.</p>
        </div>
      </div>
    </section>
  );
  
  export default About;
  