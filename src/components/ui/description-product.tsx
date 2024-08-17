const Features = () => {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-2xl font-bold mb-4">Feature 1</h3>
            <p>Description of feature 1.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-2xl font-bold mb-4">Feature 2</h3>
            <p>Description of feature 2.</p>
          </div>
          <div className="p-4 border rounded shadow-md">
            <h3 className="text-2xl font-bold mb-4">Feature 3</h3>
            <p>Description of feature 3.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
