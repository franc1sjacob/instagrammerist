"use client";

import React, { useState } from "react";

const page = () => {
  const [followingFile, setFollowingFile] = useState(null);
  const [followerFile, setFollowerFile] = useState(null);

  const handleFollowingChange = (event: any) => {
    const file = event.target.files[0];
    setFollowingFile(file);
  };

  const handleFollowerChange = (event: any) => {
    const file = event.target.files[0];
    setFollowerFile(file);
  };

  const handleFileUpload = () => {
    console.log("asd", followerFile);
    if (followerFile) {
      console.log("JSON", JSON.parse(followerFile));
      // const reader = new FileReader();
      // console.log(reader);
    }
  };

  return (
    <div>
      <label>Following</label>
      <input type="file" onChange={handleFollowingChange} />
      <label>Follower</label>
      <input type="file" onChange={handleFollowerChange} />
      <button onClick={handleFileUpload}>Upload JSON</button>
    </div>
  );
};

export default page;
