import { z } from "zod";
export const contactSchema = z.object({ name: z.string().trim().min(2).max(80), email: z.string().trim().email().max(160), subject: z.string().trim().min(2).max(160), message: z.string().trim().min(10).max(5000) });
export const projectSchema = z.object({ title: z.string().min(2).max(120), slug: z.string().regex(/^[a-z0-9-]+$/), description: z.string().min(10), category: z.string().min(2), liveUrl: z.string().url(), githubUrl: z.string().url().optional().or(z.literal("")), featured: z.boolean().default(true), sortOrder: z.number().int().default(0) });
export const technologySchema = z.object({ name: z.string().min(1).max(80), category: z.string().min(1), description: z.string().min(2), icon: z.string().optional().or(z.literal("")), sortOrder: z.number().int().default(0) });
export const experienceSchema = z.object({ company: z.string().min(1), position: z.string().min(1), location: z.string().min(1), duration: z.string().min(1), description: z.string().min(10), sortOrder: z.number().int().default(0) });
export const json = (data: unknown, init?: ResponseInit) => Response.json(data, init);
