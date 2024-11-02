import React from "react";

type Props = {
  params: {
    interviewId: string;
  };
};

const Page = ({ params }: Props) => {
  console.log(params.interviewId);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">Interview</h1>
        <p className="text-muted-foreground">
          Get started with your interview.
        </p>
      </div>
      <div></div>
    </div>
  );
};

export default Page;
