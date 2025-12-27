import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import { DataProvider, useData } from './context/DataContext';
import Layout from './components/Layout';
import Loader from './components/Loader';
import SectionLoader from './components/SectionLoader';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Tools from './components/Tools';
import Awards from './components/Awards';
import Languages from './components/Languages';
import SoftSkills from './components/SoftSkills';
import Hobbies from './components/Hobbies';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Contact from './components/Contact';

const Content = () => {
  const { loadingStatus, masterConfig } = useData();

  if (loadingStatus.master === 'loading' || loadingStatus.master === 'idle') {
    return <Loader />;
  }

  if (loadingStatus.master === 'error') {
    return (
      <div className="h-screen flex items-center justify-center text-red-500">
        Failed to load application configuration.
      </div>
    );
  }

  // Map section IDs to components
  const sectionComponents = {
    hero: Hero,
    about: About,
    experience: Experience,
    education: Education,
    certificates: Certificates,
    skills: Skills,
    tools: Tools,
    languages: Languages,
    softSkills: SoftSkills,
    awards: Awards,
    projects: Projects,
    hobbies: Hobbies,
    contact: Contact
  };

  return (
    <Layout>
      {masterConfig.sections.map((section) => {
        const Component = sectionComponents[section.id];
        if (!Component) return null;

        return (
          <SectionLoader key={section.id} id={section.id}>
            <Component />
          </SectionLoader>
        );
      })}
    </Layout>
  );
};

function App() {
  return (
    <ThemeProvider>
      <DataProvider>
        <Content />
      </DataProvider>
    </ThemeProvider>
  );
}

export default App;
