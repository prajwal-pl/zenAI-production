import {
  pgTable,
  serial,
  jsonb,
  timestamp,
  varchar,
  json,
  text,
} from "drizzle-orm/pg-core";

export const mockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey().notNull(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdBy: varchar("createdBy").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  mockId: varchar("mockId").notNull().unique(),
});

export const userResponse = pgTable("userResponse", {
  id: serial("id").primaryKey().notNull(),
  response: text("response").notNull(),
  userId: varchar("userId").notNull(),
  feedback: varchar("feedback").notNull(),
  mockRef: varchar("mockRef").notNull(),
  rating: varchar("rating").notNull(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});
