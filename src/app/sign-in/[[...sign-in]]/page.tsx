import { SignIn } from "@clerk/nextjs";

type Props = {};

const Signin = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default Signin;
