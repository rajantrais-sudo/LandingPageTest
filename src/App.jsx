// App.jsx

import Footer from "./components/Footer";
import HomePage from "./pages/HomePage/HeroSections";

function App() {
  return (
    <div className="bg-[#F5F7FB] min-h-screen">
      <div className="bg-[#012985] text-white text-sm py-2 px-4">
        <div className="max-w-7xl mx-auto flex justify-center gap-6 text-center flex-wrap">
          <p>🟢 Providers online now — 9am to 10pm ET</p>
          <p>Same-day provider visits • 1–2 day shipping</p>
          <p>No insurance required</p>
        </div>
      </div>

    
      <nav className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          
         
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#2B4BB3] rounded-md"></div>

            <h1 className="text-2xl font-bold text-[#001A57]">
              navio
            </h1>
          </div>

          
          <div className="flex items-center gap-6">
            <p className="text-gray-600 hidden md:block">
              + (91) 7878787878
            </p>

            <button className="bg-[#163B91] hover:bg-[#0F2D74] transition-all text-white px-6 py-3 rounded-full font-medium">
              Get started →
            </button>
          </div>
        </div>
      </nav>

      <HomePage />
      <Footer/>
    </div>
  );
}

export default App;