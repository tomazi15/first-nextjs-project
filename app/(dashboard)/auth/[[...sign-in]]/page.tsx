import React from "react";

const SignInPage = async ({ params }: { params: { "sign-in": string } }) => {
  console.log(await params);
  console.log(await params["sign-in"][0]);

  return <div>SignInPage: {await params["sign-in"][0]}</div>;
};

export default SignInPage;
