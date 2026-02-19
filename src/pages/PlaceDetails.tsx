import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  ArrowLeft, 
  MapPin, 
  Calendar, 
  DollarSign, 
  Star, 
  Utensils, 
  Compass, 
  Info,
  Check,
  Send
} from 'lucide-react';
import { places, type Review } from '../config';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { Textarea } from '../components/ui/textarea';
import { toast } from 'sonner';

export default function PlaceDetails() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth();
  
  const place = places.find((p) => p.id === id);
  
  if (!place) {
    return (
      <div className="min-h-screen bg-kaleo-sand flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-4xl text-kaleo-charcoal mb-4">Destination Not Found</h1>
          <p className="text-kaleo-charcoal/60 mb-6">The destination you're looking for doesn't exist.</p>
          <Button onClick={() => navigate('/places')}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Destinations
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-kaleo-sand">
      {/* Hero Image */}
      <div className="relative h-[50vh] md:h-[60vh]">
        <img
          src={place.images[0]}
          alt={place.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 z-10 p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
        >
          <ArrowLeft className="w-5 h-5 text-white" />
        </button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-4 md:p-8">
          <div className="max-w-7xl mx-auto">
            <Badge className="mb-4 bg-kaleo-terracotta text-white">
              {place.category.charAt(0).toUpperCase() + place.category.slice(1)}
            </Badge>
            <h1 className="font-serif text-3xl md:text-5xl lg:text-6xl text-white mb-2">
              {place.name}
            </h1>
            <div className="flex items-center text-white/80 text-sm md:text-base">
              <MapPin className="w-4 h-4 mr-1" />
              {place.location.address}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <Tabs defaultValue="overview" className="space-y-8">
          {/* Tabs Navigation */}
          <TabsList className="w-full justify-start overflow-x-auto bg-white p-1 rounded-xl">
            <TabsTrigger value="overview" className="data-[state=active]:bg-kaleo-terracotta data-[state=active]:text-white">
              Overview
            </TabsTrigger>
            <TabsTrigger value="guide" className="data-[state=active]:bg-kaleo-terracotta data-[state=active]:text-white">
              Travel Guide
            </TabsTrigger>
            <TabsTrigger value="itinerary" className="data-[state=active]:bg-kaleo-terracotta data-[state=active]:text-white">
              Itinerary
            </TabsTrigger>
            <TabsTrigger value="reviews" className="data-[state=active]:bg-kaleo-terracotta data-[state=active]:text-white">
              Reviews ({place.reviews.length})
            </TabsTrigger>
          </TabsList>

          {/* Overview Tab */}
          <TabsContent value="overview" className="space-y-8">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-8">
                {/* Description */}
                <section className="bg-white rounded-2xl p-6 md:p-8">
                  <h2 className="font-serif text-2xl text-kaleo-charcoal mb-4">About {place.name}</h2>
                  <p className="text-kaleo-charcoal/70 leading-relaxed">
                    {place.fullDescription}
                  </p>
                </section>

                {/* Religious Importance */}
                {place.religiousImportance && (
                  <section className="bg-white rounded-2xl p-6 md:p-8">
                    <h2 className="font-serif text-2xl text-kaleo-charcoal mb-4">Religious Significance</h2>
                    <p className="text-kaleo-charcoal/70 leading-relaxed">
                      {place.religiousImportance}
                    </p>
                  </section>
                )}

                {/* Cultural Importance */}
                {place.culturalImportance && (
                  <section className="bg-white rounded-2xl p-6 md:p-8">
                    <h2 className="font-serif text-2xl text-kaleo-charcoal mb-4">Cultural Heritage</h2>
                    <p className="text-kaleo-charcoal/70 leading-relaxed">
                      {place.culturalImportance}
                    </p>
                  </section>
                )}

                {/* Things to Do */}
                <section className="bg-white rounded-2xl p-6 md:p-8">
                  <h2 className="font-serif text-2xl text-kaleo-charcoal mb-4">Things to Do</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {place.thingsToDo.map((thing, index) => (
                      <div key={index} className="flex items-start">
                        <Check className="w-5 h-5 text-kaleo-terracotta mr-3 mt-0.5 flex-shrink-0" />
                        <span className="text-kaleo-charcoal/70">{thing}</span>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Local Foods */}
                <section className="bg-white rounded-2xl p-6 md:p-8">
                  <h2 className="font-serif text-2xl text-kaleo-charcoal mb-4">Local Cuisine</h2>
                  <div className="flex flex-wrap gap-3">
                    {place.localFoods.map((food, index) => (
                      <Badge key={index} variant="secondary" className="text-sm py-1 px-3">
                        <Utensils className="w-3 h-3 mr-1" />
                        {food}
                      </Badge>
                    ))}
                  </div>
                </section>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Quick Facts */}
                <section className="bg-white rounded-2xl p-6">
                  <h3 className="font-semibold text-kaleo-charcoal mb-4">Quick Facts</h3>
                  <div className="space-y-4">
                    {Object.entries(place.quickFacts).map(([key, value]) => (
                      <div key={key}>
                        <p className="text-xs text-kaleo-charcoal/50 uppercase tracking-wider">{key}</p>
                        <p className="text-sm text-kaleo-charcoal">{value}</p>
                      </div>
                    ))}
                  </div>
                </section>

                {/* Best Time */}
                <section className="bg-kaleo-terracotta/10 rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <Calendar className="w-5 h-5 text-kaleo-terracotta mr-2" />
                    <h3 className="font-semibold text-kaleo-charcoal">Best Time to Visit</h3>
                  </div>
                  <p className="text-sm text-kaleo-charcoal/70">{place.bestTimeToVisit}</p>
                </section>

                {/* Estimated Expenses */}
                <section className="bg-white rounded-2xl p-6">
                  <div className="flex items-center mb-4">
                    <DollarSign className="w-5 h-5 text-kaleo-terracotta mr-2" />
                    <h3 className="font-semibold text-kaleo-charcoal">Estimated Expenses</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-kaleo-charcoal/60">Budget</span>
                      <span className="text-sm font-medium text-kaleo-charcoal">{place.estimatedExpenses.budget}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-kaleo-charcoal/60">Mid-Range</span>
                      <span className="text-sm font-medium text-kaleo-charcoal">{place.estimatedExpenses.midRange}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-sm text-kaleo-charcoal/60">Luxury</span>
                      <span className="text-sm font-medium text-kaleo-charcoal">{place.estimatedExpenses.luxury}</span>
                    </div>
                  </div>
                </section>

                {/* Location */}
                <section className="bg-white rounded-2xl p-6">
                  <div className="flex items-center mb-3">
                    <MapPin className="w-5 h-5 text-kaleo-terracotta mr-2" />
                    <h3 className="font-semibold text-kaleo-charcoal">Location</h3>
                  </div>
                  <p className="text-sm text-kaleo-charcoal/70 mb-4">{place.location.address}</p>
                  <div className="aspect-video bg-kaleo-sand rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="w-8 h-8 text-kaleo-terracotta/40 mx-auto mb-2" />
                      <p className="text-xs text-kaleo-charcoal/50">
                        {place.location.latitude.toFixed(4)}, {place.location.longitude.toFixed(4)}
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </TabsContent>

          {/* Travel Guide Tab */}
          <TabsContent value="guide">
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <h2 className="font-serif text-2xl text-kaleo-charcoal mb-6">Complete Travel Guide</h2>
              <div className="prose prose-kaleo max-w-none">
                <div className="bg-kaleo-sand/50 rounded-xl p-6 mb-6">
                  <div className="flex items-start">
                    <Compass className="w-6 h-6 text-kaleo-terracotta mr-4 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-kaleo-charcoal mb-2">Travel Tips</h3>
                      <p className="text-kaleo-charcoal/70 leading-relaxed">{place.travelGuide}</p>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <h3 className="font-semibold text-kaleo-charcoal mb-3">What to Pack</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-kaleo-charcoal/70">
                        <Check className="w-4 h-4 text-kaleo-terracotta mr-2" />
                        Comfortable walking shoes
                      </li>
                      <li className="flex items-center text-kaleo-charcoal/70">
                        <Check className="w-4 h-4 text-kaleo-terracotta mr-2" />
                        Weather-appropriate clothing
                      </li>
                      <li className="flex items-center text-kaleo-charcoal/70">
                        <Check className="w-4 h-4 text-kaleo-terracotta mr-2" />
                        Sunscreen and sunglasses
                      </li>
                      <li className="flex items-center text-kaleo-charcoal/70">
                        <Check className="w-4 h-4 text-kaleo-terracotta mr-2" />
                        Water bottle
                      </li>
                      <li className="flex items-center text-kaleo-charcoal/70">
                        <Check className="w-4 h-4 text-kaleo-terracotta mr-2" />
                        Camera
                      </li>
                    </ul>
                  </div>
                  <div>
                    <h3 className="font-semibold text-kaleo-charcoal mb-3">Important Notes</h3>
                    <ul className="space-y-2">
                      <li className="flex items-center text-kaleo-charcoal/70">
                        <Info className="w-4 h-4 text-kaleo-terracotta mr-2" />
                        Respect local customs and traditions
                      </li>
                      <li className="flex items-center text-kaleo-charcoal/70">
                        <Info className="w-4 h-4 text-kaleo-terracotta mr-2" />
                        Carry cash (NPR) for small purchases
                      </li>
                      <li className="flex items-center text-kaleo-charcoal/70">
                        <Info className="w-4 h-4 text-kaleo-terracotta mr-2" />
                        Book accommodations in advance
                      </li>
                      <li className="flex items-center text-kaleo-charcoal/70">
                        <Info className="w-4 h-4 text-kaleo-terracotta mr-2" />
                        Get travel insurance
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>

          {/* Itinerary Tab */}
          <TabsContent value="itinerary">
            <div className="bg-white rounded-2xl p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="font-serif text-2xl text-kaleo-charcoal">Suggested Itinerary</h2>
                  <p className="text-kaleo-charcoal/60 mt-1">Duration: {place.tourPlan.duration}</p>
                </div>
                <Button 
                  asChild
                  className="bg-kaleo-terracotta hover:bg-kaleo-charcoal"
                >
                  <Link to="/tour-plans">
                    View Full Tour Plans
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {place.tourPlan.itinerary.map((day, index) => (
                  <div 
                    key={index}
                    className="flex gap-4 p-4 rounded-xl bg-kaleo-sand/50 hover:bg-kaleo-sand transition-colors"
                  >
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-kaleo-terracotta text-white flex items-center justify-center font-semibold">
                      {day.day}
                    </div>
                    <div>
                      <h3 className="font-semibold text-kaleo-charcoal mb-1">{day.title}</h3>
                      <p className="text-sm text-kaleo-charcoal/70">{day.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          {/* Reviews Tab */}
          <TabsContent value="reviews">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Reviews List */}
              <div className="lg:col-span-2 space-y-6">
                <div className="bg-white rounded-2xl p-6">
                  <h2 className="font-serif text-2xl text-kaleo-charcoal mb-6">
                    Traveler Reviews ({place.reviews.length})
                  </h2>
                  
                  {place.reviews.length > 0 ? (
                    <div className="space-y-6">
                      {place.reviews.map((review) => (
                        <ReviewCard key={review.id} review={review} />
                      ))}
                    </div>
                  ) : (
                    <div className="text-center py-12">
                      <p className="text-kaleo-charcoal/60">No reviews yet. Be the first to review!</p>
                    </div>
                  )}
                </div>
              </div>

              {/* Add Review */}
              <div className="lg:col-span-1">
                <div className="bg-white rounded-2xl p-6 sticky top-24">
                  <h3 className="font-semibold text-kaleo-charcoal mb-4">Write a Review</h3>
                  {isAuthenticated ? (
                    <ReviewForm placeId={place.id} />
                  ) : (
                    <div className="text-center py-6">
                      <p className="text-kaleo-charcoal/60 mb-4">Sign in to leave a review</p>
                      <Button asChild className="bg-kaleo-terracotta hover:bg-kaleo-charcoal">
                        <Link to="/login">Sign In</Link>
                      </Button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Review Card Component
function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="border-b border-kaleo-sand pb-6 last:border-0 last:pb-0">
      <div className="flex items-start justify-between mb-2">
        <div>
          <h4 className="font-semibold text-kaleo-charcoal">{review.userName}</h4>
          <p className="text-xs text-kaleo-charcoal/50">{review.date}</p>
        </div>
        <div className="flex items-center">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < review.rating
                  ? 'text-yellow-400 fill-yellow-400'
                  : 'text-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
      <p className="text-kaleo-charcoal/70">{review.comment}</p>
    </div>
  );
}

// Review Form Component
function ReviewForm({ placeId: _placeId }: { placeId: string }) {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast.success('Review submitted successfully!');
    setComment('');
    setRating(5);
    setIsSubmitting(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-sm font-medium text-kaleo-charcoal mb-2">Rating</label>
        <div className="flex gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              key={star}
              type="button"
              onClick={() => setRating(star)}
              className="p-1"
            >
              <Star
                className={`w-6 h-6 ${
                  star <= rating
                    ? 'text-yellow-400 fill-yellow-400'
                    : 'text-gray-300'
                }`}
              />
            </button>
          ))}
        </div>
      </div>
      <div>
        <label className="block text-sm font-medium text-kaleo-charcoal mb-2">Your Review</label>
        <Textarea
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          placeholder="Share your experience..."
          rows={4}
          required
          className="resize-none"
        />
      </div>
      <Button
        type="submit"
        disabled={isSubmitting || !comment.trim()}
        className="w-full bg-kaleo-terracotta hover:bg-kaleo-charcoal"
      >
        {isSubmitting ? 'Submitting...' : 'Submit Review'}
        <Send className="w-4 h-4 ml-2" />
      </Button>
    </form>
  );
}
