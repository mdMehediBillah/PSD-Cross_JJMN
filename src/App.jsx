import { Routes, Route } from "react-router-dom";
import {
  AboutPage,
  ContactPage,
  HomePage,
  NotFounfPage,
  ProductPage,
  SearchPage,
} from "./pages";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/product" element={<ProductPage />} />
        <Route path="/promo" element={<ProductPage />} />
        <Route path="/search" element={<SearchPage />} />
        <Route path="*" element={<NotFounfPage />} />
      </Routes>
    </>
  );
};

export default App;
