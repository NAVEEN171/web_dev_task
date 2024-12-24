import logo from "./logo.svg";
import "./App.css";
import Login from "./Loginpage/Login";
import Home from "./Homepage/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Settings from "./Homepage/components/Features/Settings/Settings";
import Repositories from "./Homepage/components/Features/Repositories/Repositories";
import AicodeReview from "./Homepage/components/Features/CodeReview/AicodeReview";
import Cloudsecurity from "./Homepage/components/Features/Cloudsecurity/Cloudsecurity";
import Info from "./Homepage/components/Features/Info/Info";
import Support from "./Homepage/components/Features/Support/Support";

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
