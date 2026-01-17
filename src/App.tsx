import { BrowserRouter, Routes, Route } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import CreateBlog from "./pages/CreateBlog";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<BlogPage />} />
        <Route path="/create" element={<CreateBlog />} />
      </Routes>
    </BrowserRouter>
  );
}
