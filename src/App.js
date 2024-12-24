import logo from "./logo.svg";
import "./App.css";
import Login from "./pages/Loginpage/Login";
import Home from "./pages/Homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./pages/Homepage/components/Features/Settings/Settings";
import Repositories from "./pages/Homepage/components/Features/Repositories/Repositories";
import AicodeReview from "./pages/Homepage/components/Features/CodeReview/AicodeReview";
import Cloudsecurity from "./pages/Homepage/components/Features/Cloudsecurity/Cloudsecurity";
import Info from "./pages/Homepage/components/Features/Info/Info";
import Support from "./pages/Homepage/components/Features/Support/Support";

function App() {
  return (
    <div className="h-DVH w-full">
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/Login" element={<Login />} />
            <Route path="/" element={<Home />}>
              <Route index element={<Repositories />} />
              <Route path="AI-Code-Review" element={<AicodeReview />} />
              <Route path="Cloud-security" element={<Cloudsecurity />} />
              <Route path="Info" element={<Info />} />
              <Route path="Settings" element={<Settings />} />
              <Route path="Contact" element={<Support />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
