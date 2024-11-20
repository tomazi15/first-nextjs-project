"use client";

import Error from "next/error";

const error = ({ error }: { error: Error }) => {
  console.log("Error:", error);

  return <div>There was an error ...</div>;
};

export default error;
