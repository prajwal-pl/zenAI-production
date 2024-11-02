import React from "react";
import { getQuestionData } from "./actions";

const Page = async ({
  params,
}: {
  params: {
    interviewId: string;
  };
}) => {
  const questions = await getQuestionData(params.interviewId);
  return (
    <div>
      <div>
        <h1 className="text-3xl font-bold">Questions</h1>
        <p className="text-muted-foreground">Good luck!</p>
      </div>
      <div>
        {questions.map((question: any, index: number) => (
          <p>
            Question #{index + 1}: {question.question}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Page;
