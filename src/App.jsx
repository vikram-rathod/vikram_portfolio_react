import React from 'react';
import { CustomCursor, Konami } from './components/ui';
import { Navbar, Footer } from './components/layout';
import { Hero, About, Skills, Experience, Projects, Contact } from './components/sections';
import AchievementToast from './components/ui/achievement-toast/AchievementToast';
import BackgroundParticles from './components/ui/background-particles/BackgroundParticles';

import { AchievementProvider } from './context/AchievementContext';

function App() {
    return (
        <AchievementProvider>
            <div className="app">
                <CustomCursor />
                <Konami />
                <AchievementToast />
                <div className="bg-nebula" />
                <BackgroundParticles />

                <Navbar />
                <main>
                    <Hero />
                    <About />
                    <Skills />
                    <Experience />
                    <Projects />
                    <Contact />
                </main>
                <Footer />
            </div>
        </AchievementProvider>
    );
}

export default App;
