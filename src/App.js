import React from "react";
import Navbar from "./components/common/navbar/navbar.tsx";
import HeaderSection from "./components/sections/header-section/header-section.tsx";
import NotificationBanner from "./components/sections/header-section/notification-banner/notification-banner.tsx";
import StatsCardSection from "./components/sections/stats-card-section/stats-card-section.tsx";
import { FamilyMemberSlider } from "./components/common/flag-slider/flag-slider.tsx";

function App() {
  return (
    <div className="wrapper">
      <Navbar />
      <HeaderSection />
      <NotificationBanner name="Jack Smith" quantity={2} location="AB" />
      <FamilyMemberSlider />
      <StatsCardSection />
    </div>
  );
}

export default App;
