import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b-4 border-black">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/assets/panda-waving.png" alt="Panda" className="w-12 h-12" />
          <h1 className="text-4xl font-ranchers tracking-tighter">PANDA</h1>
        </div>

        <div className="hidden md:flex gap-8 text-xl font-ranchers">
          <a href="#about" className="hover:underline">ABOUT</a>
          <a href="#tokenomics" className="hover:underline">TOKENOMICS</a>
          <a href="#roadmap" className="hover:underline">ROADMAP</a>
          <a href="#howtobuy" className="hover:underline">HOW TO BUY</a>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          {isOpen ? <X size={32} /> : <Menu size={32} />}
        </button>

        <a href="#buy" className="hidden md:block px-8 py-3 bg-black text-white font-ranchers text-xl comic-border hover:bg-yellow-300 hover:text-black transition-all">
          BUY NOW
        </a>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t-4 border-black bg-white">
          <div className="flex flex-col p-6 gap-6 text-2xl font-ranchers">
            <a href="#about" onClick={() => setIsOpen(false)}>ABOUT</a>
            <a href="#tokenomics" onClick={() => setIsOpen(false)}>TOKENOMICS</a>
            <a href="#roadmap" onClick={() => setIsOpen(false)}>ROADMAP</a>
            <a href="#howtobuy" onClick={() => setIsOpen(false)}>HOW TO BUY</a>
            <a href="#buy" className="inline-block text-center bg-black text-white py-4 comic-border" onClick={() => setIsOpen(false)}>
              BUY NOW
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;