"use server";

import { db } from "@/lib/db";
import { mockInterview, userResponse } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { eq } from "drizzle-orm";
import { PgTable } from "drizzle-orm/pg-core";

export const getQuestionData = async (mockId: string) => {
  try {
    const questions = await db
      .select()
      .from(mockInterview)
      .where(eq(mockInterview.mockId, mockId));

    if (!questions || questions.length === 0) {
      throw new Error("No questions found");
    }

    const JsonQuestions = JSON.parse(questions[0].jsonMockResp);
    return JsonQuestions;
  } catch (error: any) {
    console.error(error);
  }
};

export const saveUserResponse = async (
  question: string,
  answer: string,
  mockId: string
) => {
  try {
    const { userId } = await auth();
    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_GENERATIVE_API_KEY!
    );
    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    if (!question || !answer) {
      throw new Error("Please provide all the required inputs.");
    }

    const prompt = `Here is a question, depending on the given answer, generate a feedback for the user. The feedback should be constructive and helpful. Also, provide a rating for the user's answer. Generate the response in JSON format with fields as feedback and rating. The question is as follows: ${question} The user's answer is: ${answer}`;

    const response = await model.generateContent(prompt);
    console.log(response.response.text());

    const data = response.response
      .text()
      .replace("```json", "")
      .replace("```", "");
    const AIResponse = JSON.parse(data);

    const Response = await db.insert(userResponse).values({
      mockRef: mockId || "",
      feedback: AIResponse?.feedback || "",
      rating: AIResponse?.rating || "",
      userId: userId || "",
      response: answer || "",
    });
  } catch (error: any) {
    console.error(error);
  }
};
