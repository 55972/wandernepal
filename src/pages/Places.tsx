import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Filter, X, Mountain, TreePine, Building2, Waves } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { places, type Place } from '../config';

type CategoryFilter = 'all' | 'mountain' | 'temple' | 'city' | 'wildlife' | 'lake' | 'trekking';

const categoryIcons: Record<string, React.ElementType> = {
  mountain: Mountain,
  temple: Building2,
  city: Building2,
  wildlife: TreePine,
  lake: Waves,
  trekking: Mountain,
};

const categoryLabels: Record<string, string> = {
  all: 'All Destinations',
  mountain: 'Mountains',
  temple: 'Temples & Heritage',
  city: 'Cities',
  wildlife: 'Wildlife',
  lake: 'Lakes',
  trekking: 'Trekking',
};

export default function Places() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryFilter>('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  // Filter places based on search and category
  const filteredPlaces = useMemo(() => {
    return places.filter((place) => {
      const matchesSearch = 
        place.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
        place.thingsToDo.some(thing => thing.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'all' || place.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Get unique categories
  const categories: CategoryFilter[] = ['all', 'mountain', 'temple', 'city', 'wildlife', 'lake', 'trekking'];

  return (
    <div className="min-h-screen bg-kaleo-sand">
      {/* Header */}
      <div className="bg-kaleo-charcoal text-kaleo-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
              Explore Destinations
            </h1>
            <p className="text-kaleo-cream/70 text-lg md:text-xl">
              Discover Nepal's most incredible places — from the world's highest peaks to ancient temples, wildlife reserves to serene lakes.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter Bar */}
      <div className="sticky top-16 lg:top-20 z-40 bg-kaleo-cream border-b border-kaleo-terracotta/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search Input */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-kaleo-charcoal/40" />
              <Input
                type="text"
                placeholder="Search destinations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 w-full bg-white border-kaleo-terracotta/20"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-kaleo-charcoal/40 hover:text-kaleo-charcoal"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Category Filter - Desktop */}
            <div className="hidden lg:flex items-center gap-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    selectedCategory === category
                      ? 'bg-kaleo-terracotta text-white'
                      : 'bg-white text-kaleo-charcoal hover:bg-kaleo-terracotta/10'
                  }`}
                >
                  {categoryLabels[category]}
                </button>
              ))}
            </div>

            {/* Mobile Filter Toggle */}
            <Button
              variant="outline"
              className="lg:hidden flex items-center gap-2"
              onClick={() => setIsFilterOpen(!isFilterOpen)}
            >
              <Filter className="w-4 h-4" />
              Filters
              {selectedCategory !== 'all' && (
                <Badge variant="secondary" className="ml-1">
                  1
                </Badge>
              )}
            </Button>
          </div>

          {/* Mobile Filter Dropdown */}
          {isFilterOpen && (
            <div className="lg:hidden mt-4 pt-4 border-t border-kaleo-terracotta/10">
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => {
                      setSelectedCategory(category);
                      setIsFilterOpen(false);
                    }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                      selectedCategory === category
                        ? 'bg-kaleo-terracotta text-white'
                        : 'bg-white text-kaleo-charcoal hover:bg-kaleo-terracotta/10'
                    }`}
                  >
                    {categoryLabels[category]}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Results Count */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <p className="text-sm text-kaleo-charcoal/60">
          Showing {filteredPlaces.length} {filteredPlaces.length === 1 ? 'destination' : 'destinations'}
          {selectedCategory !== 'all' && ` in ${categoryLabels[selectedCategory]}`}
        </p>
      </div>

      {/* Places Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        {filteredPlaces.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPlaces.map((place) => (
              <PlaceCard key={place.id} place={place} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <MapPin className="w-16 h-16 text-kaleo-terracotta/30 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-kaleo-charcoal mb-2">
              No destinations found
            </h3>
            <p className="text-kaleo-charcoal/60">
              Try adjusting your search or filter criteria
            </p>
            <Button
              variant="outline"
              className="mt-4"
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
            >
              Clear Filters
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

// Place Card Component
function PlaceCard({ place }: { place: Place }) {
  const Icon = categoryIcons[place.category] || MapPin;

  return (
    <Link to={`/places/${place.id}`} className="group">
      <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="aspect-[4/3] overflow-hidden relative">
          <img
            src={place.images[0]}
            alt={place.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute top-4 left-4">
            <Badge className="bg-white/90 text-kaleo-charcoal backdrop-blur-sm">
              <Icon className="w-3 h-3 mr-1" />
              {place.category.charAt(0).toUpperCase() + place.category.slice(1)}
            </Badge>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <h3 className="font-serif text-xl text-kaleo-charcoal mb-2 group-hover:text-kaleo-terracotta transition-colors">
            {place.name}
          </h3>
          <p className="text-sm text-kaleo-charcoal/60 line-clamp-2 mb-4 flex-1">
            {place.shortDescription}
          </p>

          {/* Quick Info */}
          <div className="flex items-center gap-4 text-xs text-kaleo-charcoal/50 mb-4">
            <span className="flex items-center">
              <MapPin className="w-3 h-3 mr-1" />
              {place.location.address.split(',')[0]}
            </span>
            <span>•</span>
            <span>{place.reviews.length} reviews</span>
          </div>

          {/* Things to Do Preview */}
          <div className="flex flex-wrap gap-2">
            {place.thingsToDo.slice(0, 2).map((thing: string, idx: number) => (
              <span
                key={idx}
                className="text-xs bg-kaleo-sand text-kaleo-charcoal/70 px-2 py-1 rounded"
              >
                {thing.length > 25 ? thing.slice(0, 25) + '...' : thing}
              </span>
            ))}
            {place.thingsToDo.length > 2 && (
              <span className="text-xs text-kaleo-terracotta">
                +{place.thingsToDo.length - 2} more
              </span>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
}
