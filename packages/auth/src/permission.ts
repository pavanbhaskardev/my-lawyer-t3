import { createAccessControl } from "better-auth/plugins/access";
import { adminAc, defaultStatements } from "better-auth/plugins/admin/access";

const statement = {
  ...defaultStatements,
  project: ["create", "share", "update", "delete"],
} as const;

const ac = createAccessControl(statement);

const adminRole = ac.newRole({
  ...adminAc.statements,
});

const lawyerRole = ac.newRole({
  user: [],
  session: [],
});

const userRole = ac.newRole({
  user: [],
  session: [],
});

export { adminRole, lawyerRole, userRole, ac };
