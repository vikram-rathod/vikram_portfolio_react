import React from 'react';
import { CustomCursor, Konami } from './components/ui';
import { Navbar, Footer } from './components/layout';
import { Hero, About, Skills, Experience, Projects, Testimonials, Github, Contact } from './components/sections';

function App() {
    return (
        <div className="app">
            <CustomCursor />
            <Konami />
            <div className="bg-nebula" />
            <Navbar />
            <main>
                <Hero />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Testimonials />
                <Github />
                <Contact />
            </main>
            <Footer />
        </div>
    );
}

export default App;
