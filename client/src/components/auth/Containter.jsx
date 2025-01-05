import React, { useState } from "react";
import Signup from "./Signup";
import Signin from "./Signin";
import { Card } from "@material-tailwind/react";
import axios from 'axios'

const Containter = () => {
  const [activeTab, setActiveTab] = useState("0");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="flex justify-center  mt-0 p-8 w-full">
      <Card color="transparent" shadow={true} className="bg-white/80 p-6  rounded-lg max-w-lg">
        {/* Custom Tab Headers */}
        <div className="flex justify-around mb-6 border-b border-gray-200">
          <button
            onClick={() => handleTabClick("0")}
            className={`relative font-semibold px-6 py-2 text-sm transition-all duration-300 ${
              activeTab === "0"
                ? "text-black after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-black"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => handleTabClick("1")}
            className={`relative font-semibold px-6 py-2 text-sm transition-all duration-300 ${
              activeTab === "1"
                ? "text-black after:absolute after:bottom-0 after:left-0 after:h-1 after:w-full after:rounded-full after:bg-black"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Sign In
          </button>
        </div>

        {/* Tab Content */}
        <div className="mt-0">
          {activeTab === "0" && <Signup />}
          {activeTab === "1" && <Signin />}
        </div>
      </Card>
    </div>
  );
};

export default Containter;
