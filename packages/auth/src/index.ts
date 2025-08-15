import type { BetterAuthOptions } from "better-auth";
import { expo } from "@better-auth/expo";
import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { admin, oAuthProxy } from "better-auth/plugins";
import { MongoClient } from "mongodb";

import { adminRole, lawyerRole, userRole } from "./permission";

export function initAuth(options: {
  baseUrl: string;
  productionUrl: string;
  secret: string | undefined;
  googleClientId: string;
  googleClientSecret: string;
  databaseUrl: string;
}) {
  const client = new MongoClient(options.databaseUrl);
  const db = client.db();

  const config = {
    database: mongodbAdapter(db),
    baseURL: options.baseUrl,
    secret: options.secret,
    plugins: [
      oAuthProxy({
        /**
         * Auto-inference blocked by https://github.com/better-auth/better-auth/pull/2891
         */
        currentURL: options.baseUrl,
        productionURL: options.productionUrl,
      }),
      expo(),
      admin({
        roles: {
          admin: adminRole,
          lawyer: lawyerRole,
          user: userRole,
        },
        defaultRole: "user",
        adminRoles: ["admin"],
      }),
    ],
    socialProviders: {
      google: {
        clientId: options.googleClientId,
        clientSecret: options.googleClientSecret,
        redirectURI: `${options.productionUrl}/api/auth/callback/google`,
      },
    },
    trustedOrigins: ["expo://", "exp://"],
  } satisfies BetterAuthOptions;

  return betterAuth(config);
}

export type Auth = ReturnType<typeof initAuth>;
export type Session = Auth["$Infer"]["Session"];
