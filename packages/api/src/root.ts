import { authRouter } from "./router/auth";
import { casesRouter } from "./router/cases/index";
// import { postRouter } from "./router/post";
import { createTRPCRouter } from "./trpc";

export const appRouter = createTRPCRouter({
  auth: authRouter,
  // post: postRouter,
  cases: casesRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
