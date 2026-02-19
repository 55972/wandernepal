import { useState } from 'react';
import { Mail, Phone, Star, Award, Languages, Calendar, Send, CheckCircle } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { toast } from 'sonner';
import { tourGuides } from '../config';

export default function TourGuide() {
  const [selectedGuide, setSelectedGuide] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-kaleo-sand">
      {/* Header */}
      <div className="bg-kaleo-charcoal text-kaleo-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
              Expert Tour Guides
            </h1>
            <p className="text-kaleo-cream/70 text-lg md:text-xl">
              Connect with our certified local guides who bring Nepal's mountains, culture, and wildlife to life with their expertise and passion.
            </p>
          </div>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tourGuides.map((guide) => (
            <div
              key={guide.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              <div className="p-6 md:p-8">
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="w-24 h-24 md:w-32 md:h-32 rounded-full bg-kaleo-sand flex items-center justify-center">
                      <span className="text-3xl md:text-4xl font-serif text-kaleo-terracotta">
                        {guide.name.charAt(0)}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-2">
                      <div>
                        <h3 className="font-serif text-xl md:text-2xl text-kaleo-charcoal">
                          {guide.name}
                        </h3>
                        <p className="text-kaleo-terracotta text-sm">{guide.specialty}</p>
                      </div>
                      <div className="flex items-center bg-yellow-50 px-2 py-1 rounded">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-sm font-medium">{guide.rating}</span>
                      </div>
                    </div>

                    <p className="text-kaleo-charcoal/70 text-sm mb-4">
                      {guide.description}
                    </p>

                    {/* Details */}
                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="flex items-center text-sm text-kaleo-charcoal/60">
                        <Calendar className="w-4 h-4 mr-2 text-kaleo-terracotta" />
                        {guide.experience} experience
                      </div>
                      <div className="flex items-center text-sm text-kaleo-charcoal/60">
                        <Award className="w-4 h-4 mr-2 text-kaleo-terracotta" />
                        {guide.reviews} reviews
                      </div>
                    </div>

                    {/* Languages */}
                    <div className="flex items-center gap-2 mb-4">
                      <Languages className="w-4 h-4 text-kaleo-terracotta" />
                      <div className="flex flex-wrap gap-1">
                        {guide.languages.map((lang) => (
                          <Badge key={lang} variant="secondary" className="text-xs">
                            {lang}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Certifications */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {guide.certifications.map((cert) => (
                        <Badge key={cert} className="bg-kaleo-terracotta/10 text-kaleo-terracotta text-xs">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {cert}
                        </Badge>
                      ))}
                    </div>

                    {/* Contact Buttons */}
                    <div className="flex flex-wrap gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                        onClick={() => window.location.href = `mailto:${guide.contact.email}`}
                      >
                        <Mail className="w-4 h-4 mr-2" />
                        Email
                      </Button>
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex items-center"
                        onClick={() => window.location.href = `tel:${guide.contact.phone}`}
                      >
                        <Phone className="w-4 h-4 mr-2" />
                        Call
                      </Button>
                      <Button
                        size="sm"
                        className="bg-kaleo-terracotta hover:bg-kaleo-charcoal flex-1"
                        onClick={() => setSelectedGuide(guide.id)}
                      >
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Booking Form Modal */}
      {selectedGuide && (
        <BookingModal
          guide={tourGuides.find(g => g.id === selectedGuide)!}
          onClose={() => setSelectedGuide(null)}
        />
      )}
    </div>
  );
}

// Booking Modal Component
function BookingModal({ guide, onClose }: { guide: typeof tourGuides[0]; onClose: () => void }) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success(`Booking request sent to ${guide.name}! They will contact you soon.`);
    setIsSubmitting(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
      <div className="bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="font-serif text-xl text-kaleo-charcoal">Book a Guide</h3>
              <p className="text-sm text-kaleo-charcoal/60">Request {guide.name}</p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-kaleo-sand rounded-full transition-colors"
            >
              <span className="sr-only">Close</span>
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-kaleo-charcoal mb-1">Your Name</label>
              <Input
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="John Doe"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-kaleo-charcoal mb-1">Email</label>
              <Input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-kaleo-charcoal mb-1">Phone</label>
              <Input
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="+1 234 567 890"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-kaleo-charcoal mb-1">Preferred Date</label>
              <Input
                type="date"
                required
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-kaleo-charcoal mb-1">Message</label>
              <Textarea
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Tell us about your trip plans..."
                rows={3}
              />
            </div>
            <div className="flex gap-3 pt-4">
              <Button
                type="button"
                variant="outline"
                className="flex-1"
                onClick={onClose}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                disabled={isSubmitting}
                className="flex-1 bg-kaleo-terracotta hover:bg-kaleo-charcoal"
              >
                {isSubmitting ? 'Sending...' : 'Send Request'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
