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
