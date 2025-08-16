import * as SecureStore from "expo-secure-store";
import { expoClient } from "@better-auth/expo/client";
import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

import { ac, adminRole, lawyerRole, userRole } from "@acme/auth/permission";

import { getBaseUrl } from "./base-url";

console.log("getBaseUrl", getBaseUrl());

export const authClient = createAuthClient({
  baseURL: getBaseUrl(),
  plugins: [
    expoClient({
      scheme: "expo",
      storagePrefix: "expo",
      storage: SecureStore,
    }),
    adminClient({
      ac,
      roles: {
        admin: adminRole,
        lawyer: lawyerRole,
        user: userRole,
      },
    }),
  ],
});
