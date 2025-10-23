import { Navigate, Route, Routes } from "react-router-dom";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Home from "../../shared/components/Home/Home";
import Navbar from "../../shared/components/Navbar/Navbar";
import AllProjects from "../../shared/components/OurProjects/AllProjects";
export default function Applayout() {
  const { i18n } = useTranslation();

  // Handle direction change based on language
  useEffect(() => {
    const dir = i18n.language === "ar" ? "rtl" : "ltr";
    document.documentElement.setAttribute("dir", dir);
  }, [i18n.language]);

  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all_projects" element={<AllProjects />} />
      </Routes>
    </>
  );
}
