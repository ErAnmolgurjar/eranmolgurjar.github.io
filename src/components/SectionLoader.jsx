import React from 'react';
import { motion } from 'framer-motion';
import { useData } from '../context/DataContext';

const SectionLoader = ({ id, children }) => {
    const { loadingStatus } = useData();
    const status = loadingStatus.sections[id];

    if (status === 'idle' || !status) return null;

    if (status === 'loading') {
        return (
            <div className="w-full h-32 flex items-center justify-center my-8">
                <div className="w-6 h-6 border-2 border-border border-t-accent rounded-full animate-spin" />
            </div>
        );
    }

    if (status === 'error') {
        return (
            <div className="w-full p-4 border border-red-200 bg-red-50 text-red-600 rounded-lg text-center text-sm my-8">
                Failed to load data.
            </div>
        );
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.4 }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
};

export default SectionLoader;
