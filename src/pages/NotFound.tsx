import { Link } from 'react-router-dom';
import { Home, MapPin, BookOpen, ArrowLeft } from 'lucide-react';
import { Button } from '../components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-kaleo-sand flex items-center justify-center py-12 px-4">
      <div className="text-center max-w-2xl">
        {/* 404 */}
        <div className="mb-8">
          <span className="text-8xl md:text-9xl font-serif font-bold text-kaleo-terracotta/20">
            404
          </span>
        </div>

        <h1 className="font-serif text-3xl md:text-4xl text-kaleo-charcoal mb-4">
          Page Not Found
        </h1>
        <p className="text-kaleo-charcoal/60 text-lg mb-8">
          Oops! It seems like you've wandered off the beaten path. 
          The page you're looking for doesn't exist or has been moved.
        </p>

        {/* Quick Links */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          <Button asChild className="bg-kaleo-terracotta hover:bg-kaleo-charcoal">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/places">
              <MapPin className="w-4 h-4 mr-2" />
              Explore Destinations
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/blog">
              <BookOpen className="w-4 h-4 mr-2" />
              Read Stories
            </Link>
          </Button>
        </div>

        {/* Back Link */}
        <button
          onClick={() => window.history.back()}
          className="text-kaleo-charcoal/50 hover:text-kaleo-terracotta transition-colors inline-flex items-center"
        >
          <ArrowLeft className="w-4 h-4 mr-1" />
          Go back
        </button>

        {/* Decorative Elements */}
        <div className="mt-12 flex justify-center gap-4 opacity-30">
          <div className="w-2 h-2 bg-kaleo-terracotta rounded-full" />
          <div className="w-2 h-2 bg-kaleo-terracotta rounded-full" />
          <div className="w-2 h-2 bg-kaleo-terracotta rounded-full" />
        </div>
      </div>
    </div>
  );
}
