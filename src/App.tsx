import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Routes/Home";
import Sub from "./Routes/Sub";
// import { UIScroll } from "./components/UIScroll";

function App() {
  return (
    <Router>
      {/* <UIScroll.ToTop /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/sub" element={<Sub />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
