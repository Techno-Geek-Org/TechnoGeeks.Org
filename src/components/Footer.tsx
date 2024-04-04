
function Footer() {
  return (
    <footer className="bg-black text-gray-400 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
        <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="mb-4">Techno-Geeks - A place where dreams come to reality.</p>
        </div>
        <div>
            <h2 className="text-white text-lg font-semibold mb-4">Quick Links</h2>
                <ul>
                    <li><a href="#" className="hover:text-white transition-colors duration-300">Home</a></li>
                    <li><a href="#" className="hover:text-white transition-colors duration-300">About</a></li>
                    <li><a href="#" className="hover:text-white transition-colors duration-300">Contact</a></li>
                </ul>
        </div>
        <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex flex-col">
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Facebook
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Twitter
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              Instagram
            </a>
            <a
              href="#"
              className="hover:text-white transition-colors duration-300"
            >
              LinkedIn
            </a>
          </div>
        </div>
        <div>
        <div>
          <h2 className="text-white text-lg font-semibold mb-4">Contact Us</h2>
          <p>West Bengal, India</p>
          <p>Email: technogeeksorg2k24@gmail.com</p>
          <p>Phone: +91 9474196910</p>
        </div>
        </div>
      </div>
      <p className="text-center text-xl pt-8">Copyright © 2024 Techno-Geeks. All Rights Reserved</p>
    </footer>
  )
}

export default Footer
