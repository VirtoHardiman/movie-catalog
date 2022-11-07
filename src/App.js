import { BrowserRouter, Routes, Route } from "react-router-dom";
import "@fontsource/plus-jakarta-sans";
import "./App.css";

import { MovieList } from "./pages/MovieList";
import { MovieDetail } from "./pages/MovieDetail";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route index path="/" element={<MovieList />} />
        <Route path="/:movieId" element={<MovieDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
