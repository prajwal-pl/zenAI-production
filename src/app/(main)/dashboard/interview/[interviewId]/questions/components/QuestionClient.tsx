"use client";
import { useState } from "react";
import Questions from "./Questions";
import dynamic from "next/dynamic";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const VideoCam = dynamic(() => import("./VideoCam"), {
  ssr: false,
});

type Props = {
  initialQuestions: any[];
  mockId: string;
};

const QuestionClient = ({ initialQuestions, mockId }: Props) => {
  const [questions] = useState(initialQuestions);
  const [activeIndex, setActiveIndex] = useState(0);

  const router = useRouter();

  return (
    <div>
      <div className="p-4">
        <h1 className="text-3xl font-bold">Questions</h1>
        <p className="text-muted-foreground">Good luck!</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 p-4">
        <div>
          <Questions activeIndex={activeIndex} questions={questions} />
          <div className="flex gap-2 items-center justify-center my-3">
            <Button
              disabled={activeIndex === 0}
              onClick={() => {
                setActiveIndex(activeIndex - 1);
              }}
              className="w-full"
            >
              Previous Question
            </Button>
            {activeIndex + 1 >= 5 ? (
              <Button
                onClick={() => {
                  router.push(
                    `/dashboard/interview/${mockId}/questions/feedback`
                  );
                }}
                className="w-full"
              >
                End Interview
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setActiveIndex(activeIndex + 1);
                }}
                className="w-full"
              >
                Next Question
              </Button>
            )}
          </div>
        </div>
        <VideoCam
          mockId={mockId}
          activeIndex={activeIndex}
          questions={questions}
        />
      </div>
    </div>
  );
};

export default QuestionClient;
