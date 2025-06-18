import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import WayforwardLogin from "../pages/Auth/WayforwardLogin";
import ChiesiLogin from "../pages/Auth/ChiesiLogin";
// import Courses from "../pages/Courses";
// import CompanyProfile from "../components/dashboard/companyProfile";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/wayforward-login" element={<WayforwardLogin />} />
        <Route path="/chiesi-login" element={<ChiesiLogin />} />
        {/* <Route path="/course" element={<Courses />} />
        <Route path="/company" element={<CompanyProfile />} /> */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
