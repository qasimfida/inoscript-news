import "./App.css";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NewsSearch from "./pages/NewsSearch";

const App = () => {
  return (
    <Router>
      <div className="App">
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search" element={<NewsSearch />} />
          </Routes>
        </Layout>
      </div>
    </Router>
  );
}

export default App;
