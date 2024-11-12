import React from "react";
import Information from "./Information";
import ProfileImage from "./ProfileImage";
import Blog from "./Blog";
import ContactUs from "./ContactUs";
import SocialMediaLinks from "./SocialMediaLinks";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ViewBlog from "./ViewBlog";
const Hero = () => {
  return (
    <div className="bg-[#2F312D] min-h-screen p-4 md:p-8">
      <div className="max-w-5xl mx-auto">
        <Navbar />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <div>
            <Information />
          </div>
          <div>
            <ProfileImage />
          </div>
          <div>
            <Blog />
          </div>
          <div>
            <ContactUs />
          </div>
          <div className="bg-[#3f3f3f] p-6 rounded-lg shadow-md col-span-3">
            <ViewBlog />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default Hero;
