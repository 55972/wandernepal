import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Eye, EyeOff, Mail, Lock, ArrowRight } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { useAuth } from '../contexts/AuthContext';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  // Get redirect path from location state or default to home
  const from = (location.state as { from?: { pathname: string } })?.from?.pathname || '/';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    const success = await login(email, password);
    
    if (success) {
      navigate(from, { replace: true });
    }
    
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-kaleo-sand flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link to="/" className="inline-block">
            <span className="text-3xl font-serif font-bold text-kaleo-charcoal">
              WanderNepal
            </span>
            <span className="text-sm text-kaleo-terracotta">.com.np</span>
          </Link>
          <p className="mt-2 text-kaleo-charcoal/60">Welcome back, traveler!</p>
        </div>

        {/* Login Form */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h1 className="font-serif text-2xl text-kaleo-charcoal mb-6 text-center">
            Sign In
          </h1>

          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-kaleo-charcoal mb-1">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-kaleo-charcoal/40" />
                <Input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="pl-10"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="block text-sm font-medium text-kaleo-charcoal mb-1">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-kaleo-charcoal/40" />
                <Input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-kaleo-charcoal/40 hover:text-kaleo-charcoal"
                >
                  {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                </button>
              </div>
            </div>

            {/* Forgot Password */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2 rounded border-kaleo-terracotta/20" />
                <span className="text-kaleo-charcoal/60">Remember me</span>
              </label>
              <Link to="/forgot-password" className="text-kaleo-terracotta hover:underline">
                Forgot password?
              </Link>
            </div>

            {/* Submit */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-kaleo-terracotta hover:bg-kaleo-charcoal"
            >
              {isLoading ? 'Signing in...' : 'Sign In'}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </form>

          {/* Demo Credentials */}
          <div className="mt-6 p-4 bg-kaleo-sand/50 rounded-xl">
            <p className="text-xs text-kaleo-charcoal/60 text-center mb-2">Demo Credentials</p>
            <div className="text-xs text-kaleo-charcoal/70 space-y-1">
              <p><strong>Admin:</strong> admin@wandernepal.com / password</p>
              <p><strong>User:</strong> user@example.com / password</p>
            </div>
          </div>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-kaleo-sand" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-kaleo-charcoal/50">or</span>
            </div>
          </div>

          {/* Register Link */}
          <p className="text-center text-sm text-kaleo-charcoal/60">
            Don't have an account?{' '}
            <Link to="/register" className="text-kaleo-terracotta hover:underline font-medium">
              Create one
            </Link>
          </p>
        </div>

        {/* Back to Home */}
        <p className="text-center mt-6">
          <Link to="/" className="text-sm text-kaleo-charcoal/50 hover:text-kaleo-terracotta">
            ← Back to home
          </Link>
        </p>
      </div>
    </div>
  );
}
