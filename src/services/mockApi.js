// Simulating a distributed system with network delays

const DELAY = 1500; // 1.5s delay for realism

const masterConfig = {
    sections: [
        { id: 'hero', endpoint: '/api/hero', priority: 1 },
        { id: 'about', endpoint: '/api/about', priority: 2 },
        { id: 'experience', endpoint: '/api/experience', priority: 3 },
        { id: 'education', endpoint: '/api/education', priority: 4 },
        { id: 'certificates', endpoint: '/api/certificates', priority: 5 },
        { id: 'skills', endpoint: '/api/skills', priority: 6 },
        { id: 'tools', endpoint: '/api/tools', priority: 7 },
        { id: 'languages', endpoint: '/api/languages', priority: 8 },
        { id: 'softSkills', endpoint: '/api/softSkills', priority: 9 },
        { id: 'awards', endpoint: '/api/awards', priority: 10 },
        { id: 'projects', endpoint: '/api/projects', priority: 11 },
        { id: 'hobbies', endpoint: '/api/hobbies', priority: 12 },
        { id: 'contact', endpoint: '/api/contact', priority: 13 }
    ]
};

const db = {
    hero: {
        title: "Creative Developer",
        subtitle: "Building digital experiences that matter.",
        modelUrl: "cube" // Placeholder for 3D model type
    },
    about: {
        title: "About Me",
        content: "I am a passionate developer who loves to create beautiful and functional websites. I specialize in React, Three.js, and modern web technologies.",
        stats: [
            { label: "Years Exp", value: "5+" },
            { label: "Projects", value: "50+" },
            { label: "Clients", value: "20+" }
        ]
    },
    projects: [
        {
            id: 1,
            title: "Neon Verse",
            description: "A cyberpunk inspired 3D portfolio template.",
            tags: ["React", "Three.js", "WebGL"],
            image: "https://placehold.co/600x400/1e293b/38bdf8?text=Neon+Verse"
        },
        {
            id: 2,
            title: "Eco Tracker",
            description: "Sustainability dashboard for tracking carbon footprint.",
            tags: ["Vue", "D3.js", "Node"],
            image: "https://placehold.co/600x400/1e293b/4ade80?text=Eco+Tracker"
        },
        {
            id: 3,
            title: "AI Chatbot",
            description: "Conversational AI interface with natural language processing.",
            tags: ["Python", "TensorFlow", "React"],
            image: "https://placehold.co/600x400/1e293b/f472b6?text=AI+Chatbot"
        }
    ],
    contact: {
        email: "hello@example.com",
        socials: [
            { platform: "GitHub", url: "https://github.com" },
            { platform: "Twitter", url: "https://twitter.com" },
            { platform: "LinkedIn", url: "https://linkedin.com" }
        ]
    }
};

export const mockApi = {
    fetchMasterConfig: () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve(masterConfig);
            }, DELAY);
        });
    },

    fetchSectionData: (endpoint) => {
        const BASE_URL = 'https://script.google.com/macros/s/AKfycbwCqCEhk0M_zj1EtqLiZAOSOpAMEdylaotmiDLoMNFrv-zkLBn9pk_dPIHKk0fQsXY01Q/exec';

        const endpointMap = {
            '/api/skills': 1,
            '/api/education': 2,
            '/api/certificates': 3,
            '/api/experience': 4,
            '/api/tools': 5,
            '/api/awards': 6,
            '/api/contact': 7,
            '/api/about': 8,
            '/api/projects': 9,
            '/api/languages': 10,
            '/api/softSkills': 11,
            '/api/hobbies': 12
        };

        const CACHE_DURATION = 60 * 60 * 1000; // 1 hour

        if (endpointMap[endpoint]) {
            const cacheKey = `portfolio_cache_${endpoint}`;

            try {
                if (typeof localStorage !== 'undefined') {
                    const cached = localStorage.getItem(cacheKey);
                    if (cached) {
                        const { timestamp, data } = JSON.parse(cached);
                        if (Date.now() - timestamp < CACHE_DURATION) {
                            console.log(`[Cache] Returning cached data for ${endpoint}`);
                            return Promise.resolve(data);
                        }
                    }
                }
            } catch (error) {
                console.warn(`[Cache] Error reading cache for ${endpoint}:`, error);
                // Fallback to fetch if cache fails
            }

            return fetch(`${BASE_URL}?filter=${endpointMap[endpoint]}`)
                .then(res => res.json())
                .then(data => {
                    try {
                        if (typeof localStorage !== 'undefined') {
                            localStorage.setItem(cacheKey, JSON.stringify({
                                timestamp: Date.now(),
                                data
                            }));
                        }
                    } catch (error) {
                        console.warn(`[Cache] Error saving cache for ${endpoint}:`, error);
                    }
                    return data;
                });
        }

        return new Promise((resolve) => {
            const sectionId = endpoint.split('/').pop();
            setTimeout(() => {
                resolve(db[sectionId]);
            }, DELAY * 0.8);
        });
    }
};
