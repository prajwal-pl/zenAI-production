"use server";

import { db } from "@/lib/db";
import { mockInterview } from "@/lib/db/schema";
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
