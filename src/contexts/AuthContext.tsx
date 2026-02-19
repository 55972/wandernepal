import React, { createContext, useContext, useState, useCallback } from 'react';
import { toast } from 'sonner';

// Types
export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isAdmin: boolean;
  login: (email: string, password: string) => Promise<boolean>;
  register: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  updateUser: (userData: Partial<User>) => void;
}

// Sample users for demo
const SAMPLE_USERS: User[] = [
  {
    id: "1",
    name: "Admin User",
    email: "admin@wandernepal.com",
    role: "admin",
    avatar: "https://ui-avatars.com/api/?name=Admin+User&background=8C7B6B&color=fff"
  },
  {
    id: "2",
    name: "Demo User",
    email: "user@example.com",
    role: "user",
    avatar: "https://ui-avatars.com/api/?name=Demo+User&background=EAE4D9&color=1C1C1C"
  }
];

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(() => {
    // Check localStorage for saved session
    const saved = localStorage.getItem('wandernepal_user');
    return saved ? JSON.parse(saved) : null;
  });

  const isAuthenticated = !!user;
  const isAdmin = user?.role === 'admin';

  const login = useCallback(async (email: string, password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Demo authentication (in production, this would be a real API call)
    const foundUser = SAMPLE_USERS.find(u => u.email === email);
    
    if (foundUser && password === 'password') {
      setUser(foundUser);
      localStorage.setItem('wandernepal_user', JSON.stringify(foundUser));
      toast.success(`Welcome back, ${foundUser.name}!`);
      return true;
    }
    
    toast.error('Invalid email or password');
    return false;
  }, []);

  const register = useCallback(async (name: string, email: string, _password: string): Promise<boolean> => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 800));
    
    // Check if email already exists
    const exists = SAMPLE_USERS.find(u => u.email === email);
    if (exists) {
      toast.error('Email already registered');
      return false;
    }
    
    // Create new user (in production, this would be saved to database)
    const newUser: User = {
      id: Date.now().toString(),
      name,
      email,
      role: 'user',
      avatar: `https://ui-avatars.com/api/?name=${encodeURIComponent(name)}&background=EAE4D9&color=1C1C1C`
    };
    
    setUser(newUser);
    localStorage.setItem('wandernepal_user', JSON.stringify(newUser));
    toast.success('Registration successful! Welcome to WanderNepal.');
    return true;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    localStorage.removeItem('wandernepal_user');
    toast.success('Logged out successfully');
  }, []);

  const updateUser = useCallback((userData: Partial<User>) => {
    if (user) {
      const updated = { ...user, ...userData };
      setUser(updated);
      localStorage.setItem('wandernepal_user', JSON.stringify(updated));
    }
  }, [user]);

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isAdmin,
      login,
      register,
      logout,
      updateUser
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
