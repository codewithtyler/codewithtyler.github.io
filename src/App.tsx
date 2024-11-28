import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Sponsor from "./pages/Sponsor";
import BlogPost from "./pages/BlogPost";
import Footer from "./components/Footer";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <BrowserRouter>
      <div className="flex flex-col min-h-screen">
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/sponsor" element={<Sponsor />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  </QueryClientProvider>
);

export default App;