import About from "./components/About";
import Contact from "./components/Contact";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Hero from "./components/Hero";
import Responsibilities from "./components/Responsibilities";
import ScrollToTop from "@/components/ScrollToTop";
import ThemeToggle from "./components/ThemeToggle";
import Projects from "./components/Projects";


const App = () => {
    return (
        <div className="min-h-screen bg-background">
            <ThemeToggle />
            <ScrollToTop />

            <Hero />
            <About />
            <Education />
            <Experience />
            <Projects />
            <Responsibilities />
            <Contact />
        </div>
    );
};

export default App;