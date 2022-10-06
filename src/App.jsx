import "./App.css";
import MyHeader from "./components/MyHeader";
import "bootstrap/dist/css/bootstrap.min.css";
import MyFooter from "./components/MyFooter";
import { Navigate, Route, Routes } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import Home from "./pages/Home";
import ContactUsP from "./pages/ContactUsP";
import AboutPage from "./pages/AboutPage";
import Products from "./components/Products";
import ProductDetailes from "./pages/ProductDetailes";
import BooksPage from "./pages/BooksPage";
import MenPage from "./pages/MenPage";
import WomenPage from "./pages/WomenPage";
import FurniturePage from "./pages/FurniturePage";
function App() {
  return (
    <div className="App">
      <MyHeader></MyHeader>

      <Routes>
        <Route path="home" element={<Home />}>
          <Route path="" element={<Products />} />
          <Route path="men" element={<MenPage />} />
          <Route path="women" element={<WomenPage />} />
          <Route path="furniture" element={<FurniturePage />} />
          <Route path="books" element={<BooksPage />} />
        </Route>

        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="contactus" element={<ContactUsP />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<ProductDetailes />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <MyFooter></MyFooter>
    </div>
  );
}

export default App;
