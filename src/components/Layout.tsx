import { Outlet, Link, useLocation, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { 
  Search, 
  Menu, 
  X, 
  User, 
  LogOut, 
  MapPin, 
  BookOpen, 
  Users, 
  Calendar,
  Home,
  Shield
} from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { 
  DropdownMenu, 
  DropdownMenuContent, 
  DropdownMenuItem, 
  DropdownMenuSeparator, 
  DropdownMenuTrigger 
} from './ui/dropdown-menu';
import { siteConfig, footerConfig } from '../config';

export default function Layout() {
  const { user, isAuthenticated, isAdmin, logout } = useAuth();
  const location = useLocation();
  const navigate = useNavigate();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showDev, setShowDev] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery.trim())}`);
      setSearchQuery('');
    }
  };

  const navLinks = [
    { path: '/', label: 'Home', icon: Home },
    { path: '/places', label: 'Destinations', icon: MapPin },
    { path: '/tour-plans', label: 'Tour Plans', icon: Calendar },
    { path: '/tour-guides', label: 'Tour Guides', icon: Users },
    { path: '/blog', label: 'Blog', icon: BookOpen },
  ];

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname.startsWith(path);
  };

  return (
    <div className="min-h-screen bg-kaleo-sand">
      {/* Navigation */}
      <nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-kaleo-cream/95 backdrop-blur-md shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-2">
              <span className="text-xl lg:text-2xl font-serif font-bold text-kaleo-charcoal">
                {siteConfig.siteName}
              </span>
              <span className="text-xs text-kaleo-terracotta hidden sm:inline">.com.np</span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive(link.path)
                      ? 'text-kaleo-terracotta bg-kaleo-terracotta/10'
                      : 'text-kaleo-charcoal hover:text-kaleo-terracotta hover:bg-kaleo-terracotta/5'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            {/* Search & Auth */}
            <div className="flex items-center space-x-2 lg:space-x-4">
              {/* Search - Desktop */}
              <form onSubmit={handleSearch} className="hidden md:flex items-center">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search places..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-48 lg:w-64 pr-10 bg-white/80 border-kaleo-terracotta/20 focus:border-kaleo-terracotta"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-kaleo-terracotta hover:text-kaleo-charcoal"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Auth Buttons */}
              {isAuthenticated ? (
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <button className="flex items-center space-x-2 p-1 rounded-full hover:bg-kaleo-terracotta/10 transition-colors">
                      <img 
                        src={user?.avatar} 
                        alt={user?.name}
                        className="w-8 h-8 rounded-full object-cover"
                      />
                      <span className="hidden lg:inline text-sm font-medium text-kaleo-charcoal">
                        {user?.name}
                      </span>
                    </button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="flex items-center">
                        <User className="w-4 h-4 mr-2" />
                        Profile
                      </Link>
                    </DropdownMenuItem>
                    {isAdmin && (
                      <DropdownMenuItem asChild>
                        <Link to="/admin" className="flex items-center">
                          <Shield className="w-4 h-4 mr-2" />
                          Admin Dashboard
                        </Link>
                      </DropdownMenuItem>
                    )}
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={logout} className="text-red-600">
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <div className="hidden sm:flex items-center space-x-2">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => navigate('/login')}
                    className="text-kaleo-charcoal hover:text-kaleo-terracotta"
                  >
                    Login
                  </Button>
                  <Button 
                    size="sm"
                    onClick={() => navigate('/register')}
                    className="bg-kaleo-terracotta hover:bg-kaleo-charcoal text-white"
                  >
                    Register
                  </Button>
                </div>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 rounded-lg hover:bg-kaleo-terracotta/10 transition-colors"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6 text-kaleo-charcoal" />
                ) : (
                  <Menu className="w-6 h-6 text-kaleo-charcoal" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-kaleo-cream/95 backdrop-blur-md border-t border-kaleo-terracotta/10">
            <div className="px-4 py-4 space-y-4">
              {/* Mobile Search */}
              <form onSubmit={handleSearch} className="md:hidden">
                <div className="relative">
                  <Input
                    type="search"
                    placeholder="Search places..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full pr-10 bg-white/80"
                  />
                  <button 
                    type="submit"
                    className="absolute right-2 top-1/2 -translate-y-1/2 text-kaleo-terracotta"
                  >
                    <Search className="w-4 h-4" />
                  </button>
                </div>
              </form>

              {/* Mobile Nav Links */}
              <div className="space-y-1">
                {navLinks.map((link) => (
                  <Link
                    key={link.path}
                    to={link.path}
                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${
                      isActive(link.path)
                        ? 'text-kaleo-terracotta bg-kaleo-terracotta/10'
                        : 'text-kaleo-charcoal hover:bg-kaleo-terracotta/5'
                    }`}
                  >
                    <link.icon className="w-5 h-5" />
                    <span className="font-medium">{link.label}</span>
                  </Link>
                ))}
              </div>

              {/* Mobile Auth */}
              {!isAuthenticated && (
                <div className="sm:hidden pt-4 border-t border-kaleo-terracotta/10 space-y-2">
                  <Button 
                    variant="outline" 
                    className="w-full"
                    onClick={() => navigate('/login')}
                  >
                    Login
                  </Button>
                  <Button 
                    className="w-full bg-kaleo-terracotta hover:bg-kaleo-charcoal"
                    onClick={() => navigate('/register')}
                  >
                    Register
                  </Button>
                </div>
              )}
            </div>
          </div>
        )}
      </nav>

      {/* Main Content */}
      <main className="pt-16 lg:pt-20">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-kaleo-charcoal text-kaleo-cream">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Brand */}
            <div className="lg:col-span-1">
              <Link to="/" className="inline-block">
                <span className="text-2xl font-serif font-bold">{siteConfig.siteName}</span>
                <span className="text-xs text-kaleo-terracotta">.com.np</span>
              </Link>
              <p className="mt-4 text-sm text-kaleo-cream/70 leading-relaxed">
                {siteConfig.siteDescription}
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Quick Links</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link 
                      to={link.path}
                      className="text-sm text-kaleo-cream/70 hover:text-kaleo-terracotta transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">Contact</h3>
              <ul className="space-y-2">
                {footerConfig.contact.map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href}
                      className="text-sm text-kaleo-cream/70 hover:text-kaleo-terracotta transition-colors"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
              <div className="mt-4">
                <p className="text-xs text-kaleo-cream/50">{footerConfig.locationLabel}</p>
                {footerConfig.address.map((line, index) => (
                  <p key={index} className="text-sm text-kaleo-cream/70">{line}</p>
                ))}
              </div>
            </div>

            {/* Social & CTA */}
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider mb-4">{footerConfig.socialLabel}</h3>
              <div className="flex space-x-4">
                {footerConfig.socials.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-10 h-10 rounded-full bg-kaleo-cream/10 flex items-center justify-center hover:bg-kaleo-terracotta transition-colors"
                  >
                    {social.platform === 'instagram' ? (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    )}
                  </a>
                ))}
              </div>
              <div className="mt-6">
                <Button 
                  className="bg-kaleo-terracotta hover:bg-kaleo-cream hover:text-kaleo-charcoal transition-colors"
                >
                  {footerConfig.ctaText}
                </Button>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-kaleo-cream/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <p className="text-sm text-kaleo-cream/50">
                {footerConfig.copyright}
              </p>
              <div className="flex space-x-6 items-center">
                {footerConfig.links.map((link, index) => (
                  <Link
                    key={index}
                    to={link.href}
                    className="text-sm text-kaleo-cream/50 hover:text-kaleo-terracotta transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <button
                  onClick={() => setShowDev(true)}
                  className="text-sm text-kaleo-cream/50 hover:text-kaleo-terracotta transition-colors"
                >
                  Made with ❤️
                </button>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Developer Modal */}
      {showDev && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setShowDev(false)}
        >
          <div
            className="bg-kaleo-charcoal border border-kaleo-cream/20 rounded-2xl p-8 text-center shadow-xl max-w-sm w-full mx-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={footerConfig.developer.photo}
              alt={footerConfig.developer.name}
              className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-2 border-kaleo-terracotta"
            />
            <h2 className="font-display text-2xl text-kaleo-cream">{footerConfig.developer.name}</h2>
            <p className="font-body text-sm text-kaleo-cream/50 mb-4">{footerConfig.developer.role}</p>
            <a
              href={footerConfig.developer.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-body text-sm text-kaleo-terracotta hover:underline"
            >
              {footerConfig.developer.instagramHandle}
            </a>
            <br />
            <button
              onClick={() => setShowDev(false)}
              className="mt-6 px-6 py-2 border border-kaleo-cream/20 rounded-full text-xs text-kaleo-cream/50 hover:text-kaleo-cream transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
