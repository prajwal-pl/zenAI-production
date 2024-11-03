// components/QuestionClient.tsx (Client Component)
"use client";
import { useState } from "react";
import Questions from "./Questions";
import dynamic from "next/dynamic";

const VideoCam = dynamic(() => import("./VideoCam"), {
  ssr: false,
});

type Props = {
  initialQuestions: any[];
};

const QuestionClient = ({ initialQuestions }: Props) => {
  const [questions] = useState(initialQuestions);
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl font-bold">Questions</h1>
        <p className="text-muted-foreground">Good luck!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
        <Questions
          setActiveIndex={setActiveIndex}
          activeIndex={activeIndex}
          questions={questions}
        />
        <VideoCam questions={questions} />
      </div>
    </div>
  );
};

export default QuestionClient;
