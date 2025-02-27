"use client";
import React, { createContext, useContext, useState, useCallback, useEffect } from 'react';
import axios from 'axios';
import { User } from '@/types';
import { redirect } from 'next/navigation';

interface AuthContextType {
  user: User | null;
  loading: boolean;
  error?: string|null;
  handleLogout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuthContext must be used within an AuthProvider');
  }
  return context;
};

interface AuthProviderProps {
  children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const BackendURL = process.env.NEXT_PUBLIC_BACK_END_URL || 'http://localhost:5000'; // Added http://
  
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const checkSession = useCallback(async () => {
    try {
      const { data } = await axios.get(`${BackendURL}/api/auth/check-session`, {
        withCredentials: true,
      });
      
      if (data.user) {
        setUser(data.user);
        return true; // Session exists

      }
      setUser(null);
      return false; // No session
    } catch {
      setUser(null);
      return false; // No session, no error handling required
    } finally {
      setLoading(false);
    }
  }, [BackendURL]);

  const handleLogout = useCallback(async () => {
    setLoading(true);
    setError(null);
    
    try {
      await axios.post(
        `${BackendURL}/api/auth/logout`,
        {},
        { withCredentials: true }
      );
      
      // Clear user state immediately
      setUser(null);
      
      
      redirect ('/login');
      
    } catch (err) {
      console.error('Logout failed:', err);
      setError(err instanceof Error ? err.message : 'An error occurred during logout');
    } finally {
      setLoading(false);
    }
  }, [BackendURL]);

  useEffect(() => {
    checkSession();
  }, [checkSession]);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      error,
      handleLogout
    }}>
      {children}
    </AuthContext.Provider>
  );
};