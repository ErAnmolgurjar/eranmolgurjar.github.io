import React from 'react';
import ThemeToggle from './ThemeToggle';

const Layout = ({ children }) => {
    return (
        <div className="min-h-screen bg-primary text-text transition-colors duration-300">
            <ThemeToggle />
            <main className="container mx-auto px-4 py-8 max-w-5xl">
                {children}
            </main>
        </div>
    );
};

export default Layout;
