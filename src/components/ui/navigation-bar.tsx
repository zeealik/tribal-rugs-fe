const Navbar = () => {
  return (
    <nav className="bg-blue-600 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <a href="/" className="text-white text-2xl font-bold">
          MyApp
        </a>
        <div className="space-x-4">
          <a href="#features" className="text-white">
            Features
          </a>
          <a href="#about" className="text-white">
            About
          </a>
          <a href="#contact" className="text-white">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
