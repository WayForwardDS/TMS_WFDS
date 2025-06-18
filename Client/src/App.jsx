import React from "react";
import { Routes, Route } from "react-router-dom";
import WayforwardLogin from "../src/components/auth/WayforwardLogin";
import ChiesiLogin from "../src/components/auth/ChiesiLogin";
import Dashboard from "./pages/Dashboard";
import Courses from "./pages/Courses";
import Users from "./components/dashboard/Users";
import CompanyProfile from "./components/dashboard/companyProfile";
import ChiesiDashboard from "./components/dashboard/ChiesiDashboard";
import PublicDashboard from "./components/dashboard/PublicDashboard";
import TeamsPakistan from "./components/dashboard/TeamPakistan";
import TeamMembersTable from "./components/dashboard/TeamMembersTable";
import CourseCards from "./components/course/CourseCard";
import CourseDefinition from "./components/course/CourseOverview";
import QuizQuestion from "./components/course/QuizQuestion/Quiz";
import MyGrades from "./components/course/GradeBook/MyGrade";
import SuperAdminProfile from "./components/dashboard/AdminProfile";
import SuperAdminStyling from "./components/dashboard/AdminStyling";

const App = () => {
  return (

    
    <Routes>
      {/* Login Form Route */}
      <Route path="/wayforward-login" element={<WayforwardLogin />} />
      <Route path="/chiesi-login" element={<ChiesiLogin />} />

      {/* Super Admin Dashboard Route */}
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/SuperAdminProfile" element={<SuperAdminProfile />} />
      <Route path="/Styling" element={<SuperAdminStyling />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/users" element={<Users />} />
      <Route path="/profile" element={<CompanyProfile/>} />

      {/* User Admin Dashboard ROute */}
      <Route path="/chiesi-dashboard" element={<ChiesiDashboard/>} />
      <Route path="/Public-dashboard" element={<PublicDashboard/>} />
      <Route path="/TeamPakistan" element={<TeamsPakistan/>} />
      <Route path="/TeamMembersTable" element={<TeamMembersTable/>} />
      <Route path="/CourseCards" element={<CourseCards/>} />
      <Route path="/CourseOverview" element={<CourseDefinition/>} />
      <Route path="/QuizQuestion" element={<QuizQuestion/>} />
      <Route path="/MyGrades" element={<MyGrades/>} />
    </Routes>
  );
};

export default App;