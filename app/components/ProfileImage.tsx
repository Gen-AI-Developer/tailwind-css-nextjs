import React from "react";
import Image from "next/image";
import profileImage from "@/public/profileImage.jpg";

const ProfileImage = () => {
  return (
    <div>
      {/* Portrait Image Card */}
      <div className="bg-stone-700 overflow-hidden rounded-lg shadow-md">
        <Image
          src={profileImage}
          alt="DJ Portrait"
          width={400}
          height={600}
          className="object-center w-full h-full"
        />
      </div>
    </div>
  );
};

export default ProfileImage;
