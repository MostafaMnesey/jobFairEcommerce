import React from "react";
import { ThreeDot } from "react-loading-indicators";

export default function Loading() {
  return (
    <>
      <div className=" flex items-center justify-center min-h-screen bg-black dark:bg-white">
        <ThreeDot
          variant="bounce"
          color="#FE5013"
          size="medium"
          text=""
          textColor=""
        />
      </div>
    </>
  );
}
