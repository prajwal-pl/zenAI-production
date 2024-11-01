import React from "react";

type Props = {
  params: {
    interviewId: string;
  };
};

const Page = ({ params }: Props) => {
  return <div>{params.interviewId}</div>;
};

export default Page;
