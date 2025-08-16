import { z } from "zod/v4";

export const CreateCaseSchema = z.object({
  name: z.string().min(1),
  description: z.string().min(1).optional(),
});
