import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Clock, Check, X, ArrowRight, MapPin, Filter } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { tourPlans } from '../config';

type PlanType = 'all' | 'budget' | 'standard' | 'luxury' | 'trekking';

const typeLabels: Record<string, string> = {
  all: 'All Plans',
  budget: 'Budget Friendly',
  standard: 'Standard',
  luxury: 'Luxury',
  trekking: 'Trekking',
};

export default function TourPlans() {
  const [selectedType, setSelectedType] = useState<PlanType>('all');
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);

  const filteredPlans = tourPlans.filter((plan) => 
    selectedType === 'all' || plan.type === selectedType
  );

  return (
    <div className="min-h-screen bg-kaleo-sand">
      {/* Header */}
      <div className="bg-kaleo-charcoal text-kaleo-cream py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-4">
              Tour Plans
            </h1>
            <p className="text-kaleo-cream/70 text-lg md:text-xl">
              Curated itineraries for every type of traveler — from budget backpackers to luxury seekers, cultural explorers to adventure enthusiasts.
            </p>
          </div>
        </div>
      </div>

      {/* Filter Bar */}
      <div className="sticky top-16 lg:top-20 z-40 bg-kaleo-cream border-b border-kaleo-terracotta/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-2 overflow-x-auto pb-2">
            <Filter className="w-4 h-4 text-kaleo-terracotta flex-shrink-0" />
            {(Object.keys(typeLabels) as PlanType[]).map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                  selectedType === type
                    ? 'bg-kaleo-terracotta text-white'
                    : 'bg-white text-kaleo-charcoal hover:bg-kaleo-terracotta/10'
                }`}
              >
                {typeLabels[type]}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Plans Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <p className="text-sm text-kaleo-charcoal/60 mb-8">
          Showing {filteredPlans.length} {filteredPlans.length === 1 ? 'plan' : 'plans'}
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredPlans.map((plan) => (
            <div
              key={plan.id}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow"
            >
              {/* Image */}
              <div className="aspect-[16/9] overflow-hidden relative">
                <img
                  src={plan.image}
                  alt={plan.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-4 left-4">
                  <Badge className={`${
                    plan.type === 'luxury' ? 'bg-yellow-500' :
                    plan.type === 'budget' ? 'bg-green-500' :
                    plan.type === 'trekking' ? 'bg-blue-500' :
                    'bg-kaleo-terracotta'
                  } text-white`}>
                    {typeLabels[plan.type]}
                  </Badge>
                </div>
                <div className="absolute bottom-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-lg px-4 py-2">
                    <span className="text-2xl font-bold text-kaleo-charcoal">${plan.price.amount}</span>
                    <span className="text-sm text-kaleo-charcoal/60"> {plan.price.perPerson ? 'per person' : 'total'}</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-kaleo-charcoal/60">
                  <span className="flex items-center">
                    <Clock className="w-4 h-4 mr-1" />
                    {plan.duration}
                  </span>
                  <span className="flex items-center">
                    <MapPin className="w-4 h-4 mr-1" />
                    {plan.highlights.length} highlights
                  </span>
                </div>

                <h3 className="font-serif text-xl md:text-2xl text-kaleo-charcoal mb-2">
                  {plan.name}
                </h3>
                <p className="text-kaleo-charcoal/70 mb-4">
                  {plan.description}
                </p>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {plan.highlights.slice(0, 3).map((highlight, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {highlight}
                    </Badge>
                  ))}
                  {plan.highlights.length > 3 && (
                    <Badge variant="secondary" className="text-xs">
                      +{plan.highlights.length - 3} more
                    </Badge>
                  )}
                </div>

                {/* Expandable Itinerary */}
                {expandedPlan === plan.id && (
                  <div className="mb-6 border-t border-kaleo-sand pt-4">
                    <h4 className="font-semibold text-kaleo-charcoal mb-3">Itinerary</h4>
                    <div className="space-y-3 max-h-64 overflow-y-auto">
                      {plan.itinerary.map((day) => (
                        <div key={day.day} className="flex gap-3">
                          <div className="flex-shrink-0 w-8 h-8 rounded-full bg-kaleo-terracotta/10 text-kaleo-terracotta flex items-center justify-center text-sm font-medium">
                            {day.day}
                          </div>
                          <div>
                            <p className="font-medium text-kaleo-charcoal text-sm">{day.title}</p>
                            <ul className="mt-1">
                              {day.activities.map((activity, i) => (
                                <li key={i} className="text-xs text-kaleo-charcoal/60 flex items-center">
                                  <span className="w-1 h-1 bg-kaleo-terracotta rounded-full mr-2" />
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                {/* Inclusions/Exclusions */}
                {expandedPlan === plan.id && (
                  <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4 border-t border-kaleo-sand pt-4">
                    <div>
                      <h4 className="font-semibold text-kaleo-charcoal mb-2 text-sm">Inclusions</h4>
                      <ul className="space-y-1">
                        {plan.inclusions.slice(0, 4).map((item, i) => (
                          <li key={i} className="text-xs text-kaleo-charcoal/60 flex items-center">
                            <Check className="w-3 h-3 text-green-500 mr-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-semibold text-kaleo-charcoal mb-2 text-sm">Exclusions</h4>
                      <ul className="space-y-1">
                        {plan.exclusions.slice(0, 4).map((item, i) => (
                          <li key={i} className="text-xs text-kaleo-charcoal/60 flex items-center">
                            <X className="w-3 h-3 text-red-400 mr-1" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                )}

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    variant="outline"
                    className="flex-1"
                    onClick={() => setExpandedPlan(expandedPlan === plan.id ? null : plan.id)}
                  >
                    {expandedPlan === plan.id ? 'Show Less' : 'View Details'}
                  </Button>
                  <Button className="flex-1 bg-kaleo-terracotta hover:bg-kaleo-charcoal">
                    Book Now
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Custom Tour CTA */}
      <div className="bg-kaleo-charcoal py-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-serif text-3xl md:text-4xl text-kaleo-cream mb-4">
            Want a Custom Tour?
          </h2>
          <p className="text-kaleo-cream/70 mb-8">
            We can create a personalized itinerary based on your interests, budget, and travel dates.
          </p>
          <Button 
            asChild
            size="lg"
            className="bg-kaleo-terracotta hover:bg-kaleo-cream hover:text-kaleo-charcoal"
          >
            <Link to="/tour-guides">
              Contact Our Experts
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
