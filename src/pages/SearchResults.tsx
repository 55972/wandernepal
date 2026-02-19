import { useMemo } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, MapPin, BookOpen, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { places, blogPosts } from '../config';

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  // Search in places and blog posts
  const results = useMemo(() => {
    if (!query.trim()) return { places: [], posts: [] };

    const searchTerm = query.toLowerCase();

    const matchedPlaces = places.filter((place) =>
      place.name.toLowerCase().includes(searchTerm) ||
      place.shortDescription.toLowerCase().includes(searchTerm) ||
      place.fullDescription.toLowerCase().includes(searchTerm) ||
      place.category.toLowerCase().includes(searchTerm) ||
      place.thingsToDo.some(thing => thing.toLowerCase().includes(searchTerm)) ||
      place.localFoods.some(food => food.toLowerCase().includes(searchTerm))
    );

    const matchedPosts = blogPosts.filter((post) =>
      post.title.toLowerCase().includes(searchTerm) ||
      post.excerpt.toLowerCase().includes(searchTerm) ||
      post.content.toLowerCase().includes(searchTerm) ||
      post.category.toLowerCase().includes(searchTerm) ||
      post.tags.some(tag => tag.toLowerCase().includes(searchTerm))
    );

    return { places: matchedPlaces, posts: matchedPosts };
  }, [query]);

  const totalResults = results.places.length + results.posts.length;

  return (
    <div className="min-h-screen bg-kaleo-sand">
      {/* Header */}
      <div className="bg-kaleo-charcoal text-kaleo-cream py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-3xl md:text-4xl mb-4">Search Results</h1>
          
          {/* Search Input */}
          <div className="max-w-xl">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-kaleo-charcoal/40" />
              <Input
                type="text"
                value={query}
                onChange={(e) => setSearchParams(e.target.value ? { q: e.target.value } : {})}
                placeholder="Search destinations, stories, and more..."
                className="pl-12 pr-12 py-3 w-full bg-white border-0"
              />
              {query && (
                <button
                  onClick={() => setSearchParams({})}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-kaleo-charcoal/40 hover:text-kaleo-charcoal"
                >
                  <X className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
        <p className="text-sm text-kaleo-charcoal/60 mb-8">
          {query ? (
            <>Found {totalResults} {totalResults === 1 ? 'result' : 'results'} for "{query}"</>
          ) : (
            <>Enter a search term to find destinations, stories, and more</>
          )}
        </p>

        {query && totalResults > 0 ? (
          <div className="space-y-12">
            {/* Places Results */}
            {results.places.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <MapPin className="w-5 h-5 text-kaleo-terracotta" />
                  <h2 className="font-serif text-2xl text-kaleo-charcoal">Destinations</h2>
                  <Badge variant="secondary">{results.places.length}</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.places.map((place) => (
                    <Link
                      key={place.id}
                      to={`/places/${place.id}`}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-[4/3] overflow-hidden">
                        <img
                          src={place.images[0]}
                          alt={place.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-4">
                        <Badge className="mb-2" variant="secondary">{place.category}</Badge>
                        <h3 className="font-serif text-lg text-kaleo-charcoal group-hover:text-kaleo-terracotta transition-colors">
                          {place.name}
                        </h3>
                        <p className="text-sm text-kaleo-charcoal/60 line-clamp-2 mt-1">
                          {place.shortDescription}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* Blog Results */}
            {results.posts.length > 0 && (
              <section>
                <div className="flex items-center gap-2 mb-6">
                  <BookOpen className="w-5 h-5 text-kaleo-terracotta" />
                  <h2 className="font-serif text-2xl text-kaleo-charcoal">Travel Stories</h2>
                  <Badge variant="secondary">{results.posts.length}</Badge>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {results.posts.map((post) => (
                    <Link
                      key={post.id}
                      to={`/blog/${post.id}`}
                      className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="aspect-[16/10] overflow-hidden">
                        <img
                          src={post.image}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <div className="p-4">
                        <Badge className="mb-2" variant="secondary">{post.category}</Badge>
                        <h3 className="font-serif text-lg text-kaleo-charcoal group-hover:text-kaleo-terracotta transition-colors">
                          {post.title}
                        </h3>
                        <p className="text-sm text-kaleo-charcoal/60 line-clamp-2 mt-1">
                          {post.excerpt}
                        </p>
                      </div>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        ) : query ? (
          <div className="text-center py-24">
            <Search className="w-16 h-16 text-kaleo-terracotta/30 mx-auto mb-4" />
            <h3 className="font-serif text-2xl text-kaleo-charcoal mb-2">
              No results found
            </h3>
            <p className="text-kaleo-charcoal/60 mb-6">
              Try different keywords or browse our categories
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              <Button asChild variant="outline">
                <Link to="/places">
                  <MapPin className="w-4 h-4 mr-2" />
                  Browse Destinations
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/blog">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Read Stories
                </Link>
              </Button>
            </div>
          </div>
        ) : null}

        {/* Popular Searches */}
        {!query && (
          <div className="text-center py-12">
            <h3 className="font-semibold text-kaleo-charcoal mb-4">Popular Searches</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {['Everest', 'Pokhara', 'Temples', 'Trekking', 'Wildlife', 'Lumbini'].map((term) => (
                <button
                  key={term}
                  onClick={() => setSearchParams({ q: term })}
                  className="px-4 py-2 bg-white rounded-full text-sm text-kaleo-charcoal/70 hover:bg-kaleo-terracotta hover:text-white transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
