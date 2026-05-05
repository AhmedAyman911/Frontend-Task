'use client';

import { createContext, useContext, useState } from 'react';
import { useRouter } from 'next/navigation';
import Sidebar from '@/components/SideBar';
import Navbar from '@/components/navbar';

interface AuthContextType {
    isLoggedIn: boolean;
    login: (username: string, password: string) => boolean;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter();

    const [isLoggedIn, setIsLoggedIn] = useState(() => {
        if (typeof document !== 'undefined') {
            return document.cookie.includes('auth=true');
        }
        return false;
    });

    const login = (username: string, password: string): boolean => {
        if (username === 'admin' && password === '1234') {
            document.cookie = 'auth=true; path=/; max-age=86400';
            setIsLoggedIn(true);
            router.push('/dashboard');
            return true;
        }
        return false;
    };

    const logout = () => {
        document.cookie = 'auth=; path=/; max-age=0';
        setIsLoggedIn(false);
        router.push('/');
    };

    return (
        <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
            {!isLoggedIn ? (
                children
            ) : (
                <main className="pt-5 ps-2 ps-md-4 ps-lg-5 min-vh-100 bg-dashboard">
                    <Sidebar />
                    <Navbar />
                    {children}
                </main>
            )}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const ctx = useContext(AuthContext);
    if (!ctx) throw new Error('useAuth must be used inside AuthProvider');
    return ctx;
};