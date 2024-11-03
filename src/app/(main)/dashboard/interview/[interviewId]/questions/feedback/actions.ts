"use server";

import { db } from "@/lib/db";
import { userResponse } from "@/lib/db/schema";
import { eq } from "drizzle-orm";

export const getFeedbackData = async (mockId: string) => {
  try {
    const feedback = await db
      .select()
      .from(userResponse)
      .where(eq(userResponse.mockRef, mockId));

    if (!feedback || feedback.length === 0) {
      throw new Error("No feedback found");
    }
    return feedback;
  } catch (error: any) {
    console.error(error);
  }
};
