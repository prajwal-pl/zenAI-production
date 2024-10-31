import {
  integer,
  pgEnum,
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
} from "drizzle-orm/pg-core";
import { relations } from "drizzle-orm";

export const user = pgTable("user", {
  id: serial("id").primaryKey().notNull(),
  email: varchar("email").notNull().unique(),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
});

export const mockInterview = pgTable("mockInterview", {
  id: serial("id").primaryKey().notNull(),
  jsonMockResp: text("jsonMockResp").notNull(),
  jobPosition: varchar("jobPosition").notNull(),
  jobDesc: varchar("jobDesc").notNull(),
  jobExperience: varchar("jobExperience").notNull(),
  createdBy: integer("createdBy")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  createdAt: timestamp("createdAt").notNull().defaultNow(),
  mockId: varchar("mockId").notNull().unique(),
});

export const userRelations = relations(user, ({ many }) => ({
  mockInterviews: many(mockInterview),
}));

export const mockInterviewRelations = relations(mockInterview, ({ one }) => ({
  user: one(user, {
    fields: [mockInterview.createdBy],
    references: [user.id],
  }),
}));
