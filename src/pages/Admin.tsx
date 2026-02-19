import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  MapPin, 
  BookOpen, 
  Users, 
  Settings, 
  Plus, 
  Edit, 
  Trash2, 
  Eye,
  TrendingUp
} from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs';
import { places, blogPosts, tourGuides } from '../config';
import { toast } from 'sonner';

export default function Admin() {
  const { isAuthenticated, isAdmin } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login', { state: { from: { pathname: '/admin' } } });
    } else if (!isAdmin) {
      toast.error('Access denied. Admin privileges required.');
      navigate('/');
    }
  }, [isAuthenticated, isAdmin, navigate]);

  if (!isAuthenticated || !isAdmin) {
    return null;
  }

  // Stats
  const stats = [
    { label: 'Total Destinations', value: places.length, icon: MapPin, color: 'bg-blue-500' },
    { label: 'Blog Posts', value: blogPosts.length, icon: BookOpen, color: 'bg-green-500' },
    { label: 'Tour Guides', value: tourGuides.length, icon: Users, color: 'bg-purple-500' },
    { label: 'Total Reviews', value: places.reduce((acc, p) => acc + p.reviews.length, 0), icon: TrendingUp, color: 'bg-orange-500' },
  ];

  return (
    <div className="min-h-screen bg-kaleo-sand">
      {/* Header */}
      <div className="bg-kaleo-charcoal text-kaleo-cream py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="font-serif text-3xl md:text-4xl">Admin Dashboard</h1>
              <p className="text-kaleo-cream/70 mt-1">Manage your website content</p>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
              <span className="text-sm text-kaleo-cream/70">Online</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="bg-white rounded-xl p-4 shadow-sm">
              <div className="flex items-center justify-between">
                <div className={`w-10 h-10 ${stat.color} rounded-lg flex items-center justify-center`}>
                  <stat.icon className="w-5 h-5 text-white" />
                </div>
                <span className="text-2xl font-bold text-kaleo-charcoal">{stat.value}</span>
              </div>
              <p className="text-sm text-kaleo-charcoal/60 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Tabs defaultValue="destinations" className="space-y-6">
          <TabsList className="bg-white p-1">
            <TabsTrigger value="destinations" className="data-[state=active]:bg-kaleo-terracotta data-[state=active]:text-white">
              <MapPin className="w-4 h-4 mr-2" />
              Destinations
            </TabsTrigger>
            <TabsTrigger value="blog" className="data-[state=active]:bg-kaleo-terracotta data-[state=active]:text-white">
              <BookOpen className="w-4 h-4 mr-2" />
              Blog Posts
            </TabsTrigger>
            <TabsTrigger value="guides" className="data-[state=active]:bg-kaleo-terracotta data-[state=active]:text-white">
              <Users className="w-4 h-4 mr-2" />
              Tour Guides
            </TabsTrigger>
            <TabsTrigger value="settings" className="data-[state=active]:bg-kaleo-terracotta data-[state=active]:text-white">
              <Settings className="w-4 h-4 mr-2" />
              Settings
            </TabsTrigger>
          </TabsList>

          {/* Destinations Tab */}
          <TabsContent value="destinations">
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="p-6 border-b border-kaleo-sand flex items-center justify-between">
                <h2 className="font-serif text-xl text-kaleo-charcoal">Manage Destinations</h2>
                <Button className="bg-kaleo-terracotta hover:bg-kaleo-charcoal">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Destination
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-kaleo-sand/50">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Name</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Category</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Reviews</th>
                      <th className="text-right px-6 py-3 text-sm font-medium text-kaleo-charcoal">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-kaleo-sand">
                    {places.map((place) => (
                      <tr key={place.id} className="hover:bg-kaleo-sand/30">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img src={place.images[0]} alt={place.name} className="w-10 h-10 rounded-lg object-cover mr-3" />
                            <span className="font-medium text-kaleo-charcoal">{place.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant="secondary">{place.category}</Badge>
                        </td>
                        <td className="px-6 py-4 text-kaleo-charcoal/60">{place.reviews.length}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 hover:bg-kaleo-sand rounded-lg text-kaleo-charcoal/60 hover:text-kaleo-terracotta">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-kaleo-sand rounded-lg text-kaleo-charcoal/60 hover:text-blue-500">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-kaleo-sand rounded-lg text-kaleo-charcoal/60 hover:text-red-500">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Blog Tab */}
          <TabsContent value="blog">
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="p-6 border-b border-kaleo-sand flex items-center justify-between">
                <h2 className="font-serif text-xl text-kaleo-charcoal">Manage Blog Posts</h2>
                <Button className="bg-kaleo-terracotta hover:bg-kaleo-charcoal">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Post
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-kaleo-sand/50">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Title</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Category</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Author</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Date</th>
                      <th className="text-right px-6 py-3 text-sm font-medium text-kaleo-charcoal">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-kaleo-sand">
                    {blogPosts.map((post) => (
                      <tr key={post.id} className="hover:bg-kaleo-sand/30">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <img src={post.image} alt={post.title} className="w-10 h-10 rounded-lg object-cover mr-3" />
                            <span className="font-medium text-kaleo-charcoal line-clamp-1">{post.title}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4">
                          <Badge variant="secondary">{post.category}</Badge>
                        </td>
                        <td className="px-6 py-4 text-kaleo-charcoal/60">{post.author}</td>
                        <td className="px-6 py-4 text-kaleo-charcoal/60">{post.date}</td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 hover:bg-kaleo-sand rounded-lg text-kaleo-charcoal/60 hover:text-kaleo-terracotta">
                              <Eye className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-kaleo-sand rounded-lg text-kaleo-charcoal/60 hover:text-blue-500">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-kaleo-sand rounded-lg text-kaleo-charcoal/60 hover:text-red-500">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Guides Tab */}
          <TabsContent value="guides">
            <div className="bg-white rounded-2xl shadow-sm">
              <div className="p-6 border-b border-kaleo-sand flex items-center justify-between">
                <h2 className="font-serif text-xl text-kaleo-charcoal">Manage Tour Guides</h2>
                <Button className="bg-kaleo-terracotta hover:bg-kaleo-charcoal">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Guide
                </Button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-kaleo-sand/50">
                    <tr>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Name</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Specialty</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Experience</th>
                      <th className="text-left px-6 py-3 text-sm font-medium text-kaleo-charcoal">Rating</th>
                      <th className="text-right px-6 py-3 text-sm font-medium text-kaleo-charcoal">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-kaleo-sand">
                    {tourGuides.map((guide) => (
                      <tr key={guide.id} className="hover:bg-kaleo-sand/30">
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <div className="w-10 h-10 rounded-full bg-kaleo-terracotta/10 flex items-center justify-center mr-3">
                              <span className="text-sm font-serif text-kaleo-terracotta">{guide.name.charAt(0)}</span>
                            </div>
                            <span className="font-medium text-kaleo-charcoal">{guide.name}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-kaleo-charcoal/60">{guide.specialty}</td>
                        <td className="px-6 py-4 text-kaleo-charcoal/60">{guide.experience}</td>
                        <td className="px-6 py-4">
                          <div className="flex items-center">
                            <span className="text-yellow-500 mr-1">★</span>
                            <span className="text-kaleo-charcoal/60">{guide.rating}</span>
                          </div>
                        </td>
                        <td className="px-6 py-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button className="p-2 hover:bg-kaleo-sand rounded-lg text-kaleo-charcoal/60 hover:text-blue-500">
                              <Edit className="w-4 h-4" />
                            </button>
                            <button className="p-2 hover:bg-kaleo-sand rounded-lg text-kaleo-charcoal/60 hover:text-red-500">
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </TabsContent>

          {/* Settings Tab */}
          <TabsContent value="settings">
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="font-serif text-xl text-kaleo-charcoal mb-6">Website Settings</h2>
              <div className="space-y-6 max-w-2xl">
                <div>
                  <label className="block text-sm font-medium text-kaleo-charcoal mb-2">
                    Site Name
                  </label>
                  <input
                    type="text"
                    defaultValue="WanderNepal"
                    className="w-full px-4 py-2 border border-kaleo-terracotta/20 rounded-lg focus:outline-none focus:border-kaleo-terracotta"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-kaleo-charcoal mb-2">
                    Site Description
                  </label>
                  <textarea
                    rows={3}
                    defaultValue="Discover Nepal - A Complete Tourism Guide to the Roof of the World"
                    className="w-full px-4 py-2 border border-kaleo-terracotta/20 rounded-lg focus:outline-none focus:border-kaleo-terracotta resize-none"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-kaleo-charcoal mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    defaultValue="hello@wandernepal.com.np"
                    className="w-full px-4 py-2 border border-kaleo-terracotta/20 rounded-lg focus:outline-none focus:border-kaleo-terracotta"
                  />
                </div>
                <div className="pt-4">
                  <Button className="bg-kaleo-terracotta hover:bg-kaleo-charcoal">
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
