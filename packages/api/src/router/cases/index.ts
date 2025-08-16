// import { z } from "zod/v4";

// import { desc, eq } from "@acme/db";
// import { CreatePostSchema, Post } from "@acme/db/schema";

import type { TRPCRouterRecord } from "@trpc/server";

import type { Case } from "../../../payload-types";
import { adminProcedure, protectedProcedure } from "../../trpc";
import { CreateCaseSchema } from "./validator";

export const casesRouter = {
  all: protectedProcedure.query(async ({ ctx }) => {
    const { payload } = ctx;

    const { docs: cases } = await payload.find({
      collection: "cases",
      pagination: false,
    });

    return cases as Case[];
  }),
  // byId: publicProcedure
  //   .input(z.object({ id: z.string() }))
  //   .query(({ ctx, input }) => {
  //     return ctx.db.query.Post.findFirst({
  //       where: eq(Post.id, input.id),
  //     });
  //   }),
  create: adminProcedure
    .input(CreateCaseSchema)
    .mutation(async ({ ctx, input }) => {
      const { payload } = ctx;
      const { name = "", description = "" } = input;

      const response = await payload.create({
        collection: "cases",
        data: {
          name,
          description,
        },
      });

      return response;
    }),
  // delete: protectedProcedure.input(z.string()).mutation(({ ctx, input }) => {
  //   return ctx.db.delete(Post).where(eq(Post.id, input));
  // }),
} satisfies TRPCRouterRecord;
