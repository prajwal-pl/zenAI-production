import React from "react";

const Page = ({
  params,
}: {
  params: {
    interviewId: string;
  };
}) => {
  console.log(params.interviewId);
  return <div>Questions</div>;
};

export default Page;
