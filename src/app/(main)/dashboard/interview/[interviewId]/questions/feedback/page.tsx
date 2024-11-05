import React from "react";
import { getFeedbackData } from "./actions";

type Props = {
  params: {
    interviewId: string;
  };
};

const page = async ({ params }: Props) => {
  console.log(params.interviewId);
  const feedbackData = await getFeedbackData(params.interviewId);
  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl font-bold">Feedback</h1>
        <p className="text-muted-foreground">
          Review your answers and responses.
        </p>
      </div>
      <div className="p-5 ">
        <div className="border rounded-lg">
          {feedbackData ? (
            feedbackData?.map((data: any, index: number) => (
              <div key={index} className="p-5 space-y-5">
                <p className="text-xl">Question Count {index + 1}</p>
                <div className="flex flex-col">
                  <strong className="">Your response:</strong>

                  <span className="dark:bg-red-800 bg-red-500 p-2 rounded-md">
                    {data?.response}
                  </span>
                </div>
                <div className="flex flex-col">
                  <strong className="">Feedback:</strong>

                  <span className="dark:bg-blue-800 bg-blue-500 p-2 rounded-md">
                    {data?.feedback}
                  </span>
                </div>
                <div className="flex flex-col">
                  <strong className="">Rating:</strong>

                  <span className="dark:bg-violet-800 bg-violet-500 p-2 rounded-md">
                    {data?.rating}
                  </span>
                </div>
              </div>
            ))
          ) : (
            <p className="text-xl text-center flex items-center justify-center">
              No feedback data available
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
