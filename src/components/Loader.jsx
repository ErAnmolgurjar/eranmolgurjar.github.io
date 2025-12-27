import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useData } from '../context/DataContext';

const Loader = () => {
    const { loadingStatus } = useData();
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (loadingStatus.master === 'success' || loadingStatus.master === 'error') {
            const timer = setTimeout(() => setIsVisible(false), 500);
            return () => clearTimeout(timer);
        }
    }, [loadingStatus.master]);

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                    className="fixed inset-0 bg-primary z-50 flex items-center justify-center"
                >
                    <div className="flex flex-col items-center gap-4">
                        <div className="w-8 h-8 border-2 border-border border-t-accent rounded-full animate-spin" />
                        <p className="text-sm text-muted font-medium">Loading Portfolio...</p>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Loader;
