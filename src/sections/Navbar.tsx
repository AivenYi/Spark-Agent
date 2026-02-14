import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Menu, X, Sparkles, MessageCircle } from 'lucide-react';

const navLinks = [
  { label: '首页', href: '#home' },
  { label: '过程', href: '#process' },
  { label: '特色', href: '#features' },
  { label: '功能', href: '#functions' },
  { label: '团队', href: '#team' },
  { label: '合作', href: '#partners' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('#home');
            }}
            className="flex items-center gap-2 group"
          >
            <img
              src="/images/生成星火延生组织 logo-纯图标版.png"
              alt="星火延生"
              className="h-10 w-auto transition-transform group-hover:scale-105"
            />
            <span className={`font-bold text-xl hidden sm:block tracking-tight ${
              isScrolled ? 'text-red-900' : 'text-red-900'
            }`}>
              星火延生 <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block -mt-1">Spark of Yan'an</span>
            </span>
          </a>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(link.href);
                }}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isScrolled
                    ? 'text-gray-700 hover:text-red-600 hover:bg-red-50'
                    : 'text-gray-800 hover:text-red-600 hover:bg-red-50/50'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              size="sm"
              onClick={() => {
                const chatUrl = window.location.origin + window.location.pathname + '?chat=true';
                window.open(chatUrl, '_blank');
              }}
              className="bg-red-800 hover:bg-red-900 text-white font-semibold shadow-md shadow-red-900/10 transition-all active:scale-95"
            >
              <MessageCircle className="w-4 h-4 mr-2" />
              开始对话
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-red-50 transition-colors"
          >
            {isMobileMenuOpen ? (
              <X className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
            ) : (
              <Menu className={`w-6 h-6 ${isScrolled ? 'text-gray-800' : 'text-gray-800'}`} />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white/98 backdrop-blur-md rounded-2xl mt-2 p-4 shadow-xl border border-red-100">
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="px-4 py-3 rounded-lg text-gray-700 hover:text-red-600 hover:bg-red-50 font-medium transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-red-100">
                <Button
                  onClick={() => scrollToSection('#contact')}
                  className="bg-red-600 hover:bg-red-700 text-white w-full"
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  合作洽谈
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
