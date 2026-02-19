import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { Search, Calendar, User, X } from 'lucide-react';
import { Input } from '../components/ui/input';
import { Badge } from '../components/ui/badge';
import { blogPosts } from '../config';

const categories = ['All', 'Trekking Stories', 'Travel Stories', 'Spiritual Journeys', 'Wildlife Adventures', 'Tips & Guides'];

export default function Blog() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return blogPosts.filter((post) => {
      const matchesSearch = 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
        post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      
      const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  // Get all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    blogPosts.forEach(post => post.tags.forEach(tag => tags.add(tag)));
    return Array.from(tags).slice(0, 10);
  }, []);

  return (
    <div className="min-h-screen bg-kaleo-sand">
      {/* Header */}
      <div className="bg-kaleo-charcoal text-kaleo-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
              Travel Stories
            </h1>
            <p className="text-kaleo-cream/70 text-lg md:text-xl">
              Inspiring tales, practical tips, and firsthand experiences from travelers exploring the magic of Nepal.
            </p>
          </div>
        </div>
      </div>

      {/* Search and Filter */}
      <div className="sticky top-16 lg:top-20 z-40 bg-kaleo-cream border-b border-kaleo-terracotta/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-kaleo-charcoal/40" />
              <Input
                type="text"
                placeholder="Search stories..."
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

            {/* Category Filter */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === category
                      ? 'bg-kaleo-terracotta text-white'
                      : 'bg-white text-kaleo-charcoal hover:bg-kaleo-terracotta/10'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Results Count */}
        <p className="text-sm text-kaleo-charcoal/60 mb-8">
          Showing {filteredPosts.length} {filteredPosts.length === 1 ? 'story' : 'stories'}
          {selectedCategory !== 'All' && ` in ${selectedCategory}`}
        </p>

        {filteredPosts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24">
            <p className="text-kaleo-charcoal/60 mb-4">No stories found matching your criteria.</p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('All');
              }}
              className="text-kaleo-terracotta hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        {/* Popular Tags */}
        <div className="mt-16 pt-8 border-t border-kaleo-terracotta/10">
          <h3 className="font-semibold text-kaleo-charcoal mb-4">Popular Tags</h3>
          <div className="flex flex-wrap gap-2">
            {allTags.map((tag) => (
              <button
                key={tag}
                onClick={() => setSearchQuery(tag)}
                className="px-3 py-1 bg-white rounded-full text-sm text-kaleo-charcoal/70 hover:bg-kaleo-terracotta hover:text-white transition-colors"
              >
                #{tag}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

// Blog Card Component
function BlogCard({ post }: { post: typeof blogPosts[0] }) {
  return (
    <Link to={`/blog/${post.id}`} className="group">
      <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 h-full flex flex-col">
        {/* Image */}
        <div className="aspect-[16/10] overflow-hidden">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="p-6 flex-1 flex flex-col">
          <Badge className="mb-3 w-fit bg-kaleo-terracotta/10 text-kaleo-terracotta hover:bg-kaleo-terracotta/20">
            {post.category}
          </Badge>

          <h3 className="font-serif text-xl text-kaleo-charcoal mb-2 group-hover:text-kaleo-terracotta transition-colors line-clamp-2">
            {post.title}
          </h3>

          <p className="text-sm text-kaleo-charcoal/60 line-clamp-3 mb-4 flex-1">
            {post.excerpt}
          </p>

          {/* Meta */}
          <div className="flex items-center justify-between text-xs text-kaleo-charcoal/50 pt-4 border-t border-kaleo-sand">
            <span className="flex items-center">
              <User className="w-3 h-3 mr-1" />
              {post.author}
            </span>
            <span className="flex items-center">
              <Calendar className="w-3 h-3 mr-1" />
              {post.date}
            </span>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-1 mt-3">
            {post.tags.slice(0, 3).map((tag) => (
              <span key={tag} className="text-xs text-kaleo-charcoal/40">
                #{tag}
              </span>
            ))}
          </div>
        </div>
      </article>
    </Link>
  );
}
