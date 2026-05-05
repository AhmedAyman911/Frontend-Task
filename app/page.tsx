'use client';

import { useState } from 'react';
import { useAuth } from '@/context/AuthContext';

export default function LoginPage() {
    const { login } = useAuth();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setError('');
        const ok = login(username, password);
        if (!ok) setError('Invalid credentials');
    };

    return (
        <div className="d-flex align-items-center justify-content-center min-vh-100 bg-light">
            <div className="card shadow-sm border-0 rounded-4 p-4" style={{ width: 380 }}>
                
                <div className="text-center mb-4">
                    <h4 className="fw-bold mb-1">Welcome Back</h4>
                    <p className="text-muted mb-0" style={{ fontSize: '14px' }}>
                        Please login to your account
                    </p>
                </div>

                {error && (
                    <div className="alert alert-danger py-2 text-center" style={{ fontSize: '14px' }}>
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label small text-muted">Username</label>
                        <input
                            className="form-control rounded-3"
                            placeholder="Enter username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>

                    <div className="mb-4">
                        <label className="form-label small text-muted">Password</label>
                        <input
                            type="password"
                            className="form-control rounded-3"
                            placeholder="Enter password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        className="btn btn-primary w-100 rounded-3 fw-semibold"
                        type="submit"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}