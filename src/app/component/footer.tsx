
function Footer(){

  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Bandage. All rights reserved.</p>
        <nav className="mt-4">
          <a href="/about" className="text-gray-400 hover:text-white mx-2">About Us</a>
          <a href="/contact" className="text-gray-400 hover:text-white mx-2">Contact Us</a>
          <a href="/blog" className="text-gray-400 hover:text-white mx-2">Privacy Policy</a>
          <a href="/shop" className="text-gray-400 hover:text-white mx-2">Terms of Service</a>
        </nav>
        <div className="mt-4">
          <p>Follow us:</p>
          <a href="https://www.linkedin.com/in/furqan-k-44991231a?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          <a href="https://github.com/furqankhan15356" className="text-gray-400 hover:text-white mx-2">GitHub</a>
          <a href="https://www.instagram.com/furqan_khan134?igsh=dmYxczV1dGZ0cmk0" className="text-gray-400 hover:text-white mx-2">Instagram</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;