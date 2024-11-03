import { Lightbulb } from "lucide-react";
import React from "react";

type Props = {
  questions: any[];
  activeIndex: number;
};

const Questions = ({ questions, activeIndex }: Props) => {
  console.log(questions);
  return (
    <div>
      <div className="p-5 border rounded-lg">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-2">
          {questions?.map((question: any, index: number) => (
            <div key={index}>
              <h2
                className={` p-2 text-center items-center justify-center rounded-full flex text-sm cursor-pointer ${
                  activeIndex === index
                    ? "bg-primary text-white"
                    : "bg-secondary"
                }`}
              >
                Question #{index + 1}
              </h2>
            </div>
          ))}
        </div>
        <p className="text-sm md:text-lg my-5">
          {questions[activeIndex]?.question}
        </p>
        <div className="bg-blue-200 border-blue-400 border rounded-lg text-primary p-2">
          <p className="flex items-center md:text-xl text-lg font-bold gap-2 mb-2">
            <Lightbulb className="w-5 h-5" />
            Tip:
          </p>
          <p className="text-sm md:text-lg p-2">
            Talk in a slow and moderate pace to make sure the responses are
            transcribed correctly. Speak closely towards the microphone to
            ensure better response transcription.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Questions;
