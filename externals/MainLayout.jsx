import HomeNav from "@/components/HomeNav";
import { ThemeProvider } from "@/externals/imports";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <ThemeProvider>
      <HomeNav />
      {children}
    </ThemeProvider>
  );
};

export default MainLayout;
