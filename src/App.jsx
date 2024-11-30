import { BrowserRouter, Routes, Route } from "react-router-dom";
import { About, Contact, Experience, Feedbacks, Hero, Navbar, Works, StarsCanvas, NewPage } from './components';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Main App Layout */}
        <Route path="/" element={
          <div className="relative z-0 bg-primary">
            <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
              <Navbar />
              <Hero />
            </div>
            <About />
            <Experience />
            <Works />
            <Feedbacks />
            <div className="relative z-0">
              <Contact />
              <StarsCanvas />
            </div>
          </div>
        } />
        
        {/* New Page Route */}
        <Route path="/newpage" element={<NewPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
