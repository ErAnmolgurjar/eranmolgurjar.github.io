import React, { createContext, useContext, useState, useEffect } from 'react';
import { mockApi } from '../services/mockApi';

const DataContext = createContext();

export const DataProvider = ({ children }) => {
    const [masterConfig, setMasterConfig] = useState(null);
    const [sectionData, setSectionData] = useState({});
    const [loadingStatus, setLoadingStatus] = useState({
        master: 'idle', // idle, loading, success, error
        sections: {} // { [sectionId]: 'idle' | 'loading' | 'success' | 'error' }
    });

    useEffect(() => {
        const initLoad = async () => {
            setLoadingStatus(prev => ({ ...prev, master: 'loading' }));
            try {
                const config = await mockApi.fetchMasterConfig();
                setMasterConfig(config);
                setLoadingStatus(prev => ({ ...prev, master: 'success' }));

                // Initialize section status
                const initialSectionStatus = {};
                config.sections.forEach(section => {
                    initialSectionStatus[section.id] = 'idle';
                });
                setLoadingStatus(prev => ({ ...prev, sections: initialSectionStatus }));

                // Start sequential loading
                loadSectionsSequentially(config.sections);
            } catch (error) {
                console.error("Failed to load master config", error);
                setLoadingStatus(prev => ({ ...prev, master: 'error' }));
            }
        };

        initLoad();
    }, []);

    const loadSectionsSequentially = async (sections) => {
        for (const section of sections) {
            setLoadingStatus(prev => ({
                ...prev,
                sections: { ...prev.sections, [section.id]: 'loading' }
            }));

            try {
                const data = await mockApi.fetchSectionData(section.endpoint);
                setSectionData(prev => ({ ...prev, [section.id]: data }));
                setLoadingStatus(prev => ({
                    ...prev,
                    sections: { ...prev.sections, [section.id]: 'success' }
                }));
            } catch (error) {
                console.error(`Failed to load section ${section.id}`, error);
                setLoadingStatus(prev => ({
                    ...prev,
                    sections: { ...prev.sections, [section.id]: 'error' }
                }));
            }
        }
    };

    return (
        <DataContext.Provider value={{ masterConfig, sectionData, loadingStatus }}>
            {children}
        </DataContext.Provider>
    );
};

export const useData = () => useContext(DataContext);
