"use server";

import { db } from "@/lib/db";
import { mockInterview } from "@/lib/db/schema";
import { auth } from "@clerk/nextjs/server";
import { GoogleGenerativeAI } from "@google/generative-ai";

export const InterviewGeneration = async ({
  inputs,
}: {
  inputs: {
    jobRole: string;
    jobDescription: string;
    experience: number;
  };
}) => {
  try {
    const genAI = new GoogleGenerativeAI(
      process.env.GOOGLE_GENERATIVE_API_KEY!
    );

    const model = await genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    if (!inputs.jobRole || !inputs.jobDescription || !inputs.experience) {
      throw new Error("Please provide all the required inputs.");
    }

    const prompt = `Generate Challenging Interview Questions Based on Job Role, Tech Stack, and Experience
  
                  Inputs:
  
                  Job Role: ${inputs.jobRole}
                  Tech Stack: ${inputs.jobDescription}
                  Year of Experience: ${inputs.experience}
  
                  Generate 5 Interview Questions in JSON format:
  
                  generate 5 challenging interview questions based on industry standards for the given job role, tech stack, and year of experience.
                  
                  make sure the questions are challenging and not too easy.`;

    const response = await model.generateContent(prompt);
    // console.log(response.response.text());
    return { response: response.response.text() };
  } catch (error: any) {
    console.error(error);
    return { error: error.message };
  }
};

export const saveQuestions = async (
  questions: string,
  inputs: {
    jobRole: string;
    jobDescription: string;
    experience: number;
  }
) => {
  try {
    const { userId } = await auth();
    const newQuestions = questions.replace("```json\n", "").replace("```", "");
    const data = JSON.parse(newQuestions);

    const response = await db
      .insert(mockInterview)
      .values({
        createdBy: userId ?? "",
        jobDesc: inputs.jobDescription,
        jobExperience: inputs.experience.toString(),
        jsonMockResp: JSON.stringify(data),
        mockId: crypto.randomUUID(),
        jobPosition: inputs.jobRole,
      })
      .returning({ mockId: mockInterview.mockId });

    return { response };
  } catch (error: any) {
    console.error(error);
    return { error: error.message };
  }
};

export const getInterviews = async () => {
  try {
    const interviews = await db.select().from(mockInterview);

    if (!interviews || interviews.length === 0) {
      throw new Error("No interviews found");
    }

    return interviews;
  } catch (error: any) {
    console.error(error);
  }
};
