
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow-sm">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-bold text-blue-900">React<span className="text-blue-500">TS</span></h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#" className="text-blue-900 hover:text-blue-600 font-medium">Home</a>
          <a href="#features" className="text-blue-900 hover:text-blue-600 font-medium">Features</a>
          <a href="#" className="text-blue-900 hover:text-blue-600 font-medium">About</a>
          <a href="#" className="text-blue-900 hover:text-blue-600 font-medium">Contact</a>
          <Button className="bg-blue-600 hover:bg-blue-700">Get Started</Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X /> : <Menu />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white py-4 px-4 shadow-md animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <a href="#" className="text-blue-900 hover:text-blue-600 font-medium py-2">Home</a>
            <a href="#features" className="text-blue-900 hover:text-blue-600 font-medium py-2">Features</a>
            <a href="#" className="text-blue-900 hover:text-blue-600 font-medium py-2">About</a>
            <a href="#" className="text-blue-900 hover:text-blue-600 font-medium py-2">Contact</a>
            <Button className="bg-blue-600 hover:bg-blue-700 w-full">Get Started</Button>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
