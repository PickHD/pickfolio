import { useState } from "react";

const HeaderArea = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="bonhomme-section fixed top-0 left-0 right-0 z-50">
        <nav style={{display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%'}}>
          <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '3rem 0', gap: '1rem'}}>
            {/* Name/Logo */}
            <div>
              <a href="/" className="text-bonhomme-white">
                Taufik
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-12">
              <a href="#work" className="text-bonhomme-whiteAlpha-90 hover:text-bonhomme-blue">
                Work
              </a>
              <a href="#about" className="text-bonhomme-whiteAlpha-90 hover:text-bonhomme-white">
                About
              </a>
              <a href="#contact" className="text-bonhomme-whiteAlpha-90 hover:text-bonhomme-blue">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="lg:hidden">
              <button
                onClick={toggleMenu}
                className="cursor-pointer text-bonhomme-whiteAlpha-90 hover:text-bonhomme-white focus:outline-none"
                aria-expanded={isMenuOpen}
                aria-label="Toggle navigation menu"
              >
                Menu
              </button>
            </div>
          </div>

          {/* Mobile menu panel */}
          <div className={`lg:hidden transition-all duration-300 ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
            <div style={{width: '100%', maxWidth: '80rem', margin: '0 auto', padding: '3rem 1rem'}}>
              <div className="bonhomme-grid">
                <div>
                  <a href="#work" onClick={handleNavClick} className="text-bonhomme-whiteAlpha-90 hover:text-bonhomme-blue">
                    Work
                  </a>
                </div>
                <div>
                  <a href="#about" onClick={handleNavClick} className="text-bonhomme-whiteAlpha-90 hover:text-bonhomme-white">
                    About
                  </a>
                </div>
                <div>
                  <a href="#contact" onClick={handleNavClick} className="text-bonhomme-whiteAlpha-90 hover:text-bonhomme-blue">
                    Contact
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default HeaderArea;
