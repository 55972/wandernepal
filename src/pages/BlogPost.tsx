import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, Calendar, User, Tag, Share2, Bookmark, Facebook, Twitter, Linkedin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { blogPosts } from '../config';
import { toast } from 'sonner';

export default function BlogPost() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const post = blogPosts.find((p) => p.id === id);
  
  if (!post) {
    return (
      <div className="min-h-screen bg-kaleo-sand flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-kaleo-charcoal mb-4">Story Not Found</h1>
          <p className="text-kaleo-charcoal/60 mb-6">The blog post you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/blog')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Blog
          </Button>
        </div>
      </div>
    );
  }

  // Get related posts (same category, excluding current)
  const relatedPosts = blogPosts
    .filter((p) => p.category === post.category && p.id !== post.id)
    .slice(0, 3);

  const handleShare = (platform: string) => {
    const url = window.location.href;
    const text = `Check out this article: ${post.title}`;
    
    let shareUrl = '';
    switch (platform) {
      case 'facebook':
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`;
        break;
      case 'twitter':
        shareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(text)}`;
        break;
      case 'linkedin':
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
        break;
    }
    
    if (shareUrl) {
      window.open(shareUrl, '_blank', 'width=600,height=400');
    }
  };

  const handleBookmark = () => {
    toast.success('Article bookmarked!');
  };

  return (
    <div className="min-h-screen bg-kaleo-sand">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4 bg-kaleo-terracotta text-white">
              {post.category}
            </Badge>
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-white mb-4">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-4 text-white/80 text-sm">
              <span className="flex items-center">
                <User className="w-4 h-4 mr-1" />
                {post.author}
              </span>
              <span className="flex items-center">
                <Calendar className="w-4 h-4 mr-1" />
                {post.date}
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-3">
            <article className="bg-white rounded-2xl p-6 md:p-10">
              {/* Excerpt */}
              <p className="text-lg md:text-xl text-kaleo-charcoal/80 italic mb-8 border-l-4 border-kaleo-terracotta pl-4">
                {post.excerpt}
              </p>

              {/* Content */}
              <div className="prose prose-kaleo max-w-none">
                {post.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('Tips for') || paragraph.startsWith('For the best') || paragraph.startsWith('Stay at') || paragraph.startsWith('Book')) {
                    return (
                      <div key={index} className="bg-kaleo-sand/50 rounded-xl p-6 my-6">
                        <h3 className="font-semibold text-kaleo-charcoal mb-3">Travel Tips</h3>
                        <p className="text-kaleo-charcoal/70 mb-0">{paragraph}</p>
                      </div>
                    );
                  }
                  if (paragraph.startsWith('- ')) {
                    const items = paragraph.split('\n').filter(item => item.startsWith('- '));
                    return (
                      <ul key={index} className="space-y-2 my-4">
                        {items.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-2 h-2 bg-kaleo-terracotta rounded-full mr-3 mt-2 flex-shrink-0" />
                            <span className="text-kaleo-charcoal/70">{item.slice(2)}</span>
                          </li>
                        ))}
                      </ul>
                    );
                  }
                  return (
                    <p key={index} className="text-kaleo-charcoal/70 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  );
                })}
              </div>

              {/* Tags */}
              <div className="mt-10 pt-6 border-t border-kaleo-sand">
                <div className="flex items-center gap-2 mb-3">
                  <Tag className="w-4 h-4 text-kaleo-terracotta" />
                  <span className="text-sm font-medium text-kaleo-charcoal">Tags</span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <Link
                      key={tag}
                      to={`/blog?tag=${tag}`}
                      className="px-3 py-1 bg-kaleo-sand rounded-full text-sm text-kaleo-charcoal/70 hover:bg-kaleo-terracotta hover:text-white transition-colors"
                    >
                      #{tag}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Share */}
              <div className="mt-8 pt-6 border-t border-kaleo-sand">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <Share2 className="w-4 h-4 text-kaleo-terracotta" />
                    <span className="text-sm font-medium text-kaleo-charcoal">Share this story</span>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => handleShare('facebook')}
                      className="p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors"
                    >
                      <Facebook className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare('twitter')}
                      className="p-2 bg-sky-500 text-white rounded-full hover:bg-sky-600 transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => handleShare('linkedin')}
                      className="p-2 bg-blue-700 text-white rounded-full hover:bg-blue-800 transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                    </button>
                    <button
                      onClick={handleBookmark}
                      className="p-2 bg-kaleo-sand text-kaleo-charcoal rounded-full hover:bg-kaleo-terracotta hover:text-white transition-colors"
                    >
                      <Bookmark className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>
            </article>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1 space-y-6">
            {/* Author Box */}
            <div className="bg-white rounded-2xl p-6">
              <h3 className="font-semibold text-kaleo-charcoal mb-4">About the Author</h3>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-kaleo-terracotta/10 flex items-center justify-center">
                  <span className="text-lg font-serif text-kaleo-terracotta">
                    {post.author.charAt(0)}
                  </span>
                </div>
                <div>
                  <p className="font-medium text-kaleo-charcoal">{post.author}</p>
                  <p className="text-xs text-kaleo-charcoal/50">Travel Writer</p>
                </div>
              </div>
            </div>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
              <div className="bg-white rounded-2xl p-6">
                <h3 className="font-semibold text-kaleo-charcoal mb-4">More in {post.category}</h3>
                <div className="space-y-4">
                  {relatedPosts.map((relatedPost) => (
                    <Link
                      key={relatedPost.id}
                      to={`/blog/${relatedPost.id}`}
                      className="block group"
                    >
                      <div className="aspect-video rounded-lg overflow-hidden mb-2">
                        <img
                          src={relatedPost.image}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                        />
                      </div>
                      <h4 className="text-sm font-medium text-kaleo-charcoal group-hover:text-kaleo-terracotta transition-colors line-clamp-2">
                        {relatedPost.title}
                      </h4>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Newsletter */}
            <div className="bg-kaleo-terracotta rounded-2xl p-6 text-white">
              <h3 className="font-semibold mb-2">Subscribe to Our Newsletter</h3>
              <p className="text-sm text-white/80 mb-4">
                Get the latest travel stories and tips delivered to your inbox.
              </p>
              <Button 
                variant="secondary" 
                className="w-full bg-white text-kaleo-terracotta hover:bg-kaleo-cream"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
