const SignInPage = async ({
  params,
}: {
  params: Promise<{ "sign-in": string }>;
}) => {
  console.log(await params);
  // console.log(await params["sign-in"][0]);

  //TODO: Issue with types
  // return <div>SignInPage: {await params["sign-in"]}</div>;
};

export default SignInPage;
