// page.tsx (Server Component)
import { getQuestionData } from "./actions";
import QuestionClient from "./components/QuestionClient";

// Make this async server component
async function Page({
  params,
}: {
  params: {
    interviewId: string;
  };
}) {
  const questions = await getQuestionData(params.interviewId);

  return (
    <QuestionClient mockId={params.interviewId} initialQuestions={questions} />
  );
}

export default Page;
